let huhPattern = new RegExp('^([hH]uh|[wW]hat\\?*$|[hH]m+|[nN]eed\\ssomething|[cC]ome\\shere\\soften)\\?*') //search for huh?, what? hmm*?,

let lines = [
    "Huh?",
    "Need something?",
    "So uhh... you come here often?",
    "yOu cOmE hErE a LoT?",
    "What?",
    "Hmm?"
]

module.exports = {
    main: (channel, msg, modifiers) => {
        if (!(msg === "fuck off")) {
            channel.send(lines[Math.floor(Math.random(lines.length))]);
        }
        else
            channel.send("Aight fuck you too");
    },
    canHuh: (msg) => {
        return huhPattern.test(msg) || msg === "fuck off";
    },
    name: 'huh',
    type: 'passive'
}