import { Club } from './Club.js'
import { PlayerGear } from './PlayerGear.js'
import { PlayerIcon } from './PlayerIcon.js'

export class Player {
  constructor (client, props, complete) {
    /** @type {import('./Client')} */
    this.client = client

    this.partial = !complete
    this.#updateProps(props)
  }

  async fetch () {
    const props = await this.client.players.fetchJSON(this.tag)
    this.#updateProps(props)
    this.partial = false
  }

  #updateProps (props) {
    if (props.nameColor != null) {
      this.color = parseInt(props.nameColor, 16)
    } else {
      this.color = 0xFFFFFF
    }

    if (props.club != null) this.club = new Club(this.client, props.club)

    this.experience = {
      level: props.expLevel != null ? props.expLevel : undefined,
      points: props.expPoints != null ? props.expPoints : undefined
    }
    
    if (props.gears != null) this.gears = props.gears
    if (props.icon != null) this.icon = new PlayerIcon(props.icon.id)
    if (props.name != null) this.name = props.name
    if (props.tag != null) this.tag = props.tag.toUpperCase()

    this.trophies = {
      current: props.trophies != null ? props.trophies : undefined,
      highest: props.highestTrophies != null ? props.highestTrophies : undefined
    }

    this.victories = {
      solo: props.soloVictories != null ? props.soloVictories : undefined,
      duo: props.duoVictories != null ? props.duoVictories : undefined,
      trio: props['3vs3Victories'] != null ? props['3vs3Victories'] : undefined,

      get total () {
        return this.solo + this.duo + this.trio
      }
    }
  }
}
