// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all 
//    * possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//    * This route will also be used to handle the compatibility logic.


//require js file as module to pull friendsArray
var friendsArray = require('../data/friends.js')


var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get(`/api/friends`, function (req, res) {
        console.log(friends);
    });


    //POST route for "click submit event handler from survery.html"
    app.post('/api/friends', function (req, res) {
        //pull information from the form
        var newFriend = req.body;
        var scoresDifferenceArray = [];

        //Nested for loop within a for loop to find the difference in scores between new user and other user in friends.js 
        for (var i = 0; i < friendsArray.length; i++) {
            scoreDifference = 0;
            for (var j = 0; j < newFriend.length; j++) {
                scoreDifference += Math.abs(parseInt(FriendsArray.scores[i]) - parsInt(newFriend[j]))
            }
            //After looping through all friends and their associated scores, push that specific friend index and their difference into a comparison array.
            //It's important to push objects into an array so we can hold keys and values that can be referenced later.
            scoresDifferenceArray.push(
                {
                    friendIndex: i,
                    compatability: scoreDifference

                }
            );
        }
        // After the comparison array is built, we use this sort() method to sort the objects in the array according to compatability numbers
        // i.e. lower compatability (which actually means they have less difference) numbers go first then higher compatability numbers (the most difference in scores) go last
        scoresDifferenceArray.sort(function (a, b) {
            return a.compatability - b.compatability;
        });

        // Now that the comparison array has been reorganized, we know that the first item in the array has the lower compatability number.
        // We can then reference the first ordered object in the comparison array and check the friendIndex key for a value.
        // This value will align with the allFriends array with all the stored friends information.
        var bestMatchIndex = scoresDifferenceArray[0].friendsIndex;

        //Console logs to validate information
        console.log("bestMatchIndex: " + bestMatchIndex)
        var bestMatchFriend = friendsArray[bestMatchIndex]

        console.log("bestMatchFriend:\nName: " + bestMatchFriend.name + "\nLink: " + bestMatchFriend.photo + "\nScores: " + bestMatchFriend.scores)
        console.log(scoresDifferenceArray)

        //returns object information to survey.html
        res.json(bestMatchFriend)

        //add the new users info to friendsArray.
        allFriends.psuh(req.body);
    });
};