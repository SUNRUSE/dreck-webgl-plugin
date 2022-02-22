import type { Keyframe } from "../Keyframe";
import type { FloatAnimation } from "../FloatAnimation";
import type { FloatKeyframeData } from "../FloatKeyframeData";

/**
 * Samples a given float animation at a given point in time.
 * @param animation The animation to sample.
 * @param atFrame The point in time at which to sample the animation.
 * @return The value of the animation at the specified time.
 */
export function sampleFloatAnimation(
  animation: FloatAnimation,
  atFrame: number
): number {
  for (let i = 0; i < animation.keyframes.length - 1; i++) {
    const previousKeyframe = animation.keyframes[
      i
    ] as Keyframe<FloatKeyframeData>;

    const nextKeyframe = animation.keyframes[
      i + 1
    ] as Keyframe<FloatKeyframeData>;

    if (previousKeyframe.atFrame <= atFrame && nextKeyframe.atFrame > atFrame) {
      switch (previousKeyframe.type) {
        case `constant`:
          return previousKeyframe.value;

        case `linear`: {
          const framesSincePreviousKeyframe =
            atFrame - previousKeyframe.atFrame;

          const framesBetweenKeyframes =
            nextKeyframe.atFrame - previousKeyframe.atFrame;

          const progress = framesSincePreviousKeyframe / framesBetweenKeyframes;

          const valueChange = nextKeyframe.value - previousKeyframe.value;

          return previousKeyframe.value + valueChange * progress;
        }
      }
    }
  }

  const firstKeyframe = animation.keyframes[0] as Keyframe<FloatKeyframeData>;

  if (atFrame < firstKeyframe.atFrame) {
    return firstKeyframe.value;
  } else {
    const lastKeyframe = animation.keyframes[
      animation.keyframes.length - 1
    ] as Keyframe<FloatKeyframeData>;

    return lastKeyframe.value;
  }
}
