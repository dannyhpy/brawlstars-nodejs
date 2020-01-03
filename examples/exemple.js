const BrawlStars = require('..')
const token  = process.env.TOKEN
const client = new BrawlStars.Client(token)

;(async function() {

  const X = "###########################"
  const Player = await client.getPlayer("#R8GVJ8GR") //get player by #ID

  console.log(X)
  console.log(Player.name) //OG|Diogolo
  console.log(Player.getColor()) //player's nameColor
  console.log(Player.brawlerCount) //27

  //Get stats of a brawler by ID or Name:
  console.log("By Name:", Player.getBrawlerByName("MAX")) //false: because the player doesn't have unclocked this brawler
  console.log("By ID:", Player.getBrawlerById("16000020"))

  //Get best time in robotRumble or BigBrawler:
  console.log("Rumble", Player.bestRoboRumbleTime) //794
  console.log("BigBrawler", Player.bestTimeToTxt("robotRumble")) //13m14s

  //Club
  const Club = await client.getClub(Player.club.tag) //get club by #ID
  console.log(X)
  console.log(Club.type) //open
  console.log(Club.getMemberRank(Player.tag)) //7
  console.log(Club.getMemberRole(Player.tag)) //member
  console.log(Club.isFull) //false

  //Rankings
  const FrenchRank = await client.getRanking("FR", "players") //get french player ranking
  console.log(X)
  console.log(FrenchRank.getTop(3)) //3 first objects
  console.log(FrenchRank.isRanked(Player.tag)) //false
  
  
  //Brawlers
  const Brawlers   = await client.getBrawlers() //get brawlers
  console.log(X)
  console.log(Brawlers.count) //32
  console.log(Brawlers.getAllNames()) //list of brawler names
  console.log(Brawlers.getBrawlerStarPowers("FRANK")) //list of 'FRANK' starpowers
  console.log(Brawlers.getAllStarPowers())
})()
