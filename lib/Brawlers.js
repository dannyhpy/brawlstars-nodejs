class Brawlers {
  constructor (data) {
    this.data = data['items']
    this.count = this.data.length
  }

  /**
   * @param {string} name Brawler Name
   * @description get brawler by name
   * @returns {object} object
   */
  getBrawlerByName (name) {
    return this.data.filter(b => b.name == name.toUpperCase()).length > 0 ? this.data.filter(b => b.name == name.toUpperCase()) : TypeError("Invalid Brawler Name")
  }

  /**
   * @param {string} id
   * @description get brawler by ID
   * @returns {object} object
   */
  getBrawlerById (id) {
    return this.data.filter(b => b.id == id).length > 0 ? this.data.filter(b => b.id == id): TypeError("Invalid brawler ID")
  }

  /**
   * @returns {Array} list of brawler names
   */
  getBrawlersNames () {
    return this.data.map(b => b.name)
  }

  /**
   * @param {string} name brawler name
   * @returns {Array} list of brawler starpowers
   */
  getBrawlerStarPowersByName (name) {
    let x = this.data.filter(b => b.name == name.toUpperCase()).map(b => b.starPowers)
    return x.length > 0 ? x : TypeError('Invalid brawler name')
  }

  /**
   * @returns {Array} list of starpowers
   */
  getBrawlersStarPowers () {
    return this.data.map(b => b.starPowers)
  }
}

module.exports = Brawlers
