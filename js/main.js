var THREE = require('Three');

// Scene
var Camera = require('./scene/camera');
var Lighting = require('./scene/lighting');
var Renderer = require('./scene/renderer');

// Elements
var BunchOfCubes = require('./elements/bunch-of-cubes');

var Main = function() {
  this.renderTargets = [];
  this.setupScene();
  this.setupElements();
  this.animationLoop();
};

Main.constructor = Main;

Main.prototype.animationLoop = function() {
  requestAnimationFrame(this.animationLoop.bind(this));
  this.render();
};

Main.prototype.setupScene = function() {
  this.scene = new THREE.Scene();

  this.container = new THREE.Object3D();
  this.container.z = -300;
  this.scene.add(this.container);

  this.camera = new Camera();
  this.container.add(this.camera);
  this.renderTargets.push(this.camera);

  this.lighting = new Lighting();
  this.container.add(this.lighting);

  this.renderer = new Renderer({
    alpha: true,
    antialias: true,
    devicePixelRatio: window.devicePixelRatio || 1
  });
};

Main.prototype.setupElements = function() {
  let bunchOfCubes = new BunchOfCubes();
  this.addRenderTarget(bunchOfCubes);
  this.container.add(bunchOfCubes);
};

/**
 * Our main render loop.
 **/
Main.prototype.render = function() {
  for (var i = 0; i < this.renderTargets.length; i++) {
    this.renderTargets[i].render();
  }
  this.renderer.render(this.scene, this.camera)
};


/**
 * Adds a target to be called during the render loop. The target object MUST
 * have a public render method to call.
 * @param {object} target Target object to call during render
 */
Main.prototype.addRenderTarget = function(target) {
  this.renderTargets.push(target);
};


/**
 * Removes a target from being called during the render loop.
 * @param {object} target Target object to call during render
 */
Main.prototype.removeRenderTarget = function(target) {
  this.renderTargets.pop(target);
};


new Main();
