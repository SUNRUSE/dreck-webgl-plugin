/**
 * A WebGL texture which has a fixed size but no initial content.
 * @template TFormat The format of the texture.
 * @template TType The type of the texture.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlEmptyTexture2D<
  TFormat extends WebGlTextureFormat,
  TType extends WebGlTextureTypesByFormat[TFormat]
> extends WebGlTexture2D<`texImage2D`> {
  /**
   * Creates a new WebGL texture.
   * @param context The context under which to create a new texture.
   * @param wrapX The wrapping mode to use on the X axis.
   * @param wrapY The wrapping mode to use on the Y axis.
   * @param minificationFilter The filter to use when reducing the texture's size.
   * @param magnificationFilter The filter to use when increasing the texture's size.
   * @param format The texture's channel layout.
   * @param type The binary type used within the texture.
   * @param width The width of the texture, in columns.
   * @param height The height of the texture, in rows.
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
    minificationFilter: webGlMinificationFilter,
    magnificationFilter: WebGlMagnificationFilter,
    public readonly format: TFormat,
    public readonly type: TType,
    public readonly width: number,
    public readonly height: number
  ) {
    super(context, wrapX, wrapY, minificationFilter, magnificationFilter);
  }

  populate(): void {
    this.context.gl.texImage2D(
      WebGlConstants.Texture2D,
      0,
      this.format,
      this.width,
      this.height,
      0,
      this.format,
      this.type,
      null
    );
  }
}
