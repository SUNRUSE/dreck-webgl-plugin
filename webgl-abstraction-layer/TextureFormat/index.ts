import type { Constants } from "../Constants";

/**
 * A format of a texture.
 */
export type TextureFormat =
  | Constants.Luminance
  | Constants.Alpha
  | Constants.LuminanceAlpha
  | Constants.Rgb
  | Constants.Rgba;
