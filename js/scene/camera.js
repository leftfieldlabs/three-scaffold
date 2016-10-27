var THREE = require('Three');

var Camera = function(props) {

  THREE.PerspectiveCamera.call(this);

  this.aspect = window.innerWidht / window.innerHeight;
  this.near = 1;
  this.far = 10000;
  this.lookAtPosition = new THREE.Vector3(0, 0, 0);
  this.position.z = 520;
  this.fov = 90;
  this.targetX = 0;
  this.lookTargetX = 0;
  this.offsetX = 0;
  this.lookAtCenter = false;

  window.addEventListener('resize', this.onResize.bind(this));
  this.onResize();
};

Camera.constructor = Camera;
Camera.prototype = Object.create(THREE.PerspectiveCamera.prototype);

Camera.prototype.render = function() {
  var ease = ((this.targetX) - this.position.x) * 0.1;
  this.position.x += this.offsetX;
  if (ease > 0.1 || ease < -0.1) {
    this.position.x += ease;
  } else {
    this.position.x = this.targetX + this.offsetX;
  }

  var lookEase = ((this.lookTargetX) - this.lookAtPosition.x) * 0.1;
  if (lookEase > 1 || lookEase < -1) {
    this.lookAtPosition.x += lookEase;
  } else {
    this.lookAtPosition.x = this.lookTargetX;
  }

  if (this.lookAtCenter) {
    this.lookAt(this.lookAtPosition);
  }
};

Camera.prototype.onResize = function(e) {
  this.w = window.innerWidth;
  this.h = window.innerHeight;
  this.aspect = this.w / this.h;
  this.updateProjectionMatrix();
};

module.exports = Camera;
