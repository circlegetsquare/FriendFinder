// API Routes
// =============================================================

var arrFriends = require("../data/friends.js");

module.exports = function(app) {
  
  //return the friends array
  app.get("/api/friends", function(req, res){
    res.json(arrFriends);
  });

  //adds incoming survey data
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(arrFriends);
    newFriend.scores = newFriend.scores.map(Number);
    
    console.log(newFriend);
    arrFriends.push(newFriend);
    res.json(newFriend);   
  });
};
