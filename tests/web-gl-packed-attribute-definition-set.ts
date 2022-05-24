describe(`WebGlPackedAttributeDefinitionSet`, () => {
  describe(`when the attribute definition set is empty`, () => {
    let error: unknown;

    beforeAll(() => {
      try {
        new WebGlPackedAttributeDefinitionSet({});
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

  function Scenario<
    TAttributeDefinitionSet extends WebGlAttributeDefinitionSet
  >(
    description: string,
    attributeDefinitionSet: TAttributeDefinitionSet
  ): void {
    describe(description, () => {
      let packedAttributeDefinitionSet: WebGlPackedAttributeDefinitionSet<TAttributeDefinitionSet>;

      beforeAll(() => {
        packedAttributeDefinitionSet = new WebGlPackedAttributeDefinitionSet(
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
        const value = attributeDefinitionSet[key] as WebGlAttributeDefinition;

        describe(key, () => {
          let offset: number;
          let end: number;

          beforeAll(() => {
            offset = packedAttributeDefinitionSet.offsets[key];

            end =
              offset +
              webGlBinaryTypeBytes[value.binaryType as keyof WebGlBinaryType] *
                webGlShaderPrimitiveArity[
                  value.shaderPrimitive as keyof WebGlShaderPrimitive
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
              offset %
                webGlBinaryTypeBytes[value.binaryType as keyof WebGlBinaryType]
            ).toEqual(0);
          });

          it(`has a stride which is an integer multiple of its size in bytes`, () => {
            expect(
              packedAttributeDefinitionSet.stride %
                webGlBinaryTypeBytes[value.binaryType as keyof WebGlBinaryType]
            ).toEqual(0);
          });

          if (Object.keys(attributeDefinitionSet).length > 1) {
            describe(`does not overlap`, () => {
              for (const otherKey in attributeDefinitionSet) {
                if (otherKey !== key) {
                  it(otherKey, () => {
                    const otherValue = attributeDefinitionSet[
                      otherKey
                    ] as WebGlAttributeDefinition;

                    const otherOffset =
                      packedAttributeDefinitionSet.offsets[otherKey];

                    const otherEnd =
                      otherOffset +
                      webGlBinaryTypeBytes[
                        otherValue.binaryType as keyof WebGlBinaryType
                      ] *
                        webGlShaderPrimitiveArity[
                          otherValue.shaderPrimitive as keyof WebGlShaderPrimitive
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
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte float`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
  });

  Scenario(`unsigned byte vec2`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte vec2`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
  });

  Scenario(`unsigned byte vec3`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte vec3`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
  });

  Scenario(`unsigned byte vec4`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned byte vec4`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
  });

  Scenario(`signed byte float`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte float`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
  });

  Scenario(`signed byte vec2`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte vec2`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
  });

  Scenario(`signed byte vec3`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte vec3`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
  });

  Scenario(`signed byte vec4`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized signed byte vec4`, {
    attribute: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
  });

  Scenario(`unsigned short float`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short float`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
  });

  Scenario(`unsigned short vec2`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short vec2`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
  });

  Scenario(`unsigned short vec3`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short vec3`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
  });

  Scenario(`unsigned short vec4`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized unsigned short vec4`, {
    attribute: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
  });

  Scenario(`signed short float`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`normalized signed short float`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
  });

  Scenario(`signed short vec2`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
  });

  Scenario(`normalized signed short vec2`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
  });

  Scenario(`signed short vec3`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
  });

  Scenario(`normalized signed short vec3`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
  });

  Scenario(`signed short vec4`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
  });

  Scenario(`normalized signed short vec4`, {
    attribute: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
  });

  Scenario(`float float`, {
    attribute: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`float vec2`, {
    attribute: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec2,
    },
  });

  Scenario(`float vec3`, {
    attribute: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec3,
    },
  });

  Scenario(`float vec4`, {
    attribute: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec4,
    },
  });

  Scenario(`one 16-bit amongst 8-bit`, {
    a: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    b: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    c: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    d: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    e: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`one 32-bit amongst 8-bit`, {
    a: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    b: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    c: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    d: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Float,
    },
    e: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`one 32-bit amongst 16-bit`, {
    a: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    b: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    c: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    d: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Float,
    },
    e: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });

  Scenario(`8-bit, 16-bit and 32-bit`, {
    a: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    b: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    c: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    d: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Float,
    },
    e: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
  });
});
