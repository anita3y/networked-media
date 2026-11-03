require('dotenv').config()
const m = require('masto')

// set up masto variable to connect to 1. url (our mastodon server), 2. our token (password to acc)
const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});

// make request to mastodon server - wait, external request happens before everything
async function makeStatus(text) {
	const status = await masto.v1.statuses.create({
		status: text, // pass through status 
		visibility: 'private', // public or priv?
	});
}

setInterval(() => {
	let emoji = ['😭', '🤩', '💖'];

    // randomely generate number in arr list
	let rand = Math.floor(Math.random() * emoji.length);

    // select emoji from array using random index
	let post = emoji[rand];

    // make status with emoji
	makeStatus(post);
}, 5000);   // happen every 5 secs
