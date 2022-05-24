/**
 * A WebGL vertex shader.
 * @template TAttributeDefinitionSet The attributes fed into the vertex shader.
 * @template TUniformDefinitionSet The uniforms fed into the vertex shader.
 * @template TVaryingDefinitionSet The varyings output by the vertex shader.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
abstract class WebGlVertexShader<
  TAttributeDefinitionSet extends WebGlAttributeDefinitionSet,
  TUniformDefinitionSet extends WebGlUniformDefinitionSet,
  TVaryingDefinitionSet extends WebGlVaryingDefinitionSet
> extends WebGlShader<WebGlConstants.VertexShader> {
  /**
   * Creates a new WebGL vertex shader.
   * @param context The context under which the shader will be created.
   * @param attributeDefinitionSet The attributes fed into the vertex shader.
   * @param uniformDefinitionSet The uniforms fed into the vertex shader.
   * @param varyingDefinitionSet The varyings output by the vertex shader.
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
    public readonly attributeDefinitionSet: TAttributeDefinitionSet,
    public readonly uniformDefinitionSet: TUniformDefinitionSet,
    public readonly varyingDefinitionSet: TVaryingDefinitionSet
  ) {
    super(context, WebGlConstants.VertexShader);
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
      ...this.entries(this.attributeDefinitionSet).map(([key, value]) => ({
        type: `attribute` as `attribute`,
        primitive: value.shaderPrimitive,
        name: key,
        quantity: 1,
      })),
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
