class APIError extends Error {
  constructor (res, body) {
    super()

    this.res = res
    this.url = res.url
    this.code = res.status
    this.headers = res.headers

    this.reason = body.startsWith('{') && body.endsWith('}')
      ? JSON.parse(body).reason || body
      : body

    this.message = `Brawl Stars API ERROR:\n\n${this.url}\n${body}`
  }
}

module.exports = APIError