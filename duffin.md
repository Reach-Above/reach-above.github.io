<html>
<head>
<title>Duffin</title>

<meta charset='utf-8' />
     <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css' rel='stylesheet' />
    <script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>
    <script src="https://unpkg.com/scrollama"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        body {
            margin:0; 
            padding:0; 
            font-family: sans-serif;
        }
        a, a:hover, a:visited {
            color: #75b8ff;
        }
        #map {
            top:0; 
            height: 100vh;
            width:100vw;
            position: fixed;
            z-index: -5;
        }
        #header {
            margin: 3vh auto;
            width: 90vw;
            padding: 2vh;
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
        }
        .fa {
            padding: 1px;
            width: 10px;
            text-align: center;
            text-decoration: none;
            border-radius: 50%;
          }
          
        #features {
            padding-top: 10vh;
            padding-bottom: 10vh;
            z-index: 100;
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
            font-size: 14px;
        }

        .step img {
            width: 100%;
        }

        @media (max-width: 750px) {
            #features {
                width: 90vw;
                margin: 0 auto;
            }
        }
        </style>
</head>
<body>
	
<div id="map"></div>
<div id="story"></div>
<script>
var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJja2xpY3V1Z2MwN3Z1MnVtd2FseG5yMnhuIn0.-ZA1RuBCOgW9BiWitgpgXQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'A Story: Duffins Creek',
    subtitle: 'students from DDSB@home',
    byline: 'Ms. Alison Elwood Class Gr.7 ',
    footer: '<a href="https://www.instagram.com/reach.above/" class="fa fa-instagram"></a>  Biking Adventures | Maps and Stuff  <a href="https://twitter.com/reach_above" class="fa fa-twitter"></a></br>Special Thanks to:</br>© Reach Above, 2020',
    chapters: [
        {
            id: 'Chapter1',
            title: 'Chapter 1',
            image: '',
            description: 'description goes here',
            location: {
                center: [-78.69037, 43.93645 ],
                zoom: 11.74,
                pitch: 0.00,
                bearing: -2.30
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.6
                },
                 {
                    layer: '',
                    opacity: 0.6
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0.8
                },
                 {
                    layer: '',
                    opacity: 0.6
                }
            ]
        },
        {
            id: 'Chapter2',
            title: 'Chapter 2',
            image: '',
            description: 'Description',
            location: {
                center: [-78.68791, 43.91651],
                zoom: 13.06,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
       
        },
	 {
            id: 'Chapter3',
            title: 'Chapter3',
            image: './mapathon/Full_GazC.jpg',
            description: 'description...',
            location: {
                center: [ -78.67574, 43.91687],
                zoom: 15.25,
                pitch: 0.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0.0
                }
            ]       
        },
        {
            id: 'Chapter 4',
            title: 'Chapter 4',
            image: './mapathon/S_E.jpg',
            description: 'Description...',
            location: {
                center: [-78.67219, 43.92559],
                zoom: 17.08,
                pitch: 60.00,
                bearing: -8.00
            },
			
            onChapterEnter: [],
            onChapterExit: []
            
        },
        {
            id: 'Chapter5',
            title: 'Chapter 5',
            image: '',
            description: 'Description... ',
            location: {
                center: [-78.675, 43.904],
                zoom: 16.73,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.8
                },
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0.8
                }
            ]
        },
    {
            id: 'Chapter6',
            title: 'Chapter 6',
            image: '',
            description: 'Description',
            location: {
                center: [-78.69649, 43.90491  ],
                zoom: 16.95,
                pitch: 60.00,
                bearing: -24.80
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'Chapter7',
            title: 'Chapter 7',
            image: '',
            description: 'description...',
            location: {
                center: [-78.66974, 43.92563],
                zoom: 15.30,
                pitch: 0.00,
                bearing: 0.00
            },
             onChapterEnter: [],
             onChapterExit: []
        },
            {
            id: 'Chapter8',
            title: 'Chapter 8',
            image: '',
            description: 'description...',
            location: {
                center: [-78.702, 43.920],
                zoom: 15.54,
                pitch: 0.00,
                bearing: 0.00
            },
             onChapterEnter: [],
             onChapterExit: []
        },
           {
            id: 'Chapter9',
            title: 'Chapter 9',
            image: '',
            description: 'description...',
            location: {
                center: [ -78.68791,43.90641],
                zoom:  14.63,
                pitch: 60.00,
                bearing:  -37.05
            },
             onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'Chapter10',
            title: 'Chapter 10',
            image: '',
            description: 'description...',
            location: {
                center: [-78.68791, 43.91651],
                zoom: 13.06,
                pitch: 0.00,
                bearing: 0.00
            },
             onChapterEnter: [],
             onChapterExit: []
        },
        
       {
            id: 'Chapter11',
            title: 'Chapter 11',
            image: '',
            description: 'description...',
            location: {
                center: [-78.62617, 43.97136 ],
                zoom: 14.31,
                pitch: 37.00,
                bearing: -19.02
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
    {
            id: 'Chapter12',
            title: 'Chapter 12',
            image: '',
            description: 'description...',
            location: {
                center: [ -79.12724, 44.12500],
                zoom: 17.35,
                pitch: 60.00,
                bearing: 76.80
            },
             onChapterEnter: [],
             onChapterExit: []
        },
         {
            id: 'Chapter13',
            title: 'Chapter 13',
            image: '',
            description: 'description...',
            location: {
                center: [-79.09287, 44.04797],
                zoom: 14.65,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Chapter14',
            title: 'Chapter 14',
            image: '',
            description: '',
            location: {
                center: [ -78.68438, 43.91550],
                zoom: 13.17,
                pitch: 0.00,
                bearing: 0.00
            },
             onChapterEnter: [],
             onChapterExit: []
        },
         {
            id: 'Chapter 15',
            title: 'Chapter 15',
            image: '',
            description: '',
            location: {
                center: [ -78.68438, 43.91550],
                zoom: 13.17,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Chapter16',
            title: 'Chapter 16',
            image: '',
            description: '',
            location: {
                center: [ -78.68438, 43.91550],
                zoom: 13.17,
                pitch: 60.00,
                bearing: 0.00
            },
             onChapterEnter: [],
             onChapterExit: []
        }
    ]
};

</script>
<script>
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
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
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";	  
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
    scrollZoom: false,
    transformRequest: transformRequest
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function() {
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map.flyTo(chapter.location);
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
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

// setup resize event
window.addEventListener('resize', scroller.resize);

</script>


</body>
</html>

