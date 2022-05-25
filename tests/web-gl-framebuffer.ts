describe(`WebGlFramebuffer`, () => {
  describe(`without a depth or stencil renderbuffer`, () => {
    describe(`on construction`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine.createSpy(`createFramebuffer`);
        checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine.createSpy(
          `colorAttachment0GetInstance`
        );
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };

        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);
      });

      it(`does not create any framebuffers`, () => {
        expect(createFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not check framebuffer status`, () => {
        expect(checkFramebufferStatus).not.toHaveBeenCalled();
      });

      it(`does not bind any framebuffers`, () => {
        expect(bindFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not delete any framebuffers`, () => {
        expect(deleteFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not attach any 2D textures to any framebuffers`, () => {
        expect(framebufferTexture2D).not.toHaveBeenCalled();
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`checks whether color attachment 0 is from another context once`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether color attachment 0 is from another context`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledWith(
          framebuffer
        );
      });

      it(`does not attempt to get an instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).not.toHaveBeenCalled();
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });
    });

    describe(`on failing to create an instance of color attachment 0`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;

      let result: null | WebGLFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine.createSpy(`createFramebuffer`);
        checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine
          .createSpy(`colorAttachment0GetInstance`)
          .and.returnValue(null);
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);

        result = framebuffer.createInstance();
      });

      it(`does not create any framebuffers`, () => {
        expect(createFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not check framebuffer status`, () => {
        expect(checkFramebufferStatus).not.toHaveBeenCalled();
      });

      it(`does not bind any framebuffers`, () => {
        expect(bindFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not delete any framebuffers`, () => {
        expect(deleteFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not attach any 2D textures to any framebuffers`, () => {
        expect(framebufferTexture2D).not.toHaveBeenCalled();
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not check whether color attachment 0 is from another context again`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`attempts to get one instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`on failing to create a framebuffer`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;
      let result: null | WebGLFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine
          .createSpy(`createFramebuffer`)
          .and.returnValue(null);
        checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine
          .createSpy(`colorAttachment0GetInstance`)
          .and.returnValue({ test: `colorAttachment0` });
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);

        result = framebuffer.createInstance();
      });

      it(`creates one framebuffer`, () => {
        expect(createFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`does not check framebuffer status`, () => {
        expect(checkFramebufferStatus).not.toHaveBeenCalled();
      });

      it(`does not bind any framebuffers`, () => {
        expect(bindFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not delete any framebuffers`, () => {
        expect(deleteFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not attach any 2D textures to any framebuffers`, () => {
        expect(framebufferTexture2D).not.toHaveBeenCalled();
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not check whether color attachment 0 is from another context again`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`attempts to get one instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`on producing an incomplete framebuffer due to context loss`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;
      let result: null | WebGLFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine
          .createSpy(`createFramebuffer`)
          .and.returnValue({ test: `framebuffer` });
        checkFramebufferStatus = jasmine
          .createSpy(`checkFramebufferStatus`)
          .and.returnValue(`Test Invalid Status`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine
          .createSpy(`isContextLost`)
          .and.returnValue(true);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine
          .createSpy(`colorAttachment0GetInstance`)
          .and.returnValue({ test: `colorAttachment0` });
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);

        result = framebuffer.createInstance();
      });

      it(`creates one framebuffer`, () => {
        expect(createFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`checks framebuffer status once`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledTimes(1);
      });

      it(`checks the status of the framebuffer`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer
        );
      });

      it(`binds one framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`binds the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          {
            test: `framebuffer`,
          }
        );
      });

      it(`does not delete any framebuffers`, () => {
        expect(deleteFramebuffer).not.toHaveBeenCalled();
      });

      it(`attaches one 2D texture to a framebuffer`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledTimes(1);
      });

      it(`attaches color attachment 0 to the framebuffer`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          WebGlConstants.ColorAttachment0,
          WebGlConstants.Texture2D,
          { test: `colorAttachment0` },
          0
        );
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
      });

      it(`checks for context loss once`, () => {
        expect(isContextLost).toHaveBeenCalledTimes(1);
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not add any event listeners`, () => {
        expect(addEventListener).not.toHaveBeenCalled();
      });

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not check whether color attachment 0 is from another context again`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`gets one instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
      });

      it(`attaches 2D textures after binding the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledBefore(framebufferTexture2D);
      });

      it(`checks framebuffer status after attaching 2D textures`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledBefore(
          checkFramebufferStatus
        );
      });

      it(`checks for context loss after checking framebuffer status`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledBefore(isContextLost);
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });

      it(`returns null`, () => {
        expect(result).toBeNull();
      });
    });

    describe(`on producing an incomplete framebuffer for a reason other than context loss`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;
      let error: unknown;
      let attached2DTextureBeforeBindingFramebuffer: boolean;
      let unboundFramebufferBeforeCheckingForContextLoss: boolean;

      beforeAll(() => {
        createFramebuffer = jasmine
          .createSpy(`createFramebuffer`)
          .and.returnValue({ test: `framebuffer` });
        checkFramebufferStatus = jasmine
          .createSpy(`checkFramebufferStatus`)
          .and.returnValue(`Test Invalid Status`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        attached2DTextureBeforeBindingFramebuffer = false;
        framebufferTexture2D = jasmine
          .createSpy(`framebufferTexture2D`)
          .and.callFake(() => {
            /* istanbul ignore next */
            if (
              !bindFramebuffer.calls.allArgs().some((args) => args[1] !== null)
            ) {
              attached2DTextureBeforeBindingFramebuffer = true;
            }
          });
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        unboundFramebufferBeforeCheckingForContextLoss = false;
        isContextLost = jasmine.createSpy(`isContextLost`).and.callFake(() => {
          /* istanbul ignore next */
          if (
            bindFramebuffer.calls.allArgs().some((args) => args[1] === null)
          ) {
            unboundFramebufferBeforeCheckingForContextLoss = true;
          }

          return false;
        });
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine
          .createSpy(`colorAttachment0GetInstance`)
          .and.returnValue({ test: `colorAttachment0` });
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);

        try {
          framebuffer.createInstance();

          /* istanbul ignore next */
          error = null;
        } catch (e) {
          error = e;
        }
      });

      it(`creates one framebuffer`, () => {
        expect(createFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`checks framebuffer status once`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledTimes(1);
      });

      it(`checks the status of the framebuffer`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer
        );
      });

      it(`binds two framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledTimes(2);
      });

      it(`binds the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          {
            test: `framebuffer`,
          }
        );
      });

      it(`unbinds the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          null
        );
      });

      it(`deletes one framebuffer`, () => {
        expect(deleteFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`deletes the framebuffer`, () => {
        expect(deleteFramebuffer).toHaveBeenCalledWith({ test: `framebuffer` });
      });

      it(`attaches one 2D texture to a framebuffer`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledTimes(1);
      });

      it(`attaches color attachment 0 to the framebuffer`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          WebGlConstants.ColorAttachment0,
          WebGlConstants.Texture2D,
          { test: `colorAttachment0` },
          0
        );
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
      });

      it(`checks for context loss once`, () => {
        expect(isContextLost).toHaveBeenCalledTimes(1);
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`does not add any event listeners`, () => {
        expect(addEventListener).not.toHaveBeenCalled();
      });

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not check whether color attachment 0 is from another context again`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`gets one instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
      });

      it(`attaches 2D textures after binding the framebuffer`, () => {
        expect(attached2DTextureBeforeBindingFramebuffer).toBeFalse();
      });

      it(`checks framebuffer status after attaching 2D textures`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledBefore(
          checkFramebufferStatus
        );
      });

      it(`checks for context loss after checking framebuffer status`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledBefore(isContextLost);
      });

      it(`unbinds the framebuffer after checking for context loss`, () => {
        expect(unboundFramebufferBeforeCheckingForContextLoss).toBeFalse();
      });

      it(`deletes the framebuffer after unbinding it`, () => {
        expect(bindFramebuffer).toHaveBeenCalledBefore(deleteFramebuffer);
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });

      it(`throws the expected error`, () => {
        expect(error).toEqual(new Error(`Failed to construct a framebuffer.`));
      });
    });

    describe(`on producing a complete framebuffer`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;
      let result: null | WebGLFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine
          .createSpy(`createFramebuffer`)
          .and.returnValue({ test: `framebuffer` });
        checkFramebufferStatus = jasmine
          .createSpy(`checkFramebufferStatus`)
          .and.returnValue(WebGlConstants.FramebufferComplete);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine
          .createSpy(`colorAttachment0GetInstance`)
          .and.returnValue({ test: `colorAttachment0` });
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);

        result = framebuffer.createInstance();
      });

      it(`creates one framebuffer`, () => {
        expect(createFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`checks framebuffer status once`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledTimes(1);
      });

      it(`checks the status of the framebuffer`, () => {
        expect(checkFramebufferStatus).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer
        );
      });

      it(`binds one framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`binds the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          {
            test: `framebuffer`,
          }
        );
      });

      it(`does not delete any framebuffers`, () => {
        expect(deleteFramebuffer).not.toHaveBeenCalled();
      });

      it(`attaches one 2D texture to a framebuffer`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledTimes(1);
      });

      it(`attaches color attachment 0 to the framebuffer`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          WebGlConstants.ColorAttachment0,
          WebGlConstants.Texture2D,
          { test: `colorAttachment0` },
          0
        );
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`does not check whether color attachment 0 is from another context again`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`gets one instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
      });

      it(`attaches 2D textures after binding the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledBefore(framebufferTexture2D);
      });

      it(`checks framebuffer status after attaching 2D textures`, () => {
        expect(framebufferTexture2D).toHaveBeenCalledBefore(
          checkFramebufferStatus
        );
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });

      it(`returns the framebuffer`, () => {
        expect(result).toEqual({ test: `framebuffer` });
      });
    });

    describe(`on deleting a null instance`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine.createSpy(`createFramebuffer`);
        checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine.createSpy(
          `colorAttachment0GetInstance`
        );
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);

        framebuffer.deleteInstance(null);
      });

      it(`does not create any framebuffers`, () => {
        expect(createFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not check framebuffer status`, () => {
        expect(checkFramebufferStatus).not.toHaveBeenCalled();
      });

      it(`does not bind any framebuffers`, () => {
        expect(bindFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not delete any framebuffers`, () => {
        expect(deleteFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not attach any 2D textures to any framebuffers`, () => {
        expect(framebufferTexture2D).not.toHaveBeenCalled();
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`checks whether color attachment 0 is from another context once`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether color attachment 0 is from another context`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledWith(
          framebuffer
        );
      });

      it(`does not attempt to get an instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).not.toHaveBeenCalled();
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });
    });

    describe(`on deleting a non-null instance`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let framebuffer: WebGlFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine.createSpy(`createFramebuffer`);
        checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine.createSpy(
          `colorAttachment0GetInstance`
        );
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        framebuffer = new WebGlFramebuffer(context, colorAttachment0, null);

        framebuffer.deleteInstance({ test: `framebuffer` });
      });

      it(`does not create any framebuffers`, () => {
        expect(createFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not check framebuffer status`, () => {
        expect(checkFramebufferStatus).not.toHaveBeenCalled();
      });

      it(`unbinds one framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`unbinds the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          null
        );
      });

      it(`deletes one framebuffer`, () => {
        expect(deleteFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`deletes the framebuffer`, () => {
        expect(deleteFramebuffer).toHaveBeenCalledWith({ test: `framebuffer` });
      });

      it(`does not attach any 2D textures to any framebuffers`, () => {
        expect(framebufferTexture2D).not.toHaveBeenCalled();
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`checks whether color attachment 0 is from another context once`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether color attachment 0 is from another context`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledWith(
          framebuffer
        );
      });

      it(`does not attempt to get an instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).not.toHaveBeenCalled();
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBeNull();
      });
    });
  });

  const depthAndOrStencilAttachmentScenario = (
    description: string,
    format:
      | WebGlConstants.DepthComponent16
      | WebGlConstants.StencilIndex8
      | WebGlConstants.DepthStencil,
    attachment: WebGlConstants
  ): void => {
    describe(description, () => {
      describe(`on construction`, () => {
        let createFramebuffer: jasmine.Spy;
        let checkFramebufferStatus: jasmine.Spy;
        let bindFramebuffer: jasmine.Spy;
        let deleteFramebuffer: jasmine.Spy;
        let framebufferTexture2D: jasmine.Spy;
        let framebufferRenderbuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let context: WebGlContextInterface<
          | `createFramebuffer`
          | `checkFramebufferStatus`
          | `bindFramebuffer`
          | `deleteFramebuffer`
          | `framebufferTexture2D`
          | `framebufferRenderbuffer`
          | `isContextLost`
        >;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let colorAttachment0ThrowIfDisposed: jasmine.Spy;
        let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
        let colorAttachment0GetInstance: jasmine.Spy;
        let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
          readonly format: WebGlConstants.Rgba;
          readonly type: WebGlConstants.UnsignedByte;
        };
        let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
        let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
        let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
        let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        };
        let framebuffer: WebGlFramebuffer;

        beforeAll(() => {
          createFramebuffer = jasmine.createSpy(`createFramebuffer`);
          checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
          bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
          deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
          framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
          framebufferRenderbuffer = jasmine.createSpy(
            `framebufferRenderbuffer`
          );
          isContextLost = jasmine.createSpy(`isContextLost`);
          context = {
            gl: {
              createFramebuffer,
              checkFramebufferStatus,
              bindFramebuffer,
              deleteFramebuffer,
              framebufferTexture2D,
              framebufferRenderbuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);
          colorAttachment0ThrowIfDisposed = jasmine.createSpy(
            `colorAttachment0ThrowIfDisposed`
          );
          colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
            `colorAttachment0ThrowIfFromAnotherContext`
          );
          colorAttachment0GetInstance = jasmine.createSpy(
            `colorAttachment0GetInstance`
          );
          colorAttachment0 = {
            context: `Test WebGlContext`,
            throwIfDisposed: colorAttachment0ThrowIfDisposed,
            throwIfFromAnotherContext:
              colorAttachment0ThrowIfFromAnotherContext,
            getInstance: colorAttachment0GetInstance,
            format: WebGlConstants.Rgba,
            type: WebGlConstants.UnsignedByte,
          };
          depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfDisposed`
          );
          depthAndOrStencilAttachmentThrowIfFromAnotherContext =
            jasmine.createSpy(
              `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
            );
          depthAndOrStencilAttachmentGetInstance = jasmine.createSpy(
            `depthAndOrStencilAttachmentGetInstance`
          );
          depthAndOrStencilAttachment = {
            context: `Test WebGlContext`,
            throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
            throwIfFromAnotherContext:
              depthAndOrStencilAttachmentThrowIfFromAnotherContext,
            getInstance: depthAndOrStencilAttachmentGetInstance,
            format,
          };

          framebuffer = new WebGlFramebuffer(
            context,
            colorAttachment0,
            depthAndOrStencilAttachment
          );
        });

        it(`does not create any framebuffers`, () => {
          expect(createFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not check framebuffer status`, () => {
          expect(checkFramebufferStatus).not.toHaveBeenCalled();
        });

        it(`does not bind any framebuffers`, () => {
          expect(bindFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not delete any framebuffers`, () => {
          expect(deleteFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not attach any 2D textures to any framebuffers`, () => {
          expect(framebufferTexture2D).not.toHaveBeenCalled();
        });

        it(`does not attach any renderbuffers to any framebuffers`, () => {
          expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

        it(`does not check whether color attachment 0 is disposed`, () => {
          expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
        });

        it(`checks whether color attachment 0 is from another context once`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`checks whether color attachment 0 is from another context`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledWith(framebuffer);
        });

        it(`does not attempt to get an instance of the depth and/or stencil attachment`, () => {
          expect(depthAndOrStencilAttachmentGetInstance).not.toHaveBeenCalled();
        });

        it(`does not check whether the depth and/or stencil attachment is disposed`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfDisposed
          ).not.toHaveBeenCalled();
        });

        it(`checks whether the depth and/or stencil attachment is from another context once`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`checks whether the depth and/or stencil attachment is from another context`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledWith(framebuffer);
        });

        it(`does not attempt to get an instance of the depth and/or stencil attachment`, () => {
          expect(depthAndOrStencilAttachmentGetInstance).not.toHaveBeenCalled();
        });

        it(`exposes context`, () => {
          expect(framebuffer.context).toBe(context);
        });

        it(`exposes colorAttachment0`, () => {
          expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
        });

        it(`exposes depthAndOrStencilAttachment`, () => {
          expect(framebuffer.depthAndOrStencilAttachment).toBe(
            depthAndOrStencilAttachment
          );
        });
      });

      describe(`on failing to create an instance of color attachment 0`, () => {
        let createFramebuffer: jasmine.Spy;
        let checkFramebufferStatus: jasmine.Spy;
        let bindFramebuffer: jasmine.Spy;
        let deleteFramebuffer: jasmine.Spy;
        let framebufferTexture2D: jasmine.Spy;
        let framebufferRenderbuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let context: WebGlContextInterface<
          | `createFramebuffer`
          | `checkFramebufferStatus`
          | `bindFramebuffer`
          | `deleteFramebuffer`
          | `framebufferTexture2D`
          | `framebufferRenderbuffer`
          | `isContextLost`
        >;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let colorAttachment0ThrowIfDisposed: jasmine.Spy;
        let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
        let colorAttachment0GetInstance: jasmine.Spy;
        let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
          readonly format: WebGlConstants.Rgba;
          readonly type: WebGlConstants.UnsignedByte;
        };
        let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
        let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
        let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
        let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        };
        let framebuffer: WebGlFramebuffer;

        let result: null | WebGLFramebuffer;

        beforeAll(() => {
          createFramebuffer = jasmine.createSpy(`createFramebuffer`);
          checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
          bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
          deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
          framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
          framebufferRenderbuffer = jasmine.createSpy(
            `framebufferRenderbuffer`
          );
          isContextLost = jasmine.createSpy(`isContextLost`);
          context = {
            gl: {
              createFramebuffer,
              checkFramebufferStatus,
              bindFramebuffer,
              deleteFramebuffer,
              framebufferTexture2D,
              framebufferRenderbuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);
          colorAttachment0ThrowIfDisposed = jasmine.createSpy(
            `colorAttachment0ThrowIfDisposed`
          );
          colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
            `colorAttachment0ThrowIfFromAnotherContext`
          );
          colorAttachment0GetInstance = jasmine
            .createSpy(`colorAttachment0GetInstance`)
            .and.returnValue(null);
          colorAttachment0 = {
            context: `Test WebGlContext`,
            throwIfDisposed: colorAttachment0ThrowIfDisposed,
            throwIfFromAnotherContext:
              colorAttachment0ThrowIfFromAnotherContext,
            getInstance: colorAttachment0GetInstance,
            format: WebGlConstants.Rgba,
            type: WebGlConstants.UnsignedByte,
          };
          depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfDisposed`
          );
          depthAndOrStencilAttachmentThrowIfFromAnotherContext =
            jasmine.createSpy(
              `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
            );
          depthAndOrStencilAttachmentGetInstance = jasmine
            .createSpy(`depthAndOrStencilAttachmentGetInstance`)
            .and.returnValue({ test: `depthAndOrStencilAttachment` });
          depthAndOrStencilAttachment = {
            context: `Test WebGlContext`,
            throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
            throwIfFromAnotherContext:
              depthAndOrStencilAttachmentThrowIfFromAnotherContext,
            getInstance: depthAndOrStencilAttachmentGetInstance,
            format,
          };
          framebuffer = new WebGlFramebuffer(
            context,
            colorAttachment0,
            depthAndOrStencilAttachment
          );

          result = framebuffer.createInstance();
        });

        it(`does not create any framebuffers`, () => {
          expect(createFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not check framebuffer status`, () => {
          expect(checkFramebufferStatus).not.toHaveBeenCalled();
        });

        it(`does not bind any framebuffers`, () => {
          expect(bindFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not delete any framebuffers`, () => {
          expect(deleteFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not attach any 2D textures to any framebuffers`, () => {
          expect(framebufferTexture2D).not.toHaveBeenCalled();
        });

        it(`does not attach any renderbuffers to any framebuffers`, () => {
          expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

        it(`does not check whether color attachment 0 is disposed`, () => {
          expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is from another context again`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`attempts to get one instance of color attachment 0`, () => {
          expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
        });

        it(`does not check whether the depth and/or stencil attachment is disposed`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfDisposed
          ).not.toHaveBeenCalled();
        });

        it(`does not check whether the depth and/or stencil attachment is from another context again`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`may attempt to get one instance of the depth and/or stencil attachment`, () => {
          expect(
            depthAndOrStencilAttachmentGetInstance.calls.count()
          ).toBeLessThanOrEqual(1);
        });

        it(`exposes context`, () => {
          expect(framebuffer.context).toBe(context);
        });

        it(`exposes colorAttachment0`, () => {
          expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
        });

        it(`exposes depthAndOrStencilAttachment`, () => {
          expect(framebuffer.depthAndOrStencilAttachment).toBe(
            depthAndOrStencilAttachment
          );
        });

        it(`returns null`, () => {
          expect(result).toBeNull();
        });
      });

      describe(`on failing to create an instance of the depth and/or stencil attachment`, () => {
        let createFramebuffer: jasmine.Spy;
        let checkFramebufferStatus: jasmine.Spy;
        let bindFramebuffer: jasmine.Spy;
        let deleteFramebuffer: jasmine.Spy;
        let framebufferTexture2D: jasmine.Spy;
        let framebufferRenderbuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let context: WebGlContextInterface<
          | `createFramebuffer`
          | `checkFramebufferStatus`
          | `bindFramebuffer`
          | `deleteFramebuffer`
          | `framebufferTexture2D`
          | `framebufferRenderbuffer`
          | `isContextLost`
        >;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let colorAttachment0ThrowIfDisposed: jasmine.Spy;
        let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
        let colorAttachment0GetInstance: jasmine.Spy;
        let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
          readonly format: WebGlConstants.Rgba;
          readonly type: WebGlConstants.UnsignedByte;
        };
        let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
        let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
        let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
        let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        };
        let framebuffer: WebGlFramebuffer;

        let result: null | WebGLFramebuffer;

        beforeAll(() => {
          createFramebuffer = jasmine.createSpy(`createFramebuffer`);
          checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
          bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
          deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
          framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
          framebufferRenderbuffer = jasmine.createSpy(
            `framebufferRenderbuffer`
          );
          isContextLost = jasmine.createSpy(`isContextLost`);
          context = {
            gl: {
              createFramebuffer,
              checkFramebufferStatus,
              bindFramebuffer,
              deleteFramebuffer,
              framebufferTexture2D,
              framebufferRenderbuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);
          colorAttachment0ThrowIfDisposed = jasmine.createSpy(
            `colorAttachment0ThrowIfDisposed`
          );
          colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
            `colorAttachment0ThrowIfFromAnotherContext`
          );
          colorAttachment0GetInstance = jasmine
            .createSpy(`colorAttachment0GetInstance`)
            .and.returnValue({ test: `colorAttachment0` });
          colorAttachment0 = {
            context: `Test WebGlContext`,
            throwIfDisposed: colorAttachment0ThrowIfDisposed,
            throwIfFromAnotherContext:
              colorAttachment0ThrowIfFromAnotherContext,
            getInstance: colorAttachment0GetInstance,
            format: WebGlConstants.Rgba,
            type: WebGlConstants.UnsignedByte,
          };
          depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfDisposed`
          );
          depthAndOrStencilAttachmentThrowIfFromAnotherContext =
            jasmine.createSpy(
              `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
            );
          depthAndOrStencilAttachmentGetInstance = jasmine
            .createSpy(`depthAndOrStencilAttachmentGetInstance`)
            .and.returnValue(null);
          depthAndOrStencilAttachment = {
            context: `Test WebGlContext`,
            throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
            throwIfFromAnotherContext:
              depthAndOrStencilAttachmentThrowIfFromAnotherContext,
            getInstance: depthAndOrStencilAttachmentGetInstance,
            format,
          };
          framebuffer = new WebGlFramebuffer(
            context,
            colorAttachment0,
            depthAndOrStencilAttachment
          );

          result = framebuffer.createInstance();
        });

        it(`does not create any framebuffers`, () => {
          expect(createFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not check framebuffer status`, () => {
          expect(checkFramebufferStatus).not.toHaveBeenCalled();
        });

        it(`does not bind any framebuffers`, () => {
          expect(bindFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not delete any framebuffers`, () => {
          expect(deleteFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not attach any 2D textures to any framebuffers`, () => {
          expect(framebufferTexture2D).not.toHaveBeenCalled();
        });

        it(`does not attach any renderbuffers to any framebuffers`, () => {
          expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

        it(`does not check whether color attachment 0 is disposed`, () => {
          expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is from another context again`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`may attempt to get one instance of color attachment 0`, () => {
          expect(colorAttachment0GetInstance.calls.count()).toBeLessThanOrEqual(
            1
          );
        });

        it(`does not check whether the depth and/or stencil attachment is disposed`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfDisposed
          ).not.toHaveBeenCalled();
        });

        it(`does not check whether the depth and/or stencil attachment is from another context again`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`attempts to get one instance of the depth and/or stencil attachment`, () => {
          expect(depthAndOrStencilAttachmentGetInstance).toHaveBeenCalledTimes(
            1
          );
        });

        it(`exposes context`, () => {
          expect(framebuffer.context).toBe(context);
        });

        it(`exposes colorAttachment0`, () => {
          expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
        });

        it(`exposes depthAndOrStencilAttachment`, () => {
          expect(framebuffer.depthAndOrStencilAttachment).toBe(
            depthAndOrStencilAttachment
          );
        });

        it(`returns null`, () => {
          expect(result).toBeNull();
        });
      });

      describe(`on failing to create a framebuffer`, () => {
        let createFramebuffer: jasmine.Spy;
        let checkFramebufferStatus: jasmine.Spy;
        let bindFramebuffer: jasmine.Spy;
        let deleteFramebuffer: jasmine.Spy;
        let framebufferTexture2D: jasmine.Spy;
        let framebufferRenderbuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let context: WebGlContextInterface<
          | `createFramebuffer`
          | `checkFramebufferStatus`
          | `bindFramebuffer`
          | `deleteFramebuffer`
          | `framebufferTexture2D`
          | `framebufferRenderbuffer`
          | `isContextLost`
        >;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let colorAttachment0ThrowIfDisposed: jasmine.Spy;
        let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
        let colorAttachment0GetInstance: jasmine.Spy;
        let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
          readonly format: WebGlConstants.Rgba;
          readonly type: WebGlConstants.UnsignedByte;
        };
        let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
        let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
        let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
        let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        };
        let framebuffer: WebGlFramebuffer;
        let result: null | WebGLFramebuffer;

        beforeAll(() => {
          createFramebuffer = jasmine
            .createSpy(`createFramebuffer`)
            .and.returnValue(null);
          checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
          bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
          deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
          framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
          framebufferRenderbuffer = jasmine.createSpy(
            `framebufferRenderbuffer`
          );
          isContextLost = jasmine.createSpy(`isContextLost`);
          context = {
            gl: {
              createFramebuffer,
              checkFramebufferStatus,
              bindFramebuffer,
              deleteFramebuffer,
              framebufferTexture2D,
              framebufferRenderbuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);
          colorAttachment0ThrowIfDisposed = jasmine.createSpy(
            `colorAttachment0ThrowIfDisposed`
          );
          colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
            `colorAttachment0ThrowIfFromAnotherContext`
          );
          colorAttachment0GetInstance = jasmine
            .createSpy(`colorAttachment0GetInstance`)
            .and.returnValue({ test: `colorAttachment0` });
          colorAttachment0 = {
            context: `Test WebGlContext`,
            throwIfDisposed: colorAttachment0ThrowIfDisposed,
            throwIfFromAnotherContext:
              colorAttachment0ThrowIfFromAnotherContext,
            getInstance: colorAttachment0GetInstance,
            format: WebGlConstants.Rgba,
            type: WebGlConstants.UnsignedByte,
          };
          depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfDisposed`
          );
          depthAndOrStencilAttachmentThrowIfFromAnotherContext =
            jasmine.createSpy(
              `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
            );
          depthAndOrStencilAttachmentGetInstance = jasmine
            .createSpy(`depthAndOrStencilAttachmentGetInstance`)
            .and.returnValue({ test: `depthAndOrStencilAttachment` });
          depthAndOrStencilAttachment = {
            context: `Test WebGlContext`,
            throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
            throwIfFromAnotherContext:
              depthAndOrStencilAttachmentThrowIfFromAnotherContext,
            getInstance: depthAndOrStencilAttachmentGetInstance,
            format,
          };
          framebuffer = new WebGlFramebuffer(
            context,
            colorAttachment0,
            depthAndOrStencilAttachment
          );

          result = framebuffer.createInstance();
        });

        it(`creates one framebuffer`, () => {
          expect(createFramebuffer).toHaveBeenCalledTimes(1);
        });

        it(`does not check framebuffer status`, () => {
          expect(checkFramebufferStatus).not.toHaveBeenCalled();
        });

        it(`does not bind any framebuffers`, () => {
          expect(bindFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not delete any framebuffers`, () => {
          expect(deleteFramebuffer).not.toHaveBeenCalled();
        });

        it(`does not attach any 2D textures to any framebuffers`, () => {
          expect(framebufferTexture2D).not.toHaveBeenCalled();
        });

        it(`does not attach any renderbuffers to any framebuffers`, () => {
          expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

        it(`does not check whether color attachment 0 is disposed`, () => {
          expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is from another context again`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`attempts to get one instance of color attachment 0`, () => {
          expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
        });

        it(`does not check whether the depth and/or stencil attachment is disposed`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfDisposed
          ).not.toHaveBeenCalled();
        });

        it(`does not check whether the depth and/or stencil attachment is from another context again`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`attempts to get one instance of the depth and/or stencil attachment`, () => {
          expect(depthAndOrStencilAttachmentGetInstance).toHaveBeenCalledTimes(
            1
          );
        });

        it(`exposes context`, () => {
          expect(framebuffer.context).toBe(context);
        });

        it(`exposes colorAttachment0`, () => {
          expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
        });

        it(`exposes depthAndOrStencilAttachment`, () => {
          expect(framebuffer.depthAndOrStencilAttachment).toBe(
            depthAndOrStencilAttachment
          );
        });

        it(`returns null`, () => {
          expect(result).toBeNull();
        });
      });

      describe(`on producing an incomplete framebuffer due to context loss`, () => {
        let createFramebuffer: jasmine.Spy;
        let checkFramebufferStatus: jasmine.Spy;
        let bindFramebuffer: jasmine.Spy;
        let deleteFramebuffer: jasmine.Spy;
        let framebufferTexture2D: jasmine.Spy;
        let framebufferRenderbuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let context: WebGlContextInterface<
          | `createFramebuffer`
          | `checkFramebufferStatus`
          | `bindFramebuffer`
          | `deleteFramebuffer`
          | `framebufferTexture2D`
          | `framebufferRenderbuffer`
          | `isContextLost`
        >;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let colorAttachment0ThrowIfDisposed: jasmine.Spy;
        let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
        let colorAttachment0GetInstance: jasmine.Spy;
        let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
          readonly format: WebGlConstants.Rgba;
          readonly type: WebGlConstants.UnsignedByte;
        };
        let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
        let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
        let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
        let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        };
        let framebuffer: WebGlFramebuffer;
        let result: null | WebGLFramebuffer;

        beforeAll(() => {
          createFramebuffer = jasmine
            .createSpy(`createFramebuffer`)
            .and.returnValue({ test: `framebuffer` });
          checkFramebufferStatus = jasmine
            .createSpy(`checkFramebufferStatus`)
            .and.returnValue(`Test Invalid Status`);
          bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
          deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
          framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
          framebufferRenderbuffer = jasmine.createSpy(
            `framebufferRenderbuffer`
          );
          isContextLost = jasmine
            .createSpy(`isContextLost`)
            .and.returnValue(true);
          context = {
            gl: {
              createFramebuffer,
              checkFramebufferStatus,
              bindFramebuffer,
              deleteFramebuffer,
              framebufferTexture2D,
              framebufferRenderbuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);
          colorAttachment0ThrowIfDisposed = jasmine.createSpy(
            `colorAttachment0ThrowIfDisposed`
          );
          colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
            `colorAttachment0ThrowIfFromAnotherContext`
          );
          colorAttachment0GetInstance = jasmine
            .createSpy(`colorAttachment0GetInstance`)
            .and.returnValue({ test: `colorAttachment0` });
          colorAttachment0 = {
            context: `Test WebGlContext`,
            throwIfDisposed: colorAttachment0ThrowIfDisposed,
            throwIfFromAnotherContext:
              colorAttachment0ThrowIfFromAnotherContext,
            getInstance: colorAttachment0GetInstance,
            format: WebGlConstants.Rgba,
            type: WebGlConstants.UnsignedByte,
          };
          depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfDisposed`
          );
          depthAndOrStencilAttachmentThrowIfFromAnotherContext =
            jasmine.createSpy(
              `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
            );
          depthAndOrStencilAttachmentGetInstance = jasmine
            .createSpy(`depthAndOrStencilAttachmentGetInstance`)
            .and.returnValue({ test: `depthAndOrStencilAttachment` });
          depthAndOrStencilAttachment = {
            context: `Test WebGlContext`,
            throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
            throwIfFromAnotherContext:
              depthAndOrStencilAttachmentThrowIfFromAnotherContext,
            getInstance: depthAndOrStencilAttachmentGetInstance,
            format,
          };
          framebuffer = new WebGlFramebuffer(
            context,
            colorAttachment0,
            depthAndOrStencilAttachment
          );

          result = framebuffer.createInstance();
        });

        it(`creates one framebuffer`, () => {
          expect(createFramebuffer).toHaveBeenCalledTimes(1);
        });

        it(`checks framebuffer status once`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledTimes(1);
        });

        it(`checks the status of the framebuffer`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer
          );
        });

        it(`binds one framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledTimes(1);
        });

        it(`binds the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            {
              test: `framebuffer`,
            }
          );
        });

        it(`does not delete any framebuffers`, () => {
          expect(deleteFramebuffer).not.toHaveBeenCalled();
        });

        it(`attaches one 2D texture to a framebuffer`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledTimes(1);
        });

        it(`attaches color attachment 0 to the framebuffer`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            WebGlConstants.ColorAttachment0,
            WebGlConstants.Texture2D,
            { test: `colorAttachment0` },
            0
          );
        });

        it(`attaches one renderbuffer to a framebuffer`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`attaches the renderbuffer to the framebuffer`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            attachment,
            WebGlConstants.Renderbuffer,
            { test: `depthAndOrStencilAttachment` }
          );
        });

        it(`checks for context loss once`, () => {
          expect(isContextLost).toHaveBeenCalledTimes(1);
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is disposed`, () => {
          expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is from another context again`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`gets one instance of color attachment 0`, () => {
          expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
        });

        it(`does not check whether the depth and/or stencil attachment is disposed`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfDisposed
          ).not.toHaveBeenCalled();
        });

        it(`does not check whether the depth and/or stencil attachment is from another context again`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`gets one instance of the depth and/or stencil attachment`, () => {
          expect(depthAndOrStencilAttachmentGetInstance).toHaveBeenCalledTimes(
            1
          );
        });

        it(`attaches 2D textures after binding the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledBefore(framebufferTexture2D);
        });

        it(`attaches renderbuffers after binding the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledBefore(
            framebufferRenderbuffer
          );
        });

        it(`checks framebuffer status after attaching 2D textures`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledBefore(
            checkFramebufferStatus
          );
        });

        it(`checks framebuffer status after attaching renderbuffers`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledBefore(
            checkFramebufferStatus
          );
        });

        it(`checks for context loss after checking framebuffer status`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledBefore(isContextLost);
        });

        it(`exposes context`, () => {
          expect(framebuffer.context).toBe(context);
        });

        it(`exposes colorAttachment0`, () => {
          expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
        });

        it(`exposes depthAndOrStencilAttachment`, () => {
          expect(framebuffer.depthAndOrStencilAttachment).toBe(
            depthAndOrStencilAttachment
          );
        });

        it(`returns null`, () => {
          expect(result).toBeNull();
        });
      });

      describe(`on producing an incomplete framebuffer for a reason other than context loss`, () => {
        let createFramebuffer: jasmine.Spy;
        let checkFramebufferStatus: jasmine.Spy;
        let bindFramebuffer: jasmine.Spy;
        let deleteFramebuffer: jasmine.Spy;
        let framebufferTexture2D: jasmine.Spy;
        let framebufferRenderbuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let context: WebGlContextInterface<
          | `createFramebuffer`
          | `checkFramebufferStatus`
          | `bindFramebuffer`
          | `deleteFramebuffer`
          | `framebufferTexture2D`
          | `framebufferRenderbuffer`
          | `isContextLost`
        >;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let colorAttachment0ThrowIfDisposed: jasmine.Spy;
        let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
        let colorAttachment0GetInstance: jasmine.Spy;
        let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
          readonly format: WebGlConstants.Rgba;
          readonly type: WebGlConstants.UnsignedByte;
        };
        let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
        let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
        let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
        let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        };
        let framebuffer: WebGlFramebuffer;
        let error: unknown;
        let attached2DTextureBeforeBindingFramebuffer: boolean;
        let attachedRenderbufferBeforeBindingFramebuffer: boolean;
        let unboundFramebufferBeforeCheckingForContextLoss: boolean;

        beforeAll(() => {
          createFramebuffer = jasmine
            .createSpy(`createFramebuffer`)
            .and.returnValue({ test: `framebuffer` });
          checkFramebufferStatus = jasmine
            .createSpy(`checkFramebufferStatus`)
            .and.returnValue(`Test Invalid Status`);
          bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
          deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
          attached2DTextureBeforeBindingFramebuffer = false;
          framebufferTexture2D = jasmine
            .createSpy(`framebufferTexture2D`)
            .and.callFake(() => {
              /* istanbul ignore next */
              if (
                !bindFramebuffer.calls
                  .allArgs()
                  .some((args) => args[1] !== null)
              ) {
                attached2DTextureBeforeBindingFramebuffer = true;
              }
            });
          attachedRenderbufferBeforeBindingFramebuffer = false;
          framebufferRenderbuffer = jasmine
            .createSpy(`framebufferRenderbuffer`)
            .and.callFake(() => {
              /* istanbul ignore next */
              if (
                !bindFramebuffer.calls
                  .allArgs()
                  .some((args) => args[1] !== null)
              ) {
                attachedRenderbufferBeforeBindingFramebuffer = true;
              }
            });
          unboundFramebufferBeforeCheckingForContextLoss = false;
          isContextLost = jasmine
            .createSpy(`isContextLost`)
            .and.callFake(() => {
              /* istanbul ignore next */
              if (
                bindFramebuffer.calls.allArgs().some((args) => args[1] === null)
              ) {
                unboundFramebufferBeforeCheckingForContextLoss = true;
              }

              return false;
            });
          context = {
            gl: {
              createFramebuffer,
              checkFramebufferStatus,
              bindFramebuffer,
              deleteFramebuffer,
              framebufferTexture2D,
              framebufferRenderbuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);
          colorAttachment0ThrowIfDisposed = jasmine.createSpy(
            `colorAttachment0ThrowIfDisposed`
          );
          colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
            `colorAttachment0ThrowIfFromAnotherContext`
          );
          colorAttachment0GetInstance = jasmine
            .createSpy(`colorAttachment0GetInstance`)
            .and.returnValue({ test: `colorAttachment0` });
          colorAttachment0 = {
            context: `Test WebGlContext`,
            throwIfDisposed: colorAttachment0ThrowIfDisposed,
            throwIfFromAnotherContext:
              colorAttachment0ThrowIfFromAnotherContext,
            getInstance: colorAttachment0GetInstance,
            format: WebGlConstants.Rgba,
            type: WebGlConstants.UnsignedByte,
          };
          depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfDisposed`
          );
          depthAndOrStencilAttachmentThrowIfFromAnotherContext =
            jasmine.createSpy(
              `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
            );
          depthAndOrStencilAttachmentGetInstance = jasmine
            .createSpy(`depthAndOrStencilAttachmentGetInstance`)
            .and.returnValue({ test: `depthAndOrStencilAttachment` });
          depthAndOrStencilAttachment = {
            context: `Test WebGlContext`,
            throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
            throwIfFromAnotherContext:
              depthAndOrStencilAttachmentThrowIfFromAnotherContext,
            getInstance: depthAndOrStencilAttachmentGetInstance,
            format,
          };
          framebuffer = new WebGlFramebuffer(
            context,
            colorAttachment0,
            depthAndOrStencilAttachment
          );

          try {
            framebuffer.createInstance();

            /* istanbul ignore next */
            error = null;
          } catch (e) {
            error = e;
          }
        });

        it(`creates one framebuffer`, () => {
          expect(createFramebuffer).toHaveBeenCalledTimes(1);
        });

        it(`checks framebuffer status once`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledTimes(1);
        });

        it(`checks the status of the framebuffer`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer
          );
        });

        it(`binds two framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledTimes(2);
        });

        it(`binds the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            {
              test: `framebuffer`,
            }
          );
        });

        it(`unbinds the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            null
          );
        });

        it(`deletes one framebuffer`, () => {
          expect(deleteFramebuffer).toHaveBeenCalledTimes(1);
        });

        it(`deletes the framebuffer`, () => {
          expect(deleteFramebuffer).toHaveBeenCalledWith({
            test: `framebuffer`,
          });
        });

        it(`attaches one 2D texture to a framebuffer`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledTimes(1);
        });

        it(`attaches color attachment 0 to the framebuffer`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            WebGlConstants.ColorAttachment0,
            WebGlConstants.Texture2D,
            { test: `colorAttachment0` },
            0
          );
        });

        it(`attaches one renderbuffer to a framebuffer`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`attaches the renderbuffer to the framebuffer`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            attachment,
            WebGlConstants.Renderbuffer,
            { test: `depthAndOrStencilAttachment` }
          );
        });

        it(`checks for context loss once`, () => {
          expect(isContextLost).toHaveBeenCalledTimes(1);
        });

        it(`does not render`, () => {
          expect(render).not.toHaveBeenCalled();
        });

        it(`does not add any event listeners`, () => {
          expect(addEventListener).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is disposed`, () => {
          expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is from another context again`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`gets one instance of color attachment 0`, () => {
          expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
        });

        it(`does not check whether the depth and/or stencil attachment is disposed`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfDisposed
          ).not.toHaveBeenCalled();
        });

        it(`does not check whether the depth and/or stencil attachment is from another context again`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`gets one instance of the depth and/or stencil attachment`, () => {
          expect(depthAndOrStencilAttachmentGetInstance).toHaveBeenCalledTimes(
            1
          );
        });

        it(`attaches 2D textures after binding the framebuffer`, () => {
          expect(attached2DTextureBeforeBindingFramebuffer).toBeFalse();
        });

        it(`attaches renderbuffers after binding the framebuffer`, () => {
          expect(attachedRenderbufferBeforeBindingFramebuffer).toBeFalse();
        });

        it(`checks framebuffer status after attaching 2D textures`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledBefore(
            checkFramebufferStatus
          );
        });

        it(`checks framebuffer status after attaching renderbuffers`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledBefore(
            checkFramebufferStatus
          );
        });

        it(`checks for context loss after checking framebuffer status`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledBefore(isContextLost);
        });

        it(`unbinds the framebuffer after checking for context loss`, () => {
          expect(unboundFramebufferBeforeCheckingForContextLoss).toBeFalse();
        });

        it(`deletes the framebuffer after unbinding it`, () => {
          expect(bindFramebuffer).toHaveBeenCalledBefore(deleteFramebuffer);
        });

        it(`exposes context`, () => {
          expect(framebuffer.context).toBe(context);
        });

        it(`exposes colorAttachment0`, () => {
          expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
        });

        it(`exposes depthAndOrStencilAttachment`, () => {
          expect(framebuffer.depthAndOrStencilAttachment).toBe(
            depthAndOrStencilAttachment
          );
        });

        it(`throws the expected error`, () => {
          expect(error).toEqual(
            new Error(`Failed to construct a framebuffer.`)
          );
        });
      });

      describe(`on producing a complete framebuffer`, () => {
        let createFramebuffer: jasmine.Spy;
        let checkFramebufferStatus: jasmine.Spy;
        let bindFramebuffer: jasmine.Spy;
        let deleteFramebuffer: jasmine.Spy;
        let framebufferTexture2D: jasmine.Spy;
        let framebufferRenderbuffer: jasmine.Spy;
        let isContextLost: jasmine.Spy;
        let context: WebGlContextInterface<
          | `createFramebuffer`
          | `checkFramebufferStatus`
          | `bindFramebuffer`
          | `deleteFramebuffer`
          | `framebufferTexture2D`
          | `framebufferRenderbuffer`
          | `isContextLost`
        >;
        let render: jasmine.Spy;
        let addEventListener: jasmine.Spy;
        let colorAttachment0ThrowIfDisposed: jasmine.Spy;
        let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
        let colorAttachment0GetInstance: jasmine.Spy;
        let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
          readonly format: WebGlConstants.Rgba;
          readonly type: WebGlConstants.UnsignedByte;
        };
        let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
        let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
        let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
        let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
          readonly format:
            | WebGlConstants.DepthComponent16
            | WebGlConstants.StencilIndex8
            | WebGlConstants.DepthStencil;
        };
        let framebuffer: WebGlFramebuffer;
        let result: null | WebGLFramebuffer;

        beforeAll(() => {
          createFramebuffer = jasmine
            .createSpy(`createFramebuffer`)
            .and.returnValue({ test: `framebuffer` });
          checkFramebufferStatus = jasmine
            .createSpy(`checkFramebufferStatus`)
            .and.returnValue(WebGlConstants.FramebufferComplete);
          bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
          deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
          framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
          framebufferRenderbuffer = jasmine.createSpy(
            `framebufferRenderbuffer`
          );
          isContextLost = jasmine.createSpy(`isContextLost`);
          context = {
            gl: {
              createFramebuffer,
              checkFramebufferStatus,
              bindFramebuffer,
              deleteFramebuffer,
              framebufferTexture2D,
              framebufferRenderbuffer,
              isContextLost,
            },
            timesContextRestored: 7,
            render,
            addEventListener,
          };
          render = jasmine.createSpy(`render`);
          addEventListener = jasmine.createSpy(`addEventListener`);
          colorAttachment0ThrowIfDisposed = jasmine.createSpy(
            `colorAttachment0ThrowIfDisposed`
          );
          colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
            `colorAttachment0ThrowIfFromAnotherContext`
          );
          colorAttachment0GetInstance = jasmine
            .createSpy(`colorAttachment0GetInstance`)
            .and.returnValue({ test: `colorAttachment0` });
          colorAttachment0 = {
            context: `Test WebGlContext`,
            throwIfDisposed: colorAttachment0ThrowIfDisposed,
            throwIfFromAnotherContext:
              colorAttachment0ThrowIfFromAnotherContext,
            getInstance: colorAttachment0GetInstance,
            format: WebGlConstants.Rgba,
            type: WebGlConstants.UnsignedByte,
          };
          depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfDisposed`
          );
          depthAndOrStencilAttachmentThrowIfFromAnotherContext =
            jasmine.createSpy(
              `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
            );
          depthAndOrStencilAttachmentGetInstance = jasmine
            .createSpy(`depthAndOrStencilAttachmentGetInstance`)
            .and.returnValue({ test: `depthAndOrStencilAttachment` });
          depthAndOrStencilAttachment = {
            context: `Test WebGlContext`,
            throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
            throwIfFromAnotherContext:
              depthAndOrStencilAttachmentThrowIfFromAnotherContext,
            getInstance: depthAndOrStencilAttachmentGetInstance,
            format,
          };
          framebuffer = new WebGlFramebuffer(
            context,
            colorAttachment0,
            depthAndOrStencilAttachment
          );

          result = framebuffer.createInstance();
        });

        it(`creates one framebuffer`, () => {
          expect(createFramebuffer).toHaveBeenCalledTimes(1);
        });

        it(`checks framebuffer status once`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledTimes(1);
        });

        it(`checks the status of the framebuffer`, () => {
          expect(checkFramebufferStatus).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer
          );
        });

        it(`binds one framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledTimes(1);
        });

        it(`binds the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            {
              test: `framebuffer`,
            }
          );
        });

        it(`does not delete any framebuffers`, () => {
          expect(deleteFramebuffer).not.toHaveBeenCalled();
        });

        it(`attaches one 2D texture to a framebuffer`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledTimes(1);
        });

        it(`attaches color attachment 0 to the framebuffer`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            WebGlConstants.ColorAttachment0,
            WebGlConstants.Texture2D,
            { test: `colorAttachment0` },
            0
          );
        });

        it(`attaches one renderbuffer to a framebuffer`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledTimes(1);
        });

        it(`attaches the renderbuffer to the framebuffer`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledWith(
            WebGlConstants.Framebuffer,
            attachment,
            WebGlConstants.Renderbuffer,
            { test: `depthAndOrStencilAttachment` }
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

        it(`does not check whether color attachment 0 is disposed`, () => {
          expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
        });

        it(`does not check whether color attachment 0 is from another context again`, () => {
          expect(
            colorAttachment0ThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`gets one instance of color attachment 0`, () => {
          expect(colorAttachment0GetInstance).toHaveBeenCalledTimes(1);
        });

        it(`does not check whether the depth and/or stencil attachment is disposed`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfDisposed
          ).not.toHaveBeenCalled();
        });

        it(`does not check whether the depth and/or stencil attachment is from another context again`, () => {
          expect(
            depthAndOrStencilAttachmentThrowIfFromAnotherContext
          ).toHaveBeenCalledTimes(1);
        });

        it(`gets one instance of the depth and/or stencil attachment`, () => {
          expect(depthAndOrStencilAttachmentGetInstance).toHaveBeenCalledTimes(
            1
          );
        });

        it(`attaches 2D textures after binding the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledBefore(framebufferTexture2D);
        });

        it(`renderbuffers after binding the framebuffer`, () => {
          expect(bindFramebuffer).toHaveBeenCalledBefore(
            framebufferRenderbuffer
          );
        });

        it(`checks framebuffer status after attaching 2D textures`, () => {
          expect(framebufferTexture2D).toHaveBeenCalledBefore(
            checkFramebufferStatus
          );
        });

        it(`checks framebuffer status after attaching renderbuffers`, () => {
          expect(framebufferRenderbuffer).toHaveBeenCalledBefore(
            checkFramebufferStatus
          );
        });

        it(`exposes context`, () => {
          expect(framebuffer.context).toBe(context);
        });

        it(`exposes colorAttachment0`, () => {
          expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
        });

        it(`exposes depthAndOrStencilAttachment`, () => {
          expect(framebuffer.depthAndOrStencilAttachment).toBe(
            depthAndOrStencilAttachment
          );
        });

        it(`returns the framebuffer`, () => {
          expect(result).toEqual({ test: `framebuffer` });
        });
      });
    });

    describe(`on deleting a null instance`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
      let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
      let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
      let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
        readonly format:
          | WebGlConstants.DepthComponent16
          | WebGlConstants.StencilIndex8
          | WebGlConstants.DepthStencil;
      };
      let framebuffer: WebGlFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine.createSpy(`createFramebuffer`);
        checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine.createSpy(
          `colorAttachment0GetInstance`
        );
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
          `depthAndOrStencilAttachmentThrowIfDisposed`
        );
        depthAndOrStencilAttachmentThrowIfFromAnotherContext =
          jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
          );
        depthAndOrStencilAttachmentGetInstance = jasmine
          .createSpy(`depthAndOrStencilAttachmentGetInstance`)
          .and.returnValue({ test: `depthAndOrStencilAttachment` });
        depthAndOrStencilAttachment = {
          context: `Test WebGlContext`,
          throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
          throwIfFromAnotherContext:
            depthAndOrStencilAttachmentThrowIfFromAnotherContext,
          getInstance: depthAndOrStencilAttachmentGetInstance,
          format,
        };
        framebuffer = new WebGlFramebuffer(
          context,
          colorAttachment0,
          depthAndOrStencilAttachment
        );

        framebuffer.deleteInstance(null);
      });

      it(`does not create any framebuffers`, () => {
        expect(createFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not check framebuffer status`, () => {
        expect(checkFramebufferStatus).not.toHaveBeenCalled();
      });

      it(`does not bind any framebuffers`, () => {
        expect(bindFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not delete any framebuffers`, () => {
        expect(deleteFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not attach any 2D textures to any framebuffers`, () => {
        expect(framebufferTexture2D).not.toHaveBeenCalled();
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`checks whether color attachment 0 is from another context once`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether color attachment 0 is from another context`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledWith(
          framebuffer
        );
      });

      it(`does not attempt to get an instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).not.toHaveBeenCalled();
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBe(
          depthAndOrStencilAttachment
        );
      });
    });

    describe(`on deleting a non-null instance`, () => {
      let createFramebuffer: jasmine.Spy;
      let checkFramebufferStatus: jasmine.Spy;
      let bindFramebuffer: jasmine.Spy;
      let deleteFramebuffer: jasmine.Spy;
      let framebufferTexture2D: jasmine.Spy;
      let framebufferRenderbuffer: jasmine.Spy;
      let isContextLost: jasmine.Spy;
      let context: WebGlContextInterface<
        | `createFramebuffer`
        | `checkFramebufferStatus`
        | `bindFramebuffer`
        | `deleteFramebuffer`
        | `framebufferTexture2D`
        | `framebufferRenderbuffer`
        | `isContextLost`
      >;
      let render: jasmine.Spy;
      let addEventListener: jasmine.Spy;
      let colorAttachment0ThrowIfDisposed: jasmine.Spy;
      let colorAttachment0ThrowIfFromAnotherContext: jasmine.Spy;
      let colorAttachment0GetInstance: jasmine.Spy;
      let colorAttachment0: WebGlResourceInterface<null | WebGLTexture> & {
        readonly format: WebGlConstants.Rgba;
        readonly type: WebGlConstants.UnsignedByte;
      };
      let depthAndOrStencilAttachmentThrowIfDisposed: jasmine.Spy;
      let depthAndOrStencilAttachmentThrowIfFromAnotherContext: jasmine.Spy;
      let depthAndOrStencilAttachmentGetInstance: jasmine.Spy;
      let depthAndOrStencilAttachment: WebGlResourceInterface<null | WebGLRenderbuffer> & {
        readonly format:
          | WebGlConstants.DepthComponent16
          | WebGlConstants.StencilIndex8
          | WebGlConstants.DepthStencil;
      };
      let framebuffer: WebGlFramebuffer;

      beforeAll(() => {
        createFramebuffer = jasmine.createSpy(`createFramebuffer`);
        checkFramebufferStatus = jasmine.createSpy(`checkFramebufferStatus`);
        bindFramebuffer = jasmine.createSpy(`bindFramebuffer`);
        deleteFramebuffer = jasmine.createSpy(`deleteFramebuffer`);
        framebufferTexture2D = jasmine.createSpy(`framebufferTexture2D`);
        framebufferRenderbuffer = jasmine.createSpy(`framebufferRenderbuffer`);
        isContextLost = jasmine.createSpy(`isContextLost`);
        context = {
          gl: {
            createFramebuffer,
            checkFramebufferStatus,
            bindFramebuffer,
            deleteFramebuffer,
            framebufferTexture2D,
            framebufferRenderbuffer,
            isContextLost,
          },
          timesContextRestored: 7,
          render,
          addEventListener,
        };
        render = jasmine.createSpy(`render`);
        addEventListener = jasmine.createSpy(`addEventListener`);
        colorAttachment0ThrowIfDisposed = jasmine.createSpy(
          `colorAttachment0ThrowIfDisposed`
        );
        colorAttachment0ThrowIfFromAnotherContext = jasmine.createSpy(
          `colorAttachment0ThrowIfFromAnotherContext`
        );
        colorAttachment0GetInstance = jasmine.createSpy(
          `colorAttachment0GetInstance`
        );
        colorAttachment0 = {
          context: `Test WebGlContext`,
          throwIfDisposed: colorAttachment0ThrowIfDisposed,
          throwIfFromAnotherContext: colorAttachment0ThrowIfFromAnotherContext,
          getInstance: colorAttachment0GetInstance,
          format: WebGlConstants.Rgba,
          type: WebGlConstants.UnsignedByte,
        };
        depthAndOrStencilAttachmentThrowIfDisposed = jasmine.createSpy(
          `depthAndOrStencilAttachmentThrowIfDisposed`
        );
        depthAndOrStencilAttachmentThrowIfFromAnotherContext =
          jasmine.createSpy(
            `depthAndOrStencilAttachmentThrowIfFromAnotherContext`
          );
        depthAndOrStencilAttachmentGetInstance = jasmine
          .createSpy(`depthAndOrStencilAttachmentGetInstance`)
          .and.returnValue({ test: `depthAndOrStencilAttachment` });
        depthAndOrStencilAttachment = {
          context: `Test WebGlContext`,
          throwIfDisposed: depthAndOrStencilAttachmentThrowIfDisposed,
          throwIfFromAnotherContext:
            depthAndOrStencilAttachmentThrowIfFromAnotherContext,
          getInstance: depthAndOrStencilAttachmentGetInstance,
          format,
        };
        framebuffer = new WebGlFramebuffer(
          context,
          colorAttachment0,
          depthAndOrStencilAttachment
        );

        framebuffer.deleteInstance({ test: `framebuffer` });
      });

      it(`does not create any framebuffers`, () => {
        expect(createFramebuffer).not.toHaveBeenCalled();
      });

      it(`does not check framebuffer status`, () => {
        expect(checkFramebufferStatus).not.toHaveBeenCalled();
      });

      it(`unbinds one framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`unbinds the framebuffer`, () => {
        expect(bindFramebuffer).toHaveBeenCalledWith(
          WebGlConstants.Framebuffer,
          null
        );
      });

      it(`deletes one framebuffer`, () => {
        expect(deleteFramebuffer).toHaveBeenCalledTimes(1);
      });

      it(`deletes the framebuffer`, () => {
        expect(deleteFramebuffer).toHaveBeenCalledWith({ test: `framebuffer` });
      });

      it(`does not attach any 2D textures to any framebuffers`, () => {
        expect(framebufferTexture2D).not.toHaveBeenCalled();
      });

      it(`does not attach any renderbuffers to any framebuffers`, () => {
        expect(framebufferRenderbuffer).not.toHaveBeenCalled();
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

      it(`does not check whether color attachment 0 is disposed`, () => {
        expect(colorAttachment0ThrowIfDisposed).not.toHaveBeenCalled();
      });

      it(`checks whether color attachment 0 is from another context once`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledTimes(
          1
        );
      });

      it(`checks whether color attachment 0 is from another context`, () => {
        expect(colorAttachment0ThrowIfFromAnotherContext).toHaveBeenCalledWith(
          framebuffer
        );
      });

      it(`does not attempt to get an instance of color attachment 0`, () => {
        expect(colorAttachment0GetInstance).not.toHaveBeenCalled();
      });

      it(`exposes context`, () => {
        expect(framebuffer.context).toBe(context);
      });

      it(`exposes colorAttachment0`, () => {
        expect(framebuffer.colorAttachment0).toBe(colorAttachment0);
      });

      it(`exposes depthAndOrStencilAttachment`, () => {
        expect(framebuffer.depthAndOrStencilAttachment).toBe(
          depthAndOrStencilAttachment
        );
      });
    });
  };

  depthAndOrStencilAttachmentScenario(
    `with a depth attachment`,
    WebGlConstants.DepthComponent16,
    WebGlConstants.DepthAttachment
  );
  depthAndOrStencilAttachmentScenario(
    `with a stencil attachment`,
    WebGlConstants.StencilIndex8,
    WebGlConstants.StencilAttachment
  );
  depthAndOrStencilAttachmentScenario(
    `with a combined depth and stencil attachment`,
    WebGlConstants.DepthStencil,
    WebGlConstants.DepthStencilAttachment
  );
});
