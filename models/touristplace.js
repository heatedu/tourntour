var mongoose = require("mongoose");

var touristplaceSchema = new mongoose.Schema({	

	name       : String,
	image      : String,
	location   : String,
	experiences: [
		{
			type : mongoose.Schema.Types.ObjectId,
			ref  : "experience"
		}
	]
});

const touristplace = mongoose.model('touristplace',touristplaceSchema);

module.exports  =  touristplace;