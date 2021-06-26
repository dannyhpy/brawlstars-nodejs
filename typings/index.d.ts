
declare namespace BrawlStars {
  interface ClientOptions {
    /**
     * Token used to interact with Brawl Stars API.
     * See https://developer.brawlstars.com/ to get a token.
     */
    token: string
  }

  interface PlayerProperties {
    tag: string
  }

  interface ClubProperties {
    tag: string
  }

  export class Client {
    constructor (token: string)
    constructor (options: ClientOptions)

    players: PlayerManager
    clubs: ClubManager

    /**
     * Token used to interact with Brawl Stars API.
     * See https://developer.brawlstars.com/ to get a token.
     */
    token: string

    /**
     * @deprecated Use `client.players.fetch` instead
     */
    getPlayer (tag: string): Player

    /**
     * @deprecated Use `client.clubs.fetch` instead
     */
    getClub (tag: string): Club
  }

  export class PlayerManager {
    constructor (client: Client)

    fetch (tag: string): Player
  }
  
  export class Player {
    constructor (props: PlayerProperties)

    fetch (): this
  }

  export class ClubManager {
    constructor (client: Client)

    fetch (tag: string): Club
  }

  export class Club {
    constructor (props: ClubProperties)

    fetch (): this
  }
}
