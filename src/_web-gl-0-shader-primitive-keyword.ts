/**
 * Maps shader types to their GLSL keywords (vec2 = vec2, etc.).
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const webGlShaderPrimitiveKeyword = {
  /**
   * A 1-dimensional float.
   */
  [WebGlConstants.Float]: `float`,

  /**
   * A 2-dimensional floating-point vector.
   */
  [WebGlConstants.Vec2]: `vec2`,

  /**
   * A 3-dimensional floating-point vector.
   */
  [WebGlConstants.Vec3]: `vec3`,

  /**
   * A 4-dimensional floating-point vector.
   */
  [WebGlConstants.Vec4]: `vec4`,

  /**
   * A 2x2 floating-point column-order matrix.
   */
  [WebGlConstants.Mat2]: `mat2`,

  /**
   * A 3x3 floating-point column-order matrix.
   */
  [WebGlConstants.Mat3]: `mat3`,

  /**
   * A 4x4 floating-point column-order matrix.
   */
  [WebGlConstants.Mat4]: `mat4`,

  /**
   * A 2D texture sampler.
   */
  [WebGlConstants.Sampler2D]: `sampler2D`,

  /**
   * A cube texture sampler.
   */
  [WebGlConstants.SamplerCube]: `samplerCube`,
};
