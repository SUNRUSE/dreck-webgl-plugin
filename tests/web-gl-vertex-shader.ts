describe(`WebGlVertexShader`, () => {
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

  type TestAttributeDefinitionSet = {
    readonly test_declaration_aq_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_ar_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_as_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_at_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_au_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
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
    readonly test_declaration_ax_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_ay_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_az_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_ba_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_bb_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_bc_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_bd_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_be_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_bf_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_bg_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_bh_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_bi_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_bj_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_bk_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_bl_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_bm_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_bn_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_bo_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_bp_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_bq_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_br_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_bs_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_bt_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_bu_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_bv_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_bw_name: {
      readonly binaryType: WebGlConstants.Float;
      readonly shaderPrimitive: WebGlConstants.Float;
    };
    readonly test_declaration_bx_name: {
      readonly binaryType: WebGlConstants.Float;
      readonly shaderPrimitive: WebGlConstants.Vec2;
    };
    readonly test_declaration_by_name: {
      readonly binaryType: WebGlConstants.Float;
      readonly shaderPrimitive: WebGlConstants.Vec3;
    };
    readonly test_declaration_bz_name: {
      readonly binaryType: WebGlConstants.Float;
      readonly shaderPrimitive: WebGlConstants.Vec4;
    };
  };

  const testAttributeDefinitionSet: TestAttributeDefinitionSet = {
    test_declaration_aq_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_ar_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_as_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_at_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_au_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec3,
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
    test_declaration_ax_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_ay_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_az_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_ba_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_bb_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_bc_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
    test_declaration_bd_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_be_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
    test_declaration_bf_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_bg_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_bh_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_bi_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_bj_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_bk_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
    test_declaration_bl_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_bm_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
    test_declaration_bn_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_bo_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_bp_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_bq_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_br_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_bs_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
    test_declaration_bt_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_bu_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
    test_declaration_bv_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_bw_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Float,
    },
    test_declaration_bx_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec2,
    },
    test_declaration_by_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec3,
    },
    test_declaration_bz_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec4,
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

    class TestShader extends WebGlVertexShader<
      TestAttributeDefinitionSet,
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
        testAttributeDefinitionSet,
        testUniformDefinitionSet,
        testVaryingDefinitionSet
      );
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(WebGlConstants.VertexShader);
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

    class TestShader extends WebGlVertexShader<
      TestAttributeDefinitionSet,
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
        testAttributeDefinitionSet,
        testUniformDefinitionSet,
        testVaryingDefinitionSet
      );

      result = shader.getDeclarations();
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(WebGlConstants.VertexShader);
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
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_aq_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_ar_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_as_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_at_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_au_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_av_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_aw_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_ax_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_ay_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_az_name`,
          quantity: 1,
        },
        {
          type: `varying`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_b_name`,
          quantity: 2,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_ba_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_bb_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_bc_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_bd_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_be_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_bf_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_bg_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_bh_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_bi_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_bj_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_bk_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_bl_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_bm_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_bn_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_bo_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_bp_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_bq_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_br_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_bs_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_bt_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_bu_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_bv_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Float,
          name: `test_declaration_bw_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec2,
          name: `test_declaration_bx_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec3,
          name: `test_declaration_by_name`,
          quantity: 1,
        },
        {
          type: `attribute`,
          primitive: WebGlConstants.Vec4,
          name: `test_declaration_bz_name`,
          quantity: 1,
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
