const DownloadableFile = require('../DownloadableFile')

const URLConstants = require('../URLConstants')

class Icon extends DownloadableFile {
  /** @param {string} mode */
  constructor (mode) {
    const url = URLConstants.assets.gameModesIcons(mode)

    super(`${mode}.png`, url)
  }
}

module.exports = Icon
