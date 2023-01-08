import { Club } from './Club.js'

export class ClubManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    super()
    this.client = client
  }

  /** @param {string} tag */
  async fetchJSON (tag) {
    const url = this.client.url.clubs(tag)
    const res = await this.client.fetch(url)

    return res.json()
  }

  /** @param {string} tag */
  async fetch (tag) {
    const normalizedTag = TagResolver.normalize(tag)
    if (this.has(normalizedTag)) return this.get(normalizedTag)

    const props = await this.fetchJSON(tag)
    const club = new Club(this.client, props, true)
    this.set(normalizedTag, club)
    return club
  }

  /**
   * Same as fetch() but does not throw NotFound errors
   * @param {string} tag
   * @returns {{ err: Error?, club: Club? }}
   */
     async tryFetch (tag) {
      try {
        const club = this.fetch(tag)
        return { err: null, club }
      } catch (err) {
        if (err instanceof Errors.NotFound)
          return { err, club: null }
        throw err
      }
    }
}
