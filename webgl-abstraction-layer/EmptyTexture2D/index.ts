import { Constants } from "../Constants";
import type { ContextInterface } from "../ContextInterface";
import type { MagnificationFilter } from "../MagnificationFilter";
import type { MinificationFilter } from "../MinificationFilter";
import { Texture2D } from "../Texture2D";
import type { TextureFormat } from "../TextureFormat";
import type { TextureTypesByFormat } from "../TextureTypesByFormat";
import type { WrappingMode } from "../WrappingMode";

/**
 * A WebGL texture which has a fixed size but no initial content.
 * @template TFormat The format of the texture.
 * @template TType The type of the texture.
 */
export class EmptyTexture2D<
  TFormat extends TextureFormat,
  TType extends TextureTypesByFormat[TFormat]
> extends Texture2D<`texImage2D`, TFormat, TType> {
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
    context: ContextInterface<
      | `createTexture`
      | `bindTexture`
      | `texParameteri`
      | `deleteTexture`
      | `generateMipmap`
      | `isContextLost`
      | `texImage2D`
    >,
    wrapX: WrappingMode,
    wrapY: WrappingMode,
    minificationFilter: MinificationFilter,
    magnificationFilter: MagnificationFilter,
    format: TFormat,
    type: TType,
    public readonly width: number,
    public readonly height: number
  ) {
    super(
      context,
      wrapX,
      wrapY,
      minificationFilter,
      magnificationFilter,
      format,
      type
    );
  }

  populate(): void {
    this.context.gl.texImage2D(
      Constants.Texture2D,
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
