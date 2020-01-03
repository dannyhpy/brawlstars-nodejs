# brawlstars-nodejs - API wrapper for Brawlstars in Javascript

**Starting**

`npm install github:dannyhpy/brawlstars-nodejs`

```JS
const Brawlstars = require("brawlstars.js")
const token      = "your token" //visit https://api.brawlstars.com/ to get a token
const client     = new Brawlstars.client(token)

(async() => {
  const player         = await client.getPlayer("#PLAYERTAG")
  const player_club    = await client.getClub(player.club.tag)
})()
```

**Documentation**

[click here](https://brawlstarsjs.docs.apiary.io/)
