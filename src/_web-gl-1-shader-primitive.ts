/**
 * A map of shader types to Javascript equivalents.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebGlShaderPrimitive = {
  /**
   * A 1-dimensional float.
   */
  readonly [WebGlConstants.Float]: WebGlFloat;

  /**
   * A 2-dimensional floating-point vector.
   */
  readonly [WebGlConstants.Vec2]: WebGlVec2;

  /**
   * A 3-dimensional floating-point vector.
   */
  readonly [WebGlConstants.Vec3]: WebGlVec3;

  /**
   * A 4-dimensional floating-point vector.
   */
  readonly [WebGlConstants.Vec4]: WebGlVec4;

  /**
   * A 2x2 floating-point column-order matrix.
   */
  readonly [WebGlConstants.Mat2]: WebGlMat2;

  /**
   * A 3x3 floating-point column-order matrix.
   */
  readonly [WebGlConstants.Mat3]: WebGlMat3;

  /**
   * A 4x4 floating-point column-order matrix.
   */
  readonly [WebGlConstants.Mat4]: WebGlMat4;

  /**
   * A 2D texture sampler.
   */
  readonly [WebGlConstants.Sampler2D]: WebGlResourceInterface<WebGLTexture>;

  /**
   * A cube texture sampler.
   */
  readonly [WebGlConstants.SamplerCube]: WebGlResourceInterface<WebGLTexture>;
};
