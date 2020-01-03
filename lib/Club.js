class Club {
  constructor(data) {
    this.tag              = data.tag
    this.name             = data.name
    this.type             = data.type
    this.description      = data.description
    this.trophies         = data.trophies
    this.requiredTrophies = data.requiredTrophies
    this.members          = data.members
    this.memberCount      = this.members.length
    this.isFull           = this.memberCount == 100
  }

  /**
  * @param {string} tag Player TAG
  * @returns {number} player's club rank
  */

  getMemberRank(tag) {
    let sorted = this.members.sort((a, b) => b.trophies - a.trophies).map(x => x.tag).indexOf(tag)+1
    return sorted >= 1 ? parseInt(sorted) : TypeError("This member isn't in a club")
  }

  /**
  * @param {string} tag Player TAG
  * @returns {string} player's club role 
  */

  getMemberRole(tag) {
    return !this.members.filter(m => m.tag == tag) ? TypeError("This member isn't in a club") : this.members.filter(m => m.tag == tag).map(m => m.role).join("\n")
  }

  /**
  * @param {string} tag Player TAG
  * @description check if the player can join the club
  * @returns {boolean}
  */

  playerCanJoin(tag) {
    let x = this.members.map(x => x.tag)
    if (x.includes(tag)) return true
    return this.members.filter(m => m.tag == tag).map(x => x.trophies).join("") >= this.requiredTrophies
  }

  /**
  * @description sort club members by trophies
  * @returns {object} object
  */

  sortMembersByTrophies() {
    return !this.members ? TypeError("Invalid Club") : this.members.sort((a, b) => b.trophies - a.trophies)
  }
}

module.exports = Club
