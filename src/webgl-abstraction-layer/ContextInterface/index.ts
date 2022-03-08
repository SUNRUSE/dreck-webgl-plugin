/**
 * The public methods and properties of a WebGL context manager.
 * @template TWebGLRenderingContextKey The key(s) of the WebGL rendering context which are required.
 */
export interface ContextInterface<
  TWebGLRenderingContextKey extends keyof WebGLRenderingContext
> {
  /**
   * The WebGL context.  May be experiencing context loss.
   */
  readonly gl: Pick<WebGLRenderingContext, TWebGLRenderingContextKey>;

  /**
   * The number of times that the WebGL context has been restored.
   */
  readonly timesContextRestored: number;

  /**
   * Renders the context.
   */
  render(): void;
}
