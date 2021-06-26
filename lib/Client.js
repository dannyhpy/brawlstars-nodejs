const HTTP      = require('./HTTP')
const Club      = require('./Club')
const Player    = require('./Player')
const Brawlers  = require('./Brawlers')
const Ranking   = require('./Ranking')

const fetch = require('node-fetch')

const URLConstants = require('./URLConstants')
const PlayerManager = require('./PlayerManager')

class Client {
  constructor (opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error('No token found for BrawlStars API.')

    this.url = URLConstants
    this.token = opts.token
    this.http  = new HTTP(this)

    this.players = new PlayersStore(this)
  }

  writeHeaders () {
    return {
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
    }
  }

  /**
   * @param {string} url
   */
  fetch (url) {
    return fetch(url, {
      headers: this.writeHeaders()
    })
  }

  getPlayer (...args) {
    return this.players.fetch(...args)
  }

  async getRanking (country = 'global', type = 'players') {
    return new Ranking(await this.http.getRanking(country, type))
  }

  getClub (...args) {
    return this.fetchClub(...args)
  }

  async getBrawlers () {
    return new Brawlers(await this.http.getBrawlers())
  }
}

module.exports = Client
