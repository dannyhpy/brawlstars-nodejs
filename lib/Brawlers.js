class Brawlers {
  constructor (data) {
    this.data = data.items
    this.brawlerCount = this.data.length
    this.gadgetsCount = this.gadgetCount
    this.starPowersCount = this.starPowerCount
  }

  /** 
   * @description Retrives the entire BRAWLERS LIST, located as a OBJECT.
   * @returns {object} BRAWLERS LIST.
   * @example data.getBrawlers()
   */
  getBrawlers () {
    return this.data
  }

  /**
   * @description Retrives BRAWLERS NAME LIST, located as a ARRAY.
   * @returns {Array} BRAWLERS NAME LIST.
   * @example data.getBrawlersNames()
   */
  getBrawlersNames () {
    return this.data.map(b => b.name)
  }

  /**
   * @description Retrives BRAWLERS ID LIST, located as a ARRAY.
   * @returns {Array} BRAWLERS ID LIST.
   * @example data.getBrawlersIds()
   */
   getBrawlersIds () {
    return this.data.map(b => b.id)
  }

  /**
   * @description Retrives ALL GADGETS LIST, located as a ARRAY.
   * @returns {Array} GADGETS LIST.
   * @example data.getBrawlersGadgets()
   */
  getBrawlersGadgets () {
    return this.data.map(b => b.gadgets)
  }

  /**
   * @description Retrives ALL GADGETS NAME LIST, located as a ARRAY.
   * @returns {Array} GADGETS NAME LIST.
   * @example data.getBrawlersGadgetsNames()
   */
   getBrawlersGadgetsNames () {
    let GADGET_LIST_NAME = [];
    this.data.map(b => b.gadgets).forEach(g => {
      if(g.length == 2){
        GADGET_LIST_NAME.push(g[0].name)
        GADGET_LIST_NAME.push(g[1].name)
      } else {
        GADGET_LIST_NAME.push(g[0].name)
      }
    })
    return GADGET_LIST_NAME
  }

  /**
   * @description Retrives ALL GADGETS ID LIST, located as a ARRAY.
   * @returns {Array} GADGETS ID LIST.
   * @example data.getBrawlersGadgetsIds()
   */
   getBrawlersGadgetsIds () {
    let GADGET_LIST_ID = [];
    this.data.map(b => b.gadgets).forEach(g => {
      if(g.length == 2){
        GADGET_LIST_ID.push(g[0].id)
        GADGET_LIST_ID.push(g[1].id)
      } else {
        GADGET_LIST_ID.push(g[0].id)
      }
    })
    return GADGET_LIST_ID
  }

  /**
   * @description Retrives ALL STAR POWERS LIST, located as a ARRAY.
   * @returns {Array} STAR POWERS LIST.
   * @example data.getBrawlersStarPowers()
   */
   getBrawlersStarPowers () {
    return this.data.map(b => b.starPowers)
  }

  /**
   * @description Retrives ALL STAR POWERS NAME LIST, located as a ARRAY.
   * @returns {Array} STAR POWERS NAME LIST.
   * @example data.getBrawlersGadgets()
   */
   getBrawlersStarPowersNames () {
    let STARPOWERS_LIST_NAME = [];
    this.data.map(s => s.starPowers).forEach(s => {
      if(s.length == 2){
        STARPOWERS_LIST_NAME.push(s[0].name)
        STARPOWERS_LIST_NAME.push(s[1].name)
      } else {
        STARPOWERS_LIST_NAME.push(s[0].name)
      }
    })
    return STARPOWERS_LIST_NAME
  }

  /**
   * @description Retrives ALL STAR POWERS ID LIST, located as a ARRAY.
   * @returns {Array} GADGETS ID LIST.
   * @example data.getBrawlersStarPowersIds()
   */
   getBrawlersStarPowersIds () {
    let STARPOWERS_LIST_ID = [];
    this.data.map(s => s.starPowers).forEach(s => {
      if(s.length == 2){
        STARPOWERS_LIST_ID.push(s[0].id)
        STARPOWERS_LIST_ID.push(s[1].id)
      } else {
        STARPOWERS_LIST_ID.push(s[0].id)
      }
    })
    return STARPOWERS_LIST_ID
  }

  /**
   * @param {string} name BRAWLER NAME.
   * @description Retrives SPECIFIC BRAWLER LIST via BRAWLER NAME, located as a OBJECT.
   * @returns {object} BRAWLER LIST.
   * @example data.getBrawlerByName('SHELLY')
   */
  getBrawlerByName (name) {
    return this.data.filter(b => b.name == name.toUpperCase()).length > 0 ? this.data.filter(b => b.name == name.toUpperCase()) : TypeError("Invalid BRAWLER NAME.")
  }

  /**
   * @param {string} id Brawler ID.
   * @description Retrives SPECIFIC BRAWLER LIST via BRAWLER ID, located as a OBJECT.
   * @returns {object} BRAWLER LIST.
   * @example data.getBrawlerById('16000000')
   */
  getBrawlerById (id) {
    return this.data.filter(b => b.id == id).length > 0 ? this.data.filter(b => b.id == id): TypeError("Invalid BRAWLER ID.")
  }

  /**
   * @param {string} name BRAWLER NAME.
   * @description Retrives STAR POWER LIST for a SPECIFIC BRAWLER via BRAWLER NAME, located as a ARRAY.
   * @returns {Array} BRAWLER STAR POWER LIST.
   * @example data.getBrawlerStarPowersByName('SHELLY')
   */
  getBrawlerStarPowersByName (name) {
    let x = this.data.filter(b => b.name == name.toUpperCase()).map(b => b.starPowers)
    return x.length > 0 ? x : TypeError('Invalid BRAWLER NAME.')
  }

  /**
   * @param {string} id BRAWLER ID.
   * @description Retrives STAR POWER LIST for a SPECIFIC BRAWLER via BRAWLER ID, located as a ARRAY.
   * @returns {Array} BRAWLER STAR POWER LIST.
   * @example data.getBrawlerStarPowersById('16000000')
   */
   getBrawlerStarPowersById (id) {
    let x = this.data.filter(b => b.id == id.toUpperCase()).map(b => b.starPowers)
    return x.length > 0 ? x : TypeError('Invalid BRAWLER ID.')
  }

  /**
   * @param {string} name BRAWLER NAME.
   * @description Retrives GADGET LIST for a SPECIFIC BRAWLER via BRAWLER NAME, located as a ARRAY.
   * @returns {Array} BRAWLER GADGET LIST.
   * @example data.getBrawlerGadgetsByName('SHELLY')
   */
   getBrawlerGadgetsByName (name) {
    let x = this.data.filter(b => b.name == name.toUpperCase()).map(b => b.gadgets)
    return x.length > 0 ? x : TypeError('Invalid BRAWLER NAME.')
  }

  /**
   * @param {string} id BRAWLER ID.
   * @description Retrives GADGET LIST for a SPECIFIC BRAWLER via BRAWLER ID, located as a ARRAY.
   * @returns {Array} BRAWLER GADGET LIST.
   * @example data.getBrawlerGadgetsById('16000000')
   */
   getBrawlerGadgetsById (id) {
    let x = this.data.filter(b => b.id == id.toUpperCase()).map(b => b.gadgets)
    return x.length > 0 ? x : TypeError('Invalid BRAWLER ID.')
  }

  get gadgetCount () {
    return this.data.map(i => i.gadgets.length).reduce((a, b) => a + b)
  }

  get starPowerCount () {
    return this.data.map(i => i.starPowers.length).reduce((a, b) => a + b)
  }

}

module.exports = Brawlers
