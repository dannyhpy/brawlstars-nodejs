import DownloadableFile from '../lib/DownloadableFile'

declare module 'brawlstars.js' {
  export class Brawler {
    constructor (client: Client, props: any)
    readonly client: Client

    readonly id: number
    readonly name: string
  }

  export class BrawlerIcon {}

  export class BrawlerManager {
    constructor (client: Client)
    readonly client: Client

    fetch (id: number): Promise<Brawler>
    fetchAll (): Promise<Brawler[]>
  }

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

  export class Club {
    constructor (client: Client, props: any)
    readonly client: Client
    /**
     * Describes if this object contains only partial information.
     * If this is the case, you might want to use **fetch()** on this object.
     */
    readonly partial: bool

    readonly tag: string
    readonly name: string
    readonly icon: ClubIcon
    readonly description: string
  }

  export class ClubIcon extends DownloadableFile {
    constructor (id: number)
    readonly id: number
  }

  export class ClubManager {
    constructor (client: Client)
    readonly client: Client

    /**
     * Fetch a club using its in-game tag
     */
    fetch (tag: string): Promise<Club & { partial: false }>

    tryFetch (tag: string): Promise<{ error?: Error, club?: Club}>
  }

  export class DeveloperAccount {
    constructor (client: Client, props: DeveloperAccountProperties)
    readonly client: Client

    readonly keys: KeyManager

    readonly id: string
    readonly ip: string
    readonly name: string
    readonly email: string
    readonly temporaryToken: string
  }

  interface DeveloperAccountProperties {
    developer: {
      id: string
      name: string
      email: string
      prevLoginIp: string
    }
    temporaryAPIToken: string
    // ...
  }

  export class Event {
    constructor (client: Client)
    readonly client: Client

    readonly startsAt: Date
    readonly endsAt: Date
  }

  export class EventManager {
    constructor (client: Client)
    readonly client: Client

    /** Fetch a list of the current active events */
    fetch (): Promise<Event[]>
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

  export class KeyManager {
    constructor (client: Client)
    readonly client: Client

    create (/* ... */): Promise<Key>

    delete (/* ... */): Promise<void>
  }

  interface KeyProperties {
    ip: string
    name: string
    token: string
    // ...
  }

  export class Player {
    constructor (client: Client, props: any)
    readonly client: Client
    /**
     * Describes if this object contains only partial information.
     * If this is the case, you might want to use **fetch()** on this object.
     */
    readonly partial: bool

    readonly color: number
    readonly club?: Club & { partial: true }
    readonly experience: PlayerExperience
    readonly gears: PlayerGear[]
    readonly icon: PlayerIcon
    readonly name: string
    readonly tag: string
    readonly trophies: PlayerTrophies
    readonly victories: PlayerVictories
  }

  interface PlayerExperience {
    readonly level: number
    readonly points: number
  }
  
  interface PlayerGear {
    readonly id: number
    readonly name: any /*  */
    readonly level: number
  }

  export class PlayerIcon extends DownloadableFile {
    constructor (id: number)
    readonly id: number
  }

  export class PlayerManager {
    constructor (client: Client)
    readonly client: Client

    /**
     * Fetch a player using his in-game tag
     */
    fetch (tag: string): Promise<Player & { partial: false }>

    tryFetch (tag: string): Promise<{ error?: Error, player?: Player}>
  }

  interface PlayerTrophies {
    readonly current: number
    readonly highest: number
  }

  interface PlayerVictories {
    readonly solo: number
    readonly duo: number
    readonly trio: number
    readonly total: number
  }
}
