const BrawlStars = require('..')
const client = new BrawlStars.Client(process.env.TOKEN)

;(async function () {
  const X = '###########################'
  const player = await client.getPlayer('#R8GVJ8GR') // get player by #ID

  console.log(X)
  console.log(player.name) // OG|Diogolo
  console.log(player.hexColor) // player's nameColor in hex format
  console.log(player.brawlerCount) // 27

  // Get stats of a brawler by ID or Name:
  console.log('By Name:', player.getBrawlerByName('MAX')) // false: because the player doesn't have unclocked this brawler
  console.log('By ID:', player.getBrawlerById('16000020'))

  // Get best time in robotRumble or BigBrawler:
  console.log('Rumble', player.bestRoboRumbleTime) // 794
  console.log('BigBrawler', player.bestTime(1)) // 13m14s

  // Club
  if (player.club) {
    const club = await client.getClub(player.club.tag) // get club by #ID
    console.log(X)
    console.log(club.type) // open
    console.log(club.getMemberRank(player.tag)) // 7
    console.log(club.getMemberRole(player.tag)) // member
    console.log(club.isFull) // false
  }

  // Rankings
  const FrenchRank = await client.getRanking('FR', 'players') // get french player ranking
  console.log(X)
  console.log(FrenchRank.getTop(3)) // 3 first objects
  console.log(FrenchRank.isRanked(player.tag)) // false

  // Brawlers
  const brawlers = await client.getBrawlers() // get brawlers
  console.log(X)
  console.log(brawlers.count) // 32
  console.log(brawlers.getBrawlersNames()) // list of brawler names
  console.log(brawlers.getBrawlerStarPowersByName('FRANK')) // list of 'FRANK' starpowers
  console.log(brawlers.getBrawlersStarPowers())
})()
