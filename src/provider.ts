import * as path from 'path';
import {
  custom_resources,
  aws_lambda as lambda,
  aws_iam as iam,
  aws_secretsmanager as secrets,
  Duration,
} from 'aws-cdk-lib';

import { Construct } from 'constructs';

export interface TerraformResourceProviderProps {
  readonly providerConfigSecret: secrets.ISecret;
}

export class TerraformResourceProvider extends Construct {
  public readonly serviceToken: string;
  public static getOrCreate(scope: Construct, props: TerraformResourceProviderProps): TerraformResourceProvider {
    const providerId = 'TerraformCustomProvider';
    return scope.node.tryFindChild(providerId) as TerraformResourceProvider ?? new TerraformResourceProvider(scope, providerId, props);
  }

  constructor(scope: Construct, id: string, props: TerraformResourceProviderProps) {
    super(scope, id);

    const onEventHandler = new lambda.Function(this, 'handler', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../assets/handlers/index.lambda')),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: Duration.minutes(3),
      memorySize: 512,
      environment: {
        PROVIDER_CONFIG_SECRET_ID: props.providerConfigSecret.secretArn,
      },
    });
    onEventHandler.addToRolePolicy(new iam.PolicyStatement({
      actions: ['secretsmanager:GetSecretValue'],
      resources: [props.providerConfigSecret.secretArn],
    }));
    const provider = new custom_resources.Provider(this, 'TerraformProvider', {
      onEventHandler,
    });
    this.serviceToken = provider.serviceToken;
  }
}
