class CachedResponse {
  /**
   * @deprecated
   * @param {Response} res HTTP Response
   * @param {any} body Body
   * @param {number} cacheUntil Timestamp
   */
  constructor (res, body, cacheUntil) {
    this.res = res
    this.body = body
    
    this.cacheUntil = cacheUntil || null
    if (this.cacheUntil == null) this.applyCacheControlHeader()
  }

  applyCacheControlHeader () {
    const header = this.res.headers.get('Cache-Control')
    const values = new Map(
      header.split(';')
        .map(x => x.trim())
        .map(x => x.split('='))
    )

    const maxAge = values.get('max-age')
    if (isNaN(maxAge)) return

    this.cacheUntil = Date.now() + parseInt(maxAge)
  }
}

module.exports = CachedResponse