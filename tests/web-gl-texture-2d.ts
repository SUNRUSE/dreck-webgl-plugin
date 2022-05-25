describe(`WebGlTexture2D`, () => {
  function Scenario(
    wrapX: WebGlWrappingMode,
    wrapY: WebGlWrappingMode,
    minificationFilter: webGlMinificationFilter,
    magnificationFilter: WebGlMagnificationFilter,
    generatesMipmaps: boolean
  ): void {
    const descriptionFragments: string[] = [];

    switch (wrapX) {
      case WebGlConstants.Repeat:
        descriptionFragments.push(`repeating on X`);
        break;

      case WebGlConstants.MirroredRepeat:
        descriptionFragments.push(`mirroring on X`);
        break;

      case WebGlConstants.ClampToEdge:
        descriptionFragments.push(`clamping on X`);
        break;
    }

    switch (wrapY) {
      case WebGlConstants.Repeat:
        descriptionFragments.push(`repeating on Y`);
        break;

      case WebGlConstants.MirroredRepeat:
        descriptionFragments.push(`mirroring on Y`);
        break;

      case WebGlConstants.ClampToEdge:
        descriptionFragments.push(`clamping on Y`);
        break;
    }

    switch (minificationFilter) {
      case WebGlConstants.Linear:
        descriptionFragments.push(`linearly minifying`);
        break;
      case WebGlConstants.Nearest:
        descriptionFragments.push(`nearest minifying`);
        break;
      case WebGlConstants.NearestMipmapNearest:
        descriptionFragments.push(`nearest-mipmap-nearest minifying`);
        break;
      case WebGlConstants.NearestMipmapLinear:
        descriptionFragments.push(`nearest-mipmap-linear minifying`);
        break;
      case WebGlConstants.LinearMipmapNearest:
        descriptionFragments.push(`linear-mipmap-nearest minifying`);
        break;
      case WebGlConstants.LinearMipmapLinear:
        descriptionFragments.push(`linear-mipmap-linear minifying`);
        break;
    }

    switch (magnificationFilter) {
      case WebGlConstants.Linear:
        descriptionFragments.push(`linearly magnifying`);
        break;
      case WebGlConstants.Nearest:
        descriptionFragments.push(`nearest magnifying`);
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
        let getContextAttributes: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends WebGlTexture2D<`getContextAttributes`> {
          /* istanbul ignore next */
          populate(): void {
            return populate();
          }
        }

        let context: WebGlContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
          | `getContextAttributes`
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
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
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
              getContextAttributes,
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
            magnificationFilter
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

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });

        it(`does not interact with additional elements of the context`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });
      });

      describe(`on failing to create an instance`, () => {
        let createTexture: jasmine.Spy;
        let bindTexture: jasmine.Spy;
        let texParameteri: jasmine.Spy;
        let deleteTexture: jasmine.Spy;
        let generateMipmap: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let getContextAttributes: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends WebGlTexture2D<`getContextAttributes`> {
          /* istanbul ignore next */
          populate(): void {
            return populate();
          }
        }

        let context: WebGlContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
          | `getContextAttributes`
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
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
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
              getContextAttributes,
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
            magnificationFilter
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

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });

        it(`does not interact with additional elements of the context`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
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
        let getContextAttributes: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;
        let texParameteriCalledBeforeTextureBound: boolean;
        let textureUnboundBeforePopulateCalled: boolean;
        let textureUnboundBeforeMipmapsGenerated: boolean;

        class TestTexture2D extends WebGlTexture2D<`getContextAttributes`> {
          populate(): void {
            return populate();
          }
        }

        let context: WebGlContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
          | `getContextAttributes`
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
              /* istanbul ignore next */
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
              /* istanbul ignore next */
              if (
                bindTexture.calls.allArgs().some((args) => args[1] === null)
              ) {
                textureUnboundBeforeMipmapsGenerated = true;
              }
            });
          textureUnboundBeforePopulateCalled = false;
          populate = jasmine.createSpy(`populate`).and.callFake(() => {
            /* istanbul ignore next */
            if (bindTexture.calls.allArgs().some((args) => args[1] === null)) {
              textureUnboundBeforePopulateCalled = true;
            }
          });
          isContextLost = jasmine.createSpy(`isContextLost`);
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
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
              getContextAttributes,
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
            magnificationFilter
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
          expect(bindTexture).toHaveBeenCalledWith(WebGlConstants.Texture2D, {
            test: `texture`,
          });
        });

        it(`unbinds the created texture`, () => {
          expect(bindTexture).toHaveBeenCalledWith(
            WebGlConstants.Texture2D,
            null
          );
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
            WebGlConstants.Texture2D,
            WebGlConstants.TextureWrapX,
            wrapX
          );
        });

        it(`sets the Y axis's wrapping mode`, () => {
          expect(texParameteri).toHaveBeenCalledWith(
            WebGlConstants.Texture2D,
            WebGlConstants.TextureWrapY,
            wrapY
          );
        });

        it(`sets the minification filter`, () => {
          expect(texParameteri).toHaveBeenCalledWith(
            WebGlConstants.Texture2D,
            WebGlConstants.TextureMinificationFilter,
            minificationFilter
          );
        });

        it(`sets the magnification filter`, () => {
          expect(texParameteri).toHaveBeenCalledWith(
            WebGlConstants.Texture2D,
            WebGlConstants.TextureMagnificationFilter,
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
            expect(generateMipmap).toHaveBeenCalledWith(
              WebGlConstants.Texture2D
            );
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

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });

        it(`does not interact with additional elements of the context`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
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
        let getContextAttributes: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends WebGlTexture2D<`getContextAttributes`> {
          /* istanbul ignore next */
          populate(): void {
            return populate();
          }
        }

        let context: WebGlContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
          | `getContextAttributes`
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
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
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
              getContextAttributes,
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
            magnificationFilter
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

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });

        it(`does not interact with additional elements of the context`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });
      });

      describe(`on deleting a non-null instance`, () => {
        let createTexture: jasmine.Spy;
        let bindTexture: jasmine.Spy;
        let texParameteri: jasmine.Spy;
        let deleteTexture: jasmine.Spy;
        let generateMipmap: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let getContextAttributes: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let populate: jasmine.Spy;

        class TestTexture2D extends WebGlTexture2D<`getContextAttributes`> {
          /* istanbul ignore next */
          populate(): void {
            return populate();
          }
        }

        let context: WebGlContextInterface<
          | `createTexture`
          | `bindTexture`
          | `texParameteri`
          | `deleteTexture`
          | `generateMipmap`
          | `isContextLost`
          | `getContextAttributes`
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
          getContextAttributes = jasmine.createSpy(`getContextAttributes`);
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
              getContextAttributes,
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
            magnificationFilter
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

        it(`exposes the context`, () => {
          expect(texture.context).toBe(context);
        });

        it(`does not interact with additional elements of the context`, () => {
          expect(getContextAttributes).not.toHaveBeenCalled();
        });
      });
    });
  }

  for (const wrapX of [
    WebGlConstants.Repeat,
    WebGlConstants.MirroredRepeat,
    WebGlConstants.ClampToEdge,
  ] as ReadonlyArray<WebGlWrappingMode>) {
    for (const wrapY of [
      WebGlConstants.Repeat,
      WebGlConstants.MirroredRepeat,
      WebGlConstants.ClampToEdge,
    ] as ReadonlyArray<WebGlWrappingMode>) {
      for (const magnificationFilter of [
        WebGlConstants.Linear,
        WebGlConstants.Nearest,
      ] as ReadonlyArray<WebGlMagnificationFilter>) {
        for (const minificationFilter of [
          WebGlConstants.Nearest,
          WebGlConstants.Linear,
        ] as ReadonlyArray<webGlMinificationFilter>) {
          Scenario(
            wrapX,
            wrapY,
            minificationFilter,
            magnificationFilter,
            false
          );
        }
        for (const minificationFilter of [
          WebGlConstants.LinearMipmapLinear,
          WebGlConstants.NearestMipmapLinear,
          WebGlConstants.LinearMipmapNearest,
          WebGlConstants.NearestMipmapNearest,
        ] as ReadonlyArray<webGlMinificationFilter>) {
          Scenario(wrapX, wrapY, minificationFilter, magnificationFilter, true);
        }
      }
    }
  }
});
