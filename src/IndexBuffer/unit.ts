import { Constants, ContextInterface, IndexBuffer } from "..";

describe(`IndexBuffer`, () => {
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
        let generateIndices: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let drawElements: jasmine.Spy;
        let isContextLost: jasmine.Spy;

        class TestIndexBuffer extends IndexBuffer {
          generateIndices(): readonly number[] {
            return generateIndices();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `drawElements`
          | `isContextLost`
        >;

        let indexBuffer: TestIndexBuffer;

        beforeAll(() => {
          generateIndices = jasmine.createSpy(`generateIndices`);
          createBuffer = jasmine.createSpy(`createBuffer`);
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          drawElements = jasmine.createSpy(`drawElements`);
          isContextLost = jasmine.createSpy(`isContextLost`);

          context = {
            gl: {
              createBuffer,
              bindBuffer,
              bufferData,
              deleteBuffer,
              drawElements,
              isContextLost,
            },
            timesContextRestored: 7,
          };

          indexBuffer = new TestIndexBuffer(context, mode.mode);
        });

        it(`exposes the target`, () => {
          expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
        });

        it(`exposes the mode`, () => {
          expect(indexBuffer.mode).toEqual(mode.mode);
        });

        it(`exposes the context`, () => {
          expect(indexBuffer.context).toBe(context);
        });

        it(`does not generate any indices`, () => {
          expect(generateIndices).not.toHaveBeenCalled();
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

        it(`does not draw any elements`, () => {
          expect(drawElements).not.toHaveBeenCalled();
        });

        it(`does not check for context loss`, () => {
          expect(isContextLost).not.toHaveBeenCalled();
        });
      });

      describe(`on generating data`, () => {
        describe(`without items`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let result: {
            readonly bufferContent: BufferSource;
            readonly instanceData: {
              readonly count: number;
              readonly type: Constants.UnsignedByte | Constants.UnsignedShort;
            };
          };

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            result = indexBuffer.generateData();
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`returns the expected data`, () => {
            expect(result).toEqual({
              bufferContent: Uint8Array.from([]),
              instanceData: {
                count: 0,
                type: Constants.UnsignedByte,
              },
            });
          });
        });

        describe(`with no item over 255`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let result: {
            readonly bufferContent: BufferSource;
            readonly instanceData: {
              readonly count: number;
              readonly type: Constants.UnsignedByte | Constants.UnsignedShort;
            };
          };

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 255, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            result = indexBuffer.generateData();
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`returns the expected data`, () => {
            expect(result).toEqual({
              bufferContent: Uint8Array.from([128, 0, 64, 255, 74]),
              instanceData: {
                count: 5,
                type: Constants.UnsignedByte,
              },
            });
          });
        });

        describe(`with at least one item over 255`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let result: {
            readonly bufferContent: BufferSource;
            readonly instanceData: {
              readonly count: number;
              readonly type: Constants.UnsignedByte | Constants.UnsignedShort;
            };
          };

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 256, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            result = indexBuffer.generateData();
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`returns the expected data`, () => {
            expect(result).toEqual({
              bufferContent: Uint16Array.from([128, 0, 64, 256, 74]),
              instanceData: {
                count: 5,
                type: Constants.UnsignedShort,
              },
            });
          });
        });

        describe(`with at least one NaN item`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, Number.NaN, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(new Error(`Indices cannot be NaN.`));
          });
        });

        describe(`with at least one float item`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 100.1, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(new Error(`Indices must be integers.`));
          });
        });

        describe(`with at least one infinite item`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, Number.POSITIVE_INFINITY, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(new Error(`Indices must be finite.`));
          });
        });

        describe(`with at least one negatively infinite item`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, Number.NEGATIVE_INFINITY, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(new Error(`Indices must be finite.`));
          });
        });

        describe(`with at least one item at 65535`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let result: {
            readonly bufferContent: BufferSource;
            readonly instanceData: {
              readonly count: number;
              readonly type: Constants.UnsignedByte | Constants.UnsignedShort;
            };
          };

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 65535, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            result = indexBuffer.generateData();
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`returns the expected data`, () => {
            expect(result).toEqual({
              bufferContent: Uint16Array.from([128, 0, 64, 65535, 74]),
              instanceData: {
                count: 5,
                type: Constants.UnsignedShort,
              },
            });
          });
        });

        describe(`with at least one item over 65535`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 65536, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(
              new Error(`Indices cannot be greater than 65535.`)
            );
          });
        });

        describe(`with at least one item far beyond 65535`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 65537, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(
              new Error(`Indices cannot be greater than 65535.`)
            );
          });
        });

        describe(`with at least one item below 0`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, -1, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(new Error(`Indices cannot be less than 0.`));
          });
        });

        describe(`with at least one item far beyond 0`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          let error: unknown;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, -2, 74]);
            createBuffer = jasmine.createSpy(`createBuffer`);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine.createSpy(`isContextLost`);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            try {
              indexBuffer.generateData();
              error = null;
            } catch (e) {
              error = e;
            }
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });

          it(`throws the expected error`, () => {
            expect(error).toEqual(new Error(`Indices cannot be less than 0.`));
          });
        });
      });

      describe(`on drawing`, () => {
        describe(`when it is not possible to create a buffer`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 2, 74]);
            createBuffer = jasmine
              .createSpy(`createBuffer`)
              .and.returnValue(null);
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine
              .createSpy(`isContextLost`)
              .and.returnValue(false);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            indexBuffer.draw();
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`generates one set of indices`, () => {
            expect(generateIndices).toHaveBeenCalledTimes(1);
          });

          it(`attempts to create one buffer`, () => {
            expect(createBuffer).toHaveBeenCalledTimes(1);
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

          it(`does not draw any elements`, () => {
            expect(drawElements).not.toHaveBeenCalled();
          });

          it(`checks for context loss once`, () => {
            expect(isContextLost).toHaveBeenCalledTimes(1);
          });
        });

        describe(`a buffer of 8-bit indices`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 2, 74]);
            createBuffer = jasmine
              .createSpy(`createBuffer`)
              .and.returnValue({ example: `buffer` });
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine
              .createSpy(`isContextLost`)
              .and.returnValue(false);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            indexBuffer.getInstance();

            generateIndices.calls.reset();
            createBuffer.calls.reset();
            bindBuffer.calls.reset();
            bufferData.calls.reset();
            deleteBuffer.calls.reset();
            isContextLost.calls.reset();

            indexBuffer.draw();
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`does not generate any indices`, () => {
            expect(generateIndices).not.toHaveBeenCalled();
          });

          it(`does not create any buffers`, () => {
            expect(createBuffer).not.toHaveBeenCalled();
          });

          it(`binds one buffer`, () => {
            expect(bindBuffer).toHaveBeenCalledTimes(1);
          });

          it(`binds the previously created buffer`, () => {
            expect(bindBuffer).toHaveBeenCalledWith(
              Constants.ElementArrayBuffer,
              { example: `buffer` }
            );
          });

          it(`does not buffer any data`, () => {
            expect(bufferData).not.toHaveBeenCalled();
          });

          it(`does not delete any buffers`, () => {
            expect(deleteBuffer).not.toHaveBeenCalled();
          });

          it(`draws one set of elements`, () => {
            expect(drawElements).toHaveBeenCalledTimes(1);
          });

          it(`draws the elements in the previously created`, () => {
            expect(drawElements).toHaveBeenCalledWith(
              mode.mode,
              5,
              Constants.UnsignedByte,
              0
            );
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });
        });

        describe(`a buffer of 16-bit indices`, () => {
          let generateIndices: jasmine.Spy;
          let createBuffer: jasmine.Spy;
          let bindBuffer: jasmine.Spy;
          let bufferData: jasmine.Spy;
          let deleteBuffer: jasmine.Spy;
          let drawElements: jasmine.Spy;
          let isContextLost: jasmine.Spy;

          class TestIndexBuffer extends IndexBuffer {
            generateIndices(): readonly number[] {
              return generateIndices();
            }
          }

          let context: ContextInterface<
            | `createBuffer`
            | `bindBuffer`
            | `bufferData`
            | `deleteBuffer`
            | `drawElements`
            | `isContextLost`
          >;

          let indexBuffer: TestIndexBuffer;

          beforeAll(() => {
            generateIndices = jasmine
              .createSpy(`generateIndices`)
              .and.returnValue([128, 0, 64, 256, 74]);
            createBuffer = jasmine
              .createSpy(`createBuffer`)
              .and.returnValue({ example: `buffer` });
            bindBuffer = jasmine.createSpy(`bindBuffer`);
            bufferData = jasmine.createSpy(`bufferData`);
            deleteBuffer = jasmine.createSpy(`deleteBuffer`);
            drawElements = jasmine.createSpy(`drawElements`);
            isContextLost = jasmine
              .createSpy(`isContextLost`)
              .and.returnValue(false);

            context = {
              gl: {
                createBuffer,
                bindBuffer,
                bufferData,
                deleteBuffer,
                drawElements,
                isContextLost,
              },
              timesContextRestored: 7,
            };

            indexBuffer = new TestIndexBuffer(context, mode.mode);

            indexBuffer.getInstance();

            generateIndices.calls.reset();
            createBuffer.calls.reset();
            bindBuffer.calls.reset();
            bufferData.calls.reset();
            deleteBuffer.calls.reset();
            isContextLost.calls.reset();

            indexBuffer.draw();
          });

          it(`exposes the target`, () => {
            expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
          });

          it(`exposes the mode`, () => {
            expect(indexBuffer.mode).toEqual(mode.mode);
          });

          it(`exposes the context`, () => {
            expect(indexBuffer.context).toBe(context);
          });

          it(`does not generate any indices`, () => {
            expect(generateIndices).not.toHaveBeenCalled();
          });

          it(`does not create any buffers`, () => {
            expect(createBuffer).not.toHaveBeenCalled();
          });

          it(`binds one buffer`, () => {
            expect(bindBuffer).toHaveBeenCalledTimes(1);
          });

          it(`binds the previously created buffer`, () => {
            expect(bindBuffer).toHaveBeenCalledWith(
              Constants.ElementArrayBuffer,
              { example: `buffer` }
            );
          });

          it(`does not buffer any data`, () => {
            expect(bufferData).not.toHaveBeenCalled();
          });

          it(`does not delete any buffers`, () => {
            expect(deleteBuffer).not.toHaveBeenCalled();
          });

          it(`draws one set of elements`, () => {
            expect(drawElements).toHaveBeenCalledTimes(1);
          });

          it(`draws the elements in the previously created`, () => {
            expect(drawElements).toHaveBeenCalledWith(
              mode.mode,
              5,
              Constants.UnsignedShort,
              0
            );
          });

          it(`does not check for context loss`, () => {
            expect(isContextLost).not.toHaveBeenCalled();
          });
        });
      });
    });
  }
});
