const package = require('../package.json')

const Client = require('./Client')

const PlayerManager = require('./PlayerManager')
const Player = require('./Player')
const PlayerIcon = require('./PlayerIcon')

const ClubManager = require('./ClubManager')
const Club = require('./Club')
const ClubIcon = require('./ClubIcon')

const BrawlerManager = require('./BrawlerManager')
const Brawler = require('./Brawler')
const BrawlerIcon = require('./BrawlerIcon')

const Event = require('./Event')

const DownloadableFile = require('./DownloadableFile')
const URLConstants = require('./URLConstants')

module.exports = {
  version: package.version,

  Client,

  PlayerManager, Player, PlayerIcon,
  ClubManager, Club, ClubIcon,
  BrawlerManager, Brawler, BrawlerIcon,
  Event,
  
  DownloadableFile, URLConstants
}
