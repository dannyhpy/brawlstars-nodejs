const fs = require('fs').promises
const fetch = require('node-fetch').default

class DownloadableFile {
  constructor (name, url) {
    this.name = name
    this.url = url

    /** File content */
    this.content = null
  }

  /**
   * Download the file and returns it as a `Buffer`
   * @returns {Buffer}
   */
  async download () {
    const res = await fetch(this.url)
    this.content = await res.buffer()

    return this.content
  }

  /**
   * Write the file to the specified `path`
   * @param {string} path
   */
  async write (path) {
    if (this.content === null) await this.download()

    await fs.writeFile(path, this.content)
  }
}

module.exports = DownloadableFile
