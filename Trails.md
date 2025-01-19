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
        #toggle-contours {
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 1;
            background-color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <button id="toggle-contours">Toggle Contours</button>
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

        geolocateControl.on('geolocate', (e) => {
            const { longitude, latitude } = e.coords;
            map.flyTo({
                center: [longitude, latitude],
                zoom: 15
            });
        });

        const trails = [
            { type: "Hiking", url: "https://reachabove.ca/geojson/Hiking.geojson", color: "#fa0098" },
            { type: "Snowshoe", url: "https://reachabove.ca/geojson/Snowshoe.geojson", color: "#00bdc7" },
            { type: "MountainBike", url: "https://reachabove.ca/geojson/MountainBike.geojson", color: "#ffde5a" },
            { type: "Connector", url: "https://reachabove.ca/geojson/connector_Durham.geojson", color: "#ffde5a" }
        ];

        map.on('load', () => {
            map.setPaintProperty('satellite', 'raster-saturation', -1);

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

                map.on('mouseenter', trail.type, () => {
                    map.getCanvas().style.cursor = 'pointer';
                });

                map.on('mouseleave', trail.type, () => {
                    map.getCanvas().style.cursor = '';
                });

                map.on('click', trail.type, (e) => {
                    new mapboxgl.Popup()
                        .setLngLat(e.lngLat)
                        .setHTML(`<strong>${trail.type} Trail</strong>`)
                        .addTo(map);
                });
            });

            // Add contours layer
            map.addSource('contours', {
                type: 'vector',
                url: 'mapbox://reachabove.5dvu4zig' // Your contours source
            });

            map.addLayer({
                id: 'contours-layer',
                type: 'line',
                source: 'contours',
                'source-layer': 'contours_1m_Parcel-8zw58j', // Your source layer
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#000000',
                    'line-width': 1
                }
            });

            // Toggle contours visibility
            let contoursVisible = true;
            document.getElementById('toggle-contours').addEventListener('click', () => {
                contoursVisible = !contoursVisible;
                map.setLayoutProperty(
                    'contours-layer',
                    'visibility',
                    contoursVisible ? 'visible' : 'none'
                );
            });
        });
    </script>
</body>
</html>
