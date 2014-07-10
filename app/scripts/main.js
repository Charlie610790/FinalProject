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

///////////////

$('.diamonbacksWTG').click(function() {

	var stadium = objectId:@"OuRc4iLiJR";

	var user = Parse.User.current();
	var relation = user.relation("Stadium");
	relation.add(stadium);
	user.save();
	
	console.log('You Added It');
});







