'use strict';

var MyStadiumsBTView = Parse.View.extend({
 
    className: 'Stadiums',

    collection: 'StadiumsCollection',

 
    myStadiumsBTTemplate: _.template($('.myStadiumsBTTemplate').text()),

    events: {
        
    },
 
 
    initialize: function(){
        $('.myStadiumsBTContainer').append(this.el);
        var user = Parse.User.current();
        var query = new Parse.Query(user);
        query.equalTo("BTstadiums", "StadiumName");
        console.log(this);
        query.find({

            success: function(stadiums) {
                for (var i = 0; i < results.length; i++) { 
                    var object = results[i];

                    console.log(object.get('StadiumName'));
                    console.log(object.get('TeamLogo'));
                }
            }
        }
    },
        this.render();
 
    render: function(){
        var renderedTemplate = this.myStadiumsBTTemplate(this.model.attributes);
        this.$el.html(renderedTemplate);
    },
 
});
//Need to figure out how to point to current users related BT stadiums
new MyStadiumsBTView({model: Parse.User.current()});