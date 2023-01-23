// source: tfplugin5.3.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.tfplugin5.ApplyResourceChange', null, global);
goog.exportSymbol('proto.tfplugin5.ApplyResourceChange.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ApplyResourceChange.Response', null, global);
goog.exportSymbol('proto.tfplugin5.AttributePath', null, global);
goog.exportSymbol('proto.tfplugin5.AttributePath.Step', null, global);
goog.exportSymbol('proto.tfplugin5.AttributePath.Step.SelectorCase', null, global);
goog.exportSymbol('proto.tfplugin5.Configure', null, global);
goog.exportSymbol('proto.tfplugin5.Configure.Request', null, global);
goog.exportSymbol('proto.tfplugin5.Configure.Response', null, global);
goog.exportSymbol('proto.tfplugin5.Diagnostic', null, global);
goog.exportSymbol('proto.tfplugin5.Diagnostic.Severity', null, global);
goog.exportSymbol('proto.tfplugin5.DynamicValue', null, global);
goog.exportSymbol('proto.tfplugin5.GetProviderSchema', null, global);
goog.exportSymbol('proto.tfplugin5.GetProviderSchema.Request', null, global);
goog.exportSymbol('proto.tfplugin5.GetProviderSchema.Response', null, global);
goog.exportSymbol('proto.tfplugin5.GetProviderSchema.ServerCapabilities', null, global);
goog.exportSymbol('proto.tfplugin5.GetProvisionerSchema', null, global);
goog.exportSymbol('proto.tfplugin5.GetProvisionerSchema.Request', null, global);
goog.exportSymbol('proto.tfplugin5.GetProvisionerSchema.Response', null, global);
goog.exportSymbol('proto.tfplugin5.ImportResourceState', null, global);
goog.exportSymbol('proto.tfplugin5.ImportResourceState.ImportedResource', null, global);
goog.exportSymbol('proto.tfplugin5.ImportResourceState.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ImportResourceState.Response', null, global);
goog.exportSymbol('proto.tfplugin5.PlanResourceChange', null, global);
goog.exportSymbol('proto.tfplugin5.PlanResourceChange.Request', null, global);
goog.exportSymbol('proto.tfplugin5.PlanResourceChange.Response', null, global);
goog.exportSymbol('proto.tfplugin5.PrepareProviderConfig', null, global);
goog.exportSymbol('proto.tfplugin5.PrepareProviderConfig.Request', null, global);
goog.exportSymbol('proto.tfplugin5.PrepareProviderConfig.Response', null, global);
goog.exportSymbol('proto.tfplugin5.ProvisionResource', null, global);
goog.exportSymbol('proto.tfplugin5.ProvisionResource.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ProvisionResource.Response', null, global);
goog.exportSymbol('proto.tfplugin5.RawState', null, global);
goog.exportSymbol('proto.tfplugin5.ReadDataSource', null, global);
goog.exportSymbol('proto.tfplugin5.ReadDataSource.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ReadDataSource.Response', null, global);
goog.exportSymbol('proto.tfplugin5.ReadResource', null, global);
goog.exportSymbol('proto.tfplugin5.ReadResource.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ReadResource.Response', null, global);
goog.exportSymbol('proto.tfplugin5.Schema', null, global);
goog.exportSymbol('proto.tfplugin5.Schema.Attribute', null, global);
goog.exportSymbol('proto.tfplugin5.Schema.Block', null, global);
goog.exportSymbol('proto.tfplugin5.Schema.NestedBlock', null, global);
goog.exportSymbol('proto.tfplugin5.Schema.NestedBlock.NestingMode', null, global);
goog.exportSymbol('proto.tfplugin5.Stop', null, global);
goog.exportSymbol('proto.tfplugin5.Stop.Request', null, global);
goog.exportSymbol('proto.tfplugin5.Stop.Response', null, global);
goog.exportSymbol('proto.tfplugin5.StringKind', null, global);
goog.exportSymbol('proto.tfplugin5.UpgradeResourceState', null, global);
goog.exportSymbol('proto.tfplugin5.UpgradeResourceState.Request', null, global);
goog.exportSymbol('proto.tfplugin5.UpgradeResourceState.Response', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateDataSourceConfig', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateDataSourceConfig.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateDataSourceConfig.Response', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateProvisionerConfig', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateProvisionerConfig.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateProvisionerConfig.Response', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateResourceTypeConfig', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateResourceTypeConfig.Request', null, global);
goog.exportSymbol('proto.tfplugin5.ValidateResourceTypeConfig.Response', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.DynamicValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.DynamicValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.DynamicValue.displayName = 'proto.tfplugin5.DynamicValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Diagnostic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Diagnostic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Diagnostic.displayName = 'proto.tfplugin5.Diagnostic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.AttributePath = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.AttributePath.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.AttributePath, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.AttributePath.displayName = 'proto.tfplugin5.AttributePath';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.AttributePath.Step = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tfplugin5.AttributePath.Step.oneofGroups_);
};
goog.inherits(proto.tfplugin5.AttributePath.Step, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.AttributePath.Step.displayName = 'proto.tfplugin5.AttributePath.Step';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Stop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Stop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Stop.displayName = 'proto.tfplugin5.Stop';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Stop.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Stop.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Stop.Request.displayName = 'proto.tfplugin5.Stop.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Stop.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Stop.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Stop.Response.displayName = 'proto.tfplugin5.Stop.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.RawState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.RawState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.RawState.displayName = 'proto.tfplugin5.RawState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Schema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Schema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Schema.displayName = 'proto.tfplugin5.Schema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Schema.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.Schema.Block.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.Schema.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Schema.Block.displayName = 'proto.tfplugin5.Schema.Block';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Schema.Attribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Schema.Attribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Schema.Attribute.displayName = 'proto.tfplugin5.Schema.Attribute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Schema.NestedBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Schema.NestedBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Schema.NestedBlock.displayName = 'proto.tfplugin5.Schema.NestedBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.GetProviderSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.GetProviderSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.GetProviderSchema.displayName = 'proto.tfplugin5.GetProviderSchema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.GetProviderSchema.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.GetProviderSchema.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.GetProviderSchema.Request.displayName = 'proto.tfplugin5.GetProviderSchema.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.GetProviderSchema.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.GetProviderSchema.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.GetProviderSchema.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.GetProviderSchema.Response.displayName = 'proto.tfplugin5.GetProviderSchema.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.GetProviderSchema.ServerCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.GetProviderSchema.ServerCapabilities.displayName = 'proto.tfplugin5.GetProviderSchema.ServerCapabilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.PrepareProviderConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.PrepareProviderConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.PrepareProviderConfig.displayName = 'proto.tfplugin5.PrepareProviderConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.PrepareProviderConfig.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.PrepareProviderConfig.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.PrepareProviderConfig.Request.displayName = 'proto.tfplugin5.PrepareProviderConfig.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.PrepareProviderConfig.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.PrepareProviderConfig.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.PrepareProviderConfig.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.PrepareProviderConfig.Response.displayName = 'proto.tfplugin5.PrepareProviderConfig.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.UpgradeResourceState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.UpgradeResourceState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.UpgradeResourceState.displayName = 'proto.tfplugin5.UpgradeResourceState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.UpgradeResourceState.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.UpgradeResourceState.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.UpgradeResourceState.Request.displayName = 'proto.tfplugin5.UpgradeResourceState.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.UpgradeResourceState.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.UpgradeResourceState.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.UpgradeResourceState.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.UpgradeResourceState.Response.displayName = 'proto.tfplugin5.UpgradeResourceState.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateResourceTypeConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ValidateResourceTypeConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateResourceTypeConfig.displayName = 'proto.tfplugin5.ValidateResourceTypeConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ValidateResourceTypeConfig.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateResourceTypeConfig.Request.displayName = 'proto.tfplugin5.ValidateResourceTypeConfig.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ValidateResourceTypeConfig.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ValidateResourceTypeConfig.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateResourceTypeConfig.Response.displayName = 'proto.tfplugin5.ValidateResourceTypeConfig.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateDataSourceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ValidateDataSourceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateDataSourceConfig.displayName = 'proto.tfplugin5.ValidateDataSourceConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateDataSourceConfig.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ValidateDataSourceConfig.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateDataSourceConfig.Request.displayName = 'proto.tfplugin5.ValidateDataSourceConfig.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateDataSourceConfig.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ValidateDataSourceConfig.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ValidateDataSourceConfig.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateDataSourceConfig.Response.displayName = 'proto.tfplugin5.ValidateDataSourceConfig.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Configure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Configure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Configure.displayName = 'proto.tfplugin5.Configure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Configure.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.Configure.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Configure.Request.displayName = 'proto.tfplugin5.Configure.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.Configure.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.Configure.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.Configure.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.Configure.Response.displayName = 'proto.tfplugin5.Configure.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ReadResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ReadResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ReadResource.displayName = 'proto.tfplugin5.ReadResource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ReadResource.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ReadResource.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ReadResource.Request.displayName = 'proto.tfplugin5.ReadResource.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ReadResource.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ReadResource.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ReadResource.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ReadResource.Response.displayName = 'proto.tfplugin5.ReadResource.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.PlanResourceChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.PlanResourceChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.PlanResourceChange.displayName = 'proto.tfplugin5.PlanResourceChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.PlanResourceChange.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.PlanResourceChange.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.PlanResourceChange.Request.displayName = 'proto.tfplugin5.PlanResourceChange.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.PlanResourceChange.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.PlanResourceChange.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.PlanResourceChange.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.PlanResourceChange.Response.displayName = 'proto.tfplugin5.PlanResourceChange.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ApplyResourceChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ApplyResourceChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ApplyResourceChange.displayName = 'proto.tfplugin5.ApplyResourceChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ApplyResourceChange.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ApplyResourceChange.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ApplyResourceChange.Request.displayName = 'proto.tfplugin5.ApplyResourceChange.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ApplyResourceChange.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ApplyResourceChange.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ApplyResourceChange.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ApplyResourceChange.Response.displayName = 'proto.tfplugin5.ApplyResourceChange.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ImportResourceState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ImportResourceState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ImportResourceState.displayName = 'proto.tfplugin5.ImportResourceState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ImportResourceState.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ImportResourceState.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ImportResourceState.Request.displayName = 'proto.tfplugin5.ImportResourceState.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ImportResourceState.ImportedResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ImportResourceState.ImportedResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ImportResourceState.ImportedResource.displayName = 'proto.tfplugin5.ImportResourceState.ImportedResource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ImportResourceState.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ImportResourceState.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ImportResourceState.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ImportResourceState.Response.displayName = 'proto.tfplugin5.ImportResourceState.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ReadDataSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ReadDataSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ReadDataSource.displayName = 'proto.tfplugin5.ReadDataSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ReadDataSource.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ReadDataSource.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ReadDataSource.Request.displayName = 'proto.tfplugin5.ReadDataSource.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ReadDataSource.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ReadDataSource.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ReadDataSource.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ReadDataSource.Response.displayName = 'proto.tfplugin5.ReadDataSource.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.GetProvisionerSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.GetProvisionerSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.GetProvisionerSchema.displayName = 'proto.tfplugin5.GetProvisionerSchema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.GetProvisionerSchema.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.GetProvisionerSchema.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.GetProvisionerSchema.Request.displayName = 'proto.tfplugin5.GetProvisionerSchema.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.GetProvisionerSchema.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.GetProvisionerSchema.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.GetProvisionerSchema.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.GetProvisionerSchema.Response.displayName = 'proto.tfplugin5.GetProvisionerSchema.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateProvisionerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ValidateProvisionerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateProvisionerConfig.displayName = 'proto.tfplugin5.ValidateProvisionerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateProvisionerConfig.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ValidateProvisionerConfig.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateProvisionerConfig.Request.displayName = 'proto.tfplugin5.ValidateProvisionerConfig.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ValidateProvisionerConfig.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ValidateProvisionerConfig.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ValidateProvisionerConfig.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ValidateProvisionerConfig.Response.displayName = 'proto.tfplugin5.ValidateProvisionerConfig.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ProvisionResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ProvisionResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ProvisionResource.displayName = 'proto.tfplugin5.ProvisionResource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ProvisionResource.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tfplugin5.ProvisionResource.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ProvisionResource.Request.displayName = 'proto.tfplugin5.ProvisionResource.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tfplugin5.ProvisionResource.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tfplugin5.ProvisionResource.Response.repeatedFields_, null);
};
goog.inherits(proto.tfplugin5.ProvisionResource.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tfplugin5.ProvisionResource.Response.displayName = 'proto.tfplugin5.ProvisionResource.Response';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.DynamicValue.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.DynamicValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.DynamicValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.DynamicValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgpack: msg.getMsgpack_asB64(),
    json: msg.getJson_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.DynamicValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.DynamicValue;
  return proto.tfplugin5.DynamicValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.DynamicValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.DynamicValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMsgpack(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.DynamicValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.DynamicValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.DynamicValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.DynamicValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgpack_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getJson_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes msgpack = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.DynamicValue.prototype.getMsgpack = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes msgpack = 1;
 * This is a type-conversion wrapper around `getMsgpack()`
 * @return {string}
 */
proto.tfplugin5.DynamicValue.prototype.getMsgpack_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMsgpack()));
};


/**
 * optional bytes msgpack = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMsgpack()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.DynamicValue.prototype.getMsgpack_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMsgpack()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.DynamicValue} returns this
 */
proto.tfplugin5.DynamicValue.prototype.setMsgpack = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes json = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.DynamicValue.prototype.getJson = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes json = 2;
 * This is a type-conversion wrapper around `getJson()`
 * @return {string}
 */
proto.tfplugin5.DynamicValue.prototype.getJson_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJson()));
};


/**
 * optional bytes json = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJson()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.DynamicValue.prototype.getJson_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJson()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.DynamicValue} returns this
 */
proto.tfplugin5.DynamicValue.prototype.setJson = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Diagnostic.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Diagnostic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Diagnostic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Diagnostic.toObject = function(includeInstance, msg) {
  var f, obj = {
    severity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    summary: jspb.Message.getFieldWithDefault(msg, 2, ""),
    detail: jspb.Message.getFieldWithDefault(msg, 3, ""),
    attribute: (f = msg.getAttribute()) && proto.tfplugin5.AttributePath.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.Diagnostic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Diagnostic;
  return proto.tfplugin5.Diagnostic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Diagnostic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.Diagnostic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tfplugin5.Diagnostic.Severity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetail(value);
      break;
    case 4:
      var value = new proto.tfplugin5.AttributePath;
      reader.readMessage(value,proto.tfplugin5.AttributePath.deserializeBinaryFromReader);
      msg.setAttribute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Diagnostic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Diagnostic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Diagnostic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Diagnostic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAttribute();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tfplugin5.AttributePath.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.tfplugin5.Diagnostic.Severity = {
  INVALID: 0,
  ERROR: 1,
  WARNING: 2
};

/**
 * optional Severity severity = 1;
 * @return {!proto.tfplugin5.Diagnostic.Severity}
 */
proto.tfplugin5.Diagnostic.prototype.getSeverity = function() {
  return /** @type {!proto.tfplugin5.Diagnostic.Severity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tfplugin5.Diagnostic.Severity} value
 * @return {!proto.tfplugin5.Diagnostic} returns this
 */
proto.tfplugin5.Diagnostic.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string summary = 2;
 * @return {string}
 */
proto.tfplugin5.Diagnostic.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Diagnostic} returns this
 */
proto.tfplugin5.Diagnostic.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string detail = 3;
 * @return {string}
 */
proto.tfplugin5.Diagnostic.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Diagnostic} returns this
 */
proto.tfplugin5.Diagnostic.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AttributePath attribute = 4;
 * @return {?proto.tfplugin5.AttributePath}
 */
proto.tfplugin5.Diagnostic.prototype.getAttribute = function() {
  return /** @type{?proto.tfplugin5.AttributePath} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.AttributePath, 4));
};


/**
 * @param {?proto.tfplugin5.AttributePath|undefined} value
 * @return {!proto.tfplugin5.Diagnostic} returns this
*/
proto.tfplugin5.Diagnostic.prototype.setAttribute = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.Diagnostic} returns this
 */
proto.tfplugin5.Diagnostic.prototype.clearAttribute = function() {
  return this.setAttribute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.Diagnostic.prototype.hasAttribute = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.AttributePath.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.AttributePath.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.AttributePath.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.AttributePath} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.AttributePath.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.tfplugin5.AttributePath.Step.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.AttributePath}
 */
proto.tfplugin5.AttributePath.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.AttributePath;
  return proto.tfplugin5.AttributePath.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.AttributePath} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.AttributePath}
 */
proto.tfplugin5.AttributePath.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.AttributePath.Step;
      reader.readMessage(value,proto.tfplugin5.AttributePath.Step.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.AttributePath.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.AttributePath.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.AttributePath} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.AttributePath.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tfplugin5.AttributePath.Step.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tfplugin5.AttributePath.Step.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.tfplugin5.AttributePath.Step.SelectorCase = {
  SELECTOR_NOT_SET: 0,
  ATTRIBUTE_NAME: 1,
  ELEMENT_KEY_STRING: 2,
  ELEMENT_KEY_INT: 3
};

/**
 * @return {proto.tfplugin5.AttributePath.Step.SelectorCase}
 */
proto.tfplugin5.AttributePath.Step.prototype.getSelectorCase = function() {
  return /** @type {proto.tfplugin5.AttributePath.Step.SelectorCase} */(jspb.Message.computeOneofCase(this, proto.tfplugin5.AttributePath.Step.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.AttributePath.Step.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.AttributePath.Step.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.AttributePath.Step} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.AttributePath.Step.toObject = function(includeInstance, msg) {
  var f, obj = {
    attributeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    elementKeyString: jspb.Message.getFieldWithDefault(msg, 2, ""),
    elementKeyInt: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.AttributePath.Step}
 */
proto.tfplugin5.AttributePath.Step.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.AttributePath.Step;
  return proto.tfplugin5.AttributePath.Step.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.AttributePath.Step} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.AttributePath.Step}
 */
proto.tfplugin5.AttributePath.Step.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributeName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setElementKeyString(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setElementKeyInt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.AttributePath.Step.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.AttributePath.Step.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.AttributePath.Step} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.AttributePath.Step.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string attribute_name = 1;
 * @return {string}
 */
proto.tfplugin5.AttributePath.Step.prototype.getAttributeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.AttributePath.Step} returns this
 */
proto.tfplugin5.AttributePath.Step.prototype.setAttributeName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.tfplugin5.AttributePath.Step.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tfplugin5.AttributePath.Step} returns this
 */
proto.tfplugin5.AttributePath.Step.prototype.clearAttributeName = function() {
  return jspb.Message.setOneofField(this, 1, proto.tfplugin5.AttributePath.Step.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.AttributePath.Step.prototype.hasAttributeName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string element_key_string = 2;
 * @return {string}
 */
proto.tfplugin5.AttributePath.Step.prototype.getElementKeyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.AttributePath.Step} returns this
 */
proto.tfplugin5.AttributePath.Step.prototype.setElementKeyString = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.tfplugin5.AttributePath.Step.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tfplugin5.AttributePath.Step} returns this
 */
proto.tfplugin5.AttributePath.Step.prototype.clearElementKeyString = function() {
  return jspb.Message.setOneofField(this, 2, proto.tfplugin5.AttributePath.Step.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.AttributePath.Step.prototype.hasElementKeyString = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 element_key_int = 3;
 * @return {number}
 */
proto.tfplugin5.AttributePath.Step.prototype.getElementKeyInt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tfplugin5.AttributePath.Step} returns this
 */
proto.tfplugin5.AttributePath.Step.prototype.setElementKeyInt = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.tfplugin5.AttributePath.Step.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.tfplugin5.AttributePath.Step} returns this
 */
proto.tfplugin5.AttributePath.Step.prototype.clearElementKeyInt = function() {
  return jspb.Message.setOneofField(this, 3, proto.tfplugin5.AttributePath.Step.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.AttributePath.Step.prototype.hasElementKeyInt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Step steps = 1;
 * @return {!Array<!proto.tfplugin5.AttributePath.Step>}
 */
proto.tfplugin5.AttributePath.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.tfplugin5.AttributePath.Step>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.AttributePath.Step, 1));
};


/**
 * @param {!Array<!proto.tfplugin5.AttributePath.Step>} value
 * @return {!proto.tfplugin5.AttributePath} returns this
*/
proto.tfplugin5.AttributePath.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tfplugin5.AttributePath.Step=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.AttributePath.Step}
 */
proto.tfplugin5.AttributePath.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tfplugin5.AttributePath.Step, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.AttributePath} returns this
 */
proto.tfplugin5.AttributePath.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Stop.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Stop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Stop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Stop.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Stop}
 */
proto.tfplugin5.Stop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Stop;
  return proto.tfplugin5.Stop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Stop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Stop}
 */
proto.tfplugin5.Stop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Stop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Stop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Stop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Stop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Stop.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Stop.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Stop.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Stop.Request.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Stop.Request}
 */
proto.tfplugin5.Stop.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Stop.Request;
  return proto.tfplugin5.Stop.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Stop.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Stop.Request}
 */
proto.tfplugin5.Stop.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Stop.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Stop.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Stop.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Stop.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Stop.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Stop.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Stop.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Stop.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Stop.Response}
 */
proto.tfplugin5.Stop.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Stop.Response;
  return proto.tfplugin5.Stop.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Stop.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Stop.Response}
 */
proto.tfplugin5.Stop.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Stop.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Stop.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Stop.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Stop.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Error = 1;
 * @return {string}
 */
proto.tfplugin5.Stop.Response.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Stop.Response} returns this
 */
proto.tfplugin5.Stop.Response.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.RawState.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.RawState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.RawState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.RawState.toObject = function(includeInstance, msg) {
  var f, obj = {
    json: msg.getJson_asB64(),
    flatmapMap: (f = msg.getFlatmapMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.RawState}
 */
proto.tfplugin5.RawState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.RawState;
  return proto.tfplugin5.RawState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.RawState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.RawState}
 */
proto.tfplugin5.RawState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJson(value);
      break;
    case 2:
      var value = msg.getFlatmapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.RawState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.RawState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.RawState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.RawState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJson_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFlatmapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional bytes json = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.RawState.prototype.getJson = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes json = 1;
 * This is a type-conversion wrapper around `getJson()`
 * @return {string}
 */
proto.tfplugin5.RawState.prototype.getJson_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJson()));
};


/**
 * optional bytes json = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJson()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.RawState.prototype.getJson_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJson()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.RawState} returns this
 */
proto.tfplugin5.RawState.prototype.setJson = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * map<string, string> flatmap = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.tfplugin5.RawState.prototype.getFlatmapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tfplugin5.RawState} returns this
 */
proto.tfplugin5.RawState.prototype.clearFlatmapMap = function() {
  this.getFlatmapMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Schema.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Schema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Schema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    block: (f = msg.getBlock()) && proto.tfplugin5.Schema.Block.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Schema}
 */
proto.tfplugin5.Schema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Schema;
  return proto.tfplugin5.Schema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Schema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Schema}
 */
proto.tfplugin5.Schema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Schema.Block;
      reader.readMessage(value,proto.tfplugin5.Schema.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Schema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Schema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Schema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.Schema.Block.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.Schema.Block.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Schema.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Schema.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Schema.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto.tfplugin5.Schema.Attribute.toObject, includeInstance),
    blockTypesList: jspb.Message.toObjectList(msg.getBlockTypesList(),
    proto.tfplugin5.Schema.NestedBlock.toObject, includeInstance),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    descriptionKind: jspb.Message.getFieldWithDefault(msg, 5, 0),
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Schema.Block}
 */
proto.tfplugin5.Schema.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Schema.Block;
  return proto.tfplugin5.Schema.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Schema.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Schema.Block}
 */
proto.tfplugin5.Schema.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Schema.Attribute;
      reader.readMessage(value,proto.tfplugin5.Schema.Attribute.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    case 3:
      var value = new proto.tfplugin5.Schema.NestedBlock;
      reader.readMessage(value,proto.tfplugin5.Schema.NestedBlock.deserializeBinaryFromReader);
      msg.addBlockTypes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.tfplugin5.StringKind} */ (reader.readEnum());
      msg.setDescriptionKind(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Schema.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Schema.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Schema.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Schema.Attribute.serializeBinaryToWriter
    );
  }
  f = message.getBlockTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tfplugin5.Schema.NestedBlock.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescriptionKind();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDeprecated();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int64 version = 1;
 * @return {number}
 */
proto.tfplugin5.Schema.Block.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tfplugin5.Schema.Block} returns this
 */
proto.tfplugin5.Schema.Block.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Attribute attributes = 2;
 * @return {!Array<!proto.tfplugin5.Schema.Attribute>}
 */
proto.tfplugin5.Schema.Block.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.tfplugin5.Schema.Attribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Schema.Attribute, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Schema.Attribute>} value
 * @return {!proto.tfplugin5.Schema.Block} returns this
*/
proto.tfplugin5.Schema.Block.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Schema.Attribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Schema.Attribute}
 */
proto.tfplugin5.Schema.Block.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Schema.Attribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.Schema.Block} returns this
 */
proto.tfplugin5.Schema.Block.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};


/**
 * repeated NestedBlock block_types = 3;
 * @return {!Array<!proto.tfplugin5.Schema.NestedBlock>}
 */
proto.tfplugin5.Schema.Block.prototype.getBlockTypesList = function() {
  return /** @type{!Array<!proto.tfplugin5.Schema.NestedBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Schema.NestedBlock, 3));
};


/**
 * @param {!Array<!proto.tfplugin5.Schema.NestedBlock>} value
 * @return {!proto.tfplugin5.Schema.Block} returns this
*/
proto.tfplugin5.Schema.Block.prototype.setBlockTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tfplugin5.Schema.NestedBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Schema.NestedBlock}
 */
proto.tfplugin5.Schema.Block.prototype.addBlockTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tfplugin5.Schema.NestedBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.Schema.Block} returns this
 */
proto.tfplugin5.Schema.Block.prototype.clearBlockTypesList = function() {
  return this.setBlockTypesList([]);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.tfplugin5.Schema.Block.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Schema.Block} returns this
 */
proto.tfplugin5.Schema.Block.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional StringKind description_kind = 5;
 * @return {!proto.tfplugin5.StringKind}
 */
proto.tfplugin5.Schema.Block.prototype.getDescriptionKind = function() {
  return /** @type {!proto.tfplugin5.StringKind} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.tfplugin5.StringKind} value
 * @return {!proto.tfplugin5.Schema.Block} returns this
 */
proto.tfplugin5.Schema.Block.prototype.setDescriptionKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool deprecated = 6;
 * @return {boolean}
 */
proto.tfplugin5.Schema.Block.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.Schema.Block} returns this
 */
proto.tfplugin5.Schema.Block.prototype.setDeprecated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Schema.Attribute.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Schema.Attribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Schema.Attribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.Attribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: msg.getType_asB64(),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    required: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    optional: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    computed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    sensitive: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    descriptionKind: jspb.Message.getFieldWithDefault(msg, 8, 0),
    deprecated: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Schema.Attribute}
 */
proto.tfplugin5.Schema.Attribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Schema.Attribute;
  return proto.tfplugin5.Schema.Attribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Schema.Attribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Schema.Attribute}
 */
proto.tfplugin5.Schema.Attribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequired(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptional(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setComputed(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSensitive(value);
      break;
    case 8:
      var value = /** @type {!proto.tfplugin5.StringKind} */ (reader.readEnum());
      msg.setDescriptionKind(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Schema.Attribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Schema.Attribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Schema.Attribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.Attribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequired();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOptional();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getComputed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSensitive();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDescriptionKind();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getDeprecated();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tfplugin5.Schema.Attribute.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes type = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.Schema.Attribute.prototype.getType = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes type = 2;
 * This is a type-conversion wrapper around `getType()`
 * @return {string}
 */
proto.tfplugin5.Schema.Attribute.prototype.getType_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getType()));
};


/**
 * optional bytes type = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getType()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.Schema.Attribute.prototype.getType_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getType()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setType = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.tfplugin5.Schema.Attribute.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool required = 4;
 * @return {boolean}
 */
proto.tfplugin5.Schema.Attribute.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool optional = 5;
 * @return {boolean}
 */
proto.tfplugin5.Schema.Attribute.prototype.getOptional = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setOptional = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool computed = 6;
 * @return {boolean}
 */
proto.tfplugin5.Schema.Attribute.prototype.getComputed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setComputed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool sensitive = 7;
 * @return {boolean}
 */
proto.tfplugin5.Schema.Attribute.prototype.getSensitive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setSensitive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional StringKind description_kind = 8;
 * @return {!proto.tfplugin5.StringKind}
 */
proto.tfplugin5.Schema.Attribute.prototype.getDescriptionKind = function() {
  return /** @type {!proto.tfplugin5.StringKind} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.tfplugin5.StringKind} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setDescriptionKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool deprecated = 9;
 * @return {boolean}
 */
proto.tfplugin5.Schema.Attribute.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.Schema.Attribute} returns this
 */
proto.tfplugin5.Schema.Attribute.prototype.setDeprecated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Schema.NestedBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Schema.NestedBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.NestedBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    block: (f = msg.getBlock()) && proto.tfplugin5.Schema.Block.toObject(includeInstance, f),
    nesting: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minItems: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxItems: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Schema.NestedBlock}
 */
proto.tfplugin5.Schema.NestedBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Schema.NestedBlock;
  return proto.tfplugin5.Schema.NestedBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Schema.NestedBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Schema.NestedBlock}
 */
proto.tfplugin5.Schema.NestedBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Schema.Block;
      reader.readMessage(value,proto.tfplugin5.Schema.Block.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 3:
      var value = /** @type {!proto.tfplugin5.Schema.NestedBlock.NestingMode} */ (reader.readEnum());
      msg.setNesting(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinItems(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Schema.NestedBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Schema.NestedBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Schema.NestedBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.Schema.Block.serializeBinaryToWriter
    );
  }
  f = message.getNesting();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMinItems();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMaxItems();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.tfplugin5.Schema.NestedBlock.NestingMode = {
  INVALID: 0,
  SINGLE: 1,
  LIST: 2,
  SET: 3,
  MAP: 4,
  GROUP: 5
};

/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Schema.NestedBlock} returns this
 */
proto.tfplugin5.Schema.NestedBlock.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Block block = 2;
 * @return {?proto.tfplugin5.Schema.Block}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.getBlock = function() {
  return /** @type{?proto.tfplugin5.Schema.Block} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.Schema.Block, 2));
};


/**
 * @param {?proto.tfplugin5.Schema.Block|undefined} value
 * @return {!proto.tfplugin5.Schema.NestedBlock} returns this
*/
proto.tfplugin5.Schema.NestedBlock.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.Schema.NestedBlock} returns this
 */
proto.tfplugin5.Schema.NestedBlock.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NestingMode nesting = 3;
 * @return {!proto.tfplugin5.Schema.NestedBlock.NestingMode}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.getNesting = function() {
  return /** @type {!proto.tfplugin5.Schema.NestedBlock.NestingMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tfplugin5.Schema.NestedBlock.NestingMode} value
 * @return {!proto.tfplugin5.Schema.NestedBlock} returns this
 */
proto.tfplugin5.Schema.NestedBlock.prototype.setNesting = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 min_items = 4;
 * @return {number}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.getMinItems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tfplugin5.Schema.NestedBlock} returns this
 */
proto.tfplugin5.Schema.NestedBlock.prototype.setMinItems = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 max_items = 5;
 * @return {number}
 */
proto.tfplugin5.Schema.NestedBlock.prototype.getMaxItems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tfplugin5.Schema.NestedBlock} returns this
 */
proto.tfplugin5.Schema.NestedBlock.prototype.setMaxItems = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 version = 1;
 * @return {number}
 */
proto.tfplugin5.Schema.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tfplugin5.Schema} returns this
 */
proto.tfplugin5.Schema.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Block block = 2;
 * @return {?proto.tfplugin5.Schema.Block}
 */
proto.tfplugin5.Schema.prototype.getBlock = function() {
  return /** @type{?proto.tfplugin5.Schema.Block} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.Schema.Block, 2));
};


/**
 * @param {?proto.tfplugin5.Schema.Block|undefined} value
 * @return {!proto.tfplugin5.Schema} returns this
*/
proto.tfplugin5.Schema.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.Schema} returns this
 */
proto.tfplugin5.Schema.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.Schema.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.GetProviderSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.GetProviderSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.GetProviderSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.GetProviderSchema}
 */
proto.tfplugin5.GetProviderSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.GetProviderSchema;
  return proto.tfplugin5.GetProviderSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.GetProviderSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.GetProviderSchema}
 */
proto.tfplugin5.GetProviderSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.GetProviderSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.GetProviderSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.GetProviderSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.GetProviderSchema.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.GetProviderSchema.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.GetProviderSchema.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.Request.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.GetProviderSchema.Request}
 */
proto.tfplugin5.GetProviderSchema.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.GetProviderSchema.Request;
  return proto.tfplugin5.GetProviderSchema.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.GetProviderSchema.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.GetProviderSchema.Request}
 */
proto.tfplugin5.GetProviderSchema.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.GetProviderSchema.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.GetProviderSchema.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.GetProviderSchema.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.GetProviderSchema.Response.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.GetProviderSchema.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.GetProviderSchema.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    provider: (f = msg.getProvider()) && proto.tfplugin5.Schema.toObject(includeInstance, f),
    resourceSchemasMap: (f = msg.getResourceSchemasMap()) ? f.toObject(includeInstance, proto.tfplugin5.Schema.toObject) : [],
    dataSourceSchemasMap: (f = msg.getDataSourceSchemasMap()) ? f.toObject(includeInstance, proto.tfplugin5.Schema.toObject) : [],
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance),
    providerMeta: (f = msg.getProviderMeta()) && proto.tfplugin5.Schema.toObject(includeInstance, f),
    serverCapabilities: (f = msg.getServerCapabilities()) && proto.tfplugin5.GetProviderSchema.ServerCapabilities.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.GetProviderSchema.Response}
 */
proto.tfplugin5.GetProviderSchema.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.GetProviderSchema.Response;
  return proto.tfplugin5.GetProviderSchema.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.GetProviderSchema.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.GetProviderSchema.Response}
 */
proto.tfplugin5.GetProviderSchema.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.Schema;
      reader.readMessage(value,proto.tfplugin5.Schema.deserializeBinaryFromReader);
      msg.setProvider(value);
      break;
    case 2:
      var value = msg.getResourceSchemasMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tfplugin5.Schema.deserializeBinaryFromReader, "", new proto.tfplugin5.Schema());
         });
      break;
    case 3:
      var value = msg.getDataSourceSchemasMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tfplugin5.Schema.deserializeBinaryFromReader, "", new proto.tfplugin5.Schema());
         });
      break;
    case 4:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    case 5:
      var value = new proto.tfplugin5.Schema;
      reader.readMessage(value,proto.tfplugin5.Schema.deserializeBinaryFromReader);
      msg.setProviderMeta(value);
      break;
    case 6:
      var value = new proto.tfplugin5.GetProviderSchema.ServerCapabilities;
      reader.readMessage(value,proto.tfplugin5.GetProviderSchema.ServerCapabilities.deserializeBinaryFromReader);
      msg.setServerCapabilities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.GetProviderSchema.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.GetProviderSchema.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.Schema.serializeBinaryToWriter
    );
  }
  f = message.getResourceSchemasMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tfplugin5.Schema.serializeBinaryToWriter);
  }
  f = message.getDataSourceSchemasMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tfplugin5.Schema.serializeBinaryToWriter);
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
  f = message.getProviderMeta();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tfplugin5.Schema.serializeBinaryToWriter
    );
  }
  f = message.getServerCapabilities();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tfplugin5.GetProviderSchema.ServerCapabilities.serializeBinaryToWriter
    );
  }
};


/**
 * optional Schema provider = 1;
 * @return {?proto.tfplugin5.Schema}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.getProvider = function() {
  return /** @type{?proto.tfplugin5.Schema} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.Schema, 1));
};


/**
 * @param {?proto.tfplugin5.Schema|undefined} value
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
*/
proto.tfplugin5.GetProviderSchema.Response.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, Schema> resource_schemas = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tfplugin5.Schema>}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.getResourceSchemasMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tfplugin5.Schema>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.tfplugin5.Schema));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.clearResourceSchemasMap = function() {
  this.getResourceSchemasMap().clear();
  return this;};


/**
 * map<string, Schema> data_source_schemas = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tfplugin5.Schema>}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.getDataSourceSchemasMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tfplugin5.Schema>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.tfplugin5.Schema));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.clearDataSourceSchemasMap = function() {
  this.getDataSourceSchemasMap().clear();
  return this;};


/**
 * repeated Diagnostic diagnostics = 4;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 4));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
*/
proto.tfplugin5.GetProviderSchema.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};


/**
 * optional Schema provider_meta = 5;
 * @return {?proto.tfplugin5.Schema}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.getProviderMeta = function() {
  return /** @type{?proto.tfplugin5.Schema} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.Schema, 5));
};


/**
 * @param {?proto.tfplugin5.Schema|undefined} value
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
*/
proto.tfplugin5.GetProviderSchema.Response.prototype.setProviderMeta = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.clearProviderMeta = function() {
  return this.setProviderMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.hasProviderMeta = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ServerCapabilities server_capabilities = 6;
 * @return {?proto.tfplugin5.GetProviderSchema.ServerCapabilities}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.getServerCapabilities = function() {
  return /** @type{?proto.tfplugin5.GetProviderSchema.ServerCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.GetProviderSchema.ServerCapabilities, 6));
};


/**
 * @param {?proto.tfplugin5.GetProviderSchema.ServerCapabilities|undefined} value
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
*/
proto.tfplugin5.GetProviderSchema.Response.prototype.setServerCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.GetProviderSchema.Response} returns this
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.clearServerCapabilities = function() {
  return this.setServerCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.GetProviderSchema.Response.prototype.hasServerCapabilities = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.GetProviderSchema.ServerCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.GetProviderSchema.ServerCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
    planDestroy: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.GetProviderSchema.ServerCapabilities}
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.GetProviderSchema.ServerCapabilities;
  return proto.tfplugin5.GetProviderSchema.ServerCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.GetProviderSchema.ServerCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.GetProviderSchema.ServerCapabilities}
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlanDestroy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.GetProviderSchema.ServerCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.GetProviderSchema.ServerCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanDestroy();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool plan_destroy = 1;
 * @return {boolean}
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.prototype.getPlanDestroy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.GetProviderSchema.ServerCapabilities} returns this
 */
proto.tfplugin5.GetProviderSchema.ServerCapabilities.prototype.setPlanDestroy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.PrepareProviderConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.PrepareProviderConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.PrepareProviderConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PrepareProviderConfig.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.PrepareProviderConfig}
 */
proto.tfplugin5.PrepareProviderConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.PrepareProviderConfig;
  return proto.tfplugin5.PrepareProviderConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.PrepareProviderConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.PrepareProviderConfig}
 */
proto.tfplugin5.PrepareProviderConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.PrepareProviderConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.PrepareProviderConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.PrepareProviderConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PrepareProviderConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.PrepareProviderConfig.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.PrepareProviderConfig.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.PrepareProviderConfig.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PrepareProviderConfig.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.PrepareProviderConfig.Request}
 */
proto.tfplugin5.PrepareProviderConfig.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.PrepareProviderConfig.Request;
  return proto.tfplugin5.PrepareProviderConfig.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.PrepareProviderConfig.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.PrepareProviderConfig.Request}
 */
proto.tfplugin5.PrepareProviderConfig.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.PrepareProviderConfig.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.PrepareProviderConfig.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.PrepareProviderConfig.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PrepareProviderConfig.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional DynamicValue config = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.PrepareProviderConfig.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.PrepareProviderConfig.Request} returns this
*/
proto.tfplugin5.PrepareProviderConfig.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.PrepareProviderConfig.Request} returns this
 */
proto.tfplugin5.PrepareProviderConfig.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.PrepareProviderConfig.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.PrepareProviderConfig.Response.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.PrepareProviderConfig.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.PrepareProviderConfig.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PrepareProviderConfig.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    preparedConfig: (f = msg.getPreparedConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.PrepareProviderConfig.Response}
 */
proto.tfplugin5.PrepareProviderConfig.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.PrepareProviderConfig.Response;
  return proto.tfplugin5.PrepareProviderConfig.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.PrepareProviderConfig.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.PrepareProviderConfig.Response}
 */
proto.tfplugin5.PrepareProviderConfig.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setPreparedConfig(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.PrepareProviderConfig.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.PrepareProviderConfig.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PrepareProviderConfig.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreparedConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * optional DynamicValue prepared_config = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.getPreparedConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.PrepareProviderConfig.Response} returns this
*/
proto.tfplugin5.PrepareProviderConfig.Response.prototype.setPreparedConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.PrepareProviderConfig.Response} returns this
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.clearPreparedConfig = function() {
  return this.setPreparedConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.hasPreparedConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Diagnostic diagnostics = 2;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.PrepareProviderConfig.Response} returns this
*/
proto.tfplugin5.PrepareProviderConfig.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.PrepareProviderConfig.Response} returns this
 */
proto.tfplugin5.PrepareProviderConfig.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.UpgradeResourceState.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.UpgradeResourceState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.UpgradeResourceState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.UpgradeResourceState.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.UpgradeResourceState}
 */
proto.tfplugin5.UpgradeResourceState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.UpgradeResourceState;
  return proto.tfplugin5.UpgradeResourceState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.UpgradeResourceState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.UpgradeResourceState}
 */
proto.tfplugin5.UpgradeResourceState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.UpgradeResourceState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.UpgradeResourceState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.UpgradeResourceState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.UpgradeResourceState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.UpgradeResourceState.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.UpgradeResourceState.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.UpgradeResourceState.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rawState: (f = msg.getRawState()) && proto.tfplugin5.RawState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.UpgradeResourceState.Request}
 */
proto.tfplugin5.UpgradeResourceState.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.UpgradeResourceState.Request;
  return proto.tfplugin5.UpgradeResourceState.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.UpgradeResourceState.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.UpgradeResourceState.Request}
 */
proto.tfplugin5.UpgradeResourceState.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 3:
      var value = new proto.tfplugin5.RawState;
      reader.readMessage(value,proto.tfplugin5.RawState.deserializeBinaryFromReader);
      msg.setRawState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.UpgradeResourceState.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.UpgradeResourceState.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.UpgradeResourceState.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRawState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tfplugin5.RawState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.UpgradeResourceState.Request} returns this
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 version = 2;
 * @return {number}
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tfplugin5.UpgradeResourceState.Request} returns this
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional RawState raw_state = 3;
 * @return {?proto.tfplugin5.RawState}
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.getRawState = function() {
  return /** @type{?proto.tfplugin5.RawState} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.RawState, 3));
};


/**
 * @param {?proto.tfplugin5.RawState|undefined} value
 * @return {!proto.tfplugin5.UpgradeResourceState.Request} returns this
*/
proto.tfplugin5.UpgradeResourceState.Request.prototype.setRawState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.UpgradeResourceState.Request} returns this
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.clearRawState = function() {
  return this.setRawState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.UpgradeResourceState.Request.prototype.hasRawState = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.UpgradeResourceState.Response.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.UpgradeResourceState.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.UpgradeResourceState.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.UpgradeResourceState.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    upgradedState: (f = msg.getUpgradedState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.UpgradeResourceState.Response}
 */
proto.tfplugin5.UpgradeResourceState.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.UpgradeResourceState.Response;
  return proto.tfplugin5.UpgradeResourceState.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.UpgradeResourceState.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.UpgradeResourceState.Response}
 */
proto.tfplugin5.UpgradeResourceState.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setUpgradedState(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.UpgradeResourceState.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.UpgradeResourceState.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.UpgradeResourceState.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpgradedState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * optional DynamicValue upgraded_state = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.getUpgradedState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.UpgradeResourceState.Response} returns this
*/
proto.tfplugin5.UpgradeResourceState.Response.prototype.setUpgradedState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.UpgradeResourceState.Response} returns this
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.clearUpgradedState = function() {
  return this.setUpgradedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.hasUpgradedState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Diagnostic diagnostics = 2;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.UpgradeResourceState.Response} returns this
*/
proto.tfplugin5.UpgradeResourceState.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.UpgradeResourceState.Response} returns this
 */
proto.tfplugin5.UpgradeResourceState.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateResourceTypeConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateResourceTypeConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateResourceTypeConfig.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig}
 */
proto.tfplugin5.ValidateResourceTypeConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateResourceTypeConfig;
  return proto.tfplugin5.ValidateResourceTypeConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig}
 */
proto.tfplugin5.ValidateResourceTypeConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateResourceTypeConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateResourceTypeConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateResourceTypeConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateResourceTypeConfig.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Request}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateResourceTypeConfig.Request;
  return proto.tfplugin5.ValidateResourceTypeConfig.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Request}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateResourceTypeConfig.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Request} returns this
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue config = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Request} returns this
*/
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Request} returns this
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateResourceTypeConfig.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Response}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateResourceTypeConfig.Response;
  return proto.tfplugin5.ValidateResourceTypeConfig.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Response}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateResourceTypeConfig.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateResourceTypeConfig.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Diagnostic diagnostics = 1;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 1));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Response} returns this
*/
proto.tfplugin5.ValidateResourceTypeConfig.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ValidateResourceTypeConfig.Response} returns this
 */
proto.tfplugin5.ValidateResourceTypeConfig.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateDataSourceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateDataSourceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateDataSourceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateDataSourceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig}
 */
proto.tfplugin5.ValidateDataSourceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateDataSourceConfig;
  return proto.tfplugin5.ValidateDataSourceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateDataSourceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig}
 */
proto.tfplugin5.ValidateDataSourceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateDataSourceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateDataSourceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateDataSourceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateDataSourceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateDataSourceConfig.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateDataSourceConfig.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Request}
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateDataSourceConfig.Request;
  return proto.tfplugin5.ValidateDataSourceConfig.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateDataSourceConfig.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Request}
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateDataSourceConfig.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateDataSourceConfig.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Request} returns this
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue config = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Request} returns this
*/
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Request} returns this
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ValidateDataSourceConfig.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateDataSourceConfig.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateDataSourceConfig.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Response}
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateDataSourceConfig.Response;
  return proto.tfplugin5.ValidateDataSourceConfig.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateDataSourceConfig.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Response}
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateDataSourceConfig.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateDataSourceConfig.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Diagnostic diagnostics = 1;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 1));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Response} returns this
*/
proto.tfplugin5.ValidateDataSourceConfig.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ValidateDataSourceConfig.Response} returns this
 */
proto.tfplugin5.ValidateDataSourceConfig.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Configure.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Configure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Configure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Configure.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Configure}
 */
proto.tfplugin5.Configure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Configure;
  return proto.tfplugin5.Configure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Configure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Configure}
 */
proto.tfplugin5.Configure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Configure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Configure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Configure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Configure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Configure.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Configure.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Configure.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Configure.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    terraformVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Configure.Request}
 */
proto.tfplugin5.Configure.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Configure.Request;
  return proto.tfplugin5.Configure.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Configure.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Configure.Request}
 */
proto.tfplugin5.Configure.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerraformVersion(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Configure.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Configure.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Configure.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Configure.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerraformVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string terraform_version = 1;
 * @return {string}
 */
proto.tfplugin5.Configure.Request.prototype.getTerraformVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.Configure.Request} returns this
 */
proto.tfplugin5.Configure.Request.prototype.setTerraformVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue config = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.Configure.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.Configure.Request} returns this
*/
proto.tfplugin5.Configure.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.Configure.Request} returns this
 */
proto.tfplugin5.Configure.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.Configure.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.Configure.Response.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.Configure.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.Configure.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.Configure.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Configure.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.Configure.Response}
 */
proto.tfplugin5.Configure.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.Configure.Response;
  return proto.tfplugin5.Configure.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.Configure.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.Configure.Response}
 */
proto.tfplugin5.Configure.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.Configure.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.Configure.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.Configure.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.Configure.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Diagnostic diagnostics = 1;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.Configure.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 1));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.Configure.Response} returns this
*/
proto.tfplugin5.Configure.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.Configure.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.Configure.Response} returns this
 */
proto.tfplugin5.Configure.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ReadResource.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ReadResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ReadResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadResource.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ReadResource}
 */
proto.tfplugin5.ReadResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ReadResource;
  return proto.tfplugin5.ReadResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ReadResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ReadResource}
 */
proto.tfplugin5.ReadResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ReadResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ReadResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ReadResource.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ReadResource.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ReadResource.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadResource.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currentState: (f = msg.getCurrentState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    pb_private: msg.getPrivate_asB64(),
    providerMeta: (f = msg.getProviderMeta()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ReadResource.Request}
 */
proto.tfplugin5.ReadResource.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ReadResource.Request;
  return proto.tfplugin5.ReadResource.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ReadResource.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ReadResource.Request}
 */
proto.tfplugin5.ReadResource.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setCurrentState(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivate(value);
      break;
    case 4:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setProviderMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadResource.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ReadResource.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ReadResource.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadResource.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrentState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getPrivate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getProviderMeta();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.ReadResource.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ReadResource.Request} returns this
 */
proto.tfplugin5.ReadResource.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue current_state = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ReadResource.Request.prototype.getCurrentState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ReadResource.Request} returns this
*/
proto.tfplugin5.ReadResource.Request.prototype.setCurrentState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ReadResource.Request} returns this
 */
proto.tfplugin5.ReadResource.Request.prototype.clearCurrentState = function() {
  return this.setCurrentState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ReadResource.Request.prototype.hasCurrentState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes private = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.ReadResource.Request.prototype.getPrivate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes private = 3;
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {string}
 */
proto.tfplugin5.ReadResource.Request.prototype.getPrivate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivate()));
};


/**
 * optional bytes private = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadResource.Request.prototype.getPrivate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.ReadResource.Request} returns this
 */
proto.tfplugin5.ReadResource.Request.prototype.setPrivate = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional DynamicValue provider_meta = 4;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ReadResource.Request.prototype.getProviderMeta = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 4));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ReadResource.Request} returns this
*/
proto.tfplugin5.ReadResource.Request.prototype.setProviderMeta = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ReadResource.Request} returns this
 */
proto.tfplugin5.ReadResource.Request.prototype.clearProviderMeta = function() {
  return this.setProviderMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ReadResource.Request.prototype.hasProviderMeta = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ReadResource.Response.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ReadResource.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ReadResource.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ReadResource.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadResource.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    newState: (f = msg.getNewState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance),
    pb_private: msg.getPrivate_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ReadResource.Response}
 */
proto.tfplugin5.ReadResource.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ReadResource.Response;
  return proto.tfplugin5.ReadResource.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ReadResource.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ReadResource.Response}
 */
proto.tfplugin5.ReadResource.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setNewState(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadResource.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ReadResource.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ReadResource.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadResource.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
  f = message.getPrivate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional DynamicValue new_state = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ReadResource.Response.prototype.getNewState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ReadResource.Response} returns this
*/
proto.tfplugin5.ReadResource.Response.prototype.setNewState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ReadResource.Response} returns this
 */
proto.tfplugin5.ReadResource.Response.prototype.clearNewState = function() {
  return this.setNewState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ReadResource.Response.prototype.hasNewState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Diagnostic diagnostics = 2;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ReadResource.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ReadResource.Response} returns this
*/
proto.tfplugin5.ReadResource.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ReadResource.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ReadResource.Response} returns this
 */
proto.tfplugin5.ReadResource.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};


/**
 * optional bytes private = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.ReadResource.Response.prototype.getPrivate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes private = 3;
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {string}
 */
proto.tfplugin5.ReadResource.Response.prototype.getPrivate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivate()));
};


/**
 * optional bytes private = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadResource.Response.prototype.getPrivate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.ReadResource.Response} returns this
 */
proto.tfplugin5.ReadResource.Response.prototype.setPrivate = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.PlanResourceChange.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.PlanResourceChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.PlanResourceChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PlanResourceChange.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.PlanResourceChange}
 */
proto.tfplugin5.PlanResourceChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.PlanResourceChange;
  return proto.tfplugin5.PlanResourceChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.PlanResourceChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.PlanResourceChange}
 */
proto.tfplugin5.PlanResourceChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.PlanResourceChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.PlanResourceChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.PlanResourceChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PlanResourceChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.PlanResourceChange.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.PlanResourceChange.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PlanResourceChange.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    priorState: (f = msg.getPriorState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    proposedNewState: (f = msg.getProposedNewState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    priorPrivate: msg.getPriorPrivate_asB64(),
    providerMeta: (f = msg.getProviderMeta()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.PlanResourceChange.Request}
 */
proto.tfplugin5.PlanResourceChange.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.PlanResourceChange.Request;
  return proto.tfplugin5.PlanResourceChange.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.PlanResourceChange.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.PlanResourceChange.Request}
 */
proto.tfplugin5.PlanResourceChange.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setPriorState(value);
      break;
    case 3:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setProposedNewState(value);
      break;
    case 4:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPriorPrivate(value);
      break;
    case 6:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setProviderMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.PlanResourceChange.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.PlanResourceChange.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PlanResourceChange.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPriorState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getProposedNewState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getPriorPrivate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getProviderMeta();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue prior_state = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getPriorState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
*/
proto.tfplugin5.PlanResourceChange.Request.prototype.setPriorState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.clearPriorState = function() {
  return this.setPriorState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.hasPriorState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DynamicValue proposed_new_state = 3;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getProposedNewState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 3));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
*/
proto.tfplugin5.PlanResourceChange.Request.prototype.setProposedNewState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.clearProposedNewState = function() {
  return this.setProposedNewState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.hasProposedNewState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DynamicValue config = 4;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 4));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
*/
proto.tfplugin5.PlanResourceChange.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes prior_private = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getPriorPrivate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes prior_private = 5;
 * This is a type-conversion wrapper around `getPriorPrivate()`
 * @return {string}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getPriorPrivate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPriorPrivate()));
};


/**
 * optional bytes prior_private = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPriorPrivate()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getPriorPrivate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPriorPrivate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.setPriorPrivate = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional DynamicValue provider_meta = 6;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.getProviderMeta = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 6));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
*/
proto.tfplugin5.PlanResourceChange.Request.prototype.setProviderMeta = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.PlanResourceChange.Request} returns this
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.clearProviderMeta = function() {
  return this.setProviderMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.PlanResourceChange.Request.prototype.hasProviderMeta = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.PlanResourceChange.Response.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.PlanResourceChange.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.PlanResourceChange.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PlanResourceChange.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    plannedState: (f = msg.getPlannedState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    requiresReplaceList: jspb.Message.toObjectList(msg.getRequiresReplaceList(),
    proto.tfplugin5.AttributePath.toObject, includeInstance),
    plannedPrivate: msg.getPlannedPrivate_asB64(),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance),
    legacyTypeSystem: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.PlanResourceChange.Response}
 */
proto.tfplugin5.PlanResourceChange.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.PlanResourceChange.Response;
  return proto.tfplugin5.PlanResourceChange.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.PlanResourceChange.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.PlanResourceChange.Response}
 */
proto.tfplugin5.PlanResourceChange.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setPlannedState(value);
      break;
    case 2:
      var value = new proto.tfplugin5.AttributePath;
      reader.readMessage(value,proto.tfplugin5.AttributePath.deserializeBinaryFromReader);
      msg.addRequiresReplace(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPlannedPrivate(value);
      break;
    case 4:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacyTypeSystem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.PlanResourceChange.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.PlanResourceChange.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.PlanResourceChange.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlannedState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getRequiresReplaceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.AttributePath.serializeBinaryToWriter
    );
  }
  f = message.getPlannedPrivate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
  f = message.getLegacyTypeSystem();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional DynamicValue planned_state = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.getPlannedState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
*/
proto.tfplugin5.PlanResourceChange.Response.prototype.setPlannedState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.clearPlannedState = function() {
  return this.setPlannedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.hasPlannedState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated AttributePath requires_replace = 2;
 * @return {!Array<!proto.tfplugin5.AttributePath>}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.getRequiresReplaceList = function() {
  return /** @type{!Array<!proto.tfplugin5.AttributePath>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.AttributePath, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.AttributePath>} value
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
*/
proto.tfplugin5.PlanResourceChange.Response.prototype.setRequiresReplaceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.AttributePath=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.AttributePath}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.addRequiresReplace = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.AttributePath, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.clearRequiresReplaceList = function() {
  return this.setRequiresReplaceList([]);
};


/**
 * optional bytes planned_private = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.getPlannedPrivate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes planned_private = 3;
 * This is a type-conversion wrapper around `getPlannedPrivate()`
 * @return {string}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.getPlannedPrivate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPlannedPrivate()));
};


/**
 * optional bytes planned_private = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPlannedPrivate()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.getPlannedPrivate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPlannedPrivate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.setPlannedPrivate = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated Diagnostic diagnostics = 4;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 4));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
*/
proto.tfplugin5.PlanResourceChange.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};


/**
 * optional bool legacy_type_system = 5;
 * @return {boolean}
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.getLegacyTypeSystem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.PlanResourceChange.Response} returns this
 */
proto.tfplugin5.PlanResourceChange.Response.prototype.setLegacyTypeSystem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ApplyResourceChange.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ApplyResourceChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ApplyResourceChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ApplyResourceChange.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ApplyResourceChange}
 */
proto.tfplugin5.ApplyResourceChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ApplyResourceChange;
  return proto.tfplugin5.ApplyResourceChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ApplyResourceChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ApplyResourceChange}
 */
proto.tfplugin5.ApplyResourceChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ApplyResourceChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ApplyResourceChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ApplyResourceChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ApplyResourceChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ApplyResourceChange.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ApplyResourceChange.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ApplyResourceChange.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    priorState: (f = msg.getPriorState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    plannedState: (f = msg.getPlannedState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    plannedPrivate: msg.getPlannedPrivate_asB64(),
    providerMeta: (f = msg.getProviderMeta()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ApplyResourceChange.Request}
 */
proto.tfplugin5.ApplyResourceChange.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ApplyResourceChange.Request;
  return proto.tfplugin5.ApplyResourceChange.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ApplyResourceChange.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ApplyResourceChange.Request}
 */
proto.tfplugin5.ApplyResourceChange.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setPriorState(value);
      break;
    case 3:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setPlannedState(value);
      break;
    case 4:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPlannedPrivate(value);
      break;
    case 6:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setProviderMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ApplyResourceChange.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ApplyResourceChange.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ApplyResourceChange.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPriorState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getPlannedState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getPlannedPrivate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getProviderMeta();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue prior_state = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getPriorState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
*/
proto.tfplugin5.ApplyResourceChange.Request.prototype.setPriorState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.clearPriorState = function() {
  return this.setPriorState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.hasPriorState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DynamicValue planned_state = 3;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getPlannedState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 3));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
*/
proto.tfplugin5.ApplyResourceChange.Request.prototype.setPlannedState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.clearPlannedState = function() {
  return this.setPlannedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.hasPlannedState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DynamicValue config = 4;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 4));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
*/
proto.tfplugin5.ApplyResourceChange.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes planned_private = 5;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getPlannedPrivate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes planned_private = 5;
 * This is a type-conversion wrapper around `getPlannedPrivate()`
 * @return {string}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getPlannedPrivate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPlannedPrivate()));
};


/**
 * optional bytes planned_private = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPlannedPrivate()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getPlannedPrivate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPlannedPrivate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.setPlannedPrivate = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional DynamicValue provider_meta = 6;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.getProviderMeta = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 6));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
*/
proto.tfplugin5.ApplyResourceChange.Request.prototype.setProviderMeta = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ApplyResourceChange.Request} returns this
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.clearProviderMeta = function() {
  return this.setProviderMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ApplyResourceChange.Request.prototype.hasProviderMeta = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ApplyResourceChange.Response.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ApplyResourceChange.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ApplyResourceChange.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ApplyResourceChange.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    newState: (f = msg.getNewState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    pb_private: msg.getPrivate_asB64(),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance),
    legacyTypeSystem: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ApplyResourceChange.Response}
 */
proto.tfplugin5.ApplyResourceChange.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ApplyResourceChange.Response;
  return proto.tfplugin5.ApplyResourceChange.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ApplyResourceChange.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ApplyResourceChange.Response}
 */
proto.tfplugin5.ApplyResourceChange.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setNewState(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivate(value);
      break;
    case 3:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacyTypeSystem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ApplyResourceChange.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ApplyResourceChange.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ApplyResourceChange.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getPrivate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
  f = message.getLegacyTypeSystem();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional DynamicValue new_state = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.getNewState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Response} returns this
*/
proto.tfplugin5.ApplyResourceChange.Response.prototype.setNewState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ApplyResourceChange.Response} returns this
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.clearNewState = function() {
  return this.setNewState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.hasNewState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes private = 2;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.getPrivate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes private = 2;
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {string}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.getPrivate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivate()));
};


/**
 * optional bytes private = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.getPrivate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Response} returns this
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.setPrivate = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated Diagnostic diagnostics = 3;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 3));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Response} returns this
*/
proto.tfplugin5.ApplyResourceChange.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ApplyResourceChange.Response} returns this
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};


/**
 * optional bool legacy_type_system = 4;
 * @return {boolean}
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.getLegacyTypeSystem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tfplugin5.ApplyResourceChange.Response} returns this
 */
proto.tfplugin5.ApplyResourceChange.Response.prototype.setLegacyTypeSystem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ImportResourceState.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ImportResourceState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ImportResourceState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ImportResourceState}
 */
proto.tfplugin5.ImportResourceState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ImportResourceState;
  return proto.tfplugin5.ImportResourceState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ImportResourceState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ImportResourceState}
 */
proto.tfplugin5.ImportResourceState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ImportResourceState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ImportResourceState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ImportResourceState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ImportResourceState.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ImportResourceState.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ImportResourceState.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ImportResourceState.Request}
 */
proto.tfplugin5.ImportResourceState.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ImportResourceState.Request;
  return proto.tfplugin5.ImportResourceState.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ImportResourceState.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ImportResourceState.Request}
 */
proto.tfplugin5.ImportResourceState.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ImportResourceState.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ImportResourceState.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ImportResourceState.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.ImportResourceState.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ImportResourceState.Request} returns this
 */
proto.tfplugin5.ImportResourceState.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.tfplugin5.ImportResourceState.Request.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ImportResourceState.Request} returns this
 */
proto.tfplugin5.ImportResourceState.Request.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ImportResourceState.ImportedResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ImportResourceState.ImportedResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.ImportedResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: (f = msg.getState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    pb_private: msg.getPrivate_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ImportResourceState.ImportedResource}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ImportResourceState.ImportedResource;
  return proto.tfplugin5.ImportResourceState.ImportedResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ImportResourceState.ImportedResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ImportResourceState.ImportedResource}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ImportResourceState.ImportedResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ImportResourceState.ImportedResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.ImportedResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getPrivate_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ImportResourceState.ImportedResource} returns this
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue state = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.getState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ImportResourceState.ImportedResource} returns this
*/
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ImportResourceState.ImportedResource} returns this
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes private = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.getPrivate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes private = 3;
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {string}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.getPrivate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivate()));
};


/**
 * optional bytes private = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivate()`
 * @return {!Uint8Array}
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.getPrivate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tfplugin5.ImportResourceState.ImportedResource} returns this
 */
proto.tfplugin5.ImportResourceState.ImportedResource.prototype.setPrivate = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ImportResourceState.Response.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ImportResourceState.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ImportResourceState.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ImportResourceState.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    importedResourcesList: jspb.Message.toObjectList(msg.getImportedResourcesList(),
    proto.tfplugin5.ImportResourceState.ImportedResource.toObject, includeInstance),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ImportResourceState.Response}
 */
proto.tfplugin5.ImportResourceState.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ImportResourceState.Response;
  return proto.tfplugin5.ImportResourceState.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ImportResourceState.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ImportResourceState.Response}
 */
proto.tfplugin5.ImportResourceState.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.ImportResourceState.ImportedResource;
      reader.readMessage(value,proto.tfplugin5.ImportResourceState.ImportedResource.deserializeBinaryFromReader);
      msg.addImportedResources(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ImportResourceState.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ImportResourceState.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ImportResourceState.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ImportResourceState.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImportedResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tfplugin5.ImportResourceState.ImportedResource.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ImportedResource imported_resources = 1;
 * @return {!Array<!proto.tfplugin5.ImportResourceState.ImportedResource>}
 */
proto.tfplugin5.ImportResourceState.Response.prototype.getImportedResourcesList = function() {
  return /** @type{!Array<!proto.tfplugin5.ImportResourceState.ImportedResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.ImportResourceState.ImportedResource, 1));
};


/**
 * @param {!Array<!proto.tfplugin5.ImportResourceState.ImportedResource>} value
 * @return {!proto.tfplugin5.ImportResourceState.Response} returns this
*/
proto.tfplugin5.ImportResourceState.Response.prototype.setImportedResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tfplugin5.ImportResourceState.ImportedResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.ImportResourceState.ImportedResource}
 */
proto.tfplugin5.ImportResourceState.Response.prototype.addImportedResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tfplugin5.ImportResourceState.ImportedResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ImportResourceState.Response} returns this
 */
proto.tfplugin5.ImportResourceState.Response.prototype.clearImportedResourcesList = function() {
  return this.setImportedResourcesList([]);
};


/**
 * repeated Diagnostic diagnostics = 2;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ImportResourceState.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ImportResourceState.Response} returns this
*/
proto.tfplugin5.ImportResourceState.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ImportResourceState.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ImportResourceState.Response} returns this
 */
proto.tfplugin5.ImportResourceState.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ReadDataSource.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ReadDataSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ReadDataSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadDataSource.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ReadDataSource}
 */
proto.tfplugin5.ReadDataSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ReadDataSource;
  return proto.tfplugin5.ReadDataSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ReadDataSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ReadDataSource}
 */
proto.tfplugin5.ReadDataSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadDataSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ReadDataSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ReadDataSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadDataSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ReadDataSource.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ReadDataSource.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ReadDataSource.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadDataSource.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    providerMeta: (f = msg.getProviderMeta()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ReadDataSource.Request}
 */
proto.tfplugin5.ReadDataSource.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ReadDataSource.Request;
  return proto.tfplugin5.ReadDataSource.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ReadDataSource.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ReadDataSource.Request}
 */
proto.tfplugin5.ReadDataSource.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setProviderMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadDataSource.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ReadDataSource.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ReadDataSource.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadDataSource.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getProviderMeta();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type_name = 1;
 * @return {string}
 */
proto.tfplugin5.ReadDataSource.Request.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ReadDataSource.Request} returns this
 */
proto.tfplugin5.ReadDataSource.Request.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DynamicValue config = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ReadDataSource.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ReadDataSource.Request} returns this
*/
proto.tfplugin5.ReadDataSource.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ReadDataSource.Request} returns this
 */
proto.tfplugin5.ReadDataSource.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ReadDataSource.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DynamicValue provider_meta = 3;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ReadDataSource.Request.prototype.getProviderMeta = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 3));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ReadDataSource.Request} returns this
*/
proto.tfplugin5.ReadDataSource.Request.prototype.setProviderMeta = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ReadDataSource.Request} returns this
 */
proto.tfplugin5.ReadDataSource.Request.prototype.clearProviderMeta = function() {
  return this.setProviderMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ReadDataSource.Request.prototype.hasProviderMeta = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ReadDataSource.Response.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ReadDataSource.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ReadDataSource.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ReadDataSource.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadDataSource.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ReadDataSource.Response}
 */
proto.tfplugin5.ReadDataSource.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ReadDataSource.Response;
  return proto.tfplugin5.ReadDataSource.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ReadDataSource.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ReadDataSource.Response}
 */
proto.tfplugin5.ReadDataSource.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ReadDataSource.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ReadDataSource.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ReadDataSource.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ReadDataSource.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * optional DynamicValue state = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ReadDataSource.Response.prototype.getState = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ReadDataSource.Response} returns this
*/
proto.tfplugin5.ReadDataSource.Response.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ReadDataSource.Response} returns this
 */
proto.tfplugin5.ReadDataSource.Response.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ReadDataSource.Response.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Diagnostic diagnostics = 2;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ReadDataSource.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ReadDataSource.Response} returns this
*/
proto.tfplugin5.ReadDataSource.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ReadDataSource.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ReadDataSource.Response} returns this
 */
proto.tfplugin5.ReadDataSource.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.GetProvisionerSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.GetProvisionerSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.GetProvisionerSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProvisionerSchema.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.GetProvisionerSchema}
 */
proto.tfplugin5.GetProvisionerSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.GetProvisionerSchema;
  return proto.tfplugin5.GetProvisionerSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.GetProvisionerSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.GetProvisionerSchema}
 */
proto.tfplugin5.GetProvisionerSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.GetProvisionerSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.GetProvisionerSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.GetProvisionerSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProvisionerSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.GetProvisionerSchema.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.GetProvisionerSchema.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.GetProvisionerSchema.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProvisionerSchema.Request.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.GetProvisionerSchema.Request}
 */
proto.tfplugin5.GetProvisionerSchema.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.GetProvisionerSchema.Request;
  return proto.tfplugin5.GetProvisionerSchema.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.GetProvisionerSchema.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.GetProvisionerSchema.Request}
 */
proto.tfplugin5.GetProvisionerSchema.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.GetProvisionerSchema.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.GetProvisionerSchema.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.GetProvisionerSchema.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProvisionerSchema.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.GetProvisionerSchema.Response.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.GetProvisionerSchema.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.GetProvisionerSchema.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProvisionerSchema.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    provisioner: (f = msg.getProvisioner()) && proto.tfplugin5.Schema.toObject(includeInstance, f),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.GetProvisionerSchema.Response}
 */
proto.tfplugin5.GetProvisionerSchema.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.GetProvisionerSchema.Response;
  return proto.tfplugin5.GetProvisionerSchema.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.GetProvisionerSchema.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.GetProvisionerSchema.Response}
 */
proto.tfplugin5.GetProvisionerSchema.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.Schema;
      reader.readMessage(value,proto.tfplugin5.Schema.deserializeBinaryFromReader);
      msg.setProvisioner(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.GetProvisionerSchema.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.GetProvisionerSchema.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.GetProvisionerSchema.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvisioner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.Schema.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * optional Schema provisioner = 1;
 * @return {?proto.tfplugin5.Schema}
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.getProvisioner = function() {
  return /** @type{?proto.tfplugin5.Schema} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.Schema, 1));
};


/**
 * @param {?proto.tfplugin5.Schema|undefined} value
 * @return {!proto.tfplugin5.GetProvisionerSchema.Response} returns this
*/
proto.tfplugin5.GetProvisionerSchema.Response.prototype.setProvisioner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.GetProvisionerSchema.Response} returns this
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.clearProvisioner = function() {
  return this.setProvisioner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.hasProvisioner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Diagnostic diagnostics = 2;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.GetProvisionerSchema.Response} returns this
*/
proto.tfplugin5.GetProvisionerSchema.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.GetProvisionerSchema.Response} returns this
 */
proto.tfplugin5.GetProvisionerSchema.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateProvisionerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateProvisionerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateProvisionerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateProvisionerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig}
 */
proto.tfplugin5.ValidateProvisionerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateProvisionerConfig;
  return proto.tfplugin5.ValidateProvisionerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateProvisionerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig}
 */
proto.tfplugin5.ValidateProvisionerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateProvisionerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateProvisionerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateProvisionerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateProvisionerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateProvisionerConfig.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateProvisionerConfig.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Request}
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateProvisionerConfig.Request;
  return proto.tfplugin5.ValidateProvisionerConfig.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateProvisionerConfig.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Request}
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateProvisionerConfig.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateProvisionerConfig.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional DynamicValue config = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Request} returns this
*/
proto.tfplugin5.ValidateProvisionerConfig.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Request} returns this
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ValidateProvisionerConfig.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ValidateProvisionerConfig.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ValidateProvisionerConfig.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Response}
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ValidateProvisionerConfig.Response;
  return proto.tfplugin5.ValidateProvisionerConfig.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ValidateProvisionerConfig.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Response}
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ValidateProvisionerConfig.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ValidateProvisionerConfig.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Diagnostic diagnostics = 1;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 1));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Response} returns this
*/
proto.tfplugin5.ValidateProvisionerConfig.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ValidateProvisionerConfig.Response} returns this
 */
proto.tfplugin5.ValidateProvisionerConfig.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ProvisionResource.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ProvisionResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ProvisionResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ProvisionResource.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ProvisionResource}
 */
proto.tfplugin5.ProvisionResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ProvisionResource;
  return proto.tfplugin5.ProvisionResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ProvisionResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ProvisionResource}
 */
proto.tfplugin5.ProvisionResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ProvisionResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ProvisionResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ProvisionResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ProvisionResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ProvisionResource.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ProvisionResource.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ProvisionResource.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ProvisionResource.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    config: (f = msg.getConfig()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && proto.tfplugin5.DynamicValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ProvisionResource.Request}
 */
proto.tfplugin5.ProvisionResource.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ProvisionResource.Request;
  return proto.tfplugin5.ProvisionResource.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ProvisionResource.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ProvisionResource.Request}
 */
proto.tfplugin5.ProvisionResource.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 2:
      var value = new proto.tfplugin5.DynamicValue;
      reader.readMessage(value,proto.tfplugin5.DynamicValue.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ProvisionResource.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ProvisionResource.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ProvisionResource.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ProvisionResource.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tfplugin5.DynamicValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional DynamicValue config = 1;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ProvisionResource.Request.prototype.getConfig = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 1));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ProvisionResource.Request} returns this
*/
proto.tfplugin5.ProvisionResource.Request.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ProvisionResource.Request} returns this
 */
proto.tfplugin5.ProvisionResource.Request.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ProvisionResource.Request.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DynamicValue connection = 2;
 * @return {?proto.tfplugin5.DynamicValue}
 */
proto.tfplugin5.ProvisionResource.Request.prototype.getConnection = function() {
  return /** @type{?proto.tfplugin5.DynamicValue} */ (
    jspb.Message.getWrapperField(this, proto.tfplugin5.DynamicValue, 2));
};


/**
 * @param {?proto.tfplugin5.DynamicValue|undefined} value
 * @return {!proto.tfplugin5.ProvisionResource.Request} returns this
*/
proto.tfplugin5.ProvisionResource.Request.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tfplugin5.ProvisionResource.Request} returns this
 */
proto.tfplugin5.ProvisionResource.Request.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tfplugin5.ProvisionResource.Request.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tfplugin5.ProvisionResource.Response.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tfplugin5.ProvisionResource.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.tfplugin5.ProvisionResource.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tfplugin5.ProvisionResource.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ProvisionResource.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: jspb.Message.getFieldWithDefault(msg, 1, ""),
    diagnosticsList: jspb.Message.toObjectList(msg.getDiagnosticsList(),
    proto.tfplugin5.Diagnostic.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tfplugin5.ProvisionResource.Response}
 */
proto.tfplugin5.ProvisionResource.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tfplugin5.ProvisionResource.Response;
  return proto.tfplugin5.ProvisionResource.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tfplugin5.ProvisionResource.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tfplugin5.ProvisionResource.Response}
 */
proto.tfplugin5.ProvisionResource.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutput(value);
      break;
    case 2:
      var value = new proto.tfplugin5.Diagnostic;
      reader.readMessage(value,proto.tfplugin5.Diagnostic.deserializeBinaryFromReader);
      msg.addDiagnostics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tfplugin5.ProvisionResource.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tfplugin5.ProvisionResource.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tfplugin5.ProvisionResource.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tfplugin5.ProvisionResource.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDiagnosticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tfplugin5.Diagnostic.serializeBinaryToWriter
    );
  }
};


/**
 * optional string output = 1;
 * @return {string}
 */
proto.tfplugin5.ProvisionResource.Response.prototype.getOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tfplugin5.ProvisionResource.Response} returns this
 */
proto.tfplugin5.ProvisionResource.Response.prototype.setOutput = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Diagnostic diagnostics = 2;
 * @return {!Array<!proto.tfplugin5.Diagnostic>}
 */
proto.tfplugin5.ProvisionResource.Response.prototype.getDiagnosticsList = function() {
  return /** @type{!Array<!proto.tfplugin5.Diagnostic>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tfplugin5.Diagnostic, 2));
};


/**
 * @param {!Array<!proto.tfplugin5.Diagnostic>} value
 * @return {!proto.tfplugin5.ProvisionResource.Response} returns this
*/
proto.tfplugin5.ProvisionResource.Response.prototype.setDiagnosticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tfplugin5.Diagnostic=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tfplugin5.Diagnostic}
 */
proto.tfplugin5.ProvisionResource.Response.prototype.addDiagnostics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tfplugin5.Diagnostic, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tfplugin5.ProvisionResource.Response} returns this
 */
proto.tfplugin5.ProvisionResource.Response.prototype.clearDiagnosticsList = function() {
  return this.setDiagnosticsList([]);
};


/**
 * @enum {number}
 */
proto.tfplugin5.StringKind = {
  PLAIN: 0,
  MARKDOWN: 1
};

goog.object.extend(exports, proto.tfplugin5);
