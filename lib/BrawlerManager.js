const Brawler = require('./Brawler')

class BrawlerManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    super()
    this.client = client
  }

  async fetchJSON (id) {
    const url = this.client.url.brawlers(id)
    const res = await this.client.fetch(url)
    
    return res.json()
  }

  /** @param {number} id */
  async fetch (id) {
    if (id == null) throw new TypeError('`id` is null')

    const content = await this.fetchJSON(id)
    return new Brawler(this.client, content)
  }

  /** @returns {Promise<Brawler[]>} */
  async fetchAll () {
    /** @type {any[]} */
    const content = await this.fetchJSON()

    return content.map(c => new Brawler(this.client, c))
  }
}

module.exports = BrawlerManager
