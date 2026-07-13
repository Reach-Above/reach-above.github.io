<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Trail Map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    box.com/mapbox-gl-js/v3.7.0/mapbox-gl.css" rel="stylesheet">
    box.com/mapbox-gl-js/v3.7.0/mapbox-gl.js"></script>

    <style>
        body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; }
    </style>
</head>
<body>

<div id="map"></div>

<script>
mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-79.070756, 44.031415],
    zoom: 15,
    pitch: 45,
    bearing: 15
});

// User location
const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
});

map.addControl(geolocate);

geolocate.on('geolocate', (e) => {
    map.flyTo({
        center: [e.coords.longitude, e.coords.latitude],
        zoom: 15,
        pitch: 45,
        bearing: 15
    });
});

const trails = [
    {
        id: "Hiking",
        url: "https://reachabove.ca/geojson/Hiking.geojson",
        color: "#fa0098"
    },
    {
        id: "Snowshoe",
        url: "https://reachabove.ca/geojson/Snowshoe.geojson",
        color: "#00bdc7"
    },
    {
        id: "MountainBike",
        url: "https://reachabove.ca/geojson/MountainBike.geojson",
        color: "#ffde5a"
    },
    {
        id: "Connector",
        url: "https://reachabove.ca/geojson/connector_Durham.geojson",
        color: "#ffffff"
    }
];

map.on('load', () => {

    // Terrain source
    map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512
    });

    // Exaggerated terrain
    map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: 3
    });

    // Load trail layers
    trails.forEach(trail => {

        map.addSource(trail.id, {
            type: 'geojson',
            data: trail.url
        });

        map.addLayer({
            id: trail.id,
            type: 'line',
            source: trail.id,
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': trail.color,
                'line-width': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    10, 2,
                    15, 4,
                    18, 8
                ]
            }
        });
    });

});
</script>

</body>
</html>
