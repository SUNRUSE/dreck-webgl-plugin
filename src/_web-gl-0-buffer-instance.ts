/**
 * An instance of a WebGL buffer.
 * @template TInstanceData Additional data included in the instance.
 */
type WebGlBufferInstance<TInstanceData> = {
  /**
   * The WebGL buffer.
   */
  readonly buffer: WebGLBuffer;

  /**
   * The additional data included in the instance.
   */
  readonly data: TInstanceData;
};
