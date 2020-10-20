const { token } = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client()

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

client.on('message', (msg) => {
    //console.log(msg);
    var message = msg.content.toLowerCase()
    var channelId = msg.channel.id
    //console.log(msg.channel.id);
    var channel = client.channels.cache.get(channelId)
    if (message.startsWith('r!')) {
        message = message.substring(2) //extracts the message without the "r!"
        dicePattern = new RegExp('d+dd+/i')
        if (message === 'beer') {
            channel.send('yummy')
        } else if (message === 'flops') {
            channel.send('F')
            channel.send(':clap::clap:    :clap::clap:')
            channel.send('L')
            channel.send(':clap::clap:    :clap::clap:')
            channel.send('O')
            channel.send(':clap::clap:    :clap::clap:')
            channel.send('P')
            channel.send(':clap::clap:    :clap::clap:')
			channel.send('Flopsssssss')	
        } else if (message.match(dicePattern)) { // checks if message is formatted like [numDice]d[numSides]
            var xy = message.split('d')
            var numDice = parseInt(xy[0])
            var numSides = parseInt(xy[1])

            for (let i = 0; i < numDice; i++) {
				channel.send('rolling dice ' + (i + 1))
				// To add a bit of suspense lol
                for (j = 0; j < 3; j++) {
                    setTimeout(() => {
                        channel.send('.')
                    }, 500)
				}
				// + 1 because dices should start at 1 not 0
				channel.send('Result: ' + Math.floor(Math.random() * numSides + 1));
            }
        }
    } else {
        if (message === 'ca marche pas' || message === 'ça marche pas') {
            channel.send('ÇA COURT')
        } else if (
            message.includes('i will') ||
            message.includes('im gonna') ||
            message.includes("i'm gonna")
        ) {
            channel.send('notch bitch')
        }
    }
})
client.login(token) //bot token --> should NOT be commited and made public.
