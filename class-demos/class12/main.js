const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let receivedData = [];

// This is the endpoint which receives the form's submitted data.
app.post("/submit", (request, response) => {
  // Since our form's method is POST, we use app.get to handle the request.
  // Our form's action attribute is "/submit", so
  // the endpoint we create is called "/submit".

  // request.query contains the data that was submitted in the form.
  console.log(request.body);

  // The "name" attribute on items inside of the form serves as the key inside of the request.query object.
  // For example, our <textarea> element which holds the message has a name attribute of "message",
  // So we can access its value (the text entered by the user) through "request.body.message".
  console.log(request.body.message);

  // We add all of our data to an array, so we can also display it through the /messages endpoint.
  receivedData.push({
    user: request.body.username,
    message: request.body.message,
  });

  // We add a personalized follow-up message.
  response.send("Thank you for your submission, " + request.body.username);
});

app.listen(5001, () => {
  console.log("server is running");
});