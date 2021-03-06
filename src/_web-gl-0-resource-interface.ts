interface WebGlResourceInterface<TInstance> {
  /**
   * The context the resource was created under.
   */
  context: unknown;

  /**
   * Throws an error if this resource has been disposed.
   * @throws When this resource has been disposed.
   */
  throwIfDisposed(): void;

  /**
   * Throws an error if this resource is not of a given context.
   * @param resource The resource against which to check this resource.
   * @throws When this resource is not of the given context.
   */
  throwIfFromAnotherContext(resource: WebGlResourceInterface<unknown>): void;

  /**
   * Call to get the current instance, creating it if it has not been created before, and recreating it if context loss has been recovered from.
   * @returns The current instance, if any, otherwise, null (e.g. if context loss has occurred).
   */
  getInstance(): null | TInstance;
}
