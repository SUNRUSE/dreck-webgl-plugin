import { BooleanAnimation, sampleBooleanAnimation } from "../..";

describe(`sampleBooleanAnimation`, () => {
  function Scenario(
    description: string,
    animationFactory: (expected: boolean) => BooleanAnimation,
    atFrame: number
  ): void {
    describe(description, () => {
      for (const expected of [false, true]) {
        describe(`returning ${expected}`, () => {
          let actual: boolean;

          beforeAll(() => {
            actual = sampleBooleanAnimation(
              animationFactory(expected),
              atFrame
            );
          });

          it(`returns ${expected}`, () => {
            expect(actual).toEqual(expected);
          });
        });
      }
    });
  }

  Scenario(
    `before first keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: expected,
        },
        {
          atFrame: 12,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 16,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: Math.random() >= 0.5,
        },
      ],
    }),
    7
  );

  Scenario(
    `on first keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: expected,
        },
        {
          atFrame: 12,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 16,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: Math.random() >= 0.5,
        },
      ],
    }),
    8
  );

  Scenario(
    `between first and second keyframes`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: expected,
        },
        {
          atFrame: 12,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 16,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: Math.random() >= 0.5,
        },
      ],
    }),
    10
  );

  Scenario(
    `on second keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 12,
          value: expected,
        },
        {
          atFrame: 16,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: Math.random() >= 0.5,
        },
      ],
    }),
    12
  );

  Scenario(
    `between second and third keyframes`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 12,
          value: expected,
        },
        {
          atFrame: 16,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: Math.random() >= 0.5,
        },
      ],
    }),
    14
  );

  Scenario(
    `on third keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 12,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 16,
          value: expected,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: Math.random() >= 0.5,
        },
      ],
    }),
    16
  );

  Scenario(
    `on final keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 12,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 16,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: expected,
        },
      ],
    }),
    23
  );

  Scenario(
    `after final keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 12,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 16,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 18,
          value: Math.random() >= 0.5,
        },
        {
          atFrame: 23,
          value: expected,
        },
      ],
    }),
    24
  );

  Scenario(
    `before single keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: expected,
        },
      ],
    }),
    7
  );

  Scenario(
    `on single keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: expected,
        },
      ],
    }),
    8
  );

  Scenario(
    `after single keyframe`,
    (expected) => ({
      keyframes: [
        {
          atFrame: 8,
          value: expected,
        },
      ],
    }),
    9
  );
});
