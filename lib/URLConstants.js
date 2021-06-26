const URLConstants = {
  origin: 'api.brawlstars.com',
  version: 'v1',

  get base () {
    return `https://${this.origin}/${this.version}/`
  },

  /** @param {string} tag */
  players (tag) {
    return this.base + `/players/${tag}`
  },

  /** @param {string} tag */
  clubs (tag) {
    return this.base + `/clubs/${tag}`
  }
}

module.exports = URLConstants
