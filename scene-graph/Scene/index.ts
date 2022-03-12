/**
 * A scene within a collection.
 * @template TObjectName The names of the objects within the scene collection.
 */
export type Scene<TObjectName extends string> = {
  /**
   * The names of the objects in this scene.
   */
  readonly objectNames: ReadonlyArray<TObjectName>;
};
