/**
 * A WebGL texture.
 * @template TWebGlRenderingContextKey The key(s) of the WebGL rendering context which are used by the resource.
 * @template TFormat The format of the texture.
 * @template TType The type of the texture.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
abstract class WebGlTexture2D<
  TWebGlRenderingContextKey extends keyof WebGLRenderingContext
> extends WebGlResource<
  null | WebGLTexture,
  | `createTexture`
  | `bindTexture`
  | `texParameteri`
  | `deleteTexture`
  | `generateMipmap`
  | TWebGlRenderingContextKey
> {
  /**
   * Creates a new WebGL texture.
   * @param context The context under which to create a new texture.
   * @param wrapX The wrapping mode to use on the X axis.
   * @param wrapY The wrapping mode to use on the Y axis.
   * @param minificationFilter The filter to use when reducing the texture's size.
   * @param magnificationFilter The filter to use when increasing the texture's size.
   */
  constructor(
    context: WebGlContextInterface<
      | `createTexture`
      | `bindTexture`
      | `texParameteri`
      | `deleteTexture`
      | `generateMipmap`
      | `isContextLost`
      | TWebGlRenderingContextKey
    >,
    public readonly wrapX: WebGlWrappingMode,
    public readonly wrapY: WebGlWrappingMode,
    public readonly minificationFilter: webGlMinificationFilter,
    public readonly magnificationFilter: WebGlMagnificationFilter
  ) {
    super(context);
  }

  createInstance(): null | WebGLTexture {
    const texture = this.context.gl.createTexture();
    if (texture === null) {
      return null;
    } else {
      this.context.gl.bindTexture(WebGlConstants.Texture2D, texture);

      this.context.gl.texParameteri(
        WebGlConstants.Texture2D,
        WebGlConstants.TextureWrapX,
        this.wrapX
      );

      this.context.gl.texParameteri(
        WebGlConstants.Texture2D,
        WebGlConstants.TextureWrapY,
        this.wrapY
      );

      this.context.gl.texParameteri(
        WebGlConstants.Texture2D,
        WebGlConstants.TextureMinificationFilter,
        this.minificationFilter
      );

      this.context.gl.texParameteri(
        WebGlConstants.Texture2D,
        WebGlConstants.TextureMagnificationFilter,
        this.magnificationFilter
      );

      this.populate();

      if (webGlMinificationFilterIncludesMipmaps[this.minificationFilter]) {
        this.context.gl.generateMipmap(WebGlConstants.Texture2D);
      }

      this.context.gl.bindTexture(WebGlConstants.Texture2D, null);

      return texture;
    }
  }

  deleteInstance(instance: null | WebGLTexture): void {
    if (instance !== null) {
      this.context.gl.deleteTexture(instance);
    }
  }

  /**
   * Called when the texture has been created and bound, to be populated using texImage2D in derived classes.
   */
  abstract populate(): void;
}
