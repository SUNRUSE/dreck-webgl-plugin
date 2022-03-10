import { createCanvas } from "../..";

describe(`createCanvas`, () => {
  let canvas: HTMLCanvasElement;
  let createElement: jasmine.Spy;
  let appendChild: jasmine.Spy;
  let result: HTMLCanvasElement;

  beforeAll(() => {
    canvas = {
      style: {
        animationFillMode: `Test Value`,
      },
    } as unknown as HTMLCanvasElement;

    createElement = jasmine.createSpy(`createElement`).and.returnValue(canvas);
    global.document = { createElement } as unknown as Document;
    appendChild = jasmine.createSpy(`appendChild`);

    const parent: Element = {
      appendChild,
    } as unknown as Element;

    result = createCanvas(parent);
  });

  it(`creates one element`, () => {
    expect(createElement).toHaveBeenCalledTimes(1);
  });

  it(`creates a canvas`, () => {
    expect(createElement).toHaveBeenCalledWith(`canvas`);
  });

  it(`updates the style as expected`, () => {
    expect(canvas.style as unknown).toEqual({
      animationFillMode: `Test Value`,
      position: `absolute`,
      left: `0`,
      top: `0`,
      width: `100%`,
      height: `100%`,
      touchAction: `none`,
    });
  });

  it(`appends one element`, () => {
    expect(appendChild).toHaveBeenCalledTimes(1);
  });

  it(`appends the canvas`, () => {
    expect(appendChild).toHaveBeenCalledWith(canvas);
  });

  it(`returns the canvas`, () => {
    expect(result).toBe(canvas);
  });
});
