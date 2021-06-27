const HTTP      = require('./HTTP')
const Brawlers  = require('./Brawlers')
const Ranking   = require('./Ranking')

const fetch = require('node-fetch')

const PlayerManager = require('./PlayerManager')
const ClubManager = require('./ClubManager')
const EventManager = require('./EventManager')

const URLConstants = require('./URLConstants')

class Client {
  constructor (opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error('No token found for BrawlStars API.')

    this.url = URLConstants
    this.token = opts.token
    this.http  = new HTTP(this)

    this.players = new PlayerManager(this)
    this.clubs = new ClubManager(this)
    this.events = new EventManager(this)
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
