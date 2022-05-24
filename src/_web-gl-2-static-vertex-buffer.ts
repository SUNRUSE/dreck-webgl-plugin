/**
 * A buffer of vertex attributes which are pre-determined at construction.
 * @template TAttributeDefinitionSet The set of attributes which are stored for each vertex.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlStaticVertexBuffer<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet
> extends WebGlVertexBuffer<TAttributeDefinitionSet> {
  /**
   * A buffer of vertex attributes which are pre-determined at construction
   * @param context The context under which the buffer will be created.
   * @param mode The mode which should be used to render elements from this buffer.
   * @param packedAttributeDefinitionSet The packed attributes which are stored for each vertex.
   * @param vertices The vertices which will be used.
   */
  constructor(
    context: WebGlContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >,
    mode:
      | WebGlConstants.Points
      | WebGlConstants.LineStrip
      | WebGlConstants.LineLoop
      | WebGlConstants.Lines
      | WebGlConstants.TriangleStrip
      | WebGlConstants.TriangleFan
      | WebGlConstants.Triangles,
    packedAttributeDefinitionSet: WebGlPackedAttributeDefinitionSet<TAttributeDefinitionSet>,
    public readonly vertices: {
      readonly [T in keyof TAttributeDefinitionSet]: ReadonlyArray<
        WebGlShaderPrimitive[TAttributeDefinitionSet[T][`shaderPrimitive`]]
      >;
    }
  ) {
    super(context, mode, packedAttributeDefinitionSet);
  }

  generateVertices(): {
    readonly [T in keyof TAttributeDefinitionSet]: ReadonlyArray<
      WebGlShaderPrimitive[TAttributeDefinitionSet[T][`shaderPrimitive`]]
    >;
  } {
    return this.vertices;
  }
}
