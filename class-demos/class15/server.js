const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

let allData = [];

// home page
app.get('/', (request, response) => {
    response.render('home.njk')
})

// form PSGE
app.get('/form', (request, response) => {
    response.render('form.njk')
})

app.get('/view-all', (request, response) => {
    response.render('view-all.njk', { messagesArrayFromServer: allData })
})

// FORM SUBMITE HERWE
app.post('/send-message', (request, response) => {
    allData.push(request.body)
    response.redirect('/view-all')
})



app.listen(8080, () => {
    console.log('http://localhost:8080')
})