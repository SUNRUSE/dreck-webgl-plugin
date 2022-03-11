import type { ContextInterface } from "../ContextInterface";
import type { UniformDefinitionSet } from "../UniformDefinitionSet";
import type { VaryingDefinitionSet } from "../VaryingDefinitionSet";
import type { AttributeDefinitionSet } from "../AttributeDefinitionSet";
import { VertexShader } from "../VertexShader";

/**
 * A WebGL vertex shader, the source of which is pre-defined at construction.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into the vertex shader.
 * @template TVaryingDefinitionSet The varyings output by the vertex shader.
 */
export class StaticVertexShader<
  TAttributeDefinitionSet extends AttributeDefinitionSet,
  TUniformDefinitionSet extends UniformDefinitionSet,
  TVaryingDefinitionSet extends VaryingDefinitionSet
> extends VertexShader<
  TAttributeDefinitionSet,
  TUniformDefinitionSet,
  TVaryingDefinitionSet
> {
  /**
   * Creates a new WebGL vertex shader, the source of which is pre-defined at construction.
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
    public readonly headerLines: ReadonlyArray<string>,
    attributeDefinitionSet: TAttributeDefinitionSet,
    uniformDefinitionSet: TUniformDefinitionSet,
    varyingDefinitionSet: TVaryingDefinitionSet,
    public readonly bodyLines: ReadonlyArray<string>
  ) {
    super(
      context,
      attributeDefinitionSet,
      uniformDefinitionSet,
      varyingDefinitionSet
    );
  }

  getHeaderLines(): ReadonlyArray<string> {
    return this.headerLines;
  }

  getBodyLines(): ReadonlyArray<string> {
    return this.bodyLines;
  }
}