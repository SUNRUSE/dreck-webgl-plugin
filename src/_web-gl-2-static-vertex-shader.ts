/**
 * A WebGL vertex shader, the source of which is pre-defined at construction.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into the vertex shader.
 * @template TVaryingDefinitionSet The varyings output by the vertex shader.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlStaticVertexShader<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet,
  TUniformDefinitionSet extends WebGlUniformDefinitionSet,
  TVaryingDefinitionSet extends WebGlVaryingDefinitionSet
> extends WebGlVertexShader<
  TAttributeDefinitionSet,
  TUniformDefinitionSet,
  TVaryingDefinitionSet
> {
  /**
   * Creates a new WebGL vertex shader, the source of which is pre-defined at construction.
   * @param context The context under which the shader will be created.
   * @param headerLines The lines of the shader preceding the declarations and body.
   * @param attributeDefinitionSet The attributes fed into the vertex shader.
   * @param uniformDefinitionSet The uniforms fed into the vertex shader.
   * @param varyingDefinitionSet The varyings output by the vertex shader.
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
