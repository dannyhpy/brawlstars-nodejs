import { Icon } from './Icon.js'

export class Base {
  constructor (mode) {
    this.id = mode

    this.names = {}
    this.descriptions = {}
    // TODO(dannyhpy): Default icon
    //this.icon = new Icon('')
  }

  get name () {
    return this.names.en || '?'
  }

  get description () {
    return this.descriptions.en || '?'
  }
}
