describe(`WebGlStaticProgram`, () => {
  type TestVaryingDefinitionSet = {
    readonly test_declaration_j_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_r_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_s_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 1;
    };
  };

  const testVaryingDefinitionSet: TestVaryingDefinitionSet = {
    test_declaration_j_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 1,
    },
    test_declaration_r_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 3,
    },
    test_declaration_s_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 1,
    },
  };

  type TestUniformDefinitionSet = {
    readonly test_declaration_x_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_ac_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_ai_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 2;
    };
  };

  const testUniformDefinitionSet: TestUniformDefinitionSet = {
    test_declaration_x_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 3,
    },
    test_declaration_ac_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 2,
    },
    test_declaration_ai_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 2,
    },
  };

  type TestAttributeDefinitionSet = {
    readonly test_declaration_aq_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_av_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_aw_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
  };

  const testAttributeDefinitionSet: TestAttributeDefinitionSet = {
    test_declaration_aq_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_av_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_aw_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
  };

  const testVertexHeaderLines = [
    `Test Vertex Header Line A`,
    `Test Vertex Header Line B`,
    `Test Vertex Header Line C`,
  ];

  const testVertexBodyLines = [
    `Test Vertex Body Line A`,
    `Test Vertex Body Line B`,
    `Test Vertex Body Line C`,
    `Test Vertex Body Line D`,
  ];

  const testFragmentHeaderLines = [
    `Test Fragment Header Line A`,
    `Test Fragment Header Line B`,
  ];

  const testFragmentBodyLines = [
    `Test Fragment Body Line A`,
    `Test Fragment Body Line B`,
    `Test Fragment Body Line C`,
    `Test Fragment Body Line D`,
    `Test Fragment Body Line E`,
  ];

  describe(`on construction`, () => {
    let createProgram: jasmine.Spy;
    let attachShader: jasmine.Spy;
    let linkProgram: jasmine.Spy;
    let getProgramParameter: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let getProgramInfoLog: jasmine.Spy;
    let detachShader: jasmine.Spy;
    let deleteProgram: jasmine.Spy;
    let useProgram: jasmine.Spy;
    let getAttribLocation: jasmine.Spy;
    let getUniformLocation: jasmine.Spy;
    let createShader: jasmine.Spy;
    let shaderSource: jasmine.Spy;
    let compileShader: jasmine.Spy;
    let getShaderParameter: jasmine.Spy;
    let getShaderInfoLog: jasmine.Spy;
    let deleteShader: jasmine.Spy;
    let render: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let context: WebGlContextInterface<
      | `createProgram`
      | `attachShader`
      | `linkProgram`
      | `getProgramParameter`
      | `isContextLost`
      | `getProgramInfoLog`
      | `detachShader`
      | `deleteProgram`
      | `useProgram`
      | `getAttribLocation`
      | `getUniformLocation`
      | `createShader`
      | `shaderSource`
      | `getShaderInfoLog`
      | `getShaderParameter`
      | `deleteShader`
      | `compileShader`
    >;

    let staticProgram: WebGlStaticProgram<
      TestAttributeDefinitionSet,
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    >;

    beforeAll(() => {
      createProgram = jasmine.createSpy(`createProgram`);
      attachShader = jasmine.createSpy(`attachShader`);
      linkProgram = jasmine.createSpy(`linkProgram`);
      getProgramParameter = jasmine.createSpy(`getProgramParameter`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      getProgramInfoLog = jasmine.createSpy(`getProgramInfoLog`);
      detachShader = jasmine.createSpy(`detachShader`);
      deleteProgram = jasmine.createSpy(`deleteProgram`);
      useProgram = jasmine.createSpy(`useProgram`);
      getAttribLocation = jasmine.createSpy(`getAttribLocation`);
      getUniformLocation = jasmine.createSpy(`getUniformLocation`);
      createShader = jasmine.createSpy(`createShader`);
      shaderSource = jasmine.createSpy(`shaderSource`);
      compileShader = jasmine.createSpy(`compileShader`);
      getShaderParameter = jasmine.createSpy(`getShaderParameter`);
      getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
      deleteShader = jasmine.createSpy(`deleteShader`);
      render = jasmine.createSpy(`render`);
      addEventListener = jasmine.createSpy(`addEventListener`);
      context = {
        gl: {
          createProgram,
          attachShader,
          linkProgram,
          getProgramParameter,
          isContextLost,
          getProgramInfoLog,
          detachShader,
          deleteProgram,
          useProgram,
          getAttribLocation,
          getUniformLocation,
          createShader,
          shaderSource,
          compileShader,
          getShaderParameter,
          getShaderInfoLog,
          deleteShader,
        },
        timesContextRestored: 7,
        render,
        addEventListener,
      };

      staticProgram = new WebGlStaticProgram(
        context,
        testAttributeDefinitionSet,
        testUniformDefinitionSet,
        testVaryingDefinitionSet,
        testVertexHeaderLines,
        testVertexBodyLines,
        testFragmentHeaderLines,
        testFragmentBodyLines
      );
    });

    it(`exposes the context`, () => {
      expect(staticProgram.context).toBe(context);
    });

    it(`exposes the attribute definition set`, () => {
      expect(staticProgram.attributeDefinitionSet).toBe(
        testAttributeDefinitionSet
      );
    });

    it(`exposes the uniform definition set`, () => {
      expect(staticProgram.uniformDefinitionSet).toBe(testUniformDefinitionSet);
    });

    it(`exposes the varying definition set`, () => {
      expect(staticProgram.varyingDefinitionSet).toBe(testVaryingDefinitionSet);
    });

    it(`exposes the vertex header lines`, () => {
      expect(staticProgram.vertexHeaderLines).toBe(testVertexHeaderLines);
    });

    it(`exposes the vertex body lines`, () => {
      expect(staticProgram.vertexBodyLines).toBe(testVertexBodyLines);
    });

    it(`exposes the fragment header lines`, () => {
      expect(staticProgram.fragmentHeaderLines).toBe(testFragmentHeaderLines);
    });

    it(`exposes the fragment body lines`, () => {
      expect(staticProgram.fragmentBodyLines).toBe(testFragmentBodyLines);
    });

    it(`exposes the vertex shader`, () => {
      expect(staticProgram.vertexShader).toEqual(
        new WebGlStaticVertexShader(
          context,
          testVertexHeaderLines,
          testAttributeDefinitionSet,
          testUniformDefinitionSet,
          testVaryingDefinitionSet,
          testVertexBodyLines
        )
      );
    });

    it(`exposes the fragment shader`, () => {
      expect(staticProgram.fragmentShader).toEqual(
        new WebGlStaticFragmentShader(
          context,
          testFragmentHeaderLines,
          testUniformDefinitionSet,
          testVaryingDefinitionSet,
          testFragmentBodyLines
        )
      );
    });

    it(`does not create any programs`, () => {
      expect(createProgram).not.toHaveBeenCalled();
    });

    it(`does not attach shaders to any programs`, () => {
      expect(attachShader).not.toHaveBeenCalled();
    });

    it(`does not link any programs`, () => {
      expect(linkProgram).not.toHaveBeenCalled();
    });

    it(`does not get any program parameters`, () => {
      expect(getProgramParameter).not.toHaveBeenCalled();
    });

    it(`does not check for context loss`, () => {
      expect(isContextLost).not.toHaveBeenCalled();
    });

    it(`does not retrieve any program info logs`, () => {
      expect(getProgramInfoLog).not.toHaveBeenCalled();
    });

    it(`does not detach shaders from any programs`, () => {
      expect(detachShader).not.toHaveBeenCalled();
    });

    it(`does not delete any programs`, () => {
      expect(deleteProgram).not.toHaveBeenCalled();
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not get any attribute locations`, () => {
      expect(getAttribLocation).not.toHaveBeenCalled();
    });

    it(`does not get any uniform locations`, () => {
      expect(getUniformLocation).not.toHaveBeenCalled();
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
});
