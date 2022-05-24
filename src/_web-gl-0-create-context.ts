/**
 * Creates a new WebGL context.
 * @param canvas The canvas for which to create a new WebGL context.
 * @param options The options to use when creating the WebGL context.
 * @param render Called when the context is to be rendered.
 * @returns The created context.
 */
function webGlCreateContext(
  canvas: HTMLCanvasElement,
  options: WebGLContextAttributes,
  render: (width: number, height: number) => void
): WebGlContextInterface<keyof WebGLRenderingContext> {
  const gl = canvas.getContext(`webgl`, options);

  if (gl === null) {
    throw new Error(`Failed to create a WebGL context.`);
  } else {
    const callbacks: {
      readonly [T in `postRender`]: (() => void)[];
    } = { postRender: [] };

    const output = {
      gl,
      timesContextRestored: 0,
      render() {
        const pixelRatio = window.devicePixelRatio;
        const width = canvas.clientWidth * pixelRatio;
        const height = canvas.clientHeight * pixelRatio;

        canvas.width = width;
        canvas.height = height;

        render(width, height);

        for (const callback of callbacks.postRender) {
          callback();
        }
      },
      addEventListener(type: `postRender`, callback: () => void) {
        callbacks[type].push(callback);
      },
    };

    canvas.addEventListener(
      `webglcontextlost`,
      (event) => {
        event.preventDefault();
      },
      false
    );

    canvas.addEventListener(
      `webglcontextrestored`,
      () => {
        output.timesContextRestored++;
      },
      false
    );

    return output;
  }
}
