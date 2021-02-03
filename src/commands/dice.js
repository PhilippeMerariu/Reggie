module.exports = {
    main: (channel, msg, modifiers) => {
        let xy = msg.split('d')
        let numDice = parseInt(xy[0])
        let numSides = parseInt(xy[1])
        let max = 50
        let values = [];
        let total = 0;
        let message = "";
        let editMessage = "";

        if (numDice > max){
            numDice = max;
        }
        for (let i = 1; i <= numDice; i++){
            let val = Math.floor(Math.random() * numSides + 1);
            values.push(val);
            total += val;
            message += "Rolling dice " + (i) + " --> :game_die:\n";
            editMessage += "Rolling dice " + (i) + " --> " + val + "\n";
        }
        message += ":game_die: Total score: " + ":pencil:" + " :game_die:";
        editMessage += ":game_die: Total score: " + total + " :game_die:";

        channel.send(message)
            .then((m) => {
                setTimeout(() => {
                    m.edit(editMessage);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    name: 'dice',
    type: 'active',
    desc: ' - r!xdy \t--> roll x# of y-sided dice',
    regexPattern: /\d+[d]\d+/i,
}
