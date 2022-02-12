const HTTP      = require('./HTTP')
const Club      = require('./Club')
const Player    = require('./Player')
const Brawlers  = require('./Brawlers')
const Ranking   = require('./Ranking')

class Client {
  /**
   * @param {string} opts Brawlstars API token
   */
  constructor(opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error('No token found for BrawlStars API.')

    this.token = opts.token
    this.http  = new HTTP(this)
  }

  async getPlayer(tag) {
    return new Player(await this.http.getPlayer(tag))
  }

  async getRanking(country = 'global', type = 'players') {
    return new Ranking(await this.http.getRanking(country, type))
  }

  async getClub(tag) {
    return new Club(await this.http.getClub(tag))
  }

  async getBrawlers() {
    return new Brawlers(await this.http.getBrawlers())
  }
  
  getEventRotation() {
    return this.http.getEventRotation()
  }
}

module.exports = Client
