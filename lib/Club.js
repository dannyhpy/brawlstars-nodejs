class Club {
  constructor(data) {
    this.id       = data.tag.slice(1)
    this.name     = data.name
    this.type     = data.type
    this.trophies = data.trophies
    this.requiredTrophies = data.requiredTrophies

    this.members  = []
    for (var member of data.members) {
      this.members.push(new Player(member))
    }
  }
}

module.exports = Club

const Player = require('./Player')
