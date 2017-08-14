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
      //changes array of string numbers to values
      newFriend.scores = newFriend.scores.map(Number);
      
      //calculates absolute differences between friends' scores
      function calcBestMatch(){
        var arrDiffs = [];
        for (var i = 0; i < arrFriends.length; i++) {
          var friendDiff = 0;
          for (var j = 0; j < arrFriends[i].scores.length; j++) {
            var scoreDiff = arrFriends[i].scores[j]-newFriend.scores[j];
            friendDiff += Math.abs(scoreDiff);
          };
          //adds each absolute difference to an array
          arrDiffs.push(friendDiff);
        };  
    //finds position of friend with minimum difference
    var minIndex = arrDiffs.indexOf(Math.min(...arrDiffs));

    //adds new friend to friend array
    arrFriends.push(newFriend);

    //returns position of friend with minimum difference
    return res.json(arrFriends[minIndex]);
    };
  calcBestMatch();
  });
}