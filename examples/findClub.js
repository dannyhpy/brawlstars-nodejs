import { Client } from '../index.js'

const token = process.env.TOKEN
if (!token) {
  console.error('Environment variable TOKEN not found.')
  process.exit(1)
}

const bs = new Client(token)

const tag = process.env.TAG || '#9PLR29VL'

console.log('Fetching data for...', tag)

bs.clubs.fetch(tag)
  .then(club => {
    console.log()
    console.log('BrawlStars Club')
    console.log(`  | TAG: ${club.tag}`)
    console.log(`  | Name: ${club.name}`)
    console.log('  | Icon')
    console.log(`      | ID: ${club.icon.id}`)
    console.log(`      | URL: ${club.icon.url}`)
  })
