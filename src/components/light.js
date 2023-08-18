import * as THREE from 'three'

const createLight = () => {
  const light = new THREE.DirectionalLight(0xffffff, 1.0)
  light.position.set(10, 10, -30)
  // light.castShadow = true
  // light.shadow.mapSize.width = 1024
  // light.shadow.mapSize.height = 1024
  // light.shadow.bias = -0.001
  // light.shadow.camera.near = 1
  // light.shadow.camera.far = 20
  return light
}

export { createLight }
