const fetch = require('node-fetch')
const baseURL = 'https://api.brawlstars.com/v1/'

const APIError = require('./APIError')

class HTTP {
  constructor(client) {
    this.client = client
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: 'application/json'
    }
  }

  async requestAsync(endpoint) {
    const res = await fetch(baseURL + endpoint, {
      headers: this.getHeaders()
    })
    if (!res.ok) throw new APIError(res, await res.text())
    return await res.json()
  }

  async getPlayer(tag) {
    tag = tag.toUpperCase()
    return await this.requestAsync(`players/%23${tag.replace("#", "")}`)
  }

  async getPlayerBattlelog(tag) {
    return await this.requestAsync(`players/%23${tag.replace("#", "")}/battlelog`)
  }

  async getClub(tag) {
    tag = tag.toUpperCase()
    return await this.requestAsync(`clubs/%23${tag.replace("#", "")}`)
  }

  async getClubMembers(tag) {
    tag = tag.toUpperCase()
    return await this.requestAsync(`clubs/%23${tag.replace("#", "")}/members`)
  }

  async getBrawler(brawlerID) {
    return await this.requestAsync(`brawlers/${brawlerID}`)
  }

  async getBrawlers(before, after, limit) {
    return await this.requestAsync('brawlers', { before, after, limit })
  }

  async getRanking(country, type) {
    return {
      ranks: await this.requestAsync(`rankings/${country}/${type}`),
      country: country,
      type: type
    }
  }

  async getBrawlersRankings(brawler, country = 'global') {
    return await this.requestAsync(`rankings/${country}/brawlers/${brawler}`)
  }
  
  /**
   * @returns {Promise<{
   *   startTime: string
   *   endTime: string
   *   event: {
   *     id: number
   *     mode: string
   *     map: string
   *   }
   * }[]>}
   */
  getEventRotation() {
    return this.requestAsync('events/rotation')
  }
}

module.exports = HTTP
