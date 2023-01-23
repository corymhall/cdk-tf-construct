// eslint-disable-next-line
import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { Stack, App, aws_secretsmanager as secrets } from 'aws-cdk-lib';
import { GitHubRepo } from '../src';

const app = new App();

const testCase = new Stack(app, 'integ-github-resource-test', {
  env: {
    region: 'us-east-1',
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

const secret = secrets.Secret.fromSecretCompleteArn(testCase, 'ProviderConfig', process.env.GITHUB_SECRET_ARN!);

new GitHubRepo(testCase, 'MyRepo', {
  providerConfigSecret: secret,
  repoProps: {
    name: 'my-test-repo-123',
  },
});

new IntegTest(app, 'integ-test', {
  testCases: [testCase],
});
