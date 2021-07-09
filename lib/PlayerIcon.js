const DownloadableFile = require('./DownloadableFile')

const URLConstants = require('./URLConstants')

class PlayerIcon extends DownloadableFile {
  constructor (id) {
    const url = URLConstants.assets.playerIcons(id)

    super(`${id}.png`, url)

    this.id = id
  }
}

module.exports = PlayerIcon
