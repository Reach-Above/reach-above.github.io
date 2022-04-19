<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Trail Hub Geolocate</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js"></script>
<style>
body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
</head>
<body>
<div id="map"></div>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJjazBkcm1wazUwYWNmM2xxZXhhNW1sc2hmIn0.ybV26N8Bl8WyZejLHvwiCw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/reachabove/ckyui2t6n000z14phrvue2crl', // style URL
center: [-78.674, 43.918], // starting position
zoom: 15 // starting zoom
});
 
// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);
</script>
 
</body>
</html>
