// set up 
const express = require('express');
const nunjucks = require('nunjucks')

// create app
const app = express();

// setting up for server
app.use(express.static('public'));
// to read form datat with request.body
app.use(express.urlencoded({extended: true}));
//connect nunjuck to express
// class 14
nunjucks.configure('views', {
    autoescape: true,
    express: app,
});
app.set("view engine", "njk");

// storing flowers
let allFlowers = [];
// routes
// home route
app.get('/', (request, response) => {
    response.render("home.njk", { flowers: allFlowers});
});

// here, when form is submitted:
app.post("/plant", (request,response) => {
    // get time/moment somone platns
    let date = new Date()
    let seconds = date.getSeconds()

    // pick flower based on second planted
    if (seconds < 20) {
        request.body.type = "rose";    
    } else if (seconds < 40) {
    request.body.type = "daisy";
    } else {
    request.body.type = "bud";
    }
    
  //request.body holds the data
    allFlowers.push(request.body);
    // then send then back to home page
    response.redirect("/")
})

// listen
app.listen(8080, () => {
    console.log("localhost:8080");
})


