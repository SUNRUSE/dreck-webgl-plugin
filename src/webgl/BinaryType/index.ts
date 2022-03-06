import type { U8 } from "../U8";
import type { S8 } from "../S8";
import type { U16 } from "../U16";
import type { S16 } from "../S16";
import type { F32 } from "../F32";
import type { Constants } from "../Constants";

/**
 * A map of binary data types to Javascript equivalents.
 */
export type BinaryType = {
  /**
   * An unsigned 8-bit integer (0 to 255, inclusive).
   */
  readonly [Constants.UnsignedByte]: U8;

  /**
   * A signed 8-bit integer (-128 to 127, inclusive).
   */
  readonly [Constants.Byte]: S8;

  /**
   * An unsigned 16-bit integer (0 to 65535, inclusive).
   */
  readonly [Constants.UnsignedShort]: U16;

  /**
   * A signed 16-bit integer (-32768 to 32767, inclusive).
   */
  readonly [Constants.Short]: S16;

  /**
   * A 32-bit floating-point number.
   */
  readonly [Constants.Float]: F32;
};
