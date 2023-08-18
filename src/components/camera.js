import * as THREE from 'three'
import { DatGui } from '../helper/DatGui'

const datControl = (camera) => {
  const datGui = new DatGui()
  //camera位置
  const cameraPosition = datGui.addFolder('cameraPosition')
  cameraPosition.add(camera.position, 'x', -200, 200, 1).name('cameraX')
  cameraPosition.add(camera.position, 'y', -200, 200, 1).name('cameraY')
  cameraPosition.add(camera.position, 'z', -200, 200, 1).name('cameraZ')
}

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.set(100, 100, 100)
  camera.lookAt(0, 0, 0)

  datControl(camera)
  return camera
}

export { createCamera }
