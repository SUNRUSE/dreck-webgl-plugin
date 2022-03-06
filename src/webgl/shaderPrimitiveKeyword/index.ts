import { Constants } from "../Constants";

/**
 * Maps shader types to their GLSL keywords (vec2 = vec2, etc.).
 */
export const shaderPrimitiveKeyword = {
  /**
   * A 1-dimensional float.
   */
  [Constants.Float]: `float`,

  /**
   * A 2-dimensional floating-point vector.
   */
  [Constants.Vec2]: `vec2`,

  /**
   * A 3-dimensional floating-point vector.
   */
  [Constants.Vec3]: `vec3`,

  /**
   * A 4-dimensional floating-point vector.
   */
  [Constants.Vec4]: `vec4`,

  /**
   * A 2x2 floating-point column-order matrix.
   */
  [Constants.Mat2]: `mat2`,

  /**
   * A 3x3 floating-point column-order matrix.
   */
  [Constants.Mat3]: `mat3`,

  /**
   * A 4x4 floating-point column-order matrix.
   */
  [Constants.Mat4]: `mat4`,
};
