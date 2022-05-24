describe(`WebGlPollableMouseInput`, () => {
  type Step =
    | {
        readonly type: `mousemove` | `mouseup` | `mousedown`;
        readonly sameTarget: boolean;
        readonly clientX: number;
        readonly clientY: number;
        readonly left: number;
        readonly top: number;
        readonly buttons: number;
      }
    | {
        readonly type: `wheel`;
        readonly sameTarget: boolean;
        readonly clientX: number;
        readonly clientY: number;
        readonly left: number;
        readonly top: number;
        readonly buttons: number;
        readonly deltaY: number;
      }
    | {
        readonly type: `render`;
        readonly left: number;
        readonly top: number;
      };

  const scenario = (
    description: string,
    steps: ReadonlyArray<Step>,
    x: number,
    y: number,
    left: boolean,
    right: boolean,
    middle: boolean,
    scroll: number
  ): void => {
    describe(description, () => {
      let getBoundingClientRect: jasmine.Spy;
      let windowAddEventListener: jasmine.Spy;
      let contextAddEventListener: jasmine.Spy;
      let render: jasmine.Spy;
      let pollableMouseInput: WebGlPollableMouseInput;
      let preventDefaultWhichShouldNotBeCalled: ReadonlyArray<jasmine.Spy>;
      let preventDefaultWhichShouldBeCalledOnce: ReadonlyArray<jasmine.Spy>;

      beforeAll(() => {
        getBoundingClientRect = jasmine.createSpy(`getBoundingClientRect`);
        windowAddEventListener = jasmine.createSpy(`windowAddEventListener`);
        global.addEventListener = windowAddEventListener;
        render = jasmine.createSpy(`render`);
        contextAddEventListener = jasmine.createSpy(`contextAddEventListener`);
        const canvas = {
          getBoundingClientRect,
        };

        pollableMouseInput = new WebGlPollableMouseInput({
          gl: {
            canvas: canvas as unknown as HTMLCanvasElement,
          },
          timesContextRestored: 7,
          render,
          addEventListener: contextAddEventListener,
        });

        const _preventDefaultWhichShouldNotBeCalled: jasmine.Spy[] = [];
        preventDefaultWhichShouldNotBeCalled =
          _preventDefaultWhichShouldNotBeCalled;
        const _preventDefaultWhichShouldBeCalledOnce: jasmine.Spy[] = [];
        preventDefaultWhichShouldBeCalledOnce =
          _preventDefaultWhichShouldBeCalledOnce;

        for (const step of steps) {
          switch (step.type) {
            case `mousemove`: {
              const preventDefault = jasmine.createSpy(`preventDefault`);

              if (step.sameTarget) {
                _preventDefaultWhichShouldBeCalledOnce.push(preventDefault);
              } else {
                _preventDefaultWhichShouldNotBeCalled.push(preventDefault);
              }

              getBoundingClientRect.and.returnValue({
                left: step.left,
                top: step.top,
              });

              for (const args of windowAddEventListener.calls.allArgs()) {
                if (args[0] === `mousemove`) {
                  args[1]({
                    clientX: step.clientX,
                    clientY: step.clientY,
                    buttons: step.buttons,
                    target: step.sameTarget ? canvas : `Test Other Target`,
                    preventDefault,
                  });
                }
              }
              break;
            }

            case `mouseup`: {
              const preventDefault = jasmine.createSpy(`preventDefault`);

              if (step.sameTarget) {
                _preventDefaultWhichShouldBeCalledOnce.push(preventDefault);
              } else {
                _preventDefaultWhichShouldNotBeCalled.push(preventDefault);
              }

              getBoundingClientRect.and.returnValue({
                left: step.left,
                top: step.top,
              });

              for (const args of windowAddEventListener.calls.allArgs()) {
                if (args[0] === `mouseup`) {
                  args[1]({
                    clientX: step.clientX,
                    clientY: step.clientY,
                    buttons: step.buttons,
                    target: step.sameTarget ? canvas : `Test Other Target`,
                    preventDefault,
                  });
                }
              }
              break;
            }

            case `mousedown`: {
              const preventDefault = jasmine.createSpy(`preventDefault`);

              if (step.sameTarget) {
                _preventDefaultWhichShouldBeCalledOnce.push(preventDefault);
              } else {
                _preventDefaultWhichShouldNotBeCalled.push(preventDefault);
              }

              getBoundingClientRect.and.returnValue({
                left: step.left,
                top: step.top,
              });

              for (const args of windowAddEventListener.calls.allArgs()) {
                if (args[0] === `mousedown`) {
                  args[1]({
                    clientX: step.clientX,
                    clientY: step.clientY,
                    buttons: step.buttons,
                    target: step.sameTarget ? canvas : `Test Other Target`,
                    preventDefault,
                  });
                }
              }
              break;
            }

            case `wheel`: {
              const preventDefault = jasmine.createSpy(`preventDefault`);

              if (step.sameTarget) {
                _preventDefaultWhichShouldBeCalledOnce.push(preventDefault);
              } else {
                _preventDefaultWhichShouldNotBeCalled.push(preventDefault);
              }

              getBoundingClientRect.and.returnValue({
                left: step.left,
                top: step.top,
              });

              for (const args of windowAddEventListener.calls.allArgs()) {
                if (args[0] === `wheel`) {
                  args[1]({
                    clientX: step.clientX,
                    clientY: step.clientY,
                    buttons: step.buttons,
                    target: step.sameTarget ? canvas : `Test Other Target`,
                    deltaY: step.deltaY,
                    preventDefault,
                  });
                }
              }
              break;
            }

            case `render`:
              getBoundingClientRect.and.returnValue({
                left: step.left,
                top: step.top,
              });

              for (const args of contextAddEventListener.calls.allArgs()) {
                if (args[0] === `postRender`) {
                  args[1]();
                }
              }
              break;
          }
        }
      });

      it(`adds a mousemove event listener to the window`, () => {
        expect(windowAddEventListener).toHaveBeenCalledWith(
          `mousemove`,
          jasmine.any(Function)
        );
      });

      it(`adds a mouseup event listener to the window`, () => {
        expect(windowAddEventListener).toHaveBeenCalledWith(
          `mouseup`,
          jasmine.any(Function)
        );
      });

      it(`adds a mousedown event listener to the window`, () => {
        expect(windowAddEventListener).toHaveBeenCalledWith(
          `mousedown`,
          jasmine.any(Function)
        );
      });

      it(`adds a wheel event listener to the window`, () => {
        expect(windowAddEventListener).toHaveBeenCalledWith(
          `wheel`,
          jasmine.any(Function)
        );
      });

      it(`does not add any further event listeners to the window`, () => {
        expect(windowAddEventListener).toHaveBeenCalledTimes(4);
      });

      it(`adds a post-render event listener to the context`, () => {
        expect(contextAddEventListener).toHaveBeenCalledWith(
          `postRender`,
          jasmine.any(Function)
        );
      });

      it(`does not add any further event listeners to the context`, () => {
        expect(contextAddEventListener).toHaveBeenCalledTimes(1);
      });

      it(`does not render`, () => {
        expect(render).not.toHaveBeenCalled();
      });

      it(`produces the expected x`, () => {
        expect(pollableMouseInput.x).toEqual(x);
      });

      it(`produces the expected y`, () => {
        expect(pollableMouseInput.y).toEqual(y);
      });

      it(`produces the expected left`, () => {
        expect(pollableMouseInput.left).toEqual(left);
      });

      it(`produces the expected right`, () => {
        expect(pollableMouseInput.right).toEqual(right);
      });

      it(`produces the expected middle`, () => {
        expect(pollableMouseInput.middle).toEqual(middle);
      });

      it(`produces the expected scroll`, () => {
        expect(pollableMouseInput.scroll).toEqual(scroll);
      });

      it(`calls preventDefault once each time a mouse event occurs over the canvas`, () => {
        for (const preventDefault of preventDefaultWhichShouldBeCalledOnce) {
          expect(preventDefault).toHaveBeenCalledTimes(1);
        }
      });

      it(`does not call preventDefault any time a mouse event occurs outside the canvas`, () => {
        for (const preventDefault of preventDefaultWhichShouldNotBeCalled) {
          expect(preventDefault).not.toHaveBeenCalled();
        }
      });
    });
  };

  scenario(`initial`, [], 0, 0, false, false, false, 0);

  scenario(
    `mouse down over canvas`,
    [
      {
        type: `mousedown`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    0
  );

  scenario(
    `mouse down outside canvas`,
    [
      {
        type: `mousedown`,
        sameTarget: false,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    0
  );

  scenario(
    `mouse move over canvas`,
    [
      {
        type: `mousemove`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    0
  );

  scenario(
    `mouse move outside canvas`,
    [
      {
        type: `mousemove`,
        sameTarget: false,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    0
  );

  scenario(
    `mouse up over canvas`,
    [
      {
        type: `mouseup`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    0
  );

  scenario(
    `mouse up outside canvas`,
    [
      {
        type: `mouseup`,
        sameTarget: false,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    0
  );

  scenario(
    `wheel over canvas`,
    [
      {
        type: `wheel`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
        deltaY: 13.4,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    13.4
  );

  scenario(
    `wheel outside canvas`,
    [
      {
        type: `wheel`,
        sameTarget: false,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
        deltaY: 13.4,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    13.4
  );

  scenario(
    `wheel then wheel`,
    [
      {
        type: `wheel`,
        sameTarget: false,
        clientX: 50,
        clientY: 602,
        left: 32,
        top: 496,
        buttons: 2,
        deltaY: 4.2,
      },
      {
        type: `wheel`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
        deltaY: 13.4,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    17.6
  );

  scenario(
    `wheel then render`,
    [
      {
        type: `wheel`,
        sameTarget: false,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 5,
        deltaY: 13.4,
      },
      {
        type: `render`,
        left: 204,
        top: 742,
      },
    ],
    11,
    39,
    true,
    false,
    true,
    0
  );

  scenario(
    `left button only`,
    [
      {
        type: `mousedown`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 1,
      },
    ],
    11,
    39,
    true,
    false,
    false,
    0
  );

  scenario(
    `right button only`,
    [
      {
        type: `mousedown`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 2,
      },
    ],
    11,
    39,
    false,
    true,
    false,
    0
  );

  scenario(
    `middle button only`,
    [
      {
        type: `mousedown`,
        sameTarget: true,
        clientX: 204,
        clientY: 360,
        left: 193,
        top: 321,
        buttons: 4,
      },
    ],
    11,
    39,
    false,
    false,
    true,
    0
  );
});
