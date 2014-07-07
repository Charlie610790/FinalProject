'use strict';

var ToolBarView = Parse.View.extend({
 
    className: 'User',

    collection: 'UserCollection',

 
    userBarTemplate: _.template($('.userBarTemplate').text()),

    events: {
        
    },
 
 
    initialize: function(){
        $('.userBarIndex').append(this.el);
        this.render();
    },
 
    render: function(){
        var renderedTemplate = this.userBarTemplate(this.model.attributes);
        this.$el.html(renderedTemplate);
        
    },
 
});

new ToolBarView();