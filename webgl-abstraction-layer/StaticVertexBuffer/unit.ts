import {
  Constants,
  ContextInterface,
  PackedAttributeDefinitionSet,
  Vec2,
  Vec3,
  StaticVertexBuffer,
} from "../..";

describe(`VertexBuffer`, () => {
  type TestAttributeSet = {
    readonly unsignedByteVec3: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly unsignedShortVec2: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly floatVec3: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
  };

  type TestVertices = {
    readonly unsignedByteVec3: ReadonlyArray<Vec3>;
    readonly unsignedShortVec2: ReadonlyArray<Vec2>;
    readonly floatVec3: ReadonlyArray<Vec3>;
  };

  const testVertices: TestVertices = {
    unsignedByteVec3: [
      [128, 96, 192],
      [62, 17, 241],
      [150, 90, 2],
    ],
    unsignedShortVec2: [
      [60202, 848],
      [482, 39392],
      [48972, 2163],
    ],
    floatVec3: [
      [-7.4, 12.5, 201.5],
      [15.3, 21.5, 32.5],
      [39.49, 2.1, 5],
    ],
  };

  let packedAttributeDefinitionSet: PackedAttributeDefinitionSet<TestAttributeSet>;

  beforeAll(() => {
    packedAttributeDefinitionSet =
      new PackedAttributeDefinitionSet<TestAttributeSet>({
        unsignedByteVec3: {
          binaryType: Constants.UnsignedByte,
          shaderPrimitive: Constants.Vec3,
          normalized: false,
        },
        unsignedShortVec2: {
          binaryType: Constants.UnsignedShort,
          shaderPrimitive: Constants.Vec2,
          normalized: false,
        },
        floatVec3: {
          binaryType: Constants.Float,
          shaderPrimitive: Constants.Vec3,
          normalized: false,
        },
      });
  });

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

    let staticVertexBuffer: StaticVertexBuffer<TestAttributeSet>;

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

      staticVertexBuffer = new StaticVertexBuffer(
        context,
        Constants.LineStrip,
        packedAttributeDefinitionSet,
        testVertices
      );
    });

    it(`exposes the context`, () => {
      expect(staticVertexBuffer.context).toBe(context);
    });

    it(`exposes the mode`, () => {
      expect(staticVertexBuffer.mode).toEqual(Constants.LineStrip);
    });

    it(`exposes the vertices`, () => {
      expect(staticVertexBuffer.vertices).toBe(testVertices);
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

  describe(`on generating vertices`, () => {
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

    let staticVertexBuffer: StaticVertexBuffer<TestAttributeSet>;

    let result: TestVertices;

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

      staticVertexBuffer = new StaticVertexBuffer(
        context,
        Constants.LineStrip,
        packedAttributeDefinitionSet,
        testVertices
      );

      result = staticVertexBuffer.generateVertices();
    });

    it(`exposes the context`, () => {
      expect(staticVertexBuffer.context).toBe(context);
    });

    it(`exposes the mode`, () => {
      expect(staticVertexBuffer.mode).toEqual(Constants.LineStrip);
    });

    it(`exposes the vertices`, () => {
      expect(staticVertexBuffer.vertices).toBe(testVertices);
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

    it(`returns the vertices`, () => {
      expect(result).toBe(testVertices);
    });
  });
});
