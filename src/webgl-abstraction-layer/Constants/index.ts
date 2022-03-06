/**
 * WebGL constants.
 */
export const enum Constants {
  /**
   * The buffer contains vertex attributes.
   */
  ArrayBuffer = 34962,

  /**
   * The buffer contains element indices.
   */
  ElementArrayBuffer = 34963,

  /**
   * The buffer will only be populated once, and will be rendered from many times.
   */
  StaticDraw = 35044,

  /**
   * Render each vertex as a point.
   */
  Points = 0,

  /**
   * Render each pair of vertices as a line.
   */
  Lines = 1,

  /**
   * Render a ring of lines, where each vertex is a point on the ring.
   */
  LineLoop = 2,

  /**
   * Render a polyline, where each vertex is a point visited.
   */
  LineStrip = 3,

  /**
   * Render triangles, where each three vertices describe a single triangle.
   */
  Triangles = 4,

  /**
   * Render a "strip" of triangles, where the first three vertices describe a triangle, then the second, third and fourth vertices describe a triangle, then the third, fourth and fifth vertices describe a triangle, and so on.
   */
  TriangleStrip = 5,

  /**
   * Render a "fan" of triangles, where the first three vertices describe a triangle, then the first, third and fourth vertices describe a triangle, then the first, fourth and fifth vertices describe a triangle, and so on.
   */
  TriangleFan = 6,

  /**
   * A signed 8-bit integer.
   */
  Byte = 5120,

  /**
   * An unsigned 8-bit integer.
   */
  UnsignedByte = 5121,

  /**
   * A signed 16-bit integer.
   */
  Short = 5122,

  /**
   * An unsigned 16-bit integer.
   */
  UnsignedShort = 5123,

  /**
   * A signed 32-bit integer.
   */
  Int = 5124,

  /**
   * An unsigned 32-bit integer.
   */
  UnsignedInt = 5125,

  /**
   * A 32-bit IEEE float.
   */
  Float = 5126,

  /**
   * The shader computes vertex positions in normalized device coordinates.
   */
  VertexShader = 35633,

  /**
   * The shader computes fragment colors as unit intervals.
   */
  FragmentShader = 35632,

  /**
   * A 2-dimensional floating-point vector.
   */
  Vec2 = 35664,

  /**
   * A 3-dimensional floating-point vector.
   */
  Vec3 = 35665,

  /**
   * A 4-dimensional floating-point vector.
   */
  Vec4 = 35666,

  /**
   * A 2x2 floating-point column-order matrix.
   */
  Mat2 = 35674,

  /**
   * A 3x3 floating-point column-order matrix.
   */
  Mat3 = 35675,

  /**
   * A 4x4 floating-point column-order matrix.
   */
  Mat4 = 35676,

  /**
   * The shader parameter which retrieves whether compilation succeeded.
   */
  CompileStatus = 35713,

  /**
   * The program parameter which retrieves whether linking succeeded.
   */
  LinkStatus = 35714,
}
