// can ask the browser for a user’s GPS coordinates:
// can use those coordinates to see our location on a map.

navigator.geolocation.getCurrentPosition(function(position) { 
    document.write(position.coords.latitude + ", " + position.coords.longitude);
});
