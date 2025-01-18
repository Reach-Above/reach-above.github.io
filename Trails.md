<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mapbox User Location with Trails</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <link href="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js"></script>
    <style>
        body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; }
    </style>
</head>
<body>
    <div id="map"></div>
    <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJja2hlenc1a3cwbTloMnByejU3Z3JoMXVjIn0.EojHQhHk73D3XVIXMyXbAg';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v12', // Aerial imagery with streets overlay
            center: [-79.070756, 44.031415], // Initial map center [longitude, latitude]
            zoom: 16
        });

        // Geolocate control to find user location
        const geolocateControl = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        });
        map.addControl(geolocateControl);

        // Center the map on the user's location as it changes
        geolocateControl.on('geolocate', (e) => {
            const { longitude, latitude } = e.coords;
            map.flyTo({
                center: [longitude, latitude],
                zoom: 15
            });
        });

        // Array of trails with their associated URLs and colors
const trails = [
    { type: "Hiking", url: "https://reachabove.ca/geojson/Hiking.geojson", color: "#fa0098" },
    { type: "Snowshoe", url: "https://reachabove.ca/geojson/Snowshoe.geojson", color: "#00bdc7" },
    { type: "MountainBike", url: "https://reachabove.ca/geojson/MountainBike.geojson", color: "#ffde5a" },
    { type: "Connector", url: "https://reachabove.ca/geojson/Connector.geojson", color: "#ffde5a" }
];

// Ensure the map style is fully loaded before adding layers
map.on('load', () => {
    // Apply a grayscale filter to make the map black and white
    map.setPaintProperty('satellite', 'raster-saturation', -1); // Set saturation to remove color

    // Load each trail GeoJSON as a line layer with its specific color
    trails.forEach(trail => {
        map.addSource(trail.type, {
            type: 'geojson',
            data: trail.url
        });
        map.addLayer({
            id: trail.type,
            type: 'line',
            source: trail.type,
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': trail.color,
                'line-width': 3
            }
        });

        // Change cursor to pointer on hover
        map.on('mouseenter', trail.type, () => {
            map.getCanvas().style.cursor = 'pointer';
        });
        
        // Revert cursor on mouse leave
        map.on('mouseleave', trail.type, () => {
            map.getCanvas().style.cursor = '';
        });

        // Display popup on click
        map.on('click', trail.type, (e) => {
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(`<strong>${trail.type} Trail</strong>`)
                .addTo(map);
        });
    });
});

    </script>
</body>
</html>
