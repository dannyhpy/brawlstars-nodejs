// TODO:

const URLAssetsConstants = {
  base:'https://raw.githubusercontent.com/Statscell/brawl-assets/720b691d7ed3984b6724e83e4a541b4d355adbd5',

  playerIcons (id) {
    return this.base + `/user-badges/${id}.png`
  },

  clubIcons (id) {
    return null // TODO:
  },

  brawlerIcons (id) {
    return this.base + `/brawlers/icons/${id}.png`
  },

  // TMP
  gameModesIcons (mode) {
    switch (mode) {
      case 'duoShowdown':
        return this.base + '/game-modes/duo-showdown.png'
      case 'gemGrab':
        return this.base + '/game-modes/gem-grab.png'
      case 'soloShowdown':
        return this.base + '/game-modes/solo-showdown.png'
    }
  }
}

module.exports = URLAssetsConstants
