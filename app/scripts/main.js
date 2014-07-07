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

// $('.signupButton').click(function() {
//     //takse the input value of the comment field and assigns it to the var comment
//     var comment = $('#imageComment').val();
//     //takse the input value of the url field and assigns it to the var url
//     var url = $('#imageURL').val();
//     //creates a new instance of the constructor POST passing the two assigned variables
//     var outgoingPost = new Post();
//     //sets the two assigned variables
//     outgoingPost.set({
//         'URL'     :   url,
//         'Comment' :   comment
//     });

//     outgoingPost.save().done(function () {
//         console.log('It Worked!');
//         console.log('url is', url);
//         console.log('comment is', comment);
//         //takes the value of the comment and image fields and clears it
//         $('#imageComment').val('');
//         $('#imageURL').val('');
//     });

// });

var user = new Parse.User();
user.set("username", "my name");
user.set("password", "my pass");
user.set("email", "email@example.com");
 
// other fields can be set just like with Parse.Object
user.set("phone", "415-392-0202");
 
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});