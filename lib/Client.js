const HTTP = require('./HTTP')

class Client {
  constructor() {
    this.http = new HTTP()
  }
}

module.exports = Client
