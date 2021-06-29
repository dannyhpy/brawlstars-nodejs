const fetch = require('node-fetch').default

const Club = require('./Club')

class ClubManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    super()
    this.client = client
  }

  /** @param {string} tag */
  async fetchJSON (tag) {
    const url = this.client.url.clubs(tag)
    const res = await this.client.fetch(url)

    return res.json()
  }

  /** @param {string} tag */
  async fetch (tag) {
    const content = await this.fetchJSON(tag)

    return new Club(this.client, content)
  }
}

module.exports = ClubManager
