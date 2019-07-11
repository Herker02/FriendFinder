var friends = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends",function(req,res){
        res.JSON(friends);
    });

    app.post("/api/friends", function(req,res){
        if (friends.length =+ 1){
            friends.push(req.body);
            res.JSON(true);
        } else{
            res.JSON(false);
        }
    });
}