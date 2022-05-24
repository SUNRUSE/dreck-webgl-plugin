describe(`WebGlRenderbuffer`, () => {
  function Scenario<TFormat extends WebGlRenderbufferFormat>(
    description: string,
    format: TFormat
  ) {
    describe(description, () => {
      describe(`on construction`, () => {
        let createRenderbuffer: jasmine.Spy;
        let bindRenderbuffer: jasmine.Spy;
        let deleteRenderbuffer: jasmine.Spy;
        let renderbufferStorage: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;

        let context: WebGlContextInterface<
          | `createRenderbuffer`
          | `bindRenderbuffer`
          | `deleteRenderbuffer`
          | `renderbufferStorage`
          | `isContextLost`
        >;
        let renderbuffer: WebGlRenderbuffer<TFormat>;

        beforeAll(() => {
          createRenderbuffer = jasmine.createSpy(`createRenderbuffer`);
          bindRenderbuffer = jasmine.createSpy(`bindRenderbuffer`);
          deleteRenderbuffer = jasmine.createSpy(`deleteRenderbuffer`);
          renderbufferStorage = jasmine.createSpy(`renderbufferStorage`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createRenderbuffer,
              bindRenderbuffer,
              deleteRenderbuffer,
              renderbufferStorage,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          renderbuffer = new WebGlRenderbuffer<TFormat>(
            context,
            format,
            640,
            428
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

        it(`creates one renderbuffer`, () => {
          expect(createRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not bind any renderbuffers`, () => {
          expect(bindRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not delete any renderbuffers`, () => {
          expect(deleteRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not set the format of any renderbuffers`, () => {
          expect(renderbufferStorage).not.toHaveBeenCalled();
        });

        it(`exposes the format`, () => {
          expect(renderbuffer.format).toEqual(format);
        });

        it(`exposes the context`, () => {
          expect(renderbuffer.context).toBe(context);
        });

        it(`exposes the width`, () => {
          expect(renderbuffer.width).toEqual(640);
        });

        it(`exposes the height`, () => {
          expect(renderbuffer.height).toEqual(428);
        });
      });

      describe(`on failing to create an instance`, () => {
        let createRenderbuffer: jasmine.Spy;
        let bindRenderbuffer: jasmine.Spy;
        let deleteRenderbuffer: jasmine.Spy;
        let renderbufferStorage: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;

        let context: WebGlContextInterface<
          | `createRenderbuffer`
          | `bindRenderbuffer`
          | `deleteRenderbuffer`
          | `renderbufferStorage`
          | `isContextLost`
        >;
        let renderbuffer: WebGlRenderbuffer<TFormat>;
        let result: null | WebGLRenderbuffer;

        beforeAll(() => {
          createRenderbuffer = jasmine
            .createSpy(`createRenderbuffer`)
            .and.returnValue(null);
          bindRenderbuffer = jasmine.createSpy(`bindRenderbuffer`);
          deleteRenderbuffer = jasmine.createSpy(`deleteRenderbuffer`);
          renderbufferStorage = jasmine.createSpy(`renderbufferStorage`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createRenderbuffer,
              bindRenderbuffer,
              deleteRenderbuffer,
              renderbufferStorage,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          renderbuffer = new WebGlRenderbuffer<TFormat>(
            context,
            format,
            640,
            428
          );

          result = renderbuffer.createInstance();
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

        it(`creates one renderbuffer`, () => {
          expect(createRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`does not bind any renderbuffers`, () => {
          expect(bindRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not delete any renderbuffers`, () => {
          expect(deleteRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not set the format of any renderbuffers`, () => {
          expect(renderbufferStorage).not.toHaveBeenCalled();
        });

        it(`exposes the format`, () => {
          expect(renderbuffer.format).toEqual(format);
        });

        it(`exposes the context`, () => {
          expect(renderbuffer.context).toBe(context);
        });

        it(`exposes the width`, () => {
          expect(renderbuffer.width).toEqual(640);
        });

        it(`exposes the height`, () => {
          expect(renderbuffer.height).toEqual(428);
        });

        it(`returns null`, () => {
          expect(result).toBeNull();
        });
      });

      describe(`on successfully creating an instance`, () => {
        let createRenderbuffer: jasmine.Spy;
        let bindRenderbuffer: jasmine.Spy;
        let deleteRenderbuffer: jasmine.Spy;
        let renderbufferStorage: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;

        let context: WebGlContextInterface<
          | `createRenderbuffer`
          | `bindRenderbuffer`
          | `deleteRenderbuffer`
          | `renderbufferStorage`
          | `isContextLost`
        >;
        let renderbuffer: WebGlRenderbuffer<TFormat>;
        let result: null | WebGLRenderbuffer;

        beforeAll(() => {
          createRenderbuffer = jasmine
            .createSpy(`createRenderbuffer`)
            .and.returnValue({ test: `renderbuffer` });
          bindRenderbuffer = jasmine.createSpy(`bindRenderbuffer`);
          deleteRenderbuffer = jasmine.createSpy(`deleteRenderbuffer`);
          renderbufferStorage = jasmine.createSpy(`renderbufferStorage`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createRenderbuffer,
              bindRenderbuffer,
              deleteRenderbuffer,
              renderbufferStorage,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          renderbuffer = new WebGlRenderbuffer<TFormat>(
            context,
            format,
            640,
            428
          );

          result = renderbuffer.createInstance();
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

        it(`creates one renderbuffer`, () => {
          expect(createRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`binds the created renderbuffer`, () => {
          expect(bindRenderbuffer).toHaveBeenCalledWith(
            WebGlConstants.Renderbuffer,
            {
              test: `renderbuffer`,
            }
          );
        });

        it(`does not bind any further renderbuffers`, () => {
          expect(bindRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`does not delete any renderbuffers`, () => {
          expect(deleteRenderbuffer).not.toHaveBeenCalled();
        });

        it(`sets the format of one renderbuffer`, () => {
          expect(renderbufferStorage).toHaveBeenCalledTimes(1);
        });

        it(`sets the format of the renderbuffer`, () => {
          expect(renderbufferStorage).toHaveBeenCalledWith(
            WebGlConstants.Renderbuffer,
            format,
            640,
            428
          );
        });

        it(`exposes the format`, () => {
          expect(renderbuffer.format).toEqual(format);
        });

        it(`exposes the context`, () => {
          expect(renderbuffer.context).toBe(context);
        });

        it(`exposes the width`, () => {
          expect(renderbuffer.width).toEqual(640);
        });

        it(`exposes the height`, () => {
          expect(renderbuffer.height).toEqual(428);
        });

        it(`returns the created renderbuffer`, () => {
          expect(result).toEqual({ test: `renderbuffer` });
        });

        it(`sets the renderbuffer's format after binding it`, () => {
          expect(bindRenderbuffer).toHaveBeenCalledBefore(renderbufferStorage);
        });
      });

      describe(`on deleting a null instance`, () => {
        let createRenderbuffer: jasmine.Spy;
        let bindRenderbuffer: jasmine.Spy;
        let deleteRenderbuffer: jasmine.Spy;
        let renderbufferStorage: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;

        let context: WebGlContextInterface<
          | `createRenderbuffer`
          | `bindRenderbuffer`
          | `deleteRenderbuffer`
          | `renderbufferStorage`
          | `isContextLost`
        >;
        let renderbuffer: WebGlRenderbuffer<TFormat>;

        beforeAll(() => {
          createRenderbuffer = jasmine.createSpy(`createRenderbuffer`);
          bindRenderbuffer = jasmine.createSpy(`bindRenderbuffer`);
          deleteRenderbuffer = jasmine.createSpy(`deleteRenderbuffer`);
          renderbufferStorage = jasmine.createSpy(`renderbufferStorage`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createRenderbuffer,
              bindRenderbuffer,
              deleteRenderbuffer,
              renderbufferStorage,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          renderbuffer = new WebGlRenderbuffer<TFormat>(
            context,
            format,
            640,
            428
          );

          renderbuffer.deleteInstance(null);
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

        it(`does not create any renderbuffers`, () => {
          expect(createRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not bind any renderbuffers`, () => {
          expect(bindRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not delete any renderbuffers`, () => {
          expect(deleteRenderbuffer).not.toHaveBeenCalled();
        });

        it(`does not set the format of any renderbuffers`, () => {
          expect(renderbufferStorage).not.toHaveBeenCalled();
        });

        it(`exposes the format`, () => {
          expect(renderbuffer.format).toEqual(format);
        });

        it(`exposes the context`, () => {
          expect(renderbuffer.context).toBe(context);
        });

        it(`exposes the width`, () => {
          expect(renderbuffer.width).toEqual(640);
        });

        it(`exposes the height`, () => {
          expect(renderbuffer.height).toEqual(428);
        });
      });

      describe(`on deleting a non-null instance`, () => {
        let createRenderbuffer: jasmine.Spy;
        let bindRenderbuffer: jasmine.Spy;
        let deleteRenderbuffer: jasmine.Spy;
        let renderbufferStorage: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;

        let context: WebGlContextInterface<
          | `createRenderbuffer`
          | `bindRenderbuffer`
          | `deleteRenderbuffer`
          | `renderbufferStorage`
          | `isContextLost`
        >;
        let renderbuffer: WebGlRenderbuffer<TFormat>;

        beforeAll(() => {
          createRenderbuffer = jasmine.createSpy(`createRenderbuffer`);
          bindRenderbuffer = jasmine.createSpy(`bindRenderbuffer`);
          deleteRenderbuffer = jasmine.createSpy(`deleteRenderbuffer`);
          renderbufferStorage = jasmine.createSpy(`renderbufferStorage`);
          isContextLost = jasmine.createSpy(`isContextLost`);
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);

          context = {
            gl: {
              createRenderbuffer,
              bindRenderbuffer,
              deleteRenderbuffer,
              renderbufferStorage: renderbufferStorage,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };

          renderbuffer = new WebGlRenderbuffer<TFormat>(
            context,
            format,
            640,
            428
          );

          renderbuffer.deleteInstance({ test: `renderbuffer` });
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

        it(`does not create any renderbuffers`, () => {
          expect(createRenderbuffer).not.toHaveBeenCalled();
        });

        it(`unbinds the current renderbuffer`, () => {
          expect(bindRenderbuffer).toHaveBeenCalledWith(
            WebGlConstants.Renderbuffer,
            null
          );
        });

        it(`does not bind any further renderbuffers`, () => {
          expect(bindRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`deletes one renderbuffer`, () => {
          expect(deleteRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`deletes the renderbuffer`, () => {
          expect(deleteRenderbuffer).toHaveBeenCalledWith({
            test: `renderbuffer`,
          });
        });

        it(`does not set the format of any renderbuffers`, () => {
          expect(renderbufferStorage).not.toHaveBeenCalled();
        });

        it(`exposes the format`, () => {
          expect(renderbuffer.format).toEqual(format);
        });

        it(`exposes the context`, () => {
          expect(renderbuffer.context).toBe(context);
        });

        it(`exposes the width`, () => {
          expect(renderbuffer.width).toEqual(640);
        });

        it(`exposes the height`, () => {
          expect(renderbuffer.height).toEqual(428);
        });

        it(`unbinds the renderbuffer before deleting it`, () => {
          expect(bindRenderbuffer).toHaveBeenCalledBefore(deleteRenderbuffer);
        });
      });
    });
  }

  Scenario(`RGBA4`, WebGlConstants.Rgba4);
  Scenario(`RGB565`, WebGlConstants.Rgb565);
  Scenario(`RGBA5551`, WebGlConstants.Rgba5551);
  Scenario(`depth`, WebGlConstants.DepthComponent16);
  Scenario(`stencil`, WebGlConstants.StencilIndex8);
  Scenario(`depth stencil`, WebGlConstants.DepthStencil);
});
