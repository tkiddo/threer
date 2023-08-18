import * as THREE from 'three'

const createPlane = () => {
  const geometry = new THREE.PlaneGeometry(50, 50, 32)
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  })
  const plane = new THREE.Mesh(geometry, material)
  plane.position.set(0, 0, 10)
  // plane.receiveShadow = true
  return plane
}

export { createPlane }
