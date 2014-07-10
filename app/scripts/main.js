'use strict';

Parse.initialize('EqWIGNej8qO65jxtkm5clG2mPEdVhCvj0EvlF5El', '6SYAg7C95UgX6fLaY5vjDJnxyAFXn58q7ezl0u13');

var User = Parse.Object.extend ({
	className: 'User'
});

var UserCollection = Parse.Collection.extend({
    model: User
});

var collection = new UserCollection();

///////////////Signup Button

$('.signupButton').click(function() {
	var user = new Parse.User();

	var username = 	$('#userName').val();
	var password = 	$('#password').val();
	var email 	 = 	$('#email').val();

	user.set({
	'username' :  username,
	'password' :  password,
	'email'    :  email
	});

	user.signUp(null, {
  	success: function(user) {
	window.location.replace("http://localhost:9000/home.html");
  	},
  	error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  	}
	});

	console.log('It Worked!');

});

///////////////Login Button

$('.loginButton').click(function() {
	var username = 	$('#userName').val();
	var password = 	$('#password').val();
	Parse.User.logIn(username, password, {
  	success: function(user) {
	window.location.replace("http://localhost:9000/home.html")  	},
  	error: function(user, error) {
    // The login failed. Check error to see why.
  	}

});
	console.log('You Logged In');

});

///////////////Logout Button

$('.logoutButton').click(function() {
	Parse.User.logOut();
	window.location.replace("http://localhost:9000/index.html");
	console.log('You Logged Out');
});

///////////////Want To Go Relation

var Stadium = Parse.Object.extend ({
	className: 'Stadium'
});

var StadiumCollection = Parse.Collection.extend({
    model: Stadium
});

var collection = new StadiumCollection();

// $('.diamonbacksWTG').click(function() {

// 	var stadium = Stadium[0];

// 	var user = Parse.User.current();
// 	var relation = user.relation("WTGstadiums");
// 	relation.add(Stadium);
// 	user.save();
	
// 	console.log('You Added It');
// });

//////////////// Been There Relation

// var collection = new StadiumCollection();
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
$('.diamonbacksBT').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("OuRc4iLiJR", {
	  success: function(stadium) {
		// var Arizona = stadium	    // The object was retrieved successfully.
		var user = Parse.User.current();
		var relation = user.relation("BTstadiums");
			console.log(stadium);

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	    // The object was not retrieved successfully.
	    // error is a Parse.Error with an error code and description.
	  }

	  	

	});

	
	
	console.log('You Added It');
});
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
// $('.diamonbacksBT').click(function() {
// 	var user = Parse.User.current();
// 	user.put("parent", Stadium.createWithoutData("Stadium", "OuRc4iLiJR"));


// 	console.log('You Added It');


// });
///////////////////////////
//////////////////////////
///////////////////////////
//////////////////////////
// $('.diamonbacksBT').click(function() {

// 	ParseUser user = ParseUser.getCurrentUser();
// 	ParseRelation<ParseObject> relation = user.getRelation("BTstadiums");
// 	relation.add(post);
// 	user.saveInBackground();


	
	
// 	console.log('You Added It');
// });