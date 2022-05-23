# Dreck WebGL Plugin [![License](https://img.shields.io/github/license/sunruse/dreck-webgl-plugin.svg)](https://github.com/sunruse/dreck-webgl-plugin/blob/master/license) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

Adds a library of TypeScript classes to a Dreck project for interacting with WebGL.

## Features

- Automatic vertex attribute packing.
- Robust context loss handling.

## Installation

Run the following in a Bash shell at the root of your project:

```bash
git submodule add https://github.com/sunruse/dreck-webgl-plugin submodules/plugins/dreck-webgl-plugin
```

## Example

```typescript
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
