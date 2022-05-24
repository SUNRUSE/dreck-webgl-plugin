/**
 * A buffer of indices which are pre-determined at construction.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlStaticIndexBuffer extends WebGlIndexBuffer {
  /**
   * A buffer of indices which are pre-determined at construction.
   * @param context The context under which the buffer will be created.
   * @param indices The indices which will be used.
   */
  constructor(
    context: WebGlContextInterface<
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
