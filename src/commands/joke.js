const https = require('https');

module.exports = {
    main: (channel, modifiers) => {
        const jokeurl = "https://v2.jokeapi.dev"; //JokeAPI : https://sv443.net/jokeapi/v2/
        const categories = ["Any"]; //Any, Misc, Programming, Dark, Pun, Spooky, Christmas 
        //const params = []
        //var request = '${baseURL}/joke/${categories.join(",")}}'
        var request = jokeurl + "/joke/Any";
        https.get(request, res => {
            res.on('data', chunk => {
                var randomJoke = JSON.parse(chunk.toString());
                //console.log(randomJoke);
                if(randomJoke.type == "single"){
                    channel.send(randomJoke.joke);
                }
                else{ //two part joke
                    channel.send(randomJoke.setup);
                    setTimeout(() => {
                        channel.send(randomJoke.delivery);
                    }, 3000);
                }
            });

            res.on('error', err => {
                console.error("Error: " + err);
            });
        });
        channel.send();
    },
    name: 'joke',
    type: 'active',
	desc: ' - r!joke \t--> tells a random joke'
}