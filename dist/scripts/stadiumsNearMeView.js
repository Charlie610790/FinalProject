'use strict';

var StadiumsNearMeView = Parse.View.extend({
 
    className: 'StadiumWTG',

    collection: 'StadiumsWTGCollection',

 
    myStadiumsWTGTemplate: _.template($('.myStadiumsWTGTemplate').text()),

    events: {
        //MLB Baseball Teams
        'click .DiamondbacksWTGRemove'              : 'DiamondbacksWTGRemove',
        'click .BravesWTGRemove'                    : 'BravesWTGRemove',
    },
 
 
    initialize: function(){
        // console.log(this.model)
        $('.myStadiumsWTGContainer').append(this.el);
        this.render();

    },
 
    render: function(){
        var renderedTemplate = this.myStadiumsWTGTemplate(this.model);
        this.$el.html(renderedTemplate);
    },


    DiamondbacksWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('OuRc4iLiJR', {
        success: function(stadium) {
            var user = Parse.User.current();
            var relation = user.relation('WTGstadiums');

            relation.remove(stadium);
            user.save().done(function(){
            window.location.replace('http://localhost:9000/bucketList.html');

            });
        },
        error: function(object, error) {
        }
        });
    },

    BravesWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('ee83zTRgQi', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },
});
        
var user = Parse.User.current();
var relation = user.relation("WTGstadiums");
relation.query().find({
    success: function(stadiums) {
        stadiums.forEach(function(stadium){
            new MyStadiumsWTGView({model: stadium.attributes})
        });
    }
});
