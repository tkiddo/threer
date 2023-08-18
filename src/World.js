import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLight } from './components/light'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/resizer'

let camera, scene, renderer, lighter, resizer
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
  }
  render() {
    renderer.render(scene, camera)
  }
}

export { World }
