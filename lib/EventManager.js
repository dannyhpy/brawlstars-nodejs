const fetch = require('node-fetch').default

const Event = require('./Event')

class EventManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    super()
    this.client = client
  }

  async fetchJSON () {
    const url = this.client.url.events()
    const res = await this.client.fetch(url)

    return res.json()
  }

  /** @returns {Promise<Event[]>} */
  async fetch () {
    /** @type {any[]} */
    const content = await this.fetchJSON(tag)

    return content.map(c => new Event(this.client, c))
  }
}

module.exports = EventManager