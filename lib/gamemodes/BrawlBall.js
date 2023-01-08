import { Base } from './Base.js'
import { Icon } from './Icon.js'

export class BrawlBall extends Base {
  constructor () {
    super('brawlBall')

    this.icon = new Icon('brawl-ball')

    this.names.en = 'BrawlBall'
    this.names.fr = 'BrawlBall'
    this.descriptions.en = null // TODO:
    this.descriptions.fr = [
      "Utilisez le ballon pour marquer un but contre l'équipe adverse.",
      "Le match se termine dès qu'une équipe a marqué deux buts,",
      "ou une fois le temps écoulé."
    ].join(' ')
  }
}
