const HTTP      = require('./HTTP')
const Club      = require('./Club')
const Player    = require('./Player')
const Brawler   = require('./Brawler')
const BattleLog = require('./BattleLog')

class Client {
  constructor(opts) {
    if (typeof(opts) === 'string') opts = { token: opts }

    this.token = opts.token
    this.http  = new HTTP(this)
  }

  async getPlayer(tag) {
    return new Player(await this.http.getPlayer(tag))
  }

  async getBattleLog(tag) {
    return new BattleLog(await this.http.getPlayerBattlelog(tag))
  }

  async getClub(tag) {
    return new Club(await this.http.getClub(tag))
  }

  async getBrawlers() {
    const res = await this.http.getBrawlers()
    return res.items.map(x => new Brawler(this.http, x))
  }
}

module.exports = Client
