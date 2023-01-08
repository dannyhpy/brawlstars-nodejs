import { Base } from './Base.js'
import { Icon } from './Icon.js'

export class SoloShowdown extends Base {
  constructor () {
    super('soloShowdown')

    this.icon = new Icon('solo-showdown')

    this.names.en = 'Solo Showdown'
    this.names.fr = 'Survivant (Solo)'
    this.descriptions.en = null // TODO:
    this.descriptions.fr = [
      "Entrez dans l'arène seul ou avec un partenaire.",
      "Le dernier survivant gagne !",
      "",
      "Récupérez des cubes de pouvoir pour augmenter votre santé et les dégats causés par vos attaques. Les nuages de poison se rapprochent, alors soyez toujours en mouvement !"
    ].join('\n')
  }
}
