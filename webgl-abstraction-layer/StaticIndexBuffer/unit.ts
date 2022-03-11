import { ContextInterface, StaticIndexBuffer } from "../..";

describe(`StaticIndexBuffer`, () => {
  const testIndices = [221, 592, 173, 4837];

  describe(`on construction`, () => {
    let createBuffer: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let bufferData: jasmine.Spy;
    let deleteBuffer: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let render: jasmine.Spy;

    let context: ContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >;

    let staticIndexBuffer: StaticIndexBuffer;

    beforeAll(() => {
      createBuffer = jasmine.createSpy(`createBuffer`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      bufferData = jasmine.createSpy(`bufferData`);
      deleteBuffer = jasmine.createSpy(`deleteBuffer`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      render = jasmine.createSpy(`render`);

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
      };

      staticIndexBuffer = new StaticIndexBuffer(context, testIndices);
    });

    it(`exposes the context`, () => {
      expect(staticIndexBuffer.context).toBe(context);
    });

    it(`exposes the indices`, () => {
      expect(staticIndexBuffer.indices).toBe(testIndices);
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
  });

  describe(`on generating indices`, () => {
    let createBuffer: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let bufferData: jasmine.Spy;
    let deleteBuffer: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let render: jasmine.Spy;

    let context: ContextInterface<
      | `createBuffer`
      | `bindBuffer`
      | `bufferData`
      | `deleteBuffer`
      | `isContextLost`
    >;

    let staticIndexBuffer: StaticIndexBuffer;

    let result: ReadonlyArray<number>;

    beforeAll(() => {
      createBuffer = jasmine.createSpy(`createBuffer`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      bufferData = jasmine.createSpy(`bufferData`);
      deleteBuffer = jasmine.createSpy(`deleteBuffer`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      render = jasmine.createSpy(`render`);

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
      };

      staticIndexBuffer = new StaticIndexBuffer(context, testIndices);

      result = staticIndexBuffer.generateIndices();
    });

    it(`exposes the context`, () => {
      expect(staticIndexBuffer.context).toBe(context);
    });

    it(`exposes the indices`, () => {
      expect(staticIndexBuffer.indices).toBe(testIndices);
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

    it(`returns the indices`, () => {
      expect(result).toBe(testIndices);
    });
  });
});
