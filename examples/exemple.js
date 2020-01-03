const BrawlStars = require('..')

const token  = process.env.token
const client = new BrawlStars.Client(token)

;(async function() {

  const Player = await client.getPlayer("#20CPVYVQ9") //get player by #ID
  const Club = await client.getClub(Player.club.tag) //get club by #ID

  console.log(Player.name) //OG|Diogolo
  console.log(Club.memberCount) //100
  console.log(Club.getMemberRank(Player.tag)) //get player rank by tag

  //Get stats of a brawler by ID or Name:
  console.log("By Name:", Player.getBrawlerByName("FRANK"))
  console.log("By ID:", Player.getBrawlerById("16000020"))

  //Get best time in robotRumble or BigBrawler:
  console.log("Rumble", Player.bestRoboRumbleTime) //794
  console.log("BigBrawler", Player.bestTimeToTxt("robotRumble")) //13m14s
})()
