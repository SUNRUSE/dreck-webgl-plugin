import type { ShaderPrimitive } from "../ShaderPrimitive";
import type { UniformDefinitionSet } from "../UniformDefinitionSet";

/**
 * Converts a uniform definition set to a set of values.
 * @template TUniformDefinitionSet The uniform definition set to convert.
 */
export type UniformValueSet<
  TUniformDefinitionSet extends UniformDefinitionSet
> = {
  readonly [TKey in keyof TUniformDefinitionSet]: TUniformDefinitionSet[TKey][`quantity`] extends 1
    ? ShaderPrimitive[TUniformDefinitionSet[TKey][`shaderPrimitive`]]
    : ReadonlyArray<
        ShaderPrimitive[TUniformDefinitionSet[TKey][`shaderPrimitive`]]
      >;
};
