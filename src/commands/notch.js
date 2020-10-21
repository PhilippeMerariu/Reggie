module.exports = {
    main: (channel, modifiers) => {
        channel.send('notch bitch');
    },
    notchable: (msg) => {
        return (msg.includes("i will") || msg.includes("im gonna") || msg.includes("i'm gonna") ) && !msg.includes("no notch")
    },
    name: 'notch',
    type: 'passive',
	desc: ' - i will (or similar) \t--> replies with \'notch bitch\' unless message includes \'no notch\''
}