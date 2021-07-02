const DownloadableFile = require('./DownloadableFile')

const URLConstants = require('./URLConstants')

class BrawlerIcon extends DownloadableFile {
  constructor (id) {
    const url = URLConstants.assets.brawlerIcons(id)
    
    super(`${id}.png`, url)

    this.id = id
  }
}

module.exports = BrawlerIcon
