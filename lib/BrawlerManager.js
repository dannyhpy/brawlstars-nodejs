import { Brawler } from './Brawler.js'

export class BrawlerManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    super()
    this.client = client
  }

  /** @param {number} id */
  async fetchJSON (id) {
    const url = this.client.url.brawlers(id)
    const res = await this.client.fetch(url)
    
    return res.json()
  }

  /** @param {number} id */
  async fetch (id) {
    if (this.has(id)) return this.get(id)

    const props = await this.fetchJSON(id)
    const brawler = new Brawler(this.client, props, true)
    this.set(id, brawler)
    return brawler
  }

  /** @returns {Promise<Brawler[]>} */
  async fetchAll () {
    /** @type {any[]} */
    const brawlerList = await this.fetchJSON()

    return brawlerList.map((props) => {
      const brawler = new Brawler(this.client, props, true)
      this.set(brawler.id, brawler)
      return brawler
    })
  }
}
