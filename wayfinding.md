<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Durham Forest Wayfinding Sign Planner</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">

    <link href="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js"></script>

    <style>
        :root {
            --panel-bg: rgba(255, 255, 255, 0.96);
            --border: #d6dbe1;
            --text: #1f2933;
            --muted: #5f6b76;
            --accent: #0067c5;
            --success: #176b2c;
            --warning: #8a4b08;
            --danger: #b42318;
            --shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            color: var(--text);
            overflow: hidden;
        }

        #map {
            position: absolute;
            inset: 0;
        }

        .panel {
            position: absolute;
            z-index: 2;
            background: var(--panel-bg);
            border: 1px solid var(--border);
            border-radius: 10px;
            box-shadow: var(--shadow);
        }

        #controls {
            top: 12px;
            left: 12px;
            width: 310px;
            max-height: calc(100vh - 24px);
            overflow-y: auto;
            padding: 14px;
        }

        #geojson-panel {
            right: 12px;
            bottom: 12px;
            width: min(455px, calc(100vw - 24px));
            padding: 12px;
        }

        h1 {
            margin: 0 0 6px;
            font-size: 18px;
        }

        h2 {
            margin: 14px 0 8px;
            font-size: 14px;
        }

        p {
            margin: 5px 0;
            font-size: 13px;
            line-height: 1.4;
        }

        .muted {
            color: var(--muted);
        }

        .layer-row,
        .button-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 7px 0;
        }

        .layer-row label {
            flex: 1;
            font-size: 13px;
            cursor: pointer;
        }

        .swatch {
            width: 18px;
            height: 5px;
            border-radius: 3px;
            border: 1px solid rgba(0, 0, 0, 0.25);
        }

        button {
            appearance: none;
            border: 1px solid #aab4bf;
            background: #fff;
            color: var(--text);
            border-radius: 6px;
            padding: 8px 10px;
            font-size: 13px;
            cursor: pointer;
        }

        button:hover {
            background: #f2f5f8;
        }

        button.primary {
            width: 100%;
            border-color: var(--accent);
            background: var(--accent);
            color: #fff;
        }

        button.primary.active {
            background: var(--success);
            border-color: var(--success);
        }

        button.danger {
            color: var(--danger);
        }

        button:disabled {
            opacity: 0.45;
            cursor: not-allowed;
        }

        .button-row button {
            flex: 1;
        }

        #status {
            margin-top: 8px;
            padding: 8px;
            border-radius: 6px;
            background: #eef4fb;
            font-size: 12px;
            line-height: 1.4;
        }

        #status.success {
            background: #edf8ef;
            color: var(--success);
        }

        #status.warning {
            background: #fff5e8;
            color: var(--warning);
        }

        #status.error {
            background: #fff0ef;
            color: var(--danger);
        }

        #point-list {
            margin: 8px 0 0;
            padding: 0;
            list-style: none;
            max-height: 190px;
            overflow-y: auto;
            border-top: 1px solid var(--border);
        }

        #point-list li {
            padding: 7px 2px;
            border-bottom: 1px solid var(--border);
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            gap: 8px;
        }

        #point-list li span:last-child {
            text-align: right;
        }

        #geojson-output {
            width: 100%;
            height: 205px;
            resize: vertical;
            border: 1px solid #aab4bf;
            border-radius: 6px;
            padding: 8px;
            font: 11px/1.35 Consolas, Monaco, monospace;
            white-space: pre;
        }

        #copy-message {
            min-height: 16px;
            margin-top: 5px;
            font-size: 12px;
            color: var(--success);
        }

        @media (max-width: 720px) {
            #controls {
                width: calc(100vw - 24px);
                max-height: 45vh;
            }

            #geojson-panel {
                max-height: 38vh;
            }

            #geojson-output {
                height: 110px;
            }
        }
    </style>
</head>

<body>
<div id="map"></div>

<section id="controls" class="panel" aria-label="Map controls">
    <h1>Wayfinding Sign Planner</h1>
    <p class="muted">
        Sign locations snap to the hiking trail. Distances are calculated through
        the connected hiking-trail network back to Sign 1.
    </p>

    <h2>Trail layers</h2>
    <div id="layer-controls"></div>

    <h2>Sign locations</h2>
    <button id="add-mode" class="primary" type="button" disabled>
        Loading hiking trail network…
    </button>

    <div class="button-row">
        <button id="undo-point" type="button" disabled>Undo last</button>
        <button id="clear-points" class="danger" type="button" disabled>Clear all</button>
    </div>

    <div id="status">
        Loading the hiking trail for snapping and route calculations…
    </div>

    <ul id="point-list" aria-label="Placed sign locations"></ul>
</section>

<section id="geojson-panel" class="panel" aria-label="GeoJSON output">
    <h2 style="margin-top:0;">Sign-point GeoJSON</h2>
    <p class="muted">
        Copy this text and paste it into an email. The point coordinates have
        been snapped to the hiking trail.
    </p>
    <textarea id="geojson-output" readonly spellcheck="false"></textarea>

    <div class="button-row">
        <button id="copy-geojson" type="button">Copy GeoJSON</button>
        <button id="download-geojson" type="button">Download file</button>
    </div>

    <div id="copy-message" role="status" aria-live="polite"></div>
</section>

<script>
mapboxgl.accessToken = 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJja2hlenc1a3cwbTloMnByejU3Z3JoMXVjIn0.EojHQhHk73D3XVIXMyXbAg';

const HIKING_URL = 'https://reachabove.ca/geojson/Hiking.geojson';
const MAXIMUM_SNAP_DISTANCE_METRES = 60;
const VERTEX_KEY_DECIMALS = 5;

const trails = [
    {
        id: 'Hiking',
        label: 'Hiking',
        url: HIKING_URL,
        color: '#fa0098'
    },
    {
        id: 'MountainBike',
        label: 'Mountain bike',
        url: 'https://reachabove.ca/geojson/MountainBike.geojson',
        color: '#ffde5a'
    },
    {
        id: 'Connector',
        label: 'Connector',
        url: 'https://reachabove.ca/geojson/connector_Durham.geojson',
        color: '#ffffff'
    }
];

const signPoints = {
    type: 'FeatureCollection',
    features: []
};

const trailRoutes = {
    type: 'FeatureCollection',
    features: []
};

let addMode = false;
let hikingSegments = [];
let hikingNetworkReady = false;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-79.070756, 44.031415],
    zoom: 15,
    pitch: 45,
    bearing: 15
});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');

const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
});

map.addControl(geolocate, 'top-right');

geolocate.on('geolocate', event => {
    map.flyTo({
        center: [event.coords.longitude, event.coords.latitude],
        zoom: 15,
        pitch: 45,
        bearing: 15
    });
});

function setStatus(message, state = '') {
    const status = document.getElementById('status');
    status.className = state;
    status.innerHTML = message;
}

function haversineDistanceMetres(coord1, coord2) {
    const earthRadius = 6371008.8;
    const toRadians = degrees => degrees * Math.PI / 180;

    const lat1 = toRadians(coord1[1]);
    const lat2 = toRadians(coord2[1]);
    const deltaLat = toRadians(coord2[1] - coord1[1]);
    const deltaLon = toRadians(coord2[0] - coord1[0]);

    const a =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(deltaLon / 2) ** 2;

    return 2 * earthRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(metres) {
    if (!Number.isFinite(metres)) {
        return 'Not connected';
    }

    if (metres < 1000) {
        return `${Math.round(metres)} m`;
    }

    return `${(metres / 1000).toFixed(2)} km`;
}

function roundCoordinate(value) {
    return Number(value.toFixed(6));
}

function vertexNodeId(coordinate) {
    return `v:${coordinate[0].toFixed(VERTEX_KEY_DECIMALS)},${coordinate[1].toFixed(VERTEX_KEY_DECIMALS)}`;
}

function signNodeId(index) {
    return `sign:${index}`;
}

function nearestPointOnSegment(point, start, end) {
    const referenceLatitude = (point[1] + start[1] + end[1]) / 3;
    const metresPerDegreeLongitude =
        111320 * Math.cos(referenceLatitude * Math.PI / 180);
    const metresPerDegreeLatitude = 110540;

    const pointX = point[0] * metresPerDegreeLongitude;
    const pointY = point[1] * metresPerDegreeLatitude;
    const startX = start[0] * metresPerDegreeLongitude;
    const startY = start[1] * metresPerDegreeLatitude;
    const endX = end[0] * metresPerDegreeLongitude;
    const endY = end[1] * metresPerDegreeLatitude;

    const dx = endX - startX;
    const dy = endY - startY;
    const denominator = dx * dx + dy * dy;

    let fraction = 0;

    if (denominator > 0) {
        fraction =
            ((pointX - startX) * dx + (pointY - startY) * dy) /
            denominator;
        fraction = Math.max(0, Math.min(1, fraction));
    }

    const snappedCoordinate = [
        start[0] + fraction * (end[0] - start[0]),
        start[1] + fraction * (end[1] - start[1])
    ];

    return {
        coordinate: snappedCoordinate,
        fraction,
        distanceMetres: haversineDistanceMetres(point, snappedCoordinate)
    };
}

function findNearestHikingSegment(coordinate) {
    let bestMatch = null;

    hikingSegments.forEach(segment => {
        const candidate = nearestPointOnSegment(
            coordinate,
            segment.start,
            segment.end
        );

        if (!bestMatch || candidate.distanceMetres < bestMatch.distanceMetres) {
            bestMatch = {
                segmentId: segment.id,
                segmentFraction: candidate.fraction,
                coordinate: candidate.coordinate,
                distanceMetres: candidate.distanceMetres
            };
        }
    });

    return bestMatch;
}

function addLineSegments(coordinates, featureIndex, partIndex) {
    if (!Array.isArray(coordinates) || coordinates.length < 2) {
        return;
    }

    for (let index = 0; index < coordinates.length - 1; index += 1) {
        const start = coordinates[index];
        const end = coordinates[index + 1];

        if (
            !Array.isArray(start) ||
            !Array.isArray(end) ||
            start.length < 2 ||
            end.length < 2
        ) {
            continue;
        }

        hikingSegments.push({
            id: `${featureIndex}:${partIndex}:${index}`,
            start: [Number(start[0]), Number(start[1])],
            end: [Number(end[0]), Number(end[1])]
        });
    }
}

function extractHikingSegments(geojson) {
    hikingSegments = [];

    const features = geojson.type === 'FeatureCollection'
        ? geojson.features
        : [geojson];

    features.forEach((feature, featureIndex) => {
        const geometry = feature.type === 'Feature'
            ? feature.geometry
            : feature;

        if (!geometry) {
            return;
        }

        if (geometry.type === 'LineString') {
            addLineSegments(geometry.coordinates, featureIndex, 0);
        }

        if (geometry.type === 'MultiLineString') {
            geometry.coordinates.forEach((line, partIndex) => {
                addLineSegments(line, featureIndex, partIndex);
            });
        }

        if (geometry.type === 'GeometryCollection') {
            geometry.geometries.forEach((part, partIndex) => {
                if (part.type === 'LineString') {
                    addLineSegments(part.coordinates, featureIndex, partIndex);
                }

                if (part.type === 'MultiLineString') {
                    part.coordinates.forEach((line, nestedIndex) => {
                        addLineSegments(
                            line,
                            featureIndex,
                            `${partIndex}-${nestedIndex}`
                        );
                    });
                }
            });
        }
    });

    if (!hikingSegments.length) {
        throw new Error('No LineString trail geometry was found.');
    }
}

async function loadHikingNetwork() {
    const response = await fetch(HIKING_URL, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error(`Hiking trail request failed with ${response.status}.`);
    }

    const geojson = await response.json();
    extractHikingSegments(geojson);

    hikingNetworkReady = true;

    const addButton = document.getElementById('add-mode');
    addButton.disabled = false;
    addButton.textContent = 'Start adding sign points';

    setStatus(
        `Hiking network loaded with <strong>${hikingSegments.length.toLocaleString()}</strong> trail segments. Select <strong>Start adding sign points</strong>.`,
        'success'
    );
}

function addGraphEdge(graph, from, to, weight) {
    if (!graph.has(from)) {
        graph.set(from, []);
    }

    graph.get(from).push({ to, weight });
}

function buildRoutingGraph() {
    const graph = new Map();
    const nodeCoordinates = new Map();
    const signsBySegment = new Map();

    signPoints.features.forEach((feature, index) => {
        const segmentId = feature.properties.segment_id;

        if (!signsBySegment.has(segmentId)) {
            signsBySegment.set(segmentId, []);
        }

        signsBySegment.get(segmentId).push({
            id: signNodeId(index),
            fraction: feature.properties.segment_fraction,
            coordinate: feature.geometry.coordinates
        });
    });

    hikingSegments.forEach(segment => {
        const startId = vertexNodeId(segment.start);
        const endId = vertexNodeId(segment.end);

        const positions = [
            {
                id: startId,
                fraction: 0,
                coordinate: segment.start
            },
            {
                id: endId,
                fraction: 1,
                coordinate: segment.end
            }
        ];

        const signsOnSegment = signsBySegment.get(segment.id) || [];
        positions.push(...signsOnSegment);
        positions.sort((a, b) => a.fraction - b.fraction);

        positions.forEach(position => {
            if (!nodeCoordinates.has(position.id)) {
                nodeCoordinates.set(position.id, position.coordinate);
            }

            if (!graph.has(position.id)) {
                graph.set(position.id, []);
            }
        });

        for (let index = 0; index < positions.length - 1; index += 1) {
            const current = positions[index];
            const next = positions[index + 1];
            const weight = haversineDistanceMetres(
                current.coordinate,
                next.coordinate
            );

            addGraphEdge(graph, current.id, next.id, weight);
            addGraphEdge(graph, next.id, current.id, weight);
        }
    });

    return { graph, nodeCoordinates };
}

class MinimumHeap {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
        this.bubbleUp(this.items.length - 1);
    }

    pop() {
        if (!this.items.length) {
            return null;
        }

        const minimum = this.items[0];
        const last = this.items.pop();

        if (this.items.length) {
            this.items[0] = last;
            this.bubbleDown(0);
        }

        return minimum;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.items[parent].distance <= this.items[index].distance) {
                break;
            }

            [this.items[parent], this.items[index]] =
                [this.items[index], this.items[parent]];

            index = parent;
        }
    }

    bubbleDown(index) {
        const length = this.items.length;

        while (true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            let smallest = index;

            if (
                left < length &&
                this.items[left].distance < this.items[smallest].distance
            ) {
                smallest = left;
            }

            if (
                right < length &&
                this.items[right].distance < this.items[smallest].distance
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.items[index], this.items[smallest]] =
                [this.items[smallest], this.items[index]];

            index = smallest;
        }
    }

    get size() {
        return this.items.length;
    }
}

function calculateShortestPaths(graph, startId) {
    const distances = new Map();
    const previous = new Map();
    const queue = new MinimumHeap();

    graph.forEach((value, nodeId) => {
        distances.set(nodeId, Infinity);
    });

    distances.set(startId, 0);
    queue.push({ nodeId: startId, distance: 0 });

    while (queue.size) {
        const current = queue.pop();

        if (current.distance !== distances.get(current.nodeId)) {
            continue;
        }

        const neighbours = graph.get(current.nodeId) || [];

        neighbours.forEach(edge => {
            const candidateDistance = current.distance + edge.weight;

            if (candidateDistance < distances.get(edge.to)) {
                distances.set(edge.to, candidateDistance);
                previous.set(edge.to, current.nodeId);
                queue.push({
                    nodeId: edge.to,
                    distance: candidateDistance
                });
            }
        });
    }

    return { distances, previous };
}

function reconstructRoute(previous, nodeCoordinates, startId, endId) {
    const routeNodeIds = [];
    let currentId = endId;
    let safetyCounter = 0;

    while (currentId !== undefined && safetyCounter < 100000) {
        routeNodeIds.push(currentId);

        if (currentId === startId) {
            break;
        }

        currentId = previous.get(currentId);
        safetyCounter += 1;
    }

    if (routeNodeIds[routeNodeIds.length - 1] !== startId) {
        return null;
    }

    return routeNodeIds
        .reverse()
        .map(nodeId => nodeCoordinates.get(nodeId))
        .filter(Boolean);
}

function recalculateTrailDistances() {
    trailRoutes.features = [];

    if (!signPoints.features.length || !hikingNetworkReady) {
        updateMapSources();
        return;
    }

    const { graph, nodeCoordinates } = buildRoutingGraph();
    const startId = signNodeId(0);
    const { distances, previous } =
        calculateShortestPaths(graph, startId);

    signPoints.features.forEach((feature, index) => {
        const targetId = signNodeId(index);
        const distance = distances.get(targetId);

        feature.properties.sign_number = index + 1;
        feature.properties.display_label = String(index + 1);
        feature.properties.distance_along_trail_m =
            Number.isFinite(distance) ? Math.round(distance) : null;
        feature.properties.route_status =
            Number.isFinite(distance) ? 'connected' : 'not_connected';

        if (index === 0 || !Number.isFinite(distance)) {
            return;
        }

        const routeCoordinates = reconstructRoute(
            previous,
            nodeCoordinates,
            startId,
            targetId
        );

        if (routeCoordinates && routeCoordinates.length > 1) {
            trailRoutes.features.push({
                type: 'Feature',
                properties: {
                    sign_number: index + 1,
                    distance_along_trail_m: Math.round(distance)
                },
                geometry: {
                    type: 'LineString',
                    coordinates: routeCoordinates
                }
            });
        }
    });

    updateMapSources();
}

function buildExportGeoJSON() {
    return {
        type: 'FeatureCollection',
        name: 'wayfinding_sign_locations',
        features: signPoints.features.map(feature => ({
            type: 'Feature',
            properties: {
                sign_number: feature.properties.sign_number,
                distance_from_sign_1_along_hiking_trail_m:
                    feature.properties.distance_along_trail_m,
                route_status: feature.properties.route_status,
                snapped_from_click_m:
                    feature.properties.snapped_from_click_m
            },
            geometry: {
                type: 'Point',
                coordinates: [
                    roundCoordinate(feature.geometry.coordinates[0]),
                    roundCoordinate(feature.geometry.coordinates[1])
                ]
            }
        }))
    };
}

function updateMapSources() {
    const pointSource = map.getSource('sign-points');
    const routeSource = map.getSource('trail-routes');

    if (pointSource) {
        pointSource.setData(signPoints);
    }

    if (routeSource) {
        routeSource.setData(trailRoutes);
    }
}

function updateInterface() {
    const pointCount = signPoints.features.length;
    const output = document.getElementById('geojson-output');
    const list = document.getElementById('point-list');
    const undoButton = document.getElementById('undo-point');
    const clearButton = document.getElementById('clear-points');

    output.value = JSON.stringify(buildExportGeoJSON(), null, 2);
    list.innerHTML = '';

    signPoints.features.forEach(feature => {
        const item = document.createElement('li');
        const left = document.createElement('span');
        const right = document.createElement('span');

        left.textContent = `Sign ${feature.properties.sign_number}`;

        if (feature.properties.sign_number === 1) {
            right.textContent = 'Starting point';
        } else if (feature.properties.route_status === 'connected') {
            right.textContent =
                `${formatDistance(feature.properties.distance_along_trail_m)} by trail`;
        } else {
            right.textContent = 'Trail section not connected';
        }

        item.append(left, right);
        list.appendChild(item);
    });

    undoButton.disabled = pointCount === 0;
    clearButton.disabled = pointCount === 0;
}

function refreshCalculationsAndInterface() {
    recalculateTrailDistances();
    updateInterface();
}

function addSignPoint(clickedCoordinate) {
    const nearest = findNearestHikingSegment(clickedCoordinate);

    if (!nearest) {
        setStatus(
            'No hiking trail segment was available for snapping.',
            'error'
        );
        return;
    }

    if (nearest.distanceMetres > MAXIMUM_SNAP_DISTANCE_METRES) {
        setStatus(
            `That click was <strong>${formatDistance(nearest.distanceMetres)}</strong> from the hiking trail. Click within ${MAXIMUM_SNAP_DISTANCE_METRES} m of the trail.`,
            'warning'
        );
        return;
    }

    signPoints.features.push({
        type: 'Feature',
        properties: {
            sign_number: signPoints.features.length + 1,
            display_label: String(signPoints.features.length + 1),
            segment_id: nearest.segmentId,
            segment_fraction: nearest.segmentFraction,
            snapped_from_click_m: Math.round(nearest.distanceMetres),
            distance_along_trail_m: null,
            route_status: 'pending'
        },
        geometry: {
            type: 'Point',
            coordinates: nearest.coordinate
        }
    });

    refreshCalculationsAndInterface();

    const addedFeature =
        signPoints.features[signPoints.features.length - 1];

    if (addedFeature.properties.route_status === 'not_connected') {
        setStatus(
            `Sign ${addedFeature.properties.sign_number} was snapped to the hiking trail, but that trail section is not connected to Sign 1 in the source data.`,
            'warning'
        );
        return;
    }

    const snapMessage = nearest.distanceMetres < 1
        ? 'on the trail'
        : `${formatDistance(nearest.distanceMetres)} onto the trail`;

    const routeMessage = addedFeature.properties.sign_number === 1
        ? 'This is the route starting point.'
        : `Trail distance from Sign 1: <strong>${formatDistance(addedFeature.properties.distance_along_trail_m)}</strong>.`;

    setStatus(
        `Sign ${addedFeature.properties.sign_number} snapped ${snapMessage}. ${routeMessage}`,
        'success'
    );
}

function setAddMode(enabled) {
    addMode = enabled;

    const button = document.getElementById('add-mode');

    button.classList.toggle('active', enabled);
    button.textContent = enabled
        ? 'Stop adding sign points'
        : 'Start adding sign points';

    map.getCanvas().style.cursor = enabled ? 'crosshair' : '';

    if (enabled) {
        setStatus(
            `Add mode is <strong>on</strong>. Click near the hiking trail. Each sign will snap to the trail and route back to Sign 1.`,
            'success'
        );
    } else {
        setStatus(
            `Add mode is off. Select <strong>Start adding sign points</strong> to continue.`,
            ''
        );
    }
}

function createLayerControls() {
    const container = document.getElementById('layer-controls');

    trails.forEach(trail => {
        const row = document.createElement('div');
        row.className = 'layer-row';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `toggle-${trail.id}`;
        checkbox.checked = true;

        const swatch = document.createElement('span');
        swatch.className = 'swatch';
        swatch.style.background = trail.color;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = trail.label;

        checkbox.addEventListener('change', () => {
            if (!map.getLayer(trail.id)) {
                return;
            }

            map.setLayoutProperty(
                trail.id,
                'visibility',
                checkbox.checked ? 'visible' : 'none'
            );
        });

        row.append(checkbox, swatch, label);
        container.appendChild(row);
    });
}

createLayerControls();
updateInterface();

map.on('load', async () => {
    map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512
    });

    map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: 1.75
    });

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
                visibility: 'visible',
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': trail.color,
                'line-opacity': 0.95,
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

    map.addSource('trail-routes', {
        type: 'geojson',
        data: trailRoutes
    });

    map.addLayer({
        id: 'trail-routes',
        type: 'line',
        source: 'trail-routes',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': '#41d9ff',
            'line-width': [
                'interpolate',
                ['linear'],
                ['zoom'],
                12, 3,
                18, 7
            ],
            'line-opacity': 0.9,
            'line-dasharray': [1.5, 1]
        }
    });

    map.addSource('sign-points', {
        type: 'geojson',
        data: signPoints
    });

    map.addLayer({
        id: 'sign-point-circles',
        type: 'circle',
        source: 'sign-points',
        paint: {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                12, 8,
                18, 14
            ],
            'circle-color': [
                'case',
                ['==', ['get', 'sign_number'], 1],
                '#00c853',
                [
                    '==',
                    ['get', 'route_status'],
                    'not_connected'
                ],
                '#7b1fa2',
                '#ff3d00'
            ],
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 2
        }
    });

    map.addLayer({
        id: 'sign-point-labels',
        type: 'symbol',
        source: 'sign-points',
        layout: {
            'text-field': ['get', 'display_label'],
            'text-size': 12,
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-allow-overlap': true
        },
        paint: {
            'text-color': '#ffffff',
            'text-halo-color': 'rgba(0,0,0,0.45)',
            'text-halo-width': 1
        }
    });

    try {
        await loadHikingNetwork();
    } catch (error) {
        console.error(error);
        setStatus(
            `The map can display the trail, but the browser could not load it for route calculations. Check that <code>${HIKING_URL}</code> allows cross-origin requests.`,
            'error'
        );
    }
});

map.on('click', event => {
    if (!addMode || !hikingNetworkReady) {
        return;
    }

    const clickedFeatures = map.queryRenderedFeatures(event.point, {
        layers: ['sign-point-circles']
    });

    if (clickedFeatures.length) {
        return;
    }

    addSignPoint([event.lngLat.lng, event.lngLat.lat]);
});

map.on('click', 'sign-point-circles', event => {
    const feature = event.features[0];
    const properties = feature.properties;

    let distanceText = 'Starting point';

    if (Number(properties.sign_number) !== 1) {
        distanceText = properties.route_status === 'connected'
            ? `${formatDistance(Number(properties.distance_along_trail_m))} from Sign 1 by hiking trail`
            : 'Not connected to Sign 1 in the hiking-trail data';
    }

    new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
            `<strong>Sign ${properties.sign_number}</strong><br>${distanceText}`
        )
        .addTo(map);
});

map.on('mouseenter', 'sign-point-circles', () => {
    if (!addMode) {
        map.getCanvas().style.cursor = 'pointer';
    }
});

map.on('mouseleave', 'sign-point-circles', () => {
    map.getCanvas().style.cursor = addMode ? 'crosshair' : '';
});

document.getElementById('add-mode').addEventListener('click', () => {
    if (!hikingNetworkReady) {
        return;
    }

    setAddMode(!addMode);
});

document.getElementById('undo-point').addEventListener('click', () => {
    signPoints.features.pop();
    refreshCalculationsAndInterface();

    setStatus(
        signPoints.features.length
            ? 'The last sign was removed and trail distances were recalculated.'
            : 'All sign points have been removed.',
        ''
    );
});

document.getElementById('clear-points').addEventListener('click', () => {
    if (!signPoints.features.length) {
        return;
    }

    const confirmed = window.confirm(
        'Remove all proposed sign points?'
    );

    if (!confirmed) {
        return;
    }

    signPoints.features = [];
    refreshCalculationsAndInterface();
    setStatus('All sign points have been removed.', '');
});

document.getElementById('copy-geojson').addEventListener('click', async () => {
    const output = document.getElementById('geojson-output');
    const message = document.getElementById('copy-message');

    try {
        await navigator.clipboard.writeText(output.value);
        message.textContent = 'GeoJSON copied to the clipboard.';
    } catch (error) {
        output.removeAttribute('readonly');
        output.select();
        document.execCommand('copy');
        output.setAttribute('readonly', '');
        message.textContent = 'GeoJSON copied to the clipboard.';
    }

    window.setTimeout(() => {
        message.textContent = '';
    }, 3000);
});

document.getElementById('download-geojson').addEventListener('click', () => {
    const blob = new Blob(
        [JSON.stringify(buildExportGeoJSON(), null, 2)],
        { type: 'application/geo+json' }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'wayfinding-sign-locations.geojson';
    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
});
</script>
</body>
</html>
