<html>
<head>
<title>Duffins</title>

<meta charset='utf-8' />
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
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

/* https://demos.mapbox.com/location-helper/ */

<body>
	
<div id="map"></div>
<div id="story"></div>
<script>
var config = {
    style: 'mapbox://styles/reachabove/cklkzbol1105f17pce3kwxj6g',
    accessToken: 'pk.eyJ1IjoicmVhY2hhYm92ZSIsImEiOiJja2xpY3V1Z2MwN3Z1MnVtd2FseG5yMnhuIn0.-ZA1RuBCOgW9BiWitgpgXQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'A Story: A Duffins Creek Wetland',
    subtitle: 'Students from DDSB@home',
    byline: '',
    footer: 'Footer </br>Special Thanks to:</br>© Reach Above, 2020',
    chapters: [
        {
            id: 'Chapter1',
            title: 'Introduction',
            description: 'We are a group of concerned Grade 7 students from the Pickering and Ajax area of Durham Region,Ontario,Canada. We are trying to stop the proposed warehouse and parking lot development on a wetland that is connected to Duffins Creek,an important part of our local watershed.',
            location: {
                center: [-90.22113, 48.57957 ],
                zoom:  3.51,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'municipal-boundaries-3857-9l5equ',
                    opacity: 0.6
                }
            ],
            onChapterExit: [
                {
                    layer: 'municipal-boundaries-3857-9l5equ',
                    opacity: 0.0
                },
                {
                    layer: 'municipal-boundaries-3857-9l5equ',
                    opacity: 0.0
                }
                 
            ]
        },
        {
            id: 'Chapter2',
            title: 'Where it all began',
           
            description: 'Our class read this article with the task of understanding issues from multiple perspective. Because the proposed development is in our backyards we became very curious to know more. We were divided on the issue so we began writing letters to the people involved.',
            location: {
                center: [-79.03893, 43.83587],
                zoom: 12.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'wetlands-3857-59jd17',
                    opacity: 0.5
                }],
            onChapterExit: []
       
        },
	 {
            id: 'Chapter3',
            title: 'Why are wetlands important to our environment?',
            
            description: 'Wetlands provide habitat for wildlife including migratory birds and amphibians. They help to combat climate change by sequestering carbon. Wetlands filter the water and protect rivers and lakes from erosion. This prevents water pollution and protects marine life.',
            location: {
                center: [ -79.03893, 43.83587],
                zoom: 12.5,
                pitch: 0.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'wetlands-3857-59jd17',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'wetlands-3857-59jd17',
                    opacity: 0.9
                }
            ]       
        },
        {
            id: 'Chapter 4',
            title: 'Why are wetlands important to humans?',
            
            description: 'Wetlands do two main things for us. First they filter our drinking water by removing toxins and debris as water flows into our drinking water source (Lake Ontario). Second wetlands prevent our houses and businesses and roads from flooding by holding water in heavy rains or melting events. If we remove the Duffins Creek wetland it will make treating our drinking water more difficult and expensive and may leave our neighbourhoods vulnerable to flooding because there would be nowhere for the water to go.',
            location: {
                center: [ -79.03893, 43.83587],
                zoom: 13,
                pitch: 60.00,
                bearing: -8.00
            },
			
            onChapterEnter: [ {
                    layer: 'wetlands-3857-59jd17',
                    opacity: 0.9
                }],
            onChapterExit: [
                {
                    layer: 'wetlands-3857-59jd17',
                    opacity: 0.9
                }]
            
        },
        {
            id: 'Chapter5',
            title: 'Why do we need a warehouse and parking lot?',
            
            description: 'There are two main reasons to build a warehouse and parking lot in our city.First it will provide jobs for people who need them. This especially important as many have lost their jobs due to the COVID 19 pandemic.Secondly the development will provide a lot of tax revenue for the City of Pickering. This will help them provide the much needed services for our community.',
            location: {
                center: [-79.05529, 43.83974],
                zoom: 13.35,
                pitch: 56.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mzo',
                    opacity: 0.75
                },
            ],
            onChapterExit: []
        },
    {
            id: 'Chapter6',
            title: 'Interview with City of Pickering',
            
            description: 'We wrote to David Ryan,  Mayor of Pickering, to ask about the project. Mark Guinto, Manager of Public Affairs and Corporate Communications for the City of Pickering joined us for an interview made a proposal to build a warehouse and parking lot on the Duffins Creek Wetland. He said that nothing would happen to the wetlands but from what we have learned we know that this is not true. He also said that if the wetlands were destroyed they could rebuild them but its not possible because wetlands take thousands of years to make. We wanted to hear more about Mayor Ryans opinion so we sent him an email asking him for an interview. We asked him some questions one of them being what would would happen to the animals in the wetlands when they develop over it. His response was that the animals would just move to their new wetland.',rotateAnimation: true,
            location: {
                center: [-79.08403, 43.83788],
                zoom: 16.00,
                pitch: 56.50,
                
            },
            
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'Chapter7',
            title: 'How are zoning decisions made?',
            
            description: 'The reason why this warehouse development has received so much attention is because of how the decision was made. Usually, if a municipality (city) wants to rezone an area of land, they have to apply to the Conservation Authority (TRCA in this case) and go through public consultation. The City of Pickering figured out how to avoid the TRCA and public consultation by applying to the Minister of Municipal Affairs directly using an MZO. The City of Pickering knew the TRCA would not allow them to develop here because of the fact that it is such an important wetland for our drinking water and flood protection.',
            location: {
                center: [-79.08403, 43.83788],
                zoom: 16.00,
                pitch: 0.00,
                bearing: 0.00
            },
             onChapterEnter: [],
             onChapterExit: []
             
        },
            {
            id: 'Chapter8',
            title: 'Interview with Tim Gray, Environmental Defence',
           
            description: 'The wetlands that are being built on will be more than damaged they will be destroyed forever. He also said that Southern Ontario has lost more than 72% of the wetlands.People are saying that the land is already damaged and that it isnt important',
            location: {
                center: [-79.05826, 43.84497],
                zoom:  11.66,
                pitch: 0.00,
                bearing: 0.00
            },
             onChapterEnter: [{
                    layer: 'ggh-significantemp-dxhakr',
                    opacity: 0.60
                },],
             onChapterExit: []
        },
           {
            id: 'Chapter9',
            title: 'Interview with Chief Kelly LaRocca, MSIFN',
            image: '',
            description: 'The area is part of the traditional territory of the Mississaugas of Scugog Island so we decided to reach out to Chief LaRocca for her opinion. She disagrees with the development plan because of the potential for flooding and the importance of the wetland ecosystem. Chief LaRocca explained that the City of Pickering had The wetland is sacred land that should be protected. As part of the traditional territory of MSIFN, it was their COnstitutional right to be consulted. The Mayor of Pickering, Region of Durham, nor the Province reached out for meaningful talks. ',
            location: {
                center: [ -78.88920,44.17819],
                zoom:  12.51,
                pitch: 0.00,
                bearing:  0.00
            },
             onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'Chapter10',
            title: 'Mayor Shaun Collier, Town of Ajax',
            image: '',
            description: 'Shaun Collier, Mayor of Ajax has made it clear that he does not support developing on this provincially significant wetland. He says that this wetland is worth $3 million per year in what it does for our community - filtering water and supporting biodiversity. It is part of our culture and actually saves us money. It would not be smart to pave over it.',
            location: {
                center: [-79.05446, 43.85157],
                zoom: 16.00,
                pitch: 53.00,
                bearing: 0.00
            },
             onChapterEnter: [],
             onChapterExit: []
        },
        
       {
            id: 'Chapter11',
            title: 'Interview with Annamie Paul, Leader of the Federal Green Party',
            image: '',
            description: 'Annamie Paul is the leader of the Federal Green party of Canada and we got to interview her on the Duffins Creek proposal. Her opinion is to preserve and protect our natural spaces for the long term. Annamie Paul wants to conserve the biodiversity Duffins creek provides us. She also talked about thinking more carefully on what we build and what kind of projects we do. We need high paying jobs that are stable and secure but also do not damage the environment. We need jobs that can actually help us',
            location: {
                center: [-79.03893, 43.83587],
                zoom: 12.37,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
    {
            id: 'Chapter12',
            title: 'Interview with Mike Schreiner, MPP',
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

