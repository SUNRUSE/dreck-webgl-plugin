/**
 * A map of binary data types to Javascript equivalents.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebGlBinaryType = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  readonly [WebGlConstants.UnsignedByte]: WebGlU8;

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  readonly [WebGlConstants.Byte]: WebGlS8;

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  readonly [WebGlConstants.UnsignedShort]: WebGlU16;

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  readonly [WebGlConstants.Short]: WebGlS16;

  /**
   * A 32-bit floating-point number.
   */
  readonly [WebGlConstants.Float]: WebGlF32;
};
