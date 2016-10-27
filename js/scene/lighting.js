var THREE = require('Three');

var Lighting = function() {
  THREE.Object3D.call(this);

  this.ambLight = new THREE.AmbientLight(0xffffff, 0.8);
  this.add(this.ambLight);
};

Lighting.constructor = Lighting;
Lighting.prototype = Object.create(THREE.Object3D.prototype);

module.exports = Lighting;
