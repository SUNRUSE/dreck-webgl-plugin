/**
 * A map of shader types to Javascript equivalents.
 */
export type ShaderPrimitive = {
  /**
   * A 1-dimensional float.
   */
  readonly [Constants.Float]: Float;

  /**
   * A 2-dimensional floating-point vector.
   */
  readonly [Constants.Vec2]: Vec2;

  /**
   * A 3-dimensional floating-point vector.
   */
  readonly [Constants.Vec3]: Vec3;

  /**
   * A 4-dimensional floating-point vector.
   */
  readonly [Constants.Vec4]: Vec4;

  /**
   * A 2x2 floating-point column-order matrix.
   */
  readonly [Constants.Mat2]: Mat2;

  /**
   * A 3x3 floating-point column-order matrix.
   */
  readonly [Constants.Mat3]: Mat3;

  /**
   * A 4x4 floating-point column-order matrix.
   */
  readonly [Constants.Mat4]: Mat4;
};
