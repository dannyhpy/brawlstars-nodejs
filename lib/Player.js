class Player {
    constructor(data) {
        this.player =  {
            tag: data.tag,
            name: data.name,
            nameColor: data.nameColor,
            trophies: data.trophies,
            expLevel: data.expLevel,
            expPoints: data.expPoints,
            highestTrophies: data.highestTrophies,
            powerPlayPoints: data.powerPlayPoints,
            trioVictories: data["3vs3Victories"],
            duoVictories: data.duoVictories,
            soloVictories: data.soloVictories,
            bestRoboRumbleTime: data.bestRoboRumbleTime,
            bestTimeAsBigBrawler: data.bestTimeAsBigBrawler
        }

        this.club = data.club
    }

    getWins(type) {
        const types = ["solo", "duo", "trio"]
        if (!types.includes(type)) throw "Invalid type, try: " + types.join(" ") ;
        return this.player[type+"Victories"]
    }

    getColor() {
        return hexToString(this.player.nameColor)
    }
}

function hexToString(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    return str;
}   

module.exports = Player