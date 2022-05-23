/**
 * Describes a set of varying definitions.
 */
export type VaryingDefinitionSet = {
  /**
   * Maps the names of the varyings to their type information.
   */
  readonly [key: string]: VaryingDefinition;
};
