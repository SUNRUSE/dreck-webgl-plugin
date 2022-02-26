import { binaryTypeBytes, Constants } from "..";

describe(`binaryTypeBytes`, () => {
  it(`byte`, () => {
    expect(binaryTypeBytes[Constants.Byte]).toEqual(1);
  });

  it(`unsigned byte`, () => {
    expect(binaryTypeBytes[Constants.UnsignedByte]).toEqual(1);
  });

  it(`short`, () => {
    expect(binaryTypeBytes[Constants.Short]).toEqual(2);
  });

  it(`unsigned short`, () => {
    expect(binaryTypeBytes[Constants.UnsignedShort]).toEqual(2);
  });

  it(`float`, () => {
    expect(binaryTypeBytes[Constants.Float]).toEqual(4);
  });
});
