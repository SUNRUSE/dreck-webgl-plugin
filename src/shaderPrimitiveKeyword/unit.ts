import { Constants, shaderPrimitiveKeyword } from "..";

describe(`shaderPrimitiveKeyword`, () => {
  it(`float`, () => {
    expect(shaderPrimitiveKeyword[Constants.Float]).toEqual(`float`);
  });

  it(`vec2`, () => {
    expect(shaderPrimitiveKeyword[Constants.Vec2]).toEqual(`vec2`);
  });

  it(`vec3`, () => {
    expect(shaderPrimitiveKeyword[Constants.Vec3]).toEqual(`vec3`);
  });

  it(`vec4`, () => {
    expect(shaderPrimitiveKeyword[Constants.Vec4]).toEqual(`vec4`);
  });

  it(`mat2`, () => {
    expect(shaderPrimitiveKeyword[Constants.Mat2]).toEqual(`mat2`);
  });

  it(`mat3`, () => {
    expect(shaderPrimitiveKeyword[Constants.Mat3]).toEqual(`mat3`);
  });

  it(`mat4`, () => {
    expect(shaderPrimitiveKeyword[Constants.Mat4]).toEqual(`mat4`);
  });
});
