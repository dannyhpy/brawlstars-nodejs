export const URLDevConstants = {
  origin: 'developer.brawlstars.com',

  get portal () {
    return `https://${this.origin}/`
  },

  get login () {
    return `https://${this.origin}/api/login`
  },

  get createKey () {
    return `https://${this.origin}/api/apikey/create`
  },

  get revokeKey () {
    return `https://${this.origin}/api/apikey/revoke`
  },

  get keyList () {
    return `https://${this.origin}/api/apikey/list`
  }
}
