import { ContextInterface, createContext } from "../..";

describe(`createContext`, () => {
  describe(`when WebGL context creation fails`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let render: jasmine.Spy;
    let error: unknown;

    beforeAll(() => {
      getContext = jasmine.createSpy(`getContext`).and.returnValue(null);
      addEventListener = jasmine.createSpy(`addEventListener`);
      render = jasmine.createSpy(`render`);
      canvas = {
        getContext,
        addEventListener,
        width: 230,
        height: 644,
        clientWidth: 1021,
        clientHeight: 739,
      } as unknown as HTMLCanvasElement;
      global.window = {
        devicePixelRatio: 3.7,
      } as unknown as Window & typeof globalThis;

      try {
        createContext(canvas, { powerPreference: `high-performance` }, render);
        error = null;
      } catch (e) {
        error = e;
      }
    });

    it(`gets one context`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`gets a WebGL context`, () => {
      expect(getContext).toHaveBeenCalledWith(`webgl`, {
        powerPreference: `high-performance`,
      });
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add any event listeners to the canvas`, () => {
      expect(addEventListener).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(new Error(`Failed to create a WebGL context.`));
    });

    it(`does not manipulate the canvas`, () => {
      expect(canvas.width).toEqual(230);
      expect(canvas.height).toEqual(644);
    });
  });

  describe(`when WebGL context creation succeeds`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let render: jasmine.Spy;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let postRenderA: jasmine.Spy;
    let postRenderB: jasmine.Spy;
    let postRenderC: jasmine.Spy;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      render = jasmine.createSpy(`render`);
      canvas = {
        getContext,
        addEventListener,
        width: 230,
        height: 644,
        clientWidth: 1021,
        clientHeight: 739,
      } as unknown as HTMLCanvasElement;
      global.window = {
        devicePixelRatio: 3.7,
      } as unknown as Window & typeof globalThis;

      result = createContext(
        canvas,
        { powerPreference: `high-performance` },
        render
      );

      postRenderA = jasmine.createSpy(`postRenderA`);
      postRenderB = jasmine.createSpy(`postRenderB`);
      postRenderC = jasmine.createSpy(`postRenderC`);
      result.addEventListener(`postRender`, postRenderA);
      result.addEventListener(`postRender`, postRenderB);
      result.addEventListener(`postRender`, postRenderC);
    });

    it(`gets one context`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`gets a WebGL context`, () => {
      expect(getContext).toHaveBeenCalledWith(`webgl`, {
        powerPreference: `high-performance`,
      });
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`adds two event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`adds a context lost event listener to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledWith(
        `webglcontextlost`,
        jasmine.any(Function),
        false
      );
    });

    it(`adds a context restored event listener to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledWith(
        `webglcontextrestored`,
        jasmine.any(Function),
        false
      );
    });

    it(`returns the expected context`, () => {
      expect(result).toEqual({
        gl,
        timesContextRestored: 0,
        render: jasmine.any(Function),
        addEventListener: jasmine.any(Function),
      });
    });

    it(`does not manipulate the canvas`, () => {
      expect(canvas.width).toEqual(230);
      expect(canvas.height).toEqual(644);
    });

    it(`does not call the post render callbacks`, () => {
      expect(postRenderA).not.toHaveBeenCalled();
      expect(postRenderB).not.toHaveBeenCalled();
      expect(postRenderC).not.toHaveBeenCalled();
    });
  });

  describe(`on context loss`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let render: jasmine.Spy;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefault: jasmine.Spy;
    let event: Event;
    let postRenderA: jasmine.Spy;
    let postRenderB: jasmine.Spy;
    let postRenderC: jasmine.Spy;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      render = jasmine.createSpy(`render`);
      canvas = {
        getContext,
        addEventListener,
        width: 230,
        height: 644,
        clientWidth: 1021,
        clientHeight: 739,
      } as unknown as HTMLCanvasElement;
      global.window = {
        devicePixelRatio: 3.7,
      } as unknown as Window & typeof globalThis;

      result = createContext(
        canvas,
        { powerPreference: `high-performance` },
        render
      );

      postRenderA = jasmine.createSpy(`postRenderA`);
      postRenderB = jasmine.createSpy(`postRenderB`);
      postRenderC = jasmine.createSpy(`postRenderC`);
      result.addEventListener(`postRender`, postRenderA);
      result.addEventListener(`postRender`, postRenderB);
      result.addEventListener(`postRender`, postRenderC);

      preventDefault = jasmine.createSpy(`preventDefault`);
      event = { preventDefault } as unknown as Event;

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextlost`) {
          call.args[1](event);
        }
      }
    });

    it(`does not get any further contexts`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`does not modify the returned context`, () => {
      expect(result).toEqual({
        gl,
        timesContextRestored: 0,
        render: jasmine.any(Function),
        addEventListener: jasmine.any(Function),
      });
    });

    it(`prevents default once`, () => {
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it(`does not manipulate the canvas`, () => {
      expect(canvas.width).toEqual(230);
      expect(canvas.height).toEqual(644);
    });

    it(`does not call the post render callbacks`, () => {
      expect(postRenderA).not.toHaveBeenCalled();
      expect(postRenderB).not.toHaveBeenCalled();
      expect(postRenderC).not.toHaveBeenCalled();
    });
  });

  describe(`on context restoration`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let render: jasmine.Spy;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefault: jasmine.Spy;
    let event: Event;
    let postRenderA: jasmine.Spy;
    let postRenderB: jasmine.Spy;
    let postRenderC: jasmine.Spy;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      render = jasmine.createSpy(`render`);
      canvas = {
        getContext,
        addEventListener,
        width: 230,
        height: 644,
        clientWidth: 1021,
        clientHeight: 739,
      } as unknown as HTMLCanvasElement;
      global.window = {
        devicePixelRatio: 3.7,
      } as unknown as Window & typeof globalThis;

      result = createContext(
        canvas,
        { powerPreference: `high-performance` },
        render
      );

      postRenderA = jasmine.createSpy(`postRenderA`);
      postRenderB = jasmine.createSpy(`postRenderB`);
      postRenderC = jasmine.createSpy(`postRenderC`);
      result.addEventListener(`postRender`, postRenderA);
      result.addEventListener(`postRender`, postRenderB);
      result.addEventListener(`postRender`, postRenderC);

      preventDefault = jasmine.createSpy(`preventDefault`);
      event = { preventDefault } as unknown as Event;

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextlost`) {
          call.args[1](event);
        }
      }

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextrestored`) {
          call.args[1]();
        }
      }
    });

    it(`does not get any further contexts`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`increments the times restored`, () => {
      expect(result).toEqual({
        gl,
        timesContextRestored: 1,
        render: jasmine.any(Function),
        addEventListener: jasmine.any(Function),
      });
    });

    it(`does not prevent default again`, () => {
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it(`does not manipulate the canvas`, () => {
      expect(canvas.width).toEqual(230);
      expect(canvas.height).toEqual(644);
    });

    it(`does not call the post render callbacks`, () => {
      expect(postRenderA).not.toHaveBeenCalled();
      expect(postRenderB).not.toHaveBeenCalled();
      expect(postRenderC).not.toHaveBeenCalled();
    });
  });

  describe(`on subsequent context loss`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let render: jasmine.Spy;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefaultA: jasmine.Spy;
    let preventDefaultB: jasmine.Spy;
    let eventA: Event;
    let eventB: Event;
    let postRenderA: jasmine.Spy;
    let postRenderB: jasmine.Spy;
    let postRenderC: jasmine.Spy;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      render = jasmine.createSpy(`render`);
      canvas = {
        getContext,
        addEventListener,
        width: 230,
        height: 644,
        clientWidth: 1021,
        clientHeight: 739,
      } as unknown as HTMLCanvasElement;
      global.window = {
        devicePixelRatio: 3.7,
      } as unknown as Window & typeof globalThis;

      result = createContext(
        canvas,
        { powerPreference: `high-performance` },
        render
      );

      postRenderA = jasmine.createSpy(`postRenderA`);
      postRenderB = jasmine.createSpy(`postRenderB`);
      postRenderC = jasmine.createSpy(`postRenderC`);
      result.addEventListener(`postRender`, postRenderA);
      result.addEventListener(`postRender`, postRenderB);
      result.addEventListener(`postRender`, postRenderC);

      preventDefaultA = jasmine.createSpy(`preventDefaultA`);
      eventA = { preventDefault: preventDefaultA } as unknown as Event;

      preventDefaultB = jasmine.createSpy(`preventDefaultB`);
      eventB = { preventDefault: preventDefaultB } as unknown as Event;

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextlost`) {
          call.args[1](eventA);
        }
      }

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextrestored`) {
          call.args[1]();
        }
      }

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextlost`) {
          call.args[1](eventB);
        }
      }
    });

    it(`does not get any further contexts`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`does not modify the returned context`, () => {
      expect(result).toEqual({
        gl,
        timesContextRestored: 1,
        render: jasmine.any(Function),
        addEventListener: jasmine.any(Function),
      });
    });

    it(`does not prevent default again`, () => {
      expect(preventDefaultA).toHaveBeenCalledTimes(1);
    });

    it(`prevents default once`, () => {
      expect(preventDefaultB).toHaveBeenCalledTimes(1);
    });

    it(`does not manipulate the canvas`, () => {
      expect(canvas.width).toEqual(230);
      expect(canvas.height).toEqual(644);
    });

    it(`does not call the post render callbacks`, () => {
      expect(postRenderA).not.toHaveBeenCalled();
      expect(postRenderB).not.toHaveBeenCalled();
      expect(postRenderC).not.toHaveBeenCalled();
    });
  });

  describe(`on subsequent context restoration`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let render: jasmine.Spy;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefaultA: jasmine.Spy;
    let eventA: Event;
    let preventDefaultB: jasmine.Spy;
    let eventB: Event;
    let postRenderA: jasmine.Spy;
    let postRenderB: jasmine.Spy;
    let postRenderC: jasmine.Spy;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      render = jasmine.createSpy(`render`);
      canvas = {
        getContext,
        addEventListener,
        width: 230,
        height: 644,
        clientWidth: 1021,
        clientHeight: 739,
      } as unknown as HTMLCanvasElement;
      global.window = {
        devicePixelRatio: 3.7,
      } as unknown as Window & typeof globalThis;

      result = createContext(
        canvas,
        { powerPreference: `high-performance` },
        render
      );

      postRenderA = jasmine.createSpy(`postRenderA`);
      postRenderB = jasmine.createSpy(`postRenderB`);
      postRenderC = jasmine.createSpy(`postRenderC`);
      result.addEventListener(`postRender`, postRenderA);
      result.addEventListener(`postRender`, postRenderB);
      result.addEventListener(`postRender`, postRenderC);

      preventDefaultA = jasmine.createSpy(`preventDefaultA`);
      eventA = { preventDefault: preventDefaultA } as unknown as Event;

      preventDefaultB = jasmine.createSpy(`preventDefaultB`);
      eventB = { preventDefault: preventDefaultB } as unknown as Event;

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextlost`) {
          call.args[1](eventA);
        }
      }

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextrestored`) {
          call.args[1]();
        }
      }

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextlost`) {
          call.args[1](eventB);
        }
      }

      for (const call of addEventListener.calls.all()) {
        if (call.args[0] === `webglcontextrestored`) {
          call.args[1]();
        }
      }
    });

    it(`does not get any further contexts`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`does not render`, () => {
      expect(render).not.toHaveBeenCalled();
    });

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`increments the times restored`, () => {
      expect(result).toEqual({
        gl,
        timesContextRestored: 2,
        render: jasmine.any(Function),
        addEventListener: jasmine.any(Function),
      });
    });

    it(`does not prevent default again`, () => {
      expect(preventDefaultA).toHaveBeenCalledTimes(1);
    });

    it(`does not prevent default again`, () => {
      expect(preventDefaultB).toHaveBeenCalledTimes(1);
    });

    it(`does not manipulate the canvas`, () => {
      expect(canvas.width).toEqual(230);
      expect(canvas.height).toEqual(644);
    });

    it(`does not call the post render callbacks`, () => {
      expect(postRenderA).not.toHaveBeenCalled();
      expect(postRenderB).not.toHaveBeenCalled();
      expect(postRenderC).not.toHaveBeenCalled();
    });
  });

  describe(`on render`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let render: jasmine.Spy;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let canvasWidthAtTimeOfRender: number;
    let canvasHeightAtTimeOfRender: number;
    let postRenderA: jasmine.Spy;
    let postRenderB: jasmine.Spy;
    let postRenderC: jasmine.Spy;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      render = jasmine.createSpy(`render`).and.callFake(() => {
        canvasWidthAtTimeOfRender = canvas.width;
        canvasHeightAtTimeOfRender = canvas.height;
      });
      canvas = {
        getContext,
        addEventListener,
        width: 230,
        height: 644,
        clientWidth: 1021,
        clientHeight: 739,
      } as unknown as HTMLCanvasElement;
      global.window = {
        devicePixelRatio: 3.7,
      } as unknown as Window & typeof globalThis;

      result = createContext(
        canvas,
        { powerPreference: `high-performance` },
        render
      );

      postRenderA = jasmine.createSpy(`postRenderA`);
      postRenderB = jasmine.createSpy(`postRenderB`);
      postRenderC = jasmine.createSpy(`postRenderC`);
      result.addEventListener(`postRender`, postRenderA);
      result.addEventListener(`postRender`, postRenderB);
      result.addEventListener(`postRender`, postRenderC);

      canvas.width = 928;
      canvas.height = 3281;
      (canvas as unknown as { clientWidth: number }).clientWidth = 224;
      (canvas as unknown as { clientHeight: number }).clientHeight = 301;
      global.window = {
        devicePixelRatio: 1.2,
      } as unknown as Window & typeof globalThis;

      result.render();
    });

    it(`does not get any further contexts`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`renders once`, () => {
      expect(render).toHaveBeenCalledTimes(1);
    });

    it(`renders with the dimensions of the canvas`, () => {
      expect(render).toHaveBeenCalledWith(268.8, 361.2);
    });

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`does not modify the returned context`, () => {
      expect(result).toEqual({
        gl,
        timesContextRestored: 0,
        render: jasmine.any(Function),
        addEventListener: jasmine.any(Function),
      });
    });

    it(`resizes the canvas`, () => {
      expect(canvas.width).toEqual(268.8);
      expect(canvas.height).toEqual(361.2);
    });

    it(`has resized the canvas by the time the render callback executes`, () => {
      expect(canvasWidthAtTimeOfRender).toEqual(268.8);
      expect(canvasHeightAtTimeOfRender).toEqual(361.2);
    });

    it(`calls the post render callbacks once`, () => {
      expect(postRenderA).toHaveBeenCalledTimes(1);
      expect(postRenderB).toHaveBeenCalledTimes(1);
      expect(postRenderC).toHaveBeenCalledTimes(1);
    });

    it(`calls the post render callbacks after rendering`, () => {
      expect(render).toHaveBeenCalledBefore(postRenderA);
      expect(render).toHaveBeenCalledBefore(postRenderB);
      expect(render).toHaveBeenCalledBefore(postRenderC);
    });
  });
});
