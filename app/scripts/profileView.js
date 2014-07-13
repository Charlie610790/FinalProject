'use strict';

var ProfileView = Parse.View.extend({
 
    className: 'User',

    collection: 'UserCollection',

 
    profileTemplate: _.template($('.profileTemplate').text()),

    events: {
        'click .saveProfile'              : 'saveProfile',
        'click .changePassword'           : 'changePassword',
        'click .saveAvatar'               : 'saveAvatar',
        'click .refreshAvatar'            : 'refreshAvatar',
        'click .updateAvatarButton'       : 'updateAvatarButton',
        'click .cancelAvatarButtons'       : 'cancelAvatarButton',


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
            console.log('You Saved It!!!');
            window.location.replace('http://localhost:9000/profile.html');

        });
    },

    changePassword: function(){

        var user = Parse.User.current();

        var email    =  $('#email-input').val();

        Parse.User.requestPasswordReset(email, {
            success: function() {
                // Password reset request was sent successfully
                alert('Password reset request was sent successfully.');
            },
            error: function(error) {
                // Show the error message somewhere
                alert('Error: ' + error.code + ' ' + error.message);
            }
        });
    },

    saveAvatar : function () {
        var fileUpload = $(".image-upload-input")[0];
        if (fileUpload.files.length > 0) {
            var file = fileUpload.files[0];
            var name = "photo.jpg";


            var parseFile = new Parse.File(name, file);
            parseFile.save().done(function () {

                var user = Parse.User.current();
                user.set({
                    "Avatar"       : parseFile.url(),
                    "AvatarImageFile"   : parseFile
                });
                user.save().done();
            });

            setTimeout(function(){
                window.location.reload();    
            },1000);
        }
    },


    refreshAvatar : function () {
        window.location.reload();    
    },

    updateAvatarButton : function () {
        $('.updateAvatarButtons').css("display", "block");
        $('.cancelAvatarButtons').css("display", "block");
        $('.updateAvatarButton').css("display", "none");

    }, 

    cancelAvatarButton : function () {
        window.location.reload();    
    }, 
 
});

new ProfileView({model: Parse.User.current()});