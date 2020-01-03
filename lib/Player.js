class Player {
  constructor(data) {
    this.data = data
    this.tag = data.tag
    this.name = data.name
    this.nameColor = data.nameColor
    this.trophies = data.trophies
    this.expLevel = data.level
    this.expPoints = data.expPoints
    this.highestTrophies = data.highestTrophies
    this.powerPlayPoints = data.powerPlayPoints
    this.trioVictories = data['3vs3Victories']
    this.duoVictories = data.duoVictories
    this.soloVictories = data.soloVictories
    this.totalWins = parseInt(this.soloVictories + this.trioVictories + this.duoVictories)
    this.bestRoboRumbleTime = data.bestRoboRumbleTime
    this.bestTimeAsBigBrawler = data.bestTimeAsBigBrawler
    this.isQualifiedFromChampionshipChallenge = data.isQualifiedFromChampionshipChallenge
    this.brawlers = data.brawlers
    this.club = data.club
  }

  /**
  * 
  * @param {string} type trio, duo or solo
  */

  getWins(type) {
    return !this[type+"Victories"] ? error("Invalid type, try: trio, duo, solo") : this[type+"Victories"]
  }

  getColor() {
    return this.nameColor.replace("0xff", "")
  }

  /**
  * @param {string} name brawler name
  */

  getBrawlerByName(name) {
    let brawlerByName = this.brawlers.filter(x => x.name == name)
    return brawlerByName.length > 0 ? brawlerByName : error("Invalid brawler name")
  }

  /**
  * @param {string} id brawler ID
  */

  getBrawlerById(id) {
    let brawlerById = this.brawlers.filter(x => x.id == id)
    return brawlerById ? brawlerById : error("Invalid brawler ID")
  }

  /**
  * @param {string} name robotRumble or bigBrawler
  */

  bestTimeToTxt(name) {
    let timestamp = name == "robotRumble" ? this.bestRoboRumbleTime : this.bestTimeAsBigBrawler
    return convertTime(timestamp)
  }

  sortBrawlersByTrophies() {
      return this.brawlers.sort((a, b) => a.trophies - b.trophies)
  }

  sortBrawlersByHighestTrophies() {
      return this.brawlers.sort((a, b) => a.highestTrophies - b.highestTrophies)
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
