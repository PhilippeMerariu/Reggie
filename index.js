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
		var message = msg.content.toLowerCase();
		var channelId = msg.channel.id;
		var channel = client.channels.cache.get(channelId);
		
		var dicePattern = new RegExp('\\d+[d]\\d+'); //search for '#d#' expression.
		
		let isBot = msg.author.bot;
		//command and message handling block
		//commands that look for keyword
		if (message.startsWith(keyword) && !isBot){
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
			else if (dicePattern.test(message)){
				commands.dice.main(channel, message);
			}
			else if (message === commands.help.name){
				var helpBox = new Discord.MessageEmbed();
				commands.help(channel, helpBox);
				
			}
		}
		//commands that do NOT look for keyword
		else if (!isBot) {
			if (commands.caCourt.caMarche(message)) {
				commands.caCourt.court(channel);
			}
			if (commands.notch.notchable(message)) {
				commands.notch.main(channel);
			}
			if (commands.huh.canHuh(message)) {
				commands.huh.main(channel, message);
			}
		}
	}

client.login(token) //bot token --> should NOT be commited and made public.
