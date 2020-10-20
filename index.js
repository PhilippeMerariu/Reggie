const {token} = require('./config.json');
const Discord = require('discord.js');
const CommandStore = require('./commandStore');
const client = new Discord.Client();

commands = commandStore.commands;

/**
 * Setup
 */
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

/**
 * Response to command requests and messages
 */
client.on('message', processMessage);

client.login(token); //bot token --> should NOT be commited and made public.

/**
 * Main function to handle processing of messages
 * Parses message to differentiate between r!command and regular message (eg notch)
 * @param msg
 */
function processMessage (msg) {
	//console.log(msg);
	var message = msg.content.toLowerCase();
	var channelId = msg.channel.id;
	//console.log(msg.channel.id);
	var channel = client.channels.cache.get(channelId);

	//command and message handling block
	if (message.startsWith('r!')){
		message = message.substring(2); //extracts the message without the "r!"
		if (message === commands.beer.name) {
			commands.beer.main(channel);
		}
		else if (message === commands.flops.name) {
			commands.flops.main(channel);
		}
		else if (message === commands.drink.name){
			commands.drink.main(channel);
		}
	}
	else{
		if (commands.caCourt.caMarche(message)) {
			commands.caCourt.court(channel);
		}
		if (commands.notch.notchable(message)) {
			commands.notch.main(channel);
		}
	}
}
