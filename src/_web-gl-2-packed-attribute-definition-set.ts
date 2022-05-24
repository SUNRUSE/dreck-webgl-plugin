/**
 * Describes an attribute definition set which has been packed into a repeating structure of bytes.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlPackedAttributeDefinitionSet<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet
> {
  /**
   * The number of bytes between each set of vertex attributes (e.g. a single WebGlF32 vec3 might be 12).
   */
  readonly stride: number;

  /**
   * The number of bytes between the start of a set of vertex attributes an each attribute.
   */
  readonly offsets: {
    readonly [TKey in keyof TAttributeDefinitionSet]: number;
  };

  private values<TValue>(obj: {
    readonly [TKey: string]: TValue;
  }): ReadonlyArray<TValue> {
    const output: TValue[] = [];

    for (const key in obj) {
      output.push(obj[key] as TValue);
    }

    return output;
  }

  /**
   * Creates a new packed attribute definition set.
   * @param attributeDefinitionSet The attribute definition set to pack.
   */
  constructor(public readonly attributeDefinitionSet: TAttributeDefinitionSet) {
    let strideRounding = 0;
    this.stride = 0;

    const offsets: {
      [TKey in keyof TAttributeDefinitionSet]?: number;
    } = {};

    const mostBytes = Math.max(
      ...this.values(webGlBinaryTypeBytes as { readonly [key: string]: number })
    );
    const leastBytes = Math.min(
      ...this.values(webGlBinaryTypeBytes as { readonly [key: string]: number })
    );

    for (let bytes = mostBytes; bytes >= leastBytes; bytes--) {
      for (const key in attributeDefinitionSet) {
        const value = attributeDefinitionSet[key] as WebGlAttributeDefinition;

        const binaryType = value.binaryType as keyof WebGlBinaryType;

        if (webGlBinaryTypeBytes[binaryType] === bytes) {
          const shaderPrimitive =
            value.shaderPrimitive as keyof WebGlShaderPrimitive;

          if (strideRounding === 0) {
            strideRounding = bytes;
          }

          // NOTE: This will not be hit while all binary types are powers of two.  If this ever changes, re-introduce this.
          // while (this.stride % bytes !== 0) {
          //   this.stride++;
          // }

          offsets[key] = this.stride;

          this.stride += bytes * webGlShaderPrimitiveArity[shaderPrimitive];
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
