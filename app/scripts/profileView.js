'use strict';

var ProfileView = Parse.View.extend({
 
    className: 'User',

    collection: 'UserCollection',

 
    profileTemplate: _.template($('.profileTemplate').text()),

    events: {
        'click .saveProfile'              : 'saveProfile',
        'click .changePassword'           : 'changePassword',
    },
 
 
    initialize: function(){
        $('.profileBody').append(this.el);
        this.render();
    },
 
    render: function(){
        var renderedTemplate = this.profileTemplate(this.model.attributes);
        this.$el.html(renderedTemplate);
        
    },

    saveProfile: function(){

        var user = Parse.User.current();

        var username =  $('#username-input').val();
        var email    =  $('#email-input').val();

        user.set({
        'username' :  username,
        'email'    :  email
        });

        user.save().done(function(){
            console.log('You Saved It!!!')
                window.location.replace("http://localhost:9000/profile.html");

        });
    },

    changePassword: function(){

        var user = Parse.User.current();

        var email    =  $('#email-input').val();

        Parse.User.requestPasswordReset(email, {
            success: function() {
                // Password reset request was sent successfully
                alert("Password reset request was sent successfully.");
            },
            error: function(error) {
                // Show the error message somewhere
                alert("Error: " + error.code + " " + error.message);
            }
        });
    },
 
});

new ProfileView({model: Parse.User.current()});