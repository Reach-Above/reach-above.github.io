<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Trail Hub Digital Terrain Map 2023</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
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
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/reachabove/clhp0vljh00wg01qs3fom3ikd', // style URL
        center: [-79.073013, 44.031898], // starting position
        zoom: 14.88, // starting zoom
		bearing: -14.43,
		pitch: 60.46
    });

    // Add a scale control to the map
    map.addControl(new mapboxgl.ScaleControl());
	map.addControl(new mapboxgl.NavigationControl());
	map.addControl(new mapboxgl.FullscreenControl());
</script>

</body>
</html>
