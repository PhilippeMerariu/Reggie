module.exports = {
    main: (channel, modifiers) => {
        channel.send('notch bitch');
    },
    notchable: (msg) => {
        return (message.includes("i will") || message.includes("im gonna") || message.includes("i'm gonna") ) && !message.includes("no notch")
    },
    name: 'notch',
    type: 'passive'
}