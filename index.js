const {token} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
	var message = msg.content.toLowerCase();
	if (message.startsWith('r!')){
		 message = message.substring(2); //extracts the message without the "r!"
		
		if (message === 'beer') {
			msg.reply('yummy');
		}
	}else{
		if (message === "ca marche pas" || message === "ça marche pas") {
			msg.reply('ÇA COURT');
		}
	}

 });

client.login(token); //bot token --> should NOT be commited and made public.