const fetch = require('node-fetch').default

const PlayerManager = require('./PlayerManager')
const ClubManager = require('./ClubManager')
const BrawlerManager = require('./BrawlerManager')
const EventManager = require('./EventManager')

const CacheManager = require('./CacheManager')
const URLConstants = require('./URLConstants')

const BrawlStars_Developer_Portal = 'https://developer.brawlstars.com/'

class Client {
  constructor (opts) {
    if (typeof(opts) === 'string') opts = { token: opts }
    if (!opts) throw new Error([
      'No BrawlStars token has been submitted to the Client constructor.',
      'If you need a token, please visit ' + BrawlStars_Developer_Portal + '.',
      '  and pass it to the Client constructor.'
    ].join('\n'))

    this.token = opts.token
    this.url = URLConstants
    /* this.cache = new CacheManager() */

    this.players = new PlayerManager(this)
    this.clubs = new ClubManager(this)
    this.brawlers = new BrawlerManager(this)
    this.events = new EventManager(this)
  }

  /**
   * Returns headers for API and authentication
   */
  writeHeaders () {
    return {
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json'
    }
  }

  /**
   * Same behaviour as `node-fetch` but made for the API.
   *
   * Please, use **node-fetch** for external requests.
   * @param {string} url
   */
  async fetch (url) {
    const res = await fetch(url, {
      headers: this.writeHeaders()
    })

    return res
  }

  /** @deprecated */
  getPlayer (tag) {
    return this.players.fetch(tag)
  }

  /** @deprecated */
  getClub (tag) {
    return this.clubs.fetch(tag)
  }

  /** @deprecated */
  async getRanking (country = 'global', type = 'players') {
    //return new Ranking(await this.http.getRanking(country, type))
  }

  getBrawlers () {
    return this.brawlers.fetchAll()
  }
}

module.exports = Client
