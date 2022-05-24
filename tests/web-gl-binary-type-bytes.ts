describe(`webGlBinaryTypeBytes`, () => {
  it(`byte`, () => {
    expect(webGlBinaryTypeBytes[WebGlConstants.Byte]).toEqual(1);
  });

  it(`unsigned byte`, () => {
    expect(webGlBinaryTypeBytes[WebGlConstants.UnsignedByte]).toEqual(1);
  });

  it(`short`, () => {
    expect(webGlBinaryTypeBytes[WebGlConstants.Short]).toEqual(2);
  });

  it(`unsigned short`, () => {
    expect(webGlBinaryTypeBytes[WebGlConstants.UnsignedShort]).toEqual(2);
  });

  it(`float`, () => {
    expect(webGlBinaryTypeBytes[WebGlConstants.Float]).toEqual(4);
  });
});
