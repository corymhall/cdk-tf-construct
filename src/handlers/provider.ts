import { ChildProcessByStdio, spawn, SpawnOptions } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { Readable } from 'stream';
import * as grpc from '@grpc/grpc-js';
import * as jspb from 'google-protobuf';
import * as services from '../../static-codegen5/tfplugin5.3_grpc_pb';
import * as config from '../../static-codegen5/tfplugin5.3_pb';

export class Provider {
  private _client?: services.ProviderClient;
  private path?: string;
  private _resourceSchemasMap: jspb.Map<string, config.Schema> | undefined;
  private _dataSchemasMap: jspb.Map<string, config.Schema> | undefined;
  private readonly child: ChildProcessByStdio<null, Readable, null>;
  constructor(_providerName: string) {
    const pluginPath = path.join(__dirname, '.bin', 'terraform-provider-github');
    this.child = shell([pluginPath], {
      env: {
        PLUGIN_TRANSPORTS: 'unix,tcp',
        PLUGIN_MAX_PORT: '25000',
        PLUGIN_MIN_PORT: '10000',
        PLUGIN_PROTOCOL_VERSIONS: '5',
        TF_PLUGIN_MAGIC_COOKIE: 'd602bf8f470bc67ca7faa0386276bbdd4330efaf76d1a219cb4d6991ca9872b2',
        // TF_LOG: 'TRACE',
        // TF_LOG_LEVEL: 'VERBOSE',
      },
    });
  }

  public async start(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.child.stdout.on('data', (chunk: any) => {
        const res = Buffer.from(chunk).toString('utf-8');
        this.path = res.split('|')[3];
        this._client = new services.ProviderClient(`unix://${this.path}`, grpc.credentials.createInsecure());
        resolve();
      });

      this.child.once('error', (err: Error) => {
        reject(err);
      });

      this.child.once('exit', code => {
        if (code === 0) {
          this.stop();

        } else {
          reject(`command exited with error code ${code}`);
        }
      });
    });
  }

  public stop(): void {
    this.client.stop(new config.Stop.Request(), (err: any, _resp: config.Stop.Response) => {
      this.child.kill();
      if (this.path) fs.rmSync(this.path);
      if (err) {
        console.error('stop had an error %s', err);
        throw new Error(err);
      }
    });
  }

  public get client(): services.ProviderClient {
    if (!this._client) {
      throw new Error('client has not been created yet!');
    }
    return this._client;
  }

  public async configure(opts: config.DynamicValue): Promise<void> {
    const configRequest = new config.Configure.Request()
      .setConfig(opts);
    await new Promise<void>((resolve, reject) => {
      this.client.configure(configRequest, (err: any, resp: config.Configure.Response) => {
        if (err) reject(err);
        if (resp.getDiagnosticsList().length > 0) {
          reject(resp.getDiagnosticsList());
        }
        resolve();
      });
    });
    await this.loadSchemas();
  }

  public resourceSchemaToCfn(resourceType: string): { [key: string]: config.Schema.Attribute.AsObject[] } {
    const cfn: { [key: string]: config.Schema.Attribute.AsObject[] } = {};
    if (this._resourceSchemasMap && this._resourceSchemasMap.has(resourceType)) {
      const block = this._resourceSchemasMap.get(resourceType)?.getBlock();
      block?.getAttributesList().forEach(att => {
        cfn[att.getName()] = [att.toObject()];
      });
      block?.getBlockTypesList().forEach(att => {
        cfn[att.getTypeName()] = att.toObject().block?.attributesList ?? [];
      });
    }

    return cfn;
  }

  public dataSchemaToCfn(resourceType: string): { [key: string]: config.Schema.Attribute.AsObject[] } {
    const cfn: { [key: string]: config.Schema.Attribute.AsObject[] } = {};
    if (this._dataSchemasMap && this._dataSchemasMap.has(resourceType)) {
      const block = this._dataSchemasMap.get(resourceType)?.getBlock();
      block?.getAttributesList().forEach(att => {
        cfn[att.getName()] = [att.toObject()];
      });
      block?.getBlockTypesList().forEach(att => {
        cfn[att.getTypeName()] = att.toObject().block?.attributesList ?? [];
      });
    }

    return cfn;
  }

  public async loadSchemas(): Promise<void> {
    const request = new config.GetProviderSchema.Request();
    return new Promise((resolve, reject) => {
      this.client.getSchema(request, (err: any, resp: config.GetProviderSchema.Response) => {
        if (err) reject(err);
        const providerConfig = resp.getProvider();
        console.log('providerConfig', providerConfig?.toObject().block);
        this._dataSchemasMap = resp.getDataSourceSchemasMap();
        this._resourceSchemasMap = resp.getResourceSchemasMap();
        resolve();
      });
    });
  }
}

/**
 * Our own execute function which doesn't use shells and strings.
 */
export function shell(command: string[], opts: SpawnOptions): ChildProcessByStdio<null, Readable, null> {
  const child = spawn(command[0], command.slice(1), {
    env: {
      ...process.env,
      ...opts.env,
    },
    cwd: __dirname,
    stdio: ['ignore', 'pipe', 'inherit'],
  });

  return child;

}
