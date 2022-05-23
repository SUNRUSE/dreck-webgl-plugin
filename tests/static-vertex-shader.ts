import { Constants, ContextInterface, StaticVertexShader } from "../..";

describe(`StaticVertexShader`, () => {
  type TestVaryingDefinitionSet = {
    readonly test_declaration_j_name: {
      readonly shaderPrimitive: Constants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_r_name: {
      readonly shaderPrimitive: Constants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_s_name: {
      readonly shaderPrimitive: Constants.Mat4;
      readonly quantity: 1;
    };
  };

  const testVaryingDefinitionSet: TestVaryingDefinitionSet = {
    test_declaration_j_name: {
      shaderPrimitive: Constants.Vec4,
      quantity: 1,
    },
    test_declaration_r_name: {
      shaderPrimitive: Constants.Mat3,
      quantity: 3,
    },
    test_declaration_s_name: {
      shaderPrimitive: Constants.Mat4,
      quantity: 1,
    },
  };

  type TestUniformDefinitionSet = {
    readonly test_declaration_x_name: {
      readonly shaderPrimitive: Constants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_ac_name: {
      readonly shaderPrimitive: Constants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_ai_name: {
      readonly shaderPrimitive: Constants.Mat2;
      readonly quantity: 2;
    };
  };

  const testUniformDefinitionSet: TestUniformDefinitionSet = {
    test_declaration_x_name: {
      shaderPrimitive: Constants.Float,
      quantity: 3,
    },
    test_declaration_ac_name: {
      shaderPrimitive: Constants.Vec3,
      quantity: 2,
    },
    test_declaration_ai_name: {
      shaderPrimitive: Constants.Mat2,
      quantity: 2,
    },
  };

  type TestAttributeDefinitionSet = {
    readonly test_declaration_aq_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_av_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_aw_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
  };

  const testAttributeDefinitionSet: TestAttributeDefinitionSet = {
    test_declaration_aq_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    test_declaration_av_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
    test_declaration_aw_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
  };

  const testHeaderLines = [
    `Test Header Line A`,
    `Test Header Line B`,
    `Test Header Line C`,
  ];

  const testBodyLines = [
    `Test Body Line A`,
    `Test Body Line B`,
    `Test Body Line C`,
    `Test Body Line D`,
    `Test Body Line e`,
  ];

  describe(`on construction`, () => {
    let createShader: jasmine.Spy;
    let shaderSource: jasmine.Spy;
    let compileShader: jasmine.Spy;
    let getShaderParameter: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let getShaderInfoLog: jasmine.Spy;
    let deleteShader: jasmine.Spy;
    let render: jasmine.Spy;
    let addEventListener: jasmine.Spy;

    let context: ContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >;

    let shader: StaticVertexShader<
      TestAttributeDefinitionSet,
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    >;

    beforeAll(() => {
      createShader = jasmine.createSpy(`createShader`);
      shaderSource = jasmine.createSpy(`shaderSource`);
      compileShader = jasmine.createSpy(`compileShader`);
      getShaderParameter = jasmine.createSpy(`getShaderParameter`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
      deleteShader = jasmine.createSpy(`deleteShader`);
      render = jasmine.createSpy(`render`);
      addEventListener = jasmine.createSpy(`addEventListener`);

      context = {
        gl: {
          createShader,
          shaderSource,
          compileShader,
          getShaderParameter,
          isContextLost,
          getShaderInfoLog,
          deleteShader,
        },
        timesContextRestored: 7,
        render,
        addEventListener,
      };

      shader = new StaticVertexShader(
        context,
        testHeaderLines,
        testAttributeDefinitionSet,
        testUniformDefinitionSet,
        testVaryingDefinitionSet,
        testBodyLines
      );
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(Constants.VertexShader);
    });

    it(`exposes the attribute definition set`, () => {
      expect(shader.attributeDefinitionSet).toBe(testAttributeDefinitionSet);
    });

    it(`exposes the uniform definition set`, () => {
      expect(shader.uniformDefinitionSet).toBe(testUniformDefinitionSet);
    });

    it(`exposes the varying definition set`, () => {
      expect(shader.varyingDefinitionSet).toBe(testVaryingDefinitionSet);
    });

    it(`exposes the header lines`, () => {
      expect(shader.headerLines).toEqual(testHeaderLines);
    });

    it(`exposes the body lines`, () => {
      expect(shader.bodyLines).toEqual(testBodyLines);
    });

    it(`does not create any shaders`, () => {
      expect(createShader).not.toHaveBeenCalled();
    });

    it(`does not add source to any shaders`, () => {
      expect(shaderSource).not.toHaveBeenCalled();
    });

    it(`does not compile any shaders`, () => {
      expect(compileShader).not.toHaveBeenCalled();
    });

    it(`does not get any shader parameters`, () => {
      expect(getShaderParameter).not.toHaveBeenCalled();
    });

    it(`does not check for context loss`, () => {
      expect(isContextLost).not.toHaveBeenCalled();
    });

    it(`does not retrieve any shader info logs`, () => {
      expect(getShaderInfoLog).not.toHaveBeenCalled();
    });

    it(`does not delete any shaders`, () => {
      expect(deleteShader).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add any event listeners`, () => {
      expect(addEventListener).not.toHaveBeenCalled();
    });
  });

  describe(`on getting header lines`, () => {
    let createShader: jasmine.Spy;
    let shaderSource: jasmine.Spy;
    let compileShader: jasmine.Spy;
    let getShaderParameter: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let getShaderInfoLog: jasmine.Spy;
    let deleteShader: jasmine.Spy;
    let render: jasmine.Spy;
    let addEventListener: jasmine.Spy;

    let context: ContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >;

    let shader: StaticVertexShader<
      TestAttributeDefinitionSet,
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    >;

    let result: ReadonlyArray<string>;

    beforeAll(() => {
      createShader = jasmine.createSpy(`createShader`);
      shaderSource = jasmine.createSpy(`shaderSource`);
      compileShader = jasmine.createSpy(`compileShader`);
      getShaderParameter = jasmine.createSpy(`getShaderParameter`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
      deleteShader = jasmine.createSpy(`deleteShader`);
      render = jasmine.createSpy(`render`);
      addEventListener = jasmine.createSpy(`addEventListener`);

      context = {
        gl: {
          createShader,
          shaderSource,
          compileShader,
          getShaderParameter,
          isContextLost,
          getShaderInfoLog,
          deleteShader,
        },
        timesContextRestored: 7,
        render,
        addEventListener,
      };

      shader = new StaticVertexShader(
        context,
        testHeaderLines,
        testAttributeDefinitionSet,
        testUniformDefinitionSet,
        testVaryingDefinitionSet,
        testBodyLines
      );

      result = shader.getHeaderLines();
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(Constants.VertexShader);
    });

    it(`exposes the attribute definition set`, () => {
      expect(shader.attributeDefinitionSet).toBe(testAttributeDefinitionSet);
    });

    it(`exposes the uniform definition set`, () => {
      expect(shader.uniformDefinitionSet).toBe(testUniformDefinitionSet);
    });

    it(`exposes the varying definition set`, () => {
      expect(shader.varyingDefinitionSet).toBe(testVaryingDefinitionSet);
    });

    it(`exposes the header lines`, () => {
      expect(shader.headerLines).toEqual(testHeaderLines);
    });

    it(`exposes the body lines`, () => {
      expect(shader.bodyLines).toEqual(testBodyLines);
    });

    it(`does not create any shaders`, () => {
      expect(createShader).not.toHaveBeenCalled();
    });

    it(`does not add source to any shaders`, () => {
      expect(shaderSource).not.toHaveBeenCalled();
    });

    it(`does not compile any shaders`, () => {
      expect(compileShader).not.toHaveBeenCalled();
    });

    it(`does not get any shader parameters`, () => {
      expect(getShaderParameter).not.toHaveBeenCalled();
    });

    it(`does not check for context loss`, () => {
      expect(isContextLost).not.toHaveBeenCalled();
    });

    it(`does not retrieve any shader info logs`, () => {
      expect(getShaderInfoLog).not.toHaveBeenCalled();
    });

    it(`does not delete any shaders`, () => {
      expect(deleteShader).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add any event listeners`, () => {
      expect(addEventListener).not.toHaveBeenCalled();
    });

    it(`returns the header lines`, () => {
      expect(result).toEqual(testHeaderLines);
    });
  });

  describe(`on getting body lines`, () => {
    let createShader: jasmine.Spy;
    let shaderSource: jasmine.Spy;
    let compileShader: jasmine.Spy;
    let getShaderParameter: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let getShaderInfoLog: jasmine.Spy;
    let deleteShader: jasmine.Spy;
    let render: jasmine.Spy;
    let addEventListener: jasmine.Spy;

    let context: ContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >;

    let shader: StaticVertexShader<
      TestAttributeDefinitionSet,
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    >;

    let result: ReadonlyArray<string>;

    beforeAll(() => {
      createShader = jasmine.createSpy(`createShader`);
      shaderSource = jasmine.createSpy(`shaderSource`);
      compileShader = jasmine.createSpy(`compileShader`);
      getShaderParameter = jasmine.createSpy(`getShaderParameter`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
      deleteShader = jasmine.createSpy(`deleteShader`);
      render = jasmine.createSpy(`render`);
      addEventListener = jasmine.createSpy(`addEventListener`);

      context = {
        gl: {
          createShader,
          shaderSource,
          compileShader,
          getShaderParameter,
          isContextLost,
          getShaderInfoLog,
          deleteShader,
        },
        timesContextRestored: 7,
        render,
        addEventListener,
      };

      shader = new StaticVertexShader(
        context,
        testHeaderLines,
        testAttributeDefinitionSet,
        testUniformDefinitionSet,
        testVaryingDefinitionSet,
        testBodyLines
      );

      result = shader.getBodyLines();
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(Constants.VertexShader);
    });

    it(`exposes the attribute definition set`, () => {
      expect(shader.attributeDefinitionSet).toBe(testAttributeDefinitionSet);
    });

    it(`exposes the uniform definition set`, () => {
      expect(shader.uniformDefinitionSet).toBe(testUniformDefinitionSet);
    });

    it(`exposes the varying definition set`, () => {
      expect(shader.varyingDefinitionSet).toBe(testVaryingDefinitionSet);
    });

    it(`exposes the header lines`, () => {
      expect(shader.headerLines).toEqual(testHeaderLines);
    });

    it(`exposes the body lines`, () => {
      expect(shader.bodyLines).toEqual(testBodyLines);
    });

    it(`does not create any shaders`, () => {
      expect(createShader).not.toHaveBeenCalled();
    });

    it(`does not add source to any shaders`, () => {
      expect(shaderSource).not.toHaveBeenCalled();
    });

    it(`does not compile any shaders`, () => {
      expect(compileShader).not.toHaveBeenCalled();
    });

    it(`does not get any shader parameters`, () => {
      expect(getShaderParameter).not.toHaveBeenCalled();
    });

    it(`does not check for context loss`, () => {
      expect(isContextLost).not.toHaveBeenCalled();
    });

    it(`does not retrieve any shader info logs`, () => {
      expect(getShaderInfoLog).not.toHaveBeenCalled();
    });

    it(`does not delete any shaders`, () => {
      expect(deleteShader).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add any event listeners`, () => {
      expect(addEventListener).not.toHaveBeenCalled();
    });

    it(`returns the body lines`, () => {
      expect(result).toEqual(testBodyLines);
    });
  });
});
