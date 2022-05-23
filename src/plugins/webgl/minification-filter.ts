/**
 * A minification filter which can be applied to a texture.
 */
export type MinificationFilter =
  | Constants.Linear
  | Constants.Nearest
  | Constants.NearestMipmapNearest
  | Constants.NearestMipmapLinear
  | Constants.LinearMipmapNearest
  | Constants.LinearMipmapLinear;
