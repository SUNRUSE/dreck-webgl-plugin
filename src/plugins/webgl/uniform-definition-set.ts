/**
 * Describes a set of uniform definitions.
 */
export type UniformDefinitionSet = {
  /**
   * Maps the names of the uniforms to their type information.
   */
  readonly [key: string]: UniformDefinition;
};
