import type { Constants } from "../Constants";

/**
 * A wrapping mode which can be applied to a texture.
 */
export type WrappingMode =
  | Constants.ClampToEdge
  | Constants.MirroredRepeat
  | Constants.Repeat;
