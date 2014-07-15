'use strict';

///////////////Arizona Diamondbacks Been There Button
$('.DiamondbacksBTRemove').click(function() {
	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('OuRc4iLiJR', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Atlanta Braves Been There Button
$('.BravesBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('ee83zTRgQi', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Baltimore Orioles Been There Button
$('.OriolesBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('s6rg4vjaBL', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Boston Red Sox Been There Button
$('.Red SoxBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('mb5dnLfqVS', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});


///////////////Chicago Cubs Been There Button
$('.CubsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('XO6KvGFc8x', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Chicago White Sox Been There Button
$('.White SoxBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('rAUUhLF5vb', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Cincinnati Reds Been There Button
$('.RedsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('fYLdY3bk8H', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Cleveland Indians Been There Button
$('.IndiansBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('sZc91VtJwA', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});


///////////////Colorado Rockies Been There Button
$('.RockiesBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('Zxoi0epl3M', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Detroit Tigers Been There Button
$('.TigersBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('kHi3wBnOsO', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Houston Astros Been There Button
$('.AstrosBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('B07ivNt88W', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Kansas City Royals Been There Button
$('.RoyalsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('0e2n5mfZOw', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Los Angeles Angels Been There Button
$('.AngelsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('uAUPfGTsWy', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Los Angeles Dodgers Been There Button
$('.DodgersBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('phZL6QdUJM', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Miami Marlins Been There Button
$('.MarlinsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('IzdLHXpDJW', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Milwaukee Brewers Been There Button
$('.BrewersBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('6PgEhrwSF0', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Minnesota Twins Been There Button
$('.TwinsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('V0lpFjcnoC', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////New York Mets Been There Button
$('.MetsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('HwQoEuHxSz', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////New York Yankees Been There Button
$('.YankeesBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('ArPf26GF0t', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Oakland Athletics Been There Button
$('.AthleticsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('o4trxYqkIe', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Philadelphia Phillies Been There Button
$('.PhilliesBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('6jCEc8rY12', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Pittsburgh Pirates Been There Button
$('.PiratesBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('hAJfM55WAA', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////San Diego Padres Been There Button
$('.PadresBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('PDU1u9j6o0', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////San Francisco Giants Been There Button
$('.GiantsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('PmgJWFKUad', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Seattle Mariners Been There Button
$('.MarinersBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('182izmYYld', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////St. Louis Cardinals Been There Button
$('.CardinalsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('5ts706OnEr', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Tampa Bay Rays Been There Button
$('.RaysBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('jytoJGrA2k', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Texas Rangers Been There Button
$('.RangersBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('EzNbmDfYT7', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});

///////////////Toronto Blue Jays Been There Button
$('.Blue JaysBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('0wqIwyPTZi', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});


///////////////Washington Nationals Been There Button
$('.NationalsBTRemove').click(function() {
	console.log('Start');

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('qZpb6kBfF6', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');

		    relation.remove(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Removed It');
});