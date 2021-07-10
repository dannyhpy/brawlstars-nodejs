class DeveloperAccount {
  constructor (client, props) {
    this.client = client

    /* this.keys = new KeyManager(this.client) */

    this.updateProps(props)
  }

  updateProps (props) {
    this.ip = props.developer.prevLoginIp // TODO:
    this.id = props.developer.id
    this.name = props.developer.name
    this.email = props.developer.email

    /** @type {string} Temporary API Token */
    this.token = props.temporaryAPIToken
  }
}

module.exports = DeveloperAccount
