import type { ContextInterface } from "../ContextInterface";
import { Constants } from "../Constants";
import { Resource } from "../Resource";
import { shaderTypeKeyword } from "../shaderTypeKeyword";

/**
 * A WebGL shader which can be compiled into a shader.
 * @template TType The type of the shader.
 */
export abstract class Shader<
  TType extends Constants.VertexShader | Constants.FragmentShader
> extends Resource<
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
    context: ContextInterface<
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
          | Constants.Float
          | Constants.Vec2
          | Constants.Vec3
          | Constants.Vec4
          | Constants.Mat2
          | Constants.Mat3
          | Constants.Mat4;

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
          | Constants.Float
          | Constants.Vec2
          | Constants.Vec3
          | Constants.Vec4
          | Constants.Mat2
          | Constants.Mat3
          | Constants.Mat4;

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
          | Constants.Float
          | Constants.Vec2
          | Constants.Vec3
          | Constants.Vec4;

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
                shaderTypeKeyword[declaration.primitive]
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

      if (this.context.gl.getShaderParameter(shader, Constants.CompileStatus)) {
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
