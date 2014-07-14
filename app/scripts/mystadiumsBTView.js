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
//Need to figure out how to point to current users related BT stadiums
        var user = Parse.User.current();
        var relation = user.relation("BTstadiums");
        // var query = new Parse.Query(user);
        // query.equalTo("BTstadiums", "StadiumName");
        // console.log(this);
        relation.query().find({

            success: function(stadiums) {
                console.log(stadiums)
                stadiums.forEach(function(stadium){
                    new MyStadiumsBTView({model: stadium})
                })
                // for (var i = 0; i < results.length; i++) { 
                //     var object = results[i];

                //     console.log(object.get('StadiumName'));
                //     console.log(object.get('TeamLogo'));
                // }
                // this.render();

            }
        })
// new MyStadiumsBTView(Parse.User.current().attributes.B);