// TODO(dannyhpy):

const URLAssetsConstants = {
  base:'https://raw.githubusercontent.com/Statscell/brawl-assets/720b691d7ed3984b6724e83e4a541b4d355adbd5',

  playerIcons (id) {
    return this.base + `/user-badges/${id}.png`
  },

  clubIcons (id) {
    return null // TODO(dannyhpy):
  },

  brawlerIcons (id) {
    return this.base + `/brawlers/icons/${id}.png`
  },

  gameModesIcons (mode) {
    return this.base + `/game-modes/${mode}.png`
  }
}

module.exports = URLAssetsConstants
