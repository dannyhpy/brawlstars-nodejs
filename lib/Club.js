const ClubIcon = require('./ClubIcon')

class Club {
  constructor (client, props) {
    this.client = client

    this.tag = props.tag.toUpperCase()
    this.name = props.name
    this.icon = new ClubIcon(props.badgeId)
    this.description = props.description
  }
}

module.exports = Club