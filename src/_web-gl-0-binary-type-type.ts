/**
 * A map of binary data types to whether they are integers or floats.
 */
const webGlBinaryTypeType = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  [WebGlConstants.UnsignedByte]: `integer`,

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  [WebGlConstants.Byte]: `integer`,

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  [WebGlConstants.UnsignedShort]: `integer`,

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  [WebGlConstants.Short]: `integer`,

  /**
   * A 32-bit floating-point number.
   */
  [WebGlConstants.Float]: `float`,
};
