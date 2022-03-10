import type { ContextInterface } from "../ContextInterface";

/**
 * Renders a context using a requestAnimationFrame loop.  Automatically pauses on context loss; can also pause on focus loss.
 * @param context The context to render.
 * @param pauseOnFocusLoss When true, the render loop will be paused when the document is not focused; otherwise, the render loop will continue running as long as the browser opts to continue processing it.
 */
export function runRenderLoop(
  context: ContextInterface<`isContextLost` | `canvas`>,
  pauseOnFocusLoss: boolean
): void {
  let animationFrame: null | number = null;

  if (pauseOnFocusLoss) {
    addEventListener(
      `focus`,
      () => {
        if (animationFrame === null && !context.gl.isContextLost()) {
          animationFrame = requestAnimationFrame(callback);
        }
      },
      false
    );

    addEventListener(
      `blur`,
      () => {
        if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }
      },
      false
    );
  }

  context.gl.canvas.addEventListener(
    `webglcontextlost`,
    () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    },
    false
  );

  context.gl.canvas.addEventListener(
    `webglcontextrestored`,
    () => {
      if (
        animationFrame === null &&
        (!pauseOnFocusLoss || document.hasFocus())
      ) {
        animationFrame = requestAnimationFrame(callback);
      }
    },
    false
  );

  const callback = () => {
    animationFrame = null;

    if (!context.gl.isContextLost()) {
      context.render();
      animationFrame = requestAnimationFrame(callback);
    }
  };

  if (
    !context.gl.isContextLost() &&
    (!pauseOnFocusLoss || document.hasFocus())
  ) {
    animationFrame = requestAnimationFrame(callback);
  }
}
