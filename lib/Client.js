const fetch = require('node-fetch').default

const PlayerManager = require('./PlayerManager')
const ClubManager = require('./ClubManager')
const BrawlerManager = require('./BrawlerManager')
const EventManager = require('./EventManager')

const CacheManager = require('./CacheManager')
const URLConstants = require('./URLConstants')

class Client {
  constructor (opts = {}) {
    if (typeof(opts) === 'string') opts = { token: opts }

    this.token = opts.token
    this.url = URLConstants
    /* this.cache = new CacheManager() */

    this.players = new PlayerManager(this)
    this.clubs = new ClubManager(this)
    this.brawlers = new BrawlerManager(this)
    this.events = new EventManager(this)
  }

  /** @param {string} token */
  setToken (token) {
    if (typeof(token) !== 'string') throw new TypeError(
      '`token` needs to be a string'
    )
    this.token = token
  }

  /**
   * Returns headers for API and authentication
   */
  writeHeaders () {
    if (this.token == null) throw new Error([
      'No BrawlStars token has been submitted to the Client constructor.',
      'If you need a token, please visit ' + URLConstants.devPortal + '.',
      '  and pass it to the Client constructor.'
    ].join('\n'))

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
  async getRanking (country = 'global', type = 'players') {
    //return new Ranking(await this.http.getRanking(country, type))
  }
}

module.exports = Client
