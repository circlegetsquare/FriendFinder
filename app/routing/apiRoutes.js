// API Routes
// =============================================================

var friends = require("../data/friends.js");


module.exports = function(app) {
  //return the friends array
  app.get("/api/friends", function(req, res){
    res.json(reservations);
  });

  //adds incoming survey data
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newcharacter);
    
    friends.push(newFriend);
  });
};
