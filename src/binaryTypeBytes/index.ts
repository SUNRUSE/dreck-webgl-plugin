import { Constants } from "../Constants";
import type { BinaryType } from "../BinaryType";

/**
 * A map of binary data types to their sizes, in bytes.
 */
export const binaryTypeBytes: {
  readonly [T in keyof BinaryType]: number;
} = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  [Constants.UnsignedByte]: 1,

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  [Constants.Byte]: 1,

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  [Constants.UnsignedShort]: 2,

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  [Constants.Short]: 2,

  /**
   * A 32-bit floating-point number.
   */
  [Constants.Float]: 4,
};
