describe(`WebGlImageTexture2D`, () => {
  describe(`on construction`, () => {
    let createTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let texParameteri: jasmine.Spy;
    let deleteTexture: jasmine.Spy;
    let generateMipmap: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let texImage2D: jasmine.Spy;
    let render: jasmine.Spy;
    let image: TexImageSource;

    let context: WebGlContextInterface<
      | `createTexture`
      | `bindTexture`
      | `texParameteri`
      | `deleteTexture`
      | `generateMipmap`
      | `isContextLost`
      | `texImage2D`
    >;
    let texture: WebGlImageTexture2D<
      WebGlConstants.Rgba,
      WebGlConstants.UnsignedByte
    >;

    beforeAll(() => {
      createTexture = jasmine.createSpy(`createTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      texParameteri = jasmine.createSpy(`texParameteri`);
      deleteTexture = jasmine.createSpy(`deleteTexture`);
      generateMipmap = jasmine.createSpy(`generateMipmap`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      texImage2D = jasmine.createSpy(`texImage2D`);
      render = jasmine.createSpy(`render`);
      image = `Test Image` as unknown as TexImageSource;

      context = {
        gl: {
          createTexture,
          bindTexture,
          texParameteri,
          deleteTexture,
          generateMipmap,
          isContextLost,
          texImage2D,
        },
        timesContextRestored: 7,
        render,
      };

      texture = new WebGlImageTexture2D(
        context,
        WebGlConstants.ClampToEdge,
        WebGlConstants.MirroredRepeat,
        WebGlConstants.NearestMipmapLinear,
        WebGlConstants.Nearest,
        WebGlConstants.Rgba,
        WebGlConstants.UnsignedByte,
        image
      );
    });

    it(`does not check for context loss`, () => {
      expect(isContextLost).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
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

    it(`exposes the X wrapping mode`, () => {
      expect(texture.wrapX).toEqual(WebGlConstants.ClampToEdge);
    });

    it(`exposes the Y wrapping mode`, () => {
      expect(texture.wrapY).toEqual(WebGlConstants.MirroredRepeat);
    });

    it(`exposes the minification filter`, () => {
      expect(texture.minificationFilter).toEqual(
        WebGlConstants.NearestMipmapLinear
      );
    });

    it(`exposes the magnification filter`, () => {
      expect(texture.magnificationFilter).toEqual(WebGlConstants.Nearest);
    });

    it(`exposes the format`, () => {
      expect(texture.format).toEqual(WebGlConstants.Rgba);
    });

    it(`exposes the type`, () => {
      expect(texture.type).toEqual(WebGlConstants.UnsignedByte);
    });

    it(`exposes the image`, () => {
      expect(texture.image).toBe(image);
    });

    it(`exposes the context`, () => {
      expect(texture.context).toBe(context);
    });

    it(`does not populate any textures`, () => {
      expect(texImage2D).not.toHaveBeenCalled();
    });
  });

  describe(`on population`, () => {
    let createTexture: jasmine.Spy;
    let bindTexture: jasmine.Spy;
    let texParameteri: jasmine.Spy;
    let deleteTexture: jasmine.Spy;
    let generateMipmap: jasmine.Spy;
    let isContextLost: jasmine.Spy;
    let texImage2D: jasmine.Spy;
    let render: jasmine.Spy;
    let image: TexImageSource;

    let context: WebGlContextInterface<
      | `createTexture`
      | `bindTexture`
      | `texParameteri`
      | `deleteTexture`
      | `generateMipmap`
      | `isContextLost`
      | `texImage2D`
    >;
    let texture: WebGlImageTexture2D<
      WebGlConstants.Rgba,
      WebGlConstants.UnsignedByte
    >;

    beforeAll(() => {
      createTexture = jasmine.createSpy(`createTexture`);
      bindTexture = jasmine.createSpy(`bindTexture`);
      texParameteri = jasmine.createSpy(`texParameteri`);
      deleteTexture = jasmine.createSpy(`deleteTexture`);
      generateMipmap = jasmine.createSpy(`generateMipmap`);
      isContextLost = jasmine.createSpy(`isContextLost`);
      texImage2D = jasmine.createSpy(`texImage2D`);
      render = jasmine.createSpy(`render`);
      image = `Test Image` as unknown as TexImageSource;

      context = {
        gl: {
          createTexture,
          bindTexture,
          texParameteri,
          deleteTexture,
          generateMipmap,
          isContextLost,
          texImage2D,
        },
        timesContextRestored: 7,
        render,
      };

      texture = new WebGlImageTexture2D(
        context,
        WebGlConstants.ClampToEdge,
        WebGlConstants.MirroredRepeat,
        WebGlConstants.NearestMipmapLinear,
        WebGlConstants.Nearest,
        WebGlConstants.Rgba,
        WebGlConstants.UnsignedByte,
        image
      );

      texture.populate();
    });

    it(`does not check for context loss`, () => {
      expect(isContextLost).not.toHaveBeenCalled();
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
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

    it(`exposes the X wrapping mode`, () => {
      expect(texture.wrapX).toEqual(WebGlConstants.ClampToEdge);
    });

    it(`exposes the Y wrapping mode`, () => {
      expect(texture.wrapY).toEqual(WebGlConstants.MirroredRepeat);
    });

    it(`exposes the minification filter`, () => {
      expect(texture.minificationFilter).toEqual(
        WebGlConstants.NearestMipmapLinear
      );
    });

    it(`exposes the magnification filter`, () => {
      expect(texture.magnificationFilter).toEqual(WebGlConstants.Nearest);
    });

    it(`exposes the format`, () => {
      expect(texture.format).toEqual(WebGlConstants.Rgba);
    });

    it(`exposes the type`, () => {
      expect(texture.type).toEqual(WebGlConstants.UnsignedByte);
    });

    it(`exposes the image`, () => {
      expect(texture.image).toBe(image);
    });

    it(`exposes the context`, () => {
      expect(texture.context).toBe(context);
    });

    it(`populates one texture`, () => {
      expect(texImage2D).toHaveBeenCalledTimes(1);
    });

    it(`populates the texture`, () => {
      expect(texImage2D).toHaveBeenCalledWith(
        WebGlConstants.Texture2D,
        0,
        WebGlConstants.Rgba,
        WebGlConstants.Rgba,
        WebGlConstants.UnsignedByte,
        image
      );
    });
  });
});
