/**
 * A buffer of vertex attributes which are pre-determined at construction.
 * @template TAttributeDefinitionSet The set of attributes which are stored for each vertex.
 */
export class StaticVertexBuffer<
  TAttributeDefinitionSet extends AttributeDefinitionSet
> extends VertexBuffer<TAttributeDefinitionSet> {
  /**
   * A buffer of vertex attributes which are pre-determined at construction
   * @param context The context under which the buffer will be created.
   * @param mode The mode which should be used to render elements from this buffer.
   * @param packedAttributeDefinitionSet The packed attributes which are stored for each vertex.
   * @param vertices The vertices which will be used.
   */
  constructor(
    context: ContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >,
    mode:
      | Constants.Points
      | Constants.LineStrip
      | Constants.LineLoop
      | Constants.Lines
      | Constants.TriangleStrip
      | Constants.TriangleFan
      | Constants.Triangles,
    packedAttributeDefinitionSet: PackedAttributeDefinitionSet<TAttributeDefinitionSet>,
    public readonly vertices: {
      readonly [T in keyof TAttributeDefinitionSet]: ReadonlyArray<
        ShaderPrimitive[TAttributeDefinitionSet[T][`shaderPrimitive`]]
      >;
    }
  ) {
    super(context, mode, packedAttributeDefinitionSet);
  }

  generateVertices(): {
    readonly [T in keyof TAttributeDefinitionSet]: ReadonlyArray<
      ShaderPrimitive[TAttributeDefinitionSet[T][`shaderPrimitive`]]
    >;
  } {
    return this.vertices;
  }
}
