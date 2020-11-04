module.exports = {
    main: (channel, db, modifiers) => {
        db.collection('Time').doc('LogTime').set({
			timestamp: '6:00pm'	
		})
		.then(() => {
			console.log("timestamp added");
			channel.send("Hey there, I added the timestamp!")
		})
		.catch(err => {
			console.log("error: " + err);
		})
    },
    name: 'time',
    type: 'passive',
	desc: ' - r!time \t--> logs time in database'
}