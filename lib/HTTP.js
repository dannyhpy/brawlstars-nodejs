const request = require('request')
const baseURL = 'https://api.brawlstars.com/v1/'

class HTTP {
  constructor(client) {
    this.client = client
  }

  requestAsync(endpoint, qs) {
    return new Promise((resolve, reject) => {
      const head = { Authorization: `Bearer ${this.client.token}` }
      const opts = { uri: baseURL + endpoint, headers: head }
      request.get(opts, (err, res, body) => {
        if (err) return reject(err)
        const content = JSON.parse(body)

        if (res.statusCode === 200) {
          resolve(content)
        } else {
          reject(content.message || content.reason)
        }
      })
    })
  }

  async getPlayer(tag) {
    return await this.requestAsync(`players/%23${tag.replace("#", "")}`)
  }

  async getPlayerBattlelog(tag) {
    return await this.requestAsync(`players/%23${tag.replace("#", "")}/battlelog`)
  }

  async getClub(tag) {
    return await this.requestAsync(`clubs/%23${tag.replace("#", "")}`)
  }

  async getClubMembers(tag) {
    return await this.requestAsync(`clubs/%23${tag.replace("#", "")}/members`)
  }

  async getBrawler(brawlerID) {
    return await this.requestAsync(`brawlers/${brawlerID}`)
  }

  async getBrawlers(before, after, limit) {
    return await this.requestAsync('brawlers', { before, after, limit })
  }

  async getRanking(country, type) {
    return {ranks: await this.requestAsync(`rankings/${country}/${type}`), country: country, type: type}
  }

  async getBrawlersRankings(brawler, country = 'global') {
    return await this.requestAsync(`rankings/${country}/brawlers/${brawler}`)
  }
}

module.exports = HTTP
