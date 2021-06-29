const TagResolver = require('./TagResolver')

const URLAssetsConstants = require('./URLAssetsConstants')

const URLConstants = {
  origin: 'api.brawlstars.com',
  version: 'v1',

  get base () {
    return `https://${this.origin}/${this.version}`
  },

  /** @param {string} tag */
  players (tag) {
    return this.base + `/players/${TagResolver.encode(tag)}`
  },

  /** @param {string} tag */
  clubs (tag) {
    return this.base + `/clubs/${TagResolver.encode(tag)}`
  },

  events () {
    return this.base + '/events/rotation'
  },
  
  assets: URLAssetsConstants
}

module.exports = URLConstants
