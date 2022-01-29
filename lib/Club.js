class Club {
  constructor(data) {
    this.data             = data                      //Complete Response Data from the API.
    this.tag              = data.tag                  //Club Tag. Example: #LQL.
    this.name             = data.name                 //Club Name. Example: Tribe Gaming.
    this.badgeId          = data.badgeId              //Club BadgeId. Example: 8000023.
    this.type             = data.type                 //Club Type. Example: Invite Only.
    this.description      = data.description          //Club Descrption. Example: Hi, this is a club description.
    this.trophies         = data.trophies             //Club Trophies. Example: 3346331.
    this.requiredTrophies = data.requiredTrophies     //Club Required Trophies. Example: 27000.
    this.members          = data.members              //Returns the ARRAY data for clubs.
    this.memberCount      = data.members.length       //Club Member Count. Example: 98.
    this.isFull           = data.memberCount == 30    //Returns if the club is full or not. Example: false.
  }

  /**
  * @description Retrives the Member's Rank within a club, located as a STRING.
  * @param {string} tag Player TAG.
  * @returns {number} Player Club Rank.
  * @example data.getMemberRank('#LQL')
  */

   getMemberRank(tag) {
    let sorted = this.members.sort((a, b) => b.trophies - a.trophies).map(x => x.tag).indexOf(tag)+1
    return sorted >= 1 ? parseInt(sorted) : TypeError("This player tag is either invalid, or the player is not in the club.")
  }

  /**
  * @description Retrives the Member's Role within a club, located as a STRING.
  * @param {string} tag Player TAG.
  * @returns {string} Player Club Role.
  * @example data.getMemberRole('#LQL')
  */

  getMemberRole(tag) {
    return !this.members.filter(m => m.tag == tag) ? TypeError("This player tag is either invalid, or the player is not in the club.") : this.members.filter(m => m.tag == tag).map(m => m.role).join("\n")
  }
  
  /**
  * @param {string} tag Player TAG.
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
    return !this.members ? TypeError("Invalid Club Tag.") : this.members.sort((a, b) => b.trophies - a.trophies)
  }
}

module.exports = Club;
