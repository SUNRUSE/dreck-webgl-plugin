/**
 * A minification filter which can be applied to a texture.
 */
type webGlMinificationFilter =
  | WebGlConstants.Linear
  | WebGlConstants.Nearest
  | WebGlConstants.NearestMipmapNearest
  | WebGlConstants.NearestMipmapLinear
  | WebGlConstants.LinearMipmapNearest
  | WebGlConstants.LinearMipmapLinear;
