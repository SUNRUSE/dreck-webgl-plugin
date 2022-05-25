/**
 * The public methods and properties of a WebGL context manager.
 * @template TWebGlRenderingContextKey The key(s) of the WebGL rendering context which are required.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface WebGlContextInterface<
  TWebGlRenderingContextKey extends keyof WebGLRenderingContext
> {
  /**
   * The WebGL context.  May be experiencing context loss.
   */
  readonly gl: Pick<WebGLRenderingContext, TWebGlRenderingContextKey>;

  /**
   * The number of times that the WebGL context has been restored.
   */
  readonly timesContextRestored: number;

  /**
   * Renders the context.
   */
  render(): void;
}
