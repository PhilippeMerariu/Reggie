module.exports = {
    main: (channel, msg, modifiers) => {
        let xy = msg.split('d')
        let numDice = parseInt(xy[0])
        let numSides = parseInt(xy[1])
        let max = 20
        let total = 0;

        const rollDice = async () => {
            for (let i = 0; i < numDice; i++) {
                if (i > max)
                    break;
                await channel.send("Rolling dice " + (i + 1) + " --> :game_die:")
                    .then((m) => {
                        let res = Math.floor(Math.random() * numSides + 1);
                        total += res;
                        setTimeout(() => {
                            m.edit("Rolling dice " + (i + 1) + " --> " + res);
                        }, 2000);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }

        rollDice().then(() => {
            setTimeout(() => {
                channel.send(":game_die: Total score: " + total + " :game_die:");
            }, 2500);          
        });
    },
    name: 'dice',
    type: 'active',
    desc: ' - r!xdy \t--> roll x# of y-sided dice',
    regexPattern: /\d+[d]\d+/i,
}
