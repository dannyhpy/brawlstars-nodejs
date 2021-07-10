const URLDevConstants = {
  origin: 'developer.brawlstars.com',

  get portal () {
    return `https://${this.origin}/`
  },

  get login () {
    return `https://${this.origin}/api/login`
  },

  get keyList () {
    return `https://${this.origin}/api/apikey/list`
  }
}

module.exports = URLDevConstants
