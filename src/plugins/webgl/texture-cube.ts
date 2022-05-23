/**
 * A WebGL texture.
 * @template TWebGLRenderingContextKey The key(s) of the WebGL rendering context which are used by the resource.
 * @template TFormat The format of the texture.
 * @template TType The type of the texture.
 */
export abstract class TextureCube<
  TWebGLRenderingContextKey extends keyof WebGLRenderingContext
> extends Resource<
  null | WebGLTexture,
  | `createTexture`
  | `bindTexture`
  | `texParameteri`
  | `deleteTexture`
  | `generateMipmap`
  | TWebGLRenderingContextKey
> {
  /**
   * Creates a new WebGL texture.
   * @param context The context under which to create a new texture.
   * @param wrapX The wrapping mode to use on the X axis.
   * @param wrapY The wrapping mode to use on the Y axis.
   * @param wrapZ The wrapping mode to use on the Z axis.
   * @param minificationFilter The filter to use when reducing the texture's size.
   * @param magnificationFilter The filter to use when increasing the texture's size.
   */
  constructor(
    context: ContextInterface<
      | `createTexture`
      | `bindTexture`
      | `texParameteri`
      | `deleteTexture`
      | `generateMipmap`
      | `isContextLost`
      | TWebGLRenderingContextKey
    >,
    public readonly wrapX: WrappingMode,
    public readonly wrapY: WrappingMode,
    public readonly wrapZ: WrappingMode,
    public readonly minificationFilter: MinificationFilter,
    public readonly magnificationFilter: MagnificationFilter
  ) {
    super(context);
  }

  createInstance(): null | WebGLTexture {
    const texture = this.context.gl.createTexture();
    if (texture === null) {
      return null;
    } else {
      this.context.gl.bindTexture(Constants.TextureCubeMap, texture);

      this.context.gl.texParameteri(
        Constants.TextureCubeMap,
        Constants.TextureWrapX,
        this.wrapX
      );

      this.context.gl.texParameteri(
        Constants.TextureCubeMap,
        Constants.TextureWrapY,
        this.wrapY
      );

      this.context.gl.texParameteri(
        Constants.TextureCubeMap,
        Constants.TextureWrapZ,
        this.wrapZ
      );

      this.context.gl.texParameteri(
        Constants.TextureCubeMap,
        Constants.TextureMinificationFilter,
        this.minificationFilter
      );

      this.context.gl.texParameteri(
        Constants.TextureCubeMap,
        Constants.TextureMagnificationFilter,
        this.magnificationFilter
      );

      this.populate();

      if (minificationFilterIncludesMipmaps[this.minificationFilter]) {
        this.context.gl.generateMipmap(Constants.TextureCubeMap);
      }

      this.context.gl.bindTexture(Constants.TextureCubeMap, null);

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
