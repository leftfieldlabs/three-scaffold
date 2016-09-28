import { Object3D, BoxGeometry, Mesh, MeshLambertMaterial } from 'three';

class BunchOfCubes extends Object3D {

  constructor(props) {
    super(props);
    var geometry = new BoxGeometry(20, 20, 20);
    for (var i = 0; i < 200; i++) {

      var object = new Mesh(geometry,
          new MeshLambertMaterial({color: Math.random() * 0xffffff }));

      object.position.x = Math.random() * 800 - 400;
      object.position.y = Math.random() * 800 - 400;
      object.position.z = Math.random() * 800 - 400;

      object.rotation.x = Math.random() * 2 * Math.PI;
      object.rotation.y = Math.random() * 2 * Math.PI;
      object.rotation.z = Math.random() * 2 * Math.PI;

      object.scale.x = Math.random() + 0.5;
      object.scale.y = Math.random() + 0.5;
      object.scale.z = Math.random() + 0.5;

      this.add(object);

    };
  }

  render() {
    this.rotation.x += .01;
    this.rotation.z += .005;
  }

}

export default BunchOfCubes;
