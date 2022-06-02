describe(`webGlShaderPrimitiveKeyword`, () => {
  it(`float`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Float]).toEqual(`float`);
  });

  it(`vec2`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Vec2]).toEqual(`vec2`);
  });

  it(`vec3`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Vec3]).toEqual(`vec3`);
  });

  it(`vec4`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Vec4]).toEqual(`vec4`);
  });

  it(`mat2`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Mat2]).toEqual(`mat2`);
  });

  it(`mat3`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Mat3]).toEqual(`mat3`);
  });

  it(`mat4`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Mat4]).toEqual(`mat4`);
  });

  it(`sampler2D`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.Sampler2D]).toEqual(
      `sampler2D`
    );
  });

  it(`samplerCube`, () => {
    expect(webGlShaderPrimitiveKeyword[WebGlConstants.SamplerCube]).toEqual(
      `samplerCube`
    );
  });
});
