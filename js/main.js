import { Scene, Object3D } from 'three';

// Scene
import Camera from './scene/camera';
import Lighting from './scene/lighting';
import Renderer from './scene/renderer';

// Elements
import BunchOfCubes from './elements/bunch-of-cubes';


class Main {
  constructor() {
    this.renderTargets = [];
    this.setupScene();
    this.setupElements();
    this.animationLoop();
  }

  animationLoop() {
    requestAnimationFrame(() => {
      this.animationLoop();
    });
    this.render();
  }

  setupScene() {
    this.scene = new Scene();

    this.container = new Object3D();
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

    // Add the interaction system, needs 'this' so it can inspect the elements
    // this.interactionController = new devices.InteractionController(this);
  };


  /**
   * Sets up user input. If the user is on desktop, we're going to use the mouse
   * location to update camera position.
   * If the user is on mobile, we're using the device's orientation and gyro.
   */
  setupControls() {
    // var mobileDetect = new devices.utils.MobileDetect();
    // var orientationSupport = !!window.DeviceOrientationEvent;
    //
    // if (orientationSupport && mobileDetect.isMobile) {
    //   this.controls = new devices.controls.DeviceOrientationControls(this.camera);
    // } else {
    //   this.controls = new devices.controls.MousePointerControls(this.camera);
    // }
    //
    // this.addRenderTarget(this.controls);
    //
    // this.pageManager = new devices.PageManager(this.camera, this.controls);
  };


  /**
   * Adds our interactive elements.
   */
  setupElements() {
    let bunchOfCubes = new BunchOfCubes();
    this.addRenderTarget(bunchOfCubes);
    this.container.add(bunchOfCubes);

    // this.gestureController = new devices.controls.GestureController(this.pageManager);
    // this.gestureController.gesture.listen('swipeLeft', this.movePage.bind(this, this.gestureController.MOVEMENT_TYPES.RIGHT))
    // this.gestureController.gesture.listen('swipeRight', this.movePage.bind(this, this.gestureController.MOVEMENT_TYPES.LEFT))
    // this.gestureController.gesture.listen('swipeUp', this.movePage.bind(this, this.gestureController.MOVEMENT_TYPES.UP))
    // this.gestureController.gesture.listen('swipeDown', this.movePage.bind(this, this.gestureController.MOVEMENT_TYPES.DOWN))
    // this.gestureController.gesture.listen('drag', this.dragging.bind(this));
    // this.gestureController.gesture.listen('ended', this.endDrag.bind(this));

  };


  /**
   * Handle moving to a different page
   **/
  movePage(direction) {
    // switch(direction) {
    //   case this.gestureController.MOVEMENT_TYPES.LEFT:
    //     // Perform action here
    //   break;
    //   case this.gestureController.MOVEMENT_TYPES.RIGHT:
    //     // Perform action here
    //   break;
    //   case this.gestureController.MOVEMENT_TYPES.UP:
    //     // Perform action here
    //   break;
    //   case this.gestureController.MOVEMENT_TYPES.DOWN:
    //     // Perform action here
    //   break;
    // }
  };


  /**
   * Our main render loop.
   **/
  render() {
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
  addRenderTarget(target) {
    this.renderTargets.push(target);
  };


  /**
   * Removes a target from being called during the render loop.
   * @param {object} target Target object to call during render
   */
  removeRenderTarget(target) {
    this.renderTargets.pop(target);
  };

}

export default Main;
new Main();
