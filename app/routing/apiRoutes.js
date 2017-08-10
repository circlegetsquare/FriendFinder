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
      
      //calculates absolute differences between friends scores and returns postition of minimum difference
      function calcBestMatch(){
        var arrDiffs = [];
        for (var i = 0; i < arrFriends.length; i++) {
          var friendDiff = 0;
          for (var j = 0; j < arrFriends[i].scores.length; j++) {
            var scoreDiff = arrFriends[i].scores[j]-newFriend.scores[j];
            friendDiff += Math.abs(scoreDiff);
          };
          arrDiffs.push(friendDiff);
          //console.log(arrDiffs);
          //console.log("Min array val" + Math.min(...arrDiffs));
        };  

    var minIndex = arrDiffs.indexOf(Math.min(...arrDiffs));
    //console.log("min Index" + minIndex);

    //adds new friend to friend array
    arrFriends.push(newFriend);
    //console.log(arrFriends);

    //returns position of friend with minimum difference
    return res.json(arrFriends[minIndex]);
    };
  calcBestMatch();
  });
}