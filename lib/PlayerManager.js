const fetch = require('node-fetch').default

const Player = require('./Player')

class PlayerManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    super()
    this.client = client
  }

  /** @param {string} tag */
  async fetchJSON (tag) {
    const url = this.client.url.players(tag)
    const res = await fetch(url, {
      headers: this.client.writeHeaders()
    })

    return res.json()
  }

  /** @param {string} tag */
  async fetch (tag) {
    const content = await this.fetchJSON(tag)

    return new Player(content)
  }
}

module.exports = PlayerManager
