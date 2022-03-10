import { Resource } from "../Resource";
import type { AttributeDefinitionSet } from "../AttributeDefinitionSet";
import type { UniformDefinitionSet } from "../UniformDefinitionSet";
import type { VaryingDefinitionSet } from "../VaryingDefinitionSet";
import type { ContextInterface } from "../ContextInterface";
import { Constants } from "../Constants";
import type { ResourceInterface } from "../ResourceInterface";
import type { ProgramInstance } from "../ProgramInstance";

/**
 * A WebGL program.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into both the vertex and fragment shaders.
 * @template TVaryingDefinitionSet The varyings output from the vertex shader to the fragment shader.
 */
export class Program<
  TAttributeDefinitionSet extends AttributeDefinitionSet,
  TUniformDefinitionSet extends UniformDefinitionSet,
  TVaryingDefinitionSet extends VaryingDefinitionSet
> extends Resource<
  null | ProgramInstance<TAttributeDefinitionSet, TUniformDefinitionSet>,
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
> {
  /**
   * Creates a new WebGL program.
   * @param context The context under which to create a program.
   * @param vertexShader The vertex shader to use.  This not be disposed of until after this program is.
   * @param fragmentShader The fragment shader to use.  This must not be disposed of until after this program is.
   * @throws When the vertex shader is disposed.
   * @throws When the vertex shader is from another context.
   * @throws When the fragment shader is disposed.
   * @throws When the fragment shader is from another context.
   */
  constructor(
    context: ContextInterface<
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
    >,
    public readonly vertexShader: ResourceInterface<null | WebGLShader> & {
      readonly type: Constants.VertexShader;
      readonly attributeDefinitionSet: TAttributeDefinitionSet;
      readonly uniformDefinitionSet: TUniformDefinitionSet;
      readonly varyingDefinitionSet: TVaryingDefinitionSet;
    },
    public readonly fragmentShader: ResourceInterface<null | WebGLShader> & {
      readonly type: Constants.FragmentShader;
      readonly uniformDefinitionSet: TUniformDefinitionSet;
      readonly varyingDefinitionSet: TVaryingDefinitionSet;
    }
  ) {
    super(context);

    vertexShader.throwIfFromAnotherContext(this);
    fragmentShader.throwIfFromAnotherContext(this);
  }

  createInstance() {
    const vertexShader = this.vertexShader.getInstance();

    if (vertexShader === null) {
      return null;
    } else {
      const fragmentShader = this.fragmentShader.getInstance();

      if (fragmentShader === null) {
        return null;
      } else {
        const program = this.context.gl.createProgram();

        if (program === null) {
          return null;
        } else {
          this.context.gl.attachShader(program, vertexShader);
          this.context.gl.attachShader(program, fragmentShader);
          this.context.gl.linkProgram(program);

          if (
            this.context.gl.getProgramParameter(program, Constants.LinkStatus)
          ) {
            const attributeLocations = Object.fromEntries(
              Object.keys(this.vertexShader.attributeDefinitionSet).map(
                (name) => [
                  name,
                  this.context.gl.getAttribLocation(program, name),
                ]
              )
            ) as {
              readonly [TKey in keyof TAttributeDefinitionSet]: number;
            };

            const uniformLocations = Object.fromEntries(
              Object.keys(this.vertexShader.uniformDefinitionSet).map(
                (name) => [
                  name,
                  this.context.gl.getUniformLocation(program, name),
                ]
              )
            ) as {
              readonly [TKey in keyof TUniformDefinitionSet]: null | WebGLUniformLocation;
            };

            return {
              program,
              attributeLocations,
              uniformLocations,
            };
          } else if (this.context.gl.isContextLost()) {
            return null;
          } else {
            const infoLog = this.context.gl.getProgramInfoLog(program);

            this.context.gl.detachShader(program, fragmentShader);
            this.context.gl.detachShader(program, vertexShader);
            this.context.gl.deleteProgram(program);

            throw new Error(`Failed to link a WebGL program: "${infoLog}".`);
          }
        }
      }
    }
  }

  deleteInstance(
    instance: null | ProgramInstance<
      TAttributeDefinitionSet,
      TUniformDefinitionSet
    >
  ): void {
    if (instance !== null) {
      const fragmentShader = this.fragmentShader.getInstance();
      const vertexShader = this.vertexShader.getInstance();
      this.context.gl.useProgram(null);
      this.context.gl.detachShader(
        instance.program,
        fragmentShader as WebGLShader
      );
      this.context.gl.detachShader(
        instance.program,
        vertexShader as WebGLShader
      );
      this.context.gl.deleteProgram(instance.program);
    }
  }
}
