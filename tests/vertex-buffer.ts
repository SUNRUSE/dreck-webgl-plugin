import {
  Constants,
  ContextInterface,
  Float,
  PackedAttributeDefinitionSet,
  Vec2,
  Vec3,
  Vec4,
  VertexBuffer,
} from "../..";

describe(`VertexBuffer`, () => {
  type TestAttributeSet = {
    readonly unsignedByteFloat: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly normalizedUnsignedByteFloat: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly unsignedByteVec2: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly normalizedUnsignedByteVec2: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly unsignedByteVec3: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly normalizedUnsignedByteVec3: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly unsignedByteVec4: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
    readonly normalizedUnsignedByteVec4: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly byteFloat: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly normalizedByteFloat: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly byteVec2: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly normalizedByteVec2: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly byteVec3: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly normalizedByteVec3: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly byteVec4: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
    readonly normalizedByteVec4: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly unsignedShortFloat: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly normalizedUnsignedShortFloat: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly unsignedShortVec2: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly normalizedUnsignedShortVec2: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly unsignedShortVec3: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly normalizedUnsignedShortVec3: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly unsignedShortVec4: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
    readonly normalizedUnsignedShortVec4: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly shortFloat: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly normalizedShortFloat: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly shortVec2: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly normalizedShortVec2: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly shortVec3: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly normalizedShortVec3: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly shortVec4: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
    readonly normalizedShortVec4: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly floatFloat: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly floatVec2: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly floatVec3: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly floatVec4: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
  };

  type TestGeneratedVertices = {
    readonly unsignedByteFloat: ReadonlyArray<Float>;
    readonly normalizedUnsignedByteFloat: ReadonlyArray<Float>;
    readonly unsignedByteVec2: ReadonlyArray<Vec2>;
    readonly normalizedUnsignedByteVec2: ReadonlyArray<Vec2>;
    readonly unsignedByteVec3: ReadonlyArray<Vec3>;
    readonly normalizedUnsignedByteVec3: ReadonlyArray<Vec3>;
    readonly unsignedByteVec4: ReadonlyArray<Vec4>;
    readonly normalizedUnsignedByteVec4: ReadonlyArray<Vec4>;
    readonly byteFloat: ReadonlyArray<Float>;
    readonly normalizedByteFloat: ReadonlyArray<Float>;
    readonly byteVec2: ReadonlyArray<Vec2>;
    readonly normalizedByteVec2: ReadonlyArray<Vec2>;
    readonly byteVec3: ReadonlyArray<Vec3>;
    readonly normalizedByteVec3: ReadonlyArray<Vec3>;
    readonly byteVec4: ReadonlyArray<Vec4>;
    readonly normalizedByteVec4: ReadonlyArray<Vec4>;
    readonly unsignedShortFloat: ReadonlyArray<Float>;
    readonly normalizedUnsignedShortFloat: ReadonlyArray<Float>;
    readonly unsignedShortVec2: ReadonlyArray<Vec2>;
    readonly normalizedUnsignedShortVec2: ReadonlyArray<Vec2>;
    readonly unsignedShortVec3: ReadonlyArray<Vec3>;
    readonly normalizedUnsignedShortVec3: ReadonlyArray<Vec3>;
    readonly unsignedShortVec4: ReadonlyArray<Vec4>;
    readonly normalizedUnsignedShortVec4: ReadonlyArray<Vec4>;
    readonly shortFloat: ReadonlyArray<Float>;
    readonly normalizedShortFloat: ReadonlyArray<Float>;
    readonly shortVec2: ReadonlyArray<Vec2>;
    readonly normalizedShortVec2: ReadonlyArray<Vec2>;
    readonly shortVec3: ReadonlyArray<Vec3>;
    readonly normalizedShortVec3: ReadonlyArray<Vec3>;
    readonly shortVec4: ReadonlyArray<Vec4>;
    readonly normalizedShortVec4: ReadonlyArray<Vec4>;
    readonly floatFloat: ReadonlyArray<Float>;
    readonly floatVec2: ReadonlyArray<Vec2>;
    readonly floatVec3: ReadonlyArray<Vec3>;
    readonly floatVec4: ReadonlyArray<Vec4>;
  };

  let packedAttributeDefinitionSet: PackedAttributeDefinitionSet<TestAttributeSet>;

  beforeAll(() => {
    packedAttributeDefinitionSet =
      new PackedAttributeDefinitionSet<TestAttributeSet>({
        unsignedByteFloat: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Float,
          normalized: false,
        },
        normalizedUnsignedByteFloat: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Float,
          normalized: true,
        },
        unsignedByteVec2: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Vec2,
          normalized: false,
        },
        normalizedUnsignedByteVec2: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Vec2,
          normalized: true,
        },
        unsignedByteVec3: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Vec3,
          normalized: false,
        },
        normalizedUnsignedByteVec3: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Vec3,
          normalized: true,
        },
        unsignedByteVec4: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Vec4,
          normalized: false,
        },
        normalizedUnsignedByteVec4: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Vec4,
          normalized: true,
        },
        byteFloat: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Float,
          normalized: false,
        },
        normalizedByteFloat: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Float,
          normalized: true,
        },
        byteVec2: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Vec2,
          normalized: false,
        },
        normalizedByteVec2: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Vec2,
          normalized: true,
        },
        byteVec3: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Vec3,
          normalized: false,
        },
        normalizedByteVec3: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Vec3,
          normalized: true,
        },
        byteVec4: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Vec4,
          normalized: false,
        },
        normalizedByteVec4: {
          binaryType: Constants.Byte,
          shaderPrimitive: Constants.Vec4,
          normalized: true,
        },
        unsignedShortFloat: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Float,
          normalized: false,
        },
        normalizedUnsignedShortFloat: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Float,
          normalized: true,
        },
        unsignedShortVec2: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Vec2,
          normalized: false,
        },
        normalizedUnsignedShortVec2: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Vec2,
          normalized: true,
        },
        unsignedShortVec3: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Vec3,
          normalized: false,
        },
        normalizedUnsignedShortVec3: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Vec3,
          normalized: true,
        },
        unsignedShortVec4: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Vec4,
          normalized: false,
        },
        normalizedUnsignedShortVec4: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Vec4,
          normalized: true,
        },
        shortFloat: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Float,
          normalized: false,
        },
        normalizedShortFloat: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Float,
          normalized: true,
        },
        shortVec2: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Vec2,
          normalized: false,
        },
        normalizedShortVec2: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Vec2,
          normalized: true,
        },
        shortVec3: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Vec3,
          normalized: false,
        },
        normalizedShortVec3: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Vec3,
          normalized: true,
        },
        shortVec4: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Vec4,
          normalized: false,
        },
        normalizedShortVec4: {
          binaryType: Constants.Short,
          shaderPrimitive: Constants.Vec4,
          normalized: true,
        },
        floatFloat: {
          binaryType: Constants.Float,
          shaderPrimitive: Constants.Float,
          normalized: false,
        },
        floatVec2: {
          binaryType: Constants.Float,
          shaderPrimitive: Constants.Vec2,
          normalized: false,
        },
        floatVec3: {
          binaryType: Constants.Float,
          shaderPrimitive: Constants.Vec3,
          normalized: false,
        },
        floatVec4: {
          binaryType: Constants.Float,
          shaderPrimitive: Constants.Vec4,
          normalized: false,
        },
      });
  });

  const modes: ReadonlyArray<{
    readonly description: string;

    readonly mode:
      | Constants.Points
      | Constants.LineStrip
      | Constants.LineLoop
      | Constants.Lines
      | Constants.TriangleStrip
      | Constants.TriangleFan
      | Constants.Triangles;
  }> = [
    {
      description: `points`,
      mode: Constants.Points,
    },
    {
      description: `line strip`,
      mode: Constants.LineStrip,
    },
    {
      description: `line loop`,
      mode: Constants.LineLoop,
    },
    {
      description: `lines`,
      mode: Constants.Lines,
    },
    {
      description: `triangle strip`,
      mode: Constants.TriangleStrip,
    },
    {
      description: `triangle fan`,
      mode: Constants.TriangleFan,
    },
    {
      description: `triangles`,
      mode: Constants.Triangles,
    },
  ];

  for (const mode of modes) {
    describe(mode.description, () => {
      describe(`on construction`, () => {
        let generateVertices: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;

        class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
          generateVertices(): {
            readonly unsignedByteFloat: ReadonlyArray<Float>;
            readonly normalizedUnsignedByteFloat: ReadonlyArray<Float>;
            readonly unsignedByteVec2: ReadonlyArray<Vec2>;
            readonly normalizedUnsignedByteVec2: ReadonlyArray<Vec2>;
            readonly unsignedByteVec3: ReadonlyArray<Vec3>;
            readonly normalizedUnsignedByteVec3: ReadonlyArray<Vec3>;
            readonly unsignedByteVec4: ReadonlyArray<Vec4>;
            readonly normalizedUnsignedByteVec4: ReadonlyArray<Vec4>;
            readonly byteFloat: ReadonlyArray<Float>;
            readonly normalizedByteFloat: ReadonlyArray<Float>;
            readonly byteVec2: ReadonlyArray<Vec2>;
            readonly normalizedByteVec2: ReadonlyArray<Vec2>;
            readonly byteVec3: ReadonlyArray<Vec3>;
            readonly normalizedByteVec3: ReadonlyArray<Vec3>;
            readonly byteVec4: ReadonlyArray<Vec4>;
            readonly normalizedByteVec4: ReadonlyArray<Vec4>;
            readonly unsignedShortFloat: ReadonlyArray<Float>;
            readonly normalizedUnsignedShortFloat: ReadonlyArray<Float>;
            readonly unsignedShortVec2: ReadonlyArray<Vec2>;
            readonly normalizedUnsignedShortVec2: ReadonlyArray<Vec2>;
            readonly unsignedShortVec3: ReadonlyArray<Vec3>;
            readonly normalizedUnsignedShortVec3: ReadonlyArray<Vec3>;
            readonly unsignedShortVec4: ReadonlyArray<Vec4>;
            readonly normalizedUnsignedShortVec4: ReadonlyArray<Vec4>;
            readonly shortFloat: ReadonlyArray<Float>;
            readonly normalizedShortFloat: ReadonlyArray<Float>;
            readonly shortVec2: ReadonlyArray<Vec2>;
            readonly normalizedShortVec2: ReadonlyArray<Vec2>;
            readonly shortVec3: ReadonlyArray<Vec3>;
            readonly normalizedShortVec3: ReadonlyArray<Vec3>;
            readonly shortVec4: ReadonlyArray<Vec4>;
            readonly normalizedShortVec4: ReadonlyArray<Vec4>;
            readonly floatFloat: ReadonlyArray<Float>;
            readonly floatVec2: ReadonlyArray<Vec2>;
            readonly floatVec3: ReadonlyArray<Vec3>;
            readonly floatVec4: ReadonlyArray<Vec4>;
          } {
            return generateVertices();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `isContextLost`
        >;

        let vertexBuffer: TestVertexBuffer;

        beforeAll(() => {
          generateVertices = jasmine.createSpy(`generateVertices`);
          createBuffer = jasmine.createSpy(`createBuffer`);
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createBuffer,
              bindBuffer,
              bufferData,
              deleteBuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          vertexBuffer = new TestVertexBuffer(
            context,
            mode.mode,
            packedAttributeDefinitionSet
          );
        });

        it(`exposes the context`, () => {
          expect(vertexBuffer.context).toBe(context);
        });

        it(`exposes the mode`, () => {
          expect(vertexBuffer.mode).toEqual(mode.mode);
        });

        it(`exposes the packed attribute definition set`, () => {
          expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
            packedAttributeDefinitionSet
          );
        });

        it(`does not generate any vertices`, () => {
          expect(generateVertices).not.toHaveBeenCalled();
        });

        it(`does not create any buffers`, () => {
          expect(createBuffer).not.toHaveBeenCalled();
        });

        it(`does not bind any buffers`, () => {
          expect(bindBuffer).not.toHaveBeenCalled();
        });

        it(`does not buffer any data`, () => {
          expect(bufferData).not.toHaveBeenCalled();
        });

        it(`does not delete any buffers`, () => {
          expect(deleteBuffer).not.toHaveBeenCalled();
        });

        it(`does not check for context loss`, () => {
          expect(isContextLost).not.toHaveBeenCalled();
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });
      });

      describe(`on generating data`, () => {
        describe(`when valid`, () => {
          let generateVertices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let isContextLost: jasmine.Spy;
          let render: jasmine.Spy;
          let addEventListener: jasmine.Spy;

          class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
            generateVertices(): TestGeneratedVertices {
              return generateVertices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `isContextLost`
          >;

          let vertexBuffer: TestVertexBuffer;
          let output: {
            readonly bufferContent: BufferSource;
            readonly instanceData: {
              readonly numberOfVertices: number;
            };
          };

          beforeAll(() => {
            generateVertices = jasmine
              .createSpy(`generateVertices`)
              .and.returnValue({
                unsignedByteFloat: [23, 0, -0, 255, 240],
                normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                unsignedByteVec2: [
                  [37, 255],
                  [0, 19],
                  [207, 50],
                  [73, -0],
                  [98, 85],
                ],
                normalizedUnsignedByteVec2: [
                  [101, 204],
                  [255, 33],
                  [-0, 45],
                  [191, 0],
                  [63, 59],
                ],
                unsignedByteVec3: [
                  [70, 101, 30],
                  [224, 18, 50],
                  [255, 0, 70],
                  [67, 45, -0],
                  [225, 240, 108],
                ],
                normalizedUnsignedByteVec3: [
                  [104, 55, 37],
                  [201, -0, 166],
                  [189, 255, 190],
                  [0, 140, 167],
                  [218, 190, 45],
                ],
                unsignedByteVec4: [
                  [111, 136, 42, 240],
                  [18, 19, 250, -0],
                  [117, 0, 217, 87],
                  [33, 45, 255, 50],
                  [201, 18, 20, 50],
                ],
                normalizedUnsignedByteVec4: [
                  [36, 141, 155, 73],
                  [80, 156, 241, 18],
                  [91, 0, -0, 55],
                  [30, 244, 255, 27],
                  [141, 221, 20, 36],
                ],
                byteFloat: [127, -0, 0, -128, 44],
                normalizedByteFloat: [55, -128, 127, 0, -0],
                byteVec2: [
                  [-0, 33],
                  [55, 127],
                  [16, 0],
                  [-128, -45],
                  [-80, -9],
                ],
                normalizedByteVec2: [
                  [0, 127],
                  [35, -40],
                  [-55, 20],
                  [-128, -0],
                  [70, 50],
                ],
                byteVec3: [
                  [55, -21, 17],
                  [-60, -128, 30],
                  [-0, 0, 40],
                  [60, -73, 127],
                  [51, -44, 27],
                ],
                normalizedByteVec3: [
                  [-101, 70, -44],
                  [0, 36, -0],
                  [51, 89, -128],
                  [-33, 127, -56],
                  [45, -10, 50],
                ],
                byteVec4: [
                  [-102, 27, -56, 101],
                  [45, -64, 80, 127],
                  [-20, -128, -2, -19],
                  [32, -0, 74, 101],
                  [-40, -50, 0, -70],
                ],
                normalizedByteVec4: [
                  [24, -101, 127, -128],
                  [44, 27, 0, 118],
                  [-0, -100, -80, 64],
                  [-32, 48, 77, -90],
                  [80, -95, -21, 30],
                ],
                unsignedShortFloat: [27, 65535, 0, 224, -0],
                normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                unsignedShortVec2: [
                  [24125, 137],
                  [22156, 65535],
                  [0, 50292],
                  [1421, -0],
                  [249, 5984],
                ],
                normalizedUnsignedShortVec2: [
                  [5872, 9952],
                  [23252, -0],
                  [0, 44141],
                  [321, 65535],
                  [693, 2728],
                ],
                unsignedShortVec3: [
                  [3215, 5937, 22271],
                  [21, 65535, 64],
                  [532, 4393, 0],
                  [21146, -0, 44221],
                  [55292, 121, 23],
                ],
                normalizedUnsignedShortVec3: [
                  [1232, 55553, 331],
                  [545, 0, 3435],
                  [-0, 65535, 5669],
                  [11987, 9893, 7747],
                  [44921, 4938, 5873],
                ],
                unsignedShortVec4: [
                  [3525, 65535, 4800, 2100],
                  [5349, 55, 5021, 201],
                  [14221, 22550, 0, 170],
                  [1555, -0, 140, 50],
                  [22105, 30000, 21, 241],
                ],
                normalizedUnsignedShortVec4: [
                  [1411, -0, 6564, 62221],
                  [8873, 14782, 0, 58381],
                  [44491, 992, 35332, 5352],
                  [52023, 9959, 2424, 23913],
                  [33131, 65535, 392, 5939],
                ],
                shortFloat: [0, 32767, 1411, -32768, -0],
                normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                shortVec2: [
                  [211, -0],
                  [0, 3838],
                  [32767, -9932],
                  [-32768, -23941],
                  [382, -5783],
                ],
                normalizedShortVec2: [
                  [231, 32767],
                  [-32768, 23281],
                  [-22489, 0],
                  [3213, -0],
                  [-24151, 17711],
                ],
                shortVec3: [
                  [-9592, 15939, 22315],
                  [32767, 42, -21234],
                  [2141, 0, -0],
                  [2221, -12111, 32767],
                  [5532, 29913, -29999],
                ],
                normalizedShortVec3: [
                  [-22141, -11, 9921],
                  [0, -0, 8575],
                  [31111, 22114, -32768],
                  [-14948, -12059, 32767],
                  [5555, 10315, 2001],
                ],
                shortVec4: [
                  [-4536, -6989, 1101, -2202],
                  [6346, 0, -0, 399],
                  [414, -593, 32767, -32768],
                  [-5849, -20195, 9599, 31772],
                  [2292, -2555, -4441, -5989],
                ],
                normalizedShortVec4: [
                  [14118, 0, -0, 383],
                  [-31332, -5113, -32767, 28],
                  [-131, 21850, -512, -18923],
                  [4472, -231, -131, 4414],
                  [4299, -242, 32767, 11],
                ],
                floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                floatVec2: [
                  [573.2, 3.14],
                  [-441.59, 37.2],
                  [-58.272, -985.383],
                  [18.9, -2.21],
                  [5583.28, -8967.5],
                ],
                floatVec3: [
                  [466.636, -23.838, -69.37],
                  [-235.3463, 45.32, 3093.3],
                  [494.294, 4727.8, -94947.37],
                  [65.35, 22.15, -294.7],
                  [-22.251, -994.3, -358.2],
                ],
                floatVec4: [
                  [9585.473, 55.2, 2154.33, 594.3478],
                  [6783.424, 5583.2, 12542.36, 97326.2],
                  [467.847, -484.287, 44.4, 21.593],
                  [6335.293, 59.37, 2292.5, 995.3],
                  [9938.32, 473.2, 663.2, 5992.2],
                ],
              });
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            isContextLost = jasmine.createSpy(`isContextLost`);
            render = jasmine.createSpy(`render`);
            addEventListener = jasmine.createSpy(`addEventListener`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                isContextLost,
              },
              timesContextRestored: 7,
              render,
              addEventListener,
            };

            vertexBuffer = new TestVertexBuffer(
              context,
              mode.mode,
              packedAttributeDefinitionSet
            );

            output = vertexBuffer.generateData();
          });

          it(`exposes the context`, () => {
            expect(vertexBuffer.context).toBe(context);
          });

          it(`exposes the mode`, () => {
            expect(vertexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the packed attribute definition set`, () => {
            expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
              packedAttributeDefinitionSet
            );
          });

          it(`generates one set of vertices`, () => {
            expect(generateVertices).toHaveBeenCalledTimes(1);
          });

          it(`does not create any buffers`, () => {
            expect(createBuffer).not.toHaveBeenCalled();
          });

          it(`does not bind any buffers`, () => {
            expect(bindBuffer).not.toHaveBeenCalled();
          });

          it(`does not buffer any data`, () => {
            expect(bufferData).not.toHaveBeenCalled();
          });

          it(`does not delete any buffers`, () => {
            expect(deleteBuffer).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`does not render`, () => {
            expect(render).not.toHaveBeenCalled();
          });

          it(`does not add any event listeners`, () => {
            expect(addEventListener).not.toHaveBeenCalled();
          });

          describe(`returns bytes including`, () => {
            let actualBytes: Uint8Array;

            beforeAll(() => {
              actualBytes =
                output.bufferContent instanceof ArrayBuffer
                  ? new Uint8Array(output.bufferContent)
                  : new Uint8Array(output.bufferContent.buffer);
            });

            function Attribute(
              key: keyof TestAttributeSet,
              bytes: readonly [
                ReadonlyArray<number>,
                ReadonlyArray<number>,
                ReadonlyArray<number>,
                ReadonlyArray<number>,
                ReadonlyArray<number>
              ]
            ): void {
              it(key, () => {
                const offset = packedAttributeDefinitionSet.offsets[key];

                for (
                  let vertexIndex = 0;
                  vertexIndex < bytes.length;
                  vertexIndex++
                ) {
                  const expectedBytes = bytes[
                    vertexIndex
                  ] as ReadonlyArray<number>;

                  for (
                    let byteIndex = 0;
                    byteIndex < expectedBytes.length;
                    byteIndex++
                  ) {
                    expect(
                      actualBytes[
                        vertexIndex * packedAttributeDefinitionSet.stride +
                          offset +
                          byteIndex
                      ]
                    )
                      .withContext(`vertex ${vertexIndex} byte ${byteIndex}`)
                      .toEqual(expectedBytes[byteIndex]);
                  }
                }
              });
            }

            Attribute(`unsignedByteFloat`, [[23], [0], [0], [255], [240]]);
            Attribute(`normalizedUnsignedByteFloat`, [
              [155],
              [0],
              [255],
              [0],
              [19],
            ]);
            Attribute(`unsignedByteVec2`, [
              [37, 255],
              [0, 19],
              [207, 50],
              [73, 0],
              [98, 85],
            ]);
            Attribute(`normalizedUnsignedByteVec2`, [
              [101, 204],
              [255, 33],
              [0, 45],
              [191, 0],
              [63, 59],
            ]);
            Attribute(`unsignedByteVec3`, [
              [70, 101, 30],
              [224, 18, 50],
              [255, 0, 70],
              [67, 45, 0],
              [225, 240, 108],
            ]);
            Attribute(`normalizedUnsignedByteVec3`, [
              [104, 55, 37],
              [201, 0, 166],
              [189, 255, 190],
              [0, 140, 167],
              [218, 190, 45],
            ]);
            Attribute(`unsignedByteVec4`, [
              [111, 136, 42, 240],
              [18, 19, 250, 0],
              [117, 0, 217, 87],
              [33, 45, 255, 50],
              [201, 18, 20, 50],
            ]);
            Attribute(`normalizedUnsignedByteVec4`, [
              [36, 141, 155, 73],
              [80, 156, 241, 18],
              [91, 0, 0, 55],
              [30, 244, 255, 27],
              [141, 221, 20, 36],
            ]);
            Attribute(`byteFloat`, [[127], [0], [0], [128], [44]]);
            Attribute(`normalizedByteFloat`, [[55], [128], [127], [0], [0]]);
            Attribute(`byteVec2`, [
              [0, 33],
              [55, 127],
              [16, 0],
              [128, 211],
              [176, 247],
            ]);
            Attribute(`normalizedByteVec2`, [
              [0, 127],
              [35, 216],
              [201, 20],
              [128, 0],
              [70, 50],
            ]);
            Attribute(`byteVec3`, [
              [55, 235, 17],
              [196, 128, 30],
              [0, 0, 40],
              [60, 183, 127],
              [51, 212, 27],
            ]);
            Attribute(`normalizedByteVec3`, [
              [155, 70, 212],
              [0, 36, 0],
              [51, 89, 128],
              [223, 127, 200],
              [45, 246, 50],
            ]);
            Attribute(`byteVec4`, [
              [154, 27, 200, 101],
              [45, 192, 80, 127],
              [236, 128, 254, 237],
              [32, 0, 74, 101],
              [216, 206, 0, 186],
            ]);
            Attribute(`normalizedByteVec4`, [
              [24, 155, 127, 128],
              [44, 27, 0, 118],
              [0, 156, 176, 64],
              [224, 48, 77, 166],
              [80, 161, 235, 30],
            ]);
            Attribute(`unsignedShortFloat`, [
              [27, 0],
              [255, 255],
              [0, 0],
              [224, 0],
              [0, 0],
            ]);
            Attribute(`normalizedUnsignedShortFloat`, [
              [255, 255],
              [0, 0],
              [0, 0],
              [51, 94],
              [37, 0],
            ]);
            Attribute(`unsignedShortVec2`, [
              [61, 94, 137, 0],
              [140, 86, 255, 255],
              [0, 0, 116, 196],
              [141, 5, 0, 0],
              [249, 0, 96, 23],
            ]);
            Attribute(`normalizedUnsignedShortVec2`, [
              [240, 22, 224, 38],
              [212, 90, 0, 0],
              [0, 0, 109, 172],
              [65, 1, 255, 255],
              [181, 2, 168, 10],
            ]);
            Attribute(`unsignedShortVec3`, [
              [143, 12, 49, 23, 255, 86],
              [21, 0, 255, 255, 64, 0],
              [20, 2, 41, 17, 0, 0],
              [154, 82, 0, 0, 189, 172],
              [252, 215, 121, 0, 23, 0],
            ]);
            Attribute(`normalizedUnsignedShortVec3`, [
              [208, 4, 1, 217, 75, 1],
              [33, 2, 0, 0, 107, 13],
              [0, 0, 255, 255, 37, 22],
              [211, 46, 165, 38, 67, 30],
              [121, 175, 74, 19, 241, 22],
            ]);
            Attribute(`unsignedShortVec4`, [
              [197, 13, 255, 255, 192, 18, 52, 8],
              [229, 20, 55, 0, 157, 19, 201, 0],
              [141, 55, 22, 88, 0, 0, 170],
              [19, 6, 0, 0, 140, 0, 50, 0],
              [89, 86, 48, 117, 21, 0, 241, 0],
            ]);
            Attribute(`normalizedUnsignedShortVec4`, [
              [131, 5, 0, 0, 164, 25, 13, 243],
              [169, 34, 190, 57, 0, 0, 13, 228],
              [203, 173, 224, 3, 4, 138, 232, 20],
              [55, 203, 231, 38, 120, 9, 105, 93],
              [107, 129, 255, 255, 136, 1, 51, 23],
            ]);
            Attribute(`shortFloat`, [
              [0, 0],
              [255, 127],
              [131, 5],
              [0, 128],
              [0, 0],
            ]);
            Attribute(`normalizedShortFloat`, [
              [78, 195],
              [0, 0],
              [0, 0],
              [0, 128],
              [255, 127],
            ]);
            Attribute(`shortVec2`, [
              [211, 0, 0, 0],
              [0, 0, 254, 14],
              [255, 127, 52, 217],
              [0, 128, 123, 162],
              [126, 1, 105, 233],
            ]);
            Attribute(`normalizedShortVec2`, [
              [231, 0, 255, 127],
              [0, 128, 241, 90],
              [39, 168, 0, 0],
              [141, 12, 0, 0],
              [169, 161, 47, 69],
            ]);
            Attribute(`shortVec3`, [
              [136, 218, 67, 62, 43, 87],
              [255, 127, 42, 0, 14, 173],
              [93, 8, 0, 0, 0, 0],
              [173, 8, 177, 208, 255, 127],
              [156, 21, 217, 116, 209, 138],
            ]);
            Attribute(`normalizedShortVec3`, [
              [131, 169, 245, 255, 193, 38],
              [0, 0, 0, 0, 127, 33],
              [135, 121, 98, 86, 0, 128],
              [156, 197, 229, 208, 255, 127],
              [179, 21, 75, 40, 209, 7],
            ]);
            Attribute(`shortVec4`, [
              [72, 238, 179, 228, 77, 4, 102, 247],
              [202, 24, 0, 0, 0, 0, 143, 1],
              [158, 1, 175, 253, 255, 127, 0, 128],
              [39, 233, 29, 177, 127, 37, 28, 124],
              [244, 8, 5, 246, 167, 238, 155, 232],
            ]);
            Attribute(`normalizedShortVec4`, [
              [38, 55, 0, 0, 0, 0, 127, 1],
              [156, 133, 7, 236, 1, 128, 28, 0],
              [125, 255, 90, 85, 0, 254, 21, 182],
              [120, 17, 25, 255, 125, 255, 62, 17],
              [203, 16, 14, 255, 255, 127, 11, 0],
            ]);
            Attribute(`floatFloat`, [
              [246, 40, 203, 66],
              [41, 156, 160, 69],
              [205, 204, 44, 64],
              [154, 153, 166, 195],
              [0, 128, 64, 195],
            ]);
            Attribute(`floatVec2`, [
              [205, 76, 15, 68, 195, 245, 72, 64],
              [133, 203, 220, 195, 205, 204, 20, 66],
              [135, 22, 105, 194, 131, 88, 118, 196],
              [51, 51, 151, 65, 164, 112, 13, 192],
              [61, 122, 174, 69, 0, 30, 12, 198],
            ]);
            Attribute(`floatVec3`, [
              [104, 81, 233, 67, 57, 180, 190, 193, 113, 189, 138, 194],
              [167, 88, 107, 195, 174, 71, 53, 66, 205, 84, 65, 69],
              [162, 37, 247, 67, 102, 190, 147, 69, 175, 113, 185, 199],
              [51, 179, 130, 66, 51, 51, 177, 65, 154, 89, 147, 195],
              [12, 2, 178, 193, 51, 147, 120, 196, 154, 25, 179, 195],
            ]);
            Attribute(`floatVec4`, [
              [
                228, 197, 21, 70, 205, 204, 92, 66, 72, 165, 6, 69, 66, 150, 20,
                68,
              ],
              [
                100, 251, 211, 69, 154, 121, 174, 69, 113, 249, 67, 70, 26, 23,
                190, 71,
              ],
              [
                106, 236, 233, 67, 188, 36, 242, 195, 154, 153, 49, 66, 119,
                190, 172, 65,
              ],
              [
                88, 250, 197, 69, 225, 122, 109, 66, 0, 72, 15, 69, 51, 211,
                120, 68,
              ],
              [
                72, 73, 27, 70, 154, 153, 236, 67, 205, 204, 37, 68, 154, 65,
                187, 69,
              ],
            ]);
          });

          it(`returns everything else as expected`, () => {
            expect(output).toEqual({
              bufferContent: jasmine.any(Uint8Array),
              instanceData: { numberOfVertices: 5 },
            });
          });
        });

        describe(`when an unsigned byte contains`, () => {
          describe(`NaN`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, Number.NaN, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" cannot be NaN.`
                )
              );
            });
          });

          describe(`positive infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, Number.POSITIVE_INFINITY, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" must be finite.`
                )
              );
            });
          });

          describe(`negative infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, Number.NEGATIVE_INFINITY, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" must be finite.`
                )
              );
            });
          });

          describe(`non-integers`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224.3, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" can only be integers.`
                )
              );
            });
          });

          describe(`256`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 256, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" cannot be greater than 255.`
                )
              );
            });
          });

          describe(`257`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 257, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" cannot be greater than 255.`
                )
              );
            });
          });

          describe(`-1`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, -1, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" cannot be less than 0.`
                )
              );
            });
          });

          describe(`-2`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, -2, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedByteVec3" cannot be less than 0.`
                )
              );
            });
          });
        });

        describe(`when a signed byte contains`, () => {
          describe(`NaN`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, Number.NaN, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" cannot be NaN.`
                )
              );
            });
          });

          describe(`positive infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, Number.POSITIVE_INFINITY, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" must be finite.`
                )
              );
            });
          });

          describe(`negative infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, Number.NEGATIVE_INFINITY, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" must be finite.`
                )
              );
            });
          });

          describe(`non-integers`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60.2, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" can only be integers.`
                )
              );
            });
          });

          describe(`128`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 128, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" cannot be greater than 127.`
                )
              );
            });
          });

          describe(`129`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 129],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" cannot be greater than 127.`
                )
              );
            });
          });

          describe(`-129`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -129, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" cannot be less than -128.`
                )
              );
            });
          });

          describe(`-130`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -130, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "byteVec3" cannot be less than -128.`
                )
              );
            });
          });
        });

        describe(`when an unsigned short contains`, () => {
          describe(`NaN`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, Number.NaN, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" cannot be NaN.`
                )
              );
            });
          });

          describe(`positive infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, Number.POSITIVE_INFINITY, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" must be finite.`
                )
              );
            });
          });

          describe(`negative infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, Number.NEGATIVE_INFINITY, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" must be finite.`
                )
              );
            });
          });

          describe(`non-integers`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393.2, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" can only be integers.`
                )
              );
            });
          });

          describe(`65536`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 65536, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" cannot be greater than 65535.`
                )
              );
            });
          });

          describe(`65537`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65537, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" cannot be greater than 65535.`
                )
              );
            });
          });

          describe(`-1`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, -1, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" cannot be less than 0.`
                )
              );
            });
          });

          describe(`-2`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, -2],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "unsignedShortVec3" cannot be less than 0.`
                )
              );
            });
          });
        });

        describe(`when a signed short contains`, () => {
          describe(`NaN`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, Number.NaN, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" cannot be NaN.`
                )
              );
            });
          });

          describe(`positive infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, Number.POSITIVE_INFINITY],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" must be finite.`
                )
              );
            });
          });

          describe(`negative infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, Number.NEGATIVE_INFINITY],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" must be finite.`
                )
              );
            });
          });

          describe(`non-integers`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111.2, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" can only be integers.`
                )
              );
            });
          });

          describe(`32768`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 32768, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" cannot be greater than 32767.`
                )
              );
            });
          });

          describe(`32769`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 32769, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" cannot be greater than 32767.`
                )
              );
            });
          });

          describe(`-32769`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -32769, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" cannot be less than -32768.`
                )
              );
            });
          });

          describe(`-32770`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -32770, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "shortVec3" cannot be less than -32768.`
                )
              );
            });
          });
        });

        describe(`when a float contains`, () => {
          describe(`NaN`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, Number.NaN, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "floatVec3" cannot be NaN.`
                )
              );
            });
          });

          describe(`positive infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, Number.POSITIVE_INFINITY, 3093.3],
                    [494.294, 4727.8, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "floatVec3" must be finite.`
                )
              );
            });
          });

          describe(`negative infinity`, () => {
            let generateVertices: jasmine.Spy;
            let createBuffer: jasmine.Spy;
            let bindBuffer: jasmine.Spy;
            let bufferData: jasmine.Spy;
            let deleteBuffer: jasmine.Spy;
            let isContextLost: jasmine.Spy;
            let render: jasmine.Spy;
            let addEventListener: jasmine.Spy;

            class TestVertexBuffer extends VertexBuffer<TestAttributeSet> {
              generateVertices(): TestGeneratedVertices {
                return generateVertices();
              }
            }

            let context: ContextInterface<
              | `createBuffer`
              | `bindBuffer`
              | `bufferData`
              | `deleteBuffer`
              | `isContextLost`
            >;

            let vertexBuffer: TestVertexBuffer;
            let error: unknown;

            beforeAll(() => {
              generateVertices = jasmine
                .createSpy(`generateVertices`)
                .and.returnValue({
                  unsignedByteFloat: [23, 0, -0, 255, 240],
                  normalizedUnsignedByteFloat: [155, 0, 255, -0, 19],
                  unsignedByteVec2: [
                    [37, 255],
                    [0, 19],
                    [207, 50],
                    [73, -0],
                    [98, 85],
                  ],
                  normalizedUnsignedByteVec2: [
                    [101, 204],
                    [255, 33],
                    [-0, 45],
                    [191, 0],
                    [63, 59],
                  ],
                  unsignedByteVec3: [
                    [70, 101, 30],
                    [224, 18, 50],
                    [255, 0, 70],
                    [67, 45, -0],
                    [225, 240, 108],
                  ],
                  normalizedUnsignedByteVec3: [
                    [104, 55, 37],
                    [201, -0, 166],
                    [189, 255, 190],
                    [0, 140, 167],
                    [218, 190, 45],
                  ],
                  unsignedByteVec4: [
                    [111, 136, 42, 240],
                    [18, 19, 250, -0],
                    [117, 0, 217, 87],
                    [33, 45, 255, 50],
                    [201, 18, 20, 50],
                  ],
                  normalizedUnsignedByteVec4: [
                    [36, 141, 155, 73],
                    [80, 156, 241, 18],
                    [91, 0, -0, 55],
                    [30, 244, 255, 27],
                    [141, 221, 20, 36],
                  ],
                  byteFloat: [127, -0, 0, -128, 44],
                  normalizedByteFloat: [55, -128, 127, 0, -0],
                  byteVec2: [
                    [-0, 33],
                    [55, 127],
                    [16, 0],
                    [-128, -45],
                    [-80, -9],
                  ],
                  normalizedByteVec2: [
                    [0, 127],
                    [35, -40],
                    [-55, 20],
                    [-128, -0],
                    [70, 50],
                  ],
                  byteVec3: [
                    [55, -21, 17],
                    [-60, -128, 30],
                    [-0, 0, 40],
                    [60, -73, 127],
                    [51, -44, 27],
                  ],
                  normalizedByteVec3: [
                    [-101, 70, -44],
                    [0, 36, -0],
                    [51, 89, -128],
                    [-33, 127, -56],
                    [45, -10, 50],
                  ],
                  byteVec4: [
                    [-102, 27, -56, 101],
                    [45, -64, 80, 127],
                    [-20, -128, -2, -19],
                    [32, -0, 74, 101],
                    [-40, -50, 0, -70],
                  ],
                  normalizedByteVec4: [
                    [24, -101, 127, -128],
                    [44, 27, 0, 118],
                    [-0, -100, -80, 64],
                    [-32, 48, 77, -90],
                    [80, -95, -21, 30],
                  ],
                  unsignedShortFloat: [27, 65535, 0, 224, -0],
                  normalizedUnsignedShortFloat: [65535, -0, -0, 24115, 37],
                  unsignedShortVec2: [
                    [24125, 137],
                    [22156, 65535],
                    [0, 50292],
                    [1421, -0],
                    [249, 5984],
                  ],
                  normalizedUnsignedShortVec2: [
                    [5872, 9952],
                    [23252, -0],
                    [0, 44141],
                    [321, 65535],
                    [693, 2728],
                  ],
                  unsignedShortVec3: [
                    [3215, 5937, 22271],
                    [21, 65535, 64],
                    [532, 4393, 0],
                    [21146, -0, 44221],
                    [55292, 121, 23],
                  ],
                  normalizedUnsignedShortVec3: [
                    [1232, 55553, 331],
                    [545, 0, 3435],
                    [-0, 65535, 5669],
                    [11987, 9893, 7747],
                    [44921, 4938, 5873],
                  ],
                  unsignedShortVec4: [
                    [3525, 65535, 4800, 2100],
                    [5349, 55, 5021, 201],
                    [14221, 22550, 0, 170],
                    [1555, -0, 140, 50],
                    [22105, 30000, 21, 241],
                  ],
                  normalizedUnsignedShortVec4: [
                    [1411, -0, 6564, 62221],
                    [8873, 14782, 0, 58381],
                    [44491, 992, 35332, 5352],
                    [52023, 9959, 2424, 23913],
                    [33131, 65535, 392, 5939],
                  ],
                  shortFloat: [0, 32767, 1411, -32768, -0],
                  normalizedShortFloat: [-15538, -0, 0, -32768, 32767],
                  shortVec2: [
                    [211, -0],
                    [0, 3838],
                    [32767, -9932],
                    [-32768, -23941],
                    [382, -5783],
                  ],
                  normalizedShortVec2: [
                    [231, 32767],
                    [-32768, 23281],
                    [-22489, 0],
                    [3213, -0],
                    [-24151, 17711],
                  ],
                  shortVec3: [
                    [-9592, 15939, 22315],
                    [32767, 42, -21234],
                    [2141, 0, -0],
                    [2221, -12111, 32767],
                    [5532, 29913, -29999],
                  ],
                  normalizedShortVec3: [
                    [-22141, -11, 9921],
                    [0, -0, 8575],
                    [31111, 22114, -32768],
                    [-14948, -12059, 32767],
                    [5555, 10315, 2001],
                  ],
                  shortVec4: [
                    [-4536, -6989, 1101, -2202],
                    [6346, 0, -0, 399],
                    [414, -593, 32767, -32768],
                    [-5849, -20195, 9599, 31772],
                    [2292, -2555, -4441, -5989],
                  ],
                  normalizedShortVec4: [
                    [14118, 0, -0, 383],
                    [-31332, -5113, -32767, 28],
                    [-131, 21850, -512, -18923],
                    [4472, -231, -131, 4414],
                    [4299, -242, 32767, 11],
                  ],
                  floatFloat: [[101.58], [5139.52], [2.7], [-333.2], [-192.5]],
                  floatVec2: [
                    [573.2, 3.14],
                    [-441.59, 37.2],
                    [-58.272, -985.383],
                    [18.9, -2.21],
                    [5583.28, -8967.5],
                  ],
                  floatVec3: [
                    [466.636, -23.838, -69.37],
                    [-235.3463, 45.32, 3093.3],
                    [494.294, Number.NEGATIVE_INFINITY, -94947.37],
                    [65.35, 22.15, -294.7],
                    [-22.251, -994.3, -358.2],
                  ],
                  floatVec4: [
                    [9585.473, 55.2, 2154.33, 594.3478],
                    [6783.424, 5583.2, 12542.36, 97326.2],
                    [467.847, -484.287, 44.4, 21.593],
                    [6335.293, 59.37, 2292.5, 995.3],
                    [9938.32, 473.2, 663.2, 5992.2],
                  ],
                });
              createBuffer = jasmine.createSpy(`createBuffer`);
              bindBuffer = jasmine.createSpy(`bindBuffer`);
              bufferData = jasmine.createSpy(`bufferData`);
              deleteBuffer = jasmine.createSpy(`deleteBuffer`);
              isContextLost = jasmine.createSpy(`isContextLost`);
              render = jasmine.createSpy(`render`);
              addEventListener = jasmine.createSpy(`addEventListener`);

              context = {
                gl: {
                  createBuffer,
                  bindBuffer,
                  bufferData,
                  deleteBuffer,
                  isContextLost,
                },
                timesContextRestored: 7,
                render,
                addEventListener,
              };

              vertexBuffer = new TestVertexBuffer(
                context,
                mode.mode,
                packedAttributeDefinitionSet
              );

              try {
                vertexBuffer.generateData();
                error = null;
              } catch (e) {
                error = e;
              }
            });

            it(`exposes the context`, () => {
              expect(vertexBuffer.context).toBe(context);
            });

            it(`exposes the mode`, () => {
              expect(vertexBuffer.mode).toEqual(mode.mode);
            });

            it(`exposes the packed attribute definition set`, () => {
              expect(vertexBuffer.packedAttributeDefinitionSet).toBe(
                packedAttributeDefinitionSet
              );
            });

            it(`generates one set of vertices`, () => {
              expect(generateVertices).toHaveBeenCalledTimes(1);
            });

            it(`does not create any buffers`, () => {
              expect(createBuffer).not.toHaveBeenCalled();
            });

            it(`does not bind any buffers`, () => {
              expect(bindBuffer).not.toHaveBeenCalled();
            });

            it(`does not buffer any data`, () => {
              expect(bufferData).not.toHaveBeenCalled();
            });

            it(`does not delete any buffers`, () => {
              expect(deleteBuffer).not.toHaveBeenCalled();
            });

            it(`does not check for context loss`, () => {
              expect(isContextLost).not.toHaveBeenCalled();
            });

            it(`does not render`, () => {
              expect(render).not.toHaveBeenCalled();
            });

            it(`does not add any event listeners`, () => {
              expect(addEventListener).not.toHaveBeenCalled();
            });

            it(`throws the expected error`, () => {
              expect(error).toEqual(
                new Error(
                  `Values of vertex attribute "floatVec3" must be finite.`
                )
              );
            });
          });
        });
      });
    });
  }
});
