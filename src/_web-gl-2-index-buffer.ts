/**
 * A buffer of element indices.
 */
abstract class WebGlIndexBuffer extends WebGlBuffer<
  never,
  WebGlIndexBufferInstance[`data`]
> {
  /**
   * Creates a new buffer of element indices.
   * @param context The context under which the buffer will be created.
   */
  constructor(
    context: WebGlContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >
  ) {
    super(context, WebGlConstants.ElementArrayBuffer);
  }

  generateData(): {
    readonly bufferContent: BufferSource;
    readonly instanceData: {
      readonly count: number;
      readonly type: WebGlConstants.UnsignedByte | WebGlConstants.UnsignedShort;
    };
  } {
    const indices = this.generateIndices();

    if (indices.some(Number.isNaN)) {
      throw new Error(`Indices cannot be NaN.`);
    } else if (indices.some((index) => !Number.isFinite(index))) {
      throw new Error(`Indices must be finite.`);
    } else if (indices.some((index) => !Number.isInteger(index))) {
      throw new Error(`Indices must be integers.`);
    } else if (indices.some((index) => index < 0)) {
      throw new Error(`Indices cannot be less than 0.`);
    } else if (indices.some((index) => index > 65535)) {
      throw new Error(`Indices cannot be greater than 65535.`);
    } else if (indices.some((index) => index > 255)) {
      return {
        bufferContent: Uint16Array.from(indices),
        instanceData: {
          count: indices.length,
          type: WebGlConstants.UnsignedShort,
        },
      };
    } else {
      return {
        bufferContent: Uint8Array.from(indices),
        instanceData: {
          count: indices.length,
          type: WebGlConstants.UnsignedByte,
        },
      };
    }
  }

  /**
   * Lists the indices which are to be included in the buffer.  All must be integers between 0 and 65535, inclusive.  Cannot be empty.
   * @returns The indices which are to be included in the buffer.  All must be integers between 0 and 65535, inclusive.  Cannot be empty.
   */
  abstract generateIndices(): ReadonlyArray<number>;
}
