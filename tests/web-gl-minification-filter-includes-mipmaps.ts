describe(`webGlMinificationFilterIncludesMipmaps`, () => {
  it(`nearest`, () => {
    expect(
      webGlMinificationFilterIncludesMipmaps[WebGlConstants.Nearest]
    ).toBeFalse();
  });

  it(`linear`, () => {
    expect(
      webGlMinificationFilterIncludesMipmaps[WebGlConstants.Linear]
    ).toBeFalse();
  });

  it(`nearest-mipmap-nearest`, () => {
    expect(
      webGlMinificationFilterIncludesMipmaps[
        WebGlConstants.NearestMipmapNearest
      ]
    ).toBeTrue();
  });

  it(`nearest-mipmap-linear`, () => {
    expect(
      webGlMinificationFilterIncludesMipmaps[WebGlConstants.NearestMipmapLinear]
    ).toBeTrue();
  });

  it(`linear-mipmap-nearest`, () => {
    expect(
      webGlMinificationFilterIncludesMipmaps[WebGlConstants.LinearMipmapNearest]
    ).toBeTrue();
  });

  it(`linear-mipmap-linear`, () => {
    expect(
      webGlMinificationFilterIncludesMipmaps[WebGlConstants.LinearMipmapLinear]
    ).toBeTrue();
  });
});
