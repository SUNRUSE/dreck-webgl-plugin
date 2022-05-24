describe(`webGlBinaryTypeType`, () => {
  it(`byte`, () => {
    expect(webGlBinaryTypeType[WebGlConstants.Byte]).toEqual(`integer`);
  });

  it(`unsigned byte`, () => {
    expect(webGlBinaryTypeType[WebGlConstants.UnsignedByte]).toEqual(`integer`);
  });

  it(`short`, () => {
    expect(webGlBinaryTypeType[WebGlConstants.Short]).toEqual(`integer`);
  });

  it(`unsigned short`, () => {
    expect(webGlBinaryTypeType[WebGlConstants.UnsignedShort]).toEqual(
      `integer`
    );
  });

  it(`float`, () => {
    expect(webGlBinaryTypeType[WebGlConstants.Float]).toEqual(`float`);
  });
});
