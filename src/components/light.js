import * as THREE from 'three'

const createLight = () => {
  const light = new THREE.DirectionalLight(0xffffff, 1.0)
  light.position.set(400, 200, 300)

  return light
}

export { createLight }
