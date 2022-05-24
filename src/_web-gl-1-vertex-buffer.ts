/**
 * A buffer of vertex attributes.
 * @template TAttributeDefinitionSet The set of attributes which are stored for each vertex.
 */
abstract class WebGlVertexBuffer<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet
> extends WebGlBuffer<never, WebGlVertexBufferInstance[`data`]> {
  /**
   * Creates a new buffer of vertex attributes.
   * @param context The context under which the buffer will be created.
   * @param mode The mode which should be used to render elements from this buffer.
   * @param packedAttributeDefinitionSet The packed attributes which are stored for each vertex.
   */
  constructor(
    context: WebGlContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >,
    public readonly mode:
      | WebGlConstants.Points
      | WebGlConstants.LineStrip
      | WebGlConstants.LineLoop
      | WebGlConstants.Lines
      | WebGlConstants.TriangleStrip
      | WebGlConstants.TriangleFan
      | WebGlConstants.Triangles,
    public readonly packedAttributeDefinitionSet: WebGlPackedAttributeDefinitionSet<TAttributeDefinitionSet>
  ) {
    super(context, WebGlConstants.ArrayBuffer);
  }

  generateData(): {
    readonly bufferContent: BufferSource;
    readonly instanceData: { readonly numberOfVertices: number };
  } {
    const vertices = this.generateVertices();

    const numberOfVertices =
      vertices[
        Object.keys(
          this.packedAttributeDefinitionSet.offsets
        )[0] as keyof TAttributeDefinitionSet
      ].length;

    const bufferContent = new Uint8Array(
      numberOfVertices * this.packedAttributeDefinitionSet.stride
    );

    const scratch = new ArrayBuffer(4);
    const u8Scratch = new Uint8Array(scratch);
    const s8Scratch = new Int8Array(scratch);
    const u16Scratch = new Uint16Array(scratch);
    const s16Scratch = new Int16Array(scratch);
    const f32Scratch = new Float32Array(scratch);

    for (const key in this.packedAttributeDefinitionSet.offsets) {
      const offset = this.packedAttributeDefinitionSet.offsets[key];

      const binaryType = (
        this.packedAttributeDefinitionSet.attributeDefinitionSet[
          key
        ] as WebGlAttributeDefinition
      ).binaryType as keyof WebGlBinaryType;

      const lengthOfBinaryType = webGlBinaryTypeBytes[binaryType];

      const minimum = webGlBinaryTypeMinimum[binaryType];
      const maximum = webGlBinaryTypeMaximum[binaryType];
      const type = webGlBinaryTypeType[binaryType];

      const validateAndWrite = (offset: number, value: WebGlFloat): void => {
        if (Number.isNaN(value)) {
          throw new Error(
            `Values of vertex attribute ${JSON.stringify(key)} cannot be NaN.`
          );
        } else if (!Number.isFinite(value)) {
          throw new Error(
            `Values of vertex attribute ${JSON.stringify(key)} must be finite.`
          );
        } else if (type === `integer` && !Number.isSafeInteger(value)) {
          throw new Error(
            `Values of vertex attribute ${JSON.stringify(
              key
            )} can only be integers.`
          );
        } else if (value > maximum) {
          throw new Error(
            `Values of vertex attribute ${JSON.stringify(
              key
            )} cannot be greater than ${maximum}.`
          );
        } else if (value < minimum) {
          throw new Error(
            `Values of vertex attribute ${JSON.stringify(
              key
            )} cannot be less than ${minimum}.`
          );
        } else {
          switch (binaryType) {
            case WebGlConstants.UnsignedByte:
              bufferContent[offset] = value;
              return;

            case WebGlConstants.Byte:
              s8Scratch[0] = value;
              break;

            case WebGlConstants.UnsignedShort:
              u16Scratch[0] = value;
              break;

            case WebGlConstants.Short:
              s16Scratch[0] = value;
              break;

            case WebGlConstants.Float:
              f32Scratch[0] = value;
              break;
          }

          for (let index = 0; index < lengthOfBinaryType; index++) {
            bufferContent[offset + index] = u8Scratch[index] as number;
          }
        }
      };

      for (let index = 0; index < numberOfVertices; index++) {
        const vertex = vertices[key][index] as
          | WebGlFloat
          | WebGlVec2
          | WebGlVec3
          | WebGlVec4;

        if (Array.isArray(vertex)) {
          for (let axis = 0; axis < vertex.length; axis++) {
            validateAndWrite(
              this.packedAttributeDefinitionSet.stride * index +
                offset +
                axis * lengthOfBinaryType,
              vertex[axis] as WebGlFloat
            );
          }
        } else {
          validateAndWrite(
            this.packedAttributeDefinitionSet.stride * index + offset,
            vertex as WebGlFloat
          );
        }
      }
    }

    return {
      bufferContent,
      instanceData: {
        numberOfVertices,
      },
    };
  }

  /**
   * Lists the vertices which are to be included in the buffer.  Cannot be empty.
   * @returns The vertices which are to be included in the buffer.  Cannot be empty.
   */
  abstract generateVertices(): {
    readonly [T in keyof TAttributeDefinitionSet]: ReadonlyArray<
      WebGlShaderPrimitive[TAttributeDefinitionSet[T][`shaderPrimitive`]]
    >;
  };
}
