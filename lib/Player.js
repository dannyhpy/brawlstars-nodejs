const PlayerIcon = require('./PlayerIcon')

class Player {
  constructor (client, props) {
    this.client = client
    
    this.updateProps(props)
  }

  updateProps (props) {
    if (props.tag != null) this.tag = props.tag.toUpperCase()
    if (props.name != null) this.name = props.name
    if (props.icon != null) this.icon = new PlayerIcon(props.icon.id)
    if (props.nameColor != null) this.color = parseInt(props.nameColor, 16) // TODO:
  }

  get colour () {
    return this.color
  }
}

module.exports = Player
