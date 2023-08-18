import { World } from './src/World'

const world = new World(document.querySelector('body'))

const render = () => {
  world.render()
  requestAnimationFrame(render)
}

render()
