import { Base } from './Base.js'

// #region Gamemodes import
import { BrawlBall } from './BrawlBall.js'
import { DuoShowdown } from './DuoShowdown.js'
import { GemGrab } from './GemGrab.js'
import { Heist } from './Heist.js'
import { SoloShowdown } from './SoloShowdown.js'
// #endregion

class DefaultableMap extends Map {
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

const gamemodes = new DefaultableMap(Base)
gamemodes.set('brawlBall', BrawlBall)
gamemodes.set('duoShowdown', DuoShowdown)
gamemodes.set('gemGrab', GemGrab)
gamemodes.set('heist', Heist)
gamemodes.set('soloShowdown', SoloShowdown)

export default gamemodes
