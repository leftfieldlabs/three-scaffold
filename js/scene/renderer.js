import { WebGLRenderer }from 'three';

const container = document.getElementById('canvas');

class Renderer extends WebGLRenderer {
  constructor(props) {
    super(props);
    this.setPixelRatio(window.devicePixelRatio);

    // Give us a black clear color.
    this.setClearColor(0x000000, 0);

    // Add the renderer dom element to the document.
    container.appendChild(this.domElement);

    // Handles browser resize events.
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();
  }

  onResize() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.setSize(this.w, this.h);
    this.setViewport(0, 0, this.w, this.h);
    this.setPixelRatio(window.devicePixelRatio);
  }
}

export default Renderer;
