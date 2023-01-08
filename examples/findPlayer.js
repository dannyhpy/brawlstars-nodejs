import { Client } from '../index.js'

const token = process.env.TOKEN
if (!token) {
  console.error('Environment variable TOKEN not found.')
  process.exit(1)
}

const bs = new Client(token)

const tag = process.env.TAG || '#JJL9YVJ2'

console.log('Fetching data for...', tag)

bs.players.fetch(tag)
  .then(player => {
    console.log()
    console.log('BrawlStars Player')
    console.log(`  | TAG: ${player.tag}`)
    console.log(`  | Name: ${player.name}`)
    console.log('  | Icon')
    console.log(`      | ID: ${player.icon.id}`)
    console.log(`      | URL: ${player.icon.url}`)
  })
