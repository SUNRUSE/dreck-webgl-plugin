/**
 * Maps minification filters to whether they require mip-maps or not.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const webGlMinificationFilterIncludesMipmaps = {
  [WebGlConstants.Nearest]: false,
  [WebGlConstants.Linear]: false,
  [WebGlConstants.NearestMipmapNearest]: true,
  [WebGlConstants.NearestMipmapLinear]: true,
  [WebGlConstants.LinearMipmapNearest]: true,
  [WebGlConstants.LinearMipmapLinear]: true,
};
