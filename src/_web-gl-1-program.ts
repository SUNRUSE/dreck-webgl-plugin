/**
 * A WebGL program.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into both the vertex and fragment shaders.
 * @template TVaryingDefinitionSet The varyings output from the vertex shader to the fragment shader.
 */
class WebGlProgram<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet,
  TUniformDefinitionSet extends WebGlUniformDefinitionSet,
  TVaryingDefinitionSet extends WebGlVaryingDefinitionSet
> extends WebGlResource<
  null | WebGlProgramInstance<TAttributeDefinitionSet, TUniformDefinitionSet>,
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
    context: WebGlContextInterface<
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
    public readonly vertexShader: WebGlResourceInterface<null | WebGLShader> & {
      readonly type: WebGlConstants.VertexShader;
      readonly attributeDefinitionSet: TAttributeDefinitionSet;
      readonly uniformDefinitionSet: TUniformDefinitionSet;
      readonly varyingDefinitionSet: TVaryingDefinitionSet;
    },
    public readonly fragmentShader: WebGlResourceInterface<null | WebGLShader> & {
      readonly type: WebGlConstants.FragmentShader;
      readonly uniformDefinitionSet: TUniformDefinitionSet;
      readonly varyingDefinitionSet: TVaryingDefinitionSet;
    }
  ) {
    super(context);

    vertexShader.throwIfFromAnotherContext(this);
    fragmentShader.throwIfFromAnotherContext(this);
  }

  private fromEntries<TKey extends string | number | symbol, TValue>(
    entries: ReadonlyArray<readonly [TKey, TValue]>
  ): { readonly [T in TKey]: TValue } {
    const output: {
      [T in TKey]?: TValue;
    } = {};

    for (const [key, value] of entries) {
      output[key] = value;
    }

    return output as { readonly [T in TKey]: TValue };
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
            this.context.gl.getProgramParameter(
              program,
              WebGlConstants.LinkStatus
            )
          ) {
            const attributeLocations = this.fromEntries<
              keyof TAttributeDefinitionSet,
              number
            >(
              Object.keys(this.vertexShader.attributeDefinitionSet).map(
                (name) => [
                  name,
                  this.context.gl.getAttribLocation(program, name),
                ]
              )
            );

            const uniformLocations = this.fromEntries<
              keyof TUniformDefinitionSet,
              null | WebGLUniformLocation
            >(
              Object.keys(this.vertexShader.uniformDefinitionSet).map(
                (name) => [
                  name,
                  this.context.gl.getUniformLocation(program, name),
                ]
              )
            );

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
    instance: null | WebGlProgramInstance<
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
