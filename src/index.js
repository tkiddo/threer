import * as THREE from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'

import { createRenderer } from './systems/renderer'

const datGui = new dat.GUI()

const scene = createScene()

const renderer = createRenderer()

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})

const cube = createCube()
scene.add(cube)

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

const camera = createCamera()

//camera位置
const cameraPosition = datGui.addFolder('cameraPosition')
cameraPosition.add(camera.position, 'x', -200, 200, 1).name('cameraX')
cameraPosition.add(camera.position, 'y', -200, 200, 1).name('cameraY')
cameraPosition.add(camera.position, 'z', -200, 200, 1).name('cameraZ')

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const light = new THREE.DirectionalLight(0xffffff, 1.0)
light.position.set(400, 200, 300)
scene.add(light)
//light位置
const lightPosition = datGui.addFolder('lightPosition')
lightPosition.add(light.position, 'x', -500, 500, 1).name('lightX')
lightPosition.add(light.position, 'y', -500, 500, 1).name('lightY')
lightPosition.add(light.position, 'z', -500, 500, 1).name('lightZ')

const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
