/**
 * A map of binary data types to the maximum value they support (inclusive).
 */
const webGlBinaryTypeMaximum = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  [WebGlConstants.UnsignedByte]: 255,

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  [WebGlConstants.Byte]: 127,

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  [WebGlConstants.UnsignedShort]: 65535,

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  [WebGlConstants.Short]: 32767,

  /**
   * A 32-bit floating-point number.
   */
  [WebGlConstants.Float]: Number.MAX_VALUE,
};
