const beer = require('./commands/beer');
const drink = require('./commands/drink');
const flops = require('./commands/flops');
const notch = require('./commands/notch');
const caCourt = require('./commands/caCourt');
const dice = require('./commands/dice');
const huh = require('./commands/huh');

exports.commands = {
    beer: beer,
    drink: drink,
    flops: flops,
    notch: notch,
    caCourt: caCourt,
	dice: dice,
    huh: huh
}