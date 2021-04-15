var express         =  require("express");
var app             =  express();
var bodyparser      =  require("body-parser");
var request         =  require("request");
var mongoose        =  require("mongoose");
var flash           =  require("connect-flash");
var session         =  require("express-session");
var touristplace    =  require("./models/touristplace");
var experience      =  require("./models/experience");
var seedDB          =  require('./seed');
var passport        =  require("passport");
var localstrategy   =  require("passport-local");
var user            =  require("./models/user");
//var PORT            =  process.env.PORT||3000

// app.use(session(
// {
// 	cookie: { maxAge: 60000 },
// 	secret: 'woot',
// 	resave: false,
// 	saveUninitialized: false
// }));


app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
mongoose.set('useUnifiedTopology',true);
mongoose.connect("mongodb+srv://sammy:1htramaS@tour4good.tdpay.mongodb.net/touristplace",{useNewUrlParser: true,
    useUnifiedTopology: true});
// mongoose.connect(url, {
// 	useNewUrlParser: true,
// 	useCreateIndex: true
// }).then(() => {
// 	console.log('Connected to DB!');
// }).catch(err => {
// 	console.log("ERROR:", err.message);
// });
app.use(express.static(__dirname + "/public"));
app.use(flash());
//seedDB();


// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Once again Rusty wins cutest dog!",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(function(req, res, next) {
	res.locals.currentuser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});


// app.use(function(req, res, next) {
// 	res.locals.currentuser = req.user;
// 	next();
// });



//HOME PAGE ROUTE
app.get("/",function(req,res){
	res.render("home");
});

//RESULTS SHOWING ROUTE
app.get("/result",function(req,res){
	touristplace.find({},function(err,touristplace){
		if(err){
			console.log(err);
		}
		else{
			res.render("results",{touristplace : touristplace});
		}
	});
});

// PHOTOS OF ALL PLACES OF A PARTICULAR CITY ROUTE
app.get("/result/:id",function(req,res){
		var city = req.params.id;
		touristplace.find({location : city},function(err,data){
			if(err) {
				console.log(err);
			} else {
				res.render("cities", {data: data});
			}

		});
 });

// ROUTE FOR A PLACE
app.get("/result/:id1/:id2",function(req,res){
	var city  = req.params.id1;
	var place = req.params.id2;

	touristplace.find({name : place, location : city}).populate("experiences").exec(function(err,data){
		if(err){
			console.log(err);
		}
		else{
			res.render("magnify",{data : data});
		}
	});
});

// app.get("/testing",function(req,res){
// 	var city = "Jaipur";
// 	res.render("magnify");
// 		// touristplace.find({location : city},function(err,data){
// 		// 	if(err) {
// 		// 		console.log(err);
// 		// 	} else {
// 		// 		res.render("magnify", {data: data});
// 		// 	}

// 		// });

// 	// res.render("testing");

// })

// ================= //
// EXPERIENCES ROUTE //
// ================= //

// ROUTE FOR SHOWING THE THE EXPERIENCE PAGE
app.get("/result/:id/experience/new",isLoggedIn,function(req,res){

	touristplace.findById(req.params.id,function(err,data){
		if(err){
			console.log(err);
		}
		else{
			// res.send(data);
			res.render("experience_new",{data : data});
		}
	})
});



//POST ROUTE FOR THE EXPERIENCE PAGE
app.post("/result/:id/experience",isLoggedIn,function(req,res){


	touristplace.findById(req.params.id,function(err,touristplace){
		if(err){
			console.log(err);
			res.redirect("/result/"+touristplace.location+"/"+touristplace.name);
		} else {
			experience.create(req.body.experience, function(err,experience){
				if(err) {
					console.log(err);
				} else {

					experience.author = req.user.username;
					experience.save();

					touristplace.experiences.push(experience);
					touristplace.save();

					res.redirect("/result/"+touristplace.location+"/"+touristplace.name);
				}
			});
		}
	});
});

// ============ //
// AUTH ROUTES  //
// ============ //

//REGISTER ROUTE
app.get("/user",function(req,res){
	res.render("login");
});



// POST ROUTE FOR LOGIN
app.post("/login",passport.authenticate("local",
	{
		successRedirect: "/result",
		failureRedirect: "/user"
	}),function(req,res){
});

// POST ROUTE FOR REGISTER
app.post("/register",function(req,res){
	var newuser = new user({username: req.body.username});
	user.register(newuser , req.body.password, function(err,user){
		if(err) {
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/result");
		});
	});
});

// LOGOUT ROUTE
app.get("/logout",isLoggedIn,function(req,res) {
	req.logout();
	res.redirect("/result");
});

// ISLOGGEDIN
function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}




// ================= //
//   ABOUT ROUTE 	 //
// ================= //

app.get("/about",function(req,res){
	res.render("about");
});



//PORT LISTENING ROUTE

// app.listen(3000,function(req,res){
// 	console.log("Server is running");
// });

let port=process.env.PORT;
if(port==null||port==""){
  port=3000;
}


app.listen(port, function() {
  console.log("Server started successfully");
}); 



// app.listen(PORT, process.env.IP, function(){
//    console.log("Server Has Started!");
// });
