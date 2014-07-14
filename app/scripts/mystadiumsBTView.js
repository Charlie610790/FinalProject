'use strict';

var MyStadiumsBTView = Parse.View.extend({
 
    className: 'Stadium',

    collection: 'StadiumsCollection',

 
    myStadiumsBTTemplate: _.template($('.myStadiumsBTTemplate').text()),

    events: {
        
    },
 
 
    initialize: function(){
        console.log('hi')
        // console.log(this.model)
        $('.myStadiumsBTContainer').append(this.el);
        this.render();

    },
 
    render: function(){
        var renderedTemplate = this.myStadiumsBTTemplate(this.model);
        this.$el.html(renderedTemplate);
    },
 
});
        var user = Parse.User.current();
        var relation = user.relation("BTstadiums");
        relation.query().find({

            success: function(stadiums) {
                console.log(stadiums)
                stadiums.forEach(function(stadium){
                    new MyStadiumsBTView({model: stadium.attributes})
                });
            }
        });
