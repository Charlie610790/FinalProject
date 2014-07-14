'use strict';

var ProfileWTGView = Parse.View.extend({
 
    className: 'Stadium',

    collection: 'StadiumsCollection',

 
    profileWTGTemplate: _.template($('.profileWTGTemplate').text()),

    events: {
        
    },
 
 
    initialize: function(){
        console.log('hi')
        // console.log(this.model)
        $('.profileWantToGo').append(this.el);
        this.render();

    },
 
    render: function(){
        var renderedTemplate = this.profileWTGTemplate(this.model);
        this.$el.html(renderedTemplate);
    },
 
});
        var user = Parse.User.current();
        var relation = user.relation("WTGstadiums");
        relation.query().find({

            success: function(stadiums) {
                console.log(stadiums)
                stadiums.forEach(function(stadium){
                    new ProfileWTGView({model: stadium.attributes})
                });
            }
        });
