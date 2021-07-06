# brawlstars.js
[Anglais (English)](./README.md) - [Français](./README.fr.md)

**brawlstars.js est une librairie pour intéragir avec l'API de BrawlStars pour Node.js**

## Comment l'utiliser ?

Installe `brawlstars.js` en utilisant `npm` :
`npm install brawlstars.js`

Pour obtenir l'accès à l'API officiel de BrawlStars, tu dois t'authentifier en utilisant
un **token**. Pour obtenir un **token**, inscris-toi sur le site
[BrawlStars pour les développeurs](https://developer.brawlstars.com).

Une fois que tu as un **token**, tu peux commencer à utiliser leur API :  
```
const BrawlStars = require("brawlstars.js")
const bs = new BrawlStars.Client({
  token: "[...]" /* insère ton token ici. */
})

bs.players.fetch("#AABBCCDD" /* insère ton tag de joueur ici. */)
  .then(toi => {
    console.log( toi.name ) // => Ton pseudonyme dans BrawlStars
  })
```

> Tu veux voir le reste ? Jette un œil dans le dossier `examples`.

## Besoin d'aide ?

- On a un [serveur Discord](https://discord.gg/Tt6nbfUBnP)
- On a une [documentation en ligne](https://brawlstarsjs.docs.apairy.io/) (**PAS À JOUR**)
