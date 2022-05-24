/**
 * The public methods and properties of a WebGL context manager.
 * @template TWebGlRenderingContextKey The key(s) of the WebGL rendering context which are required.
 */
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

  /**
   * Registers a callback.
   * @param type The type of callback to register.
   * @param callback The callback to register.
   */
  addEventListener(type: `postRender`, callback: () => void): void;
}
