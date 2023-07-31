import * as THREE from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const datGui = new dat.GUI()

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.querySelector('#webgl').appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})

const geometry = new THREE.BoxGeometry(30, 30, 30)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 0, 0)
scene.add(cube)

// cube位置
datGui.add(cube.position, 'x', -50, 50, 1).name('cubeX')
datGui.add(cube.position, 'y', -50, 50, 1).name('cubeY')
datGui.add(cube.position, 'z', -50, 50, 1).name('cubeZ')
// cube长宽高
datGui.add(cube.scale, 'x', 0, 5, 1).name('cubeWidth')
datGui.add(cube.scale, 'y', 0, 5, 1).name('cubeHeight')
datGui.add(cube.scale, 'z', 0, 5, 1).name('cubeDepth')

camera.position.set(100, 100, 100)
camera.lookAt(0, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
