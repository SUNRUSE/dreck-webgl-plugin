import { FloatAnimation, sampleFloatAnimation } from "..";

describe(`sampleFloatAnimation`, () => {
  function Scenario(
    description: string,
    animation: FloatAnimation,
    atFrame: number,
    expected: number
  ): void {
    describe(description, () => {
      let actual: number;

      beforeAll(() => {
        actual = sampleFloatAnimation(animation, atFrame);
      });

      it(`returns the expected value`, () => {
        expect(actual).toEqual(expected);
      });
    });
  }

  Scenario(
    `before first keyframe constant`,
    {
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on first keyframe constant`,
    {
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `between first and second keyframes constant`,
    {
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    9,
    14
  );

  Scenario(
    `before first keyframe linear`,
    {
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on first keyframe linear`,
    {
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `between first and second keyframes linear`,
    {
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    9,
    15.25
  );

  Scenario(
    `on second keyframe constant`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: `constant`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    12,
    19
  );

  Scenario(
    `between second and third keyframes constant`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: `constant`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    13,
    19
  );

  Scenario(
    `on second keyframe linear`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    12,
    19
  );

  Scenario(
    `between second and third keyframes linear`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    13,
    14.75
  );

  Scenario(
    `on third keyframe constant`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    16,
    2
  );

  Scenario(
    `between third and fourth keyframes constant`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,

          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    17,
    2
  );

  Scenario(
    `on third keyframe linear`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    16,
    2
  );

  Scenario(
    `between third and fourth keyframes linear`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    17,
    3
  );

  Scenario(
    `on final keyframe constant`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    23,
    7
  );

  Scenario(
    `after final keyframe constant`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,

          atFrame: 12,
          value: 19,
        },
        {
          type: `constant`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    24,
    7
  );

  Scenario(
    `on final keyframe linear`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    23,
    7
  );

  Scenario(
    `after final keyframe linear`,
    {
      keyframes: [
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 8,
          value: 14,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,

          atFrame: 12,
          value: 19,
        },
        {
          type: `linear`,
          atFrame: 16,
          value: 2,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 18,
          value: 4,
        },
        {
          type: Math.random() >= 0.5 ? `constant` : `linear`,
          atFrame: 23,
          value: 7,
        },
      ],
    },
    24,
    7
  );

  Scenario(
    `before single keyframe constant`,
    {
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on single keyframe constant`,
    {
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `after single keyframe constant`,
    {
      keyframes: [
        {
          type: `constant`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    9,
    14
  );

  Scenario(
    `before single keyframe linear`,
    {
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    7,
    14
  );

  Scenario(
    `on single keyframe linear`,
    {
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    8,
    14
  );

  Scenario(
    `after single keyframe linear`,
    {
      keyframes: [
        {
          type: `linear`,
          atFrame: 8,
          value: 14,
        },
      ],
    },
    9,
    14
  );
});
