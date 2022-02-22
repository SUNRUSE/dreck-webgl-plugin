import type { Keyframe } from "../Keyframe";

/**
 * An animation.
 * @template TKeyframeData Additional properties to include in the animation's keyframes.
 */
export type Animation<TKeyframeData> = {
  /**
   * The keyframes within the animation.
   */
  readonly keyframes: ReadonlyArray<Keyframe<TKeyframeData>>;
};
