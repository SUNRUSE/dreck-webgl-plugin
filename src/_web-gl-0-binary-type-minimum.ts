/**
 * A map of binary data types to the minimum value they support (inclusive).
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const webGlBinaryTypeMinimum = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  [WebGlConstants.UnsignedByte]: 0,

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  [WebGlConstants.Byte]: -128,

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  [WebGlConstants.UnsignedShort]: 0,

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  [WebGlConstants.Short]: -32768,

  /**
   * A 32-bit floating-point number.
   */
  [WebGlConstants.Float]: -Number.MAX_VALUE,
};
