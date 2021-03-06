/**
 * Describes an input to a shader which is uniform across all vertices and fragments of a draw call.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebGlUniformDefinition = {
  /**
   * The type of the value within the shader.
   */
  readonly shaderPrimitive:
    | WebGlConstants.Float
    | WebGlConstants.Vec2
    | WebGlConstants.Vec3
    | WebGlConstants.Vec4
    | WebGlConstants.Mat2
    | WebGlConstants.Mat3
    | WebGlConstants.Mat4
    | WebGlConstants.Sampler2D
    | WebGlConstants.SamplerCube;

  /**
   * When 1, the uniform is NOT an array.  When greater than 1, the uniform is an array of the specified length.
   */
  readonly quantity: number;
};
