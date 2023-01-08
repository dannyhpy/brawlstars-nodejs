import { DownloadableFile } from './DownloadableFile.js'

import { URLConstants } from './URLConstants.js'

export class ClubIcon extends DownloadableFile {
  constructor (id) {
    const url = URLConstants.assets.clubIcons(id)

    super(`${id}.png`, url)

    this.id = id
  }
}
