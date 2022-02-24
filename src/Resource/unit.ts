import { Resource } from "..";

describe(`Resource`, () => {
  type TestInstance = `Test Instance A` | `Test Instance B`;

  type DisposeDoesNothingStep = {
    readonly type: `disposeDoesNothing`;
    readonly timesContextRestored: number;
    readonly contextLost: boolean;
  };

  type DisposeDeletesInstanceStep = {
    readonly type: `disposeDeletesInstance`;
    readonly timesContextRestored: number;
    readonly instance: TestInstance;
  };

  type DisposeThrowsErrorStep = {
    readonly type: `disposeThrowsError`;
    readonly timesContextRestored: number;
    readonly contextLost: boolean;
  };

  type GetInstanceReturnsNullStep = {
    readonly type: `getInstanceReturnsNull`;
    readonly timesContextRestored: number;
  };

  type GetInstanceCreatesAndReturnsInstanceStep = {
    readonly type: `getInstanceCreatesAndReturnsInstance`;
    readonly timesContextRestored: number;
    readonly instance: TestInstance;
  };

  type GetInstanceReturnsPreviouslyCreatedInstanceStep = {
    readonly type: `getInstanceReturnsPreviouslyCreatedInstance`;
    readonly timesContextRestored: number;
    readonly instance: TestInstance;
  };

  type GetInstanceThrowsErrorStep = {
    readonly type: `getInstanceThrowsError`;
    readonly timesContextRestored: number;
    readonly contextLost: boolean;
  };

  type ThrowIfDisposedDoesNothingStep = {
    readonly type: `throwIfDisposedDoesNothing`;
  };

  type ThrowIfDisposedThrowsErrorStep = {
    readonly type: `throwIfDisposedThrowsError`;
  };

  type ThrowIfFromAnotherContextDoesNothingStep = {
    readonly type: `throwIfFromAnotherContextDoesNothing`;
  };

  type ThrowIfFromAnotherContextThrowsDisposalErrorStep = {
    readonly type: `throwIfFromAnotherContextThrowsDisposalError`;
    readonly otherDisposed: boolean;
  };

  type ThrowIfFromAnotherContextThrowsContextMismatchErrorStep = {
    readonly type: `throwIfFromAnotherContextThrowsContextMismatchErrorStep`;
  };

  type Step =
    | DisposeDoesNothingStep
    | DisposeDeletesInstanceStep
    | DisposeThrowsErrorStep
    | GetInstanceReturnsNullStep
    | GetInstanceCreatesAndReturnsInstanceStep
    | GetInstanceReturnsPreviouslyCreatedInstanceStep
    | GetInstanceThrowsErrorStep
    | ThrowIfDisposedDoesNothingStep
    | ThrowIfDisposedThrowsErrorStep
    | ThrowIfFromAnotherContextDoesNothingStep
    | ThrowIfFromAnotherContextThrowsDisposalErrorStep
    | ThrowIfFromAnotherContextThrowsContextMismatchErrorStep;

  function Scenario(steps: ReadonlyArray<Step>): void {
    describe(steps.map((step) => step.type).join(` - `), () => {
      it(`executes the steps as expected`, () => {
        const cullFace = jasmine.createSpy(`cullFace`);
        const isContextLost = jasmine.createSpy(`isContextLost`);

        const context = {
          gl: {
            cullFace,
            isContextLost,
          },
          timesContextRestored: 11,
        };

        const createInstance = jasmine.createSpy(`createInstance`);
        const deleteInstance = jasmine.createSpy(`deleteInstance`);

        class TestResource extends Resource<TestInstance, `cullFace`> {
          createInstance(): TestInstance {
            return createInstance();
          }

          deleteInstance(instance: TestInstance): void {
            deleteInstance(instance);
          }
        }

        expect(createInstance).not.toHaveBeenCalled();
        expect(deleteInstance).not.toHaveBeenCalled();

        const testResource = new TestResource(context);

        for (const step of steps) {
          switch (step.type) {
            case `disposeDoesNothing`:
              context.timesContextRestored = step.timesContextRestored;
              isContextLost.and.returnValue(step.contextLost);

              testResource.dispose();

              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;

            case `disposeDeletesInstance`:
              context.timesContextRestored = step.timesContextRestored;
              isContextLost.and.returnValue(true);

              testResource.dispose();

              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).toHaveBeenCalledTimes(1);
              expect(deleteInstance).toHaveBeenCalledWith(step.instance);
              break;

            case `disposeThrowsError`:
              context.timesContextRestored = step.timesContextRestored;
              isContextLost.and.returnValue(step.contextLost);

              expect(() => {
                testResource.dispose();
              }).toThrowError(`Unable to interact with a disposed resource.`);

              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;

            case `getInstanceReturnsNull`: {
              context.timesContextRestored = step.timesContextRestored;
              isContextLost.and.returnValue(true);

              const result = testResource.getInstance();

              expect(result).toBeNull();
              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;
            }

            case `getInstanceCreatesAndReturnsInstance`: {
              context.timesContextRestored = step.timesContextRestored;
              isContextLost.and.returnValue(false);
              createInstance.and.returnValue(step.instance);

              const result = testResource.getInstance();

              expect(result).toEqual(step.instance);
              expect(createInstance).toHaveBeenCalledTimes(1);
              expect(createInstance).toHaveBeenCalledWith();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;
            }

            case `getInstanceReturnsPreviouslyCreatedInstance`: {
              context.timesContextRestored = step.timesContextRestored;
              isContextLost.and.returnValue(false);

              const result = testResource.getInstance();

              expect(result).toEqual(step.instance);
              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;
            }

            case `getInstanceThrowsError`: {
              context.timesContextRestored = step.timesContextRestored;
              isContextLost.and.returnValue(step.contextLost);

              expect(() => {
                testResource.getInstance();
              }).toThrowError(`Unable to interact with a disposed resource.`);

              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;
            }

            case `throwIfDisposedDoesNothing`:
              testResource.throwIfDisposed();

              expect(isContextLost).not.toHaveBeenCalled();
              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;

            case `throwIfDisposedThrowsError`:
              expect(() => {
                testResource.throwIfDisposed();
              }).toThrowError(`Unable to interact with a disposed resource.`);

              expect(isContextLost).not.toHaveBeenCalled();
              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;

            case `throwIfFromAnotherContextDoesNothing`: {
              const otherResource = new TestResource(context);

              testResource.throwIfFromAnotherContext(otherResource);

              expect(isContextLost).not.toHaveBeenCalled();
              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;
            }

            case `throwIfFromAnotherContextThrowsDisposalError`: {
              const otherResource = new TestResource(context);
              if (step.otherDisposed) {
                otherResource.dispose();
              }

              expect(() => {
                testResource.throwIfFromAnotherContext(otherResource);
              }).toThrowError(`Unable to interact with a disposed resource.`);

              expect(isContextLost).not.toHaveBeenCalled();
              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;
            }

            case `throwIfFromAnotherContextThrowsContextMismatchErrorStep`: {
              const otherResource = new TestResource({ ...context });

              expect(() => {
                testResource.throwIfFromAnotherContext(otherResource);
              }).toThrowError(
                `Unable to interact with resources from other contexts.`
              );

              expect(isContextLost).not.toHaveBeenCalled();
              expect(createInstance).not.toHaveBeenCalled();
              expect(deleteInstance).not.toHaveBeenCalled();
              break;
            }
          }

          expect(cullFace).not.toHaveBeenCalled();

          cullFace.calls.reset();
          isContextLost.calls.reset();
          createInstance.calls.reset();
          deleteInstance.calls.reset();
        }

        expect(testResource.context).toBe(context);
      });
    });
  }

  Scenario([]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: true,
    },
  ]);

  Scenario([
    {
      type: `getInstanceReturnsNull`,
      timesContextRestored: 7,
    },
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: true,
    },
  ]);

  Scenario([
    {
      type: `getInstanceReturnsNull`,
      timesContextRestored: 7,
    },
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 8,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `getInstanceReturnsNull`,
      timesContextRestored: 7,
    },
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 8,
      contextLost: true,
    },
  ]);

  Scenario([
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
  ]);

  Scenario([
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
    {
      type: `disposeDeletesInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
  ]);

  Scenario([
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
    {
      type: `getInstanceReturnsPreviouslyCreatedInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
  ]);

  Scenario([
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
    {
      type: `getInstanceReturnsPreviouslyCreatedInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
    {
      type: `disposeDeletesInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
  ]);

  Scenario([
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 8,
      instance: `Test Instance B`,
    },
  ]);

  Scenario([
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 7,
      instance: `Test Instance A`,
    },
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 8,
      instance: `Test Instance B`,
    },
    {
      type: `disposeDeletesInstance`,
      timesContextRestored: 8,
      instance: `Test Instance B`,
    },
  ]);

  Scenario([
    {
      type: `getInstanceReturnsNull`,
      timesContextRestored: 7,
    },
    {
      type: `getInstanceCreatesAndReturnsInstance`,
      timesContextRestored: 8,
      instance: `Test Instance A`,
    },
    {
      type: `disposeDeletesInstance`,
      timesContextRestored: 8,
      instance: `Test Instance A`,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `disposeThrowsError`,
      timesContextRestored: 7,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: true,
    },
    {
      type: `disposeThrowsError`,
      timesContextRestored: 7,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `disposeThrowsError`,
      timesContextRestored: 7,
      contextLost: true,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `disposeThrowsError`,
      timesContextRestored: 8,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `disposeThrowsError`,
      timesContextRestored: 8,
      contextLost: true,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `getInstanceThrowsError`,
      timesContextRestored: 7,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: true,
    },
    {
      type: `getInstanceThrowsError`,
      timesContextRestored: 8,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `getInstanceThrowsError`,
      timesContextRestored: 8,
      contextLost: false,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: true,
    },
    {
      type: `getInstanceThrowsError`,
      timesContextRestored: 7,
      contextLost: true,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `getInstanceThrowsError`,
      timesContextRestored: 7,
      contextLost: true,
    },
  ]);

  Scenario([
    {
      type: `throwIfDisposedDoesNothing`,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `throwIfDisposedThrowsError`,
    },
  ]);

  Scenario([
    {
      type: `throwIfFromAnotherContextDoesNothing`,
    },
  ]);

  Scenario([
    {
      type: `throwIfFromAnotherContextThrowsContextMismatchErrorStep`,
    },
  ]);

  Scenario([
    {
      type: `disposeDoesNothing`,
      timesContextRestored: 7,
      contextLost: false,
    },
    {
      type: `throwIfFromAnotherContextThrowsDisposalError`,
      otherDisposed: false,
    },
  ]);

  Scenario([
    {
      type: `throwIfFromAnotherContextThrowsDisposalError`,
      otherDisposed: true,
    },
  ]);
});
