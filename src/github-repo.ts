import * as tfgithub from '@cdktf/provider-github';
import * as secrets from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { ResourceMode, TerraformResource } from './terraform-resource';

export interface GitHubRepoProps {
  repoProps: tfgithub.repository.RepositoryConfig;
  providerConfigSecret: secrets.ISecret;
}


export class GitHubRepo extends Construct {
  constructor(scope: Construct, id: string, props: GitHubRepoProps) {
    super(scope, id);
    new TerraformResource(this, 'Repo', {
      resourceType: tfgithub.repository.Repository.tfResourceType,
      properties: props.repoProps,
      providerConfigSecret: props.providerConfigSecret,
      resourceMode: ResourceMode.RESOURCE,
    });
  }
}
