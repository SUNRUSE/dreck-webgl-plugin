/**
 * The additional properties included in a keyframe of a floating-point animation.
 */
export type FloatKeyframeData = {
  /**
   * The interpolation to the next keyframe.
   */
  readonly type: `constant` | `linear`;

  /**
   * The value to use from this keyframe onwards.
   */
  readonly value: number;
};
