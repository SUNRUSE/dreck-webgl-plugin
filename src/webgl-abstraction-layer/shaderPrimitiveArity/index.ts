import type { ShaderPrimitive } from "../ShaderPrimitive";
import { Constants } from "../Constants";

/**
 * Maps shader types to their arities (vec3 = 3, etc.).
 */
export const shaderPrimitiveArity: {
  readonly [T in keyof ShaderPrimitive]: number;
} = {
  /**
   * A 1-dimensional float.
   */
  [Constants.Float]: 1,

  /**
   * A 2-dimensional floating-point vector.
   */
  [Constants.Vec2]: 2,

  /**
   * A 3-dimensional floating-point vector.
   */
  [Constants.Vec3]: 3,

  /**
   * A 4-dimensional floating-point vector.
   */
  [Constants.Vec4]: 4,

  /**
   * A 2x2 floating-point column-order matrix.
   */
  [Constants.Mat2]: 4,

  /**
   * A 3x3 floating-point column-order matrix.
   */
  [Constants.Mat3]: 9,

  /**
   * A 4x4 floating-point column-order matrix.
   */
  [Constants.Mat4]: 16,
};
