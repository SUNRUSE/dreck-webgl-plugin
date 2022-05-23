/**
 * A WebGL program, where the source is pre-determined at construction.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into both the vertex and fragment shaders.
 * @template TVaryingDefinitionSet The varyings output from the vertex shader to the fragment shader.
 */
export class StaticProgram<
  TAttributeDefinitionSet extends AttributeDefinitionSet,
  TUniformDefinitionSet extends UniformDefinitionSet,
  TVaryingDefinitionSet extends VaryingDefinitionSet
> extends Program<
  TAttributeDefinitionSet,
  TUniformDefinitionSet,
  TVaryingDefinitionSet
> {
  /**
   * Creates a new WebGL program, where the source is pre-determined at construction.
   * @param context The context under which to create a program.
   * @param attributeDefinitionSet The attributes fed into the vertex shader.
   * @param uniformDefinitionSet The uniforms fed into the vertex and fragment shaders.
   * @param varyingDefinitionSet The varyings output by the vertex shader and fed into the fragment shader.
   * @param vertexHeaderLines The lines of the vertex shader preceding the declarations and body.
   * @param vertexBodyLines The lines of the vertex shader following the header and declarations.
   * @param fragmentHeaderLines The lines of the fragment shader preceding the declarations and body.
   * @param fragmentBodyLines The lines of the fragment shader following the header and declarations.
   */
  constructor(
    context: ContextInterface<
      | `createProgram`
      | `attachShader`
      | `linkProgram`
      | `getProgramParameter`
      | `isContextLost`
      | `getProgramInfoLog`
      | `detachShader`
      | `deleteProgram`
      | `useProgram`
      | `getAttribLocation`
      | `getUniformLocation`
      | `createShader`
      | `shaderSource`
      | `getShaderInfoLog`
      | `getShaderParameter`
      | `deleteShader`
      | `compileShader`
    >,
    public readonly attributeDefinitionSet: TAttributeDefinitionSet,
    public readonly uniformDefinitionSet: TUniformDefinitionSet,
    public readonly varyingDefinitionSet: TVaryingDefinitionSet,
    public readonly vertexHeaderLines: ReadonlyArray<string>,
    public readonly vertexBodyLines: ReadonlyArray<string>,
    public readonly fragmentHeaderLines: ReadonlyArray<string>,
    public readonly fragmentBodyLines: ReadonlyArray<string>
  ) {
    super(
      context,
      new StaticVertexShader(
        context,
        vertexHeaderLines,
        attributeDefinitionSet,
        uniformDefinitionSet,
        varyingDefinitionSet,
        vertexBodyLines
      ),
      new StaticFragmentShader(
        context,
        fragmentHeaderLines,
        uniformDefinitionSet,
        varyingDefinitionSet,
        fragmentBodyLines
      )
    );
  }
}
