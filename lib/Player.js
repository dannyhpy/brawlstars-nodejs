class Player {
  constructor(data) {
    this.player = {
      tag: data.tag,
      name: data.name,
      nameColor: data.nameColor,
      trophies: data.trophies,
      expLevel: data.expLevel,
      expPoints: data.expPoints,
      highestTrophies: data.highestTrophies,
      powerPlayPoints: data.powerPlayPoints,
      trioVictories: data["3vs3Victories"],
      duoVictories: data.duoVictories,
      soloVictories: data.soloVictories,
      bestRoboRumbleTime: data.bestRoboRumbleTime,
      bestTimeAsBigBrawler: data.bestTimeAsBigBrawler,
      brawlers: data.brawlers
    }

    if (data.club.tag) {
      this.club = new Club(data.club)
    }
  }

  getWins(type) {
    return !this.player[type+"Victories"] ? error("Invalid type, try: trio, duo, solo ") : this.player[type+"Victories"]
  }

  getColor() {
    return hexToString(this.player.nameColor)
  }

  getBrawlerByName(name) {
    let brawlerByName = this.player.brawlers.filter(x => x.name == name)
    return brawlerByName ? brawlerByName : error("Invalid brawler name")
  }

  getBrawlerById(id) {
    let brawlerById = this.player.brawlers.filter(x => x.id == id)
    return brawlerById ? brawlerById : error("Invalid brawler ID")
  }
}

function error(txt) {
    throw txt
}

function hexToString(hex) {
  var str = '';
  for (var i = 0; i < hex.length; i += 2) {
    var v = parseInt(hex.substr(i, 2), 16);
    if (v) str += String.fromCharCode(v);
  }
  return str;
}

module.exports = Player

const Club = require('./Club')
