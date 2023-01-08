export const TagResolver = {
  /** @param {string} tag */
  encode (tag) {
    if (tag.startsWith('%23')) return tag

    if (tag[0] === '#') return '%23' + tag.slice(1)

    return '%23' + tag
  },

  /** @param {string} tag */
  decode (tag) {
    if (tag[0] === '#') return tag

    if (tag.startsWith('%23')) return '#' + tag.slice(3)

    return '#' + tag
  },

  /** @param {string} tag */
  normalize (tag) {
    return this.decode(tag).toUpperCase()
  }
}
