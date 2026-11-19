// this builds off of class-18-demo
// we are adding the fetch request in our interval function

require('dotenv').config()

const m = require('masto')

const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io/',
    accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
    const status = await masto.v1.statuses.create({
        status: text,
        // TODO: change visability to public when project ready to run
        visibility: 'public',
    });
}

setInterval(async () => {
    let date = new Date();
    let hour = date.getHours();

    // sleep btw 3am and 7am
    // if time = more then 3 and less than 7
    if (hour >= 8 && hour < 12) {
        console.log("bot is sleeping");
    } else {
    // add api request
    // heres  Elena's droplet IP
        let url = 'http://143.244.149.111:6003/get-data';

        let response = await fetch(url)
        let json = await response.json()
        
        // select item, manipulat from bot
        let rand = Math.floor(Math.random() * json.length);
        let post = "@elenafff skipped " + json[rand].occasion + ". said: \"" + json[rand].excuse + "\". actually: " + json[rand].truth;
        
        // make our status
        makeStatus(post);
    }
  
}, 1200000);
