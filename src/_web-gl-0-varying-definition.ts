/**
 * Describes information which is output from the vertex shader, interpolated and fed into the fragment shader.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebGlVaryingDefinition = {
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
    | WebGlConstants.Mat4;

  /**
   * When 1, the varying is NOT an array.  When greater than 1, the varying is an array of the specified length.
   */
  readonly quantity: number;
};
