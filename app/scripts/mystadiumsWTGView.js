'use strict';

var MyStadiumsWTGView = Parse.View.extend({
 
    className: 'StadiumWTG',

    collection: 'StadiumsWTGCollection',

 
    myStadiumsWTGTemplate: _.template($('.myStadiumsWTGTemplate').text()),

    events: {
        //MLB Baseball Teams
        'click .DiamondbacksWTGRemove'              : 'DiamondbacksWTGRemove',
        'click .BravesWTGRemove'                    : 'BravesWTGRemove',
        'click .OriolesWTGRemove'                   : 'OriolesWTGRemove',
        'click .RedSoxWTGRemove'                    : 'RedSoxWTGRemove',
        'click .CubsWTGRemove'                      : 'CubsWTGRemove',
        'click .WhiteSoxWTGRemove'                  : 'WhiteSoxWTGRemove',
        'click .RedsWTGRemove'                      : 'RedsWTGRemove',
        'click .IndiansWTGRemove'                   : 'IndiansWTGRemove',
        'click .RockiesWTGRemove'                   : 'RockiesWTGRemove',
        'click .TigersWTGRemove'                    : 'TigersWTGRemove',
        'click .AstrosWTGRemove'                    : 'AstrosWTGRemove',
        'click .RoyalsWTGRemove'                    : 'RoyalsWTGRemove',
        'click .AngelsWTGRemove'                    : 'AngelsWTGRemove',
        'click .DodgersWTGRemove'                   : 'DodgersWTGRemove',
        'click .MarlinsWTGRemove'                   : 'MarlinsWTGRemove',
        'click .BrewersWTGRemove'                   : 'BrewersWTGRemove',
        'click .TwinsWTGRemove'                     : 'TwinsWTGRemove',
        'click .MetsWTGRemove'                      : 'MetsWTGRemove',
        'click .YankeesWTGRemove'                   : 'YankeesWTGRemove',
        'click .AthleticsWTGRemove'                 : 'AthleticsWTGRemove',
        'click .PhilliesWTGRemove'                  : 'PhilliesWTGRemove',
        'click .PiratesWTGRemove'                   : 'PiratesWTGRemove',
        'click .PadresWTGRemove'                    : 'PadresWTGRemove',
        'click .GiantsWTGRemove'                    : 'GiantsWTGRemove',
        'click .MarinersWTGRemove'                  : 'MarinersWTGRemove',
        'click .CardinalsWTGRemove'                 : 'CardinalsWTGRemove',
        'click .RaysWTGRemove'                      : 'RaysWTGRemove',
        'click .RangersWTGRemove'                   : 'RangersWTGRemove',
        'click .BlueJaysWTGRemove'                  : 'BlueJaysWTGRemove',
        'click .NationalsWTGRemove'                 : 'NationalsWTGRemove',
        //A Baseball Teams
        'click .DriveWTGRemove'                     : 'DriveWTGRemove',
        'click .TouristsWTGRemove'                  : 'TouristsWTGRemove',

        //NBA Basketball Teams
        'click .HeatWTGRemove'                      : 'HeatWTGRemove',
        //NFL Football Teams
        'click .PackersWTGRemove'                   : 'PackersWTGRemove',
        'click .FalconsWTGRemove'                   : 'FalconsWTGRemove',
        'click .BuccaneersWTGRemove'                : 'BuccaneersWTGRemove',
        'click .NYGiantsWTGRemove'                  : 'NYGiantsWTGRemove',

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

    DriveWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('qkPUmHn2Yr', {
        success: function(stadium) {
            var user = Parse.User.current();
            var relation = user.relation('WTGstadiums');

            relation.remove(stadium);
            user.save().done(function(){
            window.location.replace('http://localhost:9000/bucketList.html');

            });
        },
        error: function(object, error) {
        }
        });
    },

    TouristsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('PWVjqVZ9Sv', {
        success: function(stadium) {
            var user = Parse.User.current();
            var relation = user.relation('WTGstadiums');

            relation.remove(stadium);
            user.save().done(function(){
            window.location.replace('http://localhost:9000/bucketList.html');

            });
        },
        error: function(object, error) {
        }
        });
    },

    DiamondbacksWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('OuRc4iLiJR', {
        success: function(stadium) {
            var user = Parse.User.current();
            var relation = user.relation('WTGstadiums');

            relation.remove(stadium);
            user.save().done(function(){
            window.location.replace('http://localhost:9000/bucketList.html');

            });
        },
        error: function(object, error) {
        }
        });
    },

    BravesWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('ee83zTRgQi', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    OriolesWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('s6rg4vjaBL', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    RedSoxWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('mb5dnLfqVS', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    CubsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('XO6KvGFc8x', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    WhiteSoxWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('rAUUhLF5vb', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    RedsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('fYLdY3bk8H', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    IndiansWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('sZc91VtJwA', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    RockiesWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('Zxoi0epl3M', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    TigersWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('kHi3wBnOsO', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    AstrosWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('B07ivNt88W', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    RoyalsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('0e2n5mfZOw', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    AngelsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('uAUPfGTsWy', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    DodgersWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('phZL6QdUJM', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    MarlinsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('IzdLHXpDJW', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    BrewersWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('6PgEhrwSF0', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    TwinsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('V0lpFjcnoC', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    MetsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('HwQoEuHxSz', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    YankeesWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('ArPf26GF0t', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    AthleticsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('o4trxYqkIe', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    PhilliesWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('6jCEc8rY12', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    PiratesWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('hAJfM55WAA', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    PadresWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('PDU1u9j6o0', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    GiantsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('PmgJWFKUad', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    MarinersWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('182izmYYld', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    CardinalsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('5ts706OnEr', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    RaysWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('jytoJGrA2k', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    RangersWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('EzNbmDfYT7', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    BlueJaysWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('0wqIwyPTZi', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    },

    NationalsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('qZpb6kBfF6', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    }, 

    HeatWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('k1sqDuziT8', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    }, 

    PackersWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('MlKK2jtNj8', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    }, 

    NYGiantsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('D9V0N8VO8N', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    }, 

    FalconsWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('LurGDdFPVp', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
    }, 

    BuccaneersWTGRemove: function(){
        var StadiumBT = Parse.Object.extend('StadiumWTG');
        var query = new Parse.Query(Stadium);
        query.get('Ko7EBJBPdj', {
            success: function(stadium) {
                var user = Parse.User.current();
                var relation = user.relation('WTGstadiums');

                relation.remove(stadium);
                user.save().done(function(){
                window.location.replace('http://localhost:9000/bucketList.html');

                });
            },
            error: function(object, error) {
            }
        });
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
