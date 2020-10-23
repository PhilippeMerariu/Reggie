module.exports = {
    main: (channel, msg, modifiers) => {
        var xy = msg.split('d')
        var numDice = parseInt(xy[0])
        var numSides = parseInt(xy[1])

        for (let i = 0; i < numDice || numDice <= 20; i++) {
            channel.send("Rolling dice" + (i + 1))
            channel.send(".\n.\n.")
            // + 1 because dices should start at 1 not 0
            channel.send(
                "Result: " +
                    Math.floor(Math.random() * numSides + 1)
            )
        }
    },
    name: 'dice',
    type: 'active',
    desc: ' - r!xdy \t--> roll x# of y-sided dice',
    regexPattern: /\d+[d]\d+/i,
}
