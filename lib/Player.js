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
    this.seasonEnd = { trophies: seasonTrophies(data), starPoints: seasonStarPoints(data) }
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

function seasonStarPoints(player) {

    let starPoints = 0

    player.brawlers.forEach(brawler => {
        if (brawler.trophies >= 501 && brawler.trophies < 525) starPoints = starPoints + 20
        if (brawler.trophies >= 525 && brawler.trophies < 550) starPoints = starPoints + 50
        if (brawler.trophies >= 550 && brawler.trophies < 575) starPoints = starPoints + 70
        if (brawler.trophies >= 575 && brawler.trophies < 600) starPoints = starPoints + 80
        if (brawler.trophies >= 600 && brawler.trophies < 625) starPoints = starPoints + 90
        if (brawler.trophies >= 625 && brawler.trophies < 650) starPoints = starPoints + 100
        if (brawler.trophies >= 650 && brawler.trophies < 675) starPoints = starPoints + 110
        if (brawler.trophies >= 675 && brawler.trophies < 700) starPoints = starPoints + 120
        if (brawler.trophies >= 700 && brawler.trophies < 725) starPoints = starPoints + 130
        if (brawler.trophies >= 725 && brawler.trophies < 750) starPoints = starPoints + 140
        if (brawler.trophies >= 750 && brawler.trophies < 775) starPoints = starPoints + 150
        if (brawler.trophies >= 775 && brawler.trophies < 800) starPoints = starPoints + 160
        if (brawler.trophies >= 800 && brawler.trophies < 825) starPoints = starPoints + 170
        if (brawler.trophies >= 825 && brawler.trophies < 850) starPoints = starPoints + 180
        if (brawler.trophies >= 850 && brawler.trophies < 875) starPoints = starPoints + 190
        if (brawler.trophies >= 875 && brawler.trophies < 900) starPoints = starPoints + 200
        if (brawler.trophies >= 900 && brawler.trophies < 925) starPoints = starPoints + 210
        if (brawler.trophies >= 925 && brawler.trophies < 950) starPoints = starPoints + 220
        if (brawler.trophies >= 950 && brawler.trophies < 975) starPoints = starPoints + 230
        if (brawler.trophies >= 975 && brawler.trophies < 1000) starPoints = starPoints + 240
        if (brawler.trophies >= 1000 && brawler.trophies < 1050) starPoints = starPoints + 250
        if (brawler.trophies >= 1050 && brawler.trophies < 1100) starPoints = starPoints + 260
        if (brawler.trophies >= 1100 && brawler.trophies < 1150) starPoints = starPoints + 270
        if (brawler.trophies >= 1150 && brawler.trophies < 1200) starPoints = starPoints + 280
        if (brawler.trophies >= 1200 && brawler.trophies < 1250) starPoints = starPoints + 290
        if (brawler.trophies >= 1250 && brawler.trophies < 1300) starPoints = starPoints + 300
        if (brawler.trophies >= 1300 && brawler.trophies < 1350) starPoints = starPoints + 310
        if (brawler.trophies >= 1350 && brawler.trophies < 1400) starPoints = starPoints + 320
        if (brawler.trophies >= 1400 && brawler.trophies < 1450) starPoints = starPoints + 330
        if (brawler.trophies >= 1450 && brawler.trophies < 1500) starPoints = starPoints + 340
        if (brawler.trophies >= 1500) starPoints = starPoints + 350
    })

    return starPoints
}

function seasonTrophies(player) {

    let minesTrophies = 0

    player.brawlers.forEach(brawler => {
        if (brawler.trophies >= 501 && brawler.trophies < 525) minesTrophies = minesTrophies + (brawler.trophies - 500)
        if (brawler.trophies >= 525 && brawler.trophies < 550) minesTrophies = minesTrophies + (brawler.trophies - 524)
        if (brawler.trophies >= 550 && brawler.trophies < 575) minesTrophies = minesTrophies + (brawler.trophies - 549)
        if (brawler.trophies >= 575 && brawler.trophies < 600) minesTrophies = minesTrophies + (brawler.trophies - 574)
        if (brawler.trophies >= 600 && brawler.trophies < 625) minesTrophies = minesTrophies + (brawler.trophies - 599)
        if (brawler.trophies >= 625 && brawler.trophies < 650) minesTrophies = minesTrophies + (brawler.trophies - 624)
        if (brawler.trophies >= 650 && brawler.trophies < 675) minesTrophies = minesTrophies + (brawler.trophies - 649)
        if (brawler.trophies >= 675 && brawler.trophies < 700) minesTrophies = minesTrophies + (brawler.trophies - 674)
        if (brawler.trophies >= 700 && brawler.trophies < 725) minesTrophies = minesTrophies + (brawler.trophies - 699)
        if (brawler.trophies >= 725 && brawler.trophies < 750) minesTrophies = minesTrophies + (brawler.trophies - 724)
        if (brawler.trophies >= 750 && brawler.trophies < 775) minesTrophies = minesTrophies + (brawler.trophies - 749)
        if (brawler.trophies >= 775 && brawler.trophies < 800) minesTrophies = minesTrophies + (brawler.trophies - 774)
        if (brawler.trophies >= 800 && brawler.trophies < 825) minesTrophies = minesTrophies + (brawler.trophies - 799)
        if (brawler.trophies >= 825 && brawler.trophies < 850) minesTrophies = minesTrophies + (brawler.trophies - 824)
        if (brawler.trophies >= 850 && brawler.trophies < 875) minesTrophies = minesTrophies + (brawler.trophies - 849)
        if (brawler.trophies >= 875 && brawler.trophies < 900) minesTrophies = minesTrophies + (brawler.trophies - 874)
        if (brawler.trophies >= 900 && brawler.trophies < 925) minesTrophies = minesTrophies + (brawler.trophies - 885)
        if (brawler.trophies >= 925 && brawler.trophies < 950) minesTrophies = minesTrophies + (brawler.trophies - 900)
        if (brawler.trophies >= 950 && brawler.trophies < 975) minesTrophies = minesTrophies + (brawler.trophies - 920)
        if (brawler.trophies >= 975 && brawler.trophies < 1000) minesTrophies = minesTrophies + (brawler.trophies - 940)
        if (brawler.trophies >= 1000 && brawler.trophies < 1050) minesTrophies = minesTrophies + (brawler.trophies - 960)
        if (brawler.trophies >= 1050 && brawler.trophies < 1100) minesTrophies = minesTrophies + (brawler.trophies - 980)
        if (brawler.trophies >= 1100 && brawler.trophies < 1150) minesTrophies = minesTrophies + (brawler.trophies - 1000)
        if (brawler.trophies >= 1150 && brawler.trophies < 1200) minesTrophies = minesTrophies + (brawler.trophies - 1020)
        if (brawler.trophies >= 1200 && brawler.trophies < 1250) minesTrophies = minesTrophies + (brawler.trophies - 1040)
        if (brawler.trophies >= 1250 && brawler.trophies < 1300) minesTrophies = minesTrophies + (brawler.trophies - 1060)
        if (brawler.trophies >= 1300 && brawler.trophies < 1350) minesTrophies = minesTrophies + (brawler.trophies - 1080)
        if (brawler.trophies >= 1350 && brawler.trophies < 1400) minesTrophies = minesTrophies + (brawler.trophies - 1100)
        if (brawler.trophies >= 1400 && brawler.trophies < 1450) minesTrophies = minesTrophies + (brawler.trophies - 1120)
        if (brawler.trophies >= 1450 && brawler.trophies < 1500) minesTrophies = minesTrophies + (brawler.trophies - 1140)
        if (brawler.trophies >= 1500) minesTrophies = minesTrophies + (brawler.trophies - 1150)
    })

    return player.trophies - minesTrophies
}

module.exports = Player
