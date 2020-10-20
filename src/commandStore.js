const beer = require('./commands/beer');
const drink = require('./commands/drink');
const flops = require('./commands/flops');
const notch = require('./commands/notch');
const caCourt = require('./commands/caCourt');
const dice = require('./commands/dice');

exports.commands = {
	help: (channel, helpBox, modifiers) => {
		helpBox.setTitle("Help");
		
		var description = "";
		console.log(typeof(commands));
		//description = commands.beer.desc + "\n" + commands.drink.desc;
		
		helpBox.setDescription(description);
		
		channel.send(helpBox);
	},
    beer: beer,
    drink: drink,
    flops: flops,
    notch: notch,
    caCourt: caCourt,
	dice: dice
}