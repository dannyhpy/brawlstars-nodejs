const PlayerIcon = require('./PlayerIcon')

class Player {
  constructor (props) {
    this.tag = props.tag.toUpperCase()
    this.name = props.name
    this.icon = new PlayerIcon(props.icon.id)
  }
}

module.exports = Player
