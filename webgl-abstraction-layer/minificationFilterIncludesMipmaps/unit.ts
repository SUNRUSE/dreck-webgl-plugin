import { minificationFilterIncludesMipmaps, Constants } from "../..";

describe(`minificationFilterIncludesMipmaps`, () => {
  it(`nearest`, () => {
    expect(minificationFilterIncludesMipmaps[Constants.Nearest]).toBeFalse();
  });

  it(`linear`, () => {
    expect(minificationFilterIncludesMipmaps[Constants.Linear]).toBeFalse();
  });

  it(`nearest-mipmap-nearest`, () => {
    expect(
      minificationFilterIncludesMipmaps[Constants.NearestMipmapNearest]
    ).toBeTrue();
  });

  it(`nearest-mipmap-linear`, () => {
    expect(
      minificationFilterIncludesMipmaps[Constants.NearestMipmapLinear]
    ).toBeTrue();
  });

  it(`linear-mipmap-nearest`, () => {
    expect(
      minificationFilterIncludesMipmaps[Constants.LinearMipmapNearest]
    ).toBeTrue();
  });

  it(`linear-mipmap-linear`, () => {
    expect(
      minificationFilterIncludesMipmaps[Constants.LinearMipmapLinear]
    ).toBeTrue();
  });
});
