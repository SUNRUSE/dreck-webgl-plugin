/**
 * An instance of a WebGL index buffer.
 */
export type IndexBufferInstance = BufferInstance<{
  /**
   * The number of primitives.
   */
  readonly count: number;

  /**
   * The type of the indices in the buffer.
   */
  readonly type: Constants.UnsignedByte | Constants.UnsignedShort;
}>;
