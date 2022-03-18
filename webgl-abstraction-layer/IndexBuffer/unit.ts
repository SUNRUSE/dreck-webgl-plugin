import { Constants, ContextInterface, IndexBuffer } from "../..";

describe(`IndexBuffer`, () => {
  describe(`on construction`, () => {
    let generateIndices: jasmine.Spy;
    let createBuffer: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let bufferData: jasmine.Spy;
    let deleteBuffer: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let render: jasmine.Spy;
    let addEventListener: jasmine.Spy;

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
      | `isContextLost`
    >;

    let indexBuffer: TestIndexBuffer;

    beforeAll(() => {
      generateIndices = jasmine.createSpy(`generateIndices`);
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

      indexBuffer = new TestIndexBuffer(context);
    });

    it(`exposes the target`, () => {
      expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
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
    describe(`without items`, () => {
      let generateIndices: jasmine.Spy;
      let createBuffer: jasmine.Spy;
      let bindBuffer: jasmine.Spy;
      let bufferData: jasmine.Spy;
      let deleteBuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

        result = indexBuffer.generateData();
      });

      it(`exposes the target`, () => {
        expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
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

      it(`does not check for context loss`, () => {
        expect(isContextLost).not.toHaveBeenCalled();
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not add any event listeners`, () => {
        expect(addEventListener).not.toHaveBeenCalled();
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
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

        result = indexBuffer.generateData();
      });

      it(`exposes the target`, () => {
        expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
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

      it(`does not check for context loss`, () => {
        expect(isContextLost).not.toHaveBeenCalled();
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not add any event listeners`, () => {
        expect(addEventListener).not.toHaveBeenCalled();
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
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

        result = indexBuffer.generateData();
      });

      it(`exposes the target`, () => {
        expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
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

      it(`does not check for context loss`, () => {
        expect(isContextLost).not.toHaveBeenCalled();
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not add any event listeners`, () => {
        expect(addEventListener).not.toHaveBeenCalled();
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
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
        expect(error).toEqual(new Error(`Indices cannot be NaN.`));
      });
    });

    describe(`with at least one float item`, () => {
      let generateIndices: jasmine.Spy;
      let createBuffer: jasmine.Spy;
      let bindBuffer: jasmine.Spy;
      let bufferData: jasmine.Spy;
      let deleteBuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
        expect(error).toEqual(new Error(`Indices must be integers.`));
      });
    });

    describe(`with at least one infinite item`, () => {
      let generateIndices: jasmine.Spy;
      let createBuffer: jasmine.Spy;
      let bindBuffer: jasmine.Spy;
      let bufferData: jasmine.Spy;
      let deleteBuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
        expect(error).toEqual(new Error(`Indices must be finite.`));
      });
    });

    describe(`with at least one negatively infinite item`, () => {
      let generateIndices: jasmine.Spy;
      let createBuffer: jasmine.Spy;
      let bindBuffer: jasmine.Spy;
      let bufferData: jasmine.Spy;
      let deleteBuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
        expect(error).toEqual(new Error(`Indices must be finite.`));
      });
    });

    describe(`with at least one item at 65535`, () => {
      let generateIndices: jasmine.Spy;
      let createBuffer: jasmine.Spy;
      let bindBuffer: jasmine.Spy;
      let bufferData: jasmine.Spy;
      let deleteBuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

        result = indexBuffer.generateData();
      });

      it(`exposes the target`, () => {
        expect(indexBuffer.target).toEqual(Constants.ElementArrayBuffer);
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

      it(`does not check for context loss`, () => {
        expect(isContextLost).not.toHaveBeenCalled();
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not add any event listeners`, () => {
        expect(addEventListener).not.toHaveBeenCalled();
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
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
        expect(error).toEqual(new Error(`Indices cannot be less than 0.`));
      });
    });

    describe(`with at least one item far beyond 0`, () => {
      let generateIndices: jasmine.Spy;
      let createBuffer: jasmine.Spy;
      let bindBuffer: jasmine.Spy;
      let bufferData: jasmine.Spy;
      let deleteBuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;

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

        indexBuffer = new TestIndexBuffer(context);

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
        expect(error).toEqual(new Error(`Indices cannot be less than 0.`));
      });
    });
  });
});
