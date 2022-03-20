import { Constants } from "../Constants";
import type { ContextInterface } from "../ContextInterface";
import { Resource } from "../Resource";
import type { ResourceInterface } from "../ResourceInterface";

/**
 * A WebGL framebuffer.
 */
export class Framebuffer extends Resource<
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
    context: ContextInterface<
      | `createFramebuffer`
      | `checkFramebufferStatus`
      | `bindFramebuffer`
      | `deleteFramebuffer`
      | `framebufferTexture2D`
      | `framebufferRenderbuffer`
      | `isContextLost`
    >,
    public readonly colorAttachment0: ResourceInterface<null | WebGLTexture> & {
      readonly format: Constants.Rgba;
      readonly type: Constants.UnsignedByte;
    },
    public readonly depthAndOrStencilAttachment:
      | null
      | (ResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | Constants.DepthComponent16
            | Constants.StencilIndex8
            | Constants.DepthStencil;
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
          this.context.gl.bindFramebuffer(Constants.Framebuffer, framebuffer);

          this.context.gl.framebufferTexture2D(
            Constants.Framebuffer,
            Constants.ColorAttachment0,
            Constants.Texture2D,
            colorAttachment0,
            0
          );

          if (
            this.context.gl.checkFramebufferStatus(Constants.Framebuffer) ===
            Constants.FramebufferComplete
          ) {
            return framebuffer;
          } else if (this.context.gl.isContextLost()) {
            return null;
          } else {
            this.context.gl.bindFramebuffer(Constants.Framebuffer, null);
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
            this.context.gl.bindFramebuffer(Constants.Framebuffer, framebuffer);

            this.context.gl.framebufferTexture2D(
              Constants.Framebuffer,
              Constants.ColorAttachment0,
              Constants.Texture2D,
              colorAttachment0,
              0
            );

            switch (this.depthAndOrStencilAttachment.format) {
              case Constants.DepthComponent16:
                this.context.gl.framebufferRenderbuffer(
                  Constants.Framebuffer,
                  Constants.DepthAttachment,
                  Constants.Renderbuffer,
                  depthAndOrStencilAttachment
                );
                break;
              case Constants.StencilIndex8:
                this.context.gl.framebufferRenderbuffer(
                  Constants.Framebuffer,
                  Constants.StencilAttachment,
                  Constants.Renderbuffer,
                  depthAndOrStencilAttachment
                );
                break;
              case Constants.DepthStencil:
                this.context.gl.framebufferRenderbuffer(
                  Constants.Framebuffer,
                  Constants.DepthStencilAttachment,
                  Constants.Renderbuffer,
                  depthAndOrStencilAttachment
                );
                break;
            }

            if (
              this.context.gl.checkFramebufferStatus(Constants.Framebuffer) ===
              Constants.FramebufferComplete
            ) {
              return framebuffer;
            } else if (this.context.gl.isContextLost()) {
              return null;
            } else {
              this.context.gl.bindFramebuffer(Constants.Framebuffer, null);
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
      this.context.gl.bindFramebuffer(Constants.Framebuffer, null);
      this.context.gl.deleteFramebuffer(instance);
    }
  }
}
