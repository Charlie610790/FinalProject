'use strict';

var MyStadiumsBTView = Parse.View.extend({
 
    className: 'Stadium',

    collection: 'StadiumsCollection',

 
    myStadiumsBTTemplate: _.template($('.myStadiumsBTTemplate').text()),

    events: {
        'click .DiamondbacksBTRemove'              : 'DiamondbacksBTRemove',
    },
 
 
    initialize: function(){
        // console.log(this.model)
        $('.myStadiumsBTContainer').append(this.el);
        this.render();

    },
 
    render: function(){
        var renderedTemplate = this.myStadiumsBTTemplate(this.model);
        this.$el.html(renderedTemplate);
    },

    DiamondbacksBTRemove: function(){
        var Stadium = Parse.Object.extend('Stadium');
        var query = new Parse.Query(Stadium);
        query.get('OuRc4iLiJR', {
        success: function(stadium) {
            var user = Parse.User.current();
            var relation = user.relation('BTstadiums');

            relation.remove(stadium);
            user.save().done(function(){
            window.location.replace('http://localhost:9000/beenThere.html');

        });
        },
        error: function(object, error) {
        }
    });
    console.log('You Removed It');
    },
 
});
        
var user = Parse.User.current();
var relation = user.relation("BTstadiums");
relation.query().find({
    success: function(stadiums) {
        stadiums.forEach(function(stadium){
            new MyStadiumsBTView({model: stadium.attributes})
        });
    }
});
