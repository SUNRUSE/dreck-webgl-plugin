import type { ContextInterface } from "../ContextInterface";
import { Buffer } from "../Buffer";
import { Constants } from "../Constants";

/**
 * A buffer of element indices.
 */
export abstract class IndexBuffer extends Buffer<
  `drawElements`,
  {
    /**
     * The number of primitives.
     */
    readonly count: number;

    /**
     * The type of the indices in the buffer.
     */
    readonly type: Constants.UnsignedByte | Constants.UnsignedShort;
  }
> {
  /**
   * Creates a new buffer of element indices.
   * @param context The context under which the buffer will be created.
   * @param mode The mode which should be used to render elements from this buffer.
   */
  constructor(
    context: ContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
      | `drawElements`
    >,
    public readonly mode:
      | Constants.Points
      | Constants.LineStrip
      | Constants.LineLoop
      | Constants.Lines
      | Constants.TriangleStrip
      | Constants.TriangleFan
      | Constants.Triangles
  ) {
    super(context, Constants.ElementArrayBuffer);
  }

  generateData(): {
    readonly bufferContent: BufferSource;
    readonly instanceData: {
      readonly count: number;
      readonly type: Constants.UnsignedByte | Constants.UnsignedShort;
    };
  } {
    const indices = this.generateIndices();

    if (indices.includes(Number.NaN)) {
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
          type: Constants.UnsignedShort,
        },
      };
    } else {
      return {
        bufferContent: Uint8Array.from(indices),
        instanceData: {
          count: indices.length,
          type: Constants.UnsignedByte,
        },
      };
    }
  }

  /**
   * Lists the indices which are to be included in the buffer.  All must be integers between 0 and 65535, inclusive.  Cannot be empty.
   * @returns The indices which are to be included in the buffer.  All must be integers between 0 and 65535, inclusive.  Cannot be empty.
   */
  abstract generateIndices(): ReadonlyArray<number>;

  /**
   * Binds this buffer and draws its contained primitives.
   */
  draw(): void {
    const instance = this.getInstance();

    if (instance !== null) {
      this.context.gl.bindBuffer(Constants.ElementArrayBuffer, instance.buffer);
      this.context.gl.drawElements(
        this.mode,
        instance.data.count,
        instance.data.type,
        0
      );
    }
  }
}
