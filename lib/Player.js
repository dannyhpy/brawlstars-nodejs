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
    this.bestRoboRumbleLevel = specialLevels(data.bestRoboRumbleTime)
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

function specialLevels(theNumber) {
 
  if (theNumber === 0 || theNumber === null || theNumber === undefined) return { level: null, id: theNumber, insane: false, levelsLeft: null }
  if (theNumber === 1) return { level: "Normal", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 2) return { level: "Hard", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 3) return { level: "Expert", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 4) return { level: "Master", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 5) return { level: "Insane", id: theNumber, insane: 1, levelsLeft: 21-theNumber }
  if (theNumber === 6) return { level: "Insane II", id: theNumber, insane: 2, levelsLeft: 21-theNumber }
  if (theNumber === 7) return { level: "Insane III", id: theNumber, insane: 3, levelsLeft: 21-theNumber }
  if (theNumber === 8) return { level: "Insane IV", id: theNumber, insane: 4, levelsLeft: 21-theNumber }
  if (theNumber === 9) return { level: "Insane V", id: theNumber, insane: 5, levelsLeft: 21-theNumber }
  if (theNumber === 10) return { level: "Insane VI", id: theNumber, insane: 6, levelsLeft: 21-theNumber }
  if (theNumber === 11) return { level: "Insane VII", id: theNumber, insane: 7, levelsLeft: 21-theNumber }
  if (theNumber === 12) return { level: "Insane VIII", id: theNumber, insane: 8, levelsLeft: 21-theNumber }
  if (theNumber === 13) return { level: "Insane IX", id: theNumber, insane: 9, levelsLeft: 21-theNumber }
  if (theNumber === 14) return { level: "Insane X", id: theNumber, insane: 10, levelsLeft: 21-theNumber }
  if (theNumber === 15) return { level: "Insane XI", id: theNumber, insane: 11, levelsLeft: 21-theNumber }
  if (theNumber === 16) return { level: "Insane XII", id: theNumber, insane: 12, levelsLeft: 21-theNumber }
  if (theNumber === 17) return { level: "Insane XIII", id: theNumber, insane: 13, levelsLeft: 21-theNumber }
  if (theNumber === 18) return { level: "Insane XIV", id: theNumber, insane: 14, levelsLeft: 21-theNumber }
  if (theNumber === 19) return { level: "Insane XV", id: theNumber, insane: 15, levelsLeft: 21-theNumber }
  if (theNumber === 20) return { level: "Insane XVI", id: theNumber, insane: 16, levelsLeft: 21-theNumber }
  
  return { level: null, id: theNumber, insane: false, levelsLeft: null }
}

module.exports = Player
