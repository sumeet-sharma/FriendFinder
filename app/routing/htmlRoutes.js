// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.
var path = require('path');

module.exports = function (app) {
    //Routes to the survey.html
    app.get(`/survey`, function (req, res) {
        res.sendFile(path.join(__dirname + "../public/survey.html"));
    });
    //ROutes to the home page
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });
    //for any unexpected inputs 
    app.get('/:unkown', function (req, res) {
        res.sendFile(path.join(__dirName + '/../public/home.html'))
    });

};