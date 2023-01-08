import { Player } from './Player.js'
import { TagResolver } from './TagResolver.js'

import { NotFound } from './Rejections.js'

export class PlayerManager extends Map {
  /**
   * @param {import('./Client')} client
   */
  constructor (client) {
    super()
    this.client = client
  }

  /** @param {string} tag */
  async fetchJSON (tag) {
    const url = this.client.url.players(tag)
    const res = await this.client.fetch(url)

    return res.json()
  }

  /** @param {string} tag */
  async fetch (tag) {
    const normalizedTag = TagResolver.normalize(tag)
    if (this.has(normalizedTag)) return this.get(normalizedTag)

    const props = await this.fetchJSON(tag)
    const player = new Player(this.client, props, true)
    this.set(normalizedTag, player)
    return player
  }

  /**
   * Same as fetch() but does not throw NotFound errors
   * @param {string} tag
   * @returns {{ err: Error?, player: Player? }}
   */
  async tryFetch (tag) {
    try {
      const player = this.fetch(tag)
      return { err: null, player }
    } catch (err) {
      if (err instanceof Errors.NotFound)
        return { err, player: null }
      throw err
    }
  }
}
