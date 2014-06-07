# glsl-dither [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Bayer matrix dithering in GLSL.
Originally sourced from [@oosmoxiecode](http://github.com/oosmoxiecode)'s
[C64 Shader Demo](http://oos.moxiecode.com/js_webgl/c64_shader/), which
in turn was based on the implementation in
[this article](http://devlog-martinsh.blogspot.se/2011/03/glsl-8x8-bayer-matrix-dithering.html).

[![glsl-dither](http://imgur.com/HfU6sMD.png)](http://hughsk.io/glsl-dither)

## Usage

[![NPM](https://nodei.co/npm/glsl-dither.png)](https://nodei.co/npm/glsl-dither/)

Each dithering function takes two arguments:

* `pos`: the position of the current pixel – you can use `gl_FragCoord.xy`
  directly in most cases.
* `brightness`: the current pixel's brightness, either as a `float` or
  a `vec3|vec4` color directly.

The returned value will be the same type as the `brightness` parameter.

### `dither8x8(vec2 pos, vec3|vec4|float brightness)`
Dither using a 8x8 matrix.

### `dither4x4(vec2 pos, vec3|vec4|float brightness)`
Dither using a 4x4 matrix.

### `dither2x2(vec2 pos, vec3|vec4|float brightness)`
Dither using a 2x2 matrix.

``` glsl
precision mediump float;

uniform sampler2D uTexture;
varying vec2 vUv;

// Use any of the following:
#pragma glslify: dither = require(glsl-dither)
#pragma glslify: dither = require(glsl-dither/8x8)
#pragma glslify: dither = require(glsl-dither/4x4)
#pragma glslify: dither = require(glsl-dither/2x2)

void main() {
  vec4 color = texture2D(uTexture, vUv);
  gl_FragColor = dither(gl_FragCoord.xy, color);
}
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/glsl-dither/blob/master/LICENSE.md) for details.
