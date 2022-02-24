import { binaryTypeBytes } from "../binaryTypeBytes";
import type { AttributeDefinition } from "../AttributeDefinition";
import type { AttributeDefinitionSet } from "../AttributeDefinitionSet";
import type { BinaryType } from "../BinaryType";
import type { ShaderType } from "../ShaderType";
import { shaderTypeArity } from "../shaderTypeArity";

/**
 * Describes an attribute definition set which has been packed into a repeating structure of bytes.
 */
export class PackedAttributeDefinitionSet<
  TAttributeDefinitionSet extends AttributeDefinitionSet
> {
  /**
   * The number of bytes between each set of vertex attributes (e.g. a single F32 vec3 might be 12).
   */
  readonly stride: number;

  /**
   * The number of bytes between the start of a set of vertex attributes an each attribute.
   */
  readonly offsets: {
    readonly [TKey in keyof TAttributeDefinitionSet]: number;
  };

  constructor(public readonly attributeDefinitionSet: TAttributeDefinitionSet) {
    let strideRounding = 0;
    this.stride = 0;

    const offsets: {
      [TKey in keyof TAttributeDefinitionSet]?: number;
    } = {};

    const mostBytes = Math.max(
      ...Object.values(binaryTypeBytes as { readonly [key: string]: number })
    );
    const leastBytes = Math.min(
      ...Object.values(binaryTypeBytes as { readonly [key: string]: number })
    );

    for (let bytes = mostBytes; bytes >= leastBytes; bytes--) {
      for (const key in attributeDefinitionSet) {
        const value = attributeDefinitionSet[key] as AttributeDefinition;

        const binaryType = value.binaryType as keyof BinaryType;

        if (binaryTypeBytes[binaryType] === bytes) {
          const shaderType = value.shaderPrimitive as keyof ShaderType;

          if (strideRounding === 0) {
            strideRounding = bytes;
          }

          // NOTE: This will not be hit while all binary types are powers of two.  If this ever changes, re-introduce this.
          // while (this.stride % bytes !== 0) {
          //   this.stride++;
          // }

          offsets[key] = this.stride;

          this.stride += bytes * shaderTypeArity[shaderType];
        }
      }
    }

    if (strideRounding === 0) {
      throw new Error(`Cannot pack an empty attribute definition set.`);
    } else {
      while (this.stride % strideRounding !== 0) {
        this.stride++;
      }

      this.offsets = offsets as {
        readonly [TKey in keyof TAttributeDefinitionSet]: number;
      };
    }
  }
}
