import * as THREE from 'three';

const createScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  return scene;
};

export { createScene };