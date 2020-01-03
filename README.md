# brawlstars-nodejs - API wrapper for Brawlstars in Javascript

**Installation**

`npm install github:dannyhpy/brawlstars-nodejs`

**Sarting**

```JS
const Brawlstars = require("brawlstars.js")
const tokne      = "your token" //visit https://api.brawlstars.com/ to get a token
const client     = new Brawlstars.client(token)

(async() => {
  const player         = await client.getPlayer("#PLAYERTAG")
  const player_club    = await client.getClub(Player.club.tag)
})()
```

**Documentation**

*Available soon*
*Exemples available in /exemples/*
