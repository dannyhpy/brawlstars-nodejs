import fetch from 'node-fetch'

import { DeveloperAccount } from './DeveloperAccount.js'
import { PlayerManager } from './PlayerManager.js'
import { ClubManager } from './ClubManager.js'
import { BrawlerManager } from './BrawlerManager.js'
import { EventManager } from './EventManager.js'

// import { CacheManager } from './CacheManager.js'
import { URLConstants } from './URLConstants.js'
import * as Rejections from './Rejections.js'

export class Client {
  constructor (opts = {}) {
    if (typeof(opts) === 'string') opts = { token: opts }

    this.token = opts.token
    this.url = URLConstants
    // this.cache = new CacheManager()

    this.dev = null

    this.players = new PlayerManager(this)
    this.clubs = new ClubManager(this)
    this.brawlers = new BrawlerManager(this)
    this.events = new EventManager(this)
  }

  /**
   * Login using an email and a password.
   * @param {string} email
   * @param {string} password
   */
  async login (email, password) {
    const res = await fetch(this.url.dev.login, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email, password
      })
    })
    const body = await res.json()
    this.dev = new DeveloperAccount(this, body)
  }

  /** @param {string} token */
  setToken (token) {
    if (typeof(token) !== 'string') throw new TypeError(
      '`token` needs to be a string'
    )
    this.token = token
  }

  /**
   * Returns headers for API and authentication
   */
  writeHeaders () {
    if (this.token == null && this.dev == null) throw new Error([
      'No BrawlStars token has been submitted to the Client constructor.',
      'If you need a token, please visit ' + URLConstants.dev.portal + '.',
      '  and pass it to the Client constructor.'
    ].join('\n'))

    const token = this.token || this.dev.temporaryToken

    return {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  }

  /**
   * @param {string} url
   */
  async fetch (url) {
    const res = await fetch(url, {
      headers: this.writeHeaders()
    })
    if (res.status === 401) throw new Rejections.Unauthorized()
    if (res.status === 404) throw new Rejections.NotFound()
    if (!res.ok) throw new Rejections.Other()

    return res
  }
}
