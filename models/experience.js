var mongoose = require("mongoose");

var experienceSchema = mongoose.Schema({
    text: String,
	image: String,
    author: String
});

module.exports = mongoose.model("experience", experienceSchema);