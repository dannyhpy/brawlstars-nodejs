const ClubIcon = require('./ClubIcon')

class Club {
  constructor (client, props) {
    this.client = client

    this.updateProps(props)
  }

  updateProps (props) {
    if (props.tag != null) this.tag = props.tag.toUpperCase()
    if (props.name != null) this.name = props.name
    if (props.badgeId != null) this.icon = new ClubIcon(props.badgeId)
    if (props.description != null) this.description = props.description
  }
}

module.exports = Club