'use strict';

Parse.initialize('EqWIGNej8qO65jxtkm5clG2mPEdVhCvj0EvlF5El', '6SYAg7C95UgX6fLaY5vjDJnxyAFXn58q7ezl0u13');

//////////////HEADROOM.JS////BEGIN

// grab an element
var myElement = document.querySelector('.userBarIndex');
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

$('.userBarIndex').headroom();

//////////////HEADROOM.JS////END

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
    // Hooray! Let them use the app now.
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
    // Do stuff after successful login.
  	},
  	error: function(user, error) {
    // The login failed. Check error to see why.
  	}
});

	console.log('You Logged In');

});

///////////////
