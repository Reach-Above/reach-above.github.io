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
            style: 'mapbox://styles/mapbox/streets-v12',
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

        // Array of trail names and corresponding URLs
        const trails = [
            { name: "Agustas Gloop", url: "https://reachabove.ca/geojson/Agustas Gloop.geojson" },
            { name: "Chocolate Flush", url: "https://reachabove.ca/geojson/ChocolateFlush.geojson" },
            { name: "Connector", url: "https://reachabove.ca/geojson/Connector.geojson" },
            { name: "Dilly Dally", url: "https://reachabove.ca/geojson/DillyDally.geojson" },
            { name: "Easy Way Back", url: "https://reachabove.ca/geojson/Easy_Way_back.geojson" },
            { name: "Golden Ticket", url: "https://reachabove.ca/geojson/GoldenTicket.geojson" },
            { name: "Harder Way Back", url: "https://reachabove.ca/geojson/HarderWayBack.geojson" },
            { name: "Hot Butter", url: "https://reachabove.ca/geojson/HotButter.geojson" },
            { name: "Loompa", url: "https://reachabove.ca/geojson/Loompa.geojson" },
            { name: "Rattler", url: "https://reachabove.ca/geojson/Rattler.geojson" },
            { name: "Rock Paper Scissors", url: "https://reachabove.ca/geojson/RockPaperScissors.geojson" },
            { name: "The Big Flush", url: "https://reachabove.ca/geojson/TheBigFlush.geojson" },
            { name: "The Climb Down", url: "https://reachabove.ca/geojson/TheClimbDown.geojson" },
            { name: "The Girlfriend", url: "https://reachabove.ca/geojson/TheGirlfriend.geojson" },
            { name: "Trail Head", url: "https://reachabove.ca/geojson/TrailHead.geojson" },
            { name: "Tree Hugger", url: "https://reachabove.ca/geojson/TreeHugger.geojson" },
            { name: "Which Way", url: "https://reachabove.ca/geojson/WhichWay.geojson" },
            { name: "Wonka Bar", url: "https://reachabove.ca/geojson/WonkaBar.geojson" }
        ];

        // Load each trail GeoJSON as a line layer
        trails.forEach(trail => {
            map.on('load', () => {
                map.addSource(trail.name, {
                    type: 'geojson',
                    data: trail.url
                });
                map.addLayer({
                    id: trail.name,
                    type: 'line',
                    source: trail.name,
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#ff69b4', // Customize line color as needed
                        'line-width': 3
                    }
                });
            });
        });
    </script>
</body>
</html>
