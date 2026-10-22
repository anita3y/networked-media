const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");

const app = express();

//all css, frontend JS go in public folder

app.use(express.static("public"));
// need this line for request.body
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");