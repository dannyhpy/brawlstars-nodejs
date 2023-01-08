import { writeFile } from 'fs/promises'
import fetch from 'node-fetch'

export class DownloadableFile {
  /**
   * Downloadable file
   * @param {string} name
   * @param {string} url
   */
  constructor (name, url) {
    /** Name of the file */
    this.name = name
    /** URL of the file */
    this.url = url

    /**
     * File content
     * @type {Buffer | null}
     */
    this.content = null
  }

  /**
   * Download the file and returns it as a `Buffer`
   * @returns {Promise<Buffer>}
   */
  async download () {
    const res = await fetch(this.url)
    this.content = await res.buffer()

    return this.content
  }

  /**
   * Write the file to the specified `path`
   * @param {string} path
   * @returns {Promise<void>}
   */
  async write (path) {
    if (this.content === null) await this.download()

    await writeFile(path, this.content)
  }
}
