   
<!DOCTYPE html>
<html>
<head>	
<title>Clarington ATSR - unofficial observations</title>
<meta charset="utf-8" />
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css" rel="stylesheet" />
</head>

<body>

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
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
zoom: 7, // starting zoom
center: [ -78.685248, 43.909059] // starting center
});
 
map.on('load', () => {
map.addSource('earthquakes', {
type: 'geojson',
// Use a URL for the value for the `data` property.
data: 'https://github.com/Reach-Above/ClaringtonATSR/blob/main/ATSRReportedPoints.geojson'
});
 
map.addLayer({
'id': 'earthquakes-layer',
'type': 'circle',
'source': 'earthquakes',
'paint': {
'circle-radius': 8,
'circle-stroke-width': 2,
'circle-color': 'red',
'circle-stroke-color': 'white'
}
});
});
</script>


	
</body>
</html>
