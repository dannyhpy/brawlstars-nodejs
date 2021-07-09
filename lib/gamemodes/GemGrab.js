const Base = require('./Base')
const Icon = require('./Icon')

class GemGrab extends Base {
  constructor () {
    super('gemGrab')

    this.icon = new Icon('gem-grab')

    this.names.en = 'Gem Grab'
    this.names.fr = 'Razzia de gemmes'
    this.descriptions.en = null // TODO(dannyhpy):
    this.descriptions.fr = [
      "Récupérez les gemmes jaillissant de la mine au milieu de la carte,",
      "ou celles perdues par les ennemis tombés au combat ! Protégez dix gemmes",
      "jusqu'à la fin du compte à rebours pour gagner."
    ].join(' ')
  }
}

module.exports = GemGrab
