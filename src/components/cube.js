import * as THREE from 'three'

const createCube = () => {
  const geometry = new THREE.BoxGeometry(10, 10, 10)
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    opacity: 0.5,
    transparent: true,
  })
  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, 0, 0)

  return cube
}

export { createCube }
