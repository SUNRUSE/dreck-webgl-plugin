import { Buffer, Constants, ContextInterface } from "../..";

describe(`Buffer`, () => {
  const targets: ReadonlyArray<{
    readonly description: string;
    readonly target: Constants.ArrayBuffer | Constants.ElementArrayBuffer;
  }> = [
    { description: `array buffer`, target: Constants.ArrayBuffer },
    {
      description: `element array buffer`,
      target: Constants.ElementArrayBuffer,
    },
  ];

  for (const target of targets) {
    describe(target.description, () => {
      describe(`on construction`, () => {
        let getContextAttributes: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let generateData: jasmine.Spy;

        class TestBuffer extends Buffer<
          `getContextAttributes`,
          `Test Instance Data`
        > {
          generateData(): {
            readonly bufferContent: BufferSource;
            readonly instanceData: `Test Instance Data`;
          } {
            return generateData();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `getContextAttributes`
          | `isContextLost`
        >;
        let buffer: TestBuffer;

        beforeAll(() => {
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
          createBuffer = jasmine.createSpy(`createBuffer`);
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          generateData = jasmine.createSpy(`generateData`).and.returnValue({
            bufferContent: Uint16Array.from([32, 768, 1024, 512]),
            instanceData: `Test Instance Data`,
          });

          context = {
            gl: {
              getContextAttributes,
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

          buffer = new TestBuffer(context, target.target);
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

        it(`does not create any buffers`, () => {
          expect(createBuffer).not.toHaveBeenCalled();
        });

        it(`does not bind any buffers`, () => {
          expect(bindBuffer).not.toHaveBeenCalled();
        });

        it(`does not generate any data`, () => {
          expect(generateData).not.toHaveBeenCalled();
        });

        it(`does not buffer any data`, () => {
          expect(bufferData).not.toHaveBeenCalled();
        });

        it(`does not delete any buffers`, () => {
          expect(deleteBuffer).not.toHaveBeenCalled();
        });

        it(`does not call additional methods`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });

        it(`exposes the target`, () => {
          expect(buffer.target).toEqual(target.target);
        });

        it(`exposes the context`, () => {
          expect(buffer.context).toBe(context);
        });
      });

      describe(`on creating an instance`, () => {
        let getContextAttributes: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let generateData: jasmine.Spy;
        let result: null | WebGLBuffer;

        class TestBuffer extends Buffer<
          `getContextAttributes`,
          `Test Instance Data`
        > {
          generateData(): {
            readonly bufferContent: BufferSource;
            readonly instanceData: `Test Instance Data`;
          } {
            return generateData();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `getContextAttributes`
          | `isContextLost`
        >;
        let buffer: TestBuffer;

        beforeAll(() => {
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
          createBuffer = jasmine
            .createSpy(`createBuffer`)
            .and.returnValue({ example: `buffer` });
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          generateData = jasmine.createSpy(`generateData`).and.returnValue({
            bufferContent: Uint16Array.from([32, 768, 1024, 512]),
            instanceData: `Test Instance Data`,
          });

          context = {
            gl: {
              getContextAttributes,
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

          buffer = new TestBuffer(context, target.target);

          result = buffer.createInstance();
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

        it(`creates one buffer`, () => {
          expect(createBuffer).toHaveBeenCalledTimes(1);
        });

        it(`binds one buffer`, () => {
          expect(bindBuffer).toHaveBeenCalledTimes(1);
        });

        it(`binds the created buffer`, () => {
          expect(bindBuffer).toHaveBeenCalledWith(target.target, {
            example: `buffer`,
          });
        });

        it(`generates data once`, () => {
          expect(generateData).toHaveBeenCalledTimes(1);
        });

        it(`loads data into a buffer once`, () => {
          expect(bufferData).toHaveBeenCalledTimes(1);
        });

        it(`loads the generated buffer into the created buffer`, () => {
          expect(bufferData).toHaveBeenCalledWith(
            target.target,
            Uint16Array.from([32, 768, 1024, 512]),
            Constants.StaticDraw
          );
        });

        it(`loads data into a buffer after binding one`, () => {
          expect(bindBuffer).toHaveBeenCalledBefore(bufferData);
        });

        it(`does not delete any buffers`, () => {
          expect(deleteBuffer).not.toHaveBeenCalled();
        });

        it(`returns the created buffer`, () => {
          expect(result).toEqual({
            buffer: { example: `buffer` },
            data: `Test Instance Data`,
          });
        });

        it(`does not call additional methods`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });

        it(`exposes the target`, () => {
          expect(buffer.target).toEqual(target.target);
        });

        it(`exposes the context`, () => {
          expect(buffer.context).toBe(context);
        });
      });

      describe(`on creating a null instance`, () => {
        let getContextAttributes: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let generateData: jasmine.Spy;
        let result: null | WebGLBuffer;

        class TestBuffer extends Buffer<
          `getContextAttributes`,
          `Test Instance Data`
        > {
          generateData(): {
            readonly bufferContent: BufferSource;
            readonly instanceData: `Test Instance Data`;
          } {
            return generateData();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `getContextAttributes`
          | `isContextLost`
        >;
        let buffer: TestBuffer;

        beforeAll(() => {
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
          createBuffer = jasmine
            .createSpy(`createBuffer`)
            .and.returnValue(null);
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          generateData = jasmine.createSpy(`generateData`).and.returnValue({
            bufferContent: Uint16Array.from([32, 768, 1024, 512]),
            instanceData: `Test Instance Data`,
          });

          context = {
            gl: {
              getContextAttributes,
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

          buffer = new TestBuffer(context, target.target);

          result = buffer.createInstance();
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

        it(`creates one buffer`, () => {
          expect(createBuffer).toHaveBeenCalledTimes(1);
        });

        it(`does not bind any buffers`, () => {
          expect(bindBuffer).not.toHaveBeenCalled();
        });

        it(`generates data once`, () => {
          expect(generateData).toHaveBeenCalledTimes(1);
        });

        it(`does not buffer any data`, () => {
          expect(bufferData).not.toHaveBeenCalled();
        });

        it(`does not delete any buffers`, () => {
          expect(deleteBuffer).not.toHaveBeenCalled();
        });

        it(`returns null`, () => {
          expect(result).toBeNull();
        });

        it(`does not call additional methods`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });

        it(`exposes the target`, () => {
          expect(buffer.target).toEqual(target.target);
        });

        it(`exposes the context`, () => {
          expect(buffer.context).toBe(context);
        });
      });

      describe(`on creating an instance which is empty`, () => {
        let getContextAttributes: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let generateData: jasmine.Spy;
        let error: unknown;

        class TestBuffer extends Buffer<
          `getContextAttributes`,
          `Test Instance Data`
        > {
          generateData(): {
            readonly bufferContent: BufferSource;
            readonly instanceData: `Test Instance Data`;
          } {
            return generateData();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `getContextAttributes`
          | `isContextLost`
        >;
        let buffer: TestBuffer;

        beforeAll(() => {
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
          createBuffer = jasmine.createSpy(`createBuffer`);
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          generateData = jasmine.createSpy(`generateData`).and.returnValue({
            bufferContent: Uint16Array.from([]),
            instanceData: `Test Instance Data`,
          });

          context = {
            gl: {
              getContextAttributes,
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

          buffer = new TestBuffer(context, target.target);

          try {
            buffer.createInstance();
            error = null;
          } catch (e) {
            error = e;
          }
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

        it(`does not create any buffers`, () => {
          expect(createBuffer).not.toHaveBeenCalled();
        });

        it(`does not bind any buffers`, () => {
          expect(bindBuffer).not.toHaveBeenCalled();
        });

        it(`generates data once`, () => {
          expect(generateData).toHaveBeenCalledTimes(1);
        });

        it(`does not buffer any data`, () => {
          expect(bufferData).not.toHaveBeenCalled();
        });

        it(`does not delete any buffers`, () => {
          expect(deleteBuffer).not.toHaveBeenCalled();
        });

        it(`throws the expected error`, () => {
          expect(error).toEqual(new Error(`Buffers cannot be empty.`));
        });

        it(`does not call additional methods`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });

        it(`exposes the target`, () => {
          expect(buffer.target).toEqual(target.target);
        });

        it(`exposes the context`, () => {
          expect(buffer.context).toBe(context);
        });
      });

      describe(`on deleting a null instance`, () => {
        let getContextAttributes: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let generateData: jasmine.Spy;

        class TestBuffer extends Buffer<
          `getContextAttributes`,
          `Test Instance Data`
        > {
          generateData(): {
            readonly bufferContent: BufferSource;
            readonly instanceData: `Test Instance Data`;
          } {
            return generateData();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `getContextAttributes`
          | `isContextLost`
        >;
        let buffer: TestBuffer;

        beforeAll(() => {
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
          createBuffer = jasmine.createSpy(`createBuffer`);
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          generateData = jasmine.createSpy(`generateData`).and.returnValue({
            bufferContent: Uint16Array.from([32, 768, 1024, 512]),
            instanceData: `Test Instance Data`,
          });

          context = {
            gl: {
              getContextAttributes,
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

          buffer = new TestBuffer(context, target.target);

          buffer.deleteInstance(null);
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

        it(`does not create any buffers`, () => {
          expect(createBuffer).not.toHaveBeenCalled();
        });

        it(`does not unbind any buffers`, () => {
          expect(bindBuffer).not.toHaveBeenCalled();
        });

        it(`does not generate any data`, () => {
          expect(generateData).not.toHaveBeenCalled();
        });

        it(`does not buffer any data`, () => {
          expect(bufferData).not.toHaveBeenCalled();
        });

        it(`does not delete any buffers`, () => {
          expect(deleteBuffer).not.toHaveBeenCalled();
        });

        it(`does not call additional methods`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });

        it(`exposes the target`, () => {
          expect(buffer.target).toEqual(target.target);
        });

        it(`exposes the context`, () => {
          expect(buffer.context).toBe(context);
        });
      });

      describe(`on deleting a non-null instance`, () => {
        let getContextAttributes: jasmine.Spy;
        let createBuffer: jasmine.Spy;
        let bindBuffer: jasmine.Spy;
        let bufferData: jasmine.Spy;
        let deleteBuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let generateData: jasmine.Spy;

        class TestBuffer extends Buffer<
          `getContextAttributes`,
          `Test Instance Data`
        > {
          generateData(): {
            readonly bufferContent: BufferSource;
            readonly instanceData: `Test Instance Data`;
          } {
            return generateData();
          }
        }

        let context: ContextInterface<
          | `createBuffer`
          | `bindBuffer`
          | `bufferData`
          | `deleteBuffer`
          | `getContextAttributes`
          | `isContextLost`
        >;
        let buffer: TestBuffer;

        beforeAll(() => {
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
          createBuffer = jasmine.createSpy(`createBuffer`);
          bindBuffer = jasmine.createSpy(`bindBuffer`);
          bufferData = jasmine.createSpy(`bufferData`);
          deleteBuffer = jasmine.createSpy(`deleteBuffer`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          generateData = jasmine.createSpy(`generateData`).and.returnValue({
            bufferContent: Uint16Array.from([32, 768, 1024, 512]),
            instanceData: `Test Instance Data`,
          });

          context = {
            gl: {
              getContextAttributes,
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

          buffer = new TestBuffer(context, target.target);

          buffer.deleteInstance({ example: `buffer` });
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

        it(`does not create any buffers`, () => {
          expect(createBuffer).not.toHaveBeenCalled();
        });

        it(`unbinds one buffer`, () => {
          expect(bindBuffer).toHaveBeenCalledTimes(1);
        });

        it(`unbinds the buffer`, () => {
          expect(bindBuffer).toHaveBeenCalledWith(target.target, null);
        });

        it(`does not generate any data`, () => {
          expect(generateData).not.toHaveBeenCalled();
        });

        it(`does not buffer any data`, () => {
          expect(bufferData).not.toHaveBeenCalled();
        });

        it(`deletes one buffer`, () => {
          expect(deleteBuffer).toHaveBeenCalledTimes(1);
        });

        it(`deletes the buffer`, () => {
          expect(deleteBuffer).toHaveBeenCalledWith({ example: `buffer` });
        });

        it(`does not call additional methods`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });

        it(`exposes the target`, () => {
          expect(buffer.target).toEqual(target.target);
        });

        it(`exposes the context`, () => {
          expect(buffer.context).toBe(context);
        });
      });
    });
  }
});
