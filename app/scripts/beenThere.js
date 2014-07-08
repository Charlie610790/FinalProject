///////////////Braves Want To Go Button
$('.bravesBT').click(function() {
	var user = Parse.User.current().attributes.beentherelist.push('b', 'c');
	user.set({
	'beentherelist' :  'Braves'
	});
	user.save();

	console.log('You Added A Team To Your Been There List');
});

///////////////Braves Want To Go Button
$('.redsoxBT').click(function() {
	var user = Parse.User.current();
	user.set({
	'beenthere' :  'Red Sox'
	});
	user.save();

	console.log('You Added A Team To Your Been There List');
});
	

///what I want to Add
///{teamname: Braves, teamcity: Atlanta, teamlogo: 'images/logo.png', teampic: 'images/teampic.jpg',

//}