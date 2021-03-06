describe(`WebGlProgram`, () => {
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
    readonly test_declaration_ca_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 1;
    };
    readonly test_declaration_cb_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 2;
    };
    readonly test_declaration_cc_name: {
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly quantity: 3;
    };
    readonly test_declaration_cd_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 1;
    };
    readonly test_declaration_ce_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 2;
    };
    readonly test_declaration_cf_name: {
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly quantity: 3;
    };
    readonly test_declaration_cg_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 1;
    };
    readonly test_declaration_ch_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 2;
    };
    readonly test_declaration_ci_name: {
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly quantity: 3;
    };
    readonly test_declaration_cj_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 1;
    };
    readonly test_declaration_ck_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 2;
    };
    readonly test_declaration_cl_name: {
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly quantity: 3;
    };
    readonly test_declaration_cm_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 1;
    };
    readonly test_declaration_cn_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 2;
    };
    readonly test_declaration_co_name: {
      readonly shaderPrimitive: WebGlConstants.Mat2;
      readonly quantity: 3;
    };
    readonly test_declaration_cp_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 1;
    };
    readonly test_declaration_cq_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 2;
    };
    readonly test_declaration_cr_name: {
      readonly shaderPrimitive: WebGlConstants.Mat3;
      readonly quantity: 3;
    };
    readonly test_declaration_cs_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 1;
    };
    readonly test_declaration_ct_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 2;
    };
    readonly test_declaration_cu_name: {
      readonly shaderPrimitive: WebGlConstants.Mat4;
      readonly quantity: 3;
    };
    readonly test_declaration_cv_name: {
      readonly shaderPrimitive: WebGlConstants.Sampler2D;
      readonly quantity: 1;
    };
    readonly test_declaration_cw_name: {
      readonly shaderPrimitive: WebGlConstants.Sampler2D;
      readonly quantity: 2;
    };
    readonly test_declaration_cx_name: {
      readonly shaderPrimitive: WebGlConstants.Sampler2D;
      readonly quantity: 3;
    };
    readonly test_declaration_cy_name: {
      readonly shaderPrimitive: WebGlConstants.SamplerCube;
      readonly quantity: 1;
    };
    readonly test_declaration_cz_name: {
      readonly shaderPrimitive: WebGlConstants.SamplerCube;
      readonly quantity: 2;
    };
    readonly test_declaration_da_name: {
      readonly shaderPrimitive: WebGlConstants.SamplerCube;
      readonly quantity: 3;
    };
    readonly test_declaration_db_name: {
      readonly shaderPrimitive: WebGlConstants.Sampler2D;
      readonly quantity: 1;
    };
    readonly test_declaration_dc_name: {
      readonly shaderPrimitive: WebGlConstants.Sampler2D;
      readonly quantity: 2;
    };
    readonly test_declaration_dd_name: {
      readonly shaderPrimitive: WebGlConstants.Sampler2D;
      readonly quantity: 3;
    };
    readonly test_declaration_de_name: {
      readonly shaderPrimitive: WebGlConstants.SamplerCube;
      readonly quantity: 2;
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
    test_declaration_ca_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 1,
    },
    test_declaration_cb_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 2,
    },
    test_declaration_cc_name: {
      shaderPrimitive: WebGlConstants.Float,
      quantity: 3,
    },
    test_declaration_cd_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 1,
    },
    test_declaration_ce_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 2,
    },
    test_declaration_cf_name: {
      shaderPrimitive: WebGlConstants.Vec2,
      quantity: 3,
    },
    test_declaration_cg_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 1,
    },
    test_declaration_ch_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 2,
    },
    test_declaration_ci_name: {
      shaderPrimitive: WebGlConstants.Vec3,
      quantity: 3,
    },
    test_declaration_cj_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 1,
    },
    test_declaration_ck_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 2,
    },
    test_declaration_cl_name: {
      shaderPrimitive: WebGlConstants.Vec4,
      quantity: 3,
    },
    test_declaration_cm_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 1,
    },
    test_declaration_cn_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 2,
    },
    test_declaration_co_name: {
      shaderPrimitive: WebGlConstants.Mat2,
      quantity: 3,
    },
    test_declaration_cp_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 1,
    },
    test_declaration_cq_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 2,
    },
    test_declaration_cr_name: {
      shaderPrimitive: WebGlConstants.Mat3,
      quantity: 3,
    },
    test_declaration_cs_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 1,
    },
    test_declaration_ct_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 2,
    },
    test_declaration_cu_name: {
      shaderPrimitive: WebGlConstants.Mat4,
      quantity: 3,
    },
    test_declaration_cv_name: {
      shaderPrimitive: WebGlConstants.Sampler2D,
      quantity: 1,
    },
    test_declaration_cw_name: {
      shaderPrimitive: WebGlConstants.Sampler2D,
      quantity: 2,
    },
    test_declaration_cx_name: {
      shaderPrimitive: WebGlConstants.Sampler2D,
      quantity: 3,
    },
    test_declaration_cy_name: {
      shaderPrimitive: WebGlConstants.SamplerCube,
      quantity: 1,
    },
    test_declaration_cz_name: {
      shaderPrimitive: WebGlConstants.SamplerCube,
      quantity: 2,
    },
    test_declaration_da_name: {
      shaderPrimitive: WebGlConstants.SamplerCube,
      quantity: 3,
    },
    test_declaration_db_name: {
      shaderPrimitive: WebGlConstants.Sampler2D,
      quantity: 1,
    },
    test_declaration_dc_name: {
      shaderPrimitive: WebGlConstants.Sampler2D,
      quantity: 2,
    },
    test_declaration_dd_name: {
      shaderPrimitive: WebGlConstants.Sampler2D,
      quantity: 3,
    },
    test_declaration_de_name: {
      shaderPrimitive: WebGlConstants.SamplerCube,
      quantity: 2,
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

  type TestVertexShader = WebGlResourceInterface<null | WebGLShader> & {
    readonly type: WebGlConstants.VertexShader;
    readonly attributeDefinitionSet: TestAttributeDefinitionSet;
    readonly uniformDefinitionSet: TestUniformDefinitionSet;
    readonly varyingDefinitionSet: TestVaryingDefinitionSet;
  };

  type TestFragmentShader = WebGlResourceInterface<null | WebGLShader> & {
    readonly type: WebGlConstants.FragmentShader;
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
    let render: jasmine.Spy;
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
    >;

    let vertexShaderThrowIfDisposed: jasmine.Spy;
    let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
    let vertexShaderGetInstance: jasmine.Spy;
    let vertexShader: TestVertexShader;

    let fragmentShaderThrowIfDisposed: jasmine.Spy;
    let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
    let fragmentShaderGetInstance: jasmine.Spy;
    let fragmentShader: TestFragmentShader;

    let program: WebGlProgram<
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
      render = jasmine.createSpy(`render`);
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
        render,
      };

      vertexShaderThrowIfDisposed = jasmine.createSpy(
        `vertexShaderThrowIfDisposed`
      );
      vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexShaderThrowIfFromAnotherContext`
      );
      vertexShaderGetInstance = jasmine.createSpy(`vertexShaderGetInstance`);
      vertexShader = {
        context: `Test Vertex Shader Context`,
        throwIfDisposed: vertexShaderThrowIfDisposed,
        throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
        getInstance: vertexShaderGetInstance,
        attributeDefinitionSet: testAttributeDefinitionSet,
        varyingDefinitionSet: testVaryingDefinitionSet,
        uniformDefinitionSet: testUniformDefinitionSet,
        type: WebGlConstants.VertexShader,
      };

      fragmentShaderThrowIfDisposed = jasmine.createSpy(
        `fragmentShaderThrowIfDisposed`
      );
      fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
        `fragmentShaderThrowIfFromAnotherContext`
      );
      fragmentShaderGetInstance = jasmine.createSpy(
        `fragmentShaderGetInstance`
      );
      fragmentShader = {
        context: `Test Fragment Shader Context`,
        throwIfDisposed: fragmentShaderThrowIfDisposed,
        throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
        getInstance: fragmentShaderGetInstance,
        varyingDefinitionSet: testVaryingDefinitionSet,
        uniformDefinitionSet: testUniformDefinitionSet,
        type: WebGlConstants.FragmentShader,
      };

      program = new WebGlProgram(context, vertexShader, fragmentShader);
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

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex shader has been disposed`, () => {
      expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

    it(`does not check whether the fragment shader has been disposed`, () => {
      expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: null | WebGlProgramInstance<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet
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
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue(null);
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`gets one instance of the vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: null | WebGlProgramInstance<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet
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
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue(null);
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`may get at most one instance of vertex shader`, () => {
        expect(vertexShaderGetInstance.calls.count()).toBeLessThanOrEqual(1);
      });

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: null | WebGlProgramInstance<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet
      >;

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
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`gets one instance of vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: null | WebGlProgramInstance<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet
      >;

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
          .and.returnValue(`Test WebGlProgram Info Log`);
        detachShader = jasmine.createSpy(`detachShader`);
        deleteProgram = jasmine.createSpy(`deleteProgram`);
        useProgram = jasmine.createSpy(`useProgram`);
        getAttribLocation = jasmine.createSpy(`getAttribLocation`);
        getUniformLocation = jasmine.createSpy(`getUniformLocation`);
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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
          WebGlConstants.LinkStatus
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

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
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
          .and.returnValue(`Test WebGlProgram Info Log`);
        detachShader = jasmine.createSpy(`detachShader`);
        deleteProgram = jasmine.createSpy(`deleteProgram`);
        useProgram = jasmine.createSpy(`useProgram`);
        getAttribLocation = jasmine.createSpy(`getAttribLocation`);
        getUniformLocation = jasmine.createSpy(`getUniformLocation`);
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

        try {
          program.createInstance();

          /* istanbul ignore next */
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
          WebGlConstants.LinkStatus
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

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
          new Error(
            `Failed to link a WebGL program: "Test WebGlProgram Info Log".`
          )
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: null | WebGlProgramInstance<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet
      >;

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

            /* istanbul ignore next */
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
              case `test_declaration_cv_name`:
                return null;
              case `test_declaration_cw_name`:
                return null;
              case `test_declaration_cx_name`:
                return null;
              case `test_declaration_cy_name`:
                return null;
              case `test_declaration_cz_name`:
                return null;
              case `test_declaration_da_name`:
                return null;
              case `test_declaration_db_name`:
                return {
                  test: `uniformLocationDB`,
                };
              case `test_declaration_dc_name`:
                return {
                  test: `uniformLocationDC`,
                };
              case `test_declaration_dd_name`:
                return {
                  test: `uniformLocationDD`,
                };
              case `test_declaration_de_name`:
                return {
                  test: `uniformLocationDE`,
                };
            }

            /* istanbul ignore next */
            throw new Error(`Unexpected uniform name ${JSON.stringify(name)}`);
          });
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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
          WebGlConstants.LinkStatus
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
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cv_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cw_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cx_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cy_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cz_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_da_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_db_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dc_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dd_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_de_name`
        );
        expect(getUniformLocation).toHaveBeenCalledTimes(52);
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
          uniforms: {
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
            test_declaration_cv_name: null,
            test_declaration_cw_name: null,
            test_declaration_cx_name: null,
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: null,
            test_declaration_db_name: {
              location: { test: `uniformLocationDB` },
              index: 0,
            },
            test_declaration_dc_name: {
              location: { test: `uniformLocationDC` },
              indices: [1, 2],
            },
            test_declaration_dd_name: {
              location: { test: `uniformLocationDD` },
              indices: [3, 4, 5],
            },
            test_declaration_de_name: {
              location: { test: `uniformLocationDE` },
              indices: [6, 7],
            },
          },
        });
      });
    });

    describe(`when linking succeeds without using all of the texture slots`, () => {
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet,
        TestVaryingDefinitionSet
      >;

      let result: null | WebGlProgramInstance<
        TestAttributeDefinitionSet,
        TestUniformDefinitionSet
      >;

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

            /* istanbul ignore next */
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
              case `test_declaration_cv_name`:
                return null;
              case `test_declaration_cw_name`:
                return null;
              case `test_declaration_cx_name`:
                return null;
              case `test_declaration_cy_name`:
                return null;
              case `test_declaration_cz_name`:
                return null;
              case `test_declaration_da_name`:
                return null;
              case `test_declaration_db_name`:
                return {
                  test: `uniformLocationDB`,
                };
              case `test_declaration_dc_name`:
                return {
                  test: `uniformLocationDC`,
                };
              case `test_declaration_dd_name`:
                return {
                  test: `uniformLocationDD`,
                };
              case `test_declaration_de_name`:
                return null;
            }

            /* istanbul ignore next */
            throw new Error(`Unexpected uniform name ${JSON.stringify(name)}`);
          });
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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
          WebGlConstants.LinkStatus
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
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cv_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cw_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cx_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cy_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cz_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_da_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_db_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dc_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dd_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_de_name`
        );
        expect(getUniformLocation).toHaveBeenCalledTimes(52);
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
          uniforms: {
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
            test_declaration_cv_name: null,
            test_declaration_cw_name: null,
            test_declaration_cx_name: null,
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: null,
            test_declaration_db_name: {
              location: { test: `uniformLocationDB` },
              index: 0,
            },
            test_declaration_dc_name: {
              location: { test: `uniformLocationDC` },
              indices: [1, 2],
            },
            test_declaration_dd_name: {
              location: { test: `uniformLocationDD` },
              indices: [3, 4, 5],
            },
            test_declaration_de_name: null,
          },
        });
      });
    });

    describe(`when the program requires one more texture slot than is available`, () => {
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
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

            /* istanbul ignore next */
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
              case `test_declaration_cv_name`:
                return {
                  test: `uniformLocationCV`,
                };
              case `test_declaration_cw_name`:
                return null;
              case `test_declaration_cx_name`:
                return null;
              case `test_declaration_cy_name`:
                return null;
              case `test_declaration_cz_name`:
                return null;
              case `test_declaration_da_name`:
                return null;
              case `test_declaration_db_name`:
                return {
                  test: `uniformLocationDB`,
                };
              case `test_declaration_dc_name`:
                return {
                  test: `uniformLocationDC`,
                };
              case `test_declaration_dd_name`:
                return {
                  test: `uniformLocationDD`,
                };
              case `test_declaration_de_name`:
                return {
                  test: `uniformLocationDE`,
                };
            }

            /* istanbul ignore next */
            throw new Error(`Unexpected uniform name ${JSON.stringify(name)}`);
          });
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

        try {
          program.createInstance();

          /* istanbul ignore next */
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
          WebGlConstants.LinkStatus
        );
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
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cv_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cw_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cx_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cy_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cz_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_da_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_db_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dc_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dd_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_de_name`
        );
        expect(getUniformLocation).toHaveBeenCalledTimes(52);
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`gets attribute locations before detaching shaders`, () => {
        expect(getUniformLocation).toHaveBeenCalledBefore(detachShader);
      });

      it(`gets uniform locations before detaching shaders`, () => {
        expect(getUniformLocation).toHaveBeenCalledBefore(detachShader);
      });

      it(`detaches shaders before deleting programs`, () => {
        expect(detachShader).toHaveBeenCalledBefore(deleteProgram);
      });

      it(`throws the expected error`, () => {
        expect(error).toEqual(
          new Error(`WebGL program requires more than 8 texture slots.`)
        );
      });
    });

    describe(`when the program requires two more texture slots than are available`, () => {
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
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

            /* istanbul ignore next */
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
              case `test_declaration_cv_name`:
                return null;
              case `test_declaration_cw_name`:
                return {
                  test: `uniformLocationCW`,
                };
              case `test_declaration_cx_name`:
                return null;
              case `test_declaration_cy_name`:
                return null;
              case `test_declaration_cz_name`:
                return null;
              case `test_declaration_da_name`:
                return null;
              case `test_declaration_db_name`:
                return {
                  test: `uniformLocationDB`,
                };
              case `test_declaration_dc_name`:
                return {
                  test: `uniformLocationDC`,
                };
              case `test_declaration_dd_name`:
                return {
                  test: `uniformLocationDD`,
                };
              case `test_declaration_de_name`:
                return {
                  test: `uniformLocationDE`,
                };
            }

            /* istanbul ignore next */
            throw new Error(`Unexpected uniform name ${JSON.stringify(name)}`);
          });
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

        try {
          program.createInstance();

          /* istanbul ignore next */
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
          WebGlConstants.LinkStatus
        );
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
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cv_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cw_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cx_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cy_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_cz_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_da_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_db_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dc_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_dd_name`
        );
        expect(getUniformLocation).toHaveBeenCalledWith(
          { test: `program` },
          `test_declaration_de_name`
        );
        expect(getUniformLocation).toHaveBeenCalledTimes(52);
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`gets attribute locations before detaching shaders`, () => {
        expect(getUniformLocation).toHaveBeenCalledBefore(detachShader);
      });

      it(`gets uniform locations before detaching shaders`, () => {
        expect(getUniformLocation).toHaveBeenCalledBefore(detachShader);
      });

      it(`detaches shaders before deleting programs`, () => {
        expect(detachShader).toHaveBeenCalledBefore(deleteProgram);
      });

      it(`throws the expected error`, () => {
        expect(error).toEqual(
          new Error(`WebGL program requires more than 8 texture slots.`)
        );
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
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
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine
          .createSpy(`vertexShaderGetInstance`)
          .and.returnValue({ test: `vertexShader` });
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine
          .createSpy(`fragmentShaderGetInstance`)
          .and.returnValue({ test: `fragmentShader` });
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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
          uniforms: {
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
            test_declaration_cv_name: null,
            test_declaration_cw_name: null,
            test_declaration_cx_name: null,
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: null,
            test_declaration_db_name: {
              location: { test: `uniformLocationDB` },
              index: 0,
            },
            test_declaration_dc_name: {
              location: { test: `uniformLocationDC` },
              indices: [1, 2],
            },
            test_declaration_dd_name: {
              location: { test: `uniformLocationDD` },
              indices: [3, 4, 5],
            },
            test_declaration_de_name: {
              location: { test: `uniformLocationDE` },
              indices: [6, 7],
            },
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

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not further check whether the vertex shader is from the correct context`, () => {
        expect(vertexShaderThrowIfFromAnotherContext).toHaveBeenCalledTimes(1);
      });

      it(`gets one instance of the vertex shader`, () => {
        expect(vertexShaderGetInstance).toHaveBeenCalledTimes(1);
      });

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
      let render: jasmine.Spy;
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
      >;

      let vertexShaderThrowIfDisposed: jasmine.Spy;
      let vertexShaderThrowIfFromAnotherContext: jasmine.Spy;
      let vertexShaderGetInstance: jasmine.Spy;
      let vertexShader: TestVertexShader;

      let fragmentShaderThrowIfDisposed: jasmine.Spy;
      let fragmentShaderThrowIfFromAnotherContext: jasmine.Spy;
      let fragmentShaderGetInstance: jasmine.Spy;
      let fragmentShader: TestFragmentShader;

      let program: WebGlProgram<
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
        render = jasmine.createSpy(`render`);
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
          render,
        };

        vertexShaderThrowIfDisposed = jasmine.createSpy(
          `vertexShaderThrowIfDisposed`
        );
        vertexShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `vertexShaderThrowIfFromAnotherContext`
        );
        vertexShaderGetInstance = jasmine.createSpy(`vertexShaderGetInstance`);
        vertexShader = {
          context: `Test Vertex Shader Context`,
          throwIfDisposed: vertexShaderThrowIfDisposed,
          throwIfFromAnotherContext: vertexShaderThrowIfFromAnotherContext,
          getInstance: vertexShaderGetInstance,
          attributeDefinitionSet: testAttributeDefinitionSet,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.VertexShader,
        };

        fragmentShaderThrowIfDisposed = jasmine.createSpy(
          `fragmentShaderThrowIfDisposed`
        );
        fragmentShaderThrowIfFromAnotherContext = jasmine.createSpy(
          `fragmentShaderThrowIfFromAnotherContext`
        );
        fragmentShaderGetInstance = jasmine.createSpy(
          `fragmentShaderGetInstance`
        );
        fragmentShader = {
          context: `Test Fragment Shader Context`,
          throwIfDisposed: fragmentShaderThrowIfDisposed,
          throwIfFromAnotherContext: fragmentShaderThrowIfFromAnotherContext,
          getInstance: fragmentShaderGetInstance,
          varyingDefinitionSet: testVaryingDefinitionSet,
          uniformDefinitionSet: testUniformDefinitionSet,
          type: WebGlConstants.FragmentShader,
        };

        program = new WebGlProgram(context, vertexShader, fragmentShader);

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

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not check whether the vertex shader has been disposed`, () => {
        expect(vertexShaderThrowIfDisposed).not.toHaveBeenCalled();
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

      it(`does not check whether the fragment shader has been disposed`, () => {
        expect(fragmentShaderThrowIfDisposed).not.toHaveBeenCalled();
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
