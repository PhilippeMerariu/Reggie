module.exports = {
    main: (channel, modifiers) => {
        let phrase = modifiers.join(' ');
        phrase = phrase.trim();
        let bLess = phrase.split(new RegExp('[bB]'));
        phrase = bLess.join(':b:');
        channel.send(phrase);
    },

    name: 'B',
    type: 'active',
    desc: ' - r!B beer \t--> \':B:eer\''
}