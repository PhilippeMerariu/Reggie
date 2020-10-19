const {token} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	
	//list servers bot is connected to
	console.log("\nServers:");
	client.guilds.cache.forEach((guild) => {
		console.log(" - " + guild.name);
		
		//list channels bot in on
		guild.channels.cache.forEach((channel) => {
			console.log(" -- " + channel.name + " (" + channel.type + ") - " + channel.id);
		})
	});
	
 });

client.on('message', msg => {
	var message = msg.content.toLowerCase();
	var channelId = msg.channel.id;
	var channel = client.channels.cache.get(channelId);
	
	if (message.startsWith('r!')){
		 message = message.substring(2); //extracts the message without the "r!"
		
		 if (message === 'beer') {
			channel.send('yummy');
		}
		else if (message === "ca marche pas" || message === "ça marche pas") {
			msg.reply('ÇA COURT')
		}
		else if (message == "beer picture"){
			//const beerImage = new Discord.Attachment('./images/beer.png');
			//channel.send('');
		}
	}
	else{
		if (message == "hello"){
			channel.send("I am ALWAYS listening!");
		}
	}
 });

client.login(token); //bot token --> should NOT be commited and made public.
