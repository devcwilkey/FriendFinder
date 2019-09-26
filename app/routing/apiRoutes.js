// Used to load the Friends JS which exports a
// friendArray that is used to 'Store' our data
// while our Server is running
var friendData = require("../data/friends");

module.exports = function(app) {
    // Get route used to reply with the current friendData
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // Post route used to eval Friend and add you to the friendData
    app.post("/api/friends", function(req, res) {
        possibleFriend = {Index: null,
            Score: null};
        needsFriend = req.body;
        for(i=0;i < friendData.length; i++){
            tempFriend = {
                Index: i,
                Score: 0
            };
            for(j=0;j < needsFriend.scores.length; j++){
                tempScore = Math.abs(needsFriend.scores[j] - friendData[i].scores[j]);
                tempFriend.Score = tempFriend.Score + tempScore;
            }
            console.log({iIndex: i, possibleFriendScore: possibleFriend.Score, tempFriendScore: tempFriend.Score});
            if(possibleFriend.Score === null || tempFriend.Score < possibleFriend.Score){
                possibleFriend.Index = tempFriend.Index;
                possibleFriend.Score = tempFriend.Score;
            }
        }
        friendData.push(req.body);
        res.json({
                firstName: friendData[possibleFriend.Index].firstName,
                lastName: friendData[possibleFriend.Index].lastName
        });
    });
};