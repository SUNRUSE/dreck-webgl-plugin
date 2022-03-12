import { calculatePerspective, Mat4 } from "../..";

describe(`calculatePerspective`, () => {
  describe(`tall`, () => {
    let mat4: Mat4;

    beforeAll(() => {
      mat4 = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      calculatePerspective(1170, 1576, 24.87, 2, -1.09, 2, 5, 36, mat4);
    });

    it(`populates the output matrix as expected`, () => {
      expect(mat4[0]).toBeCloseTo(1.8589433431625366);
      expect(mat4[1]).toBeCloseTo(0.0);
      expect(mat4[2]).toBeCloseTo(5.388033866882324);
      expect(mat4[3]).toBeCloseTo(0.0);
      expect(mat4[4]).toBeCloseTo(0.0);
      expect(mat4[5]).toBeCloseTo(1.3800532817840576);
      expect(mat4[6]).toBeCloseTo(-2.179999828338623);
      expect(mat4[7]).toBeCloseTo(0.0);
      expect(mat4[8]).toBeCloseTo(0.0);
      expect(mat4[9]).toBeCloseTo(0.0);
      expect(mat4[10]).toBeCloseTo(-2.3333332538604736);
      expect(mat4[11]).toBeCloseTo(-6.666666507720947);
      expect(mat4[12]).toBeCloseTo(0.0);
      expect(mat4[13]).toBeCloseTo(0.0);
      expect(mat4[14]).toBeCloseTo(-1.0);
      expect(mat4[15]).toBeCloseTo(0.0);
    });
  });

  describe(`wide`, () => {
    let mat4: Mat4;

    beforeAll(() => {
      mat4 = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      calculatePerspective(1576, 1170, 24.87, 2, -1.09, 2, 5, 36, mat4);
    });

    it(`populates the output matrix as expected`, () => {
      expect(mat4[0]).toBeCloseTo(1.3800532817840576);
      expect(mat4[1]).toBeCloseTo(0.0);
      expect(mat4[2]).toBeCloseTo(4.0);
      expect(mat4[3]).toBeCloseTo(0.0);
      expect(mat4[4]).toBeCloseTo(0.0);
      expect(mat4[5]).toBeCloseTo(1.8589433431625366);
      expect(mat4[6]).toBeCloseTo(-2.93647837638855);
      expect(mat4[7]).toBeCloseTo(0.0);
      expect(mat4[8]).toBeCloseTo(0.0);
      expect(mat4[9]).toBeCloseTo(0.0);
      expect(mat4[10]).toBeCloseTo(-2.3333332538604736);
      expect(mat4[11]).toBeCloseTo(-6.666666507720947);
      expect(mat4[12]).toBeCloseTo(0.0);
      expect(mat4[13]).toBeCloseTo(0.0);
      expect(mat4[14]).toBeCloseTo(-1.0);
      expect(mat4[15]).toBeCloseTo(0.0);
    });
  });
});
