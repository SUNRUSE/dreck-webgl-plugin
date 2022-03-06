import type { Resource } from "../Resource";

export interface ResourceInterface<TInstance> {
  /**
   * Throws an error if this resource is not of a given context.
   * @param resource The resource against which to check this resource.
   * @throws When this resource is not of the given context.
   */
  throwIfFromAnotherContext(resource: Resource<unknown, never>): void;

  /**
   * Call to get the current instance, creating it if it has not been created before, and recreating it if context loss has been recovered from.
   * @returns The current instance, if any, otherwise, null (e.g. if context loss has occurred).
   */
  getInstance(): null | TInstance;
}
