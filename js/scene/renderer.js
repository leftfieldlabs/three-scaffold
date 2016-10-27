var THREE = require('Three');
var container = document.getElementById('canvas');

var Renderer = function() {

  THREE.WebGLRenderer.call(this);

  this.setPixelRatio(window.devicePixelRatio);
  // Give us a black clear color.
  this.setClearColor(0x000000, 0);
  // Add the renderer dom element to the document.
  container.appendChild(this.domElement);

  // Handles browser resize events.
  window.addEventListener('resize', this.onResize.bind(this));
  this.onResize();
};

Renderer.constructor = Renderer;
Renderer.prototype = Object.create(THREE.WebGLRenderer.prototype);

Renderer.prototype.onResize = function() {
  this.w = window.innerWidth;
  this.h = window.innerHeight;
  this.setSize(this.w, this.h);
  this.setViewport(0, 0, this.w, this.h);
  this.setPixelRatio(window.devicePixelRatio);
};

module.exports = Renderer;
