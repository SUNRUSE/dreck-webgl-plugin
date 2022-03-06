import { Constants } from "../Constants";
import type { ContextInterface } from "../ContextInterface";
import type { Float } from "../Float";
import type { PackedAttributeDefinitionSet } from "../PackedAttributeDefinitionSet";
import type { ShaderPrimitive } from "../ShaderPrimitive";
import type { Vec2 } from "../Vec2";
import type { Vec3 } from "../Vec3";
import type { Vec4 } from "../Vec4";
import type { AttributeDefinitionSet } from "../AttributeDefinitionSet";
import { Buffer } from "../Buffer";
import type { AttributeDefinition } from "../AttributeDefinition";
import type { BinaryType } from "../BinaryType";
import { binaryTypeBytes } from "../binaryTypeBytes";
import { binaryTypeMinimum } from "../binaryTypeMinimum";
import { binaryTypeMaximum } from "../binaryTypeMaximum";
import { binaryTypeType } from "../binaryTypeType";

/**
 * A buffer of vertex attributes.
 * @tempalte TAttributeDefinitionSet The set of attributes which are stored for each vertex.
 */
export abstract class VertexBuffer<
  TAttributeDefinitionSet extends AttributeDefinitionSet
> extends Buffer<never, { readonly numberOfVertices: number }> {
  /**
   * Creates a new buffer of vertex attributes.
   * @param context The context under which the buffer will be created.
   * @param packedAttributeDefinitionSet The packed attributes which are stored for each vertex.
   */
  constructor(
    context: ContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >,
    public readonly packedAttributeDefinitionSet: PackedAttributeDefinitionSet<TAttributeDefinitionSet>
  ) {
    super(context, Constants.ArrayBuffer);
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
        ] as AttributeDefinition
      ).binaryType as keyof BinaryType;

      const lengthOfBinaryType = binaryTypeBytes[binaryType];

      const minimum = binaryTypeMinimum[binaryType];
      const maximum = binaryTypeMaximum[binaryType];
      const type = binaryTypeType[binaryType];

      const validateAndWrite = (offset: number, value: Float): void => {
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
            case Constants.UnsignedByte:
              bufferContent[offset] = value;
              return;

            case Constants.Byte:
              s8Scratch[0] = value;
              break;

            case Constants.UnsignedShort:
              u16Scratch[0] = value;
              break;

            case Constants.Short:
              s16Scratch[0] = value;
              break;

            case Constants.Float:
              f32Scratch[0] = value;
              break;
          }

          for (let index = 0; index < lengthOfBinaryType; index++) {
            bufferContent[offset + index] = u8Scratch[index] as number;
          }
        }
      };

      for (let index = 0; index < numberOfVertices; index++) {
        const vertex = vertices[key][index] as Float | Vec2 | Vec3 | Vec4;

        if (Array.isArray(vertex)) {
          for (let axis = 0; axis < vertex.length; axis++) {
            validateAndWrite(
              this.packedAttributeDefinitionSet.stride * index +
                offset +
                axis * lengthOfBinaryType,
              vertex[axis] as Float
            );
          }
        } else {
          validateAndWrite(
            this.packedAttributeDefinitionSet.stride * index + offset,
            vertex as Float
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
      ShaderPrimitive[TAttributeDefinitionSet[T][`shaderPrimitive`]]
    >;
  };
}
