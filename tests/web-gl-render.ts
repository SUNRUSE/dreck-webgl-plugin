describe(`webGlRender`, () => {
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
      readonly quantity: 1;
    };
    readonly test_declaration_df_name: {
      readonly shaderPrimitive: WebGlConstants.SamplerCube;
      readonly quantity: 2;
    };
    readonly test_declaration_dg_name: {
      readonly shaderPrimitive: WebGlConstants.SamplerCube;
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
      quantity: 1,
    },
    test_declaration_df_name: {
      shaderPrimitive: WebGlConstants.SamplerCube,
      quantity: 2,
    },
    test_declaration_dg_name: {
      shaderPrimitive: WebGlConstants.SamplerCube,
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
    readonly test_declaration_ca_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_cb_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_cc_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_cd_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_ce_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_cf_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_cg_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_ch_name: {
      readonly binaryType: WebGlConstants.UnsignedByte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_ci_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_cj_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_ck_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_cl_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_cm_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_cn_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_co_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_cp_name: {
      readonly binaryType: WebGlConstants.UnsignedShort;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_cq_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_cr_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_cs_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_ct_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_cu_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_cv_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_cw_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_cx_name: {
      readonly binaryType: WebGlConstants.Byte;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_cy_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: false;
    };
    readonly test_declaration_cz_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Float;
      readonly normalized: true;
    };
    readonly test_declaration_da_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: false;
    };
    readonly test_declaration_db_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec2;
      readonly normalized: true;
    };
    readonly test_declaration_dc_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: false;
    };
    readonly test_declaration_dd_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec3;
      readonly normalized: true;
    };
    readonly test_declaration_de_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: false;
    };
    readonly test_declaration_df_name: {
      readonly binaryType: WebGlConstants.Short;
      readonly shaderPrimitive: WebGlConstants.Vec4;
      readonly normalized: true;
    };
    readonly test_declaration_dg_name: {
      readonly binaryType: WebGlConstants.Float;
      readonly shaderPrimitive: WebGlConstants.Float;
    };
    readonly test_declaration_dh_name: {
      readonly binaryType: WebGlConstants.Float;
      readonly shaderPrimitive: WebGlConstants.Vec2;
    };
    readonly test_declaration_di_name: {
      readonly binaryType: WebGlConstants.Float;
      readonly shaderPrimitive: WebGlConstants.Vec3;
    };
    readonly test_declaration_dj_name: {
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
    test_declaration_ca_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_cb_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_cc_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_cd_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_ce_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
    test_declaration_cf_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_cg_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
    test_declaration_ch_name: {
      binaryType: WebGlConstants.UnsignedByte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_ci_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_cj_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_ck_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_cl_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_cm_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
    test_declaration_cn_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_co_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
    test_declaration_cp_name: {
      binaryType: WebGlConstants.UnsignedShort,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_cq_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_cr_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_cs_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_ct_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_cu_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
    test_declaration_cv_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_cw_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
    test_declaration_cx_name: {
      binaryType: WebGlConstants.Byte,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_cy_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Float,
      normalized: false,
    },
    test_declaration_cz_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Float,
      normalized: true,
    },
    test_declaration_da_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: false,
    },
    test_declaration_db_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec2,
      normalized: true,
    },
    test_declaration_dc_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: false,
    },
    test_declaration_dd_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec3,
      normalized: true,
    },
    test_declaration_de_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: false,
    },
    test_declaration_df_name: {
      binaryType: WebGlConstants.Short,
      shaderPrimitive: WebGlConstants.Vec4,
      normalized: true,
    },
    test_declaration_dg_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Float,
    },
    test_declaration_dh_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec2,
    },
    test_declaration_di_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec3,
    },
    test_declaration_dj_name: {
      binaryType: WebGlConstants.Float,
      shaderPrimitive: WebGlConstants.Vec4,
    },
  };

  let testPackedAttributeDefinitionSet: WebGlPackedAttributeDefinitionSet<TestAttributeDefinitionSet>;

  beforeAll(() => {
    testPackedAttributeDefinitionSet = new WebGlPackedAttributeDefinitionSet(
      testAttributeDefinitionSet
    );
  });

  describe(`when the vertex buffer is from another context`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;
    let error: unknown;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine.createSpy(`vertexBufferGetInstance`);
      const vertexBuffer = {
        context: `Test Invalid Context`,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine.createSpy(`programGetInstance`);
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine.createSpy(`textureDGetInstance`);
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine.createSpy(`textureEGetInstance`);
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine.createSpy(`textureFGetInstance`);
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine.createSpy(`textureJGetInstance`);
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine.createSpy(`textureKGetInstance`);
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine.createSpy(`textureLGetInstance`);
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine.createSpy(`textureMGetInstance`);
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine.createSpy(`textureSGetInstance`);
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      try {
        webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);

        /* istanbul ignore next */
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw anything`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the program`, () => {
      expect(programGetInstance).not.toHaveBeenCalled();
    });

    it(`does not get instances of any textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureDGetInstance).not.toHaveBeenCalled();
      expect(textureEGetInstance).not.toHaveBeenCalled();
      expect(textureFGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureJGetInstance).not.toHaveBeenCalled();
      expect(textureKGetInstance).not.toHaveBeenCalled();
      expect(textureLGetInstance).not.toHaveBeenCalled();
      expect(textureMGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureSGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(
        new Error(`The vertex buffer must be of the given context.`)
      );
    });
  });

  describe(`when the program is from another context`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;
    let error: unknown;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine.createSpy(`vertexBufferGetInstance`);
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine.createSpy(`programGetInstance`);
      const program = {
        context: `Test Invalid Context`,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine.createSpy(`textureDGetInstance`);
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine.createSpy(`textureEGetInstance`);
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine.createSpy(`textureFGetInstance`);
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine.createSpy(`textureJGetInstance`);
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine.createSpy(`textureKGetInstance`);
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine.createSpy(`textureLGetInstance`);
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine.createSpy(`textureMGetInstance`);
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine.createSpy(`textureSGetInstance`);
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      try {
        webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);

        /* istanbul ignore next */
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw anything`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the program`, () => {
      expect(programGetInstance).not.toHaveBeenCalled();
    });

    it(`does not get instances of any textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureDGetInstance).not.toHaveBeenCalled();
      expect(textureEGetInstance).not.toHaveBeenCalled();
      expect(textureFGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureJGetInstance).not.toHaveBeenCalled();
      expect(textureKGetInstance).not.toHaveBeenCalled();
      expect(textureLGetInstance).not.toHaveBeenCalled();
      expect(textureMGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureSGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(
        new Error(`The program must be of the given context.`)
      );
    });
  });

  describe(`when a single 2D texture is from another context`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;
    let error: unknown;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine.createSpy(`vertexBufferGetInstance`);
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine.createSpy(`programGetInstance`);
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine.createSpy(`textureDGetInstance`);
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine.createSpy(`textureEGetInstance`);
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine.createSpy(`textureFGetInstance`);
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine.createSpy(`textureJGetInstance`);
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine.createSpy(`textureKGetInstance`);
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine.createSpy(`textureLGetInstance`);
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine.createSpy(`textureMGetInstance`);
      textureM = {
        context: `Test Invalid Context`,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine.createSpy(`textureSGetInstance`);
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      try {
        webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);

        /* istanbul ignore next */
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw anything`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the program`, () => {
      expect(programGetInstance).not.toHaveBeenCalled();
    });

    it(`does not get instances of any textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureDGetInstance).not.toHaveBeenCalled();
      expect(textureEGetInstance).not.toHaveBeenCalled();
      expect(textureFGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureJGetInstance).not.toHaveBeenCalled();
      expect(textureKGetInstance).not.toHaveBeenCalled();
      expect(textureLGetInstance).not.toHaveBeenCalled();
      expect(textureMGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureSGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(
        new Error(`Texture uniforms must be of the given context.`)
      );
    });
  });

  describe(`when a multi 2D texture is from another context`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;
    let error: unknown;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine.createSpy(`vertexBufferGetInstance`);
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine.createSpy(`programGetInstance`);
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine.createSpy(`textureDGetInstance`);
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine.createSpy(`textureEGetInstance`);
      textureE = {
        context: `Test Invalid Context`,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine.createSpy(`textureFGetInstance`);
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine.createSpy(`textureJGetInstance`);
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine.createSpy(`textureKGetInstance`);
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine.createSpy(`textureLGetInstance`);
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine.createSpy(`textureMGetInstance`);
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine.createSpy(`textureSGetInstance`);
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      try {
        webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);

        /* istanbul ignore next */
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw anything`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the program`, () => {
      expect(programGetInstance).not.toHaveBeenCalled();
    });

    it(`does not get instances of any textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureDGetInstance).not.toHaveBeenCalled();
      expect(textureEGetInstance).not.toHaveBeenCalled();
      expect(textureFGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureJGetInstance).not.toHaveBeenCalled();
      expect(textureKGetInstance).not.toHaveBeenCalled();
      expect(textureLGetInstance).not.toHaveBeenCalled();
      expect(textureMGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureSGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(
        new Error(`Texture uniforms must be of the given context.`)
      );
    });
  });

  describe(`when a single cube texture is from another context`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;
    let error: unknown;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine.createSpy(`vertexBufferGetInstance`);
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine.createSpy(`programGetInstance`);
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine.createSpy(`textureDGetInstance`);
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine.createSpy(`textureEGetInstance`);
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine.createSpy(`textureFGetInstance`);
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine.createSpy(`textureJGetInstance`);
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine.createSpy(`textureKGetInstance`);
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine.createSpy(`textureLGetInstance`);
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine.createSpy(`textureMGetInstance`);
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine.createSpy(`textureSGetInstance`);
      textureS = {
        context: `Test Invalid Context`,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      try {
        webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);

        /* istanbul ignore next */
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw anything`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the program`, () => {
      expect(programGetInstance).not.toHaveBeenCalled();
    });

    it(`does not get instances of any textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureDGetInstance).not.toHaveBeenCalled();
      expect(textureEGetInstance).not.toHaveBeenCalled();
      expect(textureFGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureJGetInstance).not.toHaveBeenCalled();
      expect(textureKGetInstance).not.toHaveBeenCalled();
      expect(textureLGetInstance).not.toHaveBeenCalled();
      expect(textureMGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureSGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(
        new Error(`Texture uniforms must be of the given context.`)
      );
    });
  });

  describe(`when a multi cube texture is from another context`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;
    let error: unknown;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine.createSpy(`vertexBufferGetInstance`);
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine.createSpy(`programGetInstance`);
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine.createSpy(`textureDGetInstance`);
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine.createSpy(`textureEGetInstance`);
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine.createSpy(`textureFGetInstance`);
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine.createSpy(`textureJGetInstance`);
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine.createSpy(`textureKGetInstance`);
      textureK = {
        context: `Test Invalid Context`,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine.createSpy(`textureLGetInstance`);
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine.createSpy(`textureMGetInstance`);
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine.createSpy(`textureSGetInstance`);
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      try {
        webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);

        /* istanbul ignore next */
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw anything`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`does not get an instance of the program`, () => {
      expect(programGetInstance).not.toHaveBeenCalled();
    });

    it(`does not get instances of any textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureDGetInstance).not.toHaveBeenCalled();
      expect(textureEGetInstance).not.toHaveBeenCalled();
      expect(textureFGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureJGetInstance).not.toHaveBeenCalled();
      expect(textureKGetInstance).not.toHaveBeenCalled();
      expect(textureLGetInstance).not.toHaveBeenCalled();
      expect(textureMGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureSGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(
        new Error(`Texture uniforms must be of the given context.`)
      );
    });
  });

  describe(`when it is not possible to get an instance of the vertex buffer`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine
        .createSpy(`vertexBufferGetInstance`)
        .and.returnValue(null);
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine
        .createSpy(`programGetInstance`)
        .and.returnValue({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 97,
            test_declaration_ar_name: 86,
            test_declaration_as_name: 21,
            test_declaration_at_name: 33,
            test_declaration_au_name: 63,
            test_declaration_av_name: 90,
            test_declaration_aw_name: 67,
            test_declaration_ax_name: 48,
            test_declaration_ay_name: 49,
            test_declaration_az_name: 87,
            test_declaration_ba_name: 30,
            test_declaration_bb_name: 14,
            test_declaration_bc_name: 78,
            test_declaration_bd_name: 45,
            test_declaration_be_name: 43,
            test_declaration_bf_name: 82,
            test_declaration_bg_name: 29,
            test_declaration_bh_name: 79,
            test_declaration_bi_name: 98,
            test_declaration_bj_name: 58,
            test_declaration_bk_name: 96,
            test_declaration_bl_name: 28,
            test_declaration_bm_name: 64,
            test_declaration_bn_name: 31,
            test_declaration_bo_name: 77,
            test_declaration_bp_name: 65,
            test_declaration_bq_name: 37,
            test_declaration_br_name: 72,
            test_declaration_bs_name: 51,
            test_declaration_bt_name: 76,
            test_declaration_bu_name: 91,
            test_declaration_bv_name: 8,
            test_declaration_bw_name: 95,
            test_declaration_bx_name: 59,
            test_declaration_by_name: 18,
            test_declaration_bz_name: 46,
            test_declaration_ca_name: -1,
            test_declaration_cb_name: -1,
            test_declaration_cc_name: -1,
            test_declaration_cd_name: -1,
            test_declaration_ce_name: -1,
            test_declaration_cf_name: -1,
            test_declaration_cg_name: -1,
            test_declaration_ch_name: -1,
            test_declaration_ci_name: -1,
            test_declaration_cj_name: -1,
            test_declaration_ck_name: -1,
            test_declaration_cl_name: -1,
            test_declaration_cm_name: -1,
            test_declaration_cn_name: -1,
            test_declaration_co_name: -1,
            test_declaration_cp_name: -1,
            test_declaration_cq_name: -1,
            test_declaration_cr_name: -1,
            test_declaration_cs_name: -1,
            test_declaration_ct_name: -1,
            test_declaration_cu_name: -1,
            test_declaration_cv_name: -1,
            test_declaration_cw_name: -1,
            test_declaration_cx_name: -1,
            test_declaration_cy_name: -1,
            test_declaration_cz_name: -1,
            test_declaration_da_name: -1,
            test_declaration_db_name: -1,
            test_declaration_dc_name: -1,
            test_declaration_dd_name: -1,
            test_declaration_de_name: -1,
            test_declaration_df_name: -1,
            test_declaration_dg_name: -1,
            test_declaration_dh_name: -1,
            test_declaration_di_name: -1,
            test_declaration_dj_name: -1,
          },
          uniforms: {
            test_declaration_v_name: {
              test: `uniform location v`,
            },
            test_declaration_w_name: {
              test: `uniform location w`,
            },
            test_declaration_x_name: {
              test: `uniform location x`,
            },
            test_declaration_y_name: {
              test: `uniform location y`,
            },
            test_declaration_z_name: {
              test: `uniform location z`,
            },
            test_declaration_aa_name: {
              test: `uniform location aa`,
            },
            test_declaration_ab_name: {
              test: `uniform location ab`,
            },
            test_declaration_ac_name: {
              test: `uniform location ac`,
            },
            test_declaration_ad_name: {
              test: `uniform location ad`,
            },
            test_declaration_ae_name: {
              test: `uniform location ae`,
            },
            test_declaration_af_name: {
              test: `uniform location af`,
            },
            test_declaration_ag_name: {
              test: `uniform location ag`,
            },
            test_declaration_ah_name: {
              test: `uniform location ah`,
            },
            test_declaration_ai_name: {
              test: `uniform location ai`,
            },
            test_declaration_aj_name: {
              test: `uniform location aj`,
            },
            test_declaration_ak_name: {
              test: `uniform location ak`,
            },
            test_declaration_al_name: {
              test: `uniform location al`,
            },
            test_declaration_am_name: {
              test: `uniform location am`,
            },
            test_declaration_an_name: {
              test: `uniform location an`,
            },
            test_declaration_ao_name: {
              test: `uniform location ao`,
            },
            test_declaration_ap_name: {
              test: `uniform location ap`,
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
            test_declaration_cx_name: {
              location: {
                test: `uniform location cx`,
              },
              indices: [4, 1, 5],
            },
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: {
              location: {
                test: `uniform location da`,
              },
              indices: [0, 2, 7],
            },
            test_declaration_db_name: {
              location: {
                test: `uniform location db`,
              },
              index: 6,
            },
            test_declaration_dc_name: null,
            test_declaration_dd_name: null,
            test_declaration_de_name: {
              location: {
                test: `uniform location de`,
              },
              index: 3,
            },
            test_declaration_df_name: null,
            test_declaration_dg_name: null,
          },
        });
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine
        .createSpy(`textureDGetInstance`)
        .and.returnValue({
          test: `textureInstanceD`,
        });
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine
        .createSpy(`textureEGetInstance`)
        .and.returnValue({
          test: `textureInstanceE`,
        });
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine
        .createSpy(`textureFGetInstance`)
        .and.returnValue({
          test: `textureInstanceF`,
        });
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine
        .createSpy(`textureJGetInstance`)
        .and.returnValue({
          test: `textureInstanceJ`,
        });
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine
        .createSpy(`textureKGetInstance`)
        .and.returnValue({
          test: `textureInstanceK`,
        });
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine
        .createSpy(`textureLGetInstance`)
        .and.returnValue({
          test: `textureInstanceL`,
        });
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine
        .createSpy(`textureMGetInstance`)
        .and.returnValue({
          test: `textureInstanceM`,
        });
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine
        .createSpy(`textureSGetInstance`)
        .and.returnValue({
          test: `textureInstanceS`,
        });
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw any arrays`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`gets one instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get one instance of the program`, () => {
      expect(programGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`may get at most one instance of each configured texture`, () => {
      expect(textureDGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureEGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureFGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureJGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureKGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureLGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureMGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureSGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not get instances of any other textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });
  });

  describe(`when it is not possible to get an instance of the program`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine
        .createSpy(`vertexBufferGetInstance`)
        .and.returnValue({
          buffer: { test: `vertexBuffer` },
          data: { numberOfVertices: 152 },
        });
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine
        .createSpy(`programGetInstance`)
        .and.returnValue(null);
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine
        .createSpy(`textureDGetInstance`)
        .and.returnValue({
          test: `textureInstanceD`,
        });
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine
        .createSpy(`textureEGetInstance`)
        .and.returnValue({
          test: `textureInstanceE`,
        });
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine
        .createSpy(`textureFGetInstance`)
        .and.returnValue({
          test: `textureInstanceF`,
        });
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine
        .createSpy(`textureJGetInstance`)
        .and.returnValue({
          test: `textureInstanceJ`,
        });
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine
        .createSpy(`textureKGetInstance`)
        .and.returnValue({
          test: `textureInstanceK`,
        });
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine
        .createSpy(`textureLGetInstance`)
        .and.returnValue({
          test: `textureInstanceL`,
        });
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine
        .createSpy(`textureMGetInstance`)
        .and.returnValue({
          test: `textureInstanceM`,
        });
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine
        .createSpy(`textureSGetInstance`)
        .and.returnValue({
          test: `textureInstanceS`,
        });
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw any arrays`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get one instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`gets one instance of the program`, () => {
      expect(programGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`may get at most one instance of each configured texture`, () => {
      expect(textureDGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureEGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureFGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureJGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureKGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureLGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureMGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureSGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not get instances of any other textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });
  });

  describe(`when it is not possible to get an instance of a single 2D texture`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine
        .createSpy(`vertexBufferGetInstance`)
        .and.returnValue({
          buffer: { test: `vertexBuffer` },
          data: { numberOfVertices: 152 },
        });
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine
        .createSpy(`programGetInstance`)
        .and.returnValue({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 97,
            test_declaration_ar_name: 86,
            test_declaration_as_name: 21,
            test_declaration_at_name: 33,
            test_declaration_au_name: 63,
            test_declaration_av_name: 90,
            test_declaration_aw_name: 67,
            test_declaration_ax_name: 48,
            test_declaration_ay_name: 49,
            test_declaration_az_name: 87,
            test_declaration_ba_name: 30,
            test_declaration_bb_name: 14,
            test_declaration_bc_name: 78,
            test_declaration_bd_name: 45,
            test_declaration_be_name: 43,
            test_declaration_bf_name: 82,
            test_declaration_bg_name: 29,
            test_declaration_bh_name: 79,
            test_declaration_bi_name: 98,
            test_declaration_bj_name: 58,
            test_declaration_bk_name: 96,
            test_declaration_bl_name: 28,
            test_declaration_bm_name: 64,
            test_declaration_bn_name: 31,
            test_declaration_bo_name: 77,
            test_declaration_bp_name: 65,
            test_declaration_bq_name: 37,
            test_declaration_br_name: 72,
            test_declaration_bs_name: 51,
            test_declaration_bt_name: 76,
            test_declaration_bu_name: 91,
            test_declaration_bv_name: 8,
            test_declaration_bw_name: 95,
            test_declaration_bx_name: 59,
            test_declaration_by_name: 18,
            test_declaration_bz_name: 46,
            test_declaration_ca_name: -1,
            test_declaration_cb_name: -1,
            test_declaration_cc_name: -1,
            test_declaration_cd_name: -1,
            test_declaration_ce_name: -1,
            test_declaration_cf_name: -1,
            test_declaration_cg_name: -1,
            test_declaration_ch_name: -1,
            test_declaration_ci_name: -1,
            test_declaration_cj_name: -1,
            test_declaration_ck_name: -1,
            test_declaration_cl_name: -1,
            test_declaration_cm_name: -1,
            test_declaration_cn_name: -1,
            test_declaration_co_name: -1,
            test_declaration_cp_name: -1,
            test_declaration_cq_name: -1,
            test_declaration_cr_name: -1,
            test_declaration_cs_name: -1,
            test_declaration_ct_name: -1,
            test_declaration_cu_name: -1,
            test_declaration_cv_name: -1,
            test_declaration_cw_name: -1,
            test_declaration_cx_name: -1,
            test_declaration_cy_name: -1,
            test_declaration_cz_name: -1,
            test_declaration_da_name: -1,
            test_declaration_db_name: -1,
            test_declaration_dc_name: -1,
            test_declaration_dd_name: -1,
            test_declaration_de_name: -1,
            test_declaration_df_name: -1,
            test_declaration_dg_name: -1,
            test_declaration_dh_name: -1,
            test_declaration_di_name: -1,
            test_declaration_dj_name: -1,
          },
          uniforms: {
            test_declaration_v_name: {
              test: `uniform location v`,
            },
            test_declaration_w_name: {
              test: `uniform location w`,
            },
            test_declaration_x_name: {
              test: `uniform location x`,
            },
            test_declaration_y_name: {
              test: `uniform location y`,
            },
            test_declaration_z_name: {
              test: `uniform location z`,
            },
            test_declaration_aa_name: {
              test: `uniform location aa`,
            },
            test_declaration_ab_name: {
              test: `uniform location ab`,
            },
            test_declaration_ac_name: {
              test: `uniform location ac`,
            },
            test_declaration_ad_name: {
              test: `uniform location ad`,
            },
            test_declaration_ae_name: {
              test: `uniform location ae`,
            },
            test_declaration_af_name: {
              test: `uniform location af`,
            },
            test_declaration_ag_name: {
              test: `uniform location ag`,
            },
            test_declaration_ah_name: {
              test: `uniform location ah`,
            },
            test_declaration_ai_name: {
              test: `uniform location ai`,
            },
            test_declaration_aj_name: {
              test: `uniform location aj`,
            },
            test_declaration_ak_name: {
              test: `uniform location ak`,
            },
            test_declaration_al_name: {
              test: `uniform location al`,
            },
            test_declaration_am_name: {
              test: `uniform location am`,
            },
            test_declaration_an_name: {
              test: `uniform location an`,
            },
            test_declaration_ao_name: {
              test: `uniform location ao`,
            },
            test_declaration_ap_name: {
              test: `uniform location ap`,
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
            test_declaration_cx_name: {
              location: {
                test: `uniform location cx`,
              },
              indices: [4, 1, 5],
            },
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: {
              location: {
                test: `uniform location da`,
              },
              indices: [0, 2, 7],
            },
            test_declaration_db_name: {
              location: {
                test: `uniform location db`,
              },
              index: 6,
            },
            test_declaration_dc_name: null,
            test_declaration_dd_name: null,
            test_declaration_de_name: {
              location: {
                test: `uniform location de`,
              },
              index: 3,
            },
            test_declaration_df_name: null,
            test_declaration_dg_name: null,
          },
        });
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine
        .createSpy(`textureDGetInstance`)
        .and.returnValue({
          test: `textureInstanceD`,
        });
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine
        .createSpy(`textureEGetInstance`)
        .and.returnValue({
          test: `textureInstanceE`,
        });
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine
        .createSpy(`textureFGetInstance`)
        .and.returnValue({
          test: `textureInstanceF`,
        });
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine
        .createSpy(`textureJGetInstance`)
        .and.returnValue({
          test: `textureInstanceJ`,
        });
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine
        .createSpy(`textureKGetInstance`)
        .and.returnValue({
          test: `textureInstanceK`,
        });
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine
        .createSpy(`textureLGetInstance`)
        .and.returnValue({
          test: `textureInstanceL`,
        });
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine
        .createSpy(`textureMGetInstance`)
        .and.returnValue(null);
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine
        .createSpy(`textureSGetInstance`)
        .and.returnValue({
          test: `textureInstanceS`,
        });
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw any arrays`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get one instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get at most one instance of the program`, () => {
      expect(programGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`gets one instance of the unavailable texture`, () => {
      expect(textureMGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`may get at most one instance of each configured texture`, () => {
      expect(textureDGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureEGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureFGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureJGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureKGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureLGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureSGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not get instances of any other textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });
  });

  describe(`when it is not possible to get an instance of a multi 2D texture`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine
        .createSpy(`vertexBufferGetInstance`)
        .and.returnValue({
          buffer: { test: `vertexBuffer` },
          data: { numberOfVertices: 152 },
        });
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine
        .createSpy(`programGetInstance`)
        .and.returnValue({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 97,
            test_declaration_ar_name: 86,
            test_declaration_as_name: 21,
            test_declaration_at_name: 33,
            test_declaration_au_name: 63,
            test_declaration_av_name: 90,
            test_declaration_aw_name: 67,
            test_declaration_ax_name: 48,
            test_declaration_ay_name: 49,
            test_declaration_az_name: 87,
            test_declaration_ba_name: 30,
            test_declaration_bb_name: 14,
            test_declaration_bc_name: 78,
            test_declaration_bd_name: 45,
            test_declaration_be_name: 43,
            test_declaration_bf_name: 82,
            test_declaration_bg_name: 29,
            test_declaration_bh_name: 79,
            test_declaration_bi_name: 98,
            test_declaration_bj_name: 58,
            test_declaration_bk_name: 96,
            test_declaration_bl_name: 28,
            test_declaration_bm_name: 64,
            test_declaration_bn_name: 31,
            test_declaration_bo_name: 77,
            test_declaration_bp_name: 65,
            test_declaration_bq_name: 37,
            test_declaration_br_name: 72,
            test_declaration_bs_name: 51,
            test_declaration_bt_name: 76,
            test_declaration_bu_name: 91,
            test_declaration_bv_name: 8,
            test_declaration_bw_name: 95,
            test_declaration_bx_name: 59,
            test_declaration_by_name: 18,
            test_declaration_bz_name: 46,
            test_declaration_ca_name: -1,
            test_declaration_cb_name: -1,
            test_declaration_cc_name: -1,
            test_declaration_cd_name: -1,
            test_declaration_ce_name: -1,
            test_declaration_cf_name: -1,
            test_declaration_cg_name: -1,
            test_declaration_ch_name: -1,
            test_declaration_ci_name: -1,
            test_declaration_cj_name: -1,
            test_declaration_ck_name: -1,
            test_declaration_cl_name: -1,
            test_declaration_cm_name: -1,
            test_declaration_cn_name: -1,
            test_declaration_co_name: -1,
            test_declaration_cp_name: -1,
            test_declaration_cq_name: -1,
            test_declaration_cr_name: -1,
            test_declaration_cs_name: -1,
            test_declaration_ct_name: -1,
            test_declaration_cu_name: -1,
            test_declaration_cv_name: -1,
            test_declaration_cw_name: -1,
            test_declaration_cx_name: -1,
            test_declaration_cy_name: -1,
            test_declaration_cz_name: -1,
            test_declaration_da_name: -1,
            test_declaration_db_name: -1,
            test_declaration_dc_name: -1,
            test_declaration_dd_name: -1,
            test_declaration_de_name: -1,
            test_declaration_df_name: -1,
            test_declaration_dg_name: -1,
            test_declaration_dh_name: -1,
            test_declaration_di_name: -1,
            test_declaration_dj_name: -1,
          },
          uniforms: {
            test_declaration_v_name: {
              test: `uniform location v`,
            },
            test_declaration_w_name: {
              test: `uniform location w`,
            },
            test_declaration_x_name: {
              test: `uniform location x`,
            },
            test_declaration_y_name: {
              test: `uniform location y`,
            },
            test_declaration_z_name: {
              test: `uniform location z`,
            },
            test_declaration_aa_name: {
              test: `uniform location aa`,
            },
            test_declaration_ab_name: {
              test: `uniform location ab`,
            },
            test_declaration_ac_name: {
              test: `uniform location ac`,
            },
            test_declaration_ad_name: {
              test: `uniform location ad`,
            },
            test_declaration_ae_name: {
              test: `uniform location ae`,
            },
            test_declaration_af_name: {
              test: `uniform location af`,
            },
            test_declaration_ag_name: {
              test: `uniform location ag`,
            },
            test_declaration_ah_name: {
              test: `uniform location ah`,
            },
            test_declaration_ai_name: {
              test: `uniform location ai`,
            },
            test_declaration_aj_name: {
              test: `uniform location aj`,
            },
            test_declaration_ak_name: {
              test: `uniform location ak`,
            },
            test_declaration_al_name: {
              test: `uniform location al`,
            },
            test_declaration_am_name: {
              test: `uniform location am`,
            },
            test_declaration_an_name: {
              test: `uniform location an`,
            },
            test_declaration_ao_name: {
              test: `uniform location ao`,
            },
            test_declaration_ap_name: {
              test: `uniform location ap`,
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
            test_declaration_cx_name: {
              location: {
                test: `uniform location cx`,
              },
              indices: [4, 1, 5],
            },
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: {
              location: {
                test: `uniform location da`,
              },
              indices: [0, 2, 7],
            },
            test_declaration_db_name: {
              location: {
                test: `uniform location db`,
              },
              index: 6,
            },
            test_declaration_dc_name: null,
            test_declaration_dd_name: null,
            test_declaration_de_name: {
              location: {
                test: `uniform location de`,
              },
              index: 3,
            },
            test_declaration_df_name: null,
            test_declaration_dg_name: null,
          },
        });
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine
        .createSpy(`textureDGetInstance`)
        .and.returnValue({
          test: `textureInstanceD`,
        });
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine
        .createSpy(`textureEGetInstance`)
        .and.returnValue(null);
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine
        .createSpy(`textureFGetInstance`)
        .and.returnValue({
          test: `textureInstanceF`,
        });
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine
        .createSpy(`textureJGetInstance`)
        .and.returnValue({
          test: `textureInstanceJ`,
        });
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine
        .createSpy(`textureKGetInstance`)
        .and.returnValue({
          test: `textureInstanceK`,
        });
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine
        .createSpy(`textureLGetInstance`)
        .and.returnValue({
          test: `textureInstanceL`,
        });
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine
        .createSpy(`textureMGetInstance`)
        .and.returnValue({
          test: `textureInstanceM`,
        });
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine
        .createSpy(`textureSGetInstance`)
        .and.returnValue({
          test: `textureInstanceS`,
        });
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw any arrays`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get one instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get at most one instance of the program`, () => {
      expect(programGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`gets one instance of the unavailable texture`, () => {
      expect(textureEGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`may get at most one instance of each configured texture`, () => {
      expect(textureDGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureFGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureJGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureKGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureLGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureMGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureSGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not get instances of any other textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });
  });

  describe(`when it is not possible to get an instance of a single cube texture`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine
        .createSpy(`vertexBufferGetInstance`)
        .and.returnValue({
          buffer: { test: `vertexBuffer` },
          data: { numberOfVertices: 152 },
        });
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine
        .createSpy(`programGetInstance`)
        .and.returnValue({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 97,
            test_declaration_ar_name: 86,
            test_declaration_as_name: 21,
            test_declaration_at_name: 33,
            test_declaration_au_name: 63,
            test_declaration_av_name: 90,
            test_declaration_aw_name: 67,
            test_declaration_ax_name: 48,
            test_declaration_ay_name: 49,
            test_declaration_az_name: 87,
            test_declaration_ba_name: 30,
            test_declaration_bb_name: 14,
            test_declaration_bc_name: 78,
            test_declaration_bd_name: 45,
            test_declaration_be_name: 43,
            test_declaration_bf_name: 82,
            test_declaration_bg_name: 29,
            test_declaration_bh_name: 79,
            test_declaration_bi_name: 98,
            test_declaration_bj_name: 58,
            test_declaration_bk_name: 96,
            test_declaration_bl_name: 28,
            test_declaration_bm_name: 64,
            test_declaration_bn_name: 31,
            test_declaration_bo_name: 77,
            test_declaration_bp_name: 65,
            test_declaration_bq_name: 37,
            test_declaration_br_name: 72,
            test_declaration_bs_name: 51,
            test_declaration_bt_name: 76,
            test_declaration_bu_name: 91,
            test_declaration_bv_name: 8,
            test_declaration_bw_name: 95,
            test_declaration_bx_name: 59,
            test_declaration_by_name: 18,
            test_declaration_bz_name: 46,
            test_declaration_ca_name: -1,
            test_declaration_cb_name: -1,
            test_declaration_cc_name: -1,
            test_declaration_cd_name: -1,
            test_declaration_ce_name: -1,
            test_declaration_cf_name: -1,
            test_declaration_cg_name: -1,
            test_declaration_ch_name: -1,
            test_declaration_ci_name: -1,
            test_declaration_cj_name: -1,
            test_declaration_ck_name: -1,
            test_declaration_cl_name: -1,
            test_declaration_cm_name: -1,
            test_declaration_cn_name: -1,
            test_declaration_co_name: -1,
            test_declaration_cp_name: -1,
            test_declaration_cq_name: -1,
            test_declaration_cr_name: -1,
            test_declaration_cs_name: -1,
            test_declaration_ct_name: -1,
            test_declaration_cu_name: -1,
            test_declaration_cv_name: -1,
            test_declaration_cw_name: -1,
            test_declaration_cx_name: -1,
            test_declaration_cy_name: -1,
            test_declaration_cz_name: -1,
            test_declaration_da_name: -1,
            test_declaration_db_name: -1,
            test_declaration_dc_name: -1,
            test_declaration_dd_name: -1,
            test_declaration_de_name: -1,
            test_declaration_df_name: -1,
            test_declaration_dg_name: -1,
            test_declaration_dh_name: -1,
            test_declaration_di_name: -1,
            test_declaration_dj_name: -1,
          },
          uniforms: {
            test_declaration_v_name: {
              test: `uniform location v`,
            },
            test_declaration_w_name: {
              test: `uniform location w`,
            },
            test_declaration_x_name: {
              test: `uniform location x`,
            },
            test_declaration_y_name: {
              test: `uniform location y`,
            },
            test_declaration_z_name: {
              test: `uniform location z`,
            },
            test_declaration_aa_name: {
              test: `uniform location aa`,
            },
            test_declaration_ab_name: {
              test: `uniform location ab`,
            },
            test_declaration_ac_name: {
              test: `uniform location ac`,
            },
            test_declaration_ad_name: {
              test: `uniform location ad`,
            },
            test_declaration_ae_name: {
              test: `uniform location ae`,
            },
            test_declaration_af_name: {
              test: `uniform location af`,
            },
            test_declaration_ag_name: {
              test: `uniform location ag`,
            },
            test_declaration_ah_name: {
              test: `uniform location ah`,
            },
            test_declaration_ai_name: {
              test: `uniform location ai`,
            },
            test_declaration_aj_name: {
              test: `uniform location aj`,
            },
            test_declaration_ak_name: {
              test: `uniform location ak`,
            },
            test_declaration_al_name: {
              test: `uniform location al`,
            },
            test_declaration_am_name: {
              test: `uniform location am`,
            },
            test_declaration_an_name: {
              test: `uniform location an`,
            },
            test_declaration_ao_name: {
              test: `uniform location ao`,
            },
            test_declaration_ap_name: {
              test: `uniform location ap`,
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
            test_declaration_cx_name: {
              location: {
                test: `uniform location cx`,
              },
              indices: [4, 1, 5],
            },
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: {
              location: {
                test: `uniform location da`,
              },
              indices: [0, 2, 7],
            },
            test_declaration_db_name: {
              location: {
                test: `uniform location db`,
              },
              index: 6,
            },
            test_declaration_dc_name: null,
            test_declaration_dd_name: null,
            test_declaration_de_name: {
              location: {
                test: `uniform location de`,
              },
              index: 3,
            },
            test_declaration_df_name: null,
            test_declaration_dg_name: null,
          },
        });
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine
        .createSpy(`textureDGetInstance`)
        .and.returnValue({
          test: `textureInstanceD`,
        });
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine
        .createSpy(`textureEGetInstance`)
        .and.returnValue({
          test: `textureInstanceE`,
        });
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine
        .createSpy(`textureFGetInstance`)
        .and.returnValue({
          test: `textureInstanceF`,
        });
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine
        .createSpy(`textureJGetInstance`)
        .and.returnValue({
          test: `textureInstanceJ`,
        });
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine
        .createSpy(`textureKGetInstance`)
        .and.returnValue({
          test: `textureInstanceK`,
        });
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine
        .createSpy(`textureLGetInstance`)
        .and.returnValue({
          test: `textureInstanceL`,
        });
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine
        .createSpy(`textureMGetInstance`)
        .and.returnValue({
          test: `textureInstanceM`,
        });
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine
        .createSpy(`textureSGetInstance`)
        .and.returnValue(null);
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw any arrays`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get one instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get at most one instance of the program`, () => {
      expect(programGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`gets one instance of the unavailable texture`, () => {
      expect(textureSGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`may get at most one instance of each configured texture`, () => {
      expect(textureDGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureEGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureFGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureJGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureKGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureLGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureMGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not get instances of any other textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });
  });

  describe(`when it is not possible to get an instance of a multi cube texture`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;

    beforeAll(() => {
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`);
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine.createSpy(`activeTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine
        .createSpy(`vertexBufferGetInstance`)
        .and.returnValue({
          buffer: { test: `vertexBuffer` },
          data: { numberOfVertices: 152 },
        });
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine
        .createSpy(`programGetInstance`)
        .and.returnValue({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 97,
            test_declaration_ar_name: 86,
            test_declaration_as_name: 21,
            test_declaration_at_name: 33,
            test_declaration_au_name: 63,
            test_declaration_av_name: 90,
            test_declaration_aw_name: 67,
            test_declaration_ax_name: 48,
            test_declaration_ay_name: 49,
            test_declaration_az_name: 87,
            test_declaration_ba_name: 30,
            test_declaration_bb_name: 14,
            test_declaration_bc_name: 78,
            test_declaration_bd_name: 45,
            test_declaration_be_name: 43,
            test_declaration_bf_name: 82,
            test_declaration_bg_name: 29,
            test_declaration_bh_name: 79,
            test_declaration_bi_name: 98,
            test_declaration_bj_name: 58,
            test_declaration_bk_name: 96,
            test_declaration_bl_name: 28,
            test_declaration_bm_name: 64,
            test_declaration_bn_name: 31,
            test_declaration_bo_name: 77,
            test_declaration_bp_name: 65,
            test_declaration_bq_name: 37,
            test_declaration_br_name: 72,
            test_declaration_bs_name: 51,
            test_declaration_bt_name: 76,
            test_declaration_bu_name: 91,
            test_declaration_bv_name: 8,
            test_declaration_bw_name: 95,
            test_declaration_bx_name: 59,
            test_declaration_by_name: 18,
            test_declaration_bz_name: 46,
            test_declaration_ca_name: -1,
            test_declaration_cb_name: -1,
            test_declaration_cc_name: -1,
            test_declaration_cd_name: -1,
            test_declaration_ce_name: -1,
            test_declaration_cf_name: -1,
            test_declaration_cg_name: -1,
            test_declaration_ch_name: -1,
            test_declaration_ci_name: -1,
            test_declaration_cj_name: -1,
            test_declaration_ck_name: -1,
            test_declaration_cl_name: -1,
            test_declaration_cm_name: -1,
            test_declaration_cn_name: -1,
            test_declaration_co_name: -1,
            test_declaration_cp_name: -1,
            test_declaration_cq_name: -1,
            test_declaration_cr_name: -1,
            test_declaration_cs_name: -1,
            test_declaration_ct_name: -1,
            test_declaration_cu_name: -1,
            test_declaration_cv_name: -1,
            test_declaration_cw_name: -1,
            test_declaration_cx_name: -1,
            test_declaration_cy_name: -1,
            test_declaration_cz_name: -1,
            test_declaration_da_name: -1,
            test_declaration_db_name: -1,
            test_declaration_dc_name: -1,
            test_declaration_dd_name: -1,
            test_declaration_de_name: -1,
            test_declaration_df_name: -1,
            test_declaration_dg_name: -1,
            test_declaration_dh_name: -1,
            test_declaration_di_name: -1,
            test_declaration_dj_name: -1,
          },
          uniforms: {
            test_declaration_v_name: {
              test: `uniform location v`,
            },
            test_declaration_w_name: {
              test: `uniform location w`,
            },
            test_declaration_x_name: {
              test: `uniform location x`,
            },
            test_declaration_y_name: {
              test: `uniform location y`,
            },
            test_declaration_z_name: {
              test: `uniform location z`,
            },
            test_declaration_aa_name: {
              test: `uniform location aa`,
            },
            test_declaration_ab_name: {
              test: `uniform location ab`,
            },
            test_declaration_ac_name: {
              test: `uniform location ac`,
            },
            test_declaration_ad_name: {
              test: `uniform location ad`,
            },
            test_declaration_ae_name: {
              test: `uniform location ae`,
            },
            test_declaration_af_name: {
              test: `uniform location af`,
            },
            test_declaration_ag_name: {
              test: `uniform location ag`,
            },
            test_declaration_ah_name: {
              test: `uniform location ah`,
            },
            test_declaration_ai_name: {
              test: `uniform location ai`,
            },
            test_declaration_aj_name: {
              test: `uniform location aj`,
            },
            test_declaration_ak_name: {
              test: `uniform location ak`,
            },
            test_declaration_al_name: {
              test: `uniform location al`,
            },
            test_declaration_am_name: {
              test: `uniform location am`,
            },
            test_declaration_an_name: {
              test: `uniform location an`,
            },
            test_declaration_ao_name: {
              test: `uniform location ao`,
            },
            test_declaration_ap_name: {
              test: `uniform location ap`,
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
            test_declaration_cx_name: {
              location: {
                test: `uniform location cx`,
              },
              indices: [4, 1, 5],
            },
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: {
              location: {
                test: `uniform location da`,
              },
              indices: [0, 2, 7],
            },
            test_declaration_db_name: {
              location: {
                test: `uniform location db`,
              },
              index: 6,
            },
            test_declaration_dc_name: null,
            test_declaration_dd_name: null,
            test_declaration_de_name: {
              location: {
                test: `uniform location de`,
              },
              index: 3,
            },
            test_declaration_df_name: null,
            test_declaration_dg_name: null,
          },
        });
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine
        .createSpy(`textureDGetInstance`)
        .and.returnValue({
          test: `textureInstanceD`,
        });
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine
        .createSpy(`textureEGetInstance`)
        .and.returnValue({
          test: `textureInstanceE`,
        });
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine
        .createSpy(`textureFGetInstance`)
        .and.returnValue({
          test: `textureInstanceF`,
        });
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine
        .createSpy(`textureJGetInstance`)
        .and.returnValue({
          test: `textureInstanceJ`,
        });
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine
        .createSpy(`textureKGetInstance`)
        .and.returnValue(null);
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine
        .createSpy(`textureLGetInstance`)
        .and.returnValue({
          test: `textureInstanceL`,
        });
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine
        .createSpy(`textureMGetInstance`)
        .and.returnValue({
          test: `textureInstanceM`,
        });
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine
        .createSpy(`textureSGetInstance`)
        .and.returnValue({
          test: `textureInstanceS`,
        });
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);
    });

    it(`does not use any programs`, () => {
      expect(useProgram).not.toHaveBeenCalled();
    });

    it(`does not bind any buffers`, () => {
      expect(bindBuffer).not.toHaveBeenCalled();
    });

    it(`does not configure any vertex attribute pointers`, () => {
      expect(vertexAttribPointer).not.toHaveBeenCalled();
    });

    it(`does not enable any vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not disable any vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).not.toHaveBeenCalled();
    });

    it(`does not draw any arrays`, () => {
      expect(drawArrays).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniforms`, () => {
      expect(uniform1f).not.toHaveBeenCalled();
    });

    it(`does not set any 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniforms`, () => {
      expect(uniform2f).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniforms`, () => {
      expect(uniform3f).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniforms`, () => {
      expect(uniform4f).not.toHaveBeenCalled();
    });

    it(`does not set any 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).not.toHaveBeenCalled();
    });

    it(`does not set any 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).not.toHaveBeenCalled();
    });

    it(`does not set any 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).not.toHaveBeenCalled();
    });

    it(`does not set 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniforms`, () => {
      expect(uniform1i).not.toHaveBeenCalled();
    });

    it(`does not set 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).not.toHaveBeenCalled();
    });

    it(`does not set any active textures`, () => {
      expect(activeTexture).not.toHaveBeenCalled();
    });

    it(`does not bind any textures`, () => {
      expect(bindTexture).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get one instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`may get at most one instance of the program`, () => {
      expect(programGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`gets one instance of the unavailable texture`, () => {
      expect(textureKGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`may get at most one instance of each configured texture`, () => {
      expect(textureDGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureEGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureFGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureJGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureLGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureMGetInstance.calls.count()).toBeLessThanOrEqual(1);
      expect(textureSGetInstance.calls.count()).toBeLessThanOrEqual(1);
    });

    it(`does not get instances of any other textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });
  });

  describe(`when successful`, () => {
    let useProgram: jasmine.Spy;
    let bindBuffer: jasmine.Spy;
    let vertexAttribPointer: jasmine.Spy;
    let enableVertexAttribArray: jasmine.Spy;
    let disableVertexAttribArray: jasmine.Spy;
    let drawArrays: jasmine.Spy;
    let uniform1f: jasmine.Spy;
    let uniform1fv: jasmine.Spy;
    let uniform2f: jasmine.Spy;
    let uniform2fv: jasmine.Spy;
    let uniform3f: jasmine.Spy;
    let uniform3fv: jasmine.Spy;
    let uniform4f: jasmine.Spy;
    let uniform4fv: jasmine.Spy;
    let uniformMatrix2fv: jasmine.Spy;
    let uniformMatrix3fv: jasmine.Spy;
    let uniformMatrix4fv: jasmine.Spy;
    let uniform1i: jasmine.Spy;
    let uniform1iv: jasmine.Spy;
    let activeTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let textureCallOrder: ReadonlyArray<
      | {
          readonly type: `activeTexture`;
          readonly slot:
            | WebGlConstants.Texture0
            | WebGlConstants.Texture1
            | WebGlConstants.Texture2
            | WebGlConstants.Texture3
            | WebGlConstants.Texture4
            | WebGlConstants.Texture5
            | WebGlConstants.Texture6
            | WebGlConstants.Texture7;
        }
      | {
          readonly type: `bindTexture`;
          readonly target:
            | WebGlConstants.Texture2D
            | WebGlConstants.TextureCubeMap;
          readonly texture: null | WebGLTexture;
        }
      | { readonly type: `drawArrays` }
    >;

    let contextRender: jasmine.Spy;
    let context: WebGlContextInterface<
      | `useProgram`
      | `bindBuffer`
      | `vertexAttribPointer`
      | `enableVertexAttribArray`
      | `disableVertexAttribArray`
      | `drawArrays`
      | `uniform1f`
      | `uniform1fv`
      | `uniform2f`
      | `uniform2fv`
      | `uniform3f`
      | `uniform3fv`
      | `uniform4f`
      | `uniform4fv`
      | `uniformMatrix2fv`
      | `uniformMatrix3fv`
      | `uniformMatrix4fv`
      | `uniform1i`
      | `uniform1iv`
      | `activeTexture`
      | `bindTexture`
    >;
    let vertexBufferThrowIfDisposed: jasmine.Spy;
    let vertexBufferThrowIfFromAnotherContext: jasmine.Spy;
    let vertexBufferGetInstance: jasmine.Spy;
    let programThrowIfDisposed: jasmine.Spy;
    let programThrowIfFromAnotherContext: jasmine.Spy;
    let programGetInstance: jasmine.Spy;
    let textureAThrowIfDisposed: jasmine.Spy;
    let textureAThrowIfFromAnotherContext: jasmine.Spy;
    let textureAGetInstance: jasmine.Spy;
    let textureA: WebGlResourceInterface<WebGLTexture>;
    let textureBThrowIfDisposed: jasmine.Spy;
    let textureBThrowIfFromAnotherContext: jasmine.Spy;
    let textureBGetInstance: jasmine.Spy;
    let textureB: WebGlResourceInterface<WebGLTexture>;
    let textureCThrowIfDisposed: jasmine.Spy;
    let textureCThrowIfFromAnotherContext: jasmine.Spy;
    let textureCGetInstance: jasmine.Spy;
    let textureC: WebGlResourceInterface<WebGLTexture>;
    let textureDThrowIfDisposed: jasmine.Spy;
    let textureDThrowIfFromAnotherContext: jasmine.Spy;
    let textureDGetInstance: jasmine.Spy;
    let textureD: WebGlResourceInterface<WebGLTexture>;
    let textureEThrowIfDisposed: jasmine.Spy;
    let textureEThrowIfFromAnotherContext: jasmine.Spy;
    let textureEGetInstance: jasmine.Spy;
    let textureE: WebGlResourceInterface<WebGLTexture>;
    let textureFThrowIfDisposed: jasmine.Spy;
    let textureFThrowIfFromAnotherContext: jasmine.Spy;
    let textureFGetInstance: jasmine.Spy;
    let textureF: WebGlResourceInterface<WebGLTexture>;
    let textureGThrowIfDisposed: jasmine.Spy;
    let textureGThrowIfFromAnotherContext: jasmine.Spy;
    let textureGGetInstance: jasmine.Spy;
    let textureG: WebGlResourceInterface<WebGLTexture>;
    let textureHThrowIfDisposed: jasmine.Spy;
    let textureHThrowIfFromAnotherContext: jasmine.Spy;
    let textureHGetInstance: jasmine.Spy;
    let textureH: WebGlResourceInterface<WebGLTexture>;
    let textureIThrowIfDisposed: jasmine.Spy;
    let textureIThrowIfFromAnotherContext: jasmine.Spy;
    let textureIGetInstance: jasmine.Spy;
    let textureI: WebGlResourceInterface<WebGLTexture>;
    let textureJThrowIfDisposed: jasmine.Spy;
    let textureJThrowIfFromAnotherContext: jasmine.Spy;
    let textureJGetInstance: jasmine.Spy;
    let textureJ: WebGlResourceInterface<WebGLTexture>;
    let textureKThrowIfDisposed: jasmine.Spy;
    let textureKThrowIfFromAnotherContext: jasmine.Spy;
    let textureKGetInstance: jasmine.Spy;
    let textureK: WebGlResourceInterface<WebGLTexture>;
    let textureLThrowIfDisposed: jasmine.Spy;
    let textureLThrowIfFromAnotherContext: jasmine.Spy;
    let textureLGetInstance: jasmine.Spy;
    let textureL: WebGlResourceInterface<WebGLTexture>;
    let textureMThrowIfDisposed: jasmine.Spy;
    let textureMThrowIfFromAnotherContext: jasmine.Spy;
    let textureMGetInstance: jasmine.Spy;
    let textureM: WebGlResourceInterface<WebGLTexture>;
    let textureNThrowIfDisposed: jasmine.Spy;
    let textureNThrowIfFromAnotherContext: jasmine.Spy;
    let textureNGetInstance: jasmine.Spy;
    let textureN: WebGlResourceInterface<WebGLTexture>;
    let textureOThrowIfDisposed: jasmine.Spy;
    let textureOThrowIfFromAnotherContext: jasmine.Spy;
    let textureOGetInstance: jasmine.Spy;
    let textureO: WebGlResourceInterface<WebGLTexture>;
    let texturePThrowIfDisposed: jasmine.Spy;
    let texturePThrowIfFromAnotherContext: jasmine.Spy;
    let texturePGetInstance: jasmine.Spy;
    let textureP: WebGlResourceInterface<WebGLTexture>;
    let textureQThrowIfDisposed: jasmine.Spy;
    let textureQThrowIfFromAnotherContext: jasmine.Spy;
    let textureQGetInstance: jasmine.Spy;
    let textureQ: WebGlResourceInterface<WebGLTexture>;
    let textureRThrowIfDisposed: jasmine.Spy;
    let textureRThrowIfFromAnotherContext: jasmine.Spy;
    let textureRGetInstance: jasmine.Spy;
    let textureR: WebGlResourceInterface<WebGLTexture>;
    let textureSThrowIfDisposed: jasmine.Spy;
    let textureSThrowIfFromAnotherContext: jasmine.Spy;
    let textureSGetInstance: jasmine.Spy;
    let textureS: WebGlResourceInterface<WebGLTexture>;
    let textureTThrowIfDisposed: jasmine.Spy;
    let textureTThrowIfFromAnotherContext: jasmine.Spy;
    let textureTGetInstance: jasmine.Spy;
    let textureT: WebGlResourceInterface<WebGLTexture>;
    let textureUThrowIfDisposed: jasmine.Spy;
    let textureUThrowIfFromAnotherContext: jasmine.Spy;
    let textureUGetInstance: jasmine.Spy;
    let textureU: WebGlResourceInterface<WebGLTexture>;
    let textureVThrowIfDisposed: jasmine.Spy;
    let textureVThrowIfFromAnotherContext: jasmine.Spy;
    let textureVGetInstance: jasmine.Spy;
    let textureV: WebGlResourceInterface<WebGLTexture>;
    let textureWThrowIfDisposed: jasmine.Spy;
    let textureWThrowIfFromAnotherContext: jasmine.Spy;
    let textureWGetInstance: jasmine.Spy;
    let textureW: WebGlResourceInterface<WebGLTexture>;
    let textureXThrowIfDisposed: jasmine.Spy;
    let textureXThrowIfFromAnotherContext: jasmine.Spy;
    let textureXGetInstance: jasmine.Spy;
    let textureX: WebGlResourceInterface<WebGLTexture>;

    beforeAll(() => {
      const textureCallOrderValue: (
        | {
            readonly type: `activeTexture`;
            readonly slot:
              | WebGlConstants.Texture0
              | WebGlConstants.Texture1
              | WebGlConstants.Texture2
              | WebGlConstants.Texture3
              | WebGlConstants.Texture4
              | WebGlConstants.Texture5
              | WebGlConstants.Texture6
              | WebGlConstants.Texture7;
          }
        | {
            readonly type: `bindTexture`;
            readonly target:
              | WebGlConstants.Texture2D
              | WebGlConstants.TextureCubeMap;
            readonly texture: null | WebGLTexture;
          }
        | { readonly type: `drawArrays` }
      )[] = [];
      useProgram = jasmine.createSpy(`useProgram`);
      bindBuffer = jasmine.createSpy(`bindBuffer`);
      vertexAttribPointer = jasmine.createSpy(`vertexAttribPointer`);
      enableVertexAttribArray = jasmine.createSpy(`enableVertexAttribArray`);
      disableVertexAttribArray = jasmine.createSpy(`disableVertexAttribArray`);
      drawArrays = jasmine.createSpy(`drawArrays`).and.callFake(() => {
        textureCallOrderValue.push({ type: `drawArrays` });
      });
      uniform1f = jasmine.createSpy(`uniform1f`);
      uniform1fv = jasmine.createSpy(`uniform1fv`);
      uniform2f = jasmine.createSpy(`uniform2f`);
      uniform2fv = jasmine.createSpy(`uniform2fv`);
      uniform3f = jasmine.createSpy(`uniform3f`);
      uniform3fv = jasmine.createSpy(`uniform3fv`);
      uniform4f = jasmine.createSpy(`uniform4f`);
      uniform4fv = jasmine.createSpy(`uniform4fv`);
      uniformMatrix2fv = jasmine.createSpy(`uniformMatrix2fv`);
      uniformMatrix3fv = jasmine.createSpy(`uniformMatrix3fv`);
      uniformMatrix4fv = jasmine.createSpy(`uniformMatrix4fv`);
      uniform1i = jasmine.createSpy(`uniform1i`);
      uniform1iv = jasmine.createSpy(`uniform1iv`);
      activeTexture = jasmine
        .createSpy(`activeTexture`)
        .and.callFake((slot) => {
          textureCallOrderValue.push({
            type: `activeTexture`,
            slot,
          });
        });
      bindTexture = jasmine
        .createSpy(`bindTexture`)
        .and.callFake((target, texture) => {
          textureCallOrderValue.push({
            type: `bindTexture`,
            target,
            texture,
          });
        });
      textureCallOrder = textureCallOrderValue;
      contextRender = jasmine.createSpy(`contextRender`);
      context = {
        gl: {
          useProgram,
          bindBuffer,
          vertexAttribPointer,
          enableVertexAttribArray,
          disableVertexAttribArray,
          drawArrays,
          uniform1f,
          uniform1fv,
          uniform2f,
          uniform2fv,
          uniform3f,
          uniform3fv,
          uniform4f,
          uniform4fv,
          uniformMatrix2fv,
          uniformMatrix3fv,
          uniformMatrix4fv,
          uniform1i,
          uniform1iv,
          activeTexture,
          bindTexture,
        },
        timesContextRestored: 7,
        render: contextRender,
      };
      vertexBufferThrowIfDisposed = jasmine.createSpy(
        `vertexBufferThrowIfDisposed`
      );
      vertexBufferThrowIfFromAnotherContext = jasmine.createSpy(
        `vertexBufferThrowIfFromAnotherContext`
      );
      vertexBufferGetInstance = jasmine
        .createSpy(`vertexBufferGetInstance`)
        .and.returnValue({
          buffer: { test: `vertexBuffer` },
          data: { numberOfVertices: 152 },
        });
      const vertexBuffer = {
        context,
        throwIfDisposed: vertexBufferThrowIfDisposed,
        throwIfFromAnotherContext: vertexBufferThrowIfFromAnotherContext,
        getInstance: vertexBufferGetInstance,
        WebGlPackedAttributeDefinitionSet: testPackedAttributeDefinitionSet,
        mode: WebGlConstants.LineStrip as WebGlConstants.LineStrip,
      };
      programThrowIfDisposed = jasmine.createSpy(`programThrowIfDisposed`);
      programThrowIfFromAnotherContext = jasmine.createSpy(
        `programThrowIfFromAnotherContext`
      );
      programGetInstance = jasmine
        .createSpy(`programGetInstance`)
        .and.returnValue({
          program: { test: `program` },
          attributeLocations: {
            test_declaration_aq_name: 97,
            test_declaration_ar_name: 86,
            test_declaration_as_name: 21,
            test_declaration_at_name: 33,
            test_declaration_au_name: 63,
            test_declaration_av_name: 90,
            test_declaration_aw_name: 67,
            test_declaration_ax_name: 48,
            test_declaration_ay_name: 49,
            test_declaration_az_name: 87,
            test_declaration_ba_name: 30,
            test_declaration_bb_name: 14,
            test_declaration_bc_name: 78,
            test_declaration_bd_name: 45,
            test_declaration_be_name: 43,
            test_declaration_bf_name: 82,
            test_declaration_bg_name: 29,
            test_declaration_bh_name: 79,
            test_declaration_bi_name: 98,
            test_declaration_bj_name: 58,
            test_declaration_bk_name: 96,
            test_declaration_bl_name: 28,
            test_declaration_bm_name: 64,
            test_declaration_bn_name: 31,
            test_declaration_bo_name: 77,
            test_declaration_bp_name: 65,
            test_declaration_bq_name: 37,
            test_declaration_br_name: 72,
            test_declaration_bs_name: 51,
            test_declaration_bt_name: 76,
            test_declaration_bu_name: 91,
            test_declaration_bv_name: 8,
            test_declaration_bw_name: 95,
            test_declaration_bx_name: 59,
            test_declaration_by_name: 18,
            test_declaration_bz_name: 46,
            test_declaration_ca_name: -1,
            test_declaration_cb_name: -1,
            test_declaration_cc_name: -1,
            test_declaration_cd_name: -1,
            test_declaration_ce_name: -1,
            test_declaration_cf_name: -1,
            test_declaration_cg_name: -1,
            test_declaration_ch_name: -1,
            test_declaration_ci_name: -1,
            test_declaration_cj_name: -1,
            test_declaration_ck_name: -1,
            test_declaration_cl_name: -1,
            test_declaration_cm_name: -1,
            test_declaration_cn_name: -1,
            test_declaration_co_name: -1,
            test_declaration_cp_name: -1,
            test_declaration_cq_name: -1,
            test_declaration_cr_name: -1,
            test_declaration_cs_name: -1,
            test_declaration_ct_name: -1,
            test_declaration_cu_name: -1,
            test_declaration_cv_name: -1,
            test_declaration_cw_name: -1,
            test_declaration_cx_name: -1,
            test_declaration_cy_name: -1,
            test_declaration_cz_name: -1,
            test_declaration_da_name: -1,
            test_declaration_db_name: -1,
            test_declaration_dc_name: -1,
            test_declaration_dd_name: -1,
            test_declaration_de_name: -1,
            test_declaration_df_name: -1,
            test_declaration_dg_name: -1,
            test_declaration_dh_name: -1,
            test_declaration_di_name: -1,
            test_declaration_dj_name: -1,
          },
          uniforms: {
            test_declaration_v_name: {
              test: `uniform location v`,
            },
            test_declaration_w_name: {
              test: `uniform location w`,
            },
            test_declaration_x_name: {
              test: `uniform location x`,
            },
            test_declaration_y_name: {
              test: `uniform location y`,
            },
            test_declaration_z_name: {
              test: `uniform location z`,
            },
            test_declaration_aa_name: {
              test: `uniform location aa`,
            },
            test_declaration_ab_name: {
              test: `uniform location ab`,
            },
            test_declaration_ac_name: {
              test: `uniform location ac`,
            },
            test_declaration_ad_name: {
              test: `uniform location ad`,
            },
            test_declaration_ae_name: {
              test: `uniform location ae`,
            },
            test_declaration_af_name: {
              test: `uniform location af`,
            },
            test_declaration_ag_name: {
              test: `uniform location ag`,
            },
            test_declaration_ah_name: {
              test: `uniform location ah`,
            },
            test_declaration_ai_name: {
              test: `uniform location ai`,
            },
            test_declaration_aj_name: {
              test: `uniform location aj`,
            },
            test_declaration_ak_name: {
              test: `uniform location ak`,
            },
            test_declaration_al_name: {
              test: `uniform location al`,
            },
            test_declaration_am_name: {
              test: `uniform location am`,
            },
            test_declaration_an_name: {
              test: `uniform location an`,
            },
            test_declaration_ao_name: {
              test: `uniform location ao`,
            },
            test_declaration_ap_name: {
              test: `uniform location ap`,
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
            test_declaration_cx_name: {
              location: {
                test: `uniform location cx`,
              },
              indices: [4, 1, 5],
            },
            test_declaration_cy_name: null,
            test_declaration_cz_name: null,
            test_declaration_da_name: {
              location: {
                test: `uniform location da`,
              },
              indices: [0, 2, 7],
            },
            test_declaration_db_name: {
              location: {
                test: `uniform location db`,
              },
              index: 6,
            },
            test_declaration_dc_name: null,
            test_declaration_dd_name: null,
            test_declaration_de_name: {
              location: {
                test: `uniform location de`,
              },
              index: 3,
            },
            test_declaration_df_name: null,
            test_declaration_dg_name: null,
          },
        });
      const program = {
        context,
        throwIfDisposed: programThrowIfDisposed,
        throwIfFromAnotherContext: programThrowIfFromAnotherContext,
        getInstance: programGetInstance,
        vertexShader: {
          uniformDefinitionSet: testUniformDefinitionSet,
        },
      };
      textureAThrowIfDisposed = jasmine.createSpy(`textureAThrowIfDisposed`);
      textureAThrowIfFromAnotherContext = jasmine.createSpy(
        `textureAThrowIfFromAnotherContext`
      );
      textureAGetInstance = jasmine.createSpy(`textureAGetInstance`);
      textureA = {
        context,
        throwIfDisposed: textureAThrowIfDisposed,
        throwIfFromAnotherContext: textureAThrowIfFromAnotherContext,
        getInstance: textureAGetInstance,
      };
      textureBThrowIfDisposed = jasmine.createSpy(`textureBThrowIfDisposed`);
      textureBThrowIfFromAnotherContext = jasmine.createSpy(
        `textureBThrowIfFromAnotherContext`
      );
      textureBGetInstance = jasmine.createSpy(`textureBGetInstance`);
      textureB = {
        context,
        throwIfDisposed: textureBThrowIfDisposed,
        throwIfFromAnotherContext: textureBThrowIfFromAnotherContext,
        getInstance: textureBGetInstance,
      };
      textureCThrowIfDisposed = jasmine.createSpy(`textureCThrowIfDisposed`);
      textureCThrowIfFromAnotherContext = jasmine.createSpy(
        `textureCThrowIfFromAnotherContext`
      );
      textureCGetInstance = jasmine.createSpy(`textureCGetInstance`);
      textureC = {
        context,
        throwIfDisposed: textureCThrowIfDisposed,
        throwIfFromAnotherContext: textureCThrowIfFromAnotherContext,
        getInstance: textureCGetInstance,
      };
      textureDThrowIfDisposed = jasmine.createSpy(`textureDThrowIfDisposed`);
      textureDThrowIfFromAnotherContext = jasmine.createSpy(
        `textureDThrowIfFromAnotherContext`
      );
      textureDGetInstance = jasmine
        .createSpy(`textureDGetInstance`)
        .and.returnValue({
          test: `textureInstanceD`,
        });
      textureD = {
        context,
        throwIfDisposed: textureDThrowIfDisposed,
        throwIfFromAnotherContext: textureDThrowIfFromAnotherContext,
        getInstance: textureDGetInstance,
      };
      textureEThrowIfDisposed = jasmine.createSpy(`textureEThrowIfDisposed`);
      textureEThrowIfFromAnotherContext = jasmine.createSpy(
        `textureEThrowIfFromAnotherContext`
      );
      textureEGetInstance = jasmine
        .createSpy(`textureEGetInstance`)
        .and.returnValue({
          test: `textureInstanceE`,
        });
      textureE = {
        context,
        throwIfDisposed: textureEThrowIfDisposed,
        throwIfFromAnotherContext: textureEThrowIfFromAnotherContext,
        getInstance: textureEGetInstance,
      };
      textureFThrowIfDisposed = jasmine.createSpy(`textureFThrowIfDisposed`);
      textureFThrowIfFromAnotherContext = jasmine.createSpy(
        `textureFThrowIfFromAnotherContext`
      );
      textureFGetInstance = jasmine
        .createSpy(`textureFGetInstance`)
        .and.returnValue({
          test: `textureInstanceF`,
        });
      textureF = {
        context,
        throwIfDisposed: textureFThrowIfDisposed,
        throwIfFromAnotherContext: textureFThrowIfFromAnotherContext,
        getInstance: textureFGetInstance,
      };
      textureGThrowIfDisposed = jasmine.createSpy(`textureGGhrowIfDisposed`);
      textureGThrowIfFromAnotherContext = jasmine.createSpy(
        `textureGGhrowIfFromAnotherContext`
      );
      textureGGetInstance = jasmine.createSpy(`textureGGetInstance`);
      textureG = {
        context,
        throwIfDisposed: textureGThrowIfDisposed,
        throwIfFromAnotherContext: textureGThrowIfFromAnotherContext,
        getInstance: textureGGetInstance,
      };
      textureHThrowIfDisposed = jasmine.createSpy(`textureHThrowIfDisposed`);
      textureHThrowIfFromAnotherContext = jasmine.createSpy(
        `textureHThrowIfFromAnotherContext`
      );
      textureHGetInstance = jasmine.createSpy(`textureHGetInstance`);
      textureH = {
        context,
        throwIfDisposed: textureHThrowIfDisposed,
        throwIfFromAnotherContext: textureHThrowIfFromAnotherContext,
        getInstance: textureHGetInstance,
      };
      textureIThrowIfDisposed = jasmine.createSpy(`textureIThrowIfDisposed`);
      textureIThrowIfFromAnotherContext = jasmine.createSpy(
        `textureIThrowIfFromAnotherContext`
      );
      textureIGetInstance = jasmine.createSpy(`textureIGetInstance`);
      textureI = {
        context,
        throwIfDisposed: textureIThrowIfDisposed,
        throwIfFromAnotherContext: textureIThrowIfFromAnotherContext,
        getInstance: textureIGetInstance,
      };
      textureJThrowIfDisposed = jasmine.createSpy(`textureJThrowIfDisposed`);
      textureJThrowIfFromAnotherContext = jasmine.createSpy(
        `textureJThrowIfFromAnotherContext`
      );
      textureJGetInstance = jasmine
        .createSpy(`textureJGetInstance`)
        .and.returnValue({
          test: `textureInstanceJ`,
        });
      textureJ = {
        context,
        throwIfDisposed: textureJThrowIfDisposed,
        throwIfFromAnotherContext: textureJThrowIfFromAnotherContext,
        getInstance: textureJGetInstance,
      };
      textureKThrowIfDisposed = jasmine.createSpy(`textureKThrowIfDisposed`);
      textureKThrowIfFromAnotherContext = jasmine.createSpy(
        `textureKThrowIfFromAnotherContext`
      );
      textureKGetInstance = jasmine
        .createSpy(`textureKGetInstance`)
        .and.returnValue({
          test: `textureInstanceK`,
        });
      textureK = {
        context,
        throwIfDisposed: textureKThrowIfDisposed,
        throwIfFromAnotherContext: textureKThrowIfFromAnotherContext,
        getInstance: textureKGetInstance,
      };
      textureLThrowIfDisposed = jasmine.createSpy(`textureLThrowIfDisposed`);
      textureLThrowIfFromAnotherContext = jasmine.createSpy(
        `textureLThrowIfFromAnotherContext`
      );
      textureLGetInstance = jasmine
        .createSpy(`textureLGetInstance`)
        .and.returnValue({
          test: `textureInstanceL`,
        });
      textureL = {
        context,
        throwIfDisposed: textureLThrowIfDisposed,
        throwIfFromAnotherContext: textureLThrowIfFromAnotherContext,
        getInstance: textureLGetInstance,
      };
      textureMThrowIfDisposed = jasmine.createSpy(`textureMThrowIfDisposed`);
      textureMThrowIfFromAnotherContext = jasmine.createSpy(
        `textureMThrowIfFromAnotherContext`
      );
      textureMGetInstance = jasmine
        .createSpy(`textureMGetInstance`)
        .and.returnValue({
          test: `textureInstanceM`,
        });
      textureM = {
        context,
        throwIfDisposed: textureMThrowIfDisposed,
        throwIfFromAnotherContext: textureMThrowIfFromAnotherContext,
        getInstance: textureMGetInstance,
      };
      textureNThrowIfDisposed = jasmine.createSpy(`textureNThrowIfDisposed`);
      textureNThrowIfFromAnotherContext = jasmine.createSpy(
        `textureNThrowIfFromAnotherContext`
      );
      textureNGetInstance = jasmine.createSpy(`textureNGetInstance`);
      textureN = {
        context,
        throwIfDisposed: textureNThrowIfDisposed,
        throwIfFromAnotherContext: textureNThrowIfFromAnotherContext,
        getInstance: textureNGetInstance,
      };
      textureOThrowIfDisposed = jasmine.createSpy(`textureOThrowIfDisposed`);
      textureOThrowIfFromAnotherContext = jasmine.createSpy(
        `textureOThrowIfFromAnotherContext`
      );
      textureOGetInstance = jasmine.createSpy(`textureOGetInstance`);
      textureO = {
        context,
        throwIfDisposed: textureOThrowIfDisposed,
        throwIfFromAnotherContext: textureOThrowIfFromAnotherContext,
        getInstance: textureOGetInstance,
      };
      texturePThrowIfDisposed = jasmine.createSpy(`texturePThrowIfDisposed`);
      texturePThrowIfFromAnotherContext = jasmine.createSpy(
        `texturePThrowIfFromAnotherContext`
      );
      texturePGetInstance = jasmine.createSpy(`texturePGetInstance`);
      textureP = {
        context,
        throwIfDisposed: texturePThrowIfDisposed,
        throwIfFromAnotherContext: texturePThrowIfFromAnotherContext,
        getInstance: texturePGetInstance,
      };
      textureQThrowIfDisposed = jasmine.createSpy(`textureQThrowIfDisposed`);
      textureQThrowIfFromAnotherContext = jasmine.createSpy(
        `textureQThrowIfFromAnotherContext`
      );
      textureQGetInstance = jasmine.createSpy(`textureQGetInstance`);
      textureQ = {
        context,
        throwIfDisposed: textureQThrowIfDisposed,
        throwIfFromAnotherContext: textureQThrowIfFromAnotherContext,
        getInstance: textureQGetInstance,
      };
      textureRThrowIfDisposed = jasmine.createSpy(`textureRThrowIfDisposed`);
      textureRThrowIfFromAnotherContext = jasmine.createSpy(
        `textureRThrowIfFromAnotherContext`
      );
      textureRGetInstance = jasmine.createSpy(`textureRGetInstance`);
      textureR = {
        context,
        throwIfDisposed: textureRThrowIfDisposed,
        throwIfFromAnotherContext: textureRThrowIfFromAnotherContext,
        getInstance: textureRGetInstance,
      };
      textureSThrowIfDisposed = jasmine.createSpy(`textureSThrowIfDisposed`);
      textureSThrowIfFromAnotherContext = jasmine.createSpy(
        `textureSThrowIfFromAnotherContext`
      );
      textureSGetInstance = jasmine
        .createSpy(`textureSGetInstance`)
        .and.returnValue({
          test: `textureInstanceS`,
        });
      textureS = {
        context,
        throwIfDisposed: textureSThrowIfDisposed,
        throwIfFromAnotherContext: textureSThrowIfFromAnotherContext,
        getInstance: textureSGetInstance,
      };
      textureTThrowIfDisposed = jasmine.createSpy(`textureTThrowIfDisposed`);
      textureTThrowIfFromAnotherContext = jasmine.createSpy(
        `textureTThrowIfFromAnotherContext`
      );
      textureTGetInstance = jasmine.createSpy(`textureTGetInstance`);
      textureT = {
        context,
        throwIfDisposed: textureTThrowIfDisposed,
        throwIfFromAnotherContext: textureTThrowIfFromAnotherContext,
        getInstance: textureTGetInstance,
      };
      textureUThrowIfDisposed = jasmine.createSpy(`textureUThrowIfDisposed`);
      textureUThrowIfFromAnotherContext = jasmine.createSpy(
        `textureUThrowIfFromAnotherContext`
      );
      textureUGetInstance = jasmine.createSpy(`textureUGetInstance`);
      textureU = {
        context,
        throwIfDisposed: textureUThrowIfDisposed,
        throwIfFromAnotherContext: textureUThrowIfFromAnotherContext,
        getInstance: textureUGetInstance,
      };
      textureVThrowIfDisposed = jasmine.createSpy(`textureVThrowIfDisposed`);
      textureVThrowIfFromAnotherContext = jasmine.createSpy(
        `textureVThrowIfFromAnotherContext`
      );
      textureVGetInstance = jasmine.createSpy(`textureVGetInstance`);
      textureV = {
        context,
        throwIfDisposed: textureVThrowIfDisposed,
        throwIfFromAnotherContext: textureVThrowIfFromAnotherContext,
        getInstance: textureVGetInstance,
      };
      textureWThrowIfDisposed = jasmine.createSpy(`textureWThrowIfDisposed`);
      textureWThrowIfFromAnotherContext = jasmine.createSpy(
        `textureWThrowIfFromAnotherContext`
      );
      textureWGetInstance = jasmine.createSpy(`textureWGetInstance`);
      textureW = {
        context,
        throwIfDisposed: textureWThrowIfDisposed,
        throwIfFromAnotherContext: textureWThrowIfFromAnotherContext,
        getInstance: textureWGetInstance,
      };
      textureXThrowIfDisposed = jasmine.createSpy(`textureXThrowIfDisposed`);
      textureXThrowIfFromAnotherContext = jasmine.createSpy(
        `textureXThrowIfFromAnotherContext`
      );
      textureXGetInstance = jasmine.createSpy(`textureXGetInstance`);
      textureX = {
        context,
        throwIfDisposed: textureXThrowIfDisposed,
        throwIfFromAnotherContext: textureXThrowIfFromAnotherContext,
        getInstance: textureXGetInstance,
      };
      const testWebGlUniformValueSet: WebGlUniformValueSet<TestUniformDefinitionSet> =
        {
          test_declaration_v_name: 80.88,
          test_declaration_w_name: [74.46, 45.63],
          test_declaration_x_name: [7.32, 79.64, 57.38],
          test_declaration_y_name: [53.16, 67.0],
          test_declaration_z_name: [
            [69.38, 59.46],
            [88.4, 52.69],
          ],
          test_declaration_aa_name: [
            [96.34, 8.59],
            [64.53, 19.44],
            [52.23, 2.29],
          ],
          test_declaration_ab_name: [29.33, 69.48, 48.01],
          test_declaration_ac_name: [
            [29.18, 37.8, 22.43],
            [13.05, 16.26, 66.49],
          ],
          test_declaration_ad_name: [
            [89.54, 34.26, 60.78],
            [74.37, 38.17, 95.98],
            [81.92, 72.0, 98.23],
          ],
          test_declaration_ae_name: [89.22, 56.22, 94.14, 15.71],
          test_declaration_af_name: [
            [26.14, 35.6, 81.98, 60.8],
            [75.88, 54.15, 30.12, 61.94],
          ],
          test_declaration_ag_name: [
            [25.64, 93.22, 79.48, 44.83],
            [88.44, 93.56, 74.77, 36.74],
            [14.81, 20.33, 98.54, 29.11],
          ],
          test_declaration_ah_name: [91.89, 11.86, 14.41, 3.61],
          test_declaration_ai_name: [
            [21.79, 5.22, 52.31, 60.4],
            [95.34, 83.04, 32.35, 23.95],
          ],
          test_declaration_aj_name: [
            [97.69, 30.2, 95.86, 50.62],
            [52.39, 47.8, 0.76, 2.67],
            [31.8, 53.44, 77.05, 56.28],
          ],
          test_declaration_ak_name: [
            84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94,
          ],
          test_declaration_al_name: [
            [22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37],
            [74.88, 65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18],
          ],
          test_declaration_am_name: [
            [87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74],
            [2.55, 56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23],
            [49.99, 72.83, 16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79],
          ],
          test_declaration_an_name: [
            4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
            92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
          ],
          test_declaration_ao_name: [
            [
              9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
              11.97, 62.85, 77.82, 78.74, 20.86, 52.64,
            ],
            [
              82.62, 74.35, 32.51, 55.03, 64.4, 49.92, 83.82, 38.8, 21.23,
              66.44, 74.28, 83.3, 89.27, 9.62, 91.5, 80.73,
            ],
          ],
          test_declaration_ap_name: [
            [
              66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74,
              28.57, 31.91, 82.82, 54.86, 78.88, 19.44, 84.92,
            ],
            [
              20.6, 98.88, 61.55, 4.45, 55.58, 33.8, 6.76, 66.36, 94.97, 72.23,
              66.22, 29.22, 6.84, 17.67, 85.12, 78.08,
            ],
            [
              76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51, 11.19,
              61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
            ],
          ],
          test_declaration_ca_name: 88.0,
          test_declaration_cb_name: [21.22, 93.1],
          test_declaration_cc_name: [80.99, 87.45, 57.44],
          test_declaration_cd_name: [9.42, 79.91],
          test_declaration_ce_name: [
            [25.78, 40.39],
            [22.36, 72.99],
          ],
          test_declaration_cf_name: [
            [63.3, 37.71],
            [21.29, 83.17],
            [48.45, 43.42],
          ],
          test_declaration_cg_name: [5.37, 33.67, 94.12],
          test_declaration_ch_name: [
            [49.5, 8.08, 2.19],
            [84.44, 80.45, 28.83],
          ],
          test_declaration_ci_name: [
            [69.38, 4.25, 30.24],
            [80.42, 23.26, 72.82],
            [82.67, 17.85, 95.9],
          ],
          test_declaration_cj_name: [65.48, 49.37, 20.93, 54.6],
          test_declaration_ck_name: [
            [43.05, 49.49, 40.98, 41.27],
            [81.91, 38.94, 51.39, 77.18],
          ],
          test_declaration_cl_name: [
            [52.6, 58.62, 67.68, 57.05],
            [48.13, 26.87, 87.18, 6.49],
            [8.9, 2.36, 42.31, 30.95],
          ],
          test_declaration_cm_name: [17.45, 31.38, 71.35, 81.75],
          test_declaration_cn_name: [
            [97.85, 97.54, 75.44, 96.88],
            [9.21, 13.46, 83.74, 22.68],
          ],
          test_declaration_co_name: [
            [94.18, 60.83, 71.55, 98.34],
            [25.66, 53.1, 70.29, 32.83],
            [1.86, 65.59, 70.21, 81.55],
          ],
          test_declaration_cp_name: [
            86.6, 65.62, 46.16, 74.69, 7.76, 50.38, 91.19, 38.89, 80.74,
          ],
          test_declaration_cq_name: [
            [36.23, 73.0, 50.49, 48.17, 73.91, 68.57, 3.7, 2.41, 46.55],
            [47.56, 27.29, 44.0, 89.32, 77.68, 97.63, 33.9, 91.36, 56.77],
          ],
          test_declaration_cr_name: [
            [14.98, 97.96, 48.86, 43.99, 7.57, 59.83, 76.63, 55.7, 93.2],
            [9.47, 37.64, 74.82, 55.47, 23.71, 2.48, 11.84, 49.11, 59.73],
            [96.89, 56.09, 43.55, 79.38, 0.51, 86.6, 61.49, 35.58, 78.51],
          ],
          test_declaration_cs_name: [
            75.78, 59.74, 20.45, 79.45, 93.31, 10.4, 29.62, 93.21, 20.44, 75.68,
            10.77, 72.83, 22.41, 93.22, 89.65, 89.6,
          ],
          test_declaration_ct_name: [
            [
              77.65, 85.29, 72.04, 6.84, 84.57, 2.01, 67.38, 52.32, 30.17,
              72.75, 76.98, 86.85, 80.83, 48.82, 22.25, 89.52,
            ],
            [
              8.43, 15.15, 17.62, 28.91, 11.12, 18.72, 67.02, 77.16, 35.59,
              86.47, 24.14, 54.41, 34.19, 30.71, 9.56, 12.92,
            ],
          ],
          test_declaration_cu_name: [
            [
              2.65, 10.86, 91.47, 96.82, 25.79, 75.29, 66.41, 48.61, 87.84,
              51.37, 29.36, 68.75, 70.75, 95.96, 30.52, 98.14,
            ],
            [
              30.79, 17.21, 97.4, 75.76, 26.08, 82.06, 82.66, 39.83, 41.82, 1.3,
              86.61, 23.79, 16.44, 90.29, 25.1, 19.46,
            ],
            [
              70.41, 49.07, 28.22, 76.72, 2.21, 25.5, 34.6, 60.34, 68.5, 70.42,
              58.13, 90.35, 52.79, 92.27, 40.72, 52.33,
            ],
          ],
          test_declaration_cv_name: textureA,
          test_declaration_cw_name: [textureB, textureC],
          test_declaration_cx_name: [textureD, textureE, textureF],
          test_declaration_cy_name: textureG,
          test_declaration_cz_name: [textureH, textureI],
          test_declaration_da_name: [textureJ, textureK, textureL],
          test_declaration_db_name: textureM,
          test_declaration_dc_name: [textureN, textureO],
          test_declaration_dd_name: [textureP, textureQ, textureR],
          test_declaration_de_name: textureS,
          test_declaration_df_name: [textureT, textureU],
          test_declaration_dg_name: [textureV, textureW, textureX],
        };

      webGlRender(context, vertexBuffer, program, testWebGlUniformValueSet);
    });

    it(`uses one program`, () => {
      expect(useProgram).toHaveBeenCalledTimes(1);
    });

    it(`uses the program`, () => {
      expect(useProgram).toHaveBeenCalledWith({ test: `program` });
    });

    it(`binds one buffer`, () => {
      expect(bindBuffer).toHaveBeenCalledTimes(1);
    });

    it(`binds the vertex buffer`, () => {
      expect(bindBuffer).toHaveBeenCalledWith(WebGlConstants.ArrayBuffer, {
        test: `vertexBuffer`,
      });
    });

    it(`configures vertex attribute arrays of unnormalized unsigned byte floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        97,
        1,
        WebGlConstants.UnsignedByte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_aq_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned byte floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        86,
        1,
        WebGlConstants.UnsignedByte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_ar_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized unsigned byte vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        21,
        2,
        WebGlConstants.UnsignedByte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_as_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned byte vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        33,
        2,
        WebGlConstants.UnsignedByte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_at_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized unsigned byte vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        63,
        3,
        WebGlConstants.UnsignedByte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_au_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned byte vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        90,
        3,
        WebGlConstants.UnsignedByte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_av_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized unsigned byte vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        67,
        4,
        WebGlConstants.UnsignedByte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_aw_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned byte vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        48,
        4,
        WebGlConstants.UnsignedByte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_ax_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized unsigned short floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        49,
        1,
        WebGlConstants.UnsignedShort,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_ay_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned short floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        87,
        1,
        WebGlConstants.UnsignedShort,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_az_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized unsigned short vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        30,
        2,
        WebGlConstants.UnsignedShort,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_ba_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned short vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        14,
        2,
        WebGlConstants.UnsignedShort,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bb_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized unsigned short vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        78,
        3,
        WebGlConstants.UnsignedShort,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bc_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned short vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        45,
        3,
        WebGlConstants.UnsignedShort,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bd_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized unsigned short vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        43,
        4,
        WebGlConstants.UnsignedShort,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_be_name
      );
    });

    it(`configures vertex attribute arrays of normalized unsigned short vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        82,
        4,
        WebGlConstants.UnsignedShort,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bf_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized byte floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        29,
        1,
        WebGlConstants.Byte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bg_name
      );
    });

    it(`configures vertex attribute arrays of normalized byte floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        79,
        1,
        WebGlConstants.Byte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bh_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized byte vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        98,
        2,
        WebGlConstants.Byte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bi_name
      );
    });

    it(`configures vertex attribute arrays of normalized byte vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        58,
        2,
        WebGlConstants.Byte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bj_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized byte vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        96,
        3,
        WebGlConstants.Byte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bk_name
      );
    });

    it(`configures vertex attribute arrays of normalized byte vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        28,
        3,
        WebGlConstants.Byte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bl_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized byte vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        64,
        4,
        WebGlConstants.Byte,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bm_name
      );
    });

    it(`configures vertex attribute arrays of normalized byte vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        31,
        4,
        WebGlConstants.Byte,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bn_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized short floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        77,
        1,
        WebGlConstants.Short,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bo_name
      );
    });

    it(`configures vertex attribute arrays of normalized short floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        65,
        1,
        WebGlConstants.Short,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bp_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized short vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        37,
        2,
        WebGlConstants.Short,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bq_name
      );
    });

    it(`configures vertex attribute arrays of normalized short vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        72,
        2,
        WebGlConstants.Short,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_br_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized short vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        51,
        3,
        WebGlConstants.Short,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bs_name
      );
    });

    it(`configures vertex attribute arrays of normalized short vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        76,
        3,
        WebGlConstants.Short,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bt_name
      );
    });

    it(`configures vertex attribute arrays of unnormalized short vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        91,
        4,
        WebGlConstants.Short,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bu_name
      );
    });

    it(`configures vertex attribute arrays of normalized short vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        8,
        4,
        WebGlConstants.Short,
        true,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bv_name
      );
    });

    it(`configures vertex attribute arrays of float floats`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        95,
        1,
        WebGlConstants.Float,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bw_name
      );
    });

    it(`configures vertex attribute arrays of float vec2s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        59,
        2,
        WebGlConstants.Float,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bx_name
      );
    });

    it(`configures vertex attribute arrays of float vec3s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        18,
        3,
        WebGlConstants.Float,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_by_name
      );
    });

    it(`configures vertex attribute arrays of float vec4s`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledWith(
        46,
        4,
        WebGlConstants.Float,
        false,
        testPackedAttributeDefinitionSet.stride,
        testPackedAttributeDefinitionSet.offsets.test_declaration_bz_name
      );
    });

    it(`does not configure any further vertex attribute pointers`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledTimes(36);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned byte floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(97);
    });

    it(`enables vertex attribute arrays of normalized unsigned byte floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(86);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned byte vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(21);
    });

    it(`enables vertex attribute arrays of normalized unsigned byte vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(33);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned byte vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(63);
    });

    it(`enables vertex attribute arrays of normalized unsigned byte vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(90);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned byte vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(67);
    });

    it(`enables vertex attribute arrays of normalized unsigned byte vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(48);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned short floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(49);
    });

    it(`enables vertex attribute arrays of normalized unsigned short floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(87);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned short vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(30);
    });

    it(`enables vertex attribute arrays of normalized unsigned short vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(14);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned short vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(78);
    });

    it(`enables vertex attribute arrays of normalized unsigned short vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(45);
    });

    it(`enables vertex attribute arrays of unnormalized unsigned short vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(43);
    });

    it(`enables vertex attribute arrays of normalized unsigned short vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(82);
    });

    it(`enables vertex attribute arrays of unnormalized byte floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(29);
    });

    it(`enables vertex attribute arrays of normalized byte floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(79);
    });

    it(`enables vertex attribute arrays of unnormalized byte vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(98);
    });

    it(`enables vertex attribute arrays of normalized byte vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(58);
    });

    it(`enables vertex attribute arrays of unnormalized byte vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(96);
    });

    it(`enables vertex attribute arrays of normalized byte vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(28);
    });

    it(`enables vertex attribute arrays of unnormalized byte vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(64);
    });

    it(`enables vertex attribute arrays of normalized byte vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(31);
    });

    it(`enables vertex attribute arrays of unnormalized short floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(77);
    });

    it(`enables vertex attribute arrays of normalized short floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(65);
    });

    it(`enables vertex attribute arrays of unnormalized short vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(37);
    });

    it(`enables vertex attribute arrays of normalized short vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(72);
    });

    it(`enables vertex attribute arrays of unnormalized short vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(51);
    });

    it(`enables vertex attribute arrays of normalized short vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(76);
    });

    it(`enables vertex attribute arrays of unnormalized short vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(91);
    });

    it(`enables vertex attribute arrays of normalized short vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(8);
    });

    it(`enables vertex attribute arrays of float floats`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(95);
    });

    it(`enables vertex attribute arrays of float vec2s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(59);
    });

    it(`enables vertex attribute arrays of float vec3s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(18);
    });

    it(`enables vertex attribute arrays of float vec4s`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledWith(46);
    });

    it(`does not enable any further vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledTimes(36);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned byte floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(97);
    });

    it(`disables vertex attribute arrays of normalized unsigned byte floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(86);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned byte vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(21);
    });

    it(`disables vertex attribute arrays of normalized unsigned byte vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(33);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned byte vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(63);
    });

    it(`disables vertex attribute arrays of normalized unsigned byte vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(90);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned byte vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(67);
    });

    it(`disables vertex attribute arrays of normalized unsigned byte vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(48);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned short floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(49);
    });

    it(`disables vertex attribute arrays of normalized unsigned short floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(87);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned short vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(30);
    });

    it(`disables vertex attribute arrays of normalized unsigned short vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(14);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned short vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(78);
    });

    it(`disables vertex attribute arrays of normalized unsigned short vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(45);
    });

    it(`disables vertex attribute arrays of unnormalized unsigned short vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(43);
    });

    it(`disables vertex attribute arrays of normalized unsigned short vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(82);
    });

    it(`disables vertex attribute arrays of unnormalized byte floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(29);
    });

    it(`disables vertex attribute arrays of normalized byte floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(79);
    });

    it(`disables vertex attribute arrays of unnormalized byte vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(98);
    });

    it(`disables vertex attribute arrays of normalized byte vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(58);
    });

    it(`disables vertex attribute arrays of unnormalized byte vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(96);
    });

    it(`disables vertex attribute arrays of normalized byte vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(28);
    });

    it(`disables vertex attribute arrays of unnormalized byte vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(64);
    });

    it(`disables vertex attribute arrays of normalized byte vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(31);
    });

    it(`disables vertex attribute arrays of unnormalized short floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(77);
    });

    it(`disables vertex attribute arrays of normalized short floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(65);
    });

    it(`disables vertex attribute arrays of unnormalized short vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(37);
    });

    it(`disables vertex attribute arrays of normalized short vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(72);
    });

    it(`disables vertex attribute arrays of unnormalized short vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(51);
    });

    it(`disables vertex attribute arrays of normalized short vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(76);
    });

    it(`disables vertex attribute arrays of unnormalized short vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(91);
    });

    it(`disables vertex attribute arrays of normalized short vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(8);
    });

    it(`disables vertex attribute arrays of float floats`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(95);
    });

    it(`disables vertex attribute arrays of float vec2s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(59);
    });

    it(`disables vertex attribute arrays of float vec3s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(18);
    });

    it(`disables vertex attribute arrays of float vec4s`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledWith(46);
    });

    it(`does not disable any further vertex attribute arrays`, () => {
      expect(disableVertexAttribArray).toHaveBeenCalledTimes(36);
    });

    it(`draws one set of arrays`, () => {
      expect(drawArrays).toHaveBeenCalledTimes(1);
    });

    it(`draws the expected arrays`, () => {
      expect(drawArrays).toHaveBeenCalledWith(WebGlConstants.LineStrip, 0, 152);
    });

    it(`sets 1-dimensional float uniforms`, () => {
      expect(uniform1f).toHaveBeenCalledWith(
        { test: `uniform location v` },
        80.88
      );
    });

    it(`does not set any further 1-dimensional float uniforms`, () => {
      expect(uniform1f).toHaveBeenCalledTimes(1);
    });

    it(`sets 1-dimensional float uniform arrays with 2 items`, () => {
      expect(uniform1fv).toHaveBeenCalledWith(
        { test: `uniform location w` },
        [74.46, 45.63]
      );
    });

    it(`sets 1-dimensional float uniform arrays with 3 items`, () => {
      expect(uniform1fv).toHaveBeenCalledWith(
        { test: `uniform location x` },
        [7.32, 79.64, 57.38]
      );
    });

    it(`does not set any further 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).toHaveBeenCalledTimes(2);
    });

    it(`sets 2-dimensional float uniforms`, () => {
      expect(uniform2f).toHaveBeenCalledWith(
        { test: `uniform location y` },
        53.16,
        67.0
      );
    });

    it(`does not set any further 2-dimensional float uniforms`, () => {
      expect(uniform2f).toHaveBeenCalledTimes(1);
    });

    it(`sets 2-dimensional float uniform arrays with 2 items`, () => {
      expect(uniform2fv).toHaveBeenCalledWith(
        { test: `uniform location z` },
        [69.38, 59.46, 88.4, 52.69]
      );
    });

    it(`sets 2-dimensional float uniform arrays with 3 items`, () => {
      expect(uniform2fv).toHaveBeenCalledWith(
        { test: `uniform location aa` },
        [96.34, 8.59, 64.53, 19.44, 52.23, 2.29]
      );
    });

    it(`does not set any further 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).toHaveBeenCalledTimes(2);
    });

    it(`sets 3-dimensional float uniforms`, () => {
      expect(uniform3f).toHaveBeenCalledWith(
        { test: `uniform location ab` },
        29.33,
        69.48,
        48.01
      );
    });

    it(`does not set any further 3-dimensional float uniforms`, () => {
      expect(uniform3f).toHaveBeenCalledTimes(1);
    });

    it(`sets 3-dimensional float uniform arrays with 2 items`, () => {
      expect(uniform3fv).toHaveBeenCalledWith(
        { test: `uniform location ac` },
        [29.18, 37.8, 22.43, 13.05, 16.26, 66.49]
      );
    });

    it(`sets 3-dimensional float uniform arrays with 3 items`, () => {
      expect(uniform3fv).toHaveBeenCalledWith(
        { test: `uniform location ad` },
        [89.54, 34.26, 60.78, 74.37, 38.17, 95.98, 81.92, 72.0, 98.23]
      );
    });

    it(`does not set any further 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).toHaveBeenCalledTimes(2);
    });

    it(`sets 4-dimensional float uniforms`, () => {
      expect(uniform4f).toHaveBeenCalledWith(
        { test: `uniform location ae` },
        89.22,
        56.22,
        94.14,
        15.71
      );
    });

    it(`does not set any further 4-dimensional float uniforms`, () => {
      expect(uniform4f).toHaveBeenCalledTimes(1);
    });

    it(`sets 4-dimensional float uniform arrays with 2 items`, () => {
      expect(uniform4fv).toHaveBeenCalledWith(
        { test: `uniform location af` },
        [26.14, 35.6, 81.98, 60.8, 75.88, 54.15, 30.12, 61.94]
      );
    });

    it(`sets 4-dimensional float uniform arrays with 3 items`, () => {
      expect(uniform4fv).toHaveBeenCalledWith(
        { test: `uniform location ag` },
        [
          25.64, 93.22, 79.48, 44.83, 88.44, 93.56, 74.77, 36.74, 14.81, 20.33,
          98.54, 29.11,
        ]
      );
    });

    it(`does not set any further 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).toHaveBeenCalledTimes(2);
    });

    it(`sets 2-dimensional matrix uniform arrays with 1 item`, () => {
      expect(uniformMatrix2fv).toHaveBeenCalledWith(
        { test: `uniform location ah` },
        false,
        [91.89, 11.86, 14.41, 3.61]
      );
    });

    it(`sets 2-dimensional matrix uniform arrays with 2 items`, () => {
      expect(uniformMatrix2fv).toHaveBeenCalledWith(
        { test: `uniform location ai` },
        false,
        [21.79, 5.22, 52.31, 60.4, 95.34, 83.04, 32.35, 23.95]
      );
    });

    it(`sets 2-dimensional matrix uniform arrays with 3 items`, () => {
      expect(uniformMatrix2fv).toHaveBeenCalledWith(
        { test: `uniform location aj` },
        false,
        [
          97.69, 30.2, 95.86, 50.62, 52.39, 47.8, 0.76, 2.67, 31.8, 53.44,
          77.05, 56.28,
        ]
      );
    });

    it(`does not set any further 2-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix2fv).toHaveBeenCalledTimes(3);
    });

    it(`sets 3-dimensional matrix uniform arrays with 1 item`, () => {
      expect(uniformMatrix3fv).toHaveBeenCalledWith(
        { test: `uniform location ak` },
        false,
        [84.99, 94.72, 57.71, 73.36, 91.9, 80.21, 18.59, 69.0, 87.94]
      );
    });

    it(`sets 3-dimensional matrix uniform arrays with 2 items`, () => {
      expect(uniformMatrix3fv).toHaveBeenCalledWith(
        { test: `uniform location al` },
        false,
        [
          22.04, 80.55, 12.91, 62.73, 33.93, 92.63, 78.2, 23.42, 95.37, 74.88,
          65.18, 94.15, 64.91, 92.4, 82.59, 12.36, 99.47, 65.18,
        ]
      );
    });

    it(`sets 3-dimensional matrix uniform arrays with 3 items`, () => {
      expect(uniformMatrix3fv).toHaveBeenCalledWith(
        { test: `uniform location am` },
        false,
        [
          87.31, 93.78, 7.5, 37.87, 36.94, 79.96, 68.58, 92.42, 64.74, 2.55,
          56.07, 77.58, 80.11, 36.23, 43.49, 56.9, 25.9, 27.23, 49.99, 72.83,
          16.67, 54.91, 41.44, 77.78, 78.37, 62.2, 3.79,
        ]
      );
    });

    it(`does not set any further 3-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix3fv).toHaveBeenCalledTimes(3);
    });

    it(`sets 4-dimensional matrix uniform arrays with 1 item`, () => {
      expect(uniformMatrix4fv).toHaveBeenCalledWith(
        { test: `uniform location an` },
        false,
        [
          4.59, 13.19, 74.26, 38.1, 9.12, 13.25, 77.1, 94.92, 46.63, 72.91,
          92.65, 53.35, 21.91, 10.99, 34.37, 21.7,
        ]
      );
    });

    it(`sets 4-dimensional matrix uniform arrays with 2 items`, () => {
      expect(uniformMatrix4fv).toHaveBeenCalledWith(
        { test: `uniform location ao` },
        false,
        [
          9.79, 40.97, 59.78, 60.46, 45.47, 33.19, 78.0, 57.51, 6.21, 67.75,
          11.97, 62.85, 77.82, 78.74, 20.86, 52.64, 82.62, 74.35, 32.51, 55.03,
          64.4, 49.92, 83.82, 38.8, 21.23, 66.44, 74.28, 83.3, 89.27, 9.62,
          91.5, 80.73,
        ]
      );
    });

    it(`sets 4-dimensional matrix uniform arrays with 3 items`, () => {
      expect(uniformMatrix4fv).toHaveBeenCalledWith(
        { test: `uniform location ap` },
        false,
        [
          66.55, 23.69, 86.69, 52.51, 1.34, 0.43, 60.44, 77.03, 39.74, 28.57,
          31.91, 82.82, 54.86, 78.88, 19.44, 84.92, 20.6, 98.88, 61.55, 4.45,
          55.58, 33.8, 6.76, 66.36, 94.97, 72.23, 66.22, 29.22, 6.84, 17.67,
          85.12, 78.08, 76.28, 36.49, 93.87, 13.51, 70.97, 78.81, 96.9, 82.51,
          11.19, 61.17, 99.24, 39.82, 50.69, 65.68, 75.27, 19.76,
        ]
      );
    });

    it(`does not set any further 4-dimensional matrix uniform arrays`, () => {
      expect(uniformMatrix4fv).toHaveBeenCalledTimes(3);
    });

    it(`sets 1-dimensional integer uniforms for 2D textures`, () => {
      expect(uniform1i).toHaveBeenCalledWith(
        {
          test: `uniform location db`,
        },
        6
      );
    });

    it(`sets 1-dimensional integer uniforms for cubic textures`, () => {
      expect(uniform1i).toHaveBeenCalledWith(
        {
          test: `uniform location de`,
        },
        3
      );
    });

    it(`does not set any further 1-dimensional integer uniforms`, () => {
      expect(uniform1i).toHaveBeenCalledTimes(2);
    });

    it(`sets 1-dimensional integer uniform arrays for 2D textures`, () => {
      expect(uniform1iv).toHaveBeenCalledWith(
        {
          test: `uniform location cx`,
        },
        [4, 1, 5]
      );
    });

    it(`sets 1-dimensional integer uniform arrays for cubic textures`, () => {
      expect(uniform1iv).toHaveBeenCalledWith(
        {
          test: `uniform location da`,
        },
        [0, 2, 7]
      );
    });

    it(`does not set any further 1-dimensional integer uniform arrays`, () => {
      expect(uniform1iv).toHaveBeenCalledTimes(2);
    });

    it(`does not bind or unbind any further textures`, () => {
      expect(bindTexture).toHaveBeenCalledTimes(16);
    });

    it(`binds textures before rendering, then unbinds after rendering`, () => {
      expect(textureCallOrder).toEqual([
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture4,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: {
            test: `textureInstanceD`,
          },
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture1,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: {
            test: `textureInstanceE`,
          },
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture5,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: {
            test: `textureInstanceF`,
          },
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture0,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: {
            test: `textureInstanceJ`,
          },
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture2,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: {
            test: `textureInstanceK`,
          },
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture7,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: {
            test: `textureInstanceL`,
          },
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture6,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: {
            test: `textureInstanceM`,
          },
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture3,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: {
            test: `textureInstanceS`,
          },
        },
        {
          type: `drawArrays`,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture4,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: null,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture1,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: null,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture5,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: null,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture0,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: null,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture2,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: null,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture7,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: null,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture6,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.Texture2D,
          texture: null,
        },
        {
          type: `activeTexture`,
          slot: WebGlConstants.Texture3,
        },
        {
          type: `bindTexture`,
          target: WebGlConstants.TextureCubeMap,
          texture: null,
        },
      ]);
    });

    it(`does not render`, () => {
      expect(contextRender).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer has been disposed of`, () => {
      expect(vertexBufferThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the vertex buffer is from another context`, () => {
      expect(vertexBufferThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`gets one instance of the vertex buffer`, () => {
      expect(vertexBufferGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`does not check whether the program has been disposed of`, () => {
      expect(programThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether the program is from another context`, () => {
      expect(programThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`gets one instance of the program`, () => {
      expect(programGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`gets one instance of each configured texture`, () => {
      expect(textureDGetInstance).toHaveBeenCalledTimes(1);
      expect(textureEGetInstance).toHaveBeenCalledTimes(1);
      expect(textureFGetInstance).toHaveBeenCalledTimes(1);
      expect(textureJGetInstance).toHaveBeenCalledTimes(1);
      expect(textureKGetInstance).toHaveBeenCalledTimes(1);
      expect(textureLGetInstance).toHaveBeenCalledTimes(1);
      expect(textureMGetInstance).toHaveBeenCalledTimes(1);
      expect(textureSGetInstance).toHaveBeenCalledTimes(1);
    });

    it(`does not get instances of any other textures`, () => {
      expect(textureAGetInstance).not.toHaveBeenCalled();
      expect(textureBGetInstance).not.toHaveBeenCalled();
      expect(textureCGetInstance).not.toHaveBeenCalled();
      expect(textureGGetInstance).not.toHaveBeenCalled();
      expect(textureHGetInstance).not.toHaveBeenCalled();
      expect(textureIGetInstance).not.toHaveBeenCalled();
      expect(textureNGetInstance).not.toHaveBeenCalled();
      expect(textureOGetInstance).not.toHaveBeenCalled();
      expect(texturePGetInstance).not.toHaveBeenCalled();
      expect(textureQGetInstance).not.toHaveBeenCalled();
      expect(textureRGetInstance).not.toHaveBeenCalled();
      expect(textureTGetInstance).not.toHaveBeenCalled();
      expect(textureUGetInstance).not.toHaveBeenCalled();
      expect(textureVGetInstance).not.toHaveBeenCalled();
      expect(textureWGetInstance).not.toHaveBeenCalled();
      expect(textureXGetInstance).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are disposed`, () => {
      expect(textureAThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureBThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureCThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureDThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureEThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureFThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureGThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureHThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureIThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureJThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureKThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureLThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureMThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureNThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureOThrowIfDisposed).not.toHaveBeenCalled();
      expect(texturePThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureQThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureRThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureSThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureTThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureUThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureVThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureWThrowIfDisposed).not.toHaveBeenCalled();
      expect(textureXThrowIfDisposed).not.toHaveBeenCalled();
    });

    it(`does not check whether any textures are from another context`, () => {
      expect(textureAThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureBThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureCThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureDThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureEThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureFThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureGThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureHThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureIThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureJThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureKThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureLThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureMThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureNThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureOThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(texturePThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureQThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureRThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureSThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureTThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureUThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureVThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureWThrowIfFromAnotherContext).not.toHaveBeenCalled();
      expect(textureXThrowIfFromAnotherContext).not.toHaveBeenCalled();
    });

    it(`enables vertex attribute arrays after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(enableVertexAttribArray);
    });

    it(`enables vertex attribute arrays after binding buffers`, () => {
      expect(bindBuffer).toHaveBeenCalledBefore(enableVertexAttribArray);
    });

    it(`sets vertex attribute pointers after enabling vertex attribute arrays`, () => {
      expect(enableVertexAttribArray).toHaveBeenCalledBefore(
        vertexAttribPointer
      );
    });

    it(`draws arrays after setting vertex attribute pointers`, () => {
      expect(vertexAttribPointer).toHaveBeenCalledBefore(drawArrays);
    });

    it(`sets 1-dimensional float uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform1f);
    });

    it(`sets 1-dimensional float uniform arrays after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform1fv);
    });

    it(`sets 2-dimensional float uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform2f);
    });

    it(`sets 2-dimensional float uniform arrays after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform2fv);
    });

    it(`sets 3-dimensional float uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform3f);
    });

    it(`sets 3-dimensional float uniform arrays after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform3fv);
    });

    it(`sets 4-dimensional float uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform4f);
    });

    it(`sets 4-dimensional float uniform arrays after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform4fv);
    });

    it(`sets 2-dimensional matrix uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniformMatrix2fv);
    });

    it(`sets 3-dimensional matrix uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniformMatrix3fv);
    });

    it(`sets 4-dimensional matrix uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniformMatrix4fv);
    });

    it(`sets 1-dimensional integer uniforms after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform1i);
    });

    it(`sets 1-dimensional integer uniform arrays after using programs`, () => {
      expect(useProgram).toHaveBeenCalledBefore(uniform1iv);
    });

    it(`draws arrays after setting 1-dimensional float uniforms`, () => {
      expect(uniform1f).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 1-dimensional float uniform arrays`, () => {
      expect(uniform1fv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 2-dimensional float uniforms`, () => {
      expect(uniform2f).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 2-dimensional float uniform arrays`, () => {
      expect(uniform2fv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 3-dimensional float uniforms`, () => {
      expect(uniform3f).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 3-dimensional float uniform arrays`, () => {
      expect(uniform3fv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 4-dimensional float uniforms`, () => {
      expect(uniform4f).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 4-dimensional float uniform arrays`, () => {
      expect(uniform4fv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 2-dimensional matrix uniforms`, () => {
      expect(uniformMatrix2fv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 3-dimensional matrix uniforms`, () => {
      expect(uniformMatrix3fv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 4-dimensional matrix uniforms`, () => {
      expect(uniformMatrix4fv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 1-dimensional integer uniforms`, () => {
      expect(uniform1i).toHaveBeenCalledBefore(drawArrays);
    });

    it(`draws arrays after setting 1-dimensional integer uniforms`, () => {
      expect(uniform1iv).toHaveBeenCalledBefore(drawArrays);
    });

    it(`disables vertex attribute arrays after drawing arrays`, () => {
      expect(drawArrays).toHaveBeenCalledBefore(disableVertexAttribArray);
    });
  });
});
