# brawlstars.js

**brawlstars.js is an API wrapper for Brawl Stars in Javascript. This uses the Official Brawl Stars API to gather data.**

## Getting Started

1. Head to the [Official Brawl Stars API.](https://developer.brawlstars.com/#/getting-started)
2. Create a new account.
3. After creating a account, go to [your account.](https://developer.brawlstars.com/#/account)
4. Create a new token. Name it anything, put any description, and for the IP, add the IP address where you will be requesting from.
5. Hit create token, then click on the token, and your token will show up. This is basically your access key to the API.

**⚠️ Please make sure you have a token to start this, if not, refer to Getting Started ⚠️**

6. Run in your console ``npm install brawlstars.js``
7. You're done!

```javascript
const BrawlStars = require("brawlstars.js")
const token      = "Your Token"
const client     = new BrawlStars.Client(token)

;(async() => {
  const player     = await client.getPlayer("#PLAYERTAG")
  const playerClub = await client.getClub(player.club.tag)
})()
```

## Documentation

[Available here](https://brawlstarsjs.docs.apiary.io/)

## Support

[Discord Support Server](https://discord.gg/Tt6nbfUBnP)
