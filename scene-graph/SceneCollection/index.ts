import type { Scene } from "../Scene";
import type { SceneObject } from "../SceneObject";

/**
 * A collection of scenes.
 * @template TSceneName The names of the scenes within the collection.
 * @template TObjectName The names of the objects within the scene collection.
 * @template TData The types, names and data of the objects within the scene collection.
 */
export type SceneCollection<
  TSceneName extends string,
  TObjectName extends string,
  TData extends {
    readonly [type: string]: { readonly [name: string]: unknown };
  }
> = {
  /**
   * The scenes within the collection.
   */
  readonly scenes: { readonly [TName in TSceneName]: Scene<TObjectName> };

  /**
   * The objects within the scene collection.
   */
  readonly objects: {
    readonly [TName in TObjectName]: SceneObject<TObjectName, TData>;
  };

  /**
   * The data of the objects within the scene collection.
   */
  readonly data: TData;
};
