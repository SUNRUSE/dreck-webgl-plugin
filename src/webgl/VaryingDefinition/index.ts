import type { Constants } from "../Constants";

/**
 * Describes information which is output from the vertex shader, interpolated and fed into the fragment shader.
 */
export type VaryingDefinition = {
  /**
   * The type of the value within the shader.
   */
  readonly shaderPrimitive:
    | Constants.Float
    | Constants.Vec2
    | Constants.Vec3
    | Constants.Vec4
    | Constants.Mat2
    | Constants.Mat3
    | Constants.Mat4;

  /**
   * When 1, the varying is NOT an array.  When greater than 1, the varying is an array of the specified length.
   */
  readonly quantity: number;
};
