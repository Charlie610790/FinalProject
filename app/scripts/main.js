console.log('\'Allo \'Allo!');

// grab an element
var myElement = document.querySelector(".userBarIndex");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 

$(".userBarIndex").headroom();
