import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'corymhall',
  authorAddress: 'user@domain.com',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-tf-construct',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/corymhall/cdk-tf-construct.git',
  release: false,
  depsUpgrade: false,
  buildWorkflow: false,
  deps: [
    'constructs',
    'aws-cdk-lib',
  ],
  devDeps: [
    '@aws-sdk/client-secrets-manager',
    'cdktf',
    '@mrgrain/cdk-esbuild@3',
    '@grpc/grpc-js',
    'google-protobuf',
    'msgpack-lite',
    '@cdktf/provider-aws',
    '@cdktf/provider-github',
    '@types/msgpack-lite',
    '@types/google-protobuf',
    '@types/aws-lambda',
    '@aws-cdk/integ-tests-alpha',
    '@aws-cdk/integ-runner@2.60.0',
    'aws-cdk@2.60.0',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.tsconfigDev.addInclude('static-codegen5/*.ts');

project.addTask('integ', {
  description: 'Run integration snapshot tests',
  exec: 'yarn integ-runner --language typescript',
});

project.addTask('integ:update', {
  description: 'Run and update integration snapshot tests',
  exec: 'yarn integ-runner --language typescript --update-on-failed',
});

const generateJsProto = 'grpc_tools_node_protoc --js_out=import_style=commonjs,binary:static-codegen5/ --grpc_out=grpc_js:static-codegen5 tfplugin5.3.proto';
const generateTsProto = 'protoc --plugin=$(which protoc-gen-ts) --ts_out=static-codegen5 tfplugin5.3.proto';

project.addTask('proto:generate', {
  steps: [
    {
      name: 'download proto',
      exec: 'curl -OL https://raw.githubusercontent.com/hashicorp/terraform/main/docs/plugin-protocol/tfplugin5.3.proto',
    },
    {
      name: 'mkdir',
      exec: 'mkdir static-codegen5',
    },
    {
      name: 'generate .js proto',
      exec: generateJsProto,
    },
    {
      name: 'generate .ts proto',
      exec: generateTsProto,
    },
  ],
});

const bundle = project.addTask('bundle:handler', {
  steps: [
    {
      exec: 'esbuild --bundle src/handlers/index.ts --target="node14" --platform="node" --outfile="assets/handlers/index.lambda/index.js" --tsconfig="tsconfig.dev.json" --external:@aws-sdk/*',
    },
  ],
});
const providerDownload = project.addTask('provider:download', {
  condition: 'if [ -f "assets/handlers/index.lambda/.bin/terraform-provider-github" ]; then exit 1; fi',
  steps: [
    {
      exec: 'curl -OL https://releases.hashicorp.com/terraform-provider-github/5.16.0/terraform-provider-github_5.16.0_linux_amd64.zip',
    },
    {
      exec: 'unzip terraform-provider-github_5.16.0_linux_amd64.zip -d assets/handlers/index.lambda/.bin &&'+
      'mv assets/handlers/index.lambda/.bin/terraform-provider-github_v5.16.0 assets/handlers/index.lambda/.bin/terraform-provider-github',
    },
    {
      exec: 'rm -rf terraform-provider-github_5.16.0_linux_amd64.zip',
    },
  ],
});
bundle.spawn(providerDownload);
project.preCompileTask.spawn(bundle);
project.gitignore.exclude('assets/**/CHANGELOG.md');
project.gitignore.exclude('assets/**/README.md');
project.gitignore.exclude('assets/**/LICENSE');
project.synth();
