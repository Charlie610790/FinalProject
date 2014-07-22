'use strict';

$('.wantToGoButton').click(function() {
  	$( this ).toggleClass('onMyBucketList').text('On My Bucketlist');

});

$('.onMyBucketList').click(function() {
  	$( this ).toggleClass('wantToGoButton').text('Want To Go');

});

///////////////
///SPRING TRAINING BASEBALL
///////////////Red Sox Spring Training Want To Go Button
$('.redsoxSTWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("G2SWO8UzeQ", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});

$('.yankeesSTWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("eAKaNf49Pi", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});

$('.piratesSTWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("fiPiD7PFO6", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////
///AAA BASEBALL
///////////////Greenville Drive Want To Go Button
$('.knightsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("QgkAL4tb5n", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////


///////////////
///A BASEBALL
///////////////Greenville Drive Want To Go Button
$('.driveWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("qkPUmHn2Yr", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////
///////////////Asheville Tourists Want To Go Button
$('.touristsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("PWVjqVZ9Sv", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////
///////////////Charleston River Dogs Want To Go Button
$('.riverdogsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("dfHBAORDeQ", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////
///////////////Mrtyle Beach Pelicans Want To Go Button
$('.pelicansWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("7Fln3rA7fk", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////


///////////////
///MLB
///////////////Arizona Diamondbacks Want To Go Button
$('.diamonbacksWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("OuRc4iLiJR", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Atlanta Braves Want To Go Button
$('.bravesWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("ee83zTRgQi", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Baltimore Orioles Want To Go Button
$('.oriolesWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("s6rg4vjaBL", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

$('.oriolesWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("s6rg4vjaBL", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});

///////////////Boston Red Sox Want To Go Button
$('.redsoxWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("mb5dnLfqVS", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Chicago Cubs Want To Go Button
$('.cubsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("XO6KvGFc8x", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Chicago White Sox Want To Go Button
$('.whitesoxWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("rAUUhLF5vb", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Cincinnati Reds Want To Go Button
$('.redsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("fYLdY3bk8H", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Cleveland Indians Want To Go Button
$('.indiansWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("sZc91VtJwA", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Colorado Rockies Want To Go Button
$('.rockiesWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("Zxoi0epl3M", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Detroit Tigers Want To Go Button
$('.tigersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("kHi3wBnOsO", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Houston Astros Want To Go Button
$('.astrosWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("B07ivNt88W", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Kansas City Royals Want To Go Button
$('.royalsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("0e2n5mfZOw", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Los Angeles Angels Want To Go Button
$('.angelsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("uAUPfGTsWy", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Los Angeles Dodgers Want To Go Button
$('.dodgersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("phZL6QdUJM", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Miami Marlins Want To Go Button
$('.marlinsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("IzdLHXpDJW", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Milwaukee Brewers Want To Go Button
$('.brewersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("6PgEhrwSF0", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Minnesota Twins Want To Go Button
$('.twinsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("V0lpFjcnoC", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////New York Mets Want To Go Button
$('.metsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("HwQoEuHxSz", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////New York Yankees Want To Go Button
$('.yankeesWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("ArPf26GF0t", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Oakland Athletics Want To Go Button
$('.athleticsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("o4trxYqkIe", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Philadelphia Phillies Want To Go Button
$('.philliesWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("6jCEc8rY12", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Pittsburgh Pirates Want To Go Button
$('.piratesWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("hAJfM55WAA", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////San Diego Padres Want To Go Button
$('.padresWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("PDU1u9j6o0", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////San Francisco Giants Want To Go Button
$('.giantsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("PmgJWFKUad", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Seattle Mariners Want To Go Button
$('.marinersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("182izmYYld", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////St. Louis Cardinals Want To Go Button
$('.cardinalsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("5ts706OnEr", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Tampa Bay Rays Want To Go Button
$('.raysWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("jytoJGrA2k", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Texas Rangers Want To Go Button
$('.rangersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("EzNbmDfYT7", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Texas Rangers Want To Go Button
$('.rangersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("EzNbmDfYT7", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Toronto Blue Jays Want To Go Button
$('.bluejaysWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("0wqIwyPTZi", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////

///////////////Washington Nationals Want To Go Button
$('.nationalsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("qZpb6kBfF6", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////
///NFL
//////////////
///////////////Atlanta Falcons Want To Go Button
$('.falconsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("LurGDdFPVp", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////Green Bay Packers Want To Go Button
$('.packersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("MlKK2jtNj8", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////New York Giants Want To Go Button
$('.nygiantsWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("D9V0N8VO8N", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
///////////////Tampa Bay Buccaneers Want To Go Button
$('.buccaneersWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("Ko7EBJBPdj", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});

///////////////
///NBA
//////////////
///////////////Atlanta Falcons Want To Go Button
$('.heatWTG').click(function() {

	var Stadium = Parse.Object.extend("Stadium");
	var query = new Parse.Query(Stadium);
	query.get("k1sqDuziT8", {
	  success: function(stadium) {
		var user = Parse.User.current();
		var relation = user.relation("WTGstadiums");

		relation.add(stadium);
		user.save();
	  },
	  error: function(object, error) {
	  }
	});	
	console.log('You Added It');
});
