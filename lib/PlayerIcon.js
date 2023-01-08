import { DownloadableFile } from './DownloadableFile.js'

import { URLConstants } from './URLConstants.js'

export class PlayerIcon extends DownloadableFile {
  constructor (id) {
    const url = URLConstants.assets.playerIcons(id)

    super(`${id}.png`, url)

    this.id = id
  }
}
