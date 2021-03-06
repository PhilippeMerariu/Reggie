const { token, keyword, firebaseConfig} = require('./config.json')
Discord = discordStart();
const CommandStore = require('./src/commandStore')
const client = new Discord.Client()

commands = CommandStore.commands

// FireStore Database
db = fireStart();


/*
 * Setup
 */
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
	
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
	
	//testFirestore();
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
			msg.delete();
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
        } else if (command === commands.time.name){
			commands.time.main(channel, db);
		} else if (command === commands.hao.name){
			msg.delete();
			commands.hao.main(channel);
		} else if (command === commands.joke.name){
            commands.joke.main(channel)
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
        if (commands.beetlejuice.juicable(messageContent)) {
            commands.beetlejuice.main(channel);
        }
    }
}

function fireStart(){
	let firebase = require("firebase/app");
	require("firebase/auth");
	require("firebase/firestore");

	firebase.initializeApp(firebaseConfig);
	
	return firebase.firestore();
	//let auth = firebase.auth(); //auth is needed when there is a sign-in service and auhtorization is required.
}

function discordStart(){
	return require('discord.js');
}

function testFirestore(){
	//how to access firestore collection
	let user = db.collection('Users').doc('xZJmVbWuWEMuzWXWIq1g').get()
	.then(snapshot => {
    if (snapshot.empty) {
		console.log("empty");
		return;
    }  
    console.log("success");
	console.log(snapshot.data());
	})
	.catch(err => {
		console.log("error: " + err);
	});
	
	//how to add a Document + Files
	db.collection('Game').doc('Among Us').set({
		type: 'online',
		maxPlayers: '10',
		platform: 'mobile'	
	})
	.then(() => {
		console.log("document added");
	})
	.catch(err => {
		console.log("error: " + err);
	})
}

client.login(token) //bot token --> should NOT be commited and made public.
