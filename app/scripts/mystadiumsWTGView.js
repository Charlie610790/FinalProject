'use strict';

var MyStadiumsWTGView = Parse.View.extend({
 
    className: 'Stadium',

    collection: 'StadiumsCollection',

 
    myStadiumsWTGTemplate: _.template($('.myStadiumsWTGTemplate').text()),

    events: {
        
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
