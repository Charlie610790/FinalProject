'use strict';

var MyStadiumsBTView = Parse.View.extend({
 
    className: 'StadiumBT',

    collection: 'StadiumsBTCollection',

 
    myStadiumsBTTemplate: _.template($('.myStadiumsBTTemplate').text()),

    events: {
        'click .DiamondbacksBTRemove'              : 'DiamondbacksBTRemove',
        'click .BravesBTRemove'                    : 'BravesBTRemove',
        'click .OriolesBTRemove'                   : 'OriolesBTRemove',
        'click .RedSoxBTRemove'                    : 'RedSoxBTRemove',
        'click .CubsBTRemove'                      : 'CubsBTRemove',
        'click .WhiteSoxBTRemove'                  : 'WhiteSoxBTRemove',
        'click .RedsBTRemove'                      : 'RedsBTRemove',
        'click .IndiansBTRemove'                   : 'IndiansBTRemove',
        'click .RockiesBTRemove'                   : 'RockiesBTRemove',
        'click .TigersBTRemove'                    : 'TigersBTRemove',
        'click .AstrosBTRemove'                    : 'AstrosBTRemove',
        'click .RoyalsBTRemove'                    : 'RoyalsBTRemove',
        'click .AngelsBTRemove'                    : 'AngelsBTRemove',
        'click .DodgersBTRemove'                   : 'DodgersBTRemove',
        'click .MarlinsBTRemove'                   : 'MarlinsBTRemove',
        'click .BrewersBTRemove'                   : 'BrewersBTRemove',
        'click .TwinsBTRemove'                     : 'TwinsBTRemove',
        'click .MetsBTRemove'                      : 'MetsBTRemove',
        'click .YankeesBTRemove'                   : 'YankeesBTRemove',
        'click .AthleticsBTRemove'                 : 'AthleticsBTRemove',
        'click .PhilliesBTRemove'                  : 'PhilliesBTRemove',
        'click .PiratesBTRemove'                   : 'PiratesBTRemove',
        'click .PadresBTRemove'                    : 'PadresBTRemove',
        'click .GiantsBTRemove'                    : 'GiantsBTRemove',
        'click .MarinersBTRemove'                  : 'MarinersBTRemove',
        'click .CardinalsBTRemove'                 : 'CardinalsBTRemove',
        'click .RaysBTRemove'                      : 'RaysBTRemove',
        'click .RangersBTRemove'                   : 'RangersBTRemove',
        'click .BlueJaysBTRemove'                  : 'BlueJaysBTRemove',
        'click .NationalsBTRemove'                 : 'NationalsBTRemove',
        'click .HeatBTRemove'                      : 'HeatBTRemove',
        'click .PackersBTRemove'                   : 'PackersBTRemove',
        'click .FalconsBTRemove'                   : 'FalconsBTRemove',
        'click .BuccaneersBTRemove'                : 'BuccaneersBTRemove',
        'click .NYGiantsBTRemove'                  : 'NYGiantsBTRemove',

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
        var StadiumBT = Parse.Object.extend('StadiumBT');
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
    },

    BravesBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('ee83zTRgQi', {
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
    },

    OriolesBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('s6rg4vjaBL', {
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
    },

    RedSoxBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('mb5dnLfqVS', {
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
    },

    CubsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('XO6KvGFc8x', {
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
    },

    WhiteSoxBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('rAUUhLF5vb', {
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
    },

    RedsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('fYLdY3bk8H', {
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
    },

    IndiansBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('sZc91VtJwA', {
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
    },

    RockiesBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('Zxoi0epl3M', {
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
    },

    TigersBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('kHi3wBnOsO', {
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
    },

    AstrosBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('B07ivNt88W', {
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
    },

    RoyalsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('0e2n5mfZOw', {
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
    },

    AngelsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('uAUPfGTsWy', {
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
    },

    DodgersBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('phZL6QdUJM', {
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
    },

    MarlinsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('IzdLHXpDJW', {
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
    },

    BrewersBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('6PgEhrwSF0', {
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
    },

    TwinsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('V0lpFjcnoC', {
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
    },

    MetsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('HwQoEuHxSz', {
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
    },

    YankeesBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('ArPf26GF0t', {
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
    },

    AthleticsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('o4trxYqkIe', {
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
    },

    PhilliesBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('6jCEc8rY12', {
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
    },

    PiratesBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('hAJfM55WAA', {
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
    },

    PadresBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('PDU1u9j6o0', {
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
    },

    GiantsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('PmgJWFKUad', {
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
    },

    MarinersBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('182izmYYld', {
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
    },

    CardinalsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('5ts706OnEr', {
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
    },

    RaysBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('jytoJGrA2k', {
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
    },

    RangersBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('EzNbmDfYT7', {
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
    },

    BlueJaysBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('0wqIwyPTZi', {
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
    },

    NationalsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('qZpb6kBfF6', {
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
    }, 

    HeatBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('k1sqDuziT8', {
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
    }, 

    PackersBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('MlKK2jtNj8', {
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
    }, 

    NYGiantsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('D9V0N8VO8N', {
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
    }, 

    FalconsBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('LurGDdFPVp', {
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
    }, 

    BuccaneersBTRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumBT');
        var query = new Parse.Query(Stadium);
        query.get('Ko7EBJBPdj', {
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
