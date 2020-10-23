module.exports = {
    main: (channel, msg, modifiers) => {
        let xy = msg.split('d')
        let numDice = parseInt(xy[0])
        let numSides = parseInt(xy[1])
        let max = 20

        for (let i = 0; i < numDice; i++) {
            if (i > max)
                break;
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
