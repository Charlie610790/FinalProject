'use strict';

var ProfileBTView = Parse.View.extend({
 
    className: 'Stadium',

    collection: 'StadiumsCollection',

 
    profileBTTemplate: _.template($('.profileBTTemplate').text()),

    events: {
        
    },
 
 
    initialize: function(){
        // console.log(this.model)
        $('.profileBeenTo').append(this.el);
        this.render();

    },
 
    render: function(){
        var renderedTemplate = this.profileBTTemplate(this.model);
        this.$el.html(renderedTemplate);
    },
 
});
        var user = Parse.User.current();
        var relation = user.relation("BTstadiums");
        relation.query().find({

            success: function(stadiums) {
                stadiums.forEach(function(stadium){
                    new ProfileBTView({model: stadium.attributes})
                });
            }
        });
