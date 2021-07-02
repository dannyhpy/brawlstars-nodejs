const GameModes = require('./gamemodes')

class Event {
  constructor (client, props) {
    this.client = client

    this.updateProps(props)
  }

  updateProps (props) {
    if (props.startTime != null) this.startsAt = new Date(props.startTime)
    if (props.endTime != null) this.endsAt = new Date(props.endTime)
    if (props.event != null) {
      if (props.event.mode != null) {
        this.gamemode = new GameModes.get(props.event.mode)
      }
    }
  }
}

module.exports = Event
