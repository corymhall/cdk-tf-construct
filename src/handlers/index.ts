// eslint-disable-next-line import/no-extraneous-dependencies
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { encode, createCodec } from 'msgpack-lite';
import { Deployment } from './deployment';
import { Provider } from './provider';
import * as config from '../../static-codegen5/tfplugin5.3_pb';

interface ProviderConfig {
  token: string;
  owner: string;
  base_url?: string;
  insecure?: string;
  write_delay_ms?: number;
  read_delay_ms?: number;
  app_auth?: any;
  organization?: string;
}

async function getProviderConfig(secretId: string): Promise<ProviderConfig> {
  const client = new SecretsManagerClient({ });
  const command = new GetSecretValueCommand({
    SecretId: secretId,
  });
  try {
    const data = await client.send(command);
    const jsonResponse: ProviderConfig = JSON.parse(data.SecretString!);
    // TODO: get this from the provider
    return {
      owner: jsonResponse.owner,
      token: jsonResponse.token,
      app_auth: jsonResponse.app_auth ?? undefined,
      base_url: jsonResponse.base_url ?? undefined,
      insecure: jsonResponse.insecure ?? undefined,
      organization: jsonResponse.organization ?? undefined,
      read_delay_ms: jsonResponse.read_delay_ms ?? undefined,
      write_delay_ms: jsonResponse.write_delay_ms ?? undefined,
    };

  } catch (e) {
    throw new Error(`Not a valid provider config ${e}`);
  }
}


function getDynamicValue(value: { [key: string]: any }): config.DynamicValue {
  return new config.DynamicValue().setJson(Buffer.from(JSON.stringify(value), 'utf-8'))
    .setMsgpack(encode(value, { codec: createCodec() }));
}

export async function handler(event: AWSLambda.CloudFormationCustomResourceEvent) {
  console.log('event: ', JSON.stringify(event));
  let oldAttributes: { [key: string]: any } | undefined;
  let physicalResourceId: string | undefined = undefined;
  let attributes: { [key: string]: any } | undefined = event.ResourceProperties.tfAttributes;
  const providerConfig = await getProviderConfig(process.env.PROVIDER_CONFIG_SECRET_ID!);
  switch (event.RequestType) {
    case 'Delete':
      attributes = undefined;
      break;
    case 'Update':
      oldAttributes = event.OldResourceProperties.tfAttributes;
      physicalResourceId = event.PhysicalResourceId;
  }

  const tfInfo = event.ResourceType.split('::')[1].split('@');
  const tfProviderName = tfInfo[0];
  const tfResourceName = tfInfo[1];
  const tfType = event.ResourceProperties.resourceMode ?? 'DATA'; // TODO: need a better name

  const provider = new Provider(tfProviderName);
  console.log('Provider created');
  await provider.start();
  console.log('provider started');
  console.log('providerConfig: ', JSON.stringify(providerConfig));

  try {
    await provider.loadSchemas();
    console.log('configuring provider');
    await provider.configure(getDynamicValue(providerConfig));
    const deployment = new Deployment({
      provider,
      id: physicalResourceId,
      resourceOrDataType: tfType,
      resourceType: tfResourceName,
      newCfnState: attributes,
      oldCfnState: oldAttributes,
    });
    const resp = await deployment.deploy();
    console.error('resp: ', resp);
    return {
      PhysicalResourceId: resp.id,
      Data: resp,
    };
  } finally {
    provider.stop();
  }
}
