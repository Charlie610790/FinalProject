'use strict';

var StadiumNearMeView = Parse.View.extend({
 
    className: 'Stadium',

    collection: 'StadiumCollection',

 
    stadiumsnearmeTemplate: _.template($('.stadiumsnearmeTemplate').text()),

    events: {
        
    },
 
 
    initialize: function(){
        $('.stadiumsnearmeBody').append(this.el);
        this.render();
    },
 
    render: function(){
        var renderedTemplate = this.stadiumsnearmeTemplate(this.model.attributes);
        this.$el.html(renderedTemplate);
        
    },    
 
});

    var user = Parse.User.current();
    var Stadium = Parse.Object.extend("Stadium");
    var userGeoPoint = user.get("GeoLocation");
    var query = new Parse.Query(Stadium);
    query.near("GeoLocation", userGeoPoint);
    // Limit what could be a lot of points.
    query.limit(30);
    // Final list of objects
    query.find({
        success: function(stadiums) {
            stadiums.forEach(function(stadium){
                var TeamName = stadium.get('TeamName');
                var CityName = stadium.get('CityName');
                var Sport    = stadium.get('Sport');
                var GeoLocal = stadium.get('GeoLocation');
                console.log(userGeoPoint)
                new StadiumNearMeView({model: stadium})
                console.log(userGeoPoint.milesTo(GeoLocal));
                console.log(CityName);
                console.log(Sport);
                

            });
        }
    });

    