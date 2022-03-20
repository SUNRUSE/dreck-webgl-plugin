import { Constants } from "../Constants";
import type { ContextInterface } from "../ContextInterface";
import type { RenderbufferFormat } from "../RenderbufferFormat";
import { Resource } from "../Resource";

/**
 * A WebGL renderbuffer.
 * @template TFormat The format of the renderbuffer.
 */
export class Renderbuffer<TFormat extends RenderbufferFormat> extends Resource<
  null | WebGLRenderbuffer,
  | `createRenderbuffer`
  | `bindRenderbuffer`
  | `renderbufferStorage`
  | `deleteRenderbuffer`
> {
  /**
   * Creates a new WebGL renderbuffer.
   * @param context The context under which to create a new renderbuffer.
   * @param format The format of the renderbuffer.
   * @param width The width of the renderbuffer, in pixel columns.
   * @param height The height of the renderbuffer, in pixel rows.
   */
  constructor(
    context: ContextInterface<
      | `createRenderbuffer`
      | `bindRenderbuffer`
      | `renderbufferStorage`
      | `deleteRenderbuffer`
      | `isContextLost`
    >,
    public readonly format: TFormat,
    public readonly width: number,
    public readonly height: number
  ) {
    super(context);
  }

  createInstance(): null | WebGLTexture {
    const renderbuffer = this.context.gl.createRenderbuffer();
    if (renderbuffer === null) {
      return null;
    } else {
      this.context.gl.bindRenderbuffer(Constants.Renderbuffer, renderbuffer);
      this.context.gl.renderbufferStorage(
        Constants.Renderbuffer,
        this.format,
        this.width,
        this.height
      );
      return renderbuffer;
    }
  }

  deleteInstance(instance: null | WebGLTexture): void {
    if (instance !== null) {
      this.context.gl.bindRenderbuffer(Constants.Renderbuffer, null);
      this.context.gl.deleteRenderbuffer(instance);
    }
  }
}
