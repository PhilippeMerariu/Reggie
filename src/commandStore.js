const beer = require('./commands/beer');
const drink = require('./commands/drink');
const flops = require('./commands/flops');
const notch = require('./commands/notch');
const beet = require('./commands/beet');
const B = require('./commands/B');
const caCourt = require('./commands/caCourt');
const dice = require('./commands/dice');
const huh = require('./commands/huh');

exports.commands = {
	help: (channel, helpBox, modifiers) => {
		helpBox.setTitle("Help");
		
		var description = "";
		//description = commands.beer.desc + "\n" + commands.drink.desc;
		for (const key in commands) {
			console.log(key + commands[key].type);
			//console.log(commands[key].desc);
			if (commands[key].type == 'active'){
				description += commands[key].desc + "\n";
			}
		}
		helpBox.setDescription(description);
		
		channel.send(helpBox);
	},
    beer: beer,
    drink: drink,
    flops: flops,
    beet: beet,
	B: B,
	notch: notch,
    caCourt: caCourt,
	dice: dice,
    huh: huh
}