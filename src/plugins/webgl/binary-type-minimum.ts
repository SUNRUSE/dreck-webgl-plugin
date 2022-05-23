/**
 * A map of binary data types to the minimum value they support (inclusive).
 */
export const binaryTypeMinimum = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  [Constants.UnsignedByte]: 0,

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  [Constants.Byte]: -128,

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  [Constants.UnsignedShort]: 0,

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  [Constants.Short]: -32768,

  /**
   * A 32-bit floating-point number.
   */
  [Constants.Float]: -Number.MAX_VALUE,
};
