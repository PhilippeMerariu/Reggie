module.exports = {
    main: (channel, user, modifiers) => {
        channel.send('Good luck ' + user + " :blush:");
    },
	wish: (msg) => {
		return msg.includes("wish me luck");
	},
    name: 'wishluck',
    type: 'passive',
	desc: ' - wish me luck \t--> replies with \'good luck\' + user'
}