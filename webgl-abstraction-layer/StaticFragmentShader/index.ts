import type { ContextInterface } from "../ContextInterface";
import type { UniformDefinitionSet } from "../UniformDefinitionSet";
import type { VaryingDefinitionSet } from "../VaryingDefinitionSet";
import { FragmentShader } from "../FragmentShader";

/**
 * A WebGL fragment shader, the source of which is pre-defined at construction.
 * @template TUniformDefinitionSet The uniforms fed into the fragment shader.
 * @template TVaryingDefinitionSet The varyings output by the fragment shader.
 */
export class StaticFragmentShader<
  TUniformDefinitionSet extends UniformDefinitionSet,
  TVaryingDefinitionSet extends VaryingDefinitionSet
> extends FragmentShader<TUniformDefinitionSet, TVaryingDefinitionSet> {
  /**
   * Creates a new WebGL fragment shader, the source of which is pre-defined at construction.
   * @param context The context under which the shader will be created.
   * @param headerLines The lines of the shader preceding the declarations and body.
   * @param attributeDefinitionSet The attributes fed into the fragment shader.
   * @param uniformDefinitionSet The uniforms fed into the fragment shader.
   * @param varyingDefinitionSet The varyings output by the fragment shader.
   * @param bodyLines The lines of the shader following the header and declarations.
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
    uniformDefinitionSet: TUniformDefinitionSet,
    varyingDefinitionSet: TVaryingDefinitionSet,
    public readonly bodyLines: ReadonlyArray<string>
  ) {
    super(context, uniformDefinitionSet, varyingDefinitionSet);
  }

  getHeaderLines(): ReadonlyArray<string> {
    return this.headerLines;
  }

  getBodyLines(): ReadonlyArray<string> {
    return this.bodyLines;
  }
}
