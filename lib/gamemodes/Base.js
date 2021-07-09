const Icon = require('./Icon')

class BaseGameMode {
  constructor (mode) {
    this.id = mode

    this.names = {}
    this.descriptions = {}
    // TODO(dannyhpy): Default icon
    // this.icon = new Icon('default')
  }

  get name () {
    return this.names.en || 'Unknown Gamemode'
  }

  get description () {
    return this.descriptions.en || 'Unknown Gamemode'
  }
}

module.exports = BaseGameMode
