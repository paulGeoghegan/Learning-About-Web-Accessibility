const express = require("express");

//Sets up express server
const app = express();
app.use(express.static(__dirname + "/public"));

//Tells the server what port to listen on
app.listen(3000, function() {
	console.log('Server running on port 3000');
});


//This serves the home page
app.get("/",function(req,res) {
	res.sendFile(__dirname+"/public/home/home.html");
});

//This serves the learning page
app.get("/learning",function(req,res) {
	res.sendFile(__dirname+"/public/learning/learning.html");
});

//This serves the intro lesson
app.get("/learning/intro",function(req,res) {
	res.sendFile(__dirname+"/public/learning/lessons/intro.html");
});

//This serves the buttons lesson
app.get("/learning/buttons",function(req,res) {
	res.sendFile(__dirname+"/public/learning/lessons/buttons.html");
});

//This serves the images lesson
app.get("/learning/images", function(req,res) {
	res.sendFile(__dirname+"/public/learning/lessons/images.html");
});

//This serves the skip to content lesson
app.get("/learning/skipToContent",function(req,res) {
	res.sendFile(__dirname+"/public/learning/lessons/skipToContent.html");
});