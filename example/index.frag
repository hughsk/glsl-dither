precision mediump float;

uniform sampler2D uTexture;
varying vec2 vUv;

#pragma glslify: dither = require(../8x8)

void main() {
  gl_FragColor = dither(
      gl_FragCoord.xy
    , texture2D(uTexture, vUv)
  ) * 2.0;
}
