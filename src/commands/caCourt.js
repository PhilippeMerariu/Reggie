module.exports = {
    court: (channel, modifiers) => {
        channel.send("?A COURT");
    },
    caMarche: (msg) => {
        return (msg === "ca marche pas" || msg === "?a marche pas");
    },
    name: 'notch',
    type: 'passive',
	desc: ' - ca marche pas \t--> replies with \'CA COURT\''
}