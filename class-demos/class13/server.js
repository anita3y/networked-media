// importing the express library to use it as our server
// naming conventions usually name the variable the library name
const express = require('express');

// initialize our application using express
const app = express();

// "middleware"
// this is settings that our app needs to know about our server

// allows us to access front-end with GET requests by default
// serves our front-end html that exists in the public folder
app.use(express.static('public'));
// allows us to access the body of a POST request
app.use(express.urlencoded({ extended: true }));

// ROUTES
// syntax for GET: app.get(route,anonymous funciton)
app.get('/', (request, response)=>{
    console.log("recieved a request at / route!")
    // ALEASY NEED RESPONSE or page will continuoulsy load
    reponse.send('this is <em>some</em> data!!!')
})
// GET /first-server, callback function
app.get('/first-server', (request, response)=>{
    // send info to the client that makes a request to /first-server
    response.send('this is my first server!')
})

app.post('/form-upload', (request, response)=>{
    //consol log in server js only shows in termins 
    console.log(request.body)
    // send client to different route
    response.redirect('/')
})

// LAST
// PORT, callback function
// to start our server: node server.js in terminal
app.listen(8080, ()=>{
    console.log('http://127.0.0.1:8080/')
})