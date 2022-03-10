import type { BufferInstance } from "../BufferInstance";

/**
 * An instance of a vertex buffer.
 */
export type VertexBufferInstance = BufferInstance<{
  /**
   * The number of vertices in the buffer.
   */
  readonly numberOfVertices: number;
}>;
