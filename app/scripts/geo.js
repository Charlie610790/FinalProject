// function checkGeoSuport() {
// 	if (Modernizr.geolocation) {
// 		console.log('This device supports geolocation.');
// 	} else {
// 		// no native support; maybe try a fallback?
// 		alert('This device does not support geolocation.');
// 		console.log('This device does not support geolocation.');
// 	}
// }

// checkGeoSuport();


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');

  	var user = Parse.User.current();
	var point = new Parse.GeoPoint(crd.latitude, crd.longitude);
  	user.set("GeoLocation", point);
  	user.save();

  console.log(user);



};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

////////////


	// var user = Parse.User.current();
	// var point = new Parse.GeoPoint(crd.latitude, crd.longitude);
 //  	user.set("GeoLocation", point);
 //  	user.save();

$('.nearMe').click(function() {
	var user = Parse.User.current();
	var Stadium = Parse.Object.extend("Stadium");
	var userGeoPoint = user.get("location");
	var query = new Parse.Query(Stadium);
	query.near("location", userGeoPoint);
// Limit what could be a lot of points.
	query.limit(3);
// Final list of objects
	query.find({
  	success: function(Stadiums) {
  		return
  	}
});
	console.log('You Ran It');

});

