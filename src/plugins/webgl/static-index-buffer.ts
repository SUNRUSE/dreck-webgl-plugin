/**
 * A buffer of indices which are pre-determined at construction.
 */
export class StaticIndexBuffer extends IndexBuffer {
  /**
   * A buffer of indices which are pre-determined at construction.
   * @param context The context under which the buffer will be created.
   * @param indices The indices which will be used.
   */
  constructor(
    context: ContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >,
    public readonly indices: ReadonlyArray<number>
  ) {
    super(context);
  }

  generateIndices(): ReadonlyArray<number> {
    return this.indices;
  }
}
