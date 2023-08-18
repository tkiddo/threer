import * as THREE from 'three'

const createScene = () => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x333333)

  return scene
}

export { createScene }
