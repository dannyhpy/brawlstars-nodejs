class Ranking {
    constructor(data) {
        this.country     = data.country
        this.type        = data.type   
        this.ranks       = data.ranks["items"]
        this.rankCount   = this.ranks.length
    }

    /**
    * @param {number} max
    * @returns {object} object
    */

    getTop(max = 10) {
        return max < 0 || max > this.rankCount ? TypeError("Invalid number") : this.ranks.slice(0, max)
    }

    /**
     * @param {string} tag player or club tag
     * @returns {boolean} true if the player/club is ranked, false if not
     */

    isRanked(tag) {
        return this.ranks.map(r => r.tag).includes(tag)
    }
}

module.exports = Ranking