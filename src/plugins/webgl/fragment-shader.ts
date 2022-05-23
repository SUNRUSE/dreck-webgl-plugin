/**
 * A WebGL fragment shader.
 * @template TUniformDefinitionSet The uniforms fed into the fragment shader.
 * @template TVaryingDefinitionSet The varyings fed into the fragment shader.
 */
export abstract class FragmentShader<
  TUniformDefinitionSet extends UniformDefinitionSet,
  TVaryingDefinitionSet extends VaryingDefinitionSet
> extends Shader<Constants.FragmentShader> {
  /**
   * Creates a new WebGL fragment shader.
   * @param context The context under which the shader will be created.
   * @param uniformDefinitionSet The uniforms fed into the fragment shader.
   * @param varyingDefinitionSet The varyings output by the fragment shader.
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
    public readonly uniformDefinitionSet: TUniformDefinitionSet,
    public readonly varyingDefinitionSet: TVaryingDefinitionSet
  ) {
    super(context, Constants.FragmentShader);
  }

  getDeclarations() {
    return [
      ...Object.entries(this.uniformDefinitionSet).map(([key, value]) => ({
        type: `uniform` as `uniform`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: value.quantity,
      })),
      ...Object.entries(this.varyingDefinitionSet).map(([key, value]) => ({
        type: `varying` as `varying`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: value.quantity,
      })),
    ].sort((a, b) => a.name.localeCompare(b.name));
  }
}
