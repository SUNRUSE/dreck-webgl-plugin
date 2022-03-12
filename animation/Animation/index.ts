import type { Keyframe } from "../Keyframe";

/**
 * An animation.
 * @tempalte TValue The type of value animated.
 * @template TKeyframeData Additional properties to include in the animation's keyframes.
 */
export type Animation<TValue, TKeyframeData> =
  | {
      /**
       * Identifies the type of animation.
       */
      readonly type: `static`;

      /**
       * The constant value.
       */
      readonly value: TValue;
    }
  | {
      /**
       * Identifies the type of animation.
       */
      readonly type: `animated`;

      /**
       * The keyframes within the animation.
       */
      readonly keyframes: ReadonlyArray<Keyframe<TKeyframeData>>;
    };
