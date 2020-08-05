// for creating the server

// import dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// create the app
const app = express();
const PORT = process.env.PORT || 8080;

// send public file
app.use(express.static("./public"));

// use handlebars templates
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// add routes
app.use(require("./controllers/html-routes.js"));
app.use(require("./controllers/api-routes.js"));

// listen
app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});