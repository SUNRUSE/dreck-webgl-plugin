/**
 * A uniform within an instance of a WebGL program.  For non-textures, this is the WebGL location.  Null if the uniform is unused by the program.
 * @template TUniformDefinition The uniform of which this is an instance.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebGlProgramInstanceUniform<
  TUniformDefinition extends WebGlUniformDefinition
> =
  | null
  | (TUniformDefinition[`shaderPrimitive`] extends
      | WebGlConstants.Sampler2D
      | WebGlConstants.SamplerCube
      ? TUniformDefinition[`quantity`] extends 1
        ? {
            /**
             * The location of the uniform.
             */
            readonly location: WebGLUniformLocation;

            /**
             * The texture index with which it is associated.
             */
            readonly index: WebGlTextureIndex;
          }
        : {
            /**
             * The location of the uniform.
             */
            readonly location: WebGLUniformLocation;

            /**
             * The texture indices with which it is associated.
             */
            readonly indices: WebGlTextureIndex[];
          }
      : WebGLUniformLocation);
