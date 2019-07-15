var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

var PORT = process.env.PORT || 8080;

var app = express();

var jsonParser = bodyParser.json();
var urlencoderParser = bodyParser.urlencoded({extended: false});


app.use(bodyParser.json({type: "application/*+json"}));
app.use(bodyParser.raw({type: "application/vnd/custom-type"}));
app.use(bodyParser.text({type: "text/html"}));

require("./app/public/home.html")(app);

// app.use(express.json());





app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
