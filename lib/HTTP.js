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
    const RESULTS = await fetch(baseURL + endpoint, {
      headers: this.getHeaders()
    })
    if (!RESULTS.ok) throw new APIError(RESULTS, await RESULTS.text())
    return await RESULTS.json()
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
    return await this.requestAsync('brawlers', { before, after, limit})
  }

  async getRanking(country, type) {
    return {ranks: await this.requestAsync(`rankings/${country}/${type}`), country: country, type: type}
  }

  async getBrawlersRankings(brawler, country = 'global') {
    return await this.requestAsync(`rankings/${country}/brawlers/${brawler}`)
  }
}

module.exports = HTTP
