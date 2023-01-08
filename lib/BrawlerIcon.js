import { DownloadableFile } from './DownloadableFile.js'

import { URLConstants } from './URLConstants.js'

export class BrawlerIcon extends DownloadableFile {
  constructor (id) {
    const url = URLConstants.assets.brawlerIcons(id)
    
    super(`${id}.png`, url)

    this.id = id
  }
}
