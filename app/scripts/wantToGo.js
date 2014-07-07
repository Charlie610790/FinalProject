///////////////Braves Want To Go Button
$('.bravesWTG').click(function() {
	var user = Parse.User.current();
	user.set({
	'bucketlist' :  'Braves'
	});
	user.save();

	console.log('You Added A Team To Your Bucketlist');
});
	
///////////////Red Sox Want To Go Button
$('.redsoxWTG').click(function() {
	var user = Parse.User.current();
	user.set({
	'bucketlist' :  'Red Sox'
	});
	user.save();

	console.log('You Added A Team To Your Bucketlist');
});
	