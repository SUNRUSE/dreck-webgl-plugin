import { Constants, ContextInterface, ResourceInterface, Program } from "..";

describe(`Program`, () => {
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
    readonly test_declaration_ca_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 1;
    };
    readonly test_declaration_cb_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 2;
    };
    readonly test_declaration_cc_name: {
      readonly shaderType: Constants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_cd_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 1;
    };
    readonly test_declaration_ce_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 2;
    };
    readonly test_declaration_cf_name: {
      readonly shaderType: Constants.Vec2;
      readonly quantity: 3;
    };
    readonly test_declaration_cg_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 1;
    };
    readonly test_declaration_ch_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_ci_name: {
      readonly shaderType: Constants.Vec3;
      readonly quantity: 3;
    };
    readonly test_declaration_cj_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_ck_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 2;
    };
    readonly test_declaration_cl_name: {
      readonly shaderType: Constants.Vec4;
      readonly quantity: 3;
    };
    readonly test_declaration_cm_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 1;
    };
    readonly test_declaration_cn_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 2;
    };
    readonly test_declaration_co_name: {
      readonly shaderType: Constants.Mat2;
      readonly quantity: 3;
    };
    readonly test_declaration_cp_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 1;
    };
    readonly test_declaration_cq_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 2;
    };
    readonly test_declaration_cr_name: {
      readonly shaderType: Constants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_cs_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 1;
    };
    readonly test_declaration_ct_name: {
      readonly shaderType: Constants.Mat4;
      readonly quantity: 2;
    };
    readonly test_declaration_cu_name: {
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
    test_declaration_ca_name: {
      shaderType: Constants.Float,
      quantity: 1,
    },
    test_declaration_cb_name: {
      shaderType: Constants.Float,
      quantity: 2,
    },
    test_declaration_cc_name: {
      shaderType: Constants.Float,
      quantity: 3,
    },
    test_declaration_cd_name: {
      shaderType: Constants.Vec2,
      quantity: 1,
    },
    test_declaration_ce_name: {
      shaderType: Constants.Vec2,
      quantity: 2,
    },
    test_declaration_cf_name: {
      shaderType: Constants.Vec2,
      quantity: 3,
    },
    test_declaration_cg_name: {
      shaderType: Constants.Vec3,
      quantity: 1,
    },
    test_declaration_ch_name: {
      shaderType: Constants.Vec3,
      quantity: 2,
    },
    test_declaration_ci_name: {
      shaderType: Constants.Vec3,
      quantity: 3,
    },
    test_declaration_cj_name: {
      shaderType: Constants.Vec4,
      quantity: 1,
    },
    test_declaration_ck_name: {
      shaderType: Constants.Vec4,
      quantity: 2,
    },
    test_declaration_cl_name: {
      shaderType: Constants.Vec4,
      quantity: 3,
    },
    test_declaration_cm_name: {
      shaderType: Constants.Mat2,
      quantity: 1,
    },
    test_declaration_cn_name: {
      shaderType: Constants.Mat2,
      quantity: 2,
    },
    test_declaration_co_name: {
      shaderType: Constants.Mat2,
      quantity: 3,
    },
    test_declaration_cp_name: {
      shaderType: Constants.Mat3,
      quantity: 1,
    },
    test_declaration_cq_name: {
      shaderType: Constants.Mat3,
      quantity: 2,
    },
    test_declaration_cr_name: {
      shaderType: Constants.Mat3,
      quantity: 3,
    },
    test_declaration_cs_name: {
      shaderType: Constants.Mat4,
      quantity: 1,
    },
    test_declaration_ct_name: {
      shaderType: Constants.Mat4,
      quantity: 2,
    },
    test_declaration_cu_name: {
      shaderType: Constants.Mat4,
      quantity: 3,
    },
  };

  type TestAttributeDefinitionSet = {
    readonly test_declaration_aq_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_ar_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_as_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_at_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_au_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec3;
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
    readonly test_declaration_ax_name: {
      readonly binaryType: Constants.UnsignedByte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_ay_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_az_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_ba_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_bb_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_bc_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_bd_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_be_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_bf_name: {
      readonly binaryType: Constants.UnsignedShort;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_bg_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_bh_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_bi_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_bj_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_bk_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_bl_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_bm_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_bn_name: {
      readonly binaryType: Constants.Byte;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_bo_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_bp_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_bq_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_br_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_bs_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_bt_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_bu_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_bv_name: {
      readonly binaryType: Constants.Short;
      readonly shaderPrimitive: Constants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_bw_name: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Float;
    };
    readonly test_declaration_bx_name: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Vec2;
    };
    readonly test_declaration_by_name: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Vec3;
    };
    readonly test_declaration_bz_name: {
      readonly binaryType: Constants.Float;
      readonly shaderPrimitive: Constants.Vec4;
    };
  };

  const testAttributeDefinitionSet: TestAttributeDefinitionSet = {
    test_declaration_aq_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    test_declaration_ar_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
    test_declaration_as_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
    test_declaration_at_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
    test_declaration_au_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec3,
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
    test_declaration_ax_name: {
      binaryType: Constants.UnsignedByte,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
    test_declaration_ay_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    test_declaration_az_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
    test_declaration_ba_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
    test_declaration_bb_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
    test_declaration_bc_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec3,
      normalized: false,
    },
    test_declaration_bd_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
    test_declaration_be_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
    test_declaration_bf_name: {
      binaryType: Constants.UnsignedShort,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
    test_declaration_bg_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    test_declaration_bh_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
    test_declaration_bi_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
    test_declaration_bj_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
    test_declaration_bk_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec3,
      normalized: false,
    },
    test_declaration_bl_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
    test_declaration_bm_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
    test_declaration_bn_name: {
      binaryType: Constants.Byte,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
    test_declaration_bo_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Float,
      normalized: false,
    },
    test_declaration_bp_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Float,
      normalized: true,
    },
    test_declaration_bq_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec2,
      normalized: false,
    },
    test_declaration_br_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec2,
      normalized: true,
    },
    test_declaration_bs_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec3,
      normalized: false,
    },
    test_declaration_bt_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec3,
      normalized: true,
    },
    test_declaration_bu_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec4,
      normalized: false,
    },
    test_declaration_bv_name: {
      binaryType: Constants.Short,
      shaderPrimitive: Constants.Vec4,
      normalized: true,
    },
    test_declaration_bw_name: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Float,
    },
    test_declaration_bx_name: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Vec2,
    },
    test_declaration_by_name: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Vec3,
    },
    test_declaration_bz_name: {
      binaryType: Constants.Float,
      shaderPrimitive: Constants.Vec4,
    },
  };

  type TestVertexShader = ResourceInterface<null | WebGLShader> & {
    readonly type: Constants.VertexShader;
    readonly attributeDefinitionSet: TestAttributeDefinitionSet;
    readonly uniformDefinitionSet: TestUniformDefinitionSet;
    readonly varyingDefinitionSet: TestVaryingDefinitionSet;
  };

  type TestFragmentShader = ResourceInterface<null | WebGLShader> & {
    readonly type: Constants.FragmentShader;
    readonly uniformDefinitionSet: TestUniformDefinitionSet;
    readonly varyingDefinitionSet: TestVaryingDefinitionSet;
  };

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
    let context: ContextInterface<
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
    >;

    let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
    let vertexShaderGetInstance: jasmine.Spy;
    let vertexShader: TestVertexShader;

    let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
    let fragmentShaderGetInstance: jasmine.Spy;
    let fragmentShader: TestFragmentShader;

    let program: Program<
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
        },
        timesContextRestored: 7,
      };

      vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexShaderThrowIfFromAnotherContext`
      );
      vertexShaderGetInstance = jasmine.createSpy(`vertexShaderGetInstance`);
      vertexShader = {
        throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
        getInstance: vertexShaderGetInstance,
        attributeDefinitionSet: testAttributeDefinitionSet,
        varyingDefinitionSet: testVaryingDefinitionSet,
        uniformDefinitionSet: testUniformDefinitionSet,
        type: Constants.VertexShader,
      };

      fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
        `fragmentShaderThrowIfFromAnotherContext`
      );
      fragmentShaderGetInstance = jasmine.createSpy(
        `fragmentShaderGetInstance`
      );
      fragmentShader = {
        throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
        getInstance: fragmentShaderGetInstance,
        varyingDefinitionSet: testVaryingDefinitionSet,
        uniformDefinitionSet: testUniformDefinitionSet,
        type: Constants.FragmentShader,
      };

      program = new Program(context, vertexShader, fragmentShader);
    });

    it(`exposes the context`, () => {
      expect(program.context).toBe(context);
    });

    it(`exposes the vertex shader`, () => {
      expect(program.vertexShader).toBe(vertexShader);
    });

    it(`exposes the fragment shader`, () => {
      expect(program.fragmentShader).toBe(fragmentShader);
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

    it(`checks whether the vertex shader is from the correct context once`, () => {
      expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
    });

    it(`checks whether the vertex shader is from the correct context using the created resource`, () => {
      expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
        program
      );
    });

    it(`does not get any instances of the vertex shader`, () => {
      expect(vertexShaderGetInstance).not.toHaveBeenCalled();
    });

    it(`checks whether the fragment shader is from the correct context once`, () => {
      expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
    });

    it(`checks whether the fragment shader is from the correct context using the created resource`, () => {
      expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
        program
      );
    });

    it(`does not get any instances of the fragment shader`, () => {
      expect(fragmentShaderGetInstance).not.toHaveBeenCalled();
    });
  });

  describe(`on creating an instance`, () => {
    describe(`when the vertex shader cannot be created`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: unknown;

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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue(null);
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        result = program.createInstance();
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
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

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`gets one instance of the vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`may get at most one instance of fragment shader`, () => {
        expect(fragmentShaderGetInstance.calls.count()).toBeLessThanOrEqual(1);
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`when the fragment shader cannot be created`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: unknown;

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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue(null);
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        result = program.createInstance();
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
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

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`may get at most one instance of vertex shader`, () => {
        expect(vertexShaderGetInstance.calls.count()).toBeLessThanOrEqual(1);
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`gets one instance of the fragment shader`, () => {
        expect(fragmentShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`when the fragment shader cannot be created`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: unknown;

      beforeAll(() => {
        createProgram = jasmine
          .createSpy(`createProgram`)
          .and.returnValue(null);
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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        result = program.createInstance();
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
      });

      it(`creates one program`, () => {
        expect(createProgram).toHaveBeenCalledTimes(1);
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

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`gets one instance of vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`gets one instance of the fragment shader`, () => {
        expect(fragmentShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`when linking fails due to context loss`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: unknown;

      beforeAll(() => {
        createProgram = jasmine
          .createSpy(`createProgram`)
          .and.returnValue({ test: `program` });
        attachShader = jasmine.createSpy(`attachShader`);
        linkProgram = jasmine.createSpy(`linkProgram`);
        getProgramParameter = jasmine
          .createSpy(`getProgramParameter`)
          .and.returnValue(false);
        isContextLost = jasmine
          .createSpy(`isContextLost`)
          .and.returnValue(true);
        getProgramInfoLog = jasmine
          .createSpy(`getProgramInfoLog`)
          .and.returnValue(`Test Program Info Log`);
        detachShader = jasmine.createSpy(`detachShader`);
        deleteProgram = jasmine.createSpy(`deleteProgram`);
        useProgram = jasmine.createSpy(`useProgram`);
        getAttribLocation = jasmine.createSpy(`getAttribLocation`);
        getUniformLocation = jasmine.createSpy(`getUniformLocation`);
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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        result = program.createInstance();
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
      });

      it(`creates one program`, () => {
        expect(createProgram).toHaveBeenCalledTimes(1);
      });

      it(`attaches two shaders to programs`, () => {
        expect(attachShader).toHaveBeenCalledTimes(2);
      });

      it(`attaches the vertex shader to the program`, () => {
        expect(attachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `vertexShader` }
        );
      });

      it(`attaches the framgment shader to the program`, () => {
        expect(attachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `fragmentShader` }
        );
      });

      it(`links one program`, () => {
        expect(linkProgram).toHaveBeenCalledTimes(1);
      });

      it(`links the program`, () => {
        expect(linkProgram).toHaveBeenCalledWith({ test: `program` });
      });

      it(`gets one program parameter`, () => {
        expect(getProgramParameter).toHaveBeenCalledTimes(1);
      });

      it(`gets the program's link status`, () => {
        expect(getProgramParameter).toHaveBeenCalledWith(
          { test: `program` },
          Constants.LinkStatus
        );
      });

      it(`checks for context loss once`, () => {
        expect(isContextLost).toHaveBeenCalledTimes(1);
      });

      it(`does not retrieve any program info logs`, () => {
        expect(getProgramInfoLog).not.toHaveBeenCalled();
      });

      it(`does not detach any shaders from programs`, () => {
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

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`checks whether the vertex shader is from the correct context using the created resource`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`gets one instance of the vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether the fragment shader is from the correct context using the created resource`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`gets one instance of the fragment shader`, () => {
        expect(fragmentShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`gets an instance of the vertex shader before creating a program`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledBefore(createProgram);
      });

      it(`gets an instance of the fragment shader before creating a program`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledBefore(createProgram);
      });

      it(`attaches shaders before linking programs`, () => {
        expect(attachShader).toHaveBeenCalledBefore(linkProgram);
      });

      it(`links programs before getting their parameters`, () => {
        expect(linkProgram).toHaveBeenCalledBefore(getProgramParameter);
      });

      it(`gets program parameters before checking for context loss`, () => {
        expect(getProgramParameter).toHaveBeenCalledBefore(isContextLost);
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`when linking fails for a reason other than context loss`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let error: unknown;

      beforeAll(() => {
        createProgram = jasmine
          .createSpy(`createProgram`)
          .and.returnValue({ test: `program` });
        attachShader = jasmine.createSpy(`attachShader`);
        linkProgram = jasmine.createSpy(`linkProgram`);
        getProgramParameter = jasmine
          .createSpy(`getProgramParameter`)
          .and.returnValue(false);
        isContextLost = jasmine
          .createSpy(`isContextLost`)
          .and.returnValue(false);
        getProgramInfoLog = jasmine
          .createSpy(`getProgramInfoLog`)
          .and.returnValue(`Test Program Info Log`);
        detachShader = jasmine.createSpy(`detachShader`);
        deleteProgram = jasmine.createSpy(`deleteProgram`);
        useProgram = jasmine.createSpy(`useProgram`);
        getAttribLocation = jasmine.createSpy(`getAttribLocation`);
        getUniformLocation = jasmine.createSpy(`getUniformLocation`);
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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        try {
          program.createInstance();
          error = null;
        } catch (e) {
          error = e;
        }
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
      });

      it(`creates one program`, () => {
        expect(createProgram).toHaveBeenCalledTimes(1);
      });

      it(`attaches two shaders to programs`, () => {
        expect(attachShader).toHaveBeenCalledTimes(2);
      });

      it(`attaches the vertex shader to the program`, () => {
        expect(attachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `vertexShader` }
        );
      });

      it(`attaches the framgment shader to the program`, () => {
        expect(attachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `fragmentShader` }
        );
      });

      it(`links one program`, () => {
        expect(linkProgram).toHaveBeenCalledTimes(1);
      });

      it(`links the program`, () => {
        expect(linkProgram).toHaveBeenCalledWith({ test: `program` });
      });

      it(`gets one program parameter`, () => {
        expect(getProgramParameter).toHaveBeenCalledTimes(1);
      });

      it(`gets the program's link status`, () => {
        expect(getProgramParameter).toHaveBeenCalledWith(
          { test: `program` },
          Constants.LinkStatus
        );
      });

      it(`checks for context loss once`, () => {
        expect(isContextLost).toHaveBeenCalledTimes(1);
      });

      it(`retrieves one program info log`, () => {
        expect(getProgramInfoLog).toHaveBeenCalledTimes(1);
      });

      it(`retrieves the program's info log`, () => {
        expect(getProgramInfoLog).toHaveBeenCalledWith({ test: `program` });
      });

      it(`detaches two shaders from programs`, () => {
        expect(detachShader).toHaveBeenCalledTimes(2);
      });

      it(`detaches the vertex shader from the program`, () => {
        expect(detachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `vertexShader` }
        );
      });

      it(`detaches the fragment shader from the program`, () => {
        expect(detachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `fragmentShader` }
        );
      });

      it(`deletes one program`, () => {
        expect(deleteProgram).toHaveBeenCalledTimes(1);
      });

      it(`deletes the program`, () => {
        expect(deleteProgram).toHaveBeenCalledWith({ test: `program` });
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

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`checks whether the vertex shader is from the correct context using the created resource`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`gets one instance of the vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether the fragment shader is from the correct context using the created resource`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`gets one instance of the fragment shader`, () => {
        expect(fragmentShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`gets an instance of the vertex shader before creating a program`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledBefore(createProgram);
      });

      it(`gets an instance of the fragment shader before creating a program`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledBefore(createProgram);
      });

      it(`attaches shaders before linking programs`, () => {
        expect(attachShader).toHaveBeenCalledBefore(linkProgram);
      });

      it(`links programs before getting their parameters`, () => {
        expect(linkProgram).toHaveBeenCalledBefore(getProgramParameter);
      });

      it(`gets program parameters before checking for context loss`, () => {
        expect(getProgramParameter).toHaveBeenCalledBefore(isContextLost);
      });

      it(`checks for context loss before getting program info logs`, () => {
        expect(isContextLost).toHaveBeenCalledBefore(getProgramInfoLog);
      });

      it(`gets program info logs before detaching shaders`, () => {
        expect(getProgramInfoLog).toHaveBeenCalledBefore(detachShader);
      });

      it(`detaches shaders before deleting programs`, () => {
        expect(detachShader).toHaveBeenCalledBefore(deleteProgram);
      });

      it(`throws the expected error`, () => {
        expect(error).toEqual(
          new Error(`Failed to link a WebGL program: "Test Program Info Log".`)
        );
      });
    });

    describe(`when linking succeeds`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: unknown;

      beforeAll(() => {
        createProgram = jasmine
          .createSpy(`createProgram`)
          .and.returnValue({ test: `program` });
        attachShader = jasmine.createSpy(`attachShader`);
        linkProgram = jasmine.createSpy(`linkProgram`);
        getProgramParameter = jasmine
          .createSpy(`getProgramParameter`)
          .and.returnValue(true);
        isContextLost = jasmine.createSpy(`isContextLost`);
        getProgramInfoLog = jasmine.createSpy(`getProgramInfoLog`);
        detachShader = jasmine.createSpy(`detachShader`);
        deleteProgram = jasmine.createSpy(`deleteProgram`);
        useProgram = jasmine.createSpy(`useProgram`);
        getAttribLocation = jasmine
          .createSpy(`getAttribLocation`)
          .and.callFake((_, name: string) => {
            switch (name) {
              case `test_declaration_aq_name`:
                return 114;
              case `test_declaration_ar_name`:
                return 28;
              case `test_declaration_as_name`:
                return 321;
              case `test_declaration_at_name`:
                return 267;
              case `test_declaration_au_name`:
                return 989;
              case `test_declaration_av_name`:
                return 101;
              case `test_declaration_aw_name`:
                return 472;
              case `test_declaration_ax_name`:
                return 55;
              case `test_declaration_ay_name`:
                return 19;
              case `test_declaration_az_name`:
                return 521;
              case `test_declaration_ba_name`:
                return 37;
              case `test_declaration_bb_name`:
                return 928;
              case `test_declaration_bc_name`:
                return 51;
              case `test_declaration_bd_name`:
                return 62;
              case `test_declaration_be_name`:
                return 92;
              case `test_declaration_bf_name`:
                return 8;
              case `test_declaration_bg_name`:
                return 405;
              case `test_declaration_bh_name`:
                return 271;
              case `test_declaration_bi_name`:
                return 52;
              case `test_declaration_bj_name`:
                return 8827;
              case `test_declaration_bk_name`:
                return 5;
              case `test_declaration_bl_name`:
                return 7;
              case `test_declaration_bm_name`:
                return 4;
              case `test_declaration_bn_name`:
                return 10;
              case `test_declaration_bo_name`:
                return 12;
              case `test_declaration_bp_name`:
                return 46;
              case `test_declaration_bq_name`:
                return 43;
              case `test_declaration_br_name`:
                return 303;
              case `test_declaration_bs_name`:
                return 403;
              case `test_declaration_bt_name`:
                return 78;
              case `test_declaration_bu_name`:
                return 21;
              case `test_declaration_bv_name`:
                return 57;
              case `test_declaration_bw_name`:
                return 98;
              case `test_declaration_bx_name`:
                return 512;
              case `test_declaration_by_name`:
                return 1024;
              case `test_declaration_bz_name`:
                return 64;
            }

            throw new Error(
              `Unexpected attribute name ${JSON.stringify(name)}`
            );
          });
        getUniformLocation = jasmine
          .createSpy(`getUniformLocation`)
          .and.callFake((_, name: string) => {
            switch (name) {
              case `test_declaration_v_name`:
                return {
                  test: `uniformLocationV`,
                };
              case `test_declaration_w_name`:
                return {
                  test: `uniformLocationW`,
                };
              case `test_declaration_x_name`:
                return {
                  test: `uniformLocationx`,
                };
              case `test_declaration_y_name`:
                return {
                  test: `uniformLocationy`,
                };
              case `test_declaration_z_name`:
                return {
                  test: `uniformLocationV`,
                };
              case `test_declaration_aa_name`:
                return {
                  test: `uniformLocationAA`,
                };
              case `test_declaration_ab_name`:
                return {
                  test: `uniformLocationAB`,
                };
              case `test_declaration_ac_name`:
                return {
                  test: `uniformLocationAC`,
                };
              case `test_declaration_ad_name`:
                return {
                  test: `uniformLocationAD`,
                };
              case `test_declaration_ae_name`:
                return {
                  test: `uniformLocationAE`,
                };
              case `test_declaration_af_name`:
                return {
                  test: `uniformLocationAF`,
                };
              case `test_declaration_ag_name`:
                return {
                  test: `uniformLocationAG`,
                };
              case `test_declaration_ah_name`:
                return {
                  test: `uniformLocationAH`,
                };
              case `test_declaration_ai_name`:
                return {
                  test: `uniformLocationAI`,
                };
              case `test_declaration_aj_name`:
                return {
                  test: `uniformLocationAJ`,
                };
              case `test_declaration_ak_name`:
                return {
                  test: `uniformLocationAK`,
                };
              case `test_declaration_al_name`:
                return {
                  test: `uniformLocationAL`,
                };
              case `test_declaration_am_name`:
                return {
                  test: `uniformLocationAM`,
                };
              case `test_declaration_an_name`:
                return {
                  test: `uniformLocationAN`,
                };
              case `test_declaration_ao_name`:
                return {
                  test: `uniformLocationAO`,
                };
              case `test_declaration_ap_name`:
                return {
                  test: `uniformLocationAP`,
                };
              case `test_declaration_ca_name`:
                return null;
              case `test_declaration_cb_name`:
                return null;
              case `test_declaration_cc_name`:
                return null;
              case `test_declaration_cd_name`:
                return null;
              case `test_declaration_ce_name`:
                return null;
              case `test_declaration_cf_name`:
                return null;
              case `test_declaration_cg_name`:
                return null;
              case `test_declaration_ch_name`:
                return null;
              case `test_declaration_ci_name`:
                return null;
              case `test_declaration_cj_name`:
                return null;
              case `test_declaration_ck_name`:
                return null;
              case `test_declaration_cl_name`:
                return null;
              case `test_declaration_cm_name`:
                return null;
              case `test_declaration_cn_name`:
                return null;
              case `test_declaration_co_name`:
                return null;
              case `test_declaration_cp_name`:
                return null;
              case `test_declaration_cq_name`:
                return null;
              case `test_declaration_cr_name`:
                return null;
              case `test_declaration_cs_name`:
                return null;
              case `test_declaration_ct_name`:
                return null;
              case `test_declaration_cu_name`:
                return null;
            }

            throw new Error(`Unexpected uniform name ${JSON.stringify(name)}`);
          });
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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        result = program.createInstance();
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
      });

      it(`creates one program`, () => {
        expect(createProgram).toHaveBeenCalledTimes(1);
      });

      it(`attaches two shaders to programs`, () => {
        expect(attachShader).toHaveBeenCalledTimes(2);
      });

      it(`attaches the vertex shader to the program`, () => {
        expect(attachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `vertexShader` }
        );
      });

      it(`attaches the framgment shader to the program`, () => {
        expect(attachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `fragmentShader` }
        );
      });

      it(`links one program`, () => {
        expect(linkProgram).toHaveBeenCalledTimes(1);
      });

      it(`links the program`, () => {
        expect(linkProgram).toHaveBeenCalledWith({ test: `program` });
      });

      it(`gets one program parameter`, () => {
        expect(getProgramParameter).toHaveBeenCalledTimes(1);
      });

      it(`gets the program's link status`, () => {
        expect(getProgramParameter).toHaveBeenCalledWith(
          { test: `program` },
          Constants.LinkStatus
        );
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

      it(`gets the location of each attribute`, () => {
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_aq_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ar_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_as_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_at_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_au_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_av_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_aw_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ax_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ay_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_az_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ba_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bb_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bc_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bd_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_be_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bf_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bg_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bh_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bi_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bj_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bk_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bl_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bm_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bn_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bo_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bp_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bq_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_br_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bs_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bt_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bu_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bv_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bw_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bx_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_by_name`
        );
        expect(getAttribLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_bz_name`
        );
        expect(getAttribLocation).toHaveBeenCalledTimes(36);
      });

      it(`gets the location of each uniform`, () => {
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_v_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_w_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_x_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_y_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_z_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_aa_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ab_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ac_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ad_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ae_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_af_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ag_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ah_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ai_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_aj_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ak_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_al_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_am_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_an_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ao_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ap_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ca_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cb_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cc_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cd_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ce_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cf_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cg_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ch_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ci_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cj_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ck_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cl_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cm_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cn_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_co_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cp_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cq_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cr_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cs_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_ct_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cu_name`
        );
        expect(getUniformLocation).toHaveBeenCalledTimes(42);
      });

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`checks whether the vertex shader is from the correct context using the created resource`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`gets one instance of the vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether the fragment shader is from the correct context using the created resource`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`gets one instance of the fragment shader`, () => {
        expect(fragmentShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`gets an instance of the vertex shader before creating a program`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledBefore(createProgram);
      });

      it(`gets an instance of the fragment shader before creating a program`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledBefore(createProgram);
      });

      it(`attaches shaders before linking programs`, () => {
        expect(attachShader).toHaveBeenCalledBefore(linkProgram);
      });

      it(`links programs before getting their parameters`, () => {
        expect(linkProgram).toHaveBeenCalledBefore(getProgramParameter);
      });

      it(`gets program parameters before getting attribute locations`, () => {
        expect(getProgramParameter).toHaveBeenCalledBefore(getAttribLocation);
      });

      it(`gets program parameters before getting uniform locations`, () => {
        expect(getProgramParameter).toHaveBeenCalledBefore(getUniformLocation);
      });

      it(`returns the expected instance`, () => {
        expect(result).toEqual({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 114,
            test_declaration_ar_name: 28,
            test_declaration_as_name: 321,
            test_declaration_at_name: 267,
            test_declaration_au_name: 989,
            test_declaration_av_name: 101,
            test_declaration_aw_name: 472,
            test_declaration_ax_name: 55,
            test_declaration_ay_name: 19,
            test_declaration_az_name: 521,
            test_declaration_ba_name: 37,
            test_declaration_bb_name: 928,
            test_declaration_bc_name: 51,
            test_declaration_bd_name: 62,
            test_declaration_be_name: 92,
            test_declaration_bf_name: 8,
            test_declaration_bg_name: 405,
            test_declaration_bh_name: 271,
            test_declaration_bi_name: 52,
            test_declaration_bj_name: 8827,
            test_declaration_bk_name: 5,
            test_declaration_bl_name: 7,
            test_declaration_bm_name: 4,
            test_declaration_bn_name: 10,
            test_declaration_bo_name: 12,
            test_declaration_bp_name: 46,
            test_declaration_bq_name: 43,
            test_declaration_br_name: 303,
            test_declaration_bs_name: 403,
            test_declaration_bt_name: 78,
            test_declaration_bu_name: 21,
            test_declaration_bv_name: 57,
            test_declaration_bw_name: 98,
            test_declaration_bx_name: 512,
            test_declaration_by_name: 1024,
            test_declaration_bz_name: 64,
          },
          uniformLocations: {
            test_declaration_v_name: {
              test: `uniformLocationV`,
            },
            test_declaration_w_name: {
              test: `uniformLocationW`,
            },
            test_declaration_x_name: {
              test: `uniformLocationx`,
            },
            test_declaration_y_name: {
              test: `uniformLocationy`,
            },
            test_declaration_z_name: {
              test: `uniformLocationV`,
            },
            test_declaration_aa_name: {
              test: `uniformLocationAA`,
            },
            test_declaration_ab_name: {
              test: `uniformLocationAB`,
            },
            test_declaration_ac_name: {
              test: `uniformLocationAC`,
            },
            test_declaration_ad_name: {
              test: `uniformLocationAD`,
            },
            test_declaration_ae_name: {
              test: `uniformLocationAE`,
            },
            test_declaration_af_name: {
              test: `uniformLocationAF`,
            },
            test_declaration_ag_name: {
              test: `uniformLocationAG`,
            },
            test_declaration_ah_name: {
              test: `uniformLocationAH`,
            },
            test_declaration_ai_name: {
              test: `uniformLocationAI`,
            },
            test_declaration_aj_name: {
              test: `uniformLocationAJ`,
            },
            test_declaration_ak_name: {
              test: `uniformLocationAK`,
            },
            test_declaration_al_name: {
              test: `uniformLocationAL`,
            },
            test_declaration_am_name: {
              test: `uniformLocationAM`,
            },
            test_declaration_an_name: {
              test: `uniformLocationAN`,
            },
            test_declaration_ao_name: {
              test: `uniformLocationAO`,
            },
            test_declaration_ap_name: {
              test: `uniformLocationAP`,
            },
            test_declaration_ca_name: null,
            test_declaration_cb_name: null,
            test_declaration_cc_name: null,
            test_declaration_cd_name: null,
            test_declaration_ce_name: null,
            test_declaration_cf_name: null,
            test_declaration_cg_name: null,
            test_declaration_ch_name: null,
            test_declaration_ci_name: null,
            test_declaration_cj_name: null,
            test_declaration_ck_name: null,
            test_declaration_cl_name: null,
            test_declaration_cm_name: null,
            test_declaration_cn_name: null,
            test_declaration_co_name: null,
            test_declaration_cp_name: null,
            test_declaration_cq_name: null,
            test_declaration_cr_name: null,
            test_declaration_cs_name: null,
            test_declaration_ct_name: null,
            test_declaration_cu_name: null,
          },
        });
      });
    });
  });

  describe(`on destroying an instance`, () => {
    describe(`which was created successfully`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        program.deleteInstance({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 114,
            test_declaration_ar_name: 28,
            test_declaration_as_name: 321,
            test_declaration_at_name: 267,
            test_declaration_au_name: 989,
            test_declaration_av_name: 101,
            test_declaration_aw_name: 472,
            test_declaration_ax_name: 55,
            test_declaration_ay_name: 19,
            test_declaration_az_name: 521,
            test_declaration_ba_name: 37,
            test_declaration_bb_name: 928,
            test_declaration_bc_name: 51,
            test_declaration_bd_name: 62,
            test_declaration_be_name: 92,
            test_declaration_bf_name: 8,
            test_declaration_bg_name: 405,
            test_declaration_bh_name: 271,
            test_declaration_bi_name: 52,
            test_declaration_bj_name: 8827,
            test_declaration_bk_name: 5,
            test_declaration_bl_name: 7,
            test_declaration_bm_name: 4,
            test_declaration_bn_name: 10,
            test_declaration_bo_name: 12,
            test_declaration_bp_name: 46,
            test_declaration_bq_name: 43,
            test_declaration_br_name: 303,
            test_declaration_bs_name: 403,
            test_declaration_bt_name: 78,
            test_declaration_bu_name: 21,
            test_declaration_bv_name: 57,
            test_declaration_bw_name: 98,
            test_declaration_bx_name: 512,
            test_declaration_by_name: 1024,
            test_declaration_bz_name: 64,
          },
          uniformLocations: {
            test_declaration_v_name: {
              test: `uniformLocationV`,
            },
            test_declaration_w_name: {
              test: `uniformLocationW`,
            },
            test_declaration_x_name: {
              test: `uniformLocationx`,
            },
            test_declaration_y_name: {
              test: `uniformLocationy`,
            },
            test_declaration_z_name: {
              test: `uniformLocationV`,
            },
            test_declaration_aa_name: {
              test: `uniformLocationAA`,
            },
            test_declaration_ab_name: {
              test: `uniformLocationAB`,
            },
            test_declaration_ac_name: {
              test: `uniformLocationAC`,
            },
            test_declaration_ad_name: {
              test: `uniformLocationAD`,
            },
            test_declaration_ae_name: {
              test: `uniformLocationAE`,
            },
            test_declaration_af_name: {
              test: `uniformLocationAF`,
            },
            test_declaration_ag_name: {
              test: `uniformLocationAG`,
            },
            test_declaration_ah_name: {
              test: `uniformLocationAH`,
            },
            test_declaration_ai_name: {
              test: `uniformLocationAI`,
            },
            test_declaration_aj_name: {
              test: `uniformLocationAJ`,
            },
            test_declaration_ak_name: {
              test: `uniformLocationAK`,
            },
            test_declaration_al_name: {
              test: `uniformLocationAL`,
            },
            test_declaration_am_name: {
              test: `uniformLocationAM`,
            },
            test_declaration_an_name: {
              test: `uniformLocationAN`,
            },
            test_declaration_ao_name: {
              test: `uniformLocationAO`,
            },
            test_declaration_ap_name: {
              test: `uniformLocationAP`,
            },
            test_declaration_ca_name: null,
            test_declaration_cb_name: null,
            test_declaration_cc_name: null,
            test_declaration_cd_name: null,
            test_declaration_ce_name: null,
            test_declaration_cf_name: null,
            test_declaration_cg_name: null,
            test_declaration_ch_name: null,
            test_declaration_ci_name: null,
            test_declaration_cj_name: null,
            test_declaration_ck_name: null,
            test_declaration_cl_name: null,
            test_declaration_cm_name: null,
            test_declaration_cn_name: null,
            test_declaration_co_name: null,
            test_declaration_cp_name: null,
            test_declaration_cq_name: null,
            test_declaration_cr_name: null,
            test_declaration_cs_name: null,
            test_declaration_ct_name: null,
            test_declaration_cu_name: null,
          },
        });
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
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

      it(`detaches two shaders from programs`, () => {
        expect(detachShader).toHaveBeenCalledTimes(2);
      });

      it(`detaches the vertex shader from the program`, () => {
        expect(detachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `vertexShader` }
        );
      });

      it(`detaches the fragment shader from the program`, () => {
        expect(detachShader).toHaveBeenCalledWith(
          { test: `program` },
          { test: `fragmentShader` }
        );
      });

      it(`deletes one program`, () => {
        expect(deleteProgram).toHaveBeenCalledTimes(1);
      });

      it(`deletes the program`, () => {
        expect(deleteProgram).toHaveBeenCalledWith({ test: `program` });
      });

      it(`uses one program`, () => {
        expect(useProgram).toHaveBeenCalledTimes(1);
      });

      it(`uses a null program`, () => {
        expect(useProgram).toHaveBeenCalledWith(null);
      });

      it(`does not get any attribute locations`, () => {
        expect(getAttribLocation).not.toHaveBeenCalled();
      });

      it(`does not get any uniform locations`, () => {
        expect(getUniformLocation).not.toHaveBeenCalled();
      });

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`gets one instance of the vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`gets one instance of the fragment shader`, () => {
        expect(fragmentShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`gets the vertex shader before detaching any shaders`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledBefore(detachShader);
      });

      it(`gets the fragment shader before detaching any shaders`, () => {
        expect(fragmentShaderGetInstance).toHaveBeenCalledBefore(detachShader);
      });

      it(`uses the program before detaching any shaders`, () => {
        expect(useProgram).toHaveBeenCalledBefore(detachShader);
      });

      it(`detaches shaders before deleting programs`, () => {
        expect(detachShader).toHaveBeenCalledBefore(deleteProgram);
      });
    });

    describe(`which was not created successfully`, () => {
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
      let context: ContextInterface<
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
      >;

      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: Program<
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
          },
          timesContextRestored: 7,
        };

        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine.createSpy(`vertexShaderGetInstance`);
        vertexShader = {
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.VertexShader,
        };

        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine.createSpy(
          `fragmentShaderGetInstance`
        );
        fragmentShader = {
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: Constants.FragmentShader,
        };

        program = new Program(context, vertexShader, fragmentShader);

        program.deleteInstance(null);
      });

      it(`exposes the context`, () => {
        expect(program.context).toBe(context);
      });

      it(`exposes the vertex shader`, () => {
        expect(program.vertexShader).toBe(vertexShader);
      });

      it(`exposes the fragment shader`, () => {
        expect(program.fragmentShader).toBe(fragmentShader);
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

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`checks whether the vertex shader is from the correct context using the created resource`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`does not get any instances of the vertex shader`, () => {
        expect(vertexShaderGetInstance).not.toHaveBeenCalled();
      });

      it(`does not further check whether the fragment shader is from the correct context`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether the fragment shader is from the correct context using the created resource`, () => {
        expect(fragmentShaderThrowIfFromAnotherContext).toHaveBeenCalledWith(
          program
        );
      });

      it(`does not get any instances of the fragment shader`, () => {
        expect(fragmentShaderGetInstance).not.toHaveBeenCalled();
      });
    });
  });
});
