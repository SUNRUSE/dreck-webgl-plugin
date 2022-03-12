import type { BooleanAnimation } from "../../animation/BooleanAnimation";
import type { FloatAnimation } from "../../animation/FloatAnimation";

/**
 * An object within a scene collection.
 * @template TObjectName The names of the objects within the scene collection.
 * @template TData The types, names and data of the objects within the scene collection.
 */
export type SceneObject<
  TObjectName extends string,
  TData extends {
    readonly [type: string]: { readonly [name: string]: unknown };
  }
> = {
  /**
   * The location of the object relative to its parent on the X, Y and Z axes respectively.
   */
  readonly location: readonly [FloatAnimation, FloatAnimation, FloatAnimation];

  /**
   * The rotation of the object relative to its parent about the X, Y and Z axes respectively, in radians.
   */
  readonly rotation: readonly [FloatAnimation, FloatAnimation, FloatAnimation];

  /**
   * The scale of the object relative to its parent about the X, Y and Z axes respectively.
   */
  readonly scale: readonly [FloatAnimation, FloatAnimation, FloatAnimation];

  /**
   * When true, the object is visible when editing.  When false, the object is not visible when editing.
   */
  readonly visible: BooleanAnimation;

  /**
   * When true, the object is visible at runtime.  When false, the object is not visible at runtime.
   */
  readonly rendered: BooleanAnimation;

  /**
   * The names of the objects which are children of this object.
   */
  readonly children: ReadonlyArray<TObjectName>;
} & (
  | {
      /**
       * Identifies that this is an "empty" object.
       */
      readonly type: null;

      /**
       * The (empty) data of this object.
       */
      readonly data: null;
    }
  | {
      readonly [TType in keyof TData]: {
        /**
         * Identifies the type of this object.
         */
        readonly type: TType;

        /**
         * The data of this object.
         */
        readonly data: keyof TData[TType];
      };
    }[keyof TData]
);
