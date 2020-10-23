const { token, keyword } = require('./config.json')
const Discord = require('discord.js')
const CommandStore = require('./src/commandStore')
const client = new Discord.Client()

commands = CommandStore.commands

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
client.on('message', processMessage)

//client.login(token); //bot token --> should NOT be commited and made public.

/**
 * Main function to handle processing of messages
 * Parses message to differentiate between r!command and regular message (eg notch)
 * @param msg
 */
function processMessage(msg) {
    let messageContent = msg.content
    let channelId = msg.channel.id
    let channel = client.channels.cache.get(channelId)
    let isBot = msg.author.bot

    let dicePattern = commands.dice.regexPattern //search for '#d#' expression.

    //command and message handling block
    //commands that look for keyword
    if (messageContent.toLowerCase().startsWith(keyword) && !isBot) {
        messageContent = messageContent.substring(2) //extracts the message without the "r!"

        /**
         * command is r!<command>, it is lowerCase
         * args is everything after command, split by spaces, no case change. 	type: array of strings
         * argsLowerCase is args but all lower case. 							type: array of strings
         */

        let messageWords = messageContent.trim().split(' ')
        let command = messageWords[0].toLowerCase()
        let args = messageWords.slice(1, messageWords.length)
        let argLowerCase = messageContent
            .trim()
            .toLowerCase()
            .split(' ')
            .slice(1, messageWords.length)

        if (command === commands.beer.name) {
            commands.beer.main(channel)
        } else if (command === commands.flops.name) {
            commands.flops.main(channel)
        } else if (command === commands.B.name) {
            commands.B.main(channel, args)
        } else if (command === commands.beet.name) {
            commands.beet.main(channel)
        } else if (command === commands.drink.name) {
            commands.drink.main(channel)
        } else if (dicePattern.test(command)) {
            commands.dice.main(channel, command)
        } else if (command === commands.help.name) {
            let helpBox = new Discord.MessageEmbed()
            commands.help(channel, helpBox)
        }
    }
    //commands that do NOT look for keyword
    else if (!isBot) {
        if (commands.caCourt.caMarche(messageContent)) {
            commands.caCourt.court(channel)
        }
        if (commands.notch.notchable(messageContent)) {
            commands.notch.main(channel)
        }
        if (commands.huh.canHuh(messageContent)) {
            commands.huh.main(channel, messageContent)
        }
        if (commands.wishluck.wish(messageContent)) {
            commands.wishluck.main(channel, msg.author.toString())
        }
    }
}

client.login(token) //bot token --> should NOT be commited and made public.
