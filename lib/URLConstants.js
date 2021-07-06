const TagResolver = require('./TagResolver')

const URLAssetsConstants = require('./URLAssetsConstants')

const URLConstants = {
  devPortal: 'https://developer.brawlstars.com/',

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

  brawlers (id) {
    if (id == null) return this.base + '/brawlers'
    return this.base + `/brawlers/${id}`
  },

  events () {
    return this.base + '/events/rotation'
  },
  
  assets: URLAssetsConstants
}

module.exports = URLConstants
