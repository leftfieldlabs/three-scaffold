import { Object3D, AmbientLight } from 'three';


/**
 * Gives our scene some light. Light helps us see things.
 * @constructor
 **/
class Lighting extends Object3D {
  constructor(props) {
    super(props);

    this.ambLight = new AmbientLight(0xffffff, 0.8);
    this.add(this.ambLight);

    // this.topLight = new THREE.DirectionalLight(0xffffff, 1.7);
    // this.topLight.position.set(10, 10, 10);
    // this.add(this.topLight);

  }
}

export default Lighting;
