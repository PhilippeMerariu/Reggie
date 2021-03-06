let huhPattern = new RegExp('^([hH]uh|[wW]hat\\?*|[hH]m+|[nN]eed\\ssomething|[cC]ome\\shere\\soften|\\?)\\?*') //search for huh?, what? hmm*?,

let lines = [
    "Huh?",
    "Need something?",
    "So uhh... you come here often?",
    "yOu cOmE hErE a LoT?",
    "What?",
    "Hmm?",
    ":thinking:",
    "?"
]

module.exports = {
    main: (channel, msg, modifiers) => {
        channel.send(lines[Math.floor(Math.random()*lines.length)]);
    },
    canHuh: (msg) => {
        return huhPattern.test(msg);
    },
    name: 'huh',
    type: 'passive',
    desc: "Annoys people with huh? what? need something?"
}