var express = require("express"),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	meetupsController = require("./server/controller/meetups-controller.js");

app.use(bodyParser());

app.use("/js",express.static(__dirname + "/client/js")); 

mongoose.connect("mongodb://localhost:27017/mean-demo");

app.get("/",function(req,res){
	res.sendfile(__dirname + '/client/views/index.html');
});

// REST API
app.get("/api/meetups", meetupsController.list);
app.post("/api/meetups", meetupsController.create);

app.listen(3000,function(){
	console.log("I am listening at port 3000");
});