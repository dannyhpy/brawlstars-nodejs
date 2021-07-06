# brawlstars.js
[English](./README.md) - [French (Français)](./README.fr.md)

**brawlstars.js is an API wrapper for BrawlStars for the Node.js runtime**

## How to use?

Install `brawlstars.js` using `npm`:  
`npm install brawlstars.js`

In order to access the official BrawlStars API, you need to authenticate using
a **token**. To get a **token**, sign up on the [BrawlStars for developers](https://developer.brawlstars.com)
website.

Once you have a **token**, you can start performing requests to their API:  
```
const BrawlStars = require("brawlstars.js")
const bs = new BrawlStars.Client({
  token: "[...]" /* insert your token here. */
})

bs.players.fetch("#AABBCCDD" /* insert your player tag here. */)
  .then(you => {
    console.log( you.name ) // => Your nickname in BrawlStars
  })
```

> Wanna see everything else? Peek into the `examples` directory.

## Need help?

- We have a [Discord server](https://discord.gg/Tt6nbfUBnP)
- We have an [online documentation](https://brawlstarsjs.docs.apairy.io/) (**OUTDATED**)
