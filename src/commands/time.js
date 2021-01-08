module.exports = {
    main: (channel, db, user, modifiers) => {
		let time = Math.floor(Math.random() * 24) + 1; //randomize time [1-24]
        db.collection('Time').doc('LogTime').set({
			timestamp: time,
			username: user.toString()
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