import DownloadableFile from '../lib/DownloadableFile'

declare module 'brawlstars.js' {
  export class Client {
    constructor (token: string)
    constructor (options: ClientOptions)

    readonly dev?: DeveloperAccount

    readonly players: PlayerManager
    readonly clubs: ClubManager
    readonly brawlers: BrawlerManager
    readonly events: EventManager

    /**
     * Token used to interact with the Brawl Stars API.
     * See https://developer.brawlstars.com/ to get a token.
     */
    token: string
  }

  interface ClientOptions {
    /**
     * Token used to interact with the Brawl Stars API.
     * See https://developer.brawlstars.com/ to get a token.
     */
    token: string
  }

  export class DeveloperAccount {
    constructor (client: Client, props: DeveloperAccProperties)
    readonly client: Client

    readonly keys: KeyManager

    readonly id: string
    readonly ip: string
    readonly name: string
    readonly email: string
    readonly token: string
  }

  export class KeyManager {
    constructor (client: Client)
    readonly client: Client

    create (/* ... */): Promise<Key>

    delete (/* ... */): Promise<void>
  }

  export class Key {
    constructor (client: Client, props: KeyProperties)
    readonly client: Client

    readonly ip: string
    readonly name: string
    readonly token: string

    /**
     * Use this key to authenticate
     * to the BrawlStars API.
     *
     * Same as `client.setToken(key.token)`.
     */
    use (): void

    delete (): Promise<void>
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

  export class BrawlerManager {
    constructor (client: Client)
    readonly client: Client

    fetch (id: number): Promise<Brawler>
    fetchAll (): Promise<Brawler[]>
  }

  export class Brawler {
    constructor (client: Client, props: BrawlerProperties)
    readonly client: Client

    readonly id: number
    readonly name: string
  }

  export class BrawlerIcon {}

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

  interface DeveloperAccProperties {
    developer: {
      id: string
      name: string
      email: string
      prevLoginIp: string
    }
    temporaryAPIToken: string
    // ...
  }

  interface KeyProperties {
    ip: string
    name: string
    token: string
    // ...
  }

  interface PlayerProperties {
    tag: string
    // ...
  }

  interface ClubProperties {
    tag: string
    // ...
  }

  interface BrawlerProperties {
    id: number
    name: string
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
}
