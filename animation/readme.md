# [Celluloid Engine](../readme.md) > Animation

An animation describes how a value changes over time.

## Float animations

Float animations describe how a floating-point numerical value changes over time:

```typescript
import { FloatAnimation, sampleFloatAnimation } from "celluloid-engine";

const animation: FloatAnimation = {
  keyframes: [
    {
      type: `linear`,
      atFrame: 25,
      value: 17,
    },
    {
      type: `constant`,
      atFrame: 30,
      value: 19,
    },
    {
      type: `constant`,
      atFrame: 35,
      value: 10,
    },
  ],
};

console.log(sampleFloatAnimation(animation, 20));
console.log(sampleFloatAnimation(animation, 27.5));
console.log(sampleFloatAnimation(animation, 32.5));
console.log(sampleFloatAnimation(animation, 37.5));
```

```
16
17
18
19
10
```

## Boolean animations

Boolean animations describe how a boolean value changes over time:

```typescript
import { BooleanAnimation, sampleBooleanAnimation } from "celluloid-engine";

const animation: BooleanAnimation = {
  keyframes: [
    {
      atFrame: 25,
      value: false,
    },
    {
      atFrame: 30,
      value: true,
    },
    {
      atFrame: 35,
      value: false,
    },
  ],
};

console.log(sampleBooleanAnimation(animation, 20));
console.log(sampleBooleanAnimation(animation, 27.5));
console.log(sampleBooleanAnimation(animation, 32.5));
console.log(sampleBooleanAnimation(animation, 37.5));
```

```
false
false
true
false
```
