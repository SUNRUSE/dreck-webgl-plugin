/**
 * An instance of a WebGL buffer.
 * @template TInstanceData Additional data included in the instance.
 */
export type BufferInstance<TInstanceData> = {
  /**
   * The WebGL buffer.
   */
  readonly buffer: WebGLBuffer;

  /**
   * The additional data included in the instance.
   */
  readonly data: TInstanceData;
};
