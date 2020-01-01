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
  
    this.memberCount = this.members.length
    this.isFull      = this.memberCount == 100
  }
}

module.exports = Club

const Player = require('./Player')
