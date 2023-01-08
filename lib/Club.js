import { ClubIcon } from './ClubIcon.js'
import { Player } from './Player.js'

export class Club {
  constructor (client, props, complete) {
    /** @type {import('./Client')} */
    this.client = client

    this.partial = !complete
    this.#updateProps(props)
  }

  async fetch () {
    const props = this.client.clubs.fetchJSON(this.tag)
    this.#updateProps(props)
    this.partial = false
  }

  #updateProps (props) {
    if (props.description != null) this.description = props.description
    if (props.badgeId != null) this.icon = new ClubIcon(props.badgeId)
    if (props.name != null) this.name = props.name
    if (props.tag != null) this.tag = props.tag.toUpperCase()
    this.trophies = {
      current: props.trophies != null ? props.trophies : undefined,
      required: props.requiredTrophies != null ? props.requiredTrophies : undefined
    }

    if (props.members != null) {
      this.members = []
      for (const memberProps of props.members) {
        this.members.push(new Player(this.client, memberProps))
      }
    }
  }
}
