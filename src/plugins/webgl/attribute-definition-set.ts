/**
 * Describes a set of attribute definitions.
 */
export type AttributeDefinitionSet = {
  /**
   * Maps the names of the attributes to their type information.
   */
  readonly [key: string]: AttributeDefinition;
};
