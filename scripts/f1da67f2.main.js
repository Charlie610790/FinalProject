"use strict";Parse.initialize("EqWIGNej8qO65jxtkm5clG2mPEdVhCvj0EvlF5El","6SYAg7C95UgX6fLaY5vjDJnxyAFXn58q7ezl0u13");var User=Parse.Object.extend({className:"User"}),UserCollection=Parse.Collection.extend({model:"User"}),collection=new UserCollection,Stadium=Parse.Object.extend({className:"Stadium"}),StadiumCollection=Parse.Collection.extend({model:"Stadium"}),stadiumCollection=new StadiumCollection;$(".signupButton").click(function(){var a=new Parse.User,b=$("#userName").val(),c=$("#password").val(),d=$("#email").val();a.set({username:b,password:c,email:d,Avatar:"../images/avatarPlaceholder.jpg"}),a.signUp(null,{success:function(){window.location.replace("http://localhost:9000/home.html")},error:function(a,b){alert("Error: "+b.code+" "+b.message)}}),console.log("It Worked!")}),$(".loginButton").click(function(){var a=$("#userName").val(),b=$("#password").val();Parse.User.logIn(a,b,{success:function(){window.location.replace("http://localhost:9000/home.html")},error:function(){}}),console.log("You Logged In")}),$(".logoutButton").click(function(){Parse.User.logOut(),window.location.replace("http://localhost:9000/index.html"),console.log("You Logged Out")});var currentUser=Parse.User.current();currentUser&&window.location.replace("home.html");