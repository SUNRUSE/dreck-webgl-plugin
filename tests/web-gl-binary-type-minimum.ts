describe(`webGlBinaryTypeMinimum`, () => {
  it(`byte`, () => {
    expect(webGlBinaryTypeMinimum[WebGlConstants.Byte]).toEqual(-128);
  });

  it(`unsigned byte`, () => {
    expect(webGlBinaryTypeMinimum[WebGlConstants.UnsignedByte]).toEqual(0);
  });

  it(`short`, () => {
    expect(webGlBinaryTypeMinimum[WebGlConstants.Short]).toEqual(-32768);
  });

  it(`unsigned short`, () => {
    expect(webGlBinaryTypeMinimum[WebGlConstants.UnsignedShort]).toEqual(0);
  });

  it(`float`, () => {
    expect(webGlBinaryTypeMinimum[WebGlConstants.Float]).toEqual(
      -Number.MAX_VALUE
    );
  });
});
