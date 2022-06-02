describe(`webGlShaderPrimitiveArity`, () => {
  it(`float`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Float]).toEqual(1);
  });

  it(`vec2`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Vec2]).toEqual(2);
  });

  it(`vec3`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Vec3]).toEqual(3);
  });

  it(`vec4`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Vec4]).toEqual(4);
  });

  it(`mat2`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Mat2]).toEqual(4);
  });

  it(`mat3`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Mat3]).toEqual(9);
  });

  it(`mat4`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Mat4]).toEqual(16);
  });

  it(`sampler2D`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.Sampler2D]).toEqual(1);
  });

  it(`samplerCube`, () => {
    expect(webGlShaderPrimitiveArity[WebGlConstants.SamplerCube]).toEqual(1);
  });
});
