import { Constants } from "../Constants";
import type { ContextInterface } from "../ContextInterface";
import type { MagnificationFilter } from "../MagnificationFilter";
import type { MinificationFilter } from "../MinificationFilter";
import { minificationFilterIncludesMipmaps } from "../minificationFilterIncludesMipmaps";
import { Resource } from "../Resource";
import type { WrappingMode } from "../WrappingMode";

/**
 * A WebGL texture.
 * @template TWebGLRenderingContextKey The key(s) of the WebGL rendering context which are used by the resource.
 * @template TFormat The format of the texture.
 * @template TType The type of the texture.
 */
export abstract class Texture2D<
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
      this.context.gl.bindTexture(Constants.Texture2D, texture);

      this.context.gl.texParameteri(
        Constants.Texture2D,
        Constants.TextureWrapX,
        this.wrapX
      );

      this.context.gl.texParameteri(
        Constants.Texture2D,
        Constants.TextureWrapY,
        this.wrapY
      );

      this.context.gl.texParameteri(
        Constants.Texture2D,
        Constants.TextureMinificationFilter,
        this.minificationFilter
      );

      this.context.gl.texParameteri(
        Constants.Texture2D,
        Constants.TextureMagnificationFilter,
        this.magnificationFilter
      );

      this.populate();

      if (minificationFilterIncludesMipmaps[this.minificationFilter]) {
        this.context.gl.generateMipmap(Constants.Texture2D);
      }

      this.context.gl.bindTexture(Constants.Texture2D, null);

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
