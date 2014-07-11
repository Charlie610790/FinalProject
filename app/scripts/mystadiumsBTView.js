'use strict';

var MyStadiumsBTView = Parse.View.extend({
 
    className: 'Stadiums',

    collection: 'StadiumsCollection',

 
    myStadiumsBTTemplate: _.template($('.myStadiumsBTTemplate').text()),

    events: {
        
    },
 
 
    initialize: function(){
        $('.myStadiumsBTContainer').append(this.el);
        var query = new Parse.Query(User);
        query.equalTo("BTstadiums", "StadiumName");
        console.log(this);
        query.find({

        success: function(stadiums) {
    // comments now contains the comments for myPost
        }
    });
        this.render();
    },
 
    render: function(){
        var renderedTemplate = this.myStadiumsBTTemplate(this.model.attributes);
        this.$el.html(renderedTemplate);
        
    },
 
});
//Need to figure out how to point to current users related BT stadiums
new MyStadiumsBTView({model: Parse.User.current()});