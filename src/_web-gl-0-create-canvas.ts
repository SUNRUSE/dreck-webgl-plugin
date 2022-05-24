/**
 * Creates a new canvas element which fills its container (position absolute).
 * @param parent The element to which to add the canvas element.
 * @returns The created canvas element.
 */
function webGlCreateCanvas(parent: Element): HTMLCanvasElement {
  const canvas = document.createElement(`canvas`);

  canvas.style.position = `absolute`;
  canvas.style.left = `0`;
  canvas.style.top = `0`;
  canvas.style.width = `100%`;
  canvas.style.height = `100%`;
  canvas.style.touchAction = `none`;

  parent.appendChild(canvas);

  return canvas;
}
