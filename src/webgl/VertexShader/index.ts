import type { ContextInterface } from "../ContextInterface";
import { Constants } from "../Constants";
import { Shader } from "../Shader";
import type { UniformDefinitionSet } from "../UniformDefinitionSet";
import type { VaryingDefinitionSet } from "../VaryingDefinitionSet";
import type { AttributeDefinitionSet } from "../AttributeDefinitionSet";

/**
 * A WebGL vertex shader.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into the vertex shader.
 * @template TVaryingDefinitionSet The varyings output by the vertex shader.
 */
export abstract class VertexShader<
  TAttributeDefinitionSet extends AttributeDefinitionSet,
  TUniformDefinitionSet extends UniformDefinitionSet,
  TVaryingDefinitionSet extends VaryingDefinitionSet
> extends Shader<Constants.VertexShader> {
  /**
   * Creates a new WebGL vertex shader.
   * @param context The context under which the shader will be created.
   * @param attributeDefinitionSet The attributes fed into the vertex shader.
   * @param uniformDefinitionSet The uniforms fed into the vertex shader.
   * @param varyingDefinitionSet The varyings output by the vertex shader.
   */
  constructor(
    context: ContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >,
    public readonly attributeDefinitionSet: TAttributeDefinitionSet,
    public readonly uniformDefinitionSet: TUniformDefinitionSet,
    public readonly varyingDefinitionSet: TVaryingDefinitionSet
  ) {
    super(context, Constants.VertexShader);
  }

  getDeclarations() {
    return [
      ...Object.entries(this.attributeDefinitionSet).map(([key, value]) => ({
        type: `attribute` as `attribute`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: 1,
      })),
      ...Object.entries(this.uniformDefinitionSet).map(([key, value]) => ({
        type: `uniform` as `uniform`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: value.quantity,
      })),
      ...Object.entries(this.varyingDefinitionSet).map(([key, value]) => ({
        type: `varying` as `varying`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: value.quantity,
      })),
    ].sort((a, b) => a.name.localeCompare(b.name));
  }
}
