import { Constants, shaderTypeKeyword } from "..";

describe(`shaderTypeKeyword`, () => {
  it(`float`, () => {
    expect(shaderTypeKeyword[Constants.Float]).toEqual(`float`);
  });

  it(`vec2`, () => {
    expect(shaderTypeKeyword[Constants.Vec2]).toEqual(`vec2`);
  });

  it(`vec3`, () => {
    expect(shaderTypeKeyword[Constants.Vec3]).toEqual(`vec3`);
  });

  it(`vec4`, () => {
    expect(shaderTypeKeyword[Constants.Vec4]).toEqual(`vec4`);
  });

  it(`mat2`, () => {
    expect(shaderTypeKeyword[Constants.Mat2]).toEqual(`mat2`);
  });

  it(`mat3`, () => {
    expect(shaderTypeKeyword[Constants.Mat3]).toEqual(`mat3`);
  });

  it(`mat4`, () => {
    expect(shaderTypeKeyword[Constants.Mat4]).toEqual(`mat4`);
  });
});
