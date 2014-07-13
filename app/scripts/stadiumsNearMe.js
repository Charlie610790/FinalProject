'use strict';

var StadiumNearMeView = Parse.View.extend({
 
    className: 'User',

    collection: 'UserCollection',

 
    stadiumsnearmeTemplate: _.template($('.stadiumsnearmeTemplate').text()),

    events: {
        'click .mlbStadiumsNearMe'              : 'mlbResults',
        'click .AStadiumsNearMe'              : 'AResults',
        
    },
 
 
    initialize: function(){
        $('.stadiumsnearmeBody').append(this.el);
        this.render();
    },
 
    render: function(){
        var renderedTemplate = this.stadiumsnearmeTemplate(this.model.attributes);
        this.$el.html(renderedTemplate);
        
    },

    mlbResults: function(){
    var user = Parse.User.current();
    var Stadium = Parse.Object.extend("Stadium");
    var userGeoPoint = user.get("GeoLocation");
    var query = new Parse.Query(Stadium);
    query.near("GeoLocation", userGeoPoint);
    // Limit what could be a lot of points.
    query.limit(3);
    // Final list of objects
    query.find({
    success: function(results) {
        for (var i = 0; i < results.length; i++) { 
        var object = results[i];

        console.log(object.get('StadiumName'));
        console.log(object.get('TeamLogo'));


        // $('.stadiumsList').append(this.el);
        // this.render();

        }
        alert("Successfully retrieved " + results.length + " stadiums.");

    }
});
    console.log('You Ran It');
        
    },

    AResults: function(){
    var user = Parse.User.current();
    var Stadium = Parse.Object.extend("ABaseballStadiums");
    var userGeoPoint = user.get("GeoLocation");
    var query = new Parse.Query(Stadium);
    query.near("GeoLocation", userGeoPoint);
    // Limit what could be a lot of points.
    query.limit(3);
    // Final list of objects
    query.find({
    success: function(results) {
        for (var i = 0; i < results.length; i++) { 
        var object = results[i];

        console.log(object.get('StadiumName'));
        console.log(object.get('TeamLogo'));


        }
        alert("Successfully retrieved " + results.length + " stadiums.");

    }
    });
    console.log('You Ran It');
        
    },
 
});

new StadiumNearMeView({model: Parse.User.current()});