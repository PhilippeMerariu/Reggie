module.exports = {
    main: (channel, db, modifiers) => {
		let time = Math.floor(Math.random() * 24) + 1; //randomize time [1-24]
		let user = modifiers[0];
		if (user == undefined){
			user = '';
		}
        db.collection('Time').doc('LogTime').set({
			timestamp: time,
			username: user
		})
		.then(() => {
			console.log("timestamp added");
			channel.send("Hey there, I added the timestamp to the database!" + user);
		})
		.catch(err => {
			console.log("error: " + err);
		})
    },
    name: 'timee',
    type: 'passive',
	desc: ' - r!time \t--> logs time in database'
}