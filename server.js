// Your `server.js` file should require the basic 
// npm packages we've used in class: `express`, `body-parser` and `path`.


//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express App set up
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './app/public')));

// Modules for API and HTML routes
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var apiRoutes = require("./app/routing/apiRoutes.js")(app);

//Server listening for requests.
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});