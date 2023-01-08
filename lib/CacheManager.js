export class CacheManager extends Map {
  constructor (client) {
    super()
  }

  /** @param {string} url */
  has (url) {
    if (super.has(url)) {
      const { cacheUntil } = super.get(url)

      if (Date.now() > cacheUntil) {
        super.delete(url)
        return false
      }

      return true
    }
    return false
  }

  /** @param {string} url */
  get (url) {
    if (this.has(url)) {
      return super.get(url)
    }
  }

  /**
   * @param {string} url URL
   * @param {Response} res HTTP Response
   * @param {any} body Response Body
   */
  set (url, res, body) {
    super.set(url, {
      res,
      body,
      cacheUntil: this.extractCacheControlHeader(res)
    })
  }

  delete (url) {
    return super.delete(url)
  }
}
