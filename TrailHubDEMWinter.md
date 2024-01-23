---
title: Trail Hub DEM Winter
---
<html>
<head>
<meta charset="utf-8">
<title>Trail Hub Digital Terrain Map 2023</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.js"></script>
	<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-3RKGWJ9K0S"></script>
			<script>
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'G-3RKGWJ9K0S');
		</script>
<style>
    body { margin: 0; padding: 0;}
    #map { position: absolute; top: 0; bottom: 0; width: 100%; }

    #button-container {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
		width: 150px;
    }

    .toggle-btn { 
        background-color: #f8f8f8;
        color: #333;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px 5px;
        margin-bottom: 5px;
        cursor: pointer;
        font-size: 14px;
        width: 100%;
        box-sizing: border-box;
        transition: background-color 0.3s ease;
    }

    .toggle-btn:hover {
        background-color: #f0f0f0;
    }

    #layer-toggle { background-color: #eee; }
    #toggle-hiking { background-color: #dea3ca; }
    #toggle-long, #toggle-short { background-color: #23bec8; }
	
	#layer-toggle:hover, #toggle-hiking:hover, #toggle-long:hover, #toggle-short:hover {
    background-color: #f0f0f0;
}
   #graphic-box {
            position: absolute;
            top: 50%;  /* Center vertically */
            left: 50%; /* Center horizontally */
            width: 715px;
            height: 730px;
            border: 2px solid red;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Outer drop shadow */
            transform: translate(-50%, -50%); /* Adjust for centering */
            z-index: 2; 
			pointer-events: none;
			display: none; /* Initially hidden */
        }
		
	#map-container {
		position: relative;
	}

	#overlay-container {
		position: absolute;
		bottom: 10px;
		right: 10px;
		background-color: rgba(255, 255, 255, 0.8);
		padding: 5px;
		border-radius: 4px;
	}
</style>
</head>
<body>
<div id="map"></div>
<div id="button-container">
    <button id="toggle-hiking" class="toggle-btn">Hiking Trail</button>
    <button id="toggle-long" class="toggle-btn">Snowshoe Trail</button>
    <button id="toggle-short" class="toggle-btn">Snowshoe Trail - Short</button>
	<button id="layer-toggle" class="toggle-btn">Toggle Contours</button>
	<button id="toggle-graphic-box" class="toggle-btn">Toggle Print Box</button>
</div>
 <div id="graphic-box"></div>
<div id="overlay-container" class="map-overlay">
        <div id="bearing-display">Bearing: 0°</div>
        <div id="pitch-display">Pitch: 0°</div>
        <div id="center-display">Center: 0.000000, 0.000000</div>
    </div>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJja2hlenc1a3cwbTloMnByejU3Z3JoMXVjIn0.EojHQhHk73D3XVIXMyXbAg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/reachabove/clrp92mv4005o01o84dxz9iqv', // style URL
        center: [-79.07336, 44.03235], // starting position
        zoom: 15.3, // starting zoom
		bearing: -49.60,
		pitch: 60.50
    });
	
	let hikingOpacity = 1, longOpacity = 1, shortOpacity = 1;

    // Add a scale control to the map
    map.addControl(new mapboxgl.ScaleControl());
	map.addControl(new mapboxgl.NavigationControl());
	map.addControl(new mapboxgl.FullscreenControl());
	
	// Function to toggle the visibility of the line layer
    function toggleLayer() {
        const visibility = map.getLayoutProperty('countours10m-simplify-720bqt', 'visibility');
        if (visibility === 'visible') {
            map.setLayoutProperty('countours10m-simplify-720bqt', 'visibility', 'none');
        } else {
            map.setLayoutProperty('countours10m-simplify-720bqt', 'visibility', 'visible');
        }
    }

    // Add event listener to the button
    document.getElementById('layer-toggle').addEventListener('click', toggleLayer);
	
	function updateLayerStyle() {
            map.setPaintProperty('th-trails-winter2024-merge-9j33yk copy', 'line-color', [
                "match",
                ["get", "name"],
                ["Hiking"], hikingOpacity ? "#dea3ca" : "transparent",
                ["Long"], longOpacity ? "#23bec8" : "transparent",
                ["Short"], shortOpacity ? "#23bec8" : "transparent",
                "#ffffff"
            ]);
			
			 map.setPaintProperty('th-trails-winter2024-merge-9j33yk', 'line-color', [
            "match",
            ["get", "name"],
            "Hiking", hikingOpacity ? "#000000" : "transparent",
            "Long", longOpacity ? "#000000" : "transparent",
            "Short", shortOpacity ? "#000000" : "transparent",
            "#000000"
        ]);
		
        }

        // Toggle functions
        function toggleHiking() {
            hikingOpacity = 1 - hikingOpacity; // Toggle between 0 and 1
            updateLayerStyle();
        }

        function toggleLong() {
            longOpacity = 1 - longOpacity;
            updateLayerStyle();
        }

        function toggleShort() {
            shortOpacity = 1 - shortOpacity;
            updateLayerStyle();
        }

        // Add event listeners to buttons
        document.getElementById('toggle-hiking').addEventListener('click', toggleHiking);
        document.getElementById('toggle-long').addEventListener('click', toggleLong);
        document.getElementById('toggle-short').addEventListener('click', toggleShort);
		
		function toggleGraphicBox() {
            var box = document.getElementById('graphic-box');
            box.style.display = (box.style.display === 'block') ? 'none' : 'block';
        }

        // Add event listener to the toggle button
        document.getElementById('toggle-graphic-box').addEventListener('click', toggleGraphicBox);
    // Ensure the layer is loaded before toggling
   map.on('load', function() {
        map.setLayoutProperty('countours10m-simplify-720bqt', 'visibility', 'none');
		updateLayerStyle();
    });
	
	// Initial display of values
	document.getElementById('bearing-display').innerHTML = 'Bearing: ' + map.getBearing().toFixed(2) + '°';
	document.getElementById('pitch-display').innerHTML = 'Pitch: ' + map.getPitch().toFixed(2) + '°';
	var center = map.getCenter();
	var lng = center.lng.toFixed(6);
	var lat = center.lat.toFixed(6);
	document.getElementById('center-display').innerHTML = 'Center: ' + lng + ', ' + lat;
	
	map.on('rotate', function() {
    var bearing = map.getBearing().toFixed(2);
    document.getElementById('bearing-display').innerHTML = 'Bearing: ' + bearing + '°';
	});

	map.on('pitch', function() {
		var pitch = map.getPitch().toFixed(2);
		document.getElementById('pitch-display').innerHTML = 'Pitch: ' + pitch + '°';
	});

	map.on('move', function() {
		var center = map.getCenter();
		var lng = center.lng.toFixed(6);
		var lat = center.lat.toFixed(6);
		document.getElementById('center-display').innerHTML = 'Center: ' + lng + ', ' + lat;
	});
	
</script>

</body>
</html>
