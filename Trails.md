<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mapbox User Location with Trails</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <link href="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css" rel="stylesheet">
    api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0; 
        }

        #map {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
        }

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
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-79.070756, 44.031415],
    zoom: 16,
    pitch: 70,
    bearing: 20
});

// Geolocate control
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
        zoom: 15,
        pitch: 70,
        bearing: 20,
        speed: 1.2
    });
});

const trails = [
    {
        type: "Hiking",
        url: "https://reachabove.ca/geojson/Hiking.geojson",
        color: "#fa0098"
    },
    {
        type: "Snowshoe",
        url: "https://reachabove.ca/geojson/Snowshoe.geojson",
        color: "#00bdc7"
    },
    {
        type: "MountainBike",
        url: "https://reachabove.ca/geojson/MountainBike.geojson",
        color: "#ffde5a"
    },
    {
        type: "Connector",
        url: "https://reachabove.ca/geojson/connector_Durham.geojson",
        color: "#ffde5a"
    }
];

map.on('load', () => {

    // Desaturate all raster imagery layers
    map.getStyle().layers.forEach(layer => {
        if (layer.type === 'raster') {
            map.setPaintProperty(
                layer.id,
                'raster-saturation',
                -0.8
            );
        }
    });

    // Terrain DEM source
    map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14
    });

    // Enable terrain exaggeration
    map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: 2.5
    });

    // Atmospheric effects
    map.setFog({
        color: 'rgb(220,220,220)',
        'high-color': 'rgb(36,92,223)',
        'horizon-blend': 0.1,
        'space-color': 'rgb(11,11,25)',
        'star-intensity': 0.2
    });

    // Trail layers
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

    // Contours source
    map.addSource('contours', {
        type: 'vector',
        url: 'mapbox://reachabove.5dvu4zig'
    });

    map.addLayer({
        id: 'contours-layer',
        type: 'line',
        source: 'contours',
        'source-layer': 'contours_1m_Parcel-8zw58j',
        layout: {
            visibility: 'none'
        },
        paint: {
            'line-color': 'rgba(255,255,255,0.5)',
            'line-width': 1
        }
    });

    // Toggle contours
    let contoursVisible = false;

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
