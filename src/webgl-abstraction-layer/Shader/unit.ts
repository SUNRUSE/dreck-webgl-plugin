import { Constants, ContextInterface, Shader } from "../..";

describe(`Shader`, () => {
  const declarations = [
    {
      type: `varying`,
      primitive: Constants.Float,
      name: `test_declaration_a_name`,
      quantity: 1,
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
      type: `attribute`,
      primitive: Constants.Float,
      name: `test_declaration_aq_name`,
    },
    {
      type: `attribute`,
      primitive: Constants.Vec2,
      name: `test_declaration_ar_name`,
    },
    {
      type: `attribute`,
      primitive: Constants.Vec3,
      name: `test_declaration_as_name`,
    },
    {
      type: `attribute`,
      primitive: Constants.Vec4,
      name: `test_declaration_at_name`,
    },
  ];

  describe(`on construction`, () => {
    let createShader: jasmine.Spy;
    let shaderSource: jasmine.Spy;
    let compileShader: jasmine.Spy;
    let getShaderParameter: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let getShaderInfoLog: jasmine.Spy;
    let deleteShader: jasmine.Spy;
    let getHeaderLines: jasmine.Spy;
    let getDeclarations: jasmine.Spy;
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

    class TestShader extends Shader<Constants.FragmentShader> {
      getHeaderLines() {
        return getHeaderLines();
      }

      getDeclarations() {
        return getDeclarations();
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
      getDeclarations = jasmine.createSpy(`getDeclarations`);
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

      shader = new TestShader(context, Constants.FragmentShader);
    });

    it(`exposes the context`, () => {
      expect(shader.context).toBe(context);
    });

    it(`exposes the type`, () => {
      expect(shader.type).toEqual(Constants.FragmentShader);
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

    it(`does not get declarations`, () => {
      expect(getDeclarations).not.toHaveBeenCalled();
    });

    it(`does not get body lines`, () => {
      expect(getBodyLines).not.toHaveBeenCalled();
    });
  });

  describe(`on creating an instance`, () => {
    describe(`when creating the shader fails`, () => {
      let createShader: jasmine.Spy;
      let shaderSource: jasmine.Spy;
      let compileShader: jasmine.Spy;
      let getShaderParameter: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let getShaderInfoLog: jasmine.Spy;
      let deleteShader: jasmine.Spy;
      let getHeaderLines: jasmine.Spy;
      let getDeclarations: jasmine.Spy;
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

      class TestShader extends Shader<Constants.FragmentShader> {
        getHeaderLines() {
          return getHeaderLines();
        }

        getDeclarations() {
          return getDeclarations();
        }

        getBodyLines() {
          return getBodyLines();
        }
      }

      let shader: TestShader;

      let result: null | WebGLShader;

      beforeAll(() => {
        createShader = jasmine.createSpy(`createShader`).and.returnValue(null);
        shaderSource = jasmine.createSpy(`shaderSource`);
        compileShader = jasmine.createSpy(`compileShader`);
        getShaderParameter = jasmine.createSpy(`getShaderParameter`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
        deleteShader = jasmine.createSpy(`deleteShader`);
        getHeaderLines = jasmine.createSpy(`getHeaderLines`);
        getDeclarations = jasmine.createSpy(`getDeclarations`);
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

        shader = new TestShader(context, Constants.FragmentShader);

        result = shader.createInstance();
      });

      it(`exposes the context`, () => {
        expect(shader.context).toBe(context);
      });

      it(`exposes the type`, () => {
        expect(shader.type).toEqual(Constants.FragmentShader);
      });

      it(`creates one shader`, () => {
        expect(createShader).toHaveBeenCalledTimes(1);
      });

      it(`creates a shader of the expected type`, () => {
        expect(createShader).toHaveBeenCalledWith(Constants.FragmentShader);
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

      it(`does not get declarations`, () => {
        expect(getDeclarations).not.toHaveBeenCalled();
      });

      it(`does not get body lines`, () => {
        expect(getBodyLines).not.toHaveBeenCalled();
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`when compiling the shader fails due to context loss`, () => {
      let createShader: jasmine.Spy;
      let shaderSource: jasmine.Spy;
      let compileShader: jasmine.Spy;
      let getShaderParameter: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let getShaderInfoLog: jasmine.Spy;
      let deleteShader: jasmine.Spy;
      let getHeaderLines: jasmine.Spy;
      let getDeclarations: jasmine.Spy;
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

      class TestShader extends Shader<Constants.FragmentShader> {
        getHeaderLines() {
          return getHeaderLines();
        }

        getDeclarations() {
          return getDeclarations();
        }

        getBodyLines() {
          return getBodyLines();
        }
      }

      let shader: TestShader;

      let result: null | WebGLShader;

      beforeAll(() => {
        createShader = jasmine
          .createSpy(`createShader`)
          .and.returnValue({ test: `shader` });
        shaderSource = jasmine.createSpy(`shaderSource`);
        compileShader = jasmine.createSpy(`compileShader`);
        getShaderParameter = jasmine
          .createSpy(`getShaderParameter`)
          .and.returnValue(false);
        isContextLost = jasmine
          .createSpy(`isContextLost`)
          .and.returnValue(true);
        getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
        deleteShader = jasmine.createSpy(`deleteShader`);
        getHeaderLines = jasmine
          .createSpy(`getHeaderLines`)
          .and.returnValue([
            `Test Header Line A`,
            `Test Header Line B`,
            `Test Header Line C`,
          ]);
        getDeclarations = jasmine
          .createSpy(`getDeclarations`)
          .and.returnValue(declarations);
        getBodyLines = jasmine
          .createSpy(`getBodyLines`)
          .and.returnValue([
            `Test Body Line A`,
            `Test Body Line B`,
            `Test Body Line C`,
            `Test Body Line D`,
            `Test Body Line E`,
          ]);

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

        shader = new TestShader(context, Constants.FragmentShader);

        result = shader.createInstance();
      });

      it(`exposes the context`, () => {
        expect(shader.context).toBe(context);
      });

      it(`exposes the type`, () => {
        expect(shader.type).toEqual(Constants.FragmentShader);
      });

      it(`creates one shader`, () => {
        expect(createShader).toHaveBeenCalledTimes(1);
      });

      it(`creates a shader of the expected type`, () => {
        expect(createShader).toHaveBeenCalledWith(Constants.FragmentShader);
      });

      it(`adds source to one shader`, () => {
        expect(shaderSource).toHaveBeenCalledTimes(1);
      });

      it(`adds the expected source to the created shader`, () => {
        expect(shaderSource).toHaveBeenCalledWith(
          { test: `shader` },
          `Test Header Line A
Test Header Line B
Test Header Line C
varying float test_declaration_a_name;
varying float test_declaration_b_name[2];
varying float test_declaration_c_name[3];
varying vec2 test_declaration_d_name;
varying vec2 test_declaration_e_name[2];
varying vec2 test_declaration_f_name[3];
varying vec3 test_declaration_g_name;
varying vec3 test_declaration_h_name[2];
varying vec3 test_declaration_i_name[3];
varying vec4 test_declaration_j_name;
varying vec4 test_declaration_k_name[2];
varying vec4 test_declaration_l_name[3];
varying mat2 test_declaration_m_name;
varying mat2 test_declaration_n_name[2];
varying mat2 test_declaration_o_name[3];
varying mat3 test_declaration_p_name;
varying mat3 test_declaration_q_name[2];
varying mat3 test_declaration_r_name[3];
varying mat4 test_declaration_s_name;
varying mat4 test_declaration_t_name[2];
varying mat4 test_declaration_u_name[3];
uniform float test_declaration_v_name;
uniform float test_declaration_w_name[2];
uniform float test_declaration_x_name[3];
uniform vec2 test_declaration_y_name;
uniform vec2 test_declaration_z_name[2];
uniform vec2 test_declaration_aa_name[3];
uniform vec3 test_declaration_ab_name;
uniform vec3 test_declaration_ac_name[2];
uniform vec3 test_declaration_ad_name[3];
uniform vec4 test_declaration_ae_name;
uniform vec4 test_declaration_af_name[2];
uniform vec4 test_declaration_ag_name[3];
uniform mat2 test_declaration_ah_name;
uniform mat2 test_declaration_ai_name[2];
uniform mat2 test_declaration_aj_name[3];
uniform mat3 test_declaration_ak_name;
uniform mat3 test_declaration_al_name[2];
uniform mat3 test_declaration_am_name[3];
uniform mat4 test_declaration_an_name;
uniform mat4 test_declaration_ao_name[2];
uniform mat4 test_declaration_ap_name[3];
attribute float test_declaration_aq_name;
attribute vec2 test_declaration_ar_name;
attribute vec3 test_declaration_as_name;
attribute vec4 test_declaration_at_name;
Test Body Line A
Test Body Line B
Test Body Line C
Test Body Line D
Test Body Line E`
        );
      });

      it(`compiles one shader`, () => {
        expect(compileShader).toHaveBeenCalledTimes(1);
      });

      it(`compiles the created shader`, () => {
        expect(compileShader).toHaveBeenCalledWith({ test: `shader` });
      });

      it(`gets one shader parameter`, () => {
        expect(getShaderParameter).toHaveBeenCalledTimes(1);
      });

      it(`gets the shader compilation status`, () => {
        expect(getShaderParameter).toHaveBeenCalledWith(
          { test: `shader` },
          Constants.CompileStatus
        );
      });

      it(`checks for context loss once`, () => {
        expect(isContextLost).toHaveBeenCalledTimes(1);
      });

      it(`does not retrieve any shader info logs`, () => {
        expect(getShaderInfoLog).not.toHaveBeenCalled();
      });

      it(`does not delete any shaders`, () => {
        expect(deleteShader).not.toHaveBeenCalled();
      });

      it(`compiles the shader after providing source`, () => {
        expect(shaderSource).toHaveBeenCalledBefore(compileShader);
      });

      it(`checks shader compilation status after compiling the shader`, () => {
        expect(compileShader).toHaveBeenCalledBefore(getShaderParameter);
      });

      it(`checks for context loss after checking compilation status`, () => {
        expect(getShaderParameter).toHaveBeenCalledBefore(isContextLost);
      });

      it(`gets one set of header lines`, () => {
        expect(getHeaderLines).toHaveBeenCalledTimes(1);
      });

      it(`gets one set of declarations`, () => {
        expect(getDeclarations).toHaveBeenCalledTimes(1);
      });

      it(`gets one set of body lines`, () => {
        expect(getBodyLines).toHaveBeenCalledTimes(1);
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`when compiling the shader fails for reasons other than context loss`, () => {
      let createShader: jasmine.Spy;
      let shaderSource: jasmine.Spy;
      let compileShader: jasmine.Spy;
      let getShaderParameter: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let getShaderInfoLog: jasmine.Spy;
      let deleteShader: jasmine.Spy;
      let getHeaderLines: jasmine.Spy;
      let getDeclarations: jasmine.Spy;
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

      class TestShader extends Shader<Constants.FragmentShader> {
        getHeaderLines() {
          return getHeaderLines();
        }

        getDeclarations() {
          return getDeclarations();
        }

        getBodyLines() {
          return getBodyLines();
        }
      }

      let shader: TestShader;

      let error: unknown;

      beforeAll(() => {
        createShader = jasmine
          .createSpy(`createShader`)
          .and.returnValue({ test: `shader` });
        shaderSource = jasmine.createSpy(`shaderSource`);
        compileShader = jasmine.createSpy(`compileShader`);
        getShaderParameter = jasmine
          .createSpy(`getShaderParameter`)
          .and.returnValue(false);
        isContextLost = jasmine
          .createSpy(`isContextLost`)
          .and.returnValue(false);
        getShaderInfoLog = jasmine
          .createSpy(`getShaderInfoLog`)
          .and.returnValue(`Test Shader Info Log`);
        deleteShader = jasmine.createSpy(`deleteShader`);
        getHeaderLines = jasmine
          .createSpy(`getHeaderLines`)
          .and.returnValue([
            `Test Header Line A`,
            `Test Header Line B`,
            `Test Header Line C`,
          ]);
        getDeclarations = jasmine
          .createSpy(`getDeclarations`)
          .and.returnValue(declarations);
        getBodyLines = jasmine
          .createSpy(`getBodyLines`)
          .and.returnValue([
            `Test Body Line A`,
            `Test Body Line B`,
            `Test Body Line C`,
            `Test Body Line D`,
            `Test Body Line E`,
          ]);

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

        shader = new TestShader(context, Constants.FragmentShader);

        try {
          shader.createInstance();
          error = null;
        } catch (e) {
          error = e;
        }
      });

      it(`exposes the context`, () => {
        expect(shader.context).toBe(context);
      });

      it(`exposes the type`, () => {
        expect(shader.type).toEqual(Constants.FragmentShader);
      });

      it(`creates one shader`, () => {
        expect(createShader).toHaveBeenCalledTimes(1);
      });

      it(`creates a shader of the expected type`, () => {
        expect(createShader).toHaveBeenCalledWith(Constants.FragmentShader);
      });

      it(`adds source to one shader`, () => {
        expect(shaderSource).toHaveBeenCalledTimes(1);
      });

      it(`adds the expected source to the created shader`, () => {
        expect(shaderSource).toHaveBeenCalledWith(
          { test: `shader` },
          `Test Header Line A
Test Header Line B
Test Header Line C
varying float test_declaration_a_name;
varying float test_declaration_b_name[2];
varying float test_declaration_c_name[3];
varying vec2 test_declaration_d_name;
varying vec2 test_declaration_e_name[2];
varying vec2 test_declaration_f_name[3];
varying vec3 test_declaration_g_name;
varying vec3 test_declaration_h_name[2];
varying vec3 test_declaration_i_name[3];
varying vec4 test_declaration_j_name;
varying vec4 test_declaration_k_name[2];
varying vec4 test_declaration_l_name[3];
varying mat2 test_declaration_m_name;
varying mat2 test_declaration_n_name[2];
varying mat2 test_declaration_o_name[3];
varying mat3 test_declaration_p_name;
varying mat3 test_declaration_q_name[2];
varying mat3 test_declaration_r_name[3];
varying mat4 test_declaration_s_name;
varying mat4 test_declaration_t_name[2];
varying mat4 test_declaration_u_name[3];
uniform float test_declaration_v_name;
uniform float test_declaration_w_name[2];
uniform float test_declaration_x_name[3];
uniform vec2 test_declaration_y_name;
uniform vec2 test_declaration_z_name[2];
uniform vec2 test_declaration_aa_name[3];
uniform vec3 test_declaration_ab_name;
uniform vec3 test_declaration_ac_name[2];
uniform vec3 test_declaration_ad_name[3];
uniform vec4 test_declaration_ae_name;
uniform vec4 test_declaration_af_name[2];
uniform vec4 test_declaration_ag_name[3];
uniform mat2 test_declaration_ah_name;
uniform mat2 test_declaration_ai_name[2];
uniform mat2 test_declaration_aj_name[3];
uniform mat3 test_declaration_ak_name;
uniform mat3 test_declaration_al_name[2];
uniform mat3 test_declaration_am_name[3];
uniform mat4 test_declaration_an_name;
uniform mat4 test_declaration_ao_name[2];
uniform mat4 test_declaration_ap_name[3];
attribute float test_declaration_aq_name;
attribute vec2 test_declaration_ar_name;
attribute vec3 test_declaration_as_name;
attribute vec4 test_declaration_at_name;
Test Body Line A
Test Body Line B
Test Body Line C
Test Body Line D
Test Body Line E`
        );
      });

      it(`compiles one shader`, () => {
        expect(compileShader).toHaveBeenCalledTimes(1);
      });

      it(`compiles the created shader`, () => {
        expect(compileShader).toHaveBeenCalledWith({ test: `shader` });
      });

      it(`gets one shader parameter`, () => {
        expect(getShaderParameter).toHaveBeenCalledTimes(1);
      });

      it(`gets the shader compilation status`, () => {
        expect(getShaderParameter).toHaveBeenCalledWith(
          { test: `shader` },
          Constants.CompileStatus
        );
      });

      it(`checks for context loss once`, () => {
        expect(isContextLost).toHaveBeenCalledTimes(1);
      });

      it(`retrieves one shader's info log`, () => {
        expect(getShaderInfoLog).toHaveBeenCalledTimes(1);
      });

      it(`deletes one shader`, () => {
        expect(deleteShader).toHaveBeenCalledTimes(1);
      });

      it(`deletes the created shader`, () => {
        expect(deleteShader).toHaveBeenCalledWith({ test: `shader` });
      });

      it(`compiles the shader after providing source`, () => {
        expect(shaderSource).toHaveBeenCalledBefore(compileShader);
      });

      it(`checks shader compilation status after compiling the shader`, () => {
        expect(compileShader).toHaveBeenCalledBefore(getShaderParameter);
      });

      it(`checks for context loss after checking compilation status`, () => {
        expect(getShaderParameter).toHaveBeenCalledBefore(isContextLost);
      });

      it(`retrieves the shader's info log after checking for context loss`, () => {
        expect(isContextLost).toHaveBeenCalledBefore(getShaderInfoLog);
      });

      it(`deletes the shader after getting its info log`, () => {
        expect(getShaderInfoLog).toHaveBeenCalledBefore(deleteShader);
      });

      it(`gets one set of header lines`, () => {
        expect(getHeaderLines).toHaveBeenCalledTimes(1);
      });

      it(`gets one set of declarations`, () => {
        expect(getDeclarations).toHaveBeenCalledTimes(1);
      });

      it(`gets one set of body lines`, () => {
        expect(getBodyLines).toHaveBeenCalledTimes(1);
      });

      it(`throws the expected error`, () => {
        expect(error).toEqual(
          new Error(`Failed to compile a WebGL shader: "Test Shader Info Log".`)
        );
      });
    });

    describe(`when compiling the shader succeeds`, () => {
      let createShader: jasmine.Spy;
      let shaderSource: jasmine.Spy;
      let compileShader: jasmine.Spy;
      let getShaderParameter: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let getShaderInfoLog: jasmine.Spy;
      let deleteShader: jasmine.Spy;
      let getHeaderLines: jasmine.Spy;
      let getDeclarations: jasmine.Spy;
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

      class TestShader extends Shader<Constants.FragmentShader> {
        getHeaderLines() {
          return getHeaderLines();
        }

        getDeclarations() {
          return getDeclarations();
        }

        getBodyLines() {
          return getBodyLines();
        }
      }

      let shader: TestShader;

      let result: null | WebGLShader;

      beforeAll(() => {
        createShader = jasmine
          .createSpy(`createShader`)
          .and.returnValue({ test: `shader` });
        shaderSource = jasmine.createSpy(`shaderSource`);
        compileShader = jasmine.createSpy(`compileShader`);
        getShaderParameter = jasmine
          .createSpy(`getShaderParameter`)
          .and.returnValue(true);
        isContextLost = jasmine.createSpy(`isContextLost`);
        getShaderInfoLog = jasmine.createSpy(`getShaderInfoLog`);
        deleteShader = jasmine.createSpy(`deleteShader`);
        getHeaderLines = jasmine
          .createSpy(`getHeaderLines`)
          .and.returnValue([
            `Test Header Line A`,
            `Test Header Line B`,
            `Test Header Line C`,
          ]);
        getDeclarations = jasmine
          .createSpy(`getDeclarations`)
          .and.returnValue(declarations);
        getBodyLines = jasmine
          .createSpy(`getBodyLines`)
          .and.returnValue([
            `Test Body Line A`,
            `Test Body Line B`,
            `Test Body Line C`,
            `Test Body Line D`,
            `Test Body Line E`,
          ]);

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

        shader = new TestShader(context, Constants.FragmentShader);

        result = shader.createInstance();
      });

      it(`exposes the context`, () => {
        expect(shader.context).toBe(context);
      });

      it(`exposes the type`, () => {
        expect(shader.type).toEqual(Constants.FragmentShader);
      });

      it(`creates one shader`, () => {
        expect(createShader).toHaveBeenCalledTimes(1);
      });

      it(`creates a shader of the expected type`, () => {
        expect(createShader).toHaveBeenCalledWith(Constants.FragmentShader);
      });

      it(`adds source to one shader`, () => {
        expect(shaderSource).toHaveBeenCalledTimes(1);
      });

      it(`adds the expected source to the created shader`, () => {
        expect(shaderSource).toHaveBeenCalledWith(
          { test: `shader` },
          `Test Header Line A
Test Header Line B
Test Header Line C
varying float test_declaration_a_name;
varying float test_declaration_b_name[2];
varying float test_declaration_c_name[3];
varying vec2 test_declaration_d_name;
varying vec2 test_declaration_e_name[2];
varying vec2 test_declaration_f_name[3];
varying vec3 test_declaration_g_name;
varying vec3 test_declaration_h_name[2];
varying vec3 test_declaration_i_name[3];
varying vec4 test_declaration_j_name;
varying vec4 test_declaration_k_name[2];
varying vec4 test_declaration_l_name[3];
varying mat2 test_declaration_m_name;
varying mat2 test_declaration_n_name[2];
varying mat2 test_declaration_o_name[3];
varying mat3 test_declaration_p_name;
varying mat3 test_declaration_q_name[2];
varying mat3 test_declaration_r_name[3];
varying mat4 test_declaration_s_name;
varying mat4 test_declaration_t_name[2];
varying mat4 test_declaration_u_name[3];
uniform float test_declaration_v_name;
uniform float test_declaration_w_name[2];
uniform float test_declaration_x_name[3];
uniform vec2 test_declaration_y_name;
uniform vec2 test_declaration_z_name[2];
uniform vec2 test_declaration_aa_name[3];
uniform vec3 test_declaration_ab_name;
uniform vec3 test_declaration_ac_name[2];
uniform vec3 test_declaration_ad_name[3];
uniform vec4 test_declaration_ae_name;
uniform vec4 test_declaration_af_name[2];
uniform vec4 test_declaration_ag_name[3];
uniform mat2 test_declaration_ah_name;
uniform mat2 test_declaration_ai_name[2];
uniform mat2 test_declaration_aj_name[3];
uniform mat3 test_declaration_ak_name;
uniform mat3 test_declaration_al_name[2];
uniform mat3 test_declaration_am_name[3];
uniform mat4 test_declaration_an_name;
uniform mat4 test_declaration_ao_name[2];
uniform mat4 test_declaration_ap_name[3];
attribute float test_declaration_aq_name;
attribute vec2 test_declaration_ar_name;
attribute vec3 test_declaration_as_name;
attribute vec4 test_declaration_at_name;
Test Body Line A
Test Body Line B
Test Body Line C
Test Body Line D
Test Body Line E`
        );
      });

      it(`compiles one shader`, () => {
        expect(compileShader).toHaveBeenCalledTimes(1);
      });

      it(`compiles the created shader`, () => {
        expect(compileShader).toHaveBeenCalledWith({ test: `shader` });
      });

      it(`gets one shader parameter`, () => {
        expect(getShaderParameter).toHaveBeenCalledTimes(1);
      });

      it(`gets the shader compilation status`, () => {
        expect(getShaderParameter).toHaveBeenCalledWith(
          { test: `shader` },
          Constants.CompileStatus
        );
      });

      it(`compiles the shader after providing source`, () => {
        expect(shaderSource).toHaveBeenCalledBefore(compileShader);
      });

      it(`checks shader compilation status after compiling the shader`, () => {
        expect(compileShader).toHaveBeenCalledBefore(getShaderParameter);
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

      it(`gets one set of header lines`, () => {
        expect(getHeaderLines).toHaveBeenCalledTimes(1);
      });

      it(`gets one set of declarations`, () => {
        expect(getDeclarations).toHaveBeenCalledTimes(1);
      });

      it(`gets one set of body lines`, () => {
        expect(getBodyLines).toHaveBeenCalledTimes(1);
      });

      it(`returns the created shader`, () => {
        expect(result).toEqual({ test: `shader` });
      });
    });
  });

  describe(`on deleting an instance`, () => {
    describe(`which was created successfully`, () => {
      let createShader: jasmine.Spy;
      let shaderSource: jasmine.Spy;
      let compileShader: jasmine.Spy;
      let getShaderParameter: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let getShaderInfoLog: jasmine.Spy;
      let deleteShader: jasmine.Spy;
      let getHeaderLines: jasmine.Spy;
      let getDeclarations: jasmine.Spy;
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

      class TestShader extends Shader<Constants.FragmentShader> {
        getHeaderLines() {
          return getHeaderLines();
        }

        getDeclarations() {
          return getDeclarations();
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
        getDeclarations = jasmine.createSpy(`getDeclarations`);
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

        shader = new TestShader(context, Constants.FragmentShader);

        shader.deleteInstance({ test: `shader` });
      });

      it(`exposes the context`, () => {
        expect(shader.context).toBe(context);
      });

      it(`exposes the type`, () => {
        expect(shader.type).toEqual(Constants.FragmentShader);
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

      it(`deletes one shader`, () => {
        expect(deleteShader).toHaveBeenCalledTimes(1);
      });

      it(`deletes the previously created shader`, () => {
        expect(deleteShader).toHaveBeenCalledWith({ test: `shader` });
      });

      it(`does not get header lines`, () => {
        expect(getHeaderLines).not.toHaveBeenCalled();
      });

      it(`does not get declarations`, () => {
        expect(getDeclarations).not.toHaveBeenCalled();
      });

      it(`does not get body lines`, () => {
        expect(getBodyLines).not.toHaveBeenCalled();
      });
    });

    describe(`which was not created successfully`, () => {
      let createShader: jasmine.Spy;
      let shaderSource: jasmine.Spy;
      let compileShader: jasmine.Spy;
      let getShaderParameter: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let getShaderInfoLog: jasmine.Spy;
      let deleteShader: jasmine.Spy;
      let getHeaderLines: jasmine.Spy;
      let getDeclarations: jasmine.Spy;
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

      class TestShader extends Shader<Constants.FragmentShader> {
        getHeaderLines() {
          return getHeaderLines();
        }

        getDeclarations() {
          return getDeclarations();
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
        getDeclarations = jasmine.createSpy(`getDeclarations`);
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

        shader = new TestShader(context, Constants.FragmentShader);

        shader.deleteInstance(null);
      });

      it(`exposes the context`, () => {
        expect(shader.context).toBe(context);
      });

      it(`exposes the type`, () => {
        expect(shader.type).toEqual(Constants.FragmentShader);
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

      it(`does not get declarations`, () => {
        expect(getDeclarations).not.toHaveBeenCalled();
      });

      it(`does not get body lines`, () => {
        expect(getBodyLines).not.toHaveBeenCalled();
      });
    });
  });
});
