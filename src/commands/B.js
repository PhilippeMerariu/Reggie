module.exports = {
    main: (channel, args) => {
        let phrase = args.join(' ');

        if (phrase === '')
            channel.send(':b:');
        else {
            phrase = phrase.trim();
            let bLess = phrase.split(new RegExp('[bB]'));
            phrase = bLess.join(':b:');
            channel.send(phrase);
        }
    },

    name: 'b',
    type: 'active',
    desc: ' - r!B beer \t--> \':B:eer\''
}