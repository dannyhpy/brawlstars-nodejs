const Brawlers  = require('./Brawlers')
const Ranking   = require('./Ranking')

const fetch = require('node-fetch').default

const PlayerManager = require('./PlayerManager')
const ClubManager = require('./ClubManager')
const EventManager = require('./EventManager')

const CacheManager = require('./CacheManager')
const URLConstants = require('./URLConstants')

class Client {
  constructor (opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error('No token found for BrawlStars API.')

    this.token = opts.token
    /* this.cache = new CacheManager() */

    this.players = new PlayerManager(this)
    this.clubs = new ClubManager(this)
    this.events = new EventManager(this)
  }

  writeHeaders () {
    return {
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json'
    }
  }

  /**
   * @param {string} url
   */
  async fetch (url) {
    const res = await fetch(url, {
      headers: this.writeHeaders()
    })

    return res
  }

  /** @deprecated */
  getPlayer (...args) {
    return this.players.fetch(...args)
  }

  /** @deprecated */
  getClub (...args) {
    return this.clubs.fetch(...args)
  }

  /** @deprecated */
  async getRanking (country = 'global', type = 'players') {
    return new Ranking(await this.http.getRanking(country, type))
  }

  /** @deprecated */
  async getBrawlers () {
    return new Brawlers(await this.http.getBrawlers())
  }
}

module.exports = Client
