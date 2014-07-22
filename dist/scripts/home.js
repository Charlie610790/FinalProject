'use strict';


var currentUser = Parse.User.current();
if (currentUser) {
	window.location.replace("home.html");
} else {
    // show the signup or login page
}