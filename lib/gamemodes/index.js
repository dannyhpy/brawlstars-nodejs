
const Base = require('./Base')
const GemGrab = require('./GemGrab')

const gamemodes = new Map()
gamemodes.set('gemGrab', GemGrab)

module.exports = gamemodes
module.exports.Base = Base
