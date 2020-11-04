const beer = require('./commands/beer')
const drink = require('./commands/drink')
const flops = require('./commands/flops')
const notch = require('./commands/notch')
const beet = require('./commands/beet')
const B = require('./commands/B')
const caCourt = require('./commands/caCourt')
const dice = require('./commands/dice')
const huh = require('./commands/huh')
const wishluck = require('./commands/wishluck')
const beetlejuice = require('./commands/beetlejuice');
const time = require('./commands/time')

exports.commands = {
    help: (channel, helpBox, modifiers) => {
        helpBox.setTitle('Help')

        var description = ''
        for (const key in commands) {
            //console.log(key + commands[key].type);
            if (commands[key].type == 'active') {
                description += commands[key].desc + '\n'
            }
        }
        helpBox.setDescription(description)

        channel.send(helpBox)
    },
    beer: beer,
    drink: drink,
    flops: flops,
    beet: beet,
    B: B,
    notch: notch,
    caCourt: caCourt,
    dice: dice,
    huh: huh,
    wishluck: wishluck,
    beetlejuice: beetlejuice
	time: time
}
