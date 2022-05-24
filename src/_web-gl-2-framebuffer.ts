/**
 * A WebGL framebuffer.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlFramebuffer extends WebGlResource<
  null | WebGLFramebuffer,
  | `createFramebuffer`
  | `checkFramebufferStatus`
  | `bindFramebuffer`
  | `deleteFramebuffer`
  | `framebufferTexture2D`
  | `framebufferRenderbuffer`
> {
  /**
   * Creates a new framebuffer.
   * @param context The context under which a framebuffer is to be created.
   * @param colorAttachment0 The RGBA texture to use.
   * @param depthAndOrStencilAttachment The depth and/or stencil renderbuffer to use, if any, otherwise, null.
   */
  constructor(
    context: WebGlContextInterface<
      | `createFramebuffer`
      | `checkFramebufferStatus`
      | `bindFramebuffer`
      | `deleteFramebuffer`
      | `framebufferTexture2D`
      | `framebufferRenderbuffer`
      | `isContextLost`
    >,
    public readonly colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
      readonly format: WebGlConstants.Rgba;
      readonly type: WebGlConstants.UnsignedByte;
    },
    public readonly depthAndOrStencilAttachment:
      | null
      | (WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        })
  ) {
    super(context);

    colorAttachment0.throwIfFromAnotherContext(this);
    depthAndOrStencilAttachment?.throwIfFromAnotherContext(this);
  }

  createInstance(): null | WebGLFramebuffer {
    const colorAttachment0 = this.colorAttachment0.getInstance();

    if (colorAttachment0 === null) {
      return null;
    } else {
      if (this.depthAndOrStencilAttachment === null) {
        const framebuffer = this.context.gl.createFramebuffer();

        if (framebuffer === null) {
          return null;
        } else {
          this.context.gl.bindFramebuffer(
            WebGlConstants.Framebuffer,
            framebuffer
          );

          this.context.gl.framebufferTexture2D(
            WebGlConstants.Framebuffer,
            WebGlConstants.ColorAttachment0,
            WebGlConstants.Texture2D,
            colorAttachment0,
            0
          );

          if (
            this.context.gl.checkFramebufferStatus(
              WebGlConstants.Framebuffer
            ) === WebGlConstants.FramebufferComplete
          ) {
            return framebuffer;
          } else if (this.context.gl.isContextLost()) {
            return null;
          } else {
            this.context.gl.bindFramebuffer(WebGlConstants.Framebuffer, null);
            this.context.gl.deleteFramebuffer(framebuffer);
            throw new Error(`Failed to construct a framebuffer.`);
          }
        }
      } else {
        const depthAndOrStencilAttachment =
          this.depthAndOrStencilAttachment.getInstance();

        if (depthAndOrStencilAttachment === null) {
          return null;
        } else {
          const framebuffer = this.context.gl.createFramebuffer();

          if (framebuffer === null) {
            return null;
          } else {
            this.context.gl.bindFramebuffer(
              WebGlConstants.Framebuffer,
              framebuffer
            );

            this.context.gl.framebufferTexture2D(
              WebGlConstants.Framebuffer,
              WebGlConstants.ColorAttachment0,
              WebGlConstants.Texture2D,
              colorAttachment0,
              0
            );

            switch (this.depthAndOrStencilAttachment.format) {
              case WebGlConstants.DepthComponent16:
                this.context.gl.framebufferRenderbuffer(
                  WebGlConstants.Framebuffer,
                  WebGlConstants.DepthAttachment,
                  WebGlConstants.Renderbuffer,
                  depthAndOrStencilAttachment
                );
                break;
              case WebGlConstants.StencilIndex8:
                this.context.gl.framebufferRenderbuffer(
                  WebGlConstants.Framebuffer,
                  WebGlConstants.StencilAttachment,
                  WebGlConstants.Renderbuffer,
                  depthAndOrStencilAttachment
                );
                break;
              case WebGlConstants.DepthStencil:
                this.context.gl.framebufferRenderbuffer(
                  WebGlConstants.Framebuffer,
                  WebGlConstants.DepthStencilAttachment,
                  WebGlConstants.Renderbuffer,
                  depthAndOrStencilAttachment
                );
                break;
            }

            if (
              this.context.gl.checkFramebufferStatus(
                WebGlConstants.Framebuffer
              ) === WebGlConstants.FramebufferComplete
            ) {
              return framebuffer;
            } else if (this.context.gl.isContextLost()) {
              return null;
            } else {
              this.context.gl.bindFramebuffer(WebGlConstants.Framebuffer, null);
              this.context.gl.deleteFramebuffer(framebuffer);
              throw new Error(`Failed to construct a framebuffer.`);
            }
          }
        }
      }
    }
  }

  deleteInstance(instance: WebGLFramebuffer | null): void {
    if (instance !== null) {
      this.context.gl.bindFramebuffer(WebGlConstants.Framebuffer, null);
      this.context.gl.deleteFramebuffer(instance);
    }
  }
}
