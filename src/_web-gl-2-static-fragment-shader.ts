/**
 * A WebGL fragment shader, the source of which is pre-defined at construction.
 * @template TUniformDefinitionSet The uniforms fed into the fragment shader.
 * @template TVaryingDefinitionSet The varyings output by the fragment shader.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlStaticFragmentShader<
  TUniformDefinitionSet extends WebGlUniformDefinitionSet,
  TVaryingDefinitionSet extends WebGlVaryingDefinitionSet
> extends WebGlFragmentShader<TUniformDefinitionSet, TVaryingDefinitionSet> {
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
    context: WebGlContextInterface<
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
