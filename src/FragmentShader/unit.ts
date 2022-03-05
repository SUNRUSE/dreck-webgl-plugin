import { Constants, ContextInterface, FragmentShader } from "..";

describe(`FragmentShader`, () => {
  type TestVaryingDefinitionSet = {
    readonly test_declaration_a_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 1;
    };
    readonly test_declaration_b_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 2;
    };
    readonly test_declaration_c_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_d_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 1;
    };
    readonly test_declaration_e_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 2;
    };
    readonly test_declaration_f_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 3;
    };
    readonly test_declaration_g_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 1;
    };
    readonly test_declaration_h_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_i_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 3;
    };
    readonly test_declaration_j_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_k_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 2;
    };
    readonly test_declaration_l_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 3;
    };
    readonly test_declaration_m_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 1;
    };
    readonly test_declaration_n_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 2;
    };
    readonly test_declaration_o_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 3;
    };
    readonly test_declaration_p_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 1;
    };
    readonly test_declaration_q_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 2;
    };
    readonly test_declaration_r_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_s_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 1;
    };
    readonly test_declaration_t_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 2;
    };
    readonly test_declaration_u_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 3;
    };
  };

  const testVaryingDefinitionSet: TestVaryingDefinitionSet = {
    test_declaration_a_name: {
      shaderType: Constants.Float,
      quantity: 1,
    },
    test_declaration_b_name: {
      shaderType: Constants.Float,
      quantity: 2,
    },
    test_declaration_c_name: {
      shaderType: Constants.Float,
      quantity: 3,
    },
    test_declaration_d_name: {
      shaderType: Constants.Vec2,
      quantity: 1,
    },
    test_declaration_e_name: {
      shaderType: Constants.Vec2,
      quantity: 2,
    },
    test_declaration_f_name: {
      shaderType: Constants.Vec2,
      quantity: 3,
    },
    test_declaration_g_name: {
      shaderType: Constants.Vec3,
      quantity: 1,
    },
    test_declaration_h_name: {
      shaderType: Constants.Vec3,
      quantity: 2,
    },
    test_declaration_i_name: {
      shaderType: Constants.Vec3,
      quantity: 3,
    },
    test_declaration_j_name: {
      shaderType: Constants.Vec4,
      quantity: 1,
    },
    test_declaration_k_name: {
      shaderType: Constants.Vec4,
      quantity: 2,
    },
    test_declaration_l_name: {
      shaderType: Constants.Vec4,
      quantity: 3,
    },
    test_declaration_m_name: {
      shaderType: Constants.Mat2,
      quantity: 1,
    },
    test_declaration_n_name: {
      shaderType: Constants.Mat2,
      quantity: 2,
    },
    test_declaration_o_name: {
      shaderType: Constants.Mat2,
      quantity: 3,
    },
    test_declaration_p_name: {
      shaderType: Constants.Mat3,
      quantity: 1,
    },
    test_declaration_q_name: {
      shaderType: Constants.Mat3,
      quantity: 2,
    },
    test_declaration_r_name: {
      shaderType: Constants.Mat3,
      quantity: 3,
    },
    test_declaration_s_name: {
      shaderType: Constants.Mat4,
      quantity: 1,
    },
    test_declaration_t_name: {
      shaderType: Constants.Mat4,
      quantity: 2,
    },
    test_declaration_u_name: {
      shaderType: Constants.Mat4,
      quantity: 3,
    },
  };

  type TestUniformDefinitionSet = {
    readonly test_declaration_v_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 1;
    };
    readonly test_declaration_w_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 2;
    };
    readonly test_declaration_x_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_y_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 1;
    };
    readonly test_declaration_z_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 2;
    };
    readonly test_declaration_aa_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 3;
    };
    readonly test_declaration_ab_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 1;
    };
    readonly test_declaration_ac_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_ad_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 3;
    };
    readonly test_declaration_ae_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_af_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 2;
    };
    readonly test_declaration_ag_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 3;
    };
    readonly test_declaration_ah_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 1;
    };
    readonly test_declaration_ai_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 2;
    };
    readonly test_declaration_aj_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 3;
    };
    readonly test_declaration_ak_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 1;
    };
    readonly test_declaration_al_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 2;
    };
    readonly test_declaration_am_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_an_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 1;
    };
    readonly test_declaration_ao_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 2;
    };
    readonly test_declaration_ap_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 3;
    };
  };

  const testUniformDefinitionSet: TestUniformDefinitionSet = {
    test_declaration_v_name: {
      shaderType: Constants.Float,
      quantity: 1,
    },
    test_declaration_w_name: {
      shaderType: Constants.Float,
      quantity: 2,
    },
    test_declaration_x_name: {
      shaderType: Constants.Float,
      quantity: 3,
    },
    test_declaration_y_name: {
      shaderType: Constants.Vec2,
      quantity: 1,
    },
    test_declaration_z_name: {
      shaderType: Constants.Vec2,
      quantity: 2,
    },
    test_declaration_aa_name: {
      shaderType: Constants.Vec2,
      quantity: 3,
    },
    test_declaration_ab_name: {
      shaderType: Constants.Vec3,
      quantity: 1,
    },
    test_declaration_ac_name: {
      shaderType: Constants.Vec3,
      quantity: 2,
    },
    test_declaration_ad_name: {
      shaderType: Constants.Vec3,
      quantity: 3,
    },
    test_declaration_ae_name: {
      shaderType: Constants.Vec4,
      quantity: 1,
    },
    test_declaration_af_name: {
      shaderType: Constants.Vec4,
      quantity: 2,
    },
    test_declaration_ag_name: {
      shaderType: Constants.Vec4,
      quantity: 3,
    },
    test_declaration_ah_name: {
      shaderType: Constants.Mat2,
      quantity: 1,
    },
    test_declaration_ai_name: {
      shaderType: Constants.Mat2,
      quantity: 2,
    },
    test_declaration_aj_name: {
      shaderType: Constants.Mat2,
      quantity: 3,
    },
    test_declaration_ak_name: {
      shaderType: Constants.Mat3,
      quantity: 1,
    },
    test_declaration_al_name: {
      shaderType: Constants.Mat3,
      quantity: 2,
    },
    test_declaration_am_name: {
      shaderType: Constants.Mat3,
      quantity: 3,
    },
    test_declaration_an_name: {
      shaderType: Constants.Mat4,
      quantity: 1,
    },
    test_declaration_ao_name: {
      shaderType: Constants.Mat4,
      quantity: 2,
    },
    test_declaration_ap_name: {
      shaderType: Constants.Mat4,
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
    let getHeaderLines: jasmine.Spy;
    let getBodyLines: jasmine.Spy;

    let context: ContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >;

    class TestShader extends FragmentShader<
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    > {
      getHeaderLines() {
        return getHeaderLines();
      }

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
      expect(shader.type).toEqual(Constants.FragmentShader);
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
    let getHeaderLines: jasmine.Spy;
    let getBodyLines: jasmine.Spy;

    let context: ContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >;

    class TestShader extends FragmentShader<
      TestUniformDefinitionSet,
      TestVaryingDefinitionSet
    > {
      getHeaderLines() {
        return getHeaderLines();
      }

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
      expect(shader.type).toEqual(Constants.FragmentShader);
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
          primitive: Constants.Float,
          name: `test_declaration_a_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec2,
          name: `test_declaration_aa_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec3,
          name: `test_declaration_ab_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec3,
          name: `test_declaration_ac_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec3,
          name: `test_declaration_ad_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec4,
          name: `test_declaration_ae_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec4,
          name: `test_declaration_af_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec4,
          name: `test_declaration_ag_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat2,
          name: `test_declaration_ah_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat2,
          name: `test_declaration_ai_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat2,
          name: `test_declaration_aj_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat3,
          name: `test_declaration_ak_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat3,
          name: `test_declaration_al_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat3,
          name: `test_declaration_am_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat4,
          name: `test_declaration_an_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat4,
          name: `test_declaration_ao_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: Constants.Mat4,
          name: `test_declaration_ap_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: Constants.Float,
          name: `test_declaration_b_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: Constants.Float,
          name: `test_declaration_c_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: Constants.Vec2,
          name: `test_declaration_d_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: Constants.Vec2,
          name: `test_declaration_e_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: Constants.Vec2,
          name: `test_declaration_f_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: Constants.Vec3,
          name: `test_declaration_g_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: Constants.Vec3,
          name: `test_declaration_h_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: Constants.Vec3,
          name: `test_declaration_i_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: Constants.Vec4,
          name: `test_declaration_j_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: Constants.Vec4,
          name: `test_declaration_k_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: Constants.Vec4,
          name: `test_declaration_l_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: Constants.Mat2,
          name: `test_declaration_m_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: Constants.Mat2,
          name: `test_declaration_n_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: Constants.Mat2,
          name: `test_declaration_o_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: Constants.Mat3,
          name: `test_declaration_p_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: Constants.Mat3,
          name: `test_declaration_q_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: Constants.Mat3,
          name: `test_declaration_r_name`,
          quantity: 3,
        },
        {
          type: `varying`,
          primitive: Constants.Mat4,
          name: `test_declaration_s_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: Constants.Mat4,
          name: `test_declaration_t_name`,
          quantity: 2,
        },
        {
          type: `varying`,
          primitive: Constants.Mat4,
          name: `test_declaration_u_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: Constants.Float,
          name: `test_declaration_v_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Float,
          name: `test_declaration_w_name`,
          quantity: 2,
        },
        {
          type: `uniform`,
          primitive: Constants.Float,
          name: `test_declaration_x_name`,
          quantity: 3,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec2,
          name: `test_declaration_y_name`,
          quantity: 1,
        },
        {
          type: `uniform`,
          primitive: Constants.Vec2,
          name: `test_declaration_z_name`,
          quantity: 2,
        },
      ]);
    });
  });
});
