// package: tfplugin5
// file: tfplugin5.3.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DynamicValue extends jspb.Message { 
    getMsgpack(): Uint8Array | string;
    getMsgpack_asU8(): Uint8Array;
    getMsgpack_asB64(): string;
    setMsgpack(value: Uint8Array | string): DynamicValue;
    getJson(): Uint8Array | string;
    getJson_asU8(): Uint8Array;
    getJson_asB64(): string;
    setJson(value: Uint8Array | string): DynamicValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DynamicValue.AsObject;
    static toObject(includeInstance: boolean, msg: DynamicValue): DynamicValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DynamicValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DynamicValue;
    static deserializeBinaryFromReader(message: DynamicValue, reader: jspb.BinaryReader): DynamicValue;
}

export namespace DynamicValue {
    export type AsObject = {
        msgpack: Uint8Array | string,
        json: Uint8Array | string,
    }
}

export class Diagnostic extends jspb.Message { 
    getSeverity(): Diagnostic.Severity;
    setSeverity(value: Diagnostic.Severity): Diagnostic;
    getSummary(): string;
    setSummary(value: string): Diagnostic;
    getDetail(): string;
    setDetail(value: string): Diagnostic;

    hasAttribute(): boolean;
    clearAttribute(): void;
    getAttribute(): AttributePath | undefined;
    setAttribute(value?: AttributePath): Diagnostic;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Diagnostic.AsObject;
    static toObject(includeInstance: boolean, msg: Diagnostic): Diagnostic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Diagnostic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Diagnostic;
    static deserializeBinaryFromReader(message: Diagnostic, reader: jspb.BinaryReader): Diagnostic;
}

export namespace Diagnostic {
    export type AsObject = {
        severity: Diagnostic.Severity,
        summary: string,
        detail: string,
        attribute?: AttributePath.AsObject,
    }

    export enum Severity {
    INVALID = 0,
    ERROR = 1,
    WARNING = 2,
    }

}

export class AttributePath extends jspb.Message { 
    clearStepsList(): void;
    getStepsList(): Array<AttributePath.Step>;
    setStepsList(value: Array<AttributePath.Step>): AttributePath;
    addSteps(value?: AttributePath.Step, index?: number): AttributePath.Step;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttributePath.AsObject;
    static toObject(includeInstance: boolean, msg: AttributePath): AttributePath.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttributePath, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttributePath;
    static deserializeBinaryFromReader(message: AttributePath, reader: jspb.BinaryReader): AttributePath;
}

export namespace AttributePath {
    export type AsObject = {
        stepsList: Array<AttributePath.Step.AsObject>,
    }


    export class Step extends jspb.Message { 

        hasAttributeName(): boolean;
        clearAttributeName(): void;
        getAttributeName(): string;
        setAttributeName(value: string): Step;

        hasElementKeyString(): boolean;
        clearElementKeyString(): void;
        getElementKeyString(): string;
        setElementKeyString(value: string): Step;

        hasElementKeyInt(): boolean;
        clearElementKeyInt(): void;
        getElementKeyInt(): number;
        setElementKeyInt(value: number): Step;

        getSelectorCase(): Step.SelectorCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Step.AsObject;
        static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Step;
        static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
    }

    export namespace Step {
        export type AsObject = {
            attributeName: string,
            elementKeyString: string,
            elementKeyInt: number,
        }

        export enum SelectorCase {
            SELECTOR_NOT_SET = 0,
            ATTRIBUTE_NAME = 1,
            ELEMENT_KEY_STRING = 2,
            ELEMENT_KEY_INT = 3,
        }

    }

}

export class Stop extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stop.AsObject;
    static toObject(includeInstance: boolean, msg: Stop): Stop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stop;
    static deserializeBinaryFromReader(message: Stop, reader: jspb.BinaryReader): Stop;
}

export namespace Stop {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
        }
    }

    export class Response extends jspb.Message { 
        getError(): string;
        setError(value: string): Response;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            error: string,
        }
    }

}

export class RawState extends jspb.Message { 
    getJson(): Uint8Array | string;
    getJson_asU8(): Uint8Array;
    getJson_asB64(): string;
    setJson(value: Uint8Array | string): RawState;

    getFlatmapMap(): jspb.Map<string, string>;
    clearFlatmapMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RawState.AsObject;
    static toObject(includeInstance: boolean, msg: RawState): RawState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RawState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RawState;
    static deserializeBinaryFromReader(message: RawState, reader: jspb.BinaryReader): RawState;
}

export namespace RawState {
    export type AsObject = {
        json: Uint8Array | string,

        flatmapMap: Array<[string, string]>,
    }
}

export class Schema extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): Schema;

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): Schema.Block | undefined;
    setBlock(value?: Schema.Block): Schema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schema.AsObject;
    static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schema;
    static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
    export type AsObject = {
        version: number,
        block?: Schema.Block.AsObject,
    }


    export class Block extends jspb.Message { 
        getVersion(): number;
        setVersion(value: number): Block;
        clearAttributesList(): void;
        getAttributesList(): Array<Schema.Attribute>;
        setAttributesList(value: Array<Schema.Attribute>): Block;
        addAttributes(value?: Schema.Attribute, index?: number): Schema.Attribute;
        clearBlockTypesList(): void;
        getBlockTypesList(): Array<Schema.NestedBlock>;
        setBlockTypesList(value: Array<Schema.NestedBlock>): Block;
        addBlockTypes(value?: Schema.NestedBlock, index?: number): Schema.NestedBlock;
        getDescription(): string;
        setDescription(value: string): Block;
        getDescriptionKind(): StringKind;
        setDescriptionKind(value: StringKind): Block;
        getDeprecated(): boolean;
        setDeprecated(value: boolean): Block;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Block.AsObject;
        static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Block;
        static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
    }

    export namespace Block {
        export type AsObject = {
            version: number,
            attributesList: Array<Schema.Attribute.AsObject>,
            blockTypesList: Array<Schema.NestedBlock.AsObject>,
            description: string,
            descriptionKind: StringKind,
            deprecated: boolean,
        }
    }

    export class Attribute extends jspb.Message { 
        getName(): string;
        setName(value: string): Attribute;
        getType(): Uint8Array | string;
        getType_asU8(): Uint8Array;
        getType_asB64(): string;
        setType(value: Uint8Array | string): Attribute;
        getDescription(): string;
        setDescription(value: string): Attribute;
        getRequired(): boolean;
        setRequired(value: boolean): Attribute;
        getOptional(): boolean;
        setOptional(value: boolean): Attribute;
        getComputed(): boolean;
        setComputed(value: boolean): Attribute;
        getSensitive(): boolean;
        setSensitive(value: boolean): Attribute;
        getDescriptionKind(): StringKind;
        setDescriptionKind(value: StringKind): Attribute;
        getDeprecated(): boolean;
        setDeprecated(value: boolean): Attribute;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Attribute.AsObject;
        static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Attribute;
        static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
    }

    export namespace Attribute {
        export type AsObject = {
            name: string,
            type: Uint8Array | string,
            description: string,
            required: boolean,
            optional: boolean,
            computed: boolean,
            sensitive: boolean,
            descriptionKind: StringKind,
            deprecated: boolean,
        }
    }

    export class NestedBlock extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): NestedBlock;

        hasBlock(): boolean;
        clearBlock(): void;
        getBlock(): Schema.Block | undefined;
        setBlock(value?: Schema.Block): NestedBlock;
        getNesting(): Schema.NestedBlock.NestingMode;
        setNesting(value: Schema.NestedBlock.NestingMode): NestedBlock;
        getMinItems(): number;
        setMinItems(value: number): NestedBlock;
        getMaxItems(): number;
        setMaxItems(value: number): NestedBlock;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NestedBlock.AsObject;
        static toObject(includeInstance: boolean, msg: NestedBlock): NestedBlock.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NestedBlock, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NestedBlock;
        static deserializeBinaryFromReader(message: NestedBlock, reader: jspb.BinaryReader): NestedBlock;
    }

    export namespace NestedBlock {
        export type AsObject = {
            typeName: string,
            block?: Schema.Block.AsObject,
            nesting: Schema.NestedBlock.NestingMode,
            minItems: number,
            maxItems: number,
        }

        export enum NestingMode {
    INVALID = 0,
    SINGLE = 1,
    LIST = 2,
    SET = 3,
    MAP = 4,
    GROUP = 5,
        }

    }

}

export class GetProviderSchema extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProviderSchema.AsObject;
    static toObject(includeInstance: boolean, msg: GetProviderSchema): GetProviderSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProviderSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProviderSchema;
    static deserializeBinaryFromReader(message: GetProviderSchema, reader: jspb.BinaryReader): GetProviderSchema;
}

export namespace GetProviderSchema {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
        }
    }

    export class Response extends jspb.Message { 

        hasProvider(): boolean;
        clearProvider(): void;
        getProvider(): Schema | undefined;
        setProvider(value?: Schema): Response;

        getResourceSchemasMap(): jspb.Map<string, Schema>;
        clearResourceSchemasMap(): void;

        getDataSourceSchemasMap(): jspb.Map<string, Schema>;
        clearDataSourceSchemasMap(): void;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        hasProviderMeta(): boolean;
        clearProviderMeta(): void;
        getProviderMeta(): Schema | undefined;
        setProviderMeta(value?: Schema): Response;

        hasServerCapabilities(): boolean;
        clearServerCapabilities(): void;
        getServerCapabilities(): GetProviderSchema.ServerCapabilities | undefined;
        setServerCapabilities(value?: GetProviderSchema.ServerCapabilities): Response;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            provider?: Schema.AsObject,

            resourceSchemasMap: Array<[string, Schema.AsObject]>,

            dataSourceSchemasMap: Array<[string, Schema.AsObject]>,
            diagnosticsList: Array<Diagnostic.AsObject>,
            providerMeta?: Schema.AsObject,
            serverCapabilities?: GetProviderSchema.ServerCapabilities.AsObject,
        }
    }

    export class ServerCapabilities extends jspb.Message { 
        getPlanDestroy(): boolean;
        setPlanDestroy(value: boolean): ServerCapabilities;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ServerCapabilities.AsObject;
        static toObject(includeInstance: boolean, msg: ServerCapabilities): ServerCapabilities.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ServerCapabilities, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ServerCapabilities;
        static deserializeBinaryFromReader(message: ServerCapabilities, reader: jspb.BinaryReader): ServerCapabilities;
    }

    export namespace ServerCapabilities {
        export type AsObject = {
            planDestroy: boolean,
        }
    }

}

export class PrepareProviderConfig extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrepareProviderConfig.AsObject;
    static toObject(includeInstance: boolean, msg: PrepareProviderConfig): PrepareProviderConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrepareProviderConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrepareProviderConfig;
    static deserializeBinaryFromReader(message: PrepareProviderConfig, reader: jspb.BinaryReader): PrepareProviderConfig;
}

export namespace PrepareProviderConfig {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            config?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 

        hasPreparedConfig(): boolean;
        clearPreparedConfig(): void;
        getPreparedConfig(): DynamicValue | undefined;
        setPreparedConfig(value?: DynamicValue): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            preparedConfig?: DynamicValue.AsObject,
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class UpgradeResourceState extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpgradeResourceState.AsObject;
    static toObject(includeInstance: boolean, msg: UpgradeResourceState): UpgradeResourceState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpgradeResourceState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpgradeResourceState;
    static deserializeBinaryFromReader(message: UpgradeResourceState, reader: jspb.BinaryReader): UpgradeResourceState;
}

export namespace UpgradeResourceState {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;
        getVersion(): number;
        setVersion(value: number): Request;

        hasRawState(): boolean;
        clearRawState(): void;
        getRawState(): RawState | undefined;
        setRawState(value?: RawState): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            version: number,
            rawState?: RawState.AsObject,
        }
    }

    export class Response extends jspb.Message { 

        hasUpgradedState(): boolean;
        clearUpgradedState(): void;
        getUpgradedState(): DynamicValue | undefined;
        setUpgradedState(value?: DynamicValue): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            upgradedState?: DynamicValue.AsObject,
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class ValidateResourceTypeConfig extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateResourceTypeConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateResourceTypeConfig): ValidateResourceTypeConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateResourceTypeConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateResourceTypeConfig;
    static deserializeBinaryFromReader(message: ValidateResourceTypeConfig, reader: jspb.BinaryReader): ValidateResourceTypeConfig;
}

export namespace ValidateResourceTypeConfig {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            config?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class ValidateDataSourceConfig extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateDataSourceConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateDataSourceConfig): ValidateDataSourceConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateDataSourceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateDataSourceConfig;
    static deserializeBinaryFromReader(message: ValidateDataSourceConfig, reader: jspb.BinaryReader): ValidateDataSourceConfig;
}

export namespace ValidateDataSourceConfig {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            config?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class Configure extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Configure.AsObject;
    static toObject(includeInstance: boolean, msg: Configure): Configure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Configure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Configure;
    static deserializeBinaryFromReader(message: Configure, reader: jspb.BinaryReader): Configure;
}

export namespace Configure {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTerraformVersion(): string;
        setTerraformVersion(value: string): Request;

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            terraformVersion: string,
            config?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class ReadResource extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadResource.AsObject;
    static toObject(includeInstance: boolean, msg: ReadResource): ReadResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadResource;
    static deserializeBinaryFromReader(message: ReadResource, reader: jspb.BinaryReader): ReadResource;
}

export namespace ReadResource {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;

        hasCurrentState(): boolean;
        clearCurrentState(): void;
        getCurrentState(): DynamicValue | undefined;
        setCurrentState(value?: DynamicValue): Request;
        getPrivate(): Uint8Array | string;
        getPrivate_asU8(): Uint8Array;
        getPrivate_asB64(): string;
        setPrivate(value: Uint8Array | string): Request;

        hasProviderMeta(): boolean;
        clearProviderMeta(): void;
        getProviderMeta(): DynamicValue | undefined;
        setProviderMeta(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            currentState?: DynamicValue.AsObject,
            pb_private: Uint8Array | string,
            providerMeta?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 

        hasNewState(): boolean;
        clearNewState(): void;
        getNewState(): DynamicValue | undefined;
        setNewState(value?: DynamicValue): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;
        getPrivate(): Uint8Array | string;
        getPrivate_asU8(): Uint8Array;
        getPrivate_asB64(): string;
        setPrivate(value: Uint8Array | string): Response;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            newState?: DynamicValue.AsObject,
            diagnosticsList: Array<Diagnostic.AsObject>,
            pb_private: Uint8Array | string,
        }
    }

}

export class PlanResourceChange extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlanResourceChange.AsObject;
    static toObject(includeInstance: boolean, msg: PlanResourceChange): PlanResourceChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlanResourceChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlanResourceChange;
    static deserializeBinaryFromReader(message: PlanResourceChange, reader: jspb.BinaryReader): PlanResourceChange;
}

export namespace PlanResourceChange {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;

        hasPriorState(): boolean;
        clearPriorState(): void;
        getPriorState(): DynamicValue | undefined;
        setPriorState(value?: DynamicValue): Request;

        hasProposedNewState(): boolean;
        clearProposedNewState(): void;
        getProposedNewState(): DynamicValue | undefined;
        setProposedNewState(value?: DynamicValue): Request;

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;
        getPriorPrivate(): Uint8Array | string;
        getPriorPrivate_asU8(): Uint8Array;
        getPriorPrivate_asB64(): string;
        setPriorPrivate(value: Uint8Array | string): Request;

        hasProviderMeta(): boolean;
        clearProviderMeta(): void;
        getProviderMeta(): DynamicValue | undefined;
        setProviderMeta(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            priorState?: DynamicValue.AsObject,
            proposedNewState?: DynamicValue.AsObject,
            config?: DynamicValue.AsObject,
            priorPrivate: Uint8Array | string,
            providerMeta?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 

        hasPlannedState(): boolean;
        clearPlannedState(): void;
        getPlannedState(): DynamicValue | undefined;
        setPlannedState(value?: DynamicValue): Response;
        clearRequiresReplaceList(): void;
        getRequiresReplaceList(): Array<AttributePath>;
        setRequiresReplaceList(value: Array<AttributePath>): Response;
        addRequiresReplace(value?: AttributePath, index?: number): AttributePath;
        getPlannedPrivate(): Uint8Array | string;
        getPlannedPrivate_asU8(): Uint8Array;
        getPlannedPrivate_asB64(): string;
        setPlannedPrivate(value: Uint8Array | string): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;
        getLegacyTypeSystem(): boolean;
        setLegacyTypeSystem(value: boolean): Response;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            plannedState?: DynamicValue.AsObject,
            requiresReplaceList: Array<AttributePath.AsObject>,
            plannedPrivate: Uint8Array | string,
            diagnosticsList: Array<Diagnostic.AsObject>,
            legacyTypeSystem: boolean,
        }
    }

}

export class ApplyResourceChange extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplyResourceChange.AsObject;
    static toObject(includeInstance: boolean, msg: ApplyResourceChange): ApplyResourceChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplyResourceChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplyResourceChange;
    static deserializeBinaryFromReader(message: ApplyResourceChange, reader: jspb.BinaryReader): ApplyResourceChange;
}

export namespace ApplyResourceChange {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;

        hasPriorState(): boolean;
        clearPriorState(): void;
        getPriorState(): DynamicValue | undefined;
        setPriorState(value?: DynamicValue): Request;

        hasPlannedState(): boolean;
        clearPlannedState(): void;
        getPlannedState(): DynamicValue | undefined;
        setPlannedState(value?: DynamicValue): Request;

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;
        getPlannedPrivate(): Uint8Array | string;
        getPlannedPrivate_asU8(): Uint8Array;
        getPlannedPrivate_asB64(): string;
        setPlannedPrivate(value: Uint8Array | string): Request;

        hasProviderMeta(): boolean;
        clearProviderMeta(): void;
        getProviderMeta(): DynamicValue | undefined;
        setProviderMeta(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            priorState?: DynamicValue.AsObject,
            plannedState?: DynamicValue.AsObject,
            config?: DynamicValue.AsObject,
            plannedPrivate: Uint8Array | string,
            providerMeta?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 

        hasNewState(): boolean;
        clearNewState(): void;
        getNewState(): DynamicValue | undefined;
        setNewState(value?: DynamicValue): Response;
        getPrivate(): Uint8Array | string;
        getPrivate_asU8(): Uint8Array;
        getPrivate_asB64(): string;
        setPrivate(value: Uint8Array | string): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;
        getLegacyTypeSystem(): boolean;
        setLegacyTypeSystem(value: boolean): Response;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            newState?: DynamicValue.AsObject,
            pb_private: Uint8Array | string,
            diagnosticsList: Array<Diagnostic.AsObject>,
            legacyTypeSystem: boolean,
        }
    }

}

export class ImportResourceState extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportResourceState.AsObject;
    static toObject(includeInstance: boolean, msg: ImportResourceState): ImportResourceState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportResourceState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportResourceState;
    static deserializeBinaryFromReader(message: ImportResourceState, reader: jspb.BinaryReader): ImportResourceState;
}

export namespace ImportResourceState {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;
        getId(): string;
        setId(value: string): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            id: string,
        }
    }

    export class ImportedResource extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): ImportedResource;

        hasState(): boolean;
        clearState(): void;
        getState(): DynamicValue | undefined;
        setState(value?: DynamicValue): ImportedResource;
        getPrivate(): Uint8Array | string;
        getPrivate_asU8(): Uint8Array;
        getPrivate_asB64(): string;
        setPrivate(value: Uint8Array | string): ImportedResource;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ImportedResource.AsObject;
        static toObject(includeInstance: boolean, msg: ImportedResource): ImportedResource.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ImportedResource, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ImportedResource;
        static deserializeBinaryFromReader(message: ImportedResource, reader: jspb.BinaryReader): ImportedResource;
    }

    export namespace ImportedResource {
        export type AsObject = {
            typeName: string,
            state?: DynamicValue.AsObject,
            pb_private: Uint8Array | string,
        }
    }

    export class Response extends jspb.Message { 
        clearImportedResourcesList(): void;
        getImportedResourcesList(): Array<ImportResourceState.ImportedResource>;
        setImportedResourcesList(value: Array<ImportResourceState.ImportedResource>): Response;
        addImportedResources(value?: ImportResourceState.ImportedResource, index?: number): ImportResourceState.ImportedResource;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            importedResourcesList: Array<ImportResourceState.ImportedResource.AsObject>,
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class ReadDataSource extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadDataSource.AsObject;
    static toObject(includeInstance: boolean, msg: ReadDataSource): ReadDataSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadDataSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadDataSource;
    static deserializeBinaryFromReader(message: ReadDataSource, reader: jspb.BinaryReader): ReadDataSource;
}

export namespace ReadDataSource {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getTypeName(): string;
        setTypeName(value: string): Request;

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;

        hasProviderMeta(): boolean;
        clearProviderMeta(): void;
        getProviderMeta(): DynamicValue | undefined;
        setProviderMeta(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            typeName: string,
            config?: DynamicValue.AsObject,
            providerMeta?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 

        hasState(): boolean;
        clearState(): void;
        getState(): DynamicValue | undefined;
        setState(value?: DynamicValue): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            state?: DynamicValue.AsObject,
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class GetProvisionerSchema extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProvisionerSchema.AsObject;
    static toObject(includeInstance: boolean, msg: GetProvisionerSchema): GetProvisionerSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProvisionerSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProvisionerSchema;
    static deserializeBinaryFromReader(message: GetProvisionerSchema, reader: jspb.BinaryReader): GetProvisionerSchema;
}

export namespace GetProvisionerSchema {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
        }
    }

    export class Response extends jspb.Message { 

        hasProvisioner(): boolean;
        clearProvisioner(): void;
        getProvisioner(): Schema | undefined;
        setProvisioner(value?: Schema): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            provisioner?: Schema.AsObject,
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class ValidateProvisionerConfig extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateProvisionerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateProvisionerConfig): ValidateProvisionerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateProvisionerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateProvisionerConfig;
    static deserializeBinaryFromReader(message: ValidateProvisionerConfig, reader: jspb.BinaryReader): ValidateProvisionerConfig;
}

export namespace ValidateProvisionerConfig {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            config?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export class ProvisionResource extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProvisionResource.AsObject;
    static toObject(includeInstance: boolean, msg: ProvisionResource): ProvisionResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProvisionResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProvisionResource;
    static deserializeBinaryFromReader(message: ProvisionResource, reader: jspb.BinaryReader): ProvisionResource;
}

export namespace ProvisionResource {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): DynamicValue | undefined;
        setConfig(value?: DynamicValue): Request;

        hasConnection(): boolean;
        clearConnection(): void;
        getConnection(): DynamicValue | undefined;
        setConnection(value?: DynamicValue): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            config?: DynamicValue.AsObject,
            connection?: DynamicValue.AsObject,
        }
    }

    export class Response extends jspb.Message { 
        getOutput(): string;
        setOutput(value: string): Response;
        clearDiagnosticsList(): void;
        getDiagnosticsList(): Array<Diagnostic>;
        setDiagnosticsList(value: Array<Diagnostic>): Response;
        addDiagnostics(value?: Diagnostic, index?: number): Diagnostic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            output: string,
            diagnosticsList: Array<Diagnostic.AsObject>,
        }
    }

}

export enum StringKind {
    PLAIN = 0,
    MARKDOWN = 1,
}
