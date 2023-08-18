import * as THREE from 'three'
import { DatGui } from '../helper/DatGui'

const datControl = (cube) => {
  const datGui = new DatGui()
  // cube位置
  const cubePosition = datGui.addFolder('cubePosition')
  cubePosition.add(cube.position, 'x', -50, 50, 1).name('cubeX')
  cubePosition.add(cube.position, 'y', -50, 50, 1).name('cubeY')
  cubePosition.add(cube.position, 'z', -50, 50, 1).name('cubeZ')
  // cube长宽高
  const cubeScale = datGui.addFolder('cubeScale')
  cubeScale.add(cube.scale, 'x', 1, 5, 1).name('cubeScaleX')
  cubeScale.add(cube.scale, 'y', 1, 5, 1).name('cubeScaleY')
  cubeScale.add(cube.scale, 'z', 1, 5, 1).name('cubeScaleZ')
  // cube颜色
  const cubeColor = datGui.addFolder('cubeColor')
  cubeColor.addColor({ color: '#00ffff' }, 'color').onChange((e) => {
    cube.material.color.set(e)
  })
}

const createCube = () => {
  const geometry = new THREE.BoxGeometry(10, 10, 10)
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
  })
  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, 0, 0)
  // cube.castShadow = true
  datControl(cube)
  return cube
}

export { createCube }
