'use strict';

$('.beenThereButton').click(function() {
  	$( this ).toggleClass('onMyStadiumList').text('On My Stadium List');

});

$('.onMyBucketList').click(function() {
  	$( this ).toggleClass('wantToGoButton').text('Been There');

});


///////////////Arizona Diamondbacks Been There Button
$('.diamonbacksBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('OuRc4iLiJR', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');
			console.log(stadium);

		    relation.add(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Added It');
});
///////////////

///////////////Atlanta Braves Been There Button
$('.bravesBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('ee83zTRgQi', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');
			console.log(stadium);

		    relation.add(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Added It');
});
///////////////

///////////////Baltimore Orioles Been There Button
$('.oriolesBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('s6rg4vjaBL', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');
			console.log(stadium);

		    relation.add(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Added It');
});
///////////////

///////////////Boston Red Sox Been There Button
$('.redsoxBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('mb5dnLfqVS', {
	    success: function(stadium) {
		    var user = Parse.User.current();
		    var relation = user.relation('BTstadiums');
			console.log(stadium);

		    relation.add(stadium);
		    user.save();
	    },
	    error: function(object, error) {
	    }
	});
	console.log('You Added It');
});
///////////////

///////////////Chicago Cubs Been There Button
$('.cubsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('XO6KvGFc8x', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Chicago White Sox Been There Button
$('.whitesoxBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('rAUUhLF5vb', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Cincinnati Reds Been There Button
$('.redsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('fYLdY3bk8H', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Cleveland Indians Been There Button
$('.indiansBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('sZc91VtJwA', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Colorado Rockies Been There Button
$('.rockiesBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('Zxoi0epl3M', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Detroit Tigers Been There Button
$('.tigersBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('kHi3wBnOsO', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Houston Astros Been There Button
$('.astrosBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('B07ivNt88W', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Kansas City Royals Been There Button
$('.royalsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('0e2n5mfZOw', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Los Angeles Angels Been There Button
$('.angelsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('uAUPfGTsWy', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Los Angeles Dodgers Been There Button
$('.dodgersBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('phZL6QdUJM', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Miami Marlins Been There Button
$('.marlinsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('IzdLHXpDJW', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Milwaukee Brewers Been There Button
$('.brewersBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('6PgEhrwSF0', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Minnesota Twins Been There Button
$('.twinsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('V0lpFjcnoC', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////New York Mets Been There Button
$('.metsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('HwQoEuHxSz', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////New York Yankees Been There Button
$('.yankeesBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('ArPf26GF0t', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Oakland Athletics Been There Button
$('.athleticsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('o4trxYqkIe', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Philadelphia Phillies Been There Button
$('.philliesBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('6jCEc8rY12', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Pittsburgh Pirates Been There Button
$('.piratesBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('hAJfM55WAA', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////San Diego Padres Been There Button
$('.padresBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('PDU1u9j6o0', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////San Francisco Giants Been There Button
$('.giantsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('PmgJWFKUad', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Seattle Mariners Been There Button
$('.marinersBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('182izmYYld', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////St. Louis Cardinals Been There Button
$('.cardinalsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('5ts706OnEr', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Tampa Bay Rays Been There Button
$('.raysBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('jytoJGrA2k', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Texas Rangers Been There Button
$('.rangersBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('EzNbmDfYT7', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////


///////////////Toronto Blue Jays Been There Button
$('.bluejaysBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('0wqIwyPTZi', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////

///////////////Washington Nationals Been There Button
$('.nationalsBT').click(function() {

	var Stadium = Parse.Object.extend('Stadium');
	var query = new Parse.Query(Stadium);
	query.get('qZpb6kBfF6', {
		success: function(stadium) {
			var user = Parse.User.current();
			var relation = user.relation('BTstadiums');
			console.log(stadium);

			relation.add(stadium);
			user.save();
		},
		error: function(object, error) {
		}
	});
	console.log('You Added It');
});
///////////////