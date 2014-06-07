var canvas        = document.body.appendChild(document.createElement('canvas'))
var triangle      = require('a-big-triangle')
var createContext = require('gl-context')
var createTex2d   = require('gl-texture2d')
var glslify       = require('glslify')
var createShell   = require('gl-now')
var lena          = require('lena')

canvas.width = 512
canvas.height = 512

var gl = createContext(canvas, render)
var tex = createTex2d(gl, lena)
var shader = glslify({
    vert: './index.vert'
  , frag: './index.frag'
})(gl)

function render() {
  shader.bind()
  shader.uniforms.uTexture = tex.bind(0)
  triangle(gl)
}
