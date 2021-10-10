const https = require('https');
const jokeAPI = require('sv443-joke-api')

module.exports = {
    main: (channel, modifiers) => {
        jokeAPI.getJokes()
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            joke = data; //JSON.parse(data);
            if(joke.type == "single"){
                channel.send(joke.joke);
            }
            else{ //two part joke
                channel.send(joke.setup);
                setTimeout(() => {
                    channel.send(joke.delivery);
                }, 3000);
            }
        });
    },
    name: 'joke',
    type: 'active',
	desc: ' - r!joke \t--> tells a random joke'
}