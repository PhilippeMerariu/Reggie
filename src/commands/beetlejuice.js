const Discord = require('discord.js');

module.exports = {
    main: (channel, modifiers) => {
        channel.send(new Discord.MessageAttachment('./images/bri-beetlejuice.png'));
    },
    juicable: (msg) => {
        juice = new RegExp('(beetlejuice(\\s)*){3}');
        console.log(juice.test(msg));
        return (juice.test(msg))
    },
    name: 'beetlejuice',
    type: 'passive',
    desc: ' - beetle juice 3 times \t--> replies with bri-beetlejuice image.'
}