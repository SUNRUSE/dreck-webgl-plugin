import { binaryTypeMaximum, Constants } from "../..";

describe(`binaryTypeMaximum`, () => {
  it(`byte`, () => {
    expect(binaryTypeMaximum[Constants.Byte]).toEqual(127);
  });

  it(`unsigned byte`, () => {
    expect(binaryTypeMaximum[Constants.UnsignedByte]).toEqual(255);
  });

  it(`short`, () => {
    expect(binaryTypeMaximum[Constants.Short]).toEqual(32767);
  });

  it(`unsigned short`, () => {
    expect(binaryTypeMaximum[Constants.UnsignedShort]).toEqual(65535);
  });

  it(`float`, () => {
    expect(binaryTypeMaximum[Constants.Float]).toEqual(Number.MAX_VALUE);
  });
});
