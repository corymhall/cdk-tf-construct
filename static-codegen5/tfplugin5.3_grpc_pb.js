// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Terraform Plugin RPC protocol version 5.3
//
// This file defines version 5.3 of the RPC protocol. To implement a plugin
// against this protocol, copy this definition into your own codebase and
// use protoc to generate stubs for your target language.
//
// This file will not be updated. Any minor versions of protocol 5 to follow
// should copy this file and modify the copy while maintaing backwards
// compatibility. Breaking changes, if any are required, will come
// in a subsequent major version with its own separate proto definition.
//
// Note that only the proto files included in a release tag of Terraform are
// official protocol releases. Proto files taken from other commits may include
// incomplete changes or features that did not make it into a final release.
// In all reasonable cases, plugin developers should take the proto file from
// the tag of the most recent release of Terraform, and not from the main
// branch or any other development branch.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var tfplugin5_3_pb = require('./tfplugin5.3_pb.js');

function serialize_tfplugin5_ApplyResourceChange_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ApplyResourceChange.Request)) {
    throw new Error('Expected argument of type tfplugin5.ApplyResourceChange.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ApplyResourceChange_Request(buffer_arg) {
  return tfplugin5_3_pb.ApplyResourceChange.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ApplyResourceChange_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ApplyResourceChange.Response)) {
    throw new Error('Expected argument of type tfplugin5.ApplyResourceChange.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ApplyResourceChange_Response(buffer_arg) {
  return tfplugin5_3_pb.ApplyResourceChange.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_Configure_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.Configure.Request)) {
    throw new Error('Expected argument of type tfplugin5.Configure.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_Configure_Request(buffer_arg) {
  return tfplugin5_3_pb.Configure.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_Configure_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.Configure.Response)) {
    throw new Error('Expected argument of type tfplugin5.Configure.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_Configure_Response(buffer_arg) {
  return tfplugin5_3_pb.Configure.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_GetProviderSchema_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.GetProviderSchema.Request)) {
    throw new Error('Expected argument of type tfplugin5.GetProviderSchema.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_GetProviderSchema_Request(buffer_arg) {
  return tfplugin5_3_pb.GetProviderSchema.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_GetProviderSchema_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.GetProviderSchema.Response)) {
    throw new Error('Expected argument of type tfplugin5.GetProviderSchema.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_GetProviderSchema_Response(buffer_arg) {
  return tfplugin5_3_pb.GetProviderSchema.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_GetProvisionerSchema_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.GetProvisionerSchema.Request)) {
    throw new Error('Expected argument of type tfplugin5.GetProvisionerSchema.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_GetProvisionerSchema_Request(buffer_arg) {
  return tfplugin5_3_pb.GetProvisionerSchema.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_GetProvisionerSchema_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.GetProvisionerSchema.Response)) {
    throw new Error('Expected argument of type tfplugin5.GetProvisionerSchema.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_GetProvisionerSchema_Response(buffer_arg) {
  return tfplugin5_3_pb.GetProvisionerSchema.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ImportResourceState_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ImportResourceState.Request)) {
    throw new Error('Expected argument of type tfplugin5.ImportResourceState.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ImportResourceState_Request(buffer_arg) {
  return tfplugin5_3_pb.ImportResourceState.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ImportResourceState_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ImportResourceState.Response)) {
    throw new Error('Expected argument of type tfplugin5.ImportResourceState.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ImportResourceState_Response(buffer_arg) {
  return tfplugin5_3_pb.ImportResourceState.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_PlanResourceChange_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.PlanResourceChange.Request)) {
    throw new Error('Expected argument of type tfplugin5.PlanResourceChange.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_PlanResourceChange_Request(buffer_arg) {
  return tfplugin5_3_pb.PlanResourceChange.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_PlanResourceChange_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.PlanResourceChange.Response)) {
    throw new Error('Expected argument of type tfplugin5.PlanResourceChange.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_PlanResourceChange_Response(buffer_arg) {
  return tfplugin5_3_pb.PlanResourceChange.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_PrepareProviderConfig_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.PrepareProviderConfig.Request)) {
    throw new Error('Expected argument of type tfplugin5.PrepareProviderConfig.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_PrepareProviderConfig_Request(buffer_arg) {
  return tfplugin5_3_pb.PrepareProviderConfig.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_PrepareProviderConfig_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.PrepareProviderConfig.Response)) {
    throw new Error('Expected argument of type tfplugin5.PrepareProviderConfig.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_PrepareProviderConfig_Response(buffer_arg) {
  return tfplugin5_3_pb.PrepareProviderConfig.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ProvisionResource_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ProvisionResource.Request)) {
    throw new Error('Expected argument of type tfplugin5.ProvisionResource.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ProvisionResource_Request(buffer_arg) {
  return tfplugin5_3_pb.ProvisionResource.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ProvisionResource_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ProvisionResource.Response)) {
    throw new Error('Expected argument of type tfplugin5.ProvisionResource.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ProvisionResource_Response(buffer_arg) {
  return tfplugin5_3_pb.ProvisionResource.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ReadDataSource_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ReadDataSource.Request)) {
    throw new Error('Expected argument of type tfplugin5.ReadDataSource.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ReadDataSource_Request(buffer_arg) {
  return tfplugin5_3_pb.ReadDataSource.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ReadDataSource_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ReadDataSource.Response)) {
    throw new Error('Expected argument of type tfplugin5.ReadDataSource.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ReadDataSource_Response(buffer_arg) {
  return tfplugin5_3_pb.ReadDataSource.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ReadResource_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ReadResource.Request)) {
    throw new Error('Expected argument of type tfplugin5.ReadResource.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ReadResource_Request(buffer_arg) {
  return tfplugin5_3_pb.ReadResource.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ReadResource_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ReadResource.Response)) {
    throw new Error('Expected argument of type tfplugin5.ReadResource.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ReadResource_Response(buffer_arg) {
  return tfplugin5_3_pb.ReadResource.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_Stop_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.Stop.Request)) {
    throw new Error('Expected argument of type tfplugin5.Stop.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_Stop_Request(buffer_arg) {
  return tfplugin5_3_pb.Stop.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_Stop_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.Stop.Response)) {
    throw new Error('Expected argument of type tfplugin5.Stop.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_Stop_Response(buffer_arg) {
  return tfplugin5_3_pb.Stop.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_UpgradeResourceState_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.UpgradeResourceState.Request)) {
    throw new Error('Expected argument of type tfplugin5.UpgradeResourceState.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_UpgradeResourceState_Request(buffer_arg) {
  return tfplugin5_3_pb.UpgradeResourceState.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_UpgradeResourceState_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.UpgradeResourceState.Response)) {
    throw new Error('Expected argument of type tfplugin5.UpgradeResourceState.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_UpgradeResourceState_Response(buffer_arg) {
  return tfplugin5_3_pb.UpgradeResourceState.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ValidateDataSourceConfig_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ValidateDataSourceConfig.Request)) {
    throw new Error('Expected argument of type tfplugin5.ValidateDataSourceConfig.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ValidateDataSourceConfig_Request(buffer_arg) {
  return tfplugin5_3_pb.ValidateDataSourceConfig.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ValidateDataSourceConfig_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ValidateDataSourceConfig.Response)) {
    throw new Error('Expected argument of type tfplugin5.ValidateDataSourceConfig.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ValidateDataSourceConfig_Response(buffer_arg) {
  return tfplugin5_3_pb.ValidateDataSourceConfig.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ValidateProvisionerConfig_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ValidateProvisionerConfig.Request)) {
    throw new Error('Expected argument of type tfplugin5.ValidateProvisionerConfig.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ValidateProvisionerConfig_Request(buffer_arg) {
  return tfplugin5_3_pb.ValidateProvisionerConfig.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ValidateProvisionerConfig_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ValidateProvisionerConfig.Response)) {
    throw new Error('Expected argument of type tfplugin5.ValidateProvisionerConfig.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ValidateProvisionerConfig_Response(buffer_arg) {
  return tfplugin5_3_pb.ValidateProvisionerConfig.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ValidateResourceTypeConfig_Request(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ValidateResourceTypeConfig.Request)) {
    throw new Error('Expected argument of type tfplugin5.ValidateResourceTypeConfig.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ValidateResourceTypeConfig_Request(buffer_arg) {
  return tfplugin5_3_pb.ValidateResourceTypeConfig.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tfplugin5_ValidateResourceTypeConfig_Response(arg) {
  if (!(arg instanceof tfplugin5_3_pb.ValidateResourceTypeConfig.Response)) {
    throw new Error('Expected argument of type tfplugin5.ValidateResourceTypeConfig.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tfplugin5_ValidateResourceTypeConfig_Response(buffer_arg) {
  return tfplugin5_3_pb.ValidateResourceTypeConfig.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProviderService = exports.ProviderService = {
  // ////// Information about what a provider supports/expects
getSchema: {
    path: '/tfplugin5.Provider/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.GetProviderSchema.Request,
    responseType: tfplugin5_3_pb.GetProviderSchema.Response,
    requestSerialize: serialize_tfplugin5_GetProviderSchema_Request,
    requestDeserialize: deserialize_tfplugin5_GetProviderSchema_Request,
    responseSerialize: serialize_tfplugin5_GetProviderSchema_Response,
    responseDeserialize: deserialize_tfplugin5_GetProviderSchema_Response,
  },
  prepareProviderConfig: {
    path: '/tfplugin5.Provider/PrepareProviderConfig',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.PrepareProviderConfig.Request,
    responseType: tfplugin5_3_pb.PrepareProviderConfig.Response,
    requestSerialize: serialize_tfplugin5_PrepareProviderConfig_Request,
    requestDeserialize: deserialize_tfplugin5_PrepareProviderConfig_Request,
    responseSerialize: serialize_tfplugin5_PrepareProviderConfig_Response,
    responseDeserialize: deserialize_tfplugin5_PrepareProviderConfig_Response,
  },
  validateResourceTypeConfig: {
    path: '/tfplugin5.Provider/ValidateResourceTypeConfig',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.ValidateResourceTypeConfig.Request,
    responseType: tfplugin5_3_pb.ValidateResourceTypeConfig.Response,
    requestSerialize: serialize_tfplugin5_ValidateResourceTypeConfig_Request,
    requestDeserialize: deserialize_tfplugin5_ValidateResourceTypeConfig_Request,
    responseSerialize: serialize_tfplugin5_ValidateResourceTypeConfig_Response,
    responseDeserialize: deserialize_tfplugin5_ValidateResourceTypeConfig_Response,
  },
  validateDataSourceConfig: {
    path: '/tfplugin5.Provider/ValidateDataSourceConfig',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.ValidateDataSourceConfig.Request,
    responseType: tfplugin5_3_pb.ValidateDataSourceConfig.Response,
    requestSerialize: serialize_tfplugin5_ValidateDataSourceConfig_Request,
    requestDeserialize: deserialize_tfplugin5_ValidateDataSourceConfig_Request,
    responseSerialize: serialize_tfplugin5_ValidateDataSourceConfig_Response,
    responseDeserialize: deserialize_tfplugin5_ValidateDataSourceConfig_Response,
  },
  upgradeResourceState: {
    path: '/tfplugin5.Provider/UpgradeResourceState',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.UpgradeResourceState.Request,
    responseType: tfplugin5_3_pb.UpgradeResourceState.Response,
    requestSerialize: serialize_tfplugin5_UpgradeResourceState_Request,
    requestDeserialize: deserialize_tfplugin5_UpgradeResourceState_Request,
    responseSerialize: serialize_tfplugin5_UpgradeResourceState_Response,
    responseDeserialize: deserialize_tfplugin5_UpgradeResourceState_Response,
  },
  // ////// One-time initialization, called before other functions below
configure: {
    path: '/tfplugin5.Provider/Configure',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.Configure.Request,
    responseType: tfplugin5_3_pb.Configure.Response,
    requestSerialize: serialize_tfplugin5_Configure_Request,
    requestDeserialize: deserialize_tfplugin5_Configure_Request,
    responseSerialize: serialize_tfplugin5_Configure_Response,
    responseDeserialize: deserialize_tfplugin5_Configure_Response,
  },
  // ////// Managed Resource Lifecycle
readResource: {
    path: '/tfplugin5.Provider/ReadResource',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.ReadResource.Request,
    responseType: tfplugin5_3_pb.ReadResource.Response,
    requestSerialize: serialize_tfplugin5_ReadResource_Request,
    requestDeserialize: deserialize_tfplugin5_ReadResource_Request,
    responseSerialize: serialize_tfplugin5_ReadResource_Response,
    responseDeserialize: deserialize_tfplugin5_ReadResource_Response,
  },
  planResourceChange: {
    path: '/tfplugin5.Provider/PlanResourceChange',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.PlanResourceChange.Request,
    responseType: tfplugin5_3_pb.PlanResourceChange.Response,
    requestSerialize: serialize_tfplugin5_PlanResourceChange_Request,
    requestDeserialize: deserialize_tfplugin5_PlanResourceChange_Request,
    responseSerialize: serialize_tfplugin5_PlanResourceChange_Response,
    responseDeserialize: deserialize_tfplugin5_PlanResourceChange_Response,
  },
  applyResourceChange: {
    path: '/tfplugin5.Provider/ApplyResourceChange',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.ApplyResourceChange.Request,
    responseType: tfplugin5_3_pb.ApplyResourceChange.Response,
    requestSerialize: serialize_tfplugin5_ApplyResourceChange_Request,
    requestDeserialize: deserialize_tfplugin5_ApplyResourceChange_Request,
    responseSerialize: serialize_tfplugin5_ApplyResourceChange_Response,
    responseDeserialize: deserialize_tfplugin5_ApplyResourceChange_Response,
  },
  importResourceState: {
    path: '/tfplugin5.Provider/ImportResourceState',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.ImportResourceState.Request,
    responseType: tfplugin5_3_pb.ImportResourceState.Response,
    requestSerialize: serialize_tfplugin5_ImportResourceState_Request,
    requestDeserialize: deserialize_tfplugin5_ImportResourceState_Request,
    responseSerialize: serialize_tfplugin5_ImportResourceState_Response,
    responseDeserialize: deserialize_tfplugin5_ImportResourceState_Response,
  },
  readDataSource: {
    path: '/tfplugin5.Provider/ReadDataSource',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.ReadDataSource.Request,
    responseType: tfplugin5_3_pb.ReadDataSource.Response,
    requestSerialize: serialize_tfplugin5_ReadDataSource_Request,
    requestDeserialize: deserialize_tfplugin5_ReadDataSource_Request,
    responseSerialize: serialize_tfplugin5_ReadDataSource_Response,
    responseDeserialize: deserialize_tfplugin5_ReadDataSource_Response,
  },
  // ////// Graceful Shutdown
stop: {
    path: '/tfplugin5.Provider/Stop',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.Stop.Request,
    responseType: tfplugin5_3_pb.Stop.Response,
    requestSerialize: serialize_tfplugin5_Stop_Request,
    requestDeserialize: deserialize_tfplugin5_Stop_Request,
    responseSerialize: serialize_tfplugin5_Stop_Response,
    responseDeserialize: deserialize_tfplugin5_Stop_Response,
  },
};

exports.ProviderClient = grpc.makeGenericClientConstructor(ProviderService);
var ProvisionerService = exports.ProvisionerService = {
  getSchema: {
    path: '/tfplugin5.Provisioner/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.GetProvisionerSchema.Request,
    responseType: tfplugin5_3_pb.GetProvisionerSchema.Response,
    requestSerialize: serialize_tfplugin5_GetProvisionerSchema_Request,
    requestDeserialize: deserialize_tfplugin5_GetProvisionerSchema_Request,
    responseSerialize: serialize_tfplugin5_GetProvisionerSchema_Response,
    responseDeserialize: deserialize_tfplugin5_GetProvisionerSchema_Response,
  },
  validateProvisionerConfig: {
    path: '/tfplugin5.Provisioner/ValidateProvisionerConfig',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.ValidateProvisionerConfig.Request,
    responseType: tfplugin5_3_pb.ValidateProvisionerConfig.Response,
    requestSerialize: serialize_tfplugin5_ValidateProvisionerConfig_Request,
    requestDeserialize: deserialize_tfplugin5_ValidateProvisionerConfig_Request,
    responseSerialize: serialize_tfplugin5_ValidateProvisionerConfig_Response,
    responseDeserialize: deserialize_tfplugin5_ValidateProvisionerConfig_Response,
  },
  provisionResource: {
    path: '/tfplugin5.Provisioner/ProvisionResource',
    requestStream: false,
    responseStream: true,
    requestType: tfplugin5_3_pb.ProvisionResource.Request,
    responseType: tfplugin5_3_pb.ProvisionResource.Response,
    requestSerialize: serialize_tfplugin5_ProvisionResource_Request,
    requestDeserialize: deserialize_tfplugin5_ProvisionResource_Request,
    responseSerialize: serialize_tfplugin5_ProvisionResource_Response,
    responseDeserialize: deserialize_tfplugin5_ProvisionResource_Response,
  },
  stop: {
    path: '/tfplugin5.Provisioner/Stop',
    requestStream: false,
    responseStream: false,
    requestType: tfplugin5_3_pb.Stop.Request,
    responseType: tfplugin5_3_pb.Stop.Response,
    requestSerialize: serialize_tfplugin5_Stop_Request,
    requestDeserialize: deserialize_tfplugin5_Stop_Request,
    responseSerialize: serialize_tfplugin5_Stop_Response,
    responseDeserialize: deserialize_tfplugin5_Stop_Response,
  },
};

exports.ProvisionerClient = grpc.makeGenericClientConstructor(ProvisionerService);
