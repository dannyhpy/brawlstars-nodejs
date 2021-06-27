const PlayerIcon = require('./PlayerIcon')

class Player {
  constructor (client, props) {
    this.client = client
    
    this.tag = props.tag.toUpperCase()
    this.name = props.name
    this.icon = new PlayerIcon(props.icon.id)
    this.color = parseInt(props.nameColor, 16) // TODO:
  }

  get colour () {
    return this.color
  }
}

module.exports = Player
