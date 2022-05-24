/**
 * A WebGL renderbuffer.
 * @template TFormat The format of the renderbuffer.
 */
class WebGlRenderbuffer<
  TFormat extends WebGlRenderbufferFormat
> extends WebGlResource<
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
    context: WebGlContextInterface<
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
      this.context.gl.bindRenderbuffer(
        WebGlConstants.Renderbuffer,
        renderbuffer
      );
      this.context.gl.renderbufferStorage(
        WebGlConstants.Renderbuffer,
        this.format,
        this.width,
        this.height
      );
      return renderbuffer;
    }
  }

  deleteInstance(instance: null | WebGLTexture): void {
    if (instance !== null) {
      this.context.gl.bindRenderbuffer(WebGlConstants.Renderbuffer, null);
      this.context.gl.deleteRenderbuffer(instance);
    }
  }
}
