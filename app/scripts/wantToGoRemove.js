'use strict';

///////////////Arizona Diamondbacks Been There Button
$('.DiamondbacksWTGRemove').click(function() {
	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('OuRc4iLiJR', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Atlanta Braves Been There Button
$('.BravesWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('ee83zTRgQi', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Baltimore Orioles Been There Button
$('.OriolesWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('s6rg4vjaBL', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Boston Red Sox Been There Button
$('.Red SoxWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('mb5dnLfqVS', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});


///////////////Chicago Cubs Been There Button
$('.CubsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('XO6KvGFc8x', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Chicago White Sox Been There Button
$('.White SoxWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('rAUUhLF5vb', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Cincinnati Reds Been There Button
$('.RedsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('fYLdY3bk8H', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Cleveland Indians Been There Button
$('.IndiansWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('sZc91VtJwA', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});


///////////////Colorado Rockies Been There Button
$('.RockiesWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('Zxoi0epl3M', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Detroit Tigers Been There Button
$('.TigersWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('kHi3wBnOsO', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Houston Astros Been There Button
$('.AstrosWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('B07ivNt88W', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Kansas City Royals Been There Button
$('.RoyalsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('0e2n5mfZOw', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Los Angeles Angels Been There Button
$('.AngelsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('uAUPfGTsWy', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Los Angeles Dodgers Been There Button
$('.DodgersWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('phZL6QdUJM', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Miami Marlins Been There Button
$('.MarlinsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('IzdLHXpDJW', {
	    success: function(stadium) {
		    var user = Parse.User.current();
$('.MarlinsWTGRemove').click(function() {
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Milwaukee Brewers Been There Button
$('.BrewersWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('6PgEhrwSF0', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Minnesota Twins Been There Button
$('.TwinsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('V0lpFjcnoC', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////New York Mets Been There Button
$('.MetsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('HwQoEuHxSz', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////New York Yankees Been There Button
$('.YankeesWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('ArPf26GF0t', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Oakland Athletics Been There Button
$('.AthleticsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('o4trxYqkIe', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Philadelphia Phillies Been There Button
$('.PhilliesWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('6jCEc8rY12', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Pittsburgh Pirates Been There Button
$('.PiratesWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('hAJfM55WAA', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////San Diego Padres Been There Button
$('.PadresWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('PDU1u9j6o0', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////San Francisco Giants Been There Button
$('.GiantsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('PmgJWFKUad', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Seattle Mariners Been There Button
$('.MarinersWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('182izmYYld', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////St. Louis Cardinals Been There Button
$('.CardinalsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('5ts706OnEr', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Tampa Bay Rays Been There Button
$('.RaysWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('jytoJGrA2k', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Texas Rangers Been There Button
$('.RangersWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('EzNbmDfYT7', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Toronto Blue Jays Been There Button
$('.Blue JaysWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('0wqIwyPTZi', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});


///////////////Washington Nationals Been There Button
$('.NationalsWTGRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('qZpb6kBfF6', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('WTGstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});