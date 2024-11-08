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

        // Array of trail names, URLs, and colors
        const trails = [
            { name: "Agustas Gloop", url: "https://reachabove.ca/geojson/Agustas Gloop.geojson", color: "#FF5733" },
            { name: "Chocolate Flush", url: "https://reachabove.ca/geojson/ChocolateFlush.geojson", color: "#8D33FF" },
            { name: "Connector", url: "https://reachabove.ca/geojson/Connector.geojson", color: "#33FF57" },
            { name: "Dilly Dally", url: "https://reachabove.ca/geojson/DillyDally.geojson", color: "#FF33A8" },
            { name: "Easy Way Back", url: "https://reachabove.ca/geojson/Easy_Way_back.geojson", color: "#33C3FF" },
            { name: "Golden Ticket", url: "https://reachabove.ca/geojson/GoldenTicket.geojson", color: "#FFD700" },
            { name: "Harder Way Back", url: "https://reachabove.ca/geojson/HarderWayBack.geojson", color: "#FF6F33" },
            { name: "Hot Butter", url: "https://reachabove.ca/geojson/HotButter.geojson", color: "#33FFDD" },
            { name: "Loompa", url: "https://reachabove.ca/geojson/Loompa.geojson", color: "#FF5733" },
            { name: "Rattler", url: "https://reachabove.ca/geojson/Rattler.geojson", color: "#FF33FF" },
            { name: "Rock Paper Scissors", url: "https://reachabove.ca/geojson/RockPaperScissors.geojson", color: "#FFFF33" },
            { name: "The Big Flush", url: "https://reachabove.ca/geojson/TheBigFlush.geojson", color: "#33FF99" },
            { name: "The Climb Down", url: "https://reachabove.ca/geojson/TheClimbDown.geojson", color: "#FF3366" },
            { name: "The Girlfriend", url: "https://reachabove.ca/geojson/TheGirlFriend.geojson", color: "#3399FF" },
            { name: "Trail Head", url: "https://reachabove.ca/geojson/TrailHead.geojson", color: "#FF9933" },
            { name: "Tree Hugger", url: "https://reachabove.ca/geojson/TreeHugger.geojson", color: "#66FF33" },
            { name: "Which Way", url: "https://reachabove.ca/geojson/WhichWay.geojson", color: "#FF33CC" },
            { name: "Wonka Bar", url: "https://reachabove.ca/geojson/WonkaBar.geojson", color: "#FF6633" }
        ];

        // Load each trail GeoJSON as a line layer with its specific color
        map.on('load', () => {
            trails.forEach(trail => {
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
                        'line-color': trail.color,
                        'line-width': 3
                    }
                });

                // Change cursor to pointer on hover
                map.on('mouseenter', trail.name, () => {
                    map.getCanvas().style.cursor = 'pointer';
                });
                
                // Revert cursor on mouse leave
                map.on('mouseleave', trail.name, () => {
                    map.getCanvas().style.cursor = '';
                });

                // Display popup on click
                map.on('click', trail.name, (e) => {
                    new mapboxgl.Popup()
                        .setLngLat(e.lngLat)
                        .setHTML(`<strong>${trail.name}</strong>`)
                        .addTo(map);
                });
            });
        });
    </script>
</body>
</html>
