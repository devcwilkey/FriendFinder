// Used to load the Friends JS which exports a
// friendArray that is used to 'Store' our data
// while our Server is running
var friendData = require("../data/friends");

module.exports = function(app) {
    // Get route used to reply with the current friendData
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // Post route used to add a new friend from the Survey
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.json(true);
    });

    // Empty out the friendData Array
    app.post("/api/clear", function(req, res) {
        friendData.length = 0;
        res.json({ ok: true });
    });
}