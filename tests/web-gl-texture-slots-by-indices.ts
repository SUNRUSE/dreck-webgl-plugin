describe(`webGlTextureSlotsByIndices`, () => {
  it(`0`, () => {
    expect(webGlTextureSlotsByIndices[0]).toEqual(WebGlConstants.Texture0);
  });

  it(`1`, () => {
    expect(webGlTextureSlotsByIndices[1]).toEqual(WebGlConstants.Texture1);
  });

  it(`2`, () => {
    expect(webGlTextureSlotsByIndices[2]).toEqual(WebGlConstants.Texture2);
  });

  it(`3`, () => {
    expect(webGlTextureSlotsByIndices[3]).toEqual(WebGlConstants.Texture3);
  });

  it(`4`, () => {
    expect(webGlTextureSlotsByIndices[4]).toEqual(WebGlConstants.Texture4);
  });

  it(`5`, () => {
    expect(webGlTextureSlotsByIndices[5]).toEqual(WebGlConstants.Texture5);
  });

  it(`6`, () => {
    expect(webGlTextureSlotsByIndices[6]).toEqual(WebGlConstants.Texture6);
  });

  it(`7`, () => {
    expect(webGlTextureSlotsByIndices[7]).toEqual(WebGlConstants.Texture7);
  });
});
