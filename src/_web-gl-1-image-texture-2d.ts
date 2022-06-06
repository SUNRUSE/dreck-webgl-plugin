/**
 * A WebGL texture which contains the pixels of a previously loaded image.
 * @template TFormat The format of the texture.
 * @template TType The type of the texture.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlImageTexture2D<
  TFormat extends WebGlTextureFormat,
  TType extends WebGlTextureTypesByFormat[TFormat]
> extends WebGlTexture2D<`texImage2D`> {
  /**
   * Creates a new WebGL image texture.
   * @param context The context under which to create a new texture.
   * @param wrapX The wrapping mode to use on the X axis.
   * @param wrapY The wrapping mode to use on the Y axis.
   * @param minificationFilter The filter to use when reducing the texture's size.
   * @param magnificationFilter The filter to use when increasing the texture's size.
   * @param format The texture's channel layout.
   * @param type The binary type used within the texture.
   * @param image The image to create a texture from.  This MUST have been successfully loaded at the time of construction.
   */
  constructor(
    context: WebGlContextInterface<
      | `createTexture`
      | `bindTexture`
      | `texParameteri`
      | `deleteTexture`
      | `generateMipmap`
      | `isContextLost`
      | `texImage2D`
    >,
    wrapX: WebGlWrappingMode,
    wrapY: WebGlWrappingMode,
    minificationFilter: WebGlMinificationFilter,
    magnificationFilter: WebGlMagnificationFilter,
    public readonly format: TFormat,
    public readonly type: TType,
    public readonly image: TexImageSource
  ) {
    super(context, wrapX, wrapY, minificationFilter, magnificationFilter);
  }

  populate() {
    this.context.gl.texImage2D(
      WebGlConstants.Texture2D,
      0,
      this.format,
      this.format,
      this.type,
      this.image
    );
  }
}
