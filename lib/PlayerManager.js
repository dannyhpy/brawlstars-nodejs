const fetch = require('node-fetch')

const Player = require('./Player')

class PlayerManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    this.client = client
  }

  /** @param {string} tag */
  async fetchJSON (tag) {
    const url = this.client.url.players(tag)
    await fetch(url, {
      headers: this.client.writeHTTPHeaders()
    })
    
  }
}

module.exports = PlayerManager
