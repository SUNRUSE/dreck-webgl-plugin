import {
  WrappingMode,
  MinificationFilter,
  MagnificationFilter,
  Texture2D,
  TextureTypesByFormat,
  Constants,
  TextureFormat,
  ContextInterface,
} from "../..";

describe(`Texture2D`, () => {
  function Scenario<
    TFormat extends TextureFormat,
    TType extends TextureTypesByFormat[TFormat]
  >(
    wrapX: WrappingMode,
    wrapY: WrappingMode,
    minificationFilter: MinificationFilter,
    magnificationFilter: MagnificationFilter,
    format: TFormat,
    type: TType,
    generatesMipmaps: boolean
  ): void {
    const descriptionFragments: string[] = [];

    switch (wrapX) {
      case Constants.Repeat:
        descriptionFragments.push(`repeating on X`);
        break;

      case Constants.MirroredRepeat:
        descriptionFragments.push(`mirroring on X`);
        break;

      case Constants.ClampToEdge:
        descriptionFragments.push(`clamping on X`);
        break;
    }

    switch (wrapY) {
      case Constants.Repeat:
        descriptionFragments.push(`repeating on Y`);
        break;

      case Constants.MirroredRepeat:
        descriptionFragments.push(`mirroring on Y`);
        break;

      case Constants.ClampToEdge:
        descriptionFragments.push(`clamping on Y`);
        break;
    }

    switch (minificationFilter) {
      case Constants.Linear:
        descriptionFragments.push(`linearly minifying`);
        break;
      case Constants.Nearest:
        descriptionFragments.push(`nearest minifying`);
        break;
      case Constants.NearestMipmapNearest:
        descriptionFragments.push(`nearest-mipmap-nearest minifying`);
        break;
      case Constants.NearestMipmapLinear:
        descriptionFragments.push(`nearest-mipmap-linear minifying`);
        break;
      case Constants.LinearMipmapNearest:
        descriptionFragments.push(`linear-mipmap-nearest minifying`);
        break;
      case Constants.LinearMipmapLinear:
        descriptionFragments.push(`linear-mipmap-linear minifying`);
        break;
    }

    switch (magnificationFilter) {
      case Constants.Linear:
        descriptionFragments.push(`linearly magnifying`);
        break;
      case Constants.Nearest:
        descriptionFragments.push(`nearest magnifying`);
        break;
    }

    switch (format) {
      case Constants.Rgb:
        descriptionFragments.push(`with red, green and blue channels`);
        break;

      case Constants.Rgba:
        descriptionFragments.push(`with red, green, blue and alpha channels`);
        break;

      case Constants.Luminance:
        descriptionFragments.push(`with a luminance channel`);
        break;

      case Constants.Alpha:
        descriptionFragments.push(`with an alpha channel`);
        break;

      case Constants.LuminanceAlpha:
        descriptionFragments.push(`with luminance and alpha channels`);
        break;
    }

    switch (type) {
      case Constants.UnsignedByte:
        descriptionFragments.push(`formatted as unsigned bytes`);
        break;

      case Constants.UnsignedShort565:
        descriptionFragments.push(
          `packed as 5, 6 and 5 bits into an unsigned short`
        );
        break;

      case Constants.UnsignedShort5551:
        descriptionFragments.push(
          `packed as 5, 5, 5 and 1 bits into an unsigned short`
        );
        break;

      case Constants.UnsignedShort4444:
        descriptionFragments.push(
          `packed as 4, 4, 4 and 4 into an unsigned short`
        );
        break;
    }

    describe(descriptionFragments.join(` `), () => {
      describe(`on construction`, () => {
        let createTexture: jasmine.Spy;
        let bindTexture: jasmine.Spy;
        let texParameteri: jasmine.Spy;
        let deleteTexture: jasmine.Spy;
        let generateMipmap: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends Texture2D<TFormat, TType> {
          populate(): void {
            return populate();
          }
        }

        let context: ContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
        >;
        let texture: TestTexture2D;

        beforeAll(() => {
          createTexture = jasmine.createSpy(`createTexture`);
          bindTexture = jasmine.createSpy(`bindTexture`);
          texParameteri = jasmine.createSpy(`texParameteri`);
          deleteTexture = jasmine.createSpy(`deleteTexture`);
          generateMipmap = jasmine.createSpy(`generateMipmap`);
          populate = jasmine.createSpy(`populate`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createTexture,
              bindTexture,
              texParameteri,
              deleteTexture,
              generateMipmap,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          texture = new TestTexture2D(
            context,
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            format,
            type
          );
        });

        it(`does not check for context loss`, () => {
          expect(isContextLost).not.toHaveBeenCalled();
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });

        it(`creates one texture`, () => {
          expect(createTexture).not.toHaveBeenCalled();
        });

        it(`does not bind any textures`, () => {
          expect(bindTexture).not.toHaveBeenCalled();
        });

        it(`does not set any texture parameters`, () => {
          expect(texParameteri).not.toHaveBeenCalled();
        });

        it(`does not generate any mipmaps`, () => {
          expect(generateMipmap).not.toHaveBeenCalled();
        });

        it(`does not delete any textures`, () => {
          expect(deleteTexture).not.toHaveBeenCalled();
        });

        it(`does not populate any textures`, () => {
          expect(populate).not.toHaveBeenCalled();
        });

        it(`exposes the X wrapping mode`, () => {
          expect(texture.wrapX).toEqual(wrapX);
        });

        it(`exposes the Y wrapping mode`, () => {
          expect(texture.wrapY).toEqual(wrapY);
        });

        it(`exposes the minification filter`, () => {
          expect(texture.minificationFilter).toEqual(minificationFilter);
        });

        it(`exposes the magnification filter`, () => {
          expect(texture.magnificationFilter).toEqual(magnificationFilter);
        });

        it(`exposes the format`, () => {
          expect(texture.format).toEqual(format);
        });

        it(`exposes the type`, () => {
          expect(texture.type).toEqual(type);
        });

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });
      });

      describe(`on failing to create an instance`, () => {
        let createTexture: jasmine.Spy;
        let bindTexture: jasmine.Spy;
        let texParameteri: jasmine.Spy;
        let deleteTexture: jasmine.Spy;
        let generateMipmap: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends Texture2D<TFormat, TType> {
          populate(): void {
            return populate();
          }
        }

        let context: ContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
        >;
        let texture: TestTexture2D;
        let result: null | WebGLTexture;

        beforeAll(() => {
          createTexture = jasmine
            .createSpy(`createTexture`)
            .and.returnValue(null);
          bindTexture = jasmine.createSpy(`bindTexture`);
          texParameteri = jasmine.createSpy(`texParameteri`);
          deleteTexture = jasmine.createSpy(`deleteTexture`);
          generateMipmap = jasmine.createSpy(`generateMipmap`);
          populate = jasmine.createSpy(`populate`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createTexture,
              bindTexture,
              texParameteri,
              deleteTexture,
              generateMipmap,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          texture = new TestTexture2D(
            context,
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            format,
            type
          );

          result = texture.createInstance();
        });

        it(`does not check for context loss`, () => {
          expect(isContextLost).not.toHaveBeenCalled();
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });

        it(`creates one texture`, () => {
          expect(createTexture).toHaveBeenCalledTimes(1);
        });

        it(`does not bind any textures`, () => {
          expect(bindTexture).not.toHaveBeenCalled();
        });

        it(`does not set any texture parameters`, () => {
          expect(texParameteri).not.toHaveBeenCalled();
        });

        it(`does not generate any mipmaps`, () => {
          expect(generateMipmap).not.toHaveBeenCalled();
        });

        it(`does not delete any textures`, () => {
          expect(deleteTexture).not.toHaveBeenCalled();
        });

        it(`does not populate any textures`, () => {
          expect(populate).not.toHaveBeenCalled();
        });

        it(`exposes the X wrapping mode`, () => {
          expect(texture.wrapX).toEqual(wrapX);
        });

        it(`exposes the Y wrapping mode`, () => {
          expect(texture.wrapY).toEqual(wrapY);
        });

        it(`exposes the minification filter`, () => {
          expect(texture.minificationFilter).toEqual(minificationFilter);
        });

        it(`exposes the magnification filter`, () => {
          expect(texture.magnificationFilter).toEqual(magnificationFilter);
        });

        it(`exposes the format`, () => {
          expect(texture.format).toEqual(format);
        });

        it(`exposes the type`, () => {
          expect(texture.type).toEqual(type);
        });

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });

        it(`returns null`, () => {
          expect(result).toBeNull();
        });
      });

      describe(`on successfully creating an instance`, () => {
        let createTexture: jasmine.Spy;
        let bindTexture: jasmine.Spy;
        let texParameteri: jasmine.Spy;
        let deleteTexture: jasmine.Spy;
        let generateMipmap: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;
        let texParameteriCalledBeforeTextureBound: boolean;
        let textureUnboundBeforePopulateCalled: boolean;
        let textureUnboundBeforeMipmapsGenerated: boolean;

        class TestTexture2D extends Texture2D<TFormat, TType> {
          populate(): void {
            return populate();
          }
        }

        let context: ContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
        >;
        let texture: TestTexture2D;
        let result: null | WebGLTexture;

        beforeAll(() => {
          createTexture = jasmine
            .createSpy(`createTexture`)
            .and.returnValue({ test: `texture` });
          bindTexture = jasmine.createSpy(`bindTexture`);
          texParameteriCalledBeforeTextureBound = false;
          texParameteri = jasmine
            .createSpy(`texParameteri`)
            .and.callFake(() => {
              if (
                !bindTexture.calls.allArgs().some((args) => args[1] !== null)
              ) {
                texParameteriCalledBeforeTextureBound = true;
              }
            });
          deleteTexture = jasmine.createSpy(`deleteTexture`);
          textureUnboundBeforeMipmapsGenerated = false;
          generateMipmap = jasmine
            .createSpy(`generateMipmap`)
            .and.callFake(() => {
              if (
                bindTexture.calls.allArgs().some((args) => args[1] === null)
              ) {
                textureUnboundBeforeMipmapsGenerated = true;
              }
            });
          textureUnboundBeforePopulateCalled = false;
          populate = jasmine.createSpy(`populate`).and.callFake(() => {
            if (bindTexture.calls.allArgs().some((args) => args[1] === null)) {
              textureUnboundBeforePopulateCalled = true;
            }
          });
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createTexture,
              bindTexture,
              texParameteri,
              deleteTexture,
              generateMipmap,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          texture = new TestTexture2D(
            context,
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            format,
            type
          );

          result = texture.createInstance();
        });

        it(`does not check for context loss`, () => {
          expect(isContextLost).not.toHaveBeenCalled();
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });

        it(`creates one texture`, () => {
          expect(createTexture).toHaveBeenCalledTimes(1);
        });

        it(`binds the created texture`, () => {
          expect(bindTexture).toHaveBeenCalledWith(Constants.Texture2D, {
            test: `texture`,
          });
        });

        it(`unbinds the created texture`, () => {
          expect(bindTexture).toHaveBeenCalledWith(Constants.Texture2D, null);
        });

        it(`does not bind any further textures`, () => {
          expect(bindTexture).toHaveBeenCalledTimes(2);
        });

        it(`binds the texture before setting texture parameters`, () => {
          expect(texParameteriCalledBeforeTextureBound).toBeFalse();
        });

        it(`populates the texture before unbinding it`, () => {
          expect(textureUnboundBeforePopulateCalled).toBeFalse();
        });

        it(`sets the X axis's wrapping mode`, () => {
          expect(texParameteri).toHaveBeenCalledWith(
            Constants.Texture2D,
            Constants.TextureWrapX,
            wrapX
          );
        });

        it(`sets the Y axis's wrapping mode`, () => {
          expect(texParameteri).toHaveBeenCalledWith(
            Constants.Texture2D,
            Constants.TextureWrapY,
            wrapY
          );
        });

        it(`sets the minification filter`, () => {
          expect(texParameteri).toHaveBeenCalledWith(
            Constants.Texture2D,
            Constants.TextureMinificationFilter,
            minificationFilter
          );
        });

        it(`sets the magnification filter`, () => {
          expect(texParameteri).toHaveBeenCalledWith(
            Constants.Texture2D,
            Constants.TextureMagnificationFilter,
            magnificationFilter
          );
        });

        it(`does not set any further texture parameters`, () => {
          expect(texParameteri).toHaveBeenCalledTimes(4);
        });

        if (generatesMipmaps) {
          it(`generates one set of mipmaps`, () => {
            expect(generateMipmap).toHaveBeenCalledTimes(1);
          });

          it(`generates the expected set of mipmaps`, () => {
            expect(generateMipmap).toHaveBeenCalledWith(Constants.Texture2D);
          });

          it(`generates mipmaps after populating the texture`, () => {
            expect(populate).toHaveBeenCalledBefore(generateMipmap);
          });

          it(`generates mipmaps before unbinding textures`, () => {
            expect(textureUnboundBeforeMipmapsGenerated).toBeFalse();
          });
        } else {
          it(`does not generate any mipmaps`, () => {
            expect(generateMipmap).not.toHaveBeenCalled();
          });
        }

        it(`does not delete any textures`, () => {
          expect(deleteTexture).not.toHaveBeenCalled();
        });

        it(`populates one texture`, () => {
          expect(populate).toHaveBeenCalledTimes(1);
        });

        it(`sets texture parameters before populating the texture`, () => {
          expect(texParameteri).toHaveBeenCalledBefore(populate);
        });

        it(`exposes the X wrapping mode`, () => {
          expect(texture.wrapX).toEqual(wrapX);
        });

        it(`exposes the Y wrapping mode`, () => {
          expect(texture.wrapY).toEqual(wrapY);
        });

        it(`exposes the minification filter`, () => {
          expect(texture.minificationFilter).toEqual(minificationFilter);
        });

        it(`exposes the magnification filter`, () => {
          expect(texture.magnificationFilter).toEqual(magnificationFilter);
        });

        it(`exposes the format`, () => {
          expect(texture.format).toEqual(format);
        });

        it(`exposes the type`, () => {
          expect(texture.type).toEqual(type);
        });

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });

        it(`returns the created texture`, () => {
          expect(result).toEqual({ test: `texture` });
        });
      });

      describe(`on deleting a null instance`, () => {
        let createTexture: jasmine.Spy;
        let bindTexture: jasmine.Spy;
        let texParameteri: jasmine.Spy;
        let deleteTexture: jasmine.Spy;
        let generateMipmap: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends Texture2D<TFormat, TType> {
          populate(): void {
            return populate();
          }
        }

        let context: ContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
        >;
        let texture: TestTexture2D;

        beforeAll(() => {
          createTexture = jasmine.createSpy(`createTexture`);
          bindTexture = jasmine.createSpy(`bindTexture`);
          texParameteri = jasmine.createSpy(`texParameteri`);
          deleteTexture = jasmine.createSpy(`deleteTexture`);
          generateMipmap = jasmine.createSpy(`generateMipmap`);
          populate = jasmine.createSpy(`populate`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createTexture,
              bindTexture,
              texParameteri,
              deleteTexture,
              generateMipmap,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          texture = new TestTexture2D(
            context,
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            format,
            type
          );

          texture.deleteInstance(null);
        });

        it(`does not check for context loss`, () => {
          expect(isContextLost).not.toHaveBeenCalled();
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });

        it(`does not create any textures`, () => {
          expect(createTexture).not.toHaveBeenCalled();
        });

        it(`does not bind any textures`, () => {
          expect(bindTexture).not.toHaveBeenCalled();
        });

        it(`does not set any texture parameters`, () => {
          expect(texParameteri).not.toHaveBeenCalled();
        });

        it(`does not generate any mipmaps`, () => {
          expect(generateMipmap).not.toHaveBeenCalled();
        });

        it(`does not delete any textures`, () => {
          expect(deleteTexture).not.toHaveBeenCalled();
        });

        it(`does not populate any textures`, () => {
          expect(populate).not.toHaveBeenCalled();
        });

        it(`exposes the X wrapping mode`, () => {
          expect(texture.wrapX).toEqual(wrapX);
        });

        it(`exposes the Y wrapping mode`, () => {
          expect(texture.wrapY).toEqual(wrapY);
        });

        it(`exposes the minification filter`, () => {
          expect(texture.minificationFilter).toEqual(minificationFilter);
        });

        it(`exposes the magnification filter`, () => {
          expect(texture.magnificationFilter).toEqual(magnificationFilter);
        });

        it(`exposes the format`, () => {
          expect(texture.format).toEqual(format);
        });

        it(`exposes the type`, () => {
          expect(texture.type).toEqual(type);
        });

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });
      });

      describe(`on deleting a non-null instance`, () => {
        let createTexture: jasmine.Spy;
        let bindTexture: jasmine.Spy;
        let texParameteri: jasmine.Spy;
        let deleteTexture: jasmine.Spy;
        let generateMipmap: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends Texture2D<TFormat, TType> {
          populate(): void {
            return populate();
          }
        }

        let context: ContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
        >;
        let texture: TestTexture2D;

        beforeAll(() => {
          createTexture = jasmine.createSpy(`createTexture`);
          bindTexture = jasmine.createSpy(`bindTexture`);
          texParameteri = jasmine.createSpy(`texParameteri`);
          deleteTexture = jasmine.createSpy(`deleteTexture`);
          generateMipmap = jasmine.createSpy(`generateMipmap`);
          populate = jasmine.createSpy(`populate`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createTexture,
              bindTexture,
              texParameteri,
              deleteTexture,
              generateMipmap,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          texture = new TestTexture2D(
            context,
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            format,
            type
          );

          texture.deleteInstance({ test: `texture` });
        });

        it(`does not check for context loss`, () => {
          expect(isContextLost).not.toHaveBeenCalled();
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });

        it(`does not create any textures`, () => {
          expect(createTexture).not.toHaveBeenCalled();
        });

        it(`does not bind any textures`, () => {
          expect(bindTexture).not.toHaveBeenCalled();
        });

        it(`does not set any texture parameters`, () => {
          expect(texParameteri).not.toHaveBeenCalled();
        });

        it(`does not generate any mipmaps`, () => {
          expect(generateMipmap).not.toHaveBeenCalled();
        });

        it(`deletes one texture`, () => {
          expect(deleteTexture).toHaveBeenCalledTimes(1);
        });

        it(`deletes the texture`, () => {
          expect(deleteTexture).toHaveBeenCalledWith({ test: `texture` });
        });

        it(`does not populate any textures`, () => {
          expect(populate).not.toHaveBeenCalled();
        });

        it(`exposes the X wrapping mode`, () => {
          expect(texture.wrapX).toEqual(wrapX);
        });

        it(`exposes the Y wrapping mode`, () => {
          expect(texture.wrapY).toEqual(wrapY);
        });

        it(`exposes the minification filter`, () => {
          expect(texture.minificationFilter).toEqual(minificationFilter);
        });

        it(`exposes the magnification filter`, () => {
          expect(texture.magnificationFilter).toEqual(magnificationFilter);
        });

        it(`exposes the format`, () => {
          expect(texture.format).toEqual(format);
        });

        it(`exposes the type`, () => {
          expect(texture.type).toEqual(type);
        });

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });
      });
    });
  }

  for (const wrapX of [
    Constants.Repeat,
    Constants.MirroredRepeat,
    Constants.ClampToEdge,
  ] as ReadonlyArray<WrappingMode>) {
    for (const wrapY of [
      Constants.Repeat,
      Constants.MirroredRepeat,
      Constants.ClampToEdge,
    ] as ReadonlyArray<WrappingMode>) {
      for (const magnificationFilter of [
        Constants.Linear,
        Constants.Nearest,
      ] as ReadonlyArray<MagnificationFilter>) {
        for (const minificationFilter of [
          Constants.Nearest,
          Constants.Linear,
        ] as ReadonlyArray<MinificationFilter>) {
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgb,
            Constants.UnsignedByte,
            false
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgb,
            Constants.UnsignedShort565,
            false
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgba,
            Constants.UnsignedByte,
            false
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgba,
            Constants.UnsignedShort4444,
            false
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgba,
            Constants.UnsignedShort5551,
            false
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Luminance,
            Constants.UnsignedByte,
            false
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Alpha,
            Constants.UnsignedByte,
            false
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.LuminanceAlpha,
            Constants.UnsignedByte,
            false
          );
        }
        for (const minificationFilter of [
          Constants.LinearMipmapLinear,
          Constants.NearestMipmapLinear,
          Constants.LinearMipmapNearest,
          Constants.NearestMipmapNearest,
        ] as ReadonlyArray<MinificationFilter>) {
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgb,
            Constants.UnsignedByte,
            true
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgb,
            Constants.UnsignedShort565,
            true
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgba,
            Constants.UnsignedByte,
            true
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgba,
            Constants.UnsignedShort4444,
            true
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Rgba,
            Constants.UnsignedShort5551,
            true
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Luminance,
            Constants.UnsignedByte,
            true
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.Alpha,
            Constants.UnsignedByte,
            true
          );
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            Constants.LuminanceAlpha,
            Constants.UnsignedByte,
            true
          );
        }
      }
    }
  }
});
