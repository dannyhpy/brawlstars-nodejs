
# brawlstars.js

An Unofficial api wrapper for the brawl stars Api

## Installation

Install with npm

```bash
 npm install brawlstars.js
```
    
## Usage/Examples

```javascript
const BrawlStars = require("brawlstars.js")
const token      = "Your Token" // Visit https://developer.brawlstars.com/ to get a token
const client     = new BrawlStars.Client(token)

client.getPlayer('#PLAYERTAG')
  .then(player => {
    //your stuff here such a console.log(player.tag)
    return client.getClub(player.club.tag)
  })
  .then(club => {
    // ...
  })
```

  
## Documentation

[Documentation](https://brawlstarsjs.docs.apiary.io/)

  
## Support
[Join our discord server]()

  
## Authors

- [@dannyhpy](https://github.com/dannyhpy)

  
## Acknowledgements

 - [Brawl Stars Api](https://developers.brawlstars.com)


  
## Contributing

Contributions are always welcome!<BR>
For major changes please open a issue first

  
## License

[Apache License](http://www.apache.org/licenses/)

  




  


  