const {token, keyword} = require('./config.json');
const Discord = require('discord.js');
const CommandStore = require('./src/commandStore');
const client = new Discord.Client();

commands = CommandStore.commands;

/**
 * Setup
 */
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    //list servers bot is connected to
    console.log('\nServers:')
    client.guilds.cache.forEach((guild) => {
        console.log(' - ' + guild.name)

        //list channels bot in on
        guild.channels.cache.forEach((channel) => {
            console.log(
                ' -- ' +
                    channel.name +
                    ' (' +
                    channel.type +
                    ') - ' +
                    channel.id
            )
        })
    })
})


/**
 * Response to command requests and messages
 */
client.on('message', processMessage);

	/**
	 * Main function to handle processing of messages
	 * Parses message to differentiate between r!command and regular message (eg notch)
	 * @param msg
	 */
	function processMessage (msg) {
		let messageContent = msg.content.toLowerCase();
		let channelId = msg.channel.id;
		let channel = client.channels.cache.get(channelId);
		let isBot = msg.author.bot;

		let dicePattern = new RegExp('\\d+[d]\\d+'); //search for '#d#' expression.
		


		//command and message handling block
		//commands that look for keyword
		if (messageContent.startsWith(keyword) && !isBot) {

			messageContent = messageContent.substring(2); //extracts the message without the "r!"

			let messageWords = messageContent.trim().split(' ');
			let command = messageWords[0];
			let args = messageWords.slice(1, messageWords.length);

			if (command === commands.beer.name) {
				commands.beer.main(channel);
			}
			else if (command === commands.flops.name) {
				commands.flops.main(channel);
			}
			else if (command === commands.drink.name){
				commands.drink.main(channel);
			}
			else if (dicePattern.test(message)){
				commands.dice.main(channel, message);
			}
			else if (command === commands.help.name){
				let helpBox = new Discord.MessageEmbed();
				commands.help(channel, helpBox);
				
			}
		}
		//commands that do NOT look for keyword
		else if (!isBot) {
			if (commands.caCourt.caMarche(messageContent)) {
				commands.caCourt.court(channel);
			}
			if (commands.notch.notchable(messageContent)) {
				commands.notch.main(channel);
			}
			if (commands.huh.canHuh(messageContent)) {
				commands.huh.main(channel, messageContent);
			}
		}
	}

client.login(token) //bot token --> should NOT be commited and made public.
