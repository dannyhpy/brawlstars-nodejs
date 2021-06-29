class Event {
  constructor (client, props) {
    this.client = client

    this.updateProps(props)
  }

  updateProps (props) {
    if (props.startTime != null) this.startsAt = new Date(props.startTime)
    if (props.endTime != null) this.endsAt = new Date(props.endTime)
  }
}

module.exports = Event