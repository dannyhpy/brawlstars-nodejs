import { BrawlerIcon } from './BrawlerIcon.js'

export class Brawler {
  constructor (client, props, complete) {
    /** @type {import('./Client')} */
    this.client = client

    this.partial = !complete
    this.#updateProps(props)
  }

  async fetch () {
    const props = this.client.brawlers.fetchJSON(this.id)
    this.#updateProps(props)
    this.partial = false
  }

  #updateProps (props) {
    if (props.id != null) {
      this.id = props.id
      this.icon = new BrawlerIcon(this.id)
    }
    if (props.name != null) this.name = props.name
  }
}
