/**
 * A WebGL fragment shader.
 * @template TUniformDefinitionSet The uniforms fed into the fragment shader.
 * @template TVaryingDefinitionSet The varyings fed into the fragment shader.
 */
abstract class WebGlFragmentShader<
  TUniformDefinitionSet extends WebGlUniformDefinitionSet,
  TVaryingDefinitionSet extends WebGlVaryingDefinitionSet
> extends WebGlShader<WebGlConstants.FragmentShader> {
  /**
   * Creates a new WebGL fragment shader.
   * @param context The context under which the shader will be created.
   * @param uniformDefinitionSet The uniforms fed into the fragment shader.
   * @param varyingDefinitionSet The varyings output by the fragment shader.
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
    public readonly uniformDefinitionSet: TUniformDefinitionSet,
    public readonly varyingDefinitionSet: TVaryingDefinitionSet
  ) {
    super(context, WebGlConstants.FragmentShader);
  }

  private entries<TKey extends string, TValue>(obj: {
    readonly [T in TKey]: TValue;
  }): ReadonlyArray<readonly [TKey, TValue]> {
    const output: (readonly [TKey, TValue])[] = [];

    for (const key in obj) {
      const typedKey = key as TKey;

      output.push([typedKey, obj[typedKey]]);
    }

    return output;
  }

  getDeclarations() {
    return [
      ...this.entries(this.uniformDefinitionSet).map(([key, value]) => ({
        type: `uniform` as `uniform`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: value.quantity,
      })),
      ...this.entries(this.varyingDefinitionSet).map(([key, value]) => ({
        type: `varying` as `varying`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: value.quantity,
      })),
    ].sort((a, b) => a.name.localeCompare(b.name));
  }
}
