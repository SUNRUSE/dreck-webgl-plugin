/**
 * Creates a new WebGL context.
 * @param canvas The canvas for which to create a new WebGL context.
 * @param options The options to use when creating the WebGL context.
 * @param render Called when the context is to be rendered.
 * @returns The created context.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function webGlCreateContext(
  canvas: HTMLCanvasElement,
  options: WebGLContextAttributes,
  render: (width: number, height: number) => void
): WebGlContextInterface<keyof WebGLRenderingContext> {
  const gl = canvas.getContext(`webgl`, options);

  if (gl === null) {
    throw new Error(`Failed to create a WebGL context.`);
  } else {
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
