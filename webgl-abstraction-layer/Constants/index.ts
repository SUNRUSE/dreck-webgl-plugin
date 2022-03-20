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

  /**
   * The texture is to repeat without mirroring.
   */
  Repeat = 10497,

  /**
   * The texture's final row and column is to be repeated into infinity.
   */
  ClampToEdge = 33071,

  /**
   * The texture is to repeat, mirroring each time it does.
   */
  MirroredRepeat = 33648,

  /**
   * The nearest texture pixel to the sampled coordinate is to be used, making square, sharp pixels.  No mip-mapping is to be applied.
   */
  Nearest = 9728,

  /**
   * The texture is to be interpolated using bilinear interpolation, without mip-mapping.
   */
  Linear = 9729,

  /**
   * The nearest texture pixel to the sampled coordinate is to be used, making square, sharp pixels.  Mip maps are present but not interpolated between.
   */
  NearestMipmapNearest = 9984,

  /**
   * The texture is to be interpolated using bilinear interpolation.  Mip maps are present but not interpolated between.
   */
  LinearMipmapNearest = 9985,

  /**
   * The nearest texture pixel to the sampled coordinate is to be used, making square, sharp pixels.  Mip maps are present and linearly interpolated between.
   */
  NearestMipmapLinear = 9986,

  /**
   * The texture is to be interpolated using bilinear interpolation.  Mip maps are present and linearly interpolated between.
   */
  LinearMipmapLinear = 9987,

  /**
   * The filter to apply when enlarging a texture.
   */
  TextureMagnificationFilter = 10240,

  /**
   * The filter to apply when shrinking a texture.
   */
  TextureMinificationFilter = 10241,

  /**
   * The wrapping applied on the X axis.
   */
  TextureWrapX = 10242,

  /**
   * The wrapping applied on the Y axis.
   */
  TextureWrapY = 10243,

  /**
   * A 2D texture.
   */
  Texture2D = 3553,

  /**
   * A cube-map texture.
   */
  TextureCubeMap = 34067,

  /**
   * The texture on the face on the positive X axis of the cube.
   */
  TextureCubeMapPositiveX = 34069,

  /**
   * The texture on the face on the negative X axis of the cube.
   */
  TextureCubeMapNegativeX = 34070,

  /**
   * The texture on the face on the positive Y axis of the cube.
   */
  TextureCubeMapPositiveY = 34071,

  /**
   * The texture on the face on the negative Y axis of the cube.
   */
  TextureCubeMapNegativeY = 34072,

  /**
   * The texture on the face on the positive Z axis of the cube.
   */
  TextureCubeMapPositiveZ = 34073,

  /**
   * The texture on the face on the negative Z axis of the cube.
   */
  TextureCubeMapNegativeZ = 34074,

  /**
   * The texture contains only a luminance channel (specifying equal red, green and blue values).
   */
  Luminance = 6409,

  /**
   * The texture contains only an alpha channel.
   */
  Alpha = 6406,

  /**
   * The texture contains both a luminance channel (specifying equal red, green and blue values) and an alpha channel.
   */
  LuminanceAlpha = 6410,

  /**
   * The texture contains distinct red, green and blue channels.
   */
  Rgb = 6407,

  /**
   * The texture contains distinct red, green, blue and alpha channels.
   */
  Rgba = 6408,

  /**
   * Each pixel in the texture is composed of 4 4-bit values.
   */
  UnsignedShort4444 = 32819,

  /**
   * Each pixel in the texture is composed of 3 5-bit values, and a single 1 bit value.
   */
  UnsignedShort5551 = 32820,

  /**
   * Each pixel in the texture is composed of a 5-bit value, a 6-bit value, and a 5-bit value.
   */
  UnsignedShort565 = 33635,

  /**
   * The renderbuffer contains 4 red bits, 4 green bits, 4 blue bits and 4 alpha bits per pixel.
   */
  Rgba4 = 32854,

  /**
   * The renderbuffer contains 5 red bits, 6 green bits and 5 blue bits per pixel.
   */
  Rgb565 = 36194,

  /**
   * The renderbuffer contains 5 red bits, 5 green bits, 5 blue bits and 1 alpha bit per pixel.
   */
  Rgba5551 = 32855,

  /**
   * The renderbuffer contains a 16-bit depth value per pixel.
   */
  DepthComponent16 = 33189,

  /**
   * The renderbuffer contains an 8-bit stencil value per pixel.
   */
  StencilIndex8 = 36168,

  /**
   * The renderbuffer contains an both a depth and stencil value per pixel.
   */
  DepthStencil = 34041,

  /**
   * Specifies that a renderbuffer is to be bound.
   */
  Renderbuffer = 36161,

  /**
   * Specifies that the renderbuffer is to be attached to the framebuffer as a depth buffer.
   */
  DepthAttachment = 36096,

  /**
   * Specifies that the renderbuffer is to be attached to the framebuffer as a stencil buffer.
   */
  StencilAttachment = 36128,

  /**
   * Specifies that the renderbuffer is to be attached to the framebuffer as a combined depth and stencil buffer.
   */
  DepthStencilAttachment = 33306,

  /**
   * Specifies that a framebuffer is to be bound.
   */
  Framebuffer = 36160,

  /**
   * Specifies that the texture or renderbuffer is to be attached to the framebuffer as the first color buffer.
   */
  ColorAttachment0 = 36064,

  /**
   * The framebuffer was successfully assembled.
   */
  FramebufferComplete = 36053,
}
