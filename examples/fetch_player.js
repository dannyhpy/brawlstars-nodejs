const BrawlStars = require('..')

const token  = process.env.TOKEN
const client = new BrawlStars.Client(token)

;(async function() {
  console.log( await client.getPlayer('JJL9YVJ2') )
})()
