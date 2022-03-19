import { Constants } from "../Constants";

/**
 * Maps minification filters to whether they require mip-maps or not.
 */
export const minificationFilterIncludesMipmaps = {
  [Constants.Nearest]: false,
  [Constants.Linear]: false,
  [Constants.NearestMipmapNearest]: true,
  [Constants.NearestMipmapLinear]: true,
  [Constants.LinearMipmapNearest]: true,
  [Constants.LinearMipmapLinear]: true,
};
