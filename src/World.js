import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLight } from './components/light'
import { createPlane } from './components/plane'

import { createAxesHelper } from './helper/axes'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

let camera, scene, renderer, resizer, light, axesHelper
class World {
  constructor(container) {
    this.init(container)
  }
  init(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.appendChild(renderer.domElement)

    resizer = new Resizer(container, camera, renderer)

    axesHelper = createAxesHelper()
    scene.add(axesHelper)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    light = createLight()
    scene.add(light)

    const cube = createCube()
    scene.add(cube)

    const plane = createPlane()
    scene.add(plane)
  }
  render() {
    light.shadow.camera.updateProjectionMatrix()
    renderer.render(scene, camera)
  }
}

export { World }
