/**
 * An instance of a WebGL program.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into both the vertex and fragment shaders.
 */
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
   * The locations of the uniforms within the WebGL program.  Any not found (not used, for example) are null.
   */
  readonly uniformLocations: {
    readonly [TKey in keyof TUniformDefinitionSet]: null | WebGLUniformLocation;
  };
};
