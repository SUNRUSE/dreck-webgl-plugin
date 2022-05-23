/**
 * Describes the types which can be used in textures of specified formats.
 */
export type TextureTypesByFormat = {
  /**
   * The types available when the texture contains distinct red, green and blue channels.
   */
  readonly [Constants.Rgb]: Constants.UnsignedByte | Constants.UnsignedShort565;

  /**
   * The types available when the texture contains distinct red, green, blue and alpha channels.
   */
  readonly [Constants.Rgba]:
    | Constants.UnsignedByte
    | Constants.UnsignedShort4444
    | Constants.UnsignedShort5551;

  /**
   * The types available when the texture contains only a luminance channel (specifying equal red, green and blue values).
   */
  readonly [Constants.Luminance]: Constants.UnsignedByte;

  /**
   * The types available when the texture contains only an alpha channel.
   */
  readonly [Constants.Alpha]: Constants.UnsignedByte;

  /**
   * The types available when the texture contains both a luminance channel (specifying equal red, green and blue values) and an alpha channel.
   */
  readonly [Constants.LuminanceAlpha]: Constants.UnsignedByte;
};
