# brawlstars.js

**brawlstars.js is an API wrapper for Brawlstars in Javascript**

## Starting

`npm install brawlstars.js`

```javascript
const BrawlStars = require("brawlstars.js")
const token      = "Your Token" // Visit https://developer.brawlstars.com/ to get a token
const client     = new BrawlStars.Client(token)

;(async() => {
  const player     = await client.getPlayer("#PLAYERTAG")
  const playerClub = await client.getClub(player.club.tag)
})()
```

## Documentation

[Available here](https://brawlstarsjs.docs.apiary.io/)

## Support

[Discord support](https://discord.gg/kA5DzqY)
