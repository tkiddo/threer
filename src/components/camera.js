import * as THREE from 'three'

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.set(100, 100, 100)
  camera.lookAt(0, 0, 0)

  return camera
}

export { createCamera }
