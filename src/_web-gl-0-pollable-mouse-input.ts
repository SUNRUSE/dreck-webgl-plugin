/**
 * Tracks mouse events and allows for polling from within a render loop.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WebGlPollableMouseInput {
  /**
   * The position of the mouse relative to the left edge of the canvas.  May be negative if left of the canvas.
   */
  x = 0;

  /**
   * The position of the mouse relative to the top edge of the canvas.  May be negative if above the canvas.
   */
  y = 0;

  /**
   * When true, the left mouse button is currently being held down.  It is otherwise currently released.
   */
  left = false;

  /**
   * When true, the right mouse button is currently being held down.  It is otherwise currently released.
   */
  right = false;

  /**
   * When true, the middle mouse button is currently being held down.  It is otherwise currently released.
   */
  middle = false;

  /**
   * The amount of scroll since the previous frame; negative is up and positive is down.
   */
  scroll = 0;

  constructor(context: WebGlContextInterface<`canvas`>) {
    const handler = (e: MouseEvent): void => {
      const rect = context.gl.canvas.getBoundingClientRect();
      this.x = e.clientX - rect.left;
      this.y = e.clientY - rect.top;
      this.left = !!(e.buttons & 1);
      this.right = !!(e.buttons & 2);
      this.middle = !!(e.buttons & 4);

      if (e.target === context.gl.canvas) {
        e.preventDefault();
      }
    };

    addEventListener(`mousemove`, handler);
    addEventListener(`mousedown`, handler);
    addEventListener(`mouseup`, handler);
    addEventListener(`wheel`, (e) => {
      this.scroll += e.deltaY;

      handler(e);
    });

    context.addEventListener(`postRender`, () => {
      this.scroll = 0;
    });
  }
}
