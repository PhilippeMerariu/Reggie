module.exports = {
    court: (channel, modifiers) => {
        channel.send("ÇA COURT");
    },
    caMarche: (msg) => {
        return (msg === "ca marche pas" || msg === "ça marche pas");
    },
    name: 'notch',
    type: 'passive',
	desc: ' - ca marche pas \t--> replies with \'CA COURT\''
}