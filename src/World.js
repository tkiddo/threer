import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLight } from './components/light'

import { createAxesHelper } from './helper/axes'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

let camera, scene, renderer, lighter, resizer, axesHelper
class World {
  constructor(container) {
    this.init(container)
  }
  init(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    lighter = createLight()
    scene.add(lighter)
    container.appendChild(renderer.domElement)
    const cube = createCube()
    scene.add(cube)
    resizer = new Resizer(container, camera, renderer)
    axesHelper = createAxesHelper()
    scene.add(axesHelper)
  }
  render() {
    renderer.render(scene, camera)
  }
}

export { World }
