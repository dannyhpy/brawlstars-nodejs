const Icon = require('./Icon')

class BaseGameMode {
  constructor (mode) {
    this.mode = mode

    this.icon = new Icon(mode)
  }
}

module.exports = BaseGameMode
