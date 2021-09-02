class Brawlers {
  constructor (data) {
    this.data = data['items']
    this.count = this.data.length
    this.gadgetsCount = this.gadgetCount
    this.starpowersCount = this.starPowerCount
  }

  /** 
   * @returns {object} brawlers list 
   */

  getBrawlers () {
    return this.data
  }

  /**
   * @param {string} name Brawler Name
   * @description Gets the Brawler JSON via Brawler Name.
   * @returns {object} object
   */
  getBrawlerByName (name) {
    return this.data.filter(b => b.name == name.toUpperCase()).length > 0 ? this.data.filter(b => b.name == name.toUpperCase()) : TypeError("INVALID BRAWLER NAME")
  }

  /**
   * @param {string} Brawler ID
   * @description Gets the Brawler JSON via Brawler ID.
   * @returns {object} object
   */
  getBrawlerById (id) {
    return this.data.filter(b => b.id == id).length > 0 ? this.data.filter(b => b.id == id): TypeError("INVALID BRAWLER ID")
  }

  /**
   * @returns {Array} Returns a list of all of the Brawlers names.
   */
  getBrawlersNames () {
    return this.data.map(b => b.name)
  }

  /**
   * @param {string} name Brawler's Name
   * @returns {Array} Returns a list of all of the Brawler specific gadgets.
   */
  getBrawlerStarPowersByName (name) {
    let x = this.data.filter(b => b.name == name.toUpperCase()).map(b => b.starPowers)
    return x.length > 0 ? x : TypeError('INVALID BRAWLER NAME')
  }

  /**
   * @returns {Array} Returns a list of all of the StarPowers.
   */
  getBrawlersStarPowers () {
    return this.data.map(b => b.starPowers)
  }

  /**
   * @returns {Array} Returns a list of all of the Gadgets.
   */

  getBrawlersGadgets () {
    this.data.map(b => b.gadgets)
  }
  
  get gadgetCount () {
    return this.data.map(i => i.gadgets.length).reduce((a, b) => a + b)
  }

  get starPowerCount () {
    return this.data.map(i => i.starPowers.length).reduce((a, b) => a + b)
  }

}

module.exports = Brawlers
