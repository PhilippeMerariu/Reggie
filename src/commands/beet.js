const Discord = require('discord.js');

module.exports = {
    main: (channel, modifiers) => {
        channel.send(new Discord.MessageAttachment('./images/beet.jpg'));
    },

    name: 'beet',
    type: 'passive',
    desc: 'Im hiding, sssssh'
}