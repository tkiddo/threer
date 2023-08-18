import * as THREE from 'three'

const createAxesHelper = (size = 100) => {
  const axesHelper = new THREE.AxesHelper(size)
  return axesHelper
}

export { createAxesHelper }
