import { ContextInterface, createContext } from "..";

describe(`createContext`, () => {
  describe(`when WebGL context creation fails`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let error: unknown;

    beforeAll(() => {
      getContext = jasmine.createSpy(`getContext`).and.returnValue(null);
      addEventListener = jasmine.createSpy(`addEventListener`);
      canvas = {
        getContext,
        addEventListener,
      } as unknown as HTMLCanvasElement;

      try {
        createContext(canvas, { powerPreference: `high-performance` });
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

    it(`does not add any event listeners to the canvas`, () => {
      expect(addEventListener).not.toHaveBeenCalled();
    });

    it(`throws the expected error`, () => {
      expect(error).toEqual(new Error(`Failed to create a WebGL context.`));
    });
  });

  describe(`when WebGL context creation succeeds`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      canvas = {
        getContext,
        addEventListener,
      } as unknown as HTMLCanvasElement;

      result = createContext(canvas, { powerPreference: `high-performance` });
    });

    it(`gets one context`, () => {
      expect(getContext).toHaveBeenCalledTimes(1);
    });

    it(`gets a WebGL context`, () => {
      expect(getContext).toHaveBeenCalledWith(`webgl`, {
        powerPreference: `high-performance`,
      });
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
      expect(result).toEqual({ gl, timesContextRestored: 0 });
    });
  });

  describe(`on context loss`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefault: jasmine.Spy;
    let event: Event;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      canvas = {
        getContext,
        addEventListener,
      } as unknown as HTMLCanvasElement;

      result = createContext(canvas, { powerPreference: `high-performance` });

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

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`does not modify the returned context`, () => {
      expect(result).toEqual({ gl, timesContextRestored: 0 });
    });

    it(`prevents default once`, () => {
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });
  });

  describe(`on context restoration`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefault: jasmine.Spy;
    let event: Event;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      canvas = {
        getContext,
        addEventListener,
      } as unknown as HTMLCanvasElement;

      result = createContext(canvas, { powerPreference: `high-performance` });

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

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`increments the times restored`, () => {
      expect(result).toEqual({ gl, timesContextRestored: 1 });
    });

    it(`does not prevent default again`, () => {
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });
  });

  describe(`on subsequent context loss`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefaultA: jasmine.Spy;
    let preventDefaultB: jasmine.Spy;
    let eventA: Event;
    let eventB: Event;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      canvas = {
        getContext,
        addEventListener,
      } as unknown as HTMLCanvasElement;

      result = createContext(canvas, { powerPreference: `high-performance` });

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

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`does not modify the returned context`, () => {
      expect(result).toEqual({ gl, timesContextRestored: 1 });
    });

    it(`does not prevent default again`, () => {
      expect(preventDefaultA).toHaveBeenCalledTimes(1);
    });

    it(`prevents default once`, () => {
      expect(preventDefaultB).toHaveBeenCalledTimes(1);
    });
  });

  describe(`on subsequent context restoration`, () => {
    let getContext: jasmine.Spy;
    let addEventListener: jasmine.Spy;
    let canvas: HTMLCanvasElement;
    let gl: WebGLRenderingContext;
    let result: ContextInterface<keyof WebGLRenderingContext>;
    let preventDefaultA: jasmine.Spy;
    let eventA: Event;
    let preventDefaultB: jasmine.Spy;
    let eventB: Event;

    beforeAll(() => {
      gl = { test: `gl` } as unknown as WebGLRenderingContext;
      getContext = jasmine.createSpy(`getContext`).and.returnValue(gl);
      addEventListener = jasmine.createSpy(`addEventListener`);
      canvas = {
        getContext,
        addEventListener,
      } as unknown as HTMLCanvasElement;

      result = createContext(canvas, { powerPreference: `high-performance` });

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

    it(`does not add further event listeners to the canvas`, () => {
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it(`increments the times restored`, () => {
      expect(result).toEqual({ gl, timesContextRestored: 2 });
    });

    it(`does not prevent default again`, () => {
      expect(preventDefaultA).toHaveBeenCalledTimes(1);
    });

    it(`does not prevent default again`, () => {
      expect(preventDefaultB).toHaveBeenCalledTimes(1);
    });
  });
});
