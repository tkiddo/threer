let container, camera, renderer

class Resizer {
  constructor(_container, _camera, _renderer) {
    // set initial values
    container = _container
    camera = _camera
    renderer = _renderer
    this.init()
  }
  init() {
    this.resize()
    // set up the event listener
    window.addEventListener('resize', () => {
      console.log('resize')
      // update the renderer
      this.resize()
    })
  }
  resize() {
    // set the camera's aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight

    // update the camera's frustum
    camera.updateProjectionMatrix()

    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight)

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio)
  }
}

export { Resizer }
