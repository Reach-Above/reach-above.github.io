<html>
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RD6956Y706"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RD6956Y706');
</script>

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
            color: #0071bc;
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
            padding: 5px;
            font-size: 10px;
            width: 10px;
            text-align: center;
            text-decoration: none;
            border-radius: 50%;
          }
        /* Add a hover effect if you want */
        .fa:hover {
          opacity: 0.7;
        }
        .fa-twitter {
          background: #55ACEE;
          color: white;
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
            font-size: 13px;
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
    style: 'mapbox://styles/reachabove/ckgqu406e4rc119o31llg01wk',
    accessToken: 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJjazBkcm1wazUwYWNmM2xxZXhhNW1sc2hmIn0.ybV26N8Bl8WyZejLHvwiCw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Staying Active during the Pandemic',
    subtitle: 'Local Adventures of Sam & Evan (6 & 4 years old)',
    byline: 'by Houston Family',
    footer: 'Follow our biking adventures on <a href="https://www.instagram.com/reach.above/" class="fa fa-instagram"></a> Follow along for maps and stuff <a href="https://twitter.com/reach_above" class="fa fa-twitter"></a> ',
    chapters: [
        {
            id: 'Opportunity',
            title: 'Outdoor Opportunity',
            image: './mapathon/S_E_D.jpg',
            description: 'With school, sports and indoor activites cancelled we had more opportunities to get ouside and explore our community. Here is a story of where we rode our bikes and hiked',
            location: {
                center: [-78.69037, 43.93645 ],
                zoom: 11.74,
                pitch: 0.00,
                bearing: -2.30
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                },
                 {
                    layer: 'strava-2',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                },
                 {
                    layer: 'strava-2',
                    opacity: 1
                }
            ]
        },
        {
            id: 'local',
            title: 'Our Local Rides',
            image: '',
            description: 'Almost everyday we got outside and rode our bikes. The darker and wider the line colour the further the ride',
            location: {
                center: [-78.68791, 43.91651],
                zoom: 13.06,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Weather',
            title: 'We rode in all sorts of weather. Rain, Snow, Cold and Hot',
            image: './mapathon/S_E.jpg',
            description: 'Here is a picture mid-ride in a snow storm.',
            location: {
                center: [-78.67219, 43.92559],
                zoom: 17.08,
                pitch: 60.00,
                bearing: -8.00
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ]
        },
        {
            id: 'Joseph',
            title: 'We went exploring all sorts of places. We went to our school',
            image: '',
            description: '<a href="https://http://stjosephbowmanville.pvnccdsb.on.ca/">St. Joseph C.E.S. Bowmanville</a>',
            location: {
                center: [-78.675, 43.904],
                zoom: 16.73,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'buildings',
                    opacity: 0.8
                },
            ],
            onChapterExit: [
                {
                    layer: 'buildings',
                    opacity: 0.8
                }
            ]
        },
    {
            id: 'Daycare',
            title: 'And to Evans Daycare',
            image: '',
            description: 'In June - Instead of a drive-by, we did a ride-by, to say farewell to Evan teachers as he is off to J.K. ',
            location: {
                center: [-78.69655, 43.90521 ],
                zoom: 17.02,
                pitch: 60.00,
                bearing: 43.20
            },
            onChapterEnter: [
                {
                    layer: 'buildings',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'buildings',
                    opacity: 0.8
                }
            ]
        },
        {
            id: 'Jury',
            title: 'We discovered some of Bowmanvilles Histoy - Over the bridge to the Jury Lands',
            image: './mapathon/Skids.gif',
            description: 'During the years 1941 to 1945 the property was used as a German prisoner-of-war camp. The camp was used primarily for German officers, with over 800 prisoners occupying the camp at times. Read more at <a href="https://www.jurylandsfoundation.com">Jury Land Foundation</a>',
            location: {
                center: [-78.66974, 43.92563],
                zoom: 15.30,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                   layer: 'buildings',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'buildings',
                    opacity: 0.0
                }
            ]
        },
            {
            id: 'Dirt Jumps',
            title: 'We loved going to the Jackman Rd Dirt Jumps',
            image: './mapathon/Jackman.gif',
            description: 'We went here a lot you can tell by all the lines overlapping near the river and all the lines with the trips to this excellent area.',
            location: {
                center: [-78.702, 43.920],
                zoom: 15.54,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ]
        },
                   {
            id: 'Creeks',
            title: 'We travelled along the paved and gravel paths parallel to Bowmanville Creek and Soper Creek',
            image: './mapathon/Hill.gif',
            description: 'Lots of work is going into connecting these two trails together and to the waterfront trail. And protecting the Salmon. Thank you <a href="https://valleys2000.ca/">Valleys 2000</a>',
            location: {
                center: [ -78.68791,43.90641],
                zoom:  14.63,
                pitch: 60.00,
                bearing:  -37.05
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ]
        },
       {
            id: 'Orono',
            title: 'Just a 10 minute drive from us is the Orono Crown Lands',
            image: './mapathon/S_E4.jpg',
            description: 'We were lucky to have these trails available to us since March 2020. Thank you <a href="https://oronocrownlands.com/">Orono Crown Lands</a>',
            location: {
                center: [-78.62617, 43.97136 ],
                zoom: 14.31,
                pitch: 37.00,
                bearing: -19.02
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ]
        },
        
    {
            id: 'Uxbridge Bike Park',
            title: 'We travel a bit further simetimes to the Uxbridge Rotary Bike Park',
            image: './mapathon/BP_Evan.gif',
            description: 'There are no GPS tracks here, but we love riding the pump track in Uxbridge.',
            location: {
                center: [ -79.12724, 44.12500],
                zoom: 17.35,
                pitch: 60.00,
                bearing: 76.80
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ]
        },
         {
            id: 'Durham Forest',
            title: 'Durham Forest has some of the best Mountain Biking in Ontario',
            image: './mapathon/Double.gif',
            description: 'Check out this fantastic organization building these wicked trails. <a href="https://durhammountainbiking.ca/">DMBA</a>',
            location: {
                center: [-79.08406, 44.04963],
                zoom: 14.65,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ]
        },
        {
            id: 'Stats',
            title: 'How active have we been so far?',
            image: './mapathon/Evan_Balance.gif',
            description: 'Total KM Travveled, Average Trip Length, etc...',
            location: {
                center: [ -78.68438, 43.91550],
                zoom: 13.17,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strava-1',
                    opacity: 1
                }
            ]
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
