import * as dat from 'dat.gui'

let instance = null
class DatGui {
  constructor() {
    if (!instance) {
      instance = new dat.GUI()
    }
    return instance
  }
}

export { DatGui }
