/**
 * Converts a uniform definition set to a set of values.
 * @template TUniformDefinitionSet The uniform definition set to convert.
 */
type WebGlUniformValueSet<
  TUniformDefinitionSet extends WebGlUniformDefinitionSet
> = {
  readonly [TKey in keyof TUniformDefinitionSet]: TUniformDefinitionSet[TKey][`quantity`] extends 1
    ? WebGlShaderPrimitive[TUniformDefinitionSet[TKey][`shaderPrimitive`]]
    : ReadonlyArray<
        WebGlShaderPrimitive[TUniformDefinitionSet[TKey][`shaderPrimitive`]]
      >;
};
