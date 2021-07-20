
const Base = require('./Base')

// #region Import gamemodes
const Heist = require('./Heist')
const GemGrab = require('./GemGrab')
const BrawlBall = require('./BrawlBall')
const DuoShowdown = require('./DuoShowdown')
const SoloShowdown = require('./SoloShowdown')
// #endregion

class GameModesMap extends Map {
  // NOTE(dannyhpy): Basically adds a default value to a Map
  constructor (base) {
    super()
    
    this.baseCls = base
  }

  get (key) {
    const val = super.get(key)
    if (val == null) return this.baseCls
    return val
  }
}

const gamemodes = new GameModesMap(Base)
gamemodes.set('heist', Heist)
gamemodes.set('gemGrab', GemGrab)
gamemodes.set('brawlBall', BrawlBall)
gamemodes.set('duoShowdown', DuoShowdown)
gamemodes.set('soloShowdown', SoloShowdown)

module.exports = gamemodes
