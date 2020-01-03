# brawlstars.js

**brawlstars.js is an API wrapper for Brawlstars in Javascript**

## Starting

`npm install brawlstars.js`

```javascript
const Brawlstars = require("brawlstars.js")
const token      = "your token" //visit https://developer.brawlstars.com/ to get a token
const client     = new Brawlstars.client(token)

(async() => {
  const player         = await client.getPlayer("#PLAYERTAG")
  const player_club    = await client.getClub(player.club.tag)
})()
```

## Documentation

[Available here](https://brawlstarsjs.docs.apiary.io/)

## Support

[Discord support](https://discord.gg/kA5DzqY)
