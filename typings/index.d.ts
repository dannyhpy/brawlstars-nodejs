import DownloadableFile from '../lib/DownloadableFile'

declare module 'brawlstars.js' {
  interface ClientOptions {
    /**
     * Token used to interact with the Brawl Stars API.
     * See https://developer.brawlstars.com/ to get a token.
     */
    token: string
  }

  interface PlayerProperties {
    tag: string
    // ...
  }

  interface ClubProperties {
    tag: string
    // ...
  }

  interface EventProperties {
    startTime: string
    endTime: string
    event: {
      id: number
      mode: string
      map: string
      modifiers?: string[]
    }
  }

  export class Client {
    constructor (token: string)
    constructor (options: ClientOptions)

    readonly players: PlayerManager
    readonly clubs: ClubManager
    readonly events: EventManager

    /**
     * Token used to interact with the Brawl Stars API.
     * See https://developer.brawlstars.com/ to get a token.
     */
    token: string

    /**
     * @deprecated Use `client.players.fetch` instead
     */
    getPlayer (tag: string): Promise<Player>

    /**
     * @deprecated Use `client.clubs.fetch` instead
     */
    getClub (tag: string): Promise<Club>
  }

  export class PlayerManager {
    constructor (client: Client)
    readonly client: Client

    /**
     * Fetch a player using his in-game tag
     */
    fetch (tag: string): Promise<Player>
  }
  
  export class Player {
    constructor (client: Client, props: PlayerProperties)
    readonly client: Client

    readonly tag: string
    readonly name: string
    readonly icon: PlayerIcon
  }

  export class PlayerIcon extends DownloadableFile {
    constructor (id: number)
    readonly id: number
  }

  export class ClubManager {
    constructor (client: Client)
    readonly client: Client

    /**
     * Fetch a club using its in-game tag
     */
    fetch (tag: string): Promise<Club>
  }

  export class Club {
    constructor (client: Client, props: ClubProperties)
    readonly client: Client

    readonly tag: string
    readonly name: string
    readonly icon: ClubIcon
    readonly description: string
  }

  export class ClubIcon extends DownloadableFile {
    constructor (id: number)
    readonly id: number
  }

  export class EventManager {
    constructor (client: Client)
    readonly client: Client

    /** Fetch a list of the current active events */
    fetch (): Promise<Event[]>
  }

  export class Event {
    constructor (client: Client)
    readonly client: Client

    readonly startsAt: Date
    readonly endsAt: Date
  }
}
