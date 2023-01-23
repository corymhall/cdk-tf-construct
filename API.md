# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformResource <a name="TerraformResource" id="cdk-tf-construct.TerraformResource"></a>

#### Initializers <a name="Initializers" id="cdk-tf-construct.TerraformResource.Initializer"></a>

```typescript
import { TerraformResource } from 'cdk-tf-construct'

new TerraformResource(scope: Construct, id: string, props: TerraformResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-tf-construct.TerraformResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-tf-construct.TerraformResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-tf-construct.TerraformResource.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-tf-construct.TerraformResourceProps">TerraformResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-tf-construct.TerraformResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-tf-construct.TerraformResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-tf-construct.TerraformResource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-tf-construct.TerraformResourceProps">TerraformResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-tf-construct.TerraformResource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-tf-construct.TerraformResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-tf-construct.TerraformResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-tf-construct.TerraformResource.isConstruct"></a>

```typescript
import { TerraformResource } from 'cdk-tf-construct'

TerraformResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-tf-construct.TerraformResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-tf-construct.TerraformResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-tf-construct.TerraformResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### TerraformResourceProps <a name="TerraformResourceProps" id="cdk-tf-construct.TerraformResourceProps"></a>

#### Initializer <a name="Initializer" id="cdk-tf-construct.TerraformResourceProps.Initializer"></a>

```typescript
import { TerraformResourceProps } from 'cdk-tf-construct'

const terraformResourceProps: TerraformResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-tf-construct.TerraformResourceProps.property.providerConfigSecret">providerConfigSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |

---

##### `providerConfigSecret`<sup>Required</sup> <a name="providerConfigSecret" id="cdk-tf-construct.TerraformResourceProps.property.providerConfigSecret"></a>

```typescript
public readonly providerConfigSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---



