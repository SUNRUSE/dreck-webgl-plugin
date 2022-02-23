/**
 * A keyframe in an animation.
 * @template TData Additional properties to include in the keyframe.
 */
export type Keyframe<TData> = {
  /**
   * The frame on which the keyframe starts.
   */
  readonly atFrame: number;
} & TData;
