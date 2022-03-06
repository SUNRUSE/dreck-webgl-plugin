import {
  PackedAttributeDefinitionSet,
  AttributeDefinitionSet,
  Constants,
  AttributeDefinition,
  binaryTypeBytes,
  BinaryType,
  shaderPrimitiveArity,
  ShaderPrimitive,
} from "..";

describe(`PackedAttributeDefinitionSet`, () => {
  describe(`when the attribute definition set is empty`, () => {
    let error: unknown;

    beforeAll(() => {
      try {
        new PackedAttributeDefinitionSet({});
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(
        new Error(`Cannot pack an empty attribute definition set.`)
      );
    });
  });

  function Scenario<TAttributeDefinitionSet extends AttributeDefinitionSet>(
    description: string,
    attributeDefinitionSet: TAttributeDefinitionSet
  ): void {
    describe(description, () => {
      let packedAttributeDefinitionSet: PackedAttributeDefinitionSet<TAttributeDefinitionSet>;

      beforeAll(() => {
        packedAttributeDefinitionSet = new PackedAttributeDefinitionSet(
          attributeDefinitionSet
        );
      });

      it(`exposes the attribute definition set`, () => {
        expect(packedAttributeDefinitionSet.attributeDefinitionSet).toBe(
          attributeDefinitionSet
        );
      });

      it(`has an integer stride`, () => {
        expect(
          Number.isSafeInteger(packedAttributeDefinitionSet.stride)
        ).toBeTrue();
      });

      it(`has stride greater than or equal to 0`, () => {
        expect(packedAttributeDefinitionSet.stride).toBeGreaterThanOrEqual(0);
      });

      for (const key in attributeDefinitionSet) {
        const value = attributeDefinitionSet[key] as AttributeDefinition;

        describe(key, () => {
          let offset: number;
          let end: number;

          beforeAll(() => {
            offset = packedAttributeDefinitionSet.offsets[key];

            end =
              offset +
              binaryTypeBytes[value.binaryType as keyof BinaryType] *
                shaderPrimitiveArity[
                  value.shaderPrimitive as keyof ShaderPrimitive
                ];
          });

          it(`has an integer offset`, () => {
            expect(Number.isInteger(offset)).toBeTrue();
          });

          it(`has an offset, which, when the size of the attribute is taken into account, fits within the stride`, () => {
            expect(end).toBeLessThanOrEqual(
              packedAttributeDefinitionSet.stride
            );
          });

          it(`has an offset greater than or equal to 0`, () => {
            expect(offset).toBeGreaterThanOrEqual(0);
          });

          it(`has an offset which is an integer multiple of its size in bytes`, () => {
            expect(
              offset % binaryTypeBytes[value.binaryType as keyof BinaryType]
            ).toEqual(0);
          });

          it(`has a stride which is an integer multiple of its size in bytes`, () => {
            expect(
              packedAttributeDefinitionSet.stride %
                binaryTypeBytes[value.binaryType as keyof BinaryType]
            ).toEqual(0);
          });

          if (Object.keys(attributeDefinitionSet).length > 1) {
            describe(`does not overlap`, () => {
              for (const otherKey in attributeDefinitionSet) {
                if (otherKey !== key) {
                  it(otherKey, () => {
                    const otherValue = attributeDefinitionSet[
                      otherKey
                    ] as AttributeDefinition;

                    const otherOffset =
                      packedAttributeDefinitionSet.offsets[otherKey];

                    const otherEnd =
                      otherOffset +
                      binaryTypeBytes[
                        otherValue.binaryType as keyof BinaryType
                      ] *
                        shaderPrimitiveArity[
                          otherValue.shaderPrimitive as keyof ShaderPrimitive
                        ];

                    const otherIsBefore = otherEnd <= offset;
                    const otherIsAfter = otherOffset >= end;

                    expect(otherIsBefore || otherIsAfter).toBeTrue();
                  });
                }
              }
            });
          }
        });
      }
    });
  }

  Scenario(`unsigned byte float`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte float`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
  });

  Scenario(`unsigned byte vec2`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte vec2`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
  });

  Scenario(`unsigned byte vec3`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte vec3`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
  });

  Scenario(`unsigned byte vec4`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte vec4`, {
    attribute: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
  });

  Scenario(`signed byte float`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte float`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
  });

  Scenario(`signed byte vec2`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte vec2`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
  });

  Scenario(`signed byte vec3`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte vec3`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
  });

  Scenario(`signed byte vec4`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte vec4`, {
    attribute: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
  });

  Scenario(`unsigned short float`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short float`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
  });

  Scenario(`unsigned short vec2`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short vec2`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
  });

  Scenario(`unsigned short vec3`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short vec3`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
  });

  Scenario(`unsigned short vec4`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short vec4`, {
    attribute: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
  });

  Scenario(`signed short float`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized signed short float`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
  });

  Scenario(`signed short vec2`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized signed short vec2`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
  });

  Scenario(`signed short vec3`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized signed short vec3`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
  });

  Scenario(`signed short vec4`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized signed short vec4`, {
    attribute: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
  });

  Scenario(`float float`, {
    attribute: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`float vec2`, {
    attribute: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Vec2,
    },
  });

  Scenario(`float vec3`, {
    attribute: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Vec3,
    },
  });

  Scenario(`float vec4`, {
    attribute: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Vec4,
    },
  });

  Scenario(`one 16-bit amongst 8-bit`, {
    a: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    b: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    c: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    d: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    e: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`one 32-bit amongst 8-bit`, {
    a: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    b: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    c: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    d: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Float,
    },
    e: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`one 32-bit amongst 16-bit`, {
    a: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    b: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    c: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    d: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Float,
    },
    e: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });

  Scenario(`8-bit, 16-bit and 32-bit`, {
    a: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    b: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    c: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    d: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Float,
    },
    e: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
  });
});
