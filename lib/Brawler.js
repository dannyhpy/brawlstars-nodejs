class Brawler {
  constructor(http, data) {
    this.http       = http
    this.id         = data.id
    this.name       = data.name[0] + data.name.slice(1).toLowerCase()
    this.starPowers = data.starPowers
  }
}

module.exports = Brawler
