---
title: ATSRAC2022
---
<html>
<head>
<title>Clarington Active Transportation and Safe Roads Advisory Committee 2022 Report</title>	
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3RKGWJ9K0S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3RKGWJ9K0S');
</script>


    <meta charset='utf-8' />
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/mapbox/assembly/publisher-staging/src/svgs/mapbox.svg">
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet' />
    <script src="https://unpkg.com/intersection-observer@0.12.0/intersection-observer.js"></script>
    <script src="https://unpkg.com/scrollama"></script>
   
  <style>
        body {
            margin:0;
            padding:0;
            font-family: sans-serif;
        }
        a, a:hover, a:visited {
            color: #0071bc;
        }
        #map {
            top:0;
            height: 100vh;
            width:100vw;
            position: fixed;
        }
        #mapInset {
            bottom:50px;
            right:30px;
            height: 180px;
            width:250px;
            max-width:100%;
            position: fixed;
            z-index: 1;
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
            pointer-events: none;
        }
        #mapInset .mapboxgl-ctrl-bottom-left{
            display: none;
        }
        @media (max-width: 500px) {
            #mapInset {
                display: none;
            }
        }
        #header {
            margin: auto;
            width: 100%;
            position: relative;
            z-index: 5;
        }
        #header h1, #header h2, #header p {
            margin: 0;
            padding: 2vh 2vw;
            text-align: center;
        }
        #footer {
            width: 100%;
            min-height: 5vh;
            padding-top: 2vh;
            padding-bottom: 2vh;
            text-align: center;
            line-height: 25px;
            font-size: 13px;
            position: relative;
            z-index: 5;
        }
        #features {
            padding-top: 10vh;
            padding-bottom: 10vh;
        }
	
	 .container-lg {
             max-width: 100vw !important;
             margin-right: auto;
             margin-left: auto;
        }   
	
	 .px-3 {
             padding-right: 0px !important;
             padding-left: 0px !important;
        }
        .markdown-body h2 {
        border-bottom: 0px !important;
        }
        
         .markdown-body h1 {
        border-bottom: 0px !important;
        }
	  
        .hidden {
            visibility: hidden;
        }
        .centered {
            width: 50vw;
            margin: 0 auto;
        }
        .lefty {
            width: 33vw;
            margin-left: 5vw;
        }
        .righty {
            width: 33vw;
            margin-left: 62vw;
        }
        .fully {
            width: 100%;
            margin: auto;
        }
        .light {
            color: #444;
            background-color: #fafafa;
        }
        .dark {
            color: #fafafa;
            background-color: #444;
        }
        .step {
            padding-bottom: 50vh;
            /* margin-bottom: 10vh; */
            opacity: 0.25;
        }
        .step.active {
            opacity: 0.9;
        }

        .step div {
            padding:  25px 50px;
            line-height: 25px;
            font-size: 13px;
        }

        .step img {
            width: 100%;
        }

        @media (max-width: 750px) {
            .centered, .lefty, .righty, .fully {
                width: 90vw;
                margin: 0 auto;
            }
        }

        /* Fix issue on mobile browser where scroll breaks  */
        .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,
        .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas {
            touch-action: unset;
        }

        </style>
</head>
<body>

<div id="map"></div>
<div id="mapInset"></div>
<div id="story"></div>

<script>
var config = {
    style: 'mapbox://styles/reachabove/cl7qbr4v5000a15pon1ik17hk',
    accessToken: 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJja2hlenc1a3cwbTloMnByejU3Z3JoMXVjIn0.EojHQhHk73D3XVIXMyXbAg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Active Transportation and Safe Roads Advisory Committee Status Report 2022',
    subtitle: 'Presentation for Mayor Foster and Clarington Council Members',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: 'The purpose of this report is to provide members of Council with a status report on Clarington Active Transportation and Safe Roads Advisory Committee (AT&SRAC) including; accomplishments, recommended priorities and, challenges; for the next term of Council.',
            location: {
                center: [-78.68069, 43.91695],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'centered',
            hidden: false,
            title: 'Background',
            image: '',
            description: 'The AT&SRAC was established by Clarington Council in January 2018. <br>10 Members plus Councillor Janice Jones were appointed to the AT&SRAC by Council in April 2018; <br>First meeting was held May 2018; <br>Term of Committee Members amended in 2021 to coincide with the term of Council; <br>A new Committee will be appointed by the next Council. <br> <h3> Current Members</h3>Arnold Mostert, Bart Hawkins Kreps, Connie Kobelka, Connor Houston, Councillor Janice Jones, Jeannie Winters, Jim Boate, Philip Haylock, Richard Oldfield, and myself.  Staff support is provided by Andrew Johnson and Catherine Verhoog.',
            location: {
                center: [-78.68069, 43.91695],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
			speed: 2,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Accomplishments',
            image: '',
            description: 'The following is a list of the many, but not all, accomplishments:',
            location: {
                center: [-78.62706, 43.97922],
                zoom: 11,
                pitch: 34,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
			speed: 2,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Provided input on trail planning and development;<br> Advocated trail connectivity',
            location: {
                center: [-78.80418, 43.88935],
                zoom: 12.76,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
			speed: 2,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Promoted active transportation and safety prior to COVID - 19 including;<br> Sport & Leisure Fair, Kids in the Park, Family Safety Day Event;',
            location: {
                center: [-78.61575, 43.92238],
                zoom: 12.76,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
			speed: 2,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Recommended winter maintenance of trails in Bowmanville and Newcastle which was a tremendous success according to trail users;<br> Advised staff of trail maintenance issues and deficiencies i.e. curb cuts and brush removal;',
            location: {
                center: [-78.67135, 43.91589],
				zoom: 15.34,
                pitch: 53.50,
                bearing: 16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
			speed: 2,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './mapathon/TrailSigns.png',
            description: 'Advised staff of trail maintenance issues and deficiencies i.e. curb cuts and brush removal;<br> Supported traffic calming initiatives on local roads;<br> Advocated for trail signage and assisted staff with sign selection and locations;',
            location: {
                center: [-78.67819, 43.89469],
                zoom: 15.63,
                pitch: 74.00,
                bearing: -15.22
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'eigth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Participated in June-Bike Month events and organized weekly nature walks;<br> Explored Share the Road – Bike Friendly Community designation;<br> Promoted Farm Fresh Bike Tours in partnership with Clarington Tourism',
            location: {
                center: [-78.73569, 43.93137],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'HH1',
                     opacity: 1,
                     duration: 5000
					 }],
            onChapterExit: [{
                     layer: 'HH1',
                     opacity: 0
                 }]
        },
		{
            id: 'nineth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Future Priorities',
            image: '',
            description: 'Provide input to the draft Active Transportation Master Plan;<br>Continue to advise and support trail development and connectivity;<br>Promote active transportation in the community;<br>Advocate for safer roads for pedestrians and cyclists including traffic calming;<br>Revisit Bike Friendly Community designation;<br>Support expansion of trail winter maintenance;<br>Provide more input on Secondary Plan reviews;<br>Expand Bike Month promotion and participation;<br>Support increased Multi Use Paths on arterial roads;<br>Advocate for improved trail safety i.e dividing line on all trails',
            location: {
                center: [-78.59736, 43.95960],
                zoom: 11.26,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'tenth-chapter',
            alignment: 'centre',
            hidden: false,
            title: 'Future Challenges',
            image: '',
            description: 'Recruiting members for the Committee especially younger members of the community;<br> increasing community engagement for active transportation especially pedestrian traffic;<br> Working with partners to increase active transportation linked to tourism and local economy.',
            location: {
                center: [-78.59736, 43.95960],
                zoom: 11.26,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'eleventh-chapter',
            alignment: 'centre',
            hidden: false,
            title: 'Thank You',
            image: '',
            description: 'Staff, especially Public Works, for their support and updates at meetings as well as being available when needed <br>Andrew Johnson who serves as the staff liaison for the AT&SRC; <br>Members of Council for appointing and supporting the Committee and especially Councillor Janice Jones who provided important guidance at various times; <br>	Committee Members who volunteered their time and knowledge to promote active transportation in our community.',
            location: {
                center: [-78.67846, 43.97120],
                zoom: 11.57,
                pitch: 59.00,
                bearing: -15.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};  
</script>
<script>  
var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

// Create a inset map if enabled in config.js
if (config.inset) {
 var insetMap = new mapboxgl.Map({
    container: 'mapInset', // container id
    style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
    center: config.chapters[0].location.center,
    // Hardcode above center value if you want insetMap to be static.
    zoom: 3, // starting zoom
    hash: false,
    interactive: false,
    attributionControl: false,
    //Future: Once official mapbox-gl-js has globe view enabled,
    //insetmap can be a globe with the following parameter.
    //projection: 'globe'
  });
}

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();


map.on("load", function() {
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
    map.on('move', getInsetBounds);
    }
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(async response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);
        // Incase you do not want to have a dynamic inset map,
        // rather want to keep it a static view but still change the
        // bbox as main map move: comment out the below if section.
        if (config.inset) {
          if (chapter.location.zoom < 5) {
            insetMap.flyTo({center: chapter.location.center, zoom: 0});
          }
          else {
            insetMap.flyTo({center: chapter.location.center, zoom: 3});
          }
        }
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', () => {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 180, {
                    duration: 30000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });
});

//Helper functions for insetmap
function getInsetBounds() {
            let bounds = map.getBounds();

            let boundsJson = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ]
                            ]
                        ]
                    }
                }]
            }

            if (initLoad) {
                addInsetLayer(boundsJson);
                initLoad = false;
            } else {
                updateInsetLayer(boundsJson);
            }

        }

function addInsetLayer(bounds) {
    insetMap.addSource('boundsSource', {
        'type': 'geojson',
        'data': bounds
    });

    insetMap.addLayer({
        'id': 'boundsLayer',
        'type': 'fill',
        'source': 'boundsSource', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#fff', // blue color fill
            'fill-opacity': 0.2
        }
    });
    // // Add a black outline around the polygon.
    insetMap.addLayer({
        'id': 'outlineLayer',
        'type': 'line',
        'source': 'boundsSource',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 1
        }
    });
}

function updateInsetLayer(bounds) {
    insetMap.getSource('boundsSource').setData(bounds);
}



// setup resize event
window.addEventListener('resize', scroller.resize);

</script>

</body>
</html>
