# [Celluloid Engine](../readme.md) > WebGL abstraction layer

A set of classes which wrap WebGL objects to provide:

- Automatic vertex attribute packing.
- Robust context loss handling.

## Example

```typescript
import {
  AttributeDefinitionSet,
  Constants,
  createCanvas,
  createContext,
  PackedAttributeDefinitionSet,
  render,
  runRenderLoop,
  StaticProgram,
  StaticVertexBuffer,
} from "celluloid-engine";

const vertex: AttributeDefinitionSet = {
  location: {
    binaryType: Constants.Byte,
    shaderPrimitive: Constants.Vec2,
    normalized: false,
  },
  color: {
    binaryType: Constants.UnsignedByte,
    shaderPrimitive: Constants.Vec3,
    normalized: true,
  },
};

const packedVertex = new PackedAttributeDefinitionSet(vertex);

const canvas = createCanvas(document.body);
const context = createContext(
  canvas,
  {
    alpha: false,
    antialias: false,
    depth: false,
    desynchronized: false,
    failIfMajorPerformanceCaveat: true,
    powerPreference: `low-power`,
    stencil: false,
  },
  (width, height) => {
    context.gl.viewport(0, 0, width, height);

    render(context, vertexBuffer, program, {});
  }
);

const vertexBuffer = new StaticVertexBuffer(
  context,
  Constants.Triangles,
  packedVertex,
  {
    location: [
      [-1, -1],
      [0, 1],
      [1, -1],
    ],
    color: [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255],
    ],
  }
);

const program = new StaticProgram(
  context,
  vertex,
  {},
  { varyingColor: { shaderPrimitive: Constants.Vec3, quantity: 1 } },
  [`precision mediump float;`],
  [
    `void main(void) {`,
    `varyingColor = color;`,
    `gl_Position = vec4(location, 0, 1);`,
    `}`,
  ],
  [`precision mediump float;`],
  [`void main(void) {`, `gl_FragColor = vec4(varyingColor, 1);`, `}`]
);

runRenderLoop(context, true);
```
