//const BrawlerIcon = require('./BrawlerIcon')

class Brawler {
  constructor (client, props) {
    this.client = client

    this.updateProps(props)
  }

  updateProps (props) {
    if (props.id != null) {
      this.id = props.id
      this.icon = null // TOOD:
    }
    if (props.name != null) this.name = props.name
  }
}

module.exports = Brawler
