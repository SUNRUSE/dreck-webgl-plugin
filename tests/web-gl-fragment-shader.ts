describe(`WebGlFragmentShader`, () => {
  type TestVaryingDefinitionSet = {
    readonly test_declaration_a_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 1;
    };
    readonly test_declaration_b_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 2;
    };
    readonly test_declaration_c_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_d_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 1;
    };
    readonly test_declaration_e_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 2;
    };
    readonly test_declaration_f_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 3;
    };
    readonly test_declaration_g_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 1;
    };
    readonly test_declaration_h_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_i_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 3;
    };
    readonly test_declaration_j_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_k_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 2;
    };
    readonly test_declaration_l_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 3;
    };
    readonly test_declaration_m_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 1;
    };
    readonly test_declaration_n_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 2;
    };
    readonly test_declaration_o_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 3;
    };
    readonly test_declaration_p_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 1;
    };
    readonly test_declaration_q_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 2;
    };
    readonly test_declaration_r_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_s_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 1;
    };
    readonly test_declaration_t_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 2;
    };
    readonly test_declaration_u_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 3;
    };
  };

  const testVaryingDefinitionSet: TestVaryingDefinitionSet = {
    test_declaration_a_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 1,
    },
    test_declaration_b_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 2,
    },
    test_declaration_c_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 3,
    },
    test_declaration_d_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 1,
    },
    test_declaration_e_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 2,
    },
    test_declaration_f_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 3,
    },
    test_declaration_g_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 1,
    },
    test_declaration_h_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 2,
    },
    test_declaration_i_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 3,
    },
    test_declaration_j_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 1,
    },
    test_declaration_k_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 2,
    },
    test_declaration_l_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 3,
    },
    test_declaration_m_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 1,
    },
    test_declaration_n_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 2,
    },
    test_declaration_o_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 3,
    },
    test_declaration_p_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 1,
    },
    test_declaration_q_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 2,
    },
    test_declaration_r_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 3,
    },
    test_declaration_s_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 1,
    },
    test_declaration_t_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 2,
    },
    test_declaration_u_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 3,
    },
  };

  type TestUniformDefinitionSet = {
    readonly test_declaration_v_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 1;
    };
    readonly test_declaration_w_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 2;
    };
    readonly test_declaration_x_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_y_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 1;
    };
    readonly test_declaration_z_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 2;
    };
    readonly test_declaration_aa_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 3;
    };
    readonly test_declaration_ab_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 1;
    };
    readonly test_declaration_ac_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_ad_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 3;
    };
    readonly test_declaration_ae_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_af_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 2;
    };
    readonly test_declaration_ag_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 3;
    };
    readonly test_declaration_ah_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 1;
    };
    readonly test_declaration_ai_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 2;
    };
    readonly test_declaration_aj_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 3;
    };
    readonly test_declaration_ak_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 1;
    };
    readonly test_declaration_al_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 2;
    };
    readonly test_declaration_am_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_an_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 1;
    };
    readonly test_declaration_ao_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 2;
    };
    readonly test_declaration_ap_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 3;
    };
  };

  const testUniformDefinitionSet: TestUniformDefinitionSet = {
    test_declaration_v_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 1,
    },
    test_declaration_w_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 2,
    },
    test_declaration_x_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 3,
    },
    test_declaration_y_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 1,
    },
    test_declaration_z_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 2,
    },
    test_declaration_aa_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 3,
    },
    test_declaration_ab_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 1,
    },
    test_declaration_ac_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 2,
    },
    test_declaration_ad_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 3,
    },
    test_declaration_ae_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 1,
    },
    test_declaration_af_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 2,
    },
    test_declaration_ag_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 3,
    },
    test_declaration_ah_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 1,
    },
    test_declaration_ai_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 2,
    },
    test_declaration_aj_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 3,
    },
    test_declaration_ak_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 1,
    },
    test_declaration_al_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 2,
    },
    test_declaration_am_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 3,
    },
    test_declaration_an_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 1,
    },
    test_declaration_ao_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 2,
    },
    test_declaration_ap_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 3,
    },
  };

  describe(`on construction`, () => {
    let createShader: jasmine.Spy;
    let shaderSource: jasmine.Spy;
    let compileShader: jasmine.Spy;
    let getShaderParameter: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let getShaderInfoLog: jasmine.Spy;
    let deleteShader: jasmine.Spy;
    let render: jasmine.Spy;
    let getHeaderLines: jasmine.Spy;
    let getBodyLines: jasmine.Spy;

    let context: WebGlContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >;

    class TestShader extends WebGlFragmentShader<
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    > {
      /* istanbul ignore next */
      getHeaderLines() {
        return getHeaderLines();
      }

      /* istanbul ignore next */
      getBodyLines() {
        return getBodyLines();
      }
    }

    let shader: TestShader;

    beforeAll(() => {
      createShader = jasmine.createSpy(`createShader`);
      shaderSource = jasmine.createSpy(`shaderSource`);
      compileShader = jasmine.createSpy(`compileShader`);
      getShaderParameter = jasmine.createSpy(`getShaderParameter`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
      deleteShader = jasmine.createSpy(`deleteShader`);
      render = jasmine.createSpy(`render`);
      getHeaderLines = jasmine.createSpy(`getHeaderLines`);
      getBodyLines = jasmine.createSpy(`getBodyLines`);

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
      };

      shader = new TestShader(
        context,
        testUniformDefinitionSet,
        testVaryingDefinitionSet
      );
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(WebGlConstants.FragmentShader);
    });

    it(`exposes the uniform definition set`, () => {
      expect(shader.uniformDefinitionSet).toBe(testUniformDefinitionSet);
    });

    it(`exposes the varying definition set`, () => {
      expect(shader.varyingDefinitionSet).toBe(testVaryingDefinitionSet);
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

    it(`does not get header lines`, () => {
      expect(getHeaderLines).not.toHaveBeenCalled();
    });

    it(`does not get body lines`, () => {
      expect(getBodyLines).not.toHaveBeenCalled();
    });
  });

  describe(`on getting declarations`, () => {
    let createShader: jasmine.Spy;
    let shaderSource: jasmine.Spy;
    let compileShader: jasmine.Spy;
    let getShaderParameter: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let getShaderInfoLog: jasmine.Spy;
    let deleteShader: jasmine.Spy;
    let render: jasmine.Spy;
    let getHeaderLines: jasmine.Spy;
    let getBodyLines: jasmine.Spy;

    let context: WebGlContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >;

    class TestShader extends WebGlFragmentShader<
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    > {
      /* istanbul ignore next */
      getHeaderLines() {
        return getHeaderLines();
      }

      /* istanbul ignore next */
      getBodyLines() {
        return getBodyLines();
      }
    }

    let shader: TestShader;
    let result: unknown;

    beforeAll(() => {
      createShader = jasmine.createSpy(`createShader`);
      shaderSource = jasmine.createSpy(`shaderSource`);
      compileShader = jasmine.createSpy(`compileShader`);
      getShaderParameter = jasmine.createSpy(`getShaderParameter`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
      deleteShader = jasmine.createSpy(`deleteShader`);
      render = jasmine.createSpy(`render`);
      getHeaderLines = jasmine.createSpy(`getHeaderLines`);
      getBodyLines = jasmine.createSpy(`getBodyLines`);

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
      };

      shader = new TestShader(
        context,
        testUniformDefinitionSet,
        testVaryingDefinitionSet
      );

      result = shader.getDeclarations();
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(WebGlConstants.FragmentShader);
    });

    it(`exposes the uniform definition set`, () => {
      expect(shader.uniformDefinitionSet).toBe(testUniformDefinitionSet);
    });

    it(`exposes the varying definition set`, () => {
      expect(shader.varyingDefinitionSet).toBe(testVaryingDefinitionSet);
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

    it(`does not get header lines`, () => {
      expect(getHeaderLines).not.toHaveBeenCalled();
    });

    it(`does not get body lines`, () => {
      expect(getBodyLines).not.toHaveBeenCalled();
    });

    it(`returns the expected declarations`, () => {
      expect(result).toEqual([
        {
          type: `varying`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_a_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_aa_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_ab_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_ac_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_ad_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_ae_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_af_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_ag_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat2,
          name: `test_declaration_ah_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat2,
          name: `test_declaration_ai_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat2,
          name: `test_declaration_aj_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat3,
          name: `test_declaration_ak_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat3,
          name: `test_declaration_al_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat3,
          name: `test_declaration_am_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat4,
          name: `test_declaration_an_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat4,
          name: `test_declaration_ao_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Mat4,
          name: `test_declaration_ap_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_b_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_c_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_d_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_e_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_f_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_g_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_h_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_i_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_j_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_k_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_l_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat2,
          name: `test_declaration_m_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat2,
          name: `test_declaration_n_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat2,
          name: `test_declaration_o_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat3,
          name: `test_declaration_p_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat3,
          name: `test_declaration_q_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat3,
          name: `test_declaration_r_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat4,
          name: `test_declaration_s_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat4,
          name: `test_declaration_t_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Mat4,
          name: `test_declaration_u_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_v_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_w_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_x_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_y_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_z_name`,
          quantity: 2,
        },
      ]);
    });
  });
});
