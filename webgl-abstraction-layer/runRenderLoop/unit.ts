import * as uuid from "uuid";
import { runRenderLoop } from "../..";

describe(`runRenderLoop`, () => {
  type State = {
    readonly documentHasFocus: boolean;
    readonly contextIsLost: boolean;
    readonly shouldBeRunning: boolean;
  };

  type Step = {
    readonly type:
      | `focus`
      | `blur`
      | `contextLost`
      | `contextRestored`
      | `frame`;
    readonly state: State;
  };

  const scenario = (
    pauseOnFocusLoss: boolean,
    initial: State,
    steps: ReadonlyArray<Step>
  ): void => {
    describe(`${
      pauseOnFocusLoss ? `pausing on focus loss` : `NOT pausing on focus loss`
    } ${
      initial.documentHasFocus
        ? `document initially has focus`
        : `document does NOT initially have focus`
    } ${
      initial.contextIsLost
        ? `context initially lost`
        : `context NOT initially lost`
    } ${steps.map((step) => step.type).join(` `)}`, () => {
      it(`executes the steps as expected`, () => {
        const addEventListener = jasmine.createSpy(`addEventListener`);
        global.addEventListener = addEventListener;
        const requestAnimationFrame = jasmine.createSpy(
          `requestAnimationFrame`
        );
        global.requestAnimationFrame = requestAnimationFrame;
        const cancelAnimationFrame = jasmine.createSpy(`cancelAnimationFrame`);
        global.cancelAnimationFrame = cancelAnimationFrame;
        const canvasAddEventListener = jasmine.createSpy(
          `canvas.addEventListener`
        );
        const isContextLost = jasmine.createSpy(`isContextLost`);
        const contextRender = jasmine.createSpy(`contextRender`);
        const contextAddEventListener = jasmine.createSpy(
          `contextAddEventListener`
        );
        const documentHasFocus = jasmine.createSpy(`document.hasFocus`);
        global.document = { hasFocus: documentHasFocus } as unknown as Document;

        let previousRequest: null | string = null;
        let nextRequest: null | string = null;
        let animationFrameCallback = () => {
          // Empty
        };

        const applyState = (
          state: State,
          precedingFrameStep: boolean
        ): void => {
          documentHasFocus.and.returnValue(state.documentHasFocus);
          isContextLost.and.returnValue(state.contextIsLost);

          if (
            state.shouldBeRunning &&
            (previousRequest === null || precedingFrameStep)
          ) {
            nextRequest = uuid.v4();
            requestAnimationFrame.and.returnValue(nextRequest);
          } else if (!state.shouldBeRunning && previousRequest !== null) {
            nextRequest = null;
          } else {
            nextRequest = previousRequest;
          }
        };

        const checkState = (
          state: State,
          followingFrameStep: boolean
        ): void => {
          if (state.shouldBeRunning && followingFrameStep) {
            expect(contextRender).toHaveBeenCalledTimes(1);
            contextRender.calls.reset();
          }

          if (
            state.shouldBeRunning &&
            (previousRequest === null || followingFrameStep)
          ) {
            expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
            expect(cancelAnimationFrame).not.toHaveBeenCalled();

            animationFrameCallback =
              requestAnimationFrame.calls.mostRecent().args[0];
          } else if (!state.shouldBeRunning && previousRequest !== null) {
            expect(requestAnimationFrame).not.toHaveBeenCalled();
            if (followingFrameStep) {
              expect(cancelAnimationFrame).not.toHaveBeenCalled();
            } else {
              expect(cancelAnimationFrame).toHaveBeenCalledWith(
                previousRequest
              );
              expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
            }
          } else {
            expect(requestAnimationFrame).not.toHaveBeenCalled();
            expect(cancelAnimationFrame).not.toHaveBeenCalled();
          }

          requestAnimationFrame.calls.reset();
          cancelAnimationFrame.calls.reset();

          previousRequest = nextRequest;
        };

        applyState(initial, false);

        runRenderLoop(
          {
            gl: {
              canvas: {
                addEventListener: canvasAddEventListener,
              } as unknown as HTMLCanvasElement,
              isContextLost,
            },
            timesContextRestored: 7,
            render: contextRender,
            addEventListener: contextAddEventListener,
          },
          pauseOnFocusLoss
        );

        checkState(initial, false);

        for (const step of steps) {
          applyState(step.state, step.type === `frame`);

          switch (step.type) {
            case `focus`:
              for (const args of addEventListener.calls.allArgs()) {
                if (args[0] === `focus`) {
                  args[1]();
                }
              }
              break;
            case `blur`:
              for (const args of addEventListener.calls.allArgs()) {
                if (args[0] === `blur`) {
                  args[1]();
                }
              }
              break;
            case `contextLost`:
              for (const args of canvasAddEventListener.calls.allArgs()) {
                if (args[0] === `webglcontextlost`) {
                  args[1]();
                }
              }
              break;
            case `contextRestored`:
              for (const args of canvasAddEventListener.calls.allArgs()) {
                if (args[0] === `webglcontextrestored`) {
                  args[1]();
                }
              }
              break;
            case `frame`:
              animationFrameCallback();
              break;
          }

          checkState(step.state, step.type === `frame`);
        }

        if (pauseOnFocusLoss) {
          expect(addEventListener).toHaveBeenCalledWith(
            `focus`,
            jasmine.any(Function),
            false
          );
          expect(addEventListener).toHaveBeenCalledWith(
            `blur`,
            jasmine.any(Function),
            false
          );
          expect(addEventListener).toHaveBeenCalledTimes(2);
        } else {
          expect(addEventListener).not.toHaveBeenCalled();
        }

        expect(canvasAddEventListener).toHaveBeenCalledWith(
          `webglcontextlost`,
          jasmine.any(Function),
          false
        );
        expect(canvasAddEventListener).toHaveBeenCalledWith(
          `webglcontextrestored`,
          jasmine.any(Function),
          false
        );
        expect(canvasAddEventListener).toHaveBeenCalledTimes(2);
      });
    });
  };

  scenario(
    false,
    { documentHasFocus: false, contextIsLost: false, shouldBeRunning: true },
    []
  );

  scenario(
    false,
    { documentHasFocus: false, contextIsLost: false, shouldBeRunning: true },
    [
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
    ]
  );

  scenario(
    false,
    { documentHasFocus: false, contextIsLost: false, shouldBeRunning: true },
    [
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
    ]
  );

  scenario(
    false,
    { documentHasFocus: false, contextIsLost: false, shouldBeRunning: true },
    [
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `contextLost`,
        state: {
          documentHasFocus: false,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
    ]
  );

  scenario(
    false,
    { documentHasFocus: true, contextIsLost: false, shouldBeRunning: true },
    []
  );

  scenario(
    false,
    { documentHasFocus: true, contextIsLost: false, shouldBeRunning: true },
    [
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
    ]
  );

  scenario(
    false,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    []
  );

  scenario(
    false,
    { documentHasFocus: true, contextIsLost: true, shouldBeRunning: false },
    []
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: false, shouldBeRunning: false },
    []
  );

  scenario(
    true,
    { documentHasFocus: true, contextIsLost: false, shouldBeRunning: true },
    []
  );

  scenario(
    true,
    { documentHasFocus: true, contextIsLost: false, shouldBeRunning: true },
    [
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    []
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    [
      {
        type: `focus`,
        state: {
          documentHasFocus: true,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    [
      {
        type: `focus`,
        state: {
          documentHasFocus: true,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
      {
        type: `contextRestored`,
        state: {
          documentHasFocus: true,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    [
      {
        type: `focus`,
        state: {
          documentHasFocus: true,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
      {
        type: `contextRestored`,
        state: {
          documentHasFocus: true,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: true,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    [
      {
        type: `contextRestored`,
        state: {
          documentHasFocus: false,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    [
      {
        type: `contextRestored`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: false,
        },
      },
      {
        type: `focus`,
        state: {
          documentHasFocus: true,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: true, shouldBeRunning: false },
    [
      {
        type: `contextRestored`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: false,
        },
      },
      {
        type: `focus`,
        state: {
          documentHasFocus: true,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: true,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: true, contextIsLost: true, shouldBeRunning: false },
    []
  );

  scenario(
    true,
    { documentHasFocus: true, contextIsLost: false, shouldBeRunning: true },
    [
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `frame`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: true,
        },
      },
      {
        type: `blur`,
        state: {
          documentHasFocus: false,
          contextIsLost: false,
          shouldBeRunning: false,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: true, contextIsLost: true, shouldBeRunning: false },
    [
      {
        type: `blur`,
        state: {
          documentHasFocus: false,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
    ]
  );

  scenario(
    true,
    { documentHasFocus: false, contextIsLost: false, shouldBeRunning: false },
    [
      {
        type: `contextLost`,
        state: {
          documentHasFocus: false,
          contextIsLost: true,
          shouldBeRunning: false,
        },
      },
    ]
  );
});
