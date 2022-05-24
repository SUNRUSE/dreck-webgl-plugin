/**
 * Maps shader types to their arities (vec3 = 3, etc.).
 */
const webGlShaderPrimitiveArity = {
  /**
   * A 1-dimensional float.
   */
  [WebGlConstants.Float]: 1,

  /**
   * A 2-dimensional floating-point vector.
   */
  [WebGlConstants.Vec2]: 2,

  /**
   * A 3-dimensional floating-point vector.
   */
  [WebGlConstants.Vec3]: 3,

  /**
   * A 4-dimensional floating-point vector.
   */
  [WebGlConstants.Vec4]: 4,

  /**
   * A 2x2 floating-point column-order matrix.
   */
  [WebGlConstants.Mat2]: 4,

  /**
   * A 3x3 floating-point column-order matrix.
   */
  [WebGlConstants.Mat3]: 9,

  /**
   * A 4x4 floating-point column-order matrix.
   */
  [WebGlConstants.Mat4]: 16,
};
