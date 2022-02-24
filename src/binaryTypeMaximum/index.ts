import { Constants } from "../Constants";
import type { BinaryType } from "../BinaryType";

/**
 * A map of binary data types to the maximum value they support (inclusive).
 */
export const binaryTypeMaximum: {
  readonly [T in keyof BinaryType]: BinaryType[T];
} = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  [Constants.UnsignedByte]: 255,

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  [Constants.Byte]: 127,

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  [Constants.UnsignedShort]: 65535,

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  [Constants.Short]: 32767,

  /**
   * A 32-bit floating-point number.
   */
  [Constants.Float]: Number.MAX_VALUE,
};
