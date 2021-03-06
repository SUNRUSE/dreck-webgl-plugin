/**
 * An instance of a WebGL program.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into both the vertex and fragment shaders.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebGlProgramInstance<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet,
  TUniformDefinitionSet extends WebGlUniformDefinitionSet
> = {
  /**
   * The WebGL program itself.
   */
  readonly program: WebGLProgram;

  /**
   * The locations of the attributes within the WebGL program.  Any not found (not used, for example) are -1.
   */
  readonly attributeLocations: {
    readonly [TKey in keyof TAttributeDefinitionSet]: number;
  };

  /**
   * Information regarding the uniforms within the WebGL program.  Any not found (not used, for example) are null.
   */
  readonly uniforms: {
    readonly [TKey in keyof TUniformDefinitionSet]: WebGlProgramInstanceUniform<
      TUniformDefinitionSet[TKey]
    >;
  };
};
