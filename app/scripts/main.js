//////////////HEADROOM.JS////BEGIN

// grab an element
var myElement = document.querySelector(".userBarIndex");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 

$(".userBarIndex").headroom();

//////////////HEADROOM.JS////END



//////////////GOOGLEMAPS////BEGIN
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(42.346354, -71.098059)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

  google.maps.event.addDomListener(window, 'load', initialize);



// window.onload = loadScript;

//////////////GOOGLEMAPS////END