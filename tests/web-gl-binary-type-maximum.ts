describe(`webGlBinaryTypeMaximum`, () => {
  it(`byte`, () => {
    expect(webGlBinaryTypeMaximum[WebGlConstants.Byte]).toEqual(127);
  });

  it(`unsigned byte`, () => {
    expect(webGlBinaryTypeMaximum[WebGlConstants.UnsignedByte]).toEqual(255);
  });

  it(`short`, () => {
    expect(webGlBinaryTypeMaximum[WebGlConstants.Short]).toEqual(32767);
  });

  it(`unsigned short`, () => {
    expect(webGlBinaryTypeMaximum[WebGlConstants.UnsignedShort]).toEqual(65535);
  });

  it(`float`, () => {
    expect(webGlBinaryTypeMaximum[WebGlConstants.Float]).toEqual(
      Number.MAX_VALUE
    );
  });
});
