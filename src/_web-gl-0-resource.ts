/**
 * A WebGL resource.
 * @template TInstance The information created when the resource is instantiated.
 * @template TWebGlRenderingContextKey The key(s) of the WebGL rendering context which are used by the resource.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
abstract class WebGlResource<
  TInstance,
  TWebGlRenderingContextKey extends keyof WebGLRenderingContext
> implements WebGlResourceInterface<TInstance>
{
  private disposed = false;
  private instance: null | TInstance = null;
  private timesContextRestoredWhenInstanceCreated = 0;

  /**
   * Creates a new WebGL resource.
   * @param context The context under which the resource will be created.
   */
  constructor(
    public readonly context: WebGlContextInterface<
      TWebGlRenderingContextKey | `isContextLost`
    >
  ) {}

  /**
   * Permanently destroys the WebGL resource, freeing its resources and preventing its further use.
   */
  dispose(): void {
    this.throwIfDisposed();

    this.disposed = true;

    if (
      this.instance !== null &&
      this.timesContextRestoredWhenInstanceCreated ===
        this.context.timesContextRestored
    ) {
      this.deleteInstance(this.instance);
      this.instance = null;
    }
  }

  throwIfDisposed(): void {
    if (this.disposed) {
      throw new Error(`Unable to interact with a disposed resource.`);
    }
  }

  throwIfFromAnotherContext(resource: WebGlResourceInterface<unknown>): void {
    this.throwIfDisposed();
    resource.throwIfDisposed();

    if (this.context !== resource.context) {
      throw new Error(`Unable to interact with resources from other contexts.`);
    }
  }

  getInstance(): null | TInstance {
    this.throwIfDisposed();

    if (
      this.instance === null ||
      this.timesContextRestoredWhenInstanceCreated !==
        this.context.timesContextRestored
    ) {
      if (this.context.gl.isContextLost()) {
        this.instance = null;

        return null;
      } else {
        this.timesContextRestoredWhenInstanceCreated =
          this.context.timesContextRestored;

        this.instance = this.createInstance();

        return this.instance;
      }
    } else {
      return this.instance;
    }
  }

  /**
   * Creates a new instance of this resource.  Will normally be called before the first use.  May be called again following recovery of a lost context.
   */
  abstract createInstance(): TInstance;

  /**
   * Deletes a previously created instance of this resource.  Will normally be called during disposal.
   * @param instance The instance of this resource to delete.
   */
  abstract deleteInstance(instance: TInstance): void;
}
