const constants = new(require("./Constants"))();

class Player {
  constructor(data) {
    this.tag = data.tag
    this.name = data.name
    this.icon = data.icon.id
    this.nameColor = data.nameColor ? data.nameColor : `0xffffffff`
    this.hexColor = !this.nameColor ? '#ffffff' : `#${this.nameColor.slice(4)}`
    this.trophies = data.trophies
    this.expLevel = data.expLevel
    this.expPoints = data.expPoints
    this.highestTrophies = data.highestTrophies
    this.highestPowerPlayPoints = data.highestPowerPlayPoints ? data.highestPowerPlayPoints : null
    this.trioVictories = data['3vs3Victories']
    this.duoVictories = data.duoVictories
    this.soloVictories = data.soloVictories
    this.totalVictories = parseInt(this.soloVictories + this.trioVictories + this.duoVictories)
    this.bestRoboRumbleTime = data.bestRoboRumbleTime
    this.bestTimeAsBigBrawler = data.bestTimeAsBigBrawler
    this.isQualifiedFromChampionshipChallenge = data.isQualifiedFromChampionshipChallenge
    this.brawlers = data.brawlers
    this.brawlerCount = data.brawlers.length
    this.club = data.club.tag ? data.club : null
    this.gadgetsCount = this.gadgetCount
    this.starpowersCount = this.starPowerCount
    this.power = data.power
    this.gears = data.gears ?? []
    this.gearCount = data.gears ? data.gears.length : 0
  }

  /**
   * @param {number} type 1: solo, 2: duo, 3: trio, 4: total
   * @returns {number} wins count
   */

  getWins(type) {
    let wins = [this.soloVictories, this.duoVictories, this.trioVictories, this.totalVictories]
    return type < 0 || type > 4 ? error("Invalid type") : wins[parseInt(type)-1]
  }

  /**
   * Returns Player color
   * (e.g. 'ffffff')
   * @returns {string}
   */
  getColor() {
    if (this.nameColor == null) return 'ffffff'
    return this.nameColor.slice(4)
  }


  /**
  * @param {string} name brawler name
  * @description get player's brawler by NAME
  * @returns false if the player doesn't have the brawler - object if the player have the brawler
  */

  getBrawlerByName(name) {
    let brawlerByName = this.brawlers.filter(x => x.name == name.toUpperCase())
    return brawlerByName.length > 0 ? brawlerByName : false
  }

  /**
  * @param {string} id brawler ID
  * @description get player's brawler by ID
  * @returns false if the player doesn't have the brawler - object if the player have the brawler
  */

  getBrawlerById(id) {
    let brawlerById = this.brawlers.filter(x => x.id == id)
    return brawlerById ? brawlerById : false
  }

  /**
  * @returns list of player's starpowers names
  */

  getStarPowersNames() {
    let x = []
    for (let i = 0; i < this.brawlers.length; i++) {
      if (this.brawlers[i].starPowers.length > 0) x.push(this.brawlers[i].starPowers.map(b => b.name))
    }

    return x 
  }

   /**
  * @returns list of player's starpowers names
  */

  getGadgetsNames() {
    let x = []
    for (let i = 0; i < this.brawlers.length; i++) {
      if (this.brawlers[i].gadgets.length > 0) x.push(this.brawlers[i].gadgets.map(b => b.name))
    }

    return x;
  }  

  get gadgetCount () {
    return this.brawlers.map(i => i.gadgets.length).reduce((a, b) => a + b)
  }

  get starPowerCount () {
    return this.brawlers.map(i => i.starPowers.length).reduce((a, b) => a + b)
  }

  /**
  * @param {int|string} type robotRumble or bigBrawler
  * @description convert robot rumble or big brawler timestamp to text
  * @deprecated use bestTime() method instead
  * @returns {string}
  */

  bestTimeToTxt(type) {
    let timestamp = type == "robotRumble" || type == constants.GAME_MODE_ROBOT_RUMBLE ? this.bestRoboRumbleTime : this.bestTimeAsBigBrawler
    return convertTime(timestamp)
  }

  /**
   * @param {number} mode 1 : robot rumble, 2 : big brawler
   * @returns {string} exemple: 7m45s
   */

  bestTime(mode) {
    let timestamp = mode == constants.GAME_MODE_ROBOT_RUMBLE ? this.bestRoboRumbleTime : this.bestTimeAsBigBrawler
    return convertTime(timestamp)
  }

  /** 
   * @returns {object} brawlers list 
   */

  getBrawlers () {
    this.brawlers
  }

  /**
   * @description sort player's brawlers by trophies
   * @returns {object} Object
   */

  sortBrawlersByTrophies() {
      return this.brawlers.sort((a, b) => a.trophies - b.trophies)
  }

  /**
  * @description sort player's brawlers by Highest trophies
  * @returns {object} Object
  */

  sortBrawlersByHighestTrophies() {
      return this.brawlers.sort((a, b) => a.highestTrophies - b.highestTrophies)
  }

  /**
   * @description sort player's brawlers by power level
   * @returns {object} object
   */

  sortBrawlersByPower() {
    return this.brawlers.sort((a, b) => a.power - b.power)
  }

  /**
   * @description sort player's brawlers by rank
   * @returns {object} object
   */

  sortBrawlersByRank() {
    return this.brawlers.sort((a, b) => a.rank - b.rank)
  }
}

function error(txt) {
    return TypeError(txt)
}

function convertTime(timestamp) {
    sc = timestamp%60
    return `${((timestamp-sc)/60)}m${sc}s`
}

module.exports = Player
