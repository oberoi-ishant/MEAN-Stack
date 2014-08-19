var Meetup = require("../models/meetup.js");

module.exports.create = function (req,res) {
	var meetup = new Meetup(req.body);
	meetup.save(function(err,results){
		res.json(results);
	});
}

module.exports.list = function (req,res) {
	Meetup.find(function(err,results){
		res.json(results);
	});
}