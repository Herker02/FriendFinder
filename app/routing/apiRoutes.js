
var friendList = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendList);
  });

  app.post("/api/friends", function(req, res) {

    
      var userPoints = 0;
      for(var i = 0; i < req.body.questionData.length; i++){
        userPoints += parseInt(req.body.questionData[i]);
      }

      var matchPoints = 0;
      var comparisonArray = [];

      for(var i = 0; i < friendList.length; i++){

        pointsArray = friendList[i].questionData;
        for(var j = 0; j < pointsArray.length; j++){
          matchPoints += parseInt(pointsArray[j]);
        }

        var compare = Math.abs(userPoints - matchPoints);

        console.log("Difference between " + req.body.name + " and potential match "+ friendList[i].name+ " is "+ compare + " points");

        comparisonArray.push(compare);
    
        matchPoints = 0;
      }

    
      Array.min = function(array){
          return Math.min.apply( Math, array );
      };
      var minimum = Array.min(comparisonArray);


    
      var indexNum = comparisonArray.indexOf(minimum);


      res.json(friendList[indexNum]);
      friendList.push(req.body);
  });
};