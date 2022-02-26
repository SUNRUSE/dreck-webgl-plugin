import { binaryTypeMinimum, Constants } from "..";

describe(`binaryTypeMinimum`, () => {
  it(`byte`, () => {
    expect(binaryTypeMinimum[Constants.Byte]).toEqual(-128);
  });

  it(`unsigned byte`, () => {
    expect(binaryTypeMinimum[Constants.UnsignedByte]).toEqual(0);
  });

  it(`short`, () => {
    expect(binaryTypeMinimum[Constants.Short]).toEqual(-32768);
  });

  it(`unsigned short`, () => {
    expect(binaryTypeMinimum[Constants.UnsignedShort]).toEqual(0);
  });

  it(`float`, () => {
    expect(binaryTypeMinimum[Constants.Float]).toEqual(-Number.MAX_VALUE);
  });
});
