import { encode, createCodec, decode } from 'msgpack-lite';
import { Provider } from './provider';
import * as config from '../../static-codegen5/tfplugin5.3_pb';
class Unknown {}
const codec = createCodec();
codec.addExtPacker(0, Unknown, () => { return encode([0]); } );
codec.addExtUnpacker(0, () => { return new Unknown; });

export interface DeploymentOptions {
  readonly provider: Provider;
  readonly resourceType: string;
  readonly resourceOrDataType: 'DATA' | 'RESOURCE';
  readonly newCfnState?: { [key: string]: any };
  readonly id?: string;
  readonly oldCfnState?: { [key: string]: any };
}

interface PlanResponse {
  readonly requiresReplaceList?: string[];
  readonly plannedState: config.DynamicValue;
}

export class Deployment {
  private readonly schema: { [key: string]: any };
  private readonly provider: Provider;
  private readonly resourceType: string;
  private readonly resourceEventType: 'DATA' | 'RESOURCE';
  private readonly oldState: config.DynamicValue;
  private readonly newState: config.DynamicValue;
  private readonly id?: string;
  constructor(options: DeploymentOptions) {
    this.provider = options.provider;
    this.resourceType = options.resourceType;
    this.resourceEventType = options.resourceOrDataType;
    this.id = options.id;
    this.schema = options.resourceOrDataType === 'DATA'
      ? this.provider.dataSchemaToCfn(this.resourceType)
      : this.provider.resourceSchemaToCfn(this.resourceType);
    if (!this.schema) {
      throw new Error(`Cannot find schema for resource type ${this.resourceType}`);
    }
    if (options.oldCfnState) {
      this.oldState = this.convertCfnToTerraformState(options.oldCfnState);
    } else {
      this.oldState = getDynamicValue({});
    }

    if (options.newCfnState) {
      this.newState = this.convertCfnToTerraformState(options.newCfnState);
    } else {
      this.newState = getDynamicValue({});
    }

    console.log('State: ', JSON.stringify({
      newState: this.newState,
      newStateCfn: options.newCfnState,
    }));
  }

  public async deploy(): Promise<{ [key: string]: any }> {
    try {
      await this.validateConfig(this.newState);
    } catch (e) {
      console.error('Resource validation failed: ', e);
      throw e;
    }
    if (this.resourceEventType === 'RESOURCE') {
      const plan = await this.planResourceChange();
      console.error('Plan\n', decodeDynamicValue(plan.plannedState));
      console.error('RequiresReplace\n', plan.requiresReplaceList);
      if ((plan.requiresReplaceList ?? []).length > 0) {
        console.log('Resource requires replacement');
        await this.applyResourceChange(new config.DynamicValue().setMsgpack(encode(undefined)));
      }
      const resp = await this.applyResourceChange(plan.plannedState);

      return resp;
      // return {};
    } else {
      const resp = await this.readDataSource();
      return resp;
    }
  }

  private convertCfnToTerraformState(
    cfnState: { [key: string]: any } | config.DynamicValue,
    asState?: boolean,
  ): config.DynamicValue {
    const finalConfig = Object.keys(this.schema).reduce((acc: { [key: string]: any }, prev) => {
      acc[prev] = undefined;
      return acc;
    }, {});
    let entries = cfnState;
    if (cfnState instanceof config.DynamicValue) {
      entries = decode(Buffer.from(cfnState.getMsgpack()), { codec });
    }
    for (const [key, value] of Object.entries(entries)) {
      finalConfig[key] = value;
    }
    if (asState && this.id) {
      finalConfig.id = this.id;
    }
    return getDynamicValue(finalConfig);
  }

  private parseDiagnosticsList(
    diagnostics: config.Diagnostic.AsObject[],
    severity?: config.Diagnostic.Severity[],
  ): config.Diagnostic.AsObject[] {
    const severities = severity ?? [
      config.Diagnostic.Severity.ERROR,
      config.Diagnostic.Severity.INVALID,
    ];
    return diagnostics.reduce((acc, prev) => {
      if (severities.includes(prev.severity)) {
        acc.push(prev);
      }
      return acc;
    }, [] as config.Diagnostic.AsObject[]);
  }

  private async validateConfig(conf: config.DynamicValue): Promise<void> {
    const request = new config.ValidateResourceTypeConfig.Request()
      .setConfig(conf)
      .setTypeName(this.resourceType);
    return new Promise<void>((resolve, reject) => {
      this.provider.client.validateResourceTypeConfig(request, (err: any, resp: config.ValidateResourceTypeConfig.Response) => {
        if (err && err !== null) {
          reject(`Error validating config: ${err}`);
        }
        const respObject = resp.toObject();
        const diagnostics = this.parseDiagnosticsList(respObject.diagnosticsList);
        if (diagnostics.length > 0) {
          reject(`Resource validation failed for resource ${this.resourceType}: \n` +
          `Error: ${formatDiagnostic(diagnostics)}`);
        }
        resolve();
      });
    });
  }

  private async planResourceChange(): Promise<PlanResponse> {
    const newState = this.convertCfnToTerraformState(this.newState, true);
    const oldState = this.convertCfnToTerraformState(this.oldState, true);
    const request = new config.PlanResourceChange.Request()
      .setConfig(newState)
      .setPriorState(oldState)
      .setTypeName(this.resourceType)
      .setProposedNewState(newState);
    return new Promise((resolve, reject) => {
      this.provider.client.planResourceChange(request, (err: any, resp: config.PlanResourceChange.Response) => {
        if (err && err !== null) {
          reject(`Error planning resource change: ${err}`);
        }
        const respObject = resp.toObject();
        const diagnostics = this.parseDiagnosticsList(respObject.diagnosticsList);
        if (diagnostics.length > 0) {
          reject(`Plan failed for resource ${this.resourceType}: \n` +
            `Error: ${formatDiagnostic(diagnostics)}`);
        }
        const requiresReplaceList = respObject.requiresReplaceList.flatMap(r => r.stepsList.map(s => s.attributeName));
        const plannedState = resp.getPlannedState();
        if (!plannedState) {
          reject(`Plan failed! No planned state exists for resource ${this.resourceType}`);
        }
        resolve({
          requiresReplaceList,
          plannedState: plannedState!,
        });
      });
    });
  }

  public async applyResourceChange(plan: config.DynamicValue): Promise<{ [key: string]: any }> {
    const request = new config.ApplyResourceChange.Request()
      .setTypeName(this.resourceType)
      .setConfig(plan)
      .setPriorState(this.convertCfnToTerraformState(this.oldState, true))
      .setPlannedState(plan);
    return new Promise((resolve, reject) => {
      this.provider.client.applyResourceChange(request, (err: any, resp: config.ApplyResourceChange.Response) => {
        if (err && err !== null) {
          reject(`Error applying resource change: ${err}`);
        }
        const respObject = resp.toObject();
        const diagnostics = this.parseDiagnosticsList(respObject.diagnosticsList, [
          config.Diagnostic.Severity.ERROR,
          config.Diagnostic.Severity.INVALID,
          config.Diagnostic.Severity.WARNING,
        ]);
        if (diagnostics.length > 0) {
          reject(`Apply failed for resource ${this.resourceType}: \n` +
            `Error: ${formatDiagnostic(diagnostics)}`);
        }
        const state = resp.getNewState();
        if (state) {
          const r = decode(Buffer.from(state.getMsgpack()));
          resolve(r);
        }
      });
    });
  }

  private async readDataSource(): Promise<any> {
    const request = new config.ReadDataSource.Request()
      .setTypeName(this.resourceType)
      .setConfig(this.newState);
    return new Promise((resolve, reject) => {
      this.provider.client.readDataSource(request, (err: any, resp: config.ReadDataSource.Response) => {
        if (err && err !== null) reject(err);
        const diag = resp.getDiagnosticsList();
        if (diag.length > 0) reject(diag.map(d => d.toObject()));
        const state = resp.getState();
        if (state) {
          const r = decode(Buffer.from(state.getMsgpack()));
          resolve(r);
        }
      });
    });
  }
}

function formatDiagnostic(diagnostic: config.Diagnostic.AsObject[]): string {
  return JSON.stringify({
    errors: diagnostic.map(d => {
      return {
        attribute: d.attribute?.stepsList?.map(a => a.attributeName),
        ...d,
      };
    }),
  });
}

function getDynamicValue(value: { [key: string]: any }): config.DynamicValue {
  return new config.DynamicValue().setJson(Buffer.from(JSON.stringify(value), 'utf-8'))
    .setMsgpack(encode(value, { codec } ));
}

export function decodeDynamicValue(value: config.DynamicValue): any {
  return decode(Buffer.from(value.getMsgpack()), { codec });
}
