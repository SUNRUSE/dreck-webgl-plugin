/**
 * An instance of a WebGL index buffer.
 */
type WebGlIndexBufferInstance = WebGlBufferInstance<{
  /**
   * The number of primitives.
   */
  readonly count: number;

  /**
   * The type of the indices in the buffer.
   */
  readonly type: WebGlConstants.UnsignedByte | WebGlConstants.UnsignedShort;
}>;
