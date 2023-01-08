import { DownloadableFile } from '../DownloadableFile.js'

import { URLConstants } from '../URLConstants.js'

export class Icon extends DownloadableFile {
  /** @param {string} mode */
  constructor (mode) {
    const url = URLConstants.assets.gameModesIcons(mode)

    super(`${mode}.png`, url)
  }
}
