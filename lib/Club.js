class Club {
  constructor(data) {
    this.tag              = data.tag
    this.name             = data.name
    this.type             = data.type
    this.badgeId          = data.badgeId
    this.description      = data.description || null
    this.trophies         = data.trophies
    this.requiredTrophies = data.requiredTrophies
    this.members          = data.members
    this.memberCount      = this.members.length
    this.isFull           = this.memberCount == 100
  }

  /**
  * @param {string} tag Player TAG
  * @returns {number} Gets the player's club rank via player tag.
  */

  getMemberRank(tag) {
    let sorted = this.members.sort((a, b) => b.trophies - a.trophies).map(x => x.tag).indexOf(tag)+1
    return sorted >= 1 ? parseInt(sorted) : TypeError("THIS MEMBER ISN'T IN THIS CLUB/ISN'T IN A CLUB")
  }

  /**
  * @param {string} tag Player TAG
  * @returns {string} Gets the player's club role via player tag. 
  */

  getMemberRole(tag) {
    return !this.members.filter(m => m.tag == tag) ? TypeError("THIS MEMBER ISN'T IN THIS CLUB/ISN'T IN A CLUB") : this.members.filter(m => m.tag == tag).map(m => m.role).join("\n")
  }

  /**
  * @param {string} tag Player TAG
  * @description Check if the player can join the club via player tag.
  * @returns {boolean}
  */

  playerCanJoin(tag) {
    let x = this.members.map(x => x.tag)
    if (x.includes(tag)) return true
    return this.members.filter(m => m.tag == tag).map(x => x.trophies).join("") >= this.requiredTrophies
  }

  /**
  * @description Sorts club members via trophies count.
  * @returns {object} object
  */

  sortMembersByTrophies() {
    return !this.members ? TypeError("INVALID CLUB") : this.members.sort((a, b) => b.trophies - a.trophies)
  }
}

module.exports = Club
