/**
 * A WebGL shader which can be compiled into a shader.
 * @template TType The type of the shader.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
abstract class WebGlShader<
  TType extends WebGlConstants.VertexShader | WebGlConstants.FragmentShader
> extends WebGlResource<
  null | WebGLShader,
  | `createShader`
  | `shaderSource`
  | `compileShader`
  | `getShaderParameter`
  | `isContextLost`
  | `getShaderInfoLog`
  | `deleteShader`
> {
  /**
   * Creates a new WebGL shader.
   * @param context The context under which the shader will be created.
   * @param type The type of the shader to be created.
   */
  constructor(
    context: WebGlContextInterface<
      | `createShader`
      | `shaderSource`
      | `compileShader`
      | `getShaderParameter`
      | `isContextLost`
      | `getShaderInfoLog`
      | `deleteShader`
    >,
    public readonly type: TType
  ) {
    super(context);
  }

  /**
   * Returns the lines of the shader preceding the declarations and body.
   * @returns The lines of the shader preceding the declarations and body.
   */
  abstract getHeaderLines(): ReadonlyArray<string>;

  /**
   * Returns the declaractions of the shader between the header and body.
   * @returns The declaractions of the shader between the header and body.
   */
  abstract getDeclarations(): ReadonlyArray<
    | {
        /**
         * The manner in which the declaration is input into or output from the shader.
         */
        readonly type: `varying`;

        /**
         * The declaration's primitive type.
         */
        readonly primitive:
          | WebGlConstants.Float
          | WebGlConstants.Vec2
          | WebGlConstants.Vec3
          | WebGlConstants.Vec4
          | WebGlConstants.Mat2
          | WebGlConstants.Mat3
          | WebGlConstants.Mat4;

        /**
         * The declaration's name.
         */
        readonly name: string;

        /**
         * When 1, the declaration is NOT an array.  When greater than 1, the declaration is an array of the specified length.
         */
        readonly quantity: number;
      }
    | {
        /**
         * The manner in which the declaration is input into or output from the shader.
         */
        readonly type: `uniform`;

        /**
         * The declaration's primitive type.
         */
        readonly primitive:
          | WebGlConstants.Float
          | WebGlConstants.Vec2
          | WebGlConstants.Vec3
          | WebGlConstants.Vec4
          | WebGlConstants.Mat2
          | WebGlConstants.Mat3
          | WebGlConstants.Mat4;

        /**
         * The declaration's name.
         */
        readonly name: string;

        /**
         * When 1, the declaration is NOT an array.  When greater than 1, the declaration is an array of the specified length.
         */
        readonly quantity: number;
      }
    | {
        /**
         * The manner in which the declaration is input into or output from the shader.
         */
        readonly type: `attribute`;

        /**
         * The declaration's primitive type.
         */
        readonly primitive:
          | WebGlConstants.Float
          | WebGlConstants.Vec2
          | WebGlConstants.Vec3
          | WebGlConstants.Vec4;

        /**
         * The declaration's name.
         */
        readonly name: string;
      }
  >;

  /**
   * Returns the lines of the shader following the header and declarations.
   * @returns The lines of the shader following the header and declarations.
   */
  abstract getBodyLines(): ReadonlyArray<string>;

  createInstance(): null | WebGLShader {
    const shader = this.context.gl.createShader(this.type);

    if (shader === null) {
      return null;
    } else {
      this.context.gl.shaderSource(
        shader,
        [
          ...this.getHeaderLines(),
          ...this.getDeclarations().map(
            (declaration) =>
              `${declaration.type} ${
                webGlShaderPrimitiveKeyword[declaration.primitive]
              } ${declaration.name}${
                declaration.type === `attribute` || declaration.quantity === 1
                  ? ``
                  : `[${declaration.quantity}]`
              };`
          ),
          ...this.getBodyLines(),
        ].join(`\n`)
      );

      this.context.gl.compileShader(shader);

      if (
        this.context.gl.getShaderParameter(shader, WebGlConstants.CompileStatus)
      ) {
        return shader;
      } else if (this.context.gl.isContextLost()) {
        return null;
      } else {
        const infoLog = this.context.gl.getShaderInfoLog(shader);

        this.context.gl.deleteShader(shader);

        throw new Error(`Failed to compile a WebGL shader: "${infoLog}".`);
      }
    }
  }

  deleteInstance(instance: null | WebGLShader): void {
    if (instance !== null) {
      this.context.gl.deleteShader(instance);
    }
  }
}
