const DownloadableFile = require('./DownloadableFile')

const URLConstants = require('./URLConstants')

class ClubIcon extends DownloadableFile {
  constructor (id) {
    const url = URLConstants.assets.clubIcons(id)

    super(`${id}.png`, url)

    this.id = id
  }
}

module.exports = ClubIcon
