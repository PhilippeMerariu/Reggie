const beer = require('./commands/beer');
const drink = require('./commands/drink');
const flops = require('./commands/flops');
const notch = require('./commands/notch');
const caCourt = require('./commands/caCourt');
const dice = require('./commands/dice');
const huh = require('./commands/huh');

exports.commands = {
	help: (channel, helpBox, modifiers) => {
		helpBox.setTitle("Help");
		
		var description = "";
		for (const key in commands) {
			//console.log(key + commands[key].type);
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
    notch: notch,
    caCourt: caCourt,
	dice: dice,
    huh: huh
}