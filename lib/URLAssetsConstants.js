const URLAssetsConstants = {
  base: 'https://raw.githubusercontent.com/overwolfmobile/brawl-stars-assets/master/assets/',

  playerIcons (id) {
    return this.base + `user-badges/${id}.png`
  }
}

module.exports = URLAssetsConstants
