import { calculateTransform, Mat4 } from "../..";

describe(`calculateTransform`, () => {
  describe(`a`, () => {
    let mat4: Mat4;

    beforeAll(() => {
      mat4 = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      calculateTransform(
        -1.059999942779541,
        1.3399999141693115,
        -3.0899999141693115,
        0.5218533873558044,
        -11.999137878417969,
        3.607595205307007,
        -1.9700000286102295,
        0.23000001907348633,
        2.440000057220459,
        mat4
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(mat4[0]).toBeCloseTo(1.4843193292617798);
      expect(mat4[1]).toBeCloseTo(0.03455393388867378);
      expect(mat4[2]).toBeCloseTo(-1.5618388652801514);
      expect(mat4[3]).toBeCloseTo(-1.059999942779541);
      expect(mat4[4]).toBeCloseTo(0.7465341687202454);
      expect(mat4[5]).toBeCloseTo(-0.205805242061615);
      expect(mat4[6]).toBeCloseTo(0.5759603977203369);
      expect(mat4[7]).toBeCloseTo(1.3399999141693115);
      expect(mat4[8]).toBeCloseTo(1.0584814548492432);
      expect(mat4[9]).toBeCloseTo(0.09669662266969681);
      expect(mat4[10]).toBeCloseTo(1.7839645147323608);
      expect(mat4[11]).toBeCloseTo(-3.0899999141693115);
      expect(mat4[12]).toBeCloseTo(0.0);
      expect(mat4[13]).toBeCloseTo(0.0);
      expect(mat4[14]).toBeCloseTo(0.0);
      expect(mat4[15]).toBeCloseTo(1.0);
    });
  });

  describe(`b`, () => {
    let mat4: Mat4;

    beforeAll(() => {
      mat4 = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      calculateTransform(
        -1.059999942779541,
        1.3399999141693115,
        -3.0899999141693115,
        -0.5218533873558044,
        11.999137878417969,
        -3.607595205307007,
        -1.9700000286102295,
        0.23000001907348633,
        2.440000057220459,
        mat4
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(mat4[0]).toBeCloseTo(1.484320044517517);
      expect(mat4[1]).toBeCloseTo(-0.14462198317050934);
      expect(mat4[2]).toBeCloseTo(0.4688152074813843);
      expect(mat4[3]).toBeCloseTo(-1.059999942779541);
      expect(mat4[4]).toBeCloseTo(-0.7465350031852722);
      expect(mat4[5]).toBeCloseTo(-0.150446817278862);
      expect(mat4[6]).toBeCloseTo(-1.597272515296936);
      expect(mat4[7]).toBeCloseTo(1.3399999141693115);
      expect(mat4[8]).toBeCloseTo(-1.0584797859191895);
      expect(mat4[9]).toBeCloseTo(-0.09669668972492218);
      expect(mat4[10]).toBeCloseTo(1.7839655876159668);
      expect(mat4[11]).toBeCloseTo(-3.0899999141693115);
      expect(mat4[12]).toBeCloseTo(0.0);
      expect(mat4[13]).toBeCloseTo(0.0);
      expect(mat4[14]).toBeCloseTo(0.0);
      expect(mat4[15]).toBeCloseTo(1.0);
    });
  });

  describe(`c`, () => {
    let mat4: Mat4;

    beforeAll(() => {
      mat4 = [
        -40.05, -38.0, 81.23, 53.29, -34.88, -11.04, -89.47, 81.99, 74.0, 73.12,
        38.69, -99.93, 10.87, 26.05, -89.82, 14.7,
      ];

      calculateTransform(
        -1.059999942779541,
        1.3399999141693115,
        -3.0899999141693115,
        0.5218533873558044,
        11.999137878417969,
        3.607595205307007,
        -1.9700000286102295,
        0.23000001907348633,
        2.440000057220459,
        mat4
      );
    });

    it(`populates the output matrix as expected`, () => {
      expect(mat4[0]).toBeCloseTo(1.484320044517517);
      expect(mat4[1]).toBeCloseTo(0.14462198317050934);
      expect(mat4[2]).toBeCloseTo(0.4688152074813843);
      expect(mat4[3]).toBeCloseTo(-1.059999942779541);
      expect(mat4[4]).toBeCloseTo(0.7465350031852722);
      expect(mat4[5]).toBeCloseTo(-0.150446817278862);
      expect(mat4[6]).toBeCloseTo(1.597272515296936);
      expect(mat4[7]).toBeCloseTo(1.3399999141693115);
      expect(mat4[8]).toBeCloseTo(-1.0584797859191895);
      expect(mat4[9]).toBeCloseTo(0.09669668972492218);
      expect(mat4[10]).toBeCloseTo(1.7839655876159668);
      expect(mat4[11]).toBeCloseTo(-3.0899999141693115);
      expect(mat4[12]).toBeCloseTo(0.0);
      expect(mat4[13]).toBeCloseTo(0.0);
      expect(mat4[14]).toBeCloseTo(0.0);
      expect(mat4[15]).toBeCloseTo(1.0);
    });
  });
});
