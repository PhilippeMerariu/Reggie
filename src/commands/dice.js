module.exports = {
    main: (channel, msg, modifiers) => {
        var xy = msg.split('d')
        var numDice = parseInt(xy[0])
        var numSides = parseInt(xy[1])
		
        for (let i = 0; i < numDice; i++) {
            channel.send('Rolling dice (evan\'s test) ' + (i + 1))
            channel.send('.\n.\n.(evan\'s test)')
            // + 1 because dices should start at 1 not 0
            channel.send(
                "Result (evan's test): " +
                    Math.floor(Math.random() * numSides + 1)
            )
        }
    },
    name: 'dice',
    type: 'active',
    desc: ' - r!xdy \t--> roll x# of y-sided dice',
    regexPattern: /\d+[d]\d+/i,
}
