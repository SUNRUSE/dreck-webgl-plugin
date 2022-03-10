# Celluloid Engine [![Continuous Integration](https://github.com/jameswilddev/celluloid-engine/workflows/Continuous%20Integration/badge.svg)](https://github.com/jameswilddev/celluloid-engine/actions) [![License](https://img.shields.io/github/license/jameswilddev/celluloid-engine.svg)](https://github.com/jameswilddev/celluloid-engine/blob/master/license) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

A collection of bits and bobs you can use to make your own browser-based 3D applications (such as games).

## Features

- [Animation](./animation/readme.md)
- [Math](./math/readme.md)
- [WebGL abstraction layer](./webgl-abstraction-layer/readme.md)

## Setup

### Creating an application

Install as a NPM dependency of your project:

```bash
npm install --save celluloid-engine
```

From there, use a module bundler such as [webpack](https://webpack.js.org/) and use the exports described in the above "Features" section.