/**
 * A WebGL buffer, for either vertices or indices.
 * @template TWebGlRenderingContextKey The key(s) of the WebGL rendering context which are used by the resource.
 * @template TInstanceData Additional data included in an instance.
 */
abstract class WebGlBuffer<
  TWebGlRenderingContextKey extends keyof WebGLRenderingContext,
  TInstanceData
> extends WebGlResource<
  null | WebGlBufferInstance<TInstanceData>,
  | `createBuffer`
  | `bindBuffer`
  | `bufferData`
  | `deleteBuffer`
  | TWebGlRenderingContextKey
> {
  /**
   * Creates a new WebGL buffer, for either vertices or indices.
   * @param context The context under which the buffer will be created.
   * @param target The binding target of the buffer to create.
   */
  constructor(
    context: WebGlContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | TWebGlRenderingContextKey
      | `isContextLost`
    >,
    public readonly target:
      | WebGlConstants.ArrayBuffer
      | WebGlConstants.ElementArrayBuffer
  ) {
    super(context);
  }

  createInstance(): null | WebGlBufferInstance<TInstanceData> {
    const data = this.generateData();

    if (data.bufferContent.byteLength === 0) {
      throw new Error(`Buffers cannot be empty.`);
    }

    const buffer = this.context.gl.createBuffer();

    if (buffer === null) {
      return null;
    } else {
      this.context.gl.bindBuffer(this.target, buffer);
      this.context.gl.bufferData(
        this.target,
        data.bufferContent,
        WebGlConstants.StaticDraw
      );

      return { buffer, data: data.instanceData };
    }
  }

  deleteInstance(instance: WebGLBuffer | null): void {
    if (instance !== null) {
      this.context.gl.bindBuffer(this.target, null);
      this.context.gl.deleteBuffer(instance);
    }
  }

  /**
   * Implement to define the contents of the buffer.  This may be called multiple times if the context is lost and then recovered.  The generated buffer cannot be empty.
   * @returns The contents of the buffer; cannot be empty.
   */
  abstract generateData(): {
    readonly bufferContent: BufferSource;
    readonly instanceData: TInstanceData;
  };
}
