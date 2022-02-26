import { binaryTypeType, Constants } from "..";

describe(`binaryTypeType`, () => {
  it(`byte`, () => {
    expect(binaryTypeType[Constants.Byte]).toEqual(`integer`);
  });

  it(`unsigned byte`, () => {
    expect(binaryTypeType[Constants.UnsignedByte]).toEqual(`integer`);
  });

  it(`short`, () => {
    expect(binaryTypeType[Constants.Short]).toEqual(`integer`);
  });

  it(`unsigned short`, () => {
    expect(binaryTypeType[Constants.UnsignedShort]).toEqual(`integer`);
  });

  it(`float`, () => {
    expect(binaryTypeType[Constants.Float]).toEqual(`float`);
  });
});
