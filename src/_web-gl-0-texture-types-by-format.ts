/**
 * Describes the types which can be used in textures of specified formats.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WebGlTextureTypesByFormat = {
  /**
   * The types available when the texture contains distinct red, green and blue channels.
   */
  readonly [WebGlConstants.Rgb]:
    | WebGlConstants.UnsignedByte
    | WebGlConstants.UnsignedShort565;

  /**
   * The types available when the texture contains distinct red, green, blue and alpha channels.
   */
  readonly [WebGlConstants.Rgba]:
    | WebGlConstants.UnsignedByte
    | WebGlConstants.UnsignedShort4444
    | WebGlConstants.UnsignedShort5551;

  /**
   * The types available when the texture contains only a luminance channel (specifying equal red, green and blue values).
   */
  readonly [WebGlConstants.Luminance]: WebGlConstants.UnsignedByte;

  /**
   * The types available when the texture contains only an alpha channel.
   */
  readonly [WebGlConstants.Alpha]: WebGlConstants.UnsignedByte;

  /**
   * The types available when the texture contains both a luminance channel (specifying equal red, green and blue values) and an alpha channel.
   */
  readonly [WebGlConstants.LuminanceAlpha]: WebGlConstants.UnsignedByte;
};
