import type { Keyframe } from "../Keyframe";
import type { BooleanAnimation } from "../BooleanAnimation";
import type { BooleanKeyframeData } from "../BooleanKeyframeData";

/**
 * Samples a given boolean animation at a given point in time.
 * @param animation The animation to sample.
 * @param atFrame The point in time at which to sample the animation.
 * @return The value of the animation at the specified time.
 */
export function sampleBooleanAnimation(
  animation: BooleanAnimation,
  atFrame: number
): boolean {
  for (let i = 0; i < animation.keyframes.length - 1; i++) {
    const previousKeyframe = animation.keyframes[
      i
    ] as Keyframe<BooleanKeyframeData>;

    const nextKeyframe = animation.keyframes[
      i + 1
    ] as Keyframe<BooleanKeyframeData>;

    if (previousKeyframe.atFrame <= atFrame && nextKeyframe.atFrame > atFrame) {
      return previousKeyframe.value;
    }
  }

  const firstKeyframe = animation.keyframes[0] as Keyframe<BooleanKeyframeData>;

  if (atFrame < firstKeyframe.atFrame) {
    return firstKeyframe.value;
  } else {
    const lastKeyframe = animation.keyframes[
      animation.keyframes.length - 1
    ] as Keyframe<BooleanKeyframeData>;

    return lastKeyframe.value;
  }
}
