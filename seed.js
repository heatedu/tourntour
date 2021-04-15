var mongoose      = require("mongoose");
var touristplace  = require("./models/touristplace");
var experience    = require("./models/experience");

var data=[
	{
		name     : "Dubai Global Village",
 		image    : "https://rajamoneytravel.files.wordpress.com/2017/02/global-village-dubai.jpg?w=300",
 		location : "Dubass"
	},
	{
		name     : "Dubai Global Village",
 		image    : "https://rajamoneytravel.files.wordpress.com/2017/02/global-village-dubai.jpg?w=300",
 		location : "Dubais"
	},
	{
		name     : "Dubai Global Village",
 		image    : "https://rajamoneytravel.files.wordpress.com/2017/02/global-village-dubai.jpg?w=300",
 		location : "Dubias"
	},
	{
		name : "The Golden Temple",
		image : "https://i.pinimg.com/originals/5b/86/09/5b860912c75d0d651124d5d5c43b0eae.jpg",
		location : "Amritsar"
	},
	{
		name : "Jallianwala Bagh",
		image : "https://www.planetware.com/wpimages/2019/09/india-amritsar-top-attractions-jallianwala-bagh.jpg",
		location : "Amritsar"
	},
	{
		name : "Baba Atal Tower",
		image : "https://www.planetware.com/wpimages/2019/09/india-amritsar-top-attractions-baba-atal-tower.jpg",
		location : "Amritsar"
	},
	{
		name : "Ram Bagh Garden",
		image : "http://4.bp.blogspot.com/-cjmH4kTMmMc/TVowXQplCJI/AAAAAAAAB8E/miRzBRSlpHs/s320/rambagh+Palce.jpg",
		location : "Amritsar"
	},
	{
		name : "Shri Durgiana Mandir",
		image : "https://www.planetware.com/wpimages/2019/09/india-amritsar-top-attractions-shri-durgiana-mandir.jpg",
		location : "Amritsar"
	},
	{
		name : "Khalsa College",
		image : "https://www.planetware.com/wpimages/2019/09/india-amritsar-top-attractions-khalsa-college.jpg",
		location : "Amritsar"
	},
	{
		name: "City Palace",
		image: "http://www.transindiatravels.com/wp-content/uploads/city-palace-jaipur-2.jpg",
		location: "Jaipur"
	},
	{
		name: "Amber Fort",
		image: "http://www.transindiatravels.com/wp-content/uploads/amer-fort2.jpg",
		location: "Jaipur"
	},
	{
		name: "Nahargarh Fort",
		image: "http://www.transindiatravels.com/wp-content/uploads/jaipur2-1.jpg",
		location: "Jaipur"
	},
	{
		name: "Jaigarh Fort",
		image: "http://www.transindiatravels.com/wp-content/uploads/jaigarh-fort-2.jpg",
		location: "Jaipur"
	},
	{
		name: "Hawa Mahal",
		image: "http://www.transindiatravels.com/wp-content/uploads/hawa-mahal-4.jpg",
		location: "Jaipur"
	},
	{
		name: "Jal Mahal",
		image: "http://www.transindiatravels.com/wp-content/uploads/jal-mahal-1.jpg",
		location: "Jaipur"
	},
	{
		name: "Jantar Mantar Observatory",
		image: "http://www.transindiatravels.com/wp-content/uploads/jantar-mantar-observatory-1.jpg",
		location: "Jaipur"
	},
	{
		name: "Albert Hall Museum",
		image: "http://www.transindiatravels.com/wp-content/uploads/albert-hall-museum.jpg",
		location: "Jaipur"
	},
	{
		name: "Galtaji",
		image: "http://www.transindiatravels.com/wp-content/uploads/galtaji.jpg",
		location: "Jaipur"
	},
	{
		name: "Birla Temple",
		image: "http://www.transindiatravels.com/wp-content/uploads/birla-mandir-3.jpg",
		location: "Jaipur"
	},
	{
		name : "Mysore Palace", 
		image : "https://images.thrillophilia.com/image/upload/s--1bK5NRtr-			-/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/087/581/original/1568097723_shutterstock_1325348915.jpg.jpg",
		location : "Mysore"
	},
	{
		name : "Lalitha Mahal", 
		image : "https://images.thrillophilia.com/image/upload/s--_SRWcNQl--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/087/611/original/1465801070_Lalitha_mahal_mysore_ml_wiki.JPG.jpg",
		location : "Mysore"
	},
	{
		name : "Brindavan Gardens", 
		image : "https://images.thrillophilia.com/image/upload/s--CTjxu8iU--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/087/661/original/1568456428_shutterstock_162648665.jpg.jpg",
		location : "Mysore"
	},
	{
		name : "GRS Fantasy Park", 
		image : "https://img.traveltriangle.com/attachments/pictures/890003/original/grs_fantasy_park.jpg?tr=w-1291,h-332",
		location : "Mysore"
	},
	{
		name : "Lingambudhi Lake", 
		image : "https://images.thrillophilia.com/image/upload/s--Th44XqpF--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/170/925/original/1568198464_shutterstock_1209353629.jpg.jpg",
		location : "Mysore"
	},
	{
		name : "Dr. Ambedkar's Park", 
		image : "https://images.thrillophilia.com/image/upload/s--XvYYVnGn--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/170/924/original/1568198560_148600_4737c745.jpg.jpg",
		location : "Mysore"
	},
	{
		name:"Gateway of India",
		image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Gateway-of-India-1.jpg",
		location:"Bombay"

	},
	{
		name:"Juhu Beach",
		image:"https://media.lonelyplanet.in/wp-content/uploads/2019/12/shutterstock_1047237982-juhu-beach-1280x525.jpg",
		location:"Bombay"

	},
	{
		name:"Marine Drive",
		image:"https://cdn.wrytin.com/images/wrytup/r/1024/48611-marine-drive-in-mumbai-2560x1600-beach-wallpaper-jwupsd51.jpeg",
		location:"Bombay"

	},
	{
		name:"Chhatrapati Shivaji Terminus" ,
		image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Chhatrapati-Shivaji-Terminus.jpg",
		location:"Bombay"

	},
	{
		name:"Siddhivinayak Temple",
		image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Siddhivinayak-Temple.jpg",
		location:"Bombay"

	},
	{
		name:"Nehru Center",
		image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Nehru-Centre.jpg",
		location:"Bombay"

	},
	{
		name:"Kidzania",
		image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Kidzania.jpg",
		location:"Bombay"

	},
	{
		name:"Taraporewala Aquarium",
		image:"https://mumbaitourism.travel/images/places-to-visit/headers/taraporevala-aquarium-mumbai-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
		location:"Bombay"
	},
	{
		name:"Hanging Gardens",
		image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mumbai_03-2016_26_Hanging_Garden.jpg/330px-Mumbai_03-2016_26_Hanging_Garden.jpg",
		location:"Bombay"
	},
	{
		name:"Colaba Causeway",
		image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Colaba-Causeway-1.jpg",
		location:"Bombay"
	},
	{
		name:"Snow World",
		image:"https://www.holidify.com/images/cmsuploads/compressed/image_1_20181113184551_20181113184929.jpg",
		location:"Bombay"
	},
	{
	name: "City Palace",
	image: "https://www.transindiatravels.com/wp-content/uploads/udaipur2-1.jpg",
	location: "Udaipur"
	},
	{
		name: "Lake Pichola",
		image: "https://www.transindiatravels.com/wp-content/uploads/lake-pichola-1.jpg",
		location: "Udaipur"
	},
	{
		name: "Lake Palace",
		image: "https://www.transindiatravels.com/wp-content/uploads/lake-palace-2.jpg",
		location: "Udaipur"
	},
	{
		name: "Lake Garden Palace",
		image: "https://www.transindiatravels.com/wp-content/uploads/jagmandir-island-palace-1.jpg",
		location: "Udaipur"
	},
	{
		name: "Vintage Car Museum",
		image: "https://www.transindiatravels.com/wp-content/uploads/vintage-car-museum-udaipur.jpg",
		location: "Udaipur"
	},
	{
		name: "Bagore Ki Haveli",
		image: "https://www.transindiatravels.com/wp-content/uploads/bagore-ki-haveli-2.jpg",
		location: "Udaipur"
	},
	{
		name: "Saheliyon Ki Bari",
		image: "https://www.transindiatravels.com/wp-content/uploads/saheliyon-ki-bari-udaipur.jpg",
		location: "Udaipur"
	},
	{
		name: "Jagdish Temple",
		image: "https://www.transindiatravels.com/wp-content/uploads/jagdish-temple-udaipur.jpg",
		location: "Udaipur"
	},
	{
		name: "Shilpgram",
		image: "https://www.transindiatravels.com/wp-content/uploads/shilpgram-udaipur.jpg",
		location: "Udaipur"
	},
	{
		name: "Moti Magri",
		image: "https://www.transindiatravels.com/wp-content/uploads/moti-magri.jpg",
		location: "Udaipur"
	}
];





function seedDB(){
	touristplace.deleteMany({},function(err){
		if(err){
			console.log(err)
		}
		else{
			console.log("removed tourist places");
			data.forEach(function(seed){
 				touristplace.create(seed,function(err, touristplace) {
 					if(err){
 						console.log(err)
 					} else {
 						console.log("added a touristplace");
						
						
					}
 				});
 			});
		}
	});
}


module.exports = seedDB;