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

//This server the images lesson
app.get("/learning/images", function(req,res) {
	res.sendFile(__dirname+"/public/learning/lessons/images.html");
});