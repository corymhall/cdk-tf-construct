// package: tfplugin5
// file: tfplugin5.3.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as tfplugin5_3_pb from "./tfplugin5.3_pb";

interface IProviderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSchema: IProviderService_IGetSchema;
    prepareProviderConfig: IProviderService_IPrepareProviderConfig;
    validateResourceTypeConfig: IProviderService_IValidateResourceTypeConfig;
    validateDataSourceConfig: IProviderService_IValidateDataSourceConfig;
    upgradeResourceState: IProviderService_IUpgradeResourceState;
    configure: IProviderService_IConfigure;
    readResource: IProviderService_IReadResource;
    planResourceChange: IProviderService_IPlanResourceChange;
    applyResourceChange: IProviderService_IApplyResourceChange;
    importResourceState: IProviderService_IImportResourceState;
    readDataSource: IProviderService_IReadDataSource;
    stop: IProviderService_IStop;
}

interface IProviderService_IGetSchema extends grpc.MethodDefinition<tfplugin5_3_pb.GetProviderSchema.Request, tfplugin5_3_pb.GetProviderSchema.Response> {
    path: "/tfplugin5.Provider/GetSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.GetProviderSchema.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.GetProviderSchema.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.GetProviderSchema.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.GetProviderSchema.Response>;
}
interface IProviderService_IPrepareProviderConfig extends grpc.MethodDefinition<tfplugin5_3_pb.PrepareProviderConfig.Request, tfplugin5_3_pb.PrepareProviderConfig.Response> {
    path: "/tfplugin5.Provider/PrepareProviderConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.PrepareProviderConfig.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.PrepareProviderConfig.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.PrepareProviderConfig.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.PrepareProviderConfig.Response>;
}
interface IProviderService_IValidateResourceTypeConfig extends grpc.MethodDefinition<tfplugin5_3_pb.ValidateResourceTypeConfig.Request, tfplugin5_3_pb.ValidateResourceTypeConfig.Response> {
    path: "/tfplugin5.Provider/ValidateResourceTypeConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ValidateResourceTypeConfig.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ValidateResourceTypeConfig.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ValidateResourceTypeConfig.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ValidateResourceTypeConfig.Response>;
}
interface IProviderService_IValidateDataSourceConfig extends grpc.MethodDefinition<tfplugin5_3_pb.ValidateDataSourceConfig.Request, tfplugin5_3_pb.ValidateDataSourceConfig.Response> {
    path: "/tfplugin5.Provider/ValidateDataSourceConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ValidateDataSourceConfig.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ValidateDataSourceConfig.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ValidateDataSourceConfig.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ValidateDataSourceConfig.Response>;
}
interface IProviderService_IUpgradeResourceState extends grpc.MethodDefinition<tfplugin5_3_pb.UpgradeResourceState.Request, tfplugin5_3_pb.UpgradeResourceState.Response> {
    path: "/tfplugin5.Provider/UpgradeResourceState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.UpgradeResourceState.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.UpgradeResourceState.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.UpgradeResourceState.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.UpgradeResourceState.Response>;
}
interface IProviderService_IConfigure extends grpc.MethodDefinition<tfplugin5_3_pb.Configure.Request, tfplugin5_3_pb.Configure.Response> {
    path: "/tfplugin5.Provider/Configure";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.Configure.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.Configure.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.Configure.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.Configure.Response>;
}
interface IProviderService_IReadResource extends grpc.MethodDefinition<tfplugin5_3_pb.ReadResource.Request, tfplugin5_3_pb.ReadResource.Response> {
    path: "/tfplugin5.Provider/ReadResource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ReadResource.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ReadResource.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ReadResource.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ReadResource.Response>;
}
interface IProviderService_IPlanResourceChange extends grpc.MethodDefinition<tfplugin5_3_pb.PlanResourceChange.Request, tfplugin5_3_pb.PlanResourceChange.Response> {
    path: "/tfplugin5.Provider/PlanResourceChange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.PlanResourceChange.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.PlanResourceChange.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.PlanResourceChange.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.PlanResourceChange.Response>;
}
interface IProviderService_IApplyResourceChange extends grpc.MethodDefinition<tfplugin5_3_pb.ApplyResourceChange.Request, tfplugin5_3_pb.ApplyResourceChange.Response> {
    path: "/tfplugin5.Provider/ApplyResourceChange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ApplyResourceChange.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ApplyResourceChange.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ApplyResourceChange.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ApplyResourceChange.Response>;
}
interface IProviderService_IImportResourceState extends grpc.MethodDefinition<tfplugin5_3_pb.ImportResourceState.Request, tfplugin5_3_pb.ImportResourceState.Response> {
    path: "/tfplugin5.Provider/ImportResourceState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ImportResourceState.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ImportResourceState.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ImportResourceState.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ImportResourceState.Response>;
}
interface IProviderService_IReadDataSource extends grpc.MethodDefinition<tfplugin5_3_pb.ReadDataSource.Request, tfplugin5_3_pb.ReadDataSource.Response> {
    path: "/tfplugin5.Provider/ReadDataSource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ReadDataSource.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ReadDataSource.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ReadDataSource.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ReadDataSource.Response>;
}
interface IProviderService_IStop extends grpc.MethodDefinition<tfplugin5_3_pb.Stop.Request, tfplugin5_3_pb.Stop.Response> {
    path: "/tfplugin5.Provider/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.Stop.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.Stop.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.Stop.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.Stop.Response>;
}

export const ProviderService: IProviderService;

export interface IProviderServer {
    getSchema: grpc.handleUnaryCall<tfplugin5_3_pb.GetProviderSchema.Request, tfplugin5_3_pb.GetProviderSchema.Response>;
    prepareProviderConfig: grpc.handleUnaryCall<tfplugin5_3_pb.PrepareProviderConfig.Request, tfplugin5_3_pb.PrepareProviderConfig.Response>;
    validateResourceTypeConfig: grpc.handleUnaryCall<tfplugin5_3_pb.ValidateResourceTypeConfig.Request, tfplugin5_3_pb.ValidateResourceTypeConfig.Response>;
    validateDataSourceConfig: grpc.handleUnaryCall<tfplugin5_3_pb.ValidateDataSourceConfig.Request, tfplugin5_3_pb.ValidateDataSourceConfig.Response>;
    upgradeResourceState: grpc.handleUnaryCall<tfplugin5_3_pb.UpgradeResourceState.Request, tfplugin5_3_pb.UpgradeResourceState.Response>;
    configure: grpc.handleUnaryCall<tfplugin5_3_pb.Configure.Request, tfplugin5_3_pb.Configure.Response>;
    readResource: grpc.handleUnaryCall<tfplugin5_3_pb.ReadResource.Request, tfplugin5_3_pb.ReadResource.Response>;
    planResourceChange: grpc.handleUnaryCall<tfplugin5_3_pb.PlanResourceChange.Request, tfplugin5_3_pb.PlanResourceChange.Response>;
    applyResourceChange: grpc.handleUnaryCall<tfplugin5_3_pb.ApplyResourceChange.Request, tfplugin5_3_pb.ApplyResourceChange.Response>;
    importResourceState: grpc.handleUnaryCall<tfplugin5_3_pb.ImportResourceState.Request, tfplugin5_3_pb.ImportResourceState.Response>;
    readDataSource: grpc.handleUnaryCall<tfplugin5_3_pb.ReadDataSource.Request, tfplugin5_3_pb.ReadDataSource.Response>;
    stop: grpc.handleUnaryCall<tfplugin5_3_pb.Stop.Request, tfplugin5_3_pb.Stop.Response>;
}

export interface IProviderClient {
    getSchema(request: tfplugin5_3_pb.GetProviderSchema.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProviderSchema.Response) => void): grpc.ClientUnaryCall;
    getSchema(request: tfplugin5_3_pb.GetProviderSchema.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProviderSchema.Response) => void): grpc.ClientUnaryCall;
    getSchema(request: tfplugin5_3_pb.GetProviderSchema.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProviderSchema.Response) => void): grpc.ClientUnaryCall;
    prepareProviderConfig(request: tfplugin5_3_pb.PrepareProviderConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PrepareProviderConfig.Response) => void): grpc.ClientUnaryCall;
    prepareProviderConfig(request: tfplugin5_3_pb.PrepareProviderConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PrepareProviderConfig.Response) => void): grpc.ClientUnaryCall;
    prepareProviderConfig(request: tfplugin5_3_pb.PrepareProviderConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PrepareProviderConfig.Response) => void): grpc.ClientUnaryCall;
    validateResourceTypeConfig(request: tfplugin5_3_pb.ValidateResourceTypeConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateResourceTypeConfig.Response) => void): grpc.ClientUnaryCall;
    validateResourceTypeConfig(request: tfplugin5_3_pb.ValidateResourceTypeConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateResourceTypeConfig.Response) => void): grpc.ClientUnaryCall;
    validateResourceTypeConfig(request: tfplugin5_3_pb.ValidateResourceTypeConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateResourceTypeConfig.Response) => void): grpc.ClientUnaryCall;
    validateDataSourceConfig(request: tfplugin5_3_pb.ValidateDataSourceConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateDataSourceConfig.Response) => void): grpc.ClientUnaryCall;
    validateDataSourceConfig(request: tfplugin5_3_pb.ValidateDataSourceConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateDataSourceConfig.Response) => void): grpc.ClientUnaryCall;
    validateDataSourceConfig(request: tfplugin5_3_pb.ValidateDataSourceConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateDataSourceConfig.Response) => void): grpc.ClientUnaryCall;
    upgradeResourceState(request: tfplugin5_3_pb.UpgradeResourceState.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.UpgradeResourceState.Response) => void): grpc.ClientUnaryCall;
    upgradeResourceState(request: tfplugin5_3_pb.UpgradeResourceState.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.UpgradeResourceState.Response) => void): grpc.ClientUnaryCall;
    upgradeResourceState(request: tfplugin5_3_pb.UpgradeResourceState.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.UpgradeResourceState.Response) => void): grpc.ClientUnaryCall;
    configure(request: tfplugin5_3_pb.Configure.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Configure.Response) => void): grpc.ClientUnaryCall;
    configure(request: tfplugin5_3_pb.Configure.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Configure.Response) => void): grpc.ClientUnaryCall;
    configure(request: tfplugin5_3_pb.Configure.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Configure.Response) => void): grpc.ClientUnaryCall;
    readResource(request: tfplugin5_3_pb.ReadResource.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadResource.Response) => void): grpc.ClientUnaryCall;
    readResource(request: tfplugin5_3_pb.ReadResource.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadResource.Response) => void): grpc.ClientUnaryCall;
    readResource(request: tfplugin5_3_pb.ReadResource.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadResource.Response) => void): grpc.ClientUnaryCall;
    planResourceChange(request: tfplugin5_3_pb.PlanResourceChange.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PlanResourceChange.Response) => void): grpc.ClientUnaryCall;
    planResourceChange(request: tfplugin5_3_pb.PlanResourceChange.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PlanResourceChange.Response) => void): grpc.ClientUnaryCall;
    planResourceChange(request: tfplugin5_3_pb.PlanResourceChange.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PlanResourceChange.Response) => void): grpc.ClientUnaryCall;
    applyResourceChange(request: tfplugin5_3_pb.ApplyResourceChange.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ApplyResourceChange.Response) => void): grpc.ClientUnaryCall;
    applyResourceChange(request: tfplugin5_3_pb.ApplyResourceChange.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ApplyResourceChange.Response) => void): grpc.ClientUnaryCall;
    applyResourceChange(request: tfplugin5_3_pb.ApplyResourceChange.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ApplyResourceChange.Response) => void): grpc.ClientUnaryCall;
    importResourceState(request: tfplugin5_3_pb.ImportResourceState.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ImportResourceState.Response) => void): grpc.ClientUnaryCall;
    importResourceState(request: tfplugin5_3_pb.ImportResourceState.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ImportResourceState.Response) => void): grpc.ClientUnaryCall;
    importResourceState(request: tfplugin5_3_pb.ImportResourceState.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ImportResourceState.Response) => void): grpc.ClientUnaryCall;
    readDataSource(request: tfplugin5_3_pb.ReadDataSource.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadDataSource.Response) => void): grpc.ClientUnaryCall;
    readDataSource(request: tfplugin5_3_pb.ReadDataSource.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadDataSource.Response) => void): grpc.ClientUnaryCall;
    readDataSource(request: tfplugin5_3_pb.ReadDataSource.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadDataSource.Response) => void): grpc.ClientUnaryCall;
    stop(request: tfplugin5_3_pb.Stop.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
}

export class ProviderClient extends grpc.Client implements IProviderClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSchema(request: tfplugin5_3_pb.GetProviderSchema.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProviderSchema.Response) => void): grpc.ClientUnaryCall;
    public getSchema(request: tfplugin5_3_pb.GetProviderSchema.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProviderSchema.Response) => void): grpc.ClientUnaryCall;
    public getSchema(request: tfplugin5_3_pb.GetProviderSchema.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProviderSchema.Response) => void): grpc.ClientUnaryCall;
    public prepareProviderConfig(request: tfplugin5_3_pb.PrepareProviderConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PrepareProviderConfig.Response) => void): grpc.ClientUnaryCall;
    public prepareProviderConfig(request: tfplugin5_3_pb.PrepareProviderConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PrepareProviderConfig.Response) => void): grpc.ClientUnaryCall;
    public prepareProviderConfig(request: tfplugin5_3_pb.PrepareProviderConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PrepareProviderConfig.Response) => void): grpc.ClientUnaryCall;
    public validateResourceTypeConfig(request: tfplugin5_3_pb.ValidateResourceTypeConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateResourceTypeConfig.Response) => void): grpc.ClientUnaryCall;
    public validateResourceTypeConfig(request: tfplugin5_3_pb.ValidateResourceTypeConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateResourceTypeConfig.Response) => void): grpc.ClientUnaryCall;
    public validateResourceTypeConfig(request: tfplugin5_3_pb.ValidateResourceTypeConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateResourceTypeConfig.Response) => void): grpc.ClientUnaryCall;
    public validateDataSourceConfig(request: tfplugin5_3_pb.ValidateDataSourceConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateDataSourceConfig.Response) => void): grpc.ClientUnaryCall;
    public validateDataSourceConfig(request: tfplugin5_3_pb.ValidateDataSourceConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateDataSourceConfig.Response) => void): grpc.ClientUnaryCall;
    public validateDataSourceConfig(request: tfplugin5_3_pb.ValidateDataSourceConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateDataSourceConfig.Response) => void): grpc.ClientUnaryCall;
    public upgradeResourceState(request: tfplugin5_3_pb.UpgradeResourceState.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.UpgradeResourceState.Response) => void): grpc.ClientUnaryCall;
    public upgradeResourceState(request: tfplugin5_3_pb.UpgradeResourceState.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.UpgradeResourceState.Response) => void): grpc.ClientUnaryCall;
    public upgradeResourceState(request: tfplugin5_3_pb.UpgradeResourceState.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.UpgradeResourceState.Response) => void): grpc.ClientUnaryCall;
    public configure(request: tfplugin5_3_pb.Configure.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Configure.Response) => void): grpc.ClientUnaryCall;
    public configure(request: tfplugin5_3_pb.Configure.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Configure.Response) => void): grpc.ClientUnaryCall;
    public configure(request: tfplugin5_3_pb.Configure.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Configure.Response) => void): grpc.ClientUnaryCall;
    public readResource(request: tfplugin5_3_pb.ReadResource.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadResource.Response) => void): grpc.ClientUnaryCall;
    public readResource(request: tfplugin5_3_pb.ReadResource.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadResource.Response) => void): grpc.ClientUnaryCall;
    public readResource(request: tfplugin5_3_pb.ReadResource.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadResource.Response) => void): grpc.ClientUnaryCall;
    public planResourceChange(request: tfplugin5_3_pb.PlanResourceChange.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PlanResourceChange.Response) => void): grpc.ClientUnaryCall;
    public planResourceChange(request: tfplugin5_3_pb.PlanResourceChange.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PlanResourceChange.Response) => void): grpc.ClientUnaryCall;
    public planResourceChange(request: tfplugin5_3_pb.PlanResourceChange.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.PlanResourceChange.Response) => void): grpc.ClientUnaryCall;
    public applyResourceChange(request: tfplugin5_3_pb.ApplyResourceChange.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ApplyResourceChange.Response) => void): grpc.ClientUnaryCall;
    public applyResourceChange(request: tfplugin5_3_pb.ApplyResourceChange.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ApplyResourceChange.Response) => void): grpc.ClientUnaryCall;
    public applyResourceChange(request: tfplugin5_3_pb.ApplyResourceChange.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ApplyResourceChange.Response) => void): grpc.ClientUnaryCall;
    public importResourceState(request: tfplugin5_3_pb.ImportResourceState.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ImportResourceState.Response) => void): grpc.ClientUnaryCall;
    public importResourceState(request: tfplugin5_3_pb.ImportResourceState.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ImportResourceState.Response) => void): grpc.ClientUnaryCall;
    public importResourceState(request: tfplugin5_3_pb.ImportResourceState.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ImportResourceState.Response) => void): grpc.ClientUnaryCall;
    public readDataSource(request: tfplugin5_3_pb.ReadDataSource.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadDataSource.Response) => void): grpc.ClientUnaryCall;
    public readDataSource(request: tfplugin5_3_pb.ReadDataSource.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadDataSource.Response) => void): grpc.ClientUnaryCall;
    public readDataSource(request: tfplugin5_3_pb.ReadDataSource.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ReadDataSource.Response) => void): grpc.ClientUnaryCall;
    public stop(request: tfplugin5_3_pb.Stop.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    public stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    public stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
}

interface IProvisionerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSchema: IProvisionerService_IGetSchema;
    validateProvisionerConfig: IProvisionerService_IValidateProvisionerConfig;
    provisionResource: IProvisionerService_IProvisionResource;
    stop: IProvisionerService_IStop;
}

interface IProvisionerService_IGetSchema extends grpc.MethodDefinition<tfplugin5_3_pb.GetProvisionerSchema.Request, tfplugin5_3_pb.GetProvisionerSchema.Response> {
    path: "/tfplugin5.Provisioner/GetSchema";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.GetProvisionerSchema.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.GetProvisionerSchema.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.GetProvisionerSchema.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.GetProvisionerSchema.Response>;
}
interface IProvisionerService_IValidateProvisionerConfig extends grpc.MethodDefinition<tfplugin5_3_pb.ValidateProvisionerConfig.Request, tfplugin5_3_pb.ValidateProvisionerConfig.Response> {
    path: "/tfplugin5.Provisioner/ValidateProvisionerConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ValidateProvisionerConfig.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ValidateProvisionerConfig.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ValidateProvisionerConfig.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ValidateProvisionerConfig.Response>;
}
interface IProvisionerService_IProvisionResource extends grpc.MethodDefinition<tfplugin5_3_pb.ProvisionResource.Request, tfplugin5_3_pb.ProvisionResource.Response> {
    path: "/tfplugin5.Provisioner/ProvisionResource";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.ProvisionResource.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.ProvisionResource.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.ProvisionResource.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.ProvisionResource.Response>;
}
interface IProvisionerService_IStop extends grpc.MethodDefinition<tfplugin5_3_pb.Stop.Request, tfplugin5_3_pb.Stop.Response> {
    path: "/tfplugin5.Provisioner/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tfplugin5_3_pb.Stop.Request>;
    requestDeserialize: grpc.deserialize<tfplugin5_3_pb.Stop.Request>;
    responseSerialize: grpc.serialize<tfplugin5_3_pb.Stop.Response>;
    responseDeserialize: grpc.deserialize<tfplugin5_3_pb.Stop.Response>;
}

export const ProvisionerService: IProvisionerService;

export interface IProvisionerServer {
    getSchema: grpc.handleUnaryCall<tfplugin5_3_pb.GetProvisionerSchema.Request, tfplugin5_3_pb.GetProvisionerSchema.Response>;
    validateProvisionerConfig: grpc.handleUnaryCall<tfplugin5_3_pb.ValidateProvisionerConfig.Request, tfplugin5_3_pb.ValidateProvisionerConfig.Response>;
    provisionResource: grpc.handleServerStreamingCall<tfplugin5_3_pb.ProvisionResource.Request, tfplugin5_3_pb.ProvisionResource.Response>;
    stop: grpc.handleUnaryCall<tfplugin5_3_pb.Stop.Request, tfplugin5_3_pb.Stop.Response>;
}

export interface IProvisionerClient {
    getSchema(request: tfplugin5_3_pb.GetProvisionerSchema.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProvisionerSchema.Response) => void): grpc.ClientUnaryCall;
    getSchema(request: tfplugin5_3_pb.GetProvisionerSchema.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProvisionerSchema.Response) => void): grpc.ClientUnaryCall;
    getSchema(request: tfplugin5_3_pb.GetProvisionerSchema.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProvisionerSchema.Response) => void): grpc.ClientUnaryCall;
    validateProvisionerConfig(request: tfplugin5_3_pb.ValidateProvisionerConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateProvisionerConfig.Response) => void): grpc.ClientUnaryCall;
    validateProvisionerConfig(request: tfplugin5_3_pb.ValidateProvisionerConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateProvisionerConfig.Response) => void): grpc.ClientUnaryCall;
    validateProvisionerConfig(request: tfplugin5_3_pb.ValidateProvisionerConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateProvisionerConfig.Response) => void): grpc.ClientUnaryCall;
    provisionResource(request: tfplugin5_3_pb.ProvisionResource.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tfplugin5_3_pb.ProvisionResource.Response>;
    provisionResource(request: tfplugin5_3_pb.ProvisionResource.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tfplugin5_3_pb.ProvisionResource.Response>;
    stop(request: tfplugin5_3_pb.Stop.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
}

export class ProvisionerClient extends grpc.Client implements IProvisionerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSchema(request: tfplugin5_3_pb.GetProvisionerSchema.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProvisionerSchema.Response) => void): grpc.ClientUnaryCall;
    public getSchema(request: tfplugin5_3_pb.GetProvisionerSchema.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProvisionerSchema.Response) => void): grpc.ClientUnaryCall;
    public getSchema(request: tfplugin5_3_pb.GetProvisionerSchema.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.GetProvisionerSchema.Response) => void): grpc.ClientUnaryCall;
    public validateProvisionerConfig(request: tfplugin5_3_pb.ValidateProvisionerConfig.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateProvisionerConfig.Response) => void): grpc.ClientUnaryCall;
    public validateProvisionerConfig(request: tfplugin5_3_pb.ValidateProvisionerConfig.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateProvisionerConfig.Response) => void): grpc.ClientUnaryCall;
    public validateProvisionerConfig(request: tfplugin5_3_pb.ValidateProvisionerConfig.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.ValidateProvisionerConfig.Response) => void): grpc.ClientUnaryCall;
    public provisionResource(request: tfplugin5_3_pb.ProvisionResource.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tfplugin5_3_pb.ProvisionResource.Response>;
    public provisionResource(request: tfplugin5_3_pb.ProvisionResource.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tfplugin5_3_pb.ProvisionResource.Response>;
    public stop(request: tfplugin5_3_pb.Stop.Request, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    public stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
    public stop(request: tfplugin5_3_pb.Stop.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tfplugin5_3_pb.Stop.Response) => void): grpc.ClientUnaryCall;
}
