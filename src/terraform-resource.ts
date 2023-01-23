import {
  CustomResource, IResolvable,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TerraformResourceProvider, TerraformResourceProviderProps } from './provider';

export interface TerraformResourceProps extends TerraformResourceProviderProps {
  readonly resourceType: string;
  readonly properties: { [key: string]: any } | IResolvable;
  readonly resourceMode: ResourceMode;
}

export enum ResourceMode {
  DATA = 'DATA',
  RESOURCE = 'RESOURCE',
}

export class TerraformResource extends Construct {
  public readonly resourceType: string;
  constructor(scope: Construct, id: string, props: TerraformResourceProps) {
    super(scope, id);
    const provider = TerraformResourceProvider.getOrCreate(this, {
      ...props,
    });
    this.resourceType = props.resourceType;

    new CustomResource(this, 'Resource', {
      serviceToken: provider.serviceToken,
      resourceType: `Custom::github@${this.resourceType}`,
      properties: {
        resourceMode: props.resourceMode,
        tfAttributes: props.properties,
      },
    });
  }
}
