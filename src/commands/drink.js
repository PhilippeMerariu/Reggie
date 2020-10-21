const Discord = require('discord.js');

module.exports = {
    main: (channel, modifiers) => {
        channel.send(new Discord.MessageAttachment('./images/beer2.png'));
    },
    name: 'drink',
    type: 'active',
	desc: ' - r!drink \t--> sends a delicious drink'
}