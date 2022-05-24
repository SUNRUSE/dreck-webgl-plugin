/**
 * An instance of a WebGL index buffer.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
