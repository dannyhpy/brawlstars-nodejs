import { Base } from './Base.js'
import { Icon } from './Icon.js'

export class Heist extends Base {
  constructor () {
    super('heist')

    this.icon = new Icon('heist')

    this.names.en = 'Heist'
    this.names.fr = 'Braquage'
    this.descriptions.en = null // TODO:
    this.descriptions.fr = [
      "Protégez votre coffre-fort tout en essayant de forcer celui de vos adversaires. La première équipe à forcer le coffre de l'autre l'emporte !",
      "",
      "Si le temps est écoulé sans qu'une équipe n'ait pris le dessus, celle ayant infligé le plus de dégats au coffre ennemi gagne."
    ].join('\n')
  }
}
