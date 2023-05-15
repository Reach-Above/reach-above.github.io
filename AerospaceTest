<!-- NEW Map - Aerospace companies -->
<!-- Map - Aerospace companies -->
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet' />
<script src="https://npmcdn.com/@turf/turf/turf.min.js"></script>
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
																	
																						 

<div class="container mb-5">
<div id="mapcontainer" class="map-center-container">
	<a class="skip-map" href="#related-content-feature">Skip This Map</a>
	
	<div id="mapLS" class="mapboxgl-map">
		<div class="mapboxgl-control-container">
			<button id="mapreset" class="mapboxgl-ctrl-icon" onclick= "mapLS.fitBounds(ontarioBounds, {padding: 0, offset: [0, 0], duration: 1100, pitch: 55});" aria-label="Zoom to Ontario">
				<img class="bi x0 y0 w0 h0" alt="Ontario Icon" src="/sites/default/files/2021-03/OntarioPolygon.png" style="
					height: 24px;
					width: 24px;
					mix-blend-mode: multiply;
				">
			</button>
		
			<div id="left" class="sidebar flex-center left collapsed">
                 <div class="sidebar-content rounded-rect flex-center">
				 <div class= "search-container">
				        <label id="label-filter" for="feature-filter" class="Intro sr-only" >Search</label>
						<input id="feature-filter" type="text" aria-label="Search by name or sector. Press enter to start search and press escape to reset." placeholder="Search by name or sector">
						<div class="close-icon no-style" onclick="renderReset()" style="display: inline-flex; text-align: right;  visibility: hidden;" aria-label="Reset Search">
						<span class="fa fa-times fa-14x" aria-hidden="true"></span>
						</div>
						</input>
    					<button id="searchButton" class="search no-style" aria-label="Search Companies">
                              <span class="fa fa-search"></span>
                              <span class="sr-only"  aria-label= "Search">Search</span>
						</button>
					
					<div id="total-title"></div>
				</div>	
						<div id="feature-listing" class="listing"></div>
					<div class="sidebar-toggle rounded-rect left" tabindex='0' onclick="toggleSidebar('left')">
                        <span id="companies-toggle" class="sr-only sr-only-focusable">Companies</span>
                     </div>
                 </div>
            </div>

			<div id="right" class="sidebar flex-center right collapsed">
				<div class="sidebar-content-right flex-center">
                    <div id="navlist" class="rounded-rect">
                      	<a class="legend" id="BiotechTD" tabindex='0'><span class="dotlegend legendDot fill-BiotechTD"></span>Aircraft Engines, Equipment, and Components</a>
                    	<a class="legend" id="BiotechOther" tabindex='0'><span class="dotlegend legendDot fill-BiotechOther"></span>Aircraft Landing Gear Systems and Components</a>
                    	<a class="legend" id="BiotechRD" tabindex='0'><span class="dotlegend legendDot fill-BiotechRD"></span>Aircraft Structural Assembly and Components</a>
                    	<a class="legend" id="ProfessionalServicesConsulting" tabindex='0'><span class="dotlegend legendDot fill-ProfessionalServicesConsulting" ></span>Avionics, Electronics, and Aircraft Systems</a>
                    	<a class="legend" id="HealthTech" tabindex='0'><span class="dotlegend legendDot fill-HealthTech"></span>MRO and Aircraft Modifications / Conversions</a>
                    	<a class="legend" id="Investor" tabindex='0'><span class="dotlegend legendDot fill-Investor"></span>OEM (Original Equipment Manufacturer)</a>
                    	<a class="legend" id="Media" tabindex='0'><span class="dotlegend legendDot fill-Media"></span>Other (Manufacturing support)</a>
                    	<a class="legend" id="MedicalTech" tabindex='0'><span class="dotlegend legendDot fill-MedicalTech"></span>Space Systems, Equipment, and Services</a>
                    	<a class="legend" id="PublicNonprofitMedical" tabindex='0'><span class="dotlegend legendDot fill-PublicNonprofitMedical"></span>Unmanned Aerial Systems</a>
                    	<a class="legend" id="Pharma" tabindex='0'><span class="dotlegend legendDot fill-Pharma"></span>Technical Services</a>
                    	<a class="legend" id="SupplierEngineering" tabindex='0'><span class="dotlegend legendDot fill-SupplierEngineering"></span>Research and Development Organization</a>
                	</div>
                
                	<div class="sidebar-toggle rounded-rect right" tabindex='0' onclick="toggleSidebar('right')">
                        <span id="legend-toggle" class="sr-only sr-only-focusable">Legend</span>
                	</div>
                </div>
			</div>		
			</div>
		</div>
	</div>

</div>

<script>
    $( document ).ready(function() {
    
        if ($( window ).width() <= 991.98) {      
                console.log("mobile");
                setTimeout(() => {
                        mapLS.setPadding({left: 0, top: 0});
                        console.log("mobile padding set");
                }, 3000)
                
                // move sidebars below the map
                $("#mapLS #left").appendTo($("#mapLS").parent());
                $("#mapLS #right").appendTo($("#mapLS").parent());
                
                // append right toggle button to map container
                 $(".sidebar-toggle.right").appendTo($("#mapcontainer"));
  

        }
        
                
        $(".legend").on('click',function(e) {
            popup.remove();
            
            // if ($(".legend").hasClass("active")) {   
            //     $(".legend").removeClass("active");
            // }
            
            if ($(this).hasClass("active")) {   
                $(this).removeClass("active");
                e.stopPropagation();
                renderReset();
            }else{
                $(".legend").removeClass("active");
                $(this).addClass("active");
            }
            
        });        
        
        
    });    
    
    var paddingset_on_resize_school = 0; 
    
    $(window).on('resize', function(){
        mapLS.fitBounds(ontarioBounds, {padding: 20, offset: [0, 0], pitch:30, duration: 1000});
        var win = $(this); //this = window


        if ((win.width() <= 991.98) && (paddingset_on_resize_school == 0 )) { 
            mapLS.setPadding({left: 0, top: 0});
            paddingset_on_resize_school = 1;
            
            $("#mapLS #left").appendTo($("#mapLS").parent());
            $("#mapLS #right").appendTo($("#mapLS").parent());
             console.log("Padding set on resize");
             
            // append right toggle button to map container
             $(".sidebar-toggle.right").appendTo($("#mapcontainer"));
        }
        else if ( (win.width() > 991.98) && (paddingset_on_resize_school == 1 ) ) { 
            
                 if ( !$("#mapLS .mapboxgl-control-container #left").length )  {
                    $("#mapcontainer #left").appendTo($("#mapLS .mapboxgl-control-container").first());
                 }
                 if ( !$("#mapLS .mapboxgl-control-container #right").length )  {
                    $("#mapcontainer #right").appendTo($("#mapLS .mapboxgl-control-container").first());
                 }
                 
                // append right toggle button to map container
                 $(".sidebar-toggle.right").appendTo($("#right"));
                 
                paddingset_on_resize_school = 0;
        }
        
    });  
  
        
</script>
<style>

#mapLS {
  width: 100%;
  height: 60vh;
  min-height: 300px;
  max-height: 600px;
  font-family: Open Sans;
}

.mapbox-improve-map {
		display: none;
	}  

/*SideBar*/
.rounded-rect {
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 50px -25px black;
}

.flex-center {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-center.left {
  left: 0px;
}

/*.flex-center.right {
  left: 0px;
}*/

.flex-center.right {
  right: 0px;
}

.sidebar-content {
  position: absolute;
  width: 95%;
  height: 90%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: gray;
}

.sidebar-content-right {
  position: absolute;
  width: 95%;
  height: 90%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #022859;
}

div#navlist {
    position: absolute;
    top: 0px;
    height: 100%;
    overflow: auto;
}

div#navlist a {
    color: #022859;
}

div#navlist a:hover {
    text-decoration: none;
}

.left.collapsed .sidebar-toggle:after {
    /*content: "\25BA";*/
    margin-left: 0.25rem;
    transform: rotate(0deg);
    transition: transform 1s;   
}

.right.collapsed .sidebar-toggle:after {
    /*content: "\25BA";*/
    margin-right: 0.25rem;
    transform: rotate(180deg);
    transition: transform 1s;   
}


.left .sidebar-toggle:after {
    /*content: "\25C0";*/
    content: "\279C";
    transform: rotate(180deg);
    transition: transform 1s;    
}

.right .sidebar-toggle:after {
    /*content: "\25C0";*/
    content: "\279C";
    transform: rotate(0deg);
    transition: transform 1s;    
}


.sidebar-toggle {
  position: absolute;
  width: 1.3em;
  height: 1.3em;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-toggle.left {
    right: -2.5em;
    width: 2rem;
    color: #333 !important;
    background: #fff;
    font-weight: bold;
    border: 1px solid #333;
    height: 2rem;
    border-radius: 50%;
}

.sidebar-toggle.right {
    left: -2.5em;
    width: 2rem;
    color: #333 !important;
    background: #fff;
    font-weight: bold;
    border: 1px solid #333;
    height: 2rem;
    border-radius: 50%;
}

.sidebar {
  transition: transform 1s;
  z-index: 1;
  width: 300px;
  height: 100%;
}

/*
  The sidebar styling has them "expanded" by default, we use CSS transforms to push them offscreen
  The toggleSidebar() function removes this class from the element in order to expand it.
*/
.left.collapsed {
  transform: translateX(-295px);
}

.right.collapsed {
  transform: translateX(295px);
}

.listing {
  overflow: auto;
  position: absolute;
  height: calc(100% - 75px);
  width: 95%;
  top: 70px;
  display: inline-block;
  vertical-align: bottom;
  float: left;
}

/*.listing .company-title {
  display: block;
  padding: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size:1.1rem;
  cursor: pointer;
}

.listing .company-title:hover {
    background:#f1f1f1;
}
*/

/*not used*/
.listing .company-title:last-child {
  border-bottom: none;
}


 #mapcontainer{
	position:relative;	
	border:0px solid #6e6e6e;
	border-radius: 25px
}

			  

#label-filter {
	font-family: Lato, Helvetica, Arial, Verdana, sans-serif;
	font-weight: 600;
	font-size: 1.2em;
	margin-left: 0.45em;
	padding-bottom: 0.5em;
}
.mapboxgl-popup-close-button {
        font-size: 1.2rem;
        color: initial;
        right: 0.1rem;
        top: 0.1rem;
}
.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
    border-top-color: #eeeeee;
    margin-bottom: 0em;
    }

.mapboxgl-popup-anchor-top > .mapboxgl-popup-content {
     margin-top: 0em;
    }	

 .mapboxgl-popup {
    padding-bottom: 0px;
    }
	
.mapboxgl-popup-content {
        font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif;
        padding: 1em;
        box-shadow: -1px 2px 14px 4px rgb(0 0 0 / 32%);
        min-width: 30px;
        border-radius: 4px;
        border-top-color: #eeeeee;    
    }

.mapboxgl-popup-content div {
        padding: 10px;
      }	

.legend {
	font-size: 0.9em;
	border-radius: 0.0em;
    float: left;
	text-align: left;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    padding: 4px 5px;
    width:100%;
    font-weight: 100 !important;
}

.legend:hover, .search:focus{
	background-color: #dee2e6
}	

.legend.ext-link:hover:after, .legend.ext-link:focus:after {
    display:none;    
}

.legend.active, #feature-listing .item.active:first-child {
    background-color: #eeeeee;
    color: #1b1b1b !important;
}

#feature-listing {
	cursor: pointer;
}
#feature-listing a {
	/*background: #000000;*/
}

#feature-listing a.company-title {
    display: block;
    color: #022859;
    font-weight: 400 !important;
    font-size: 0.9rem;
    text-transform: none;
}

#feature-listing .item {
    display: block;
    border-bottom: 1px solid #eee;
    padding: 5px 5px;
    text-decoration: none;
}
#feature-listing  .item:hover {
    background: #f1f1f1;
}
#feature-listing  .item:last-child {
    border-bottom: none;
}


/* NOT WORKING */
div#feature-listing div:hover {
	/*background: #CBCFDA;*/
}

#feature-listing .company-title:hover, company-title:focus  {
	/*background: #99C7DF;*/
}

a.company-title {
	font-size: 1em;
	font-weight: 700;
	margin-bottom: 0.25em;
	margin-right: 0.5em;
    text-decoration: none;
    text-transform: uppercase;
}

p.company-title {
	color: #5d5d5d;
	font-size: 1em;
	font-weight: 700;
	display: block;
    padding-left: 10px;
	padding-right: 10px;
    text-decoration: none;
}

p.company-sectors{
     border-bottom: 1px solid #eee;
	 font-size: 1em;
	 color: gray;
	 padding-left: 10px;
	 padding-right: 10px;
}
p.company-sectors-popup {
	font-size: 1em;
}

 .search-container{
	 position: absolute;
	 top: 0px;
	 display: block;
	 padding: 10px;
	 background: #2f2f2f;
	 border-top-left-radius: 9px;
	 border-top-right-radius: 9px;
	 height: 70px;
	 z-index: 99;
	 color: #ffffff;
	 width:100%;
}

.sidebar-content input {
    float: left;
    width: calc(100% - 3.5em);
    background-color: transparent;
    font-size: 1em;
    font-weight: 100;
    padding: 0em 1em 0em 0em;
    color: white;
    border: none;
    border-bottom: 1px solid #ced4da;
    margin-right: 0.5rem;
}

.sidebar-content input:focus{
	border: none;
	outline: none;
	padding: 0em 1em 0em 0em;
	border-bottom: 1px solid #0056b3;
	margin-right: 0.5rem;
}

input#feature-filter::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #d9d8d8;
    opacity: 1; /* Firefox */
}

input#feature-filter:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #d9d8d8;
}

input#feature-filter::-ms-input-placeholder { /* Microsoft Edge */
    color: #d9d8d8;
}

/*.sidebar-content input:active{
	border-bottom: 1px solid #0056b3;
}*/

.search {
	float: left;
	z-index: 1;
	width: 3rem;
	font-size: 1em;
	padding: 1px 1px;
	color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
	cursor: pointer;
	border: none;
	border-radius: 0.5em;
	
}

.search:hover, .search:focus{
	background-color: #dee2e6
}

.search:active{
	background-color: #dee2e6;
}

#searchButton .fa {
    color: #000000 !important;
}

#searchButton.ofb-darkblue {
    background: #f8f9fa !important;
}

#total-title {
    padding: 8px 0px 0px 0px;
	float: left;
	cursor: default;
	font-size: 0.9em;
	/*border-bottom: 1px dotted rgb(93, 93, 93);*/
	/*width: 100%;*/
	/*box-sizing: border-box;*/
}

.close-icon {
	margin-top: 0em;
	margin-right: 0px;
    position: absolute;
    cursor: pointer;
    right: 4em;
}

.close-icon span.fa {
    color: white !important;
}

.fa-14x{
	font-size: 1.2em
}

.dot {
	border-radius: 50%;
	padding: 6px;
	float: right;
	border: 2px solid #ffffff;
	margin-left: 2px;
	margin-right: 5px;
	margin-top: 5px;
	box-shadow: 0px 0px 3px 0px black;
}

.dotlegend{
	border-radius: 50%;
	padding: 6px;
	float: left;
	border: 2px solid #ffffff;
	margin-left: 2px;
	margin-right: 9px;
	margin-top: 5px;
	box-shadow: 0px 0px 3px 0px black;
}

.margin13{
	/*margin-top: 1.5em;*/
}
.fill-BiotechOther {
	background-color: #a6cee3;
}
.fill-BiotechTD {
	background-color: #1f78b4;
}
.fill-BiotechRD {
	background-color: #b2df8a;
}
.fill-ProfessionalServicesConsulting {
	background-color: #33a02c;
}
.fill-HealthTech {
	background-color: #fb9a99;
}
.fill-Investor {
	background-color: #e31a1c;
}
.fill-Media {
	background-color: #fdbf6f;
}
.fill-MedicalTech {
	background-color: #ff7f00;
}
.fill-Pharma {
	background-color: #cab2d6;
}
.fill-PublicNonprofitMedical{
	background-color: #ffff99;
}
.fill-SupplierEngineering {
	background-color: #6a3d9a;
}


a.skip-map {
	color: #ededed;
	background-color: #000;
	-moz-transition: height .5s;
	-ms-transition: height .5s;
	-o-transition: height .5s;
	-webkit-transition: height .5s;
	transition: height .5s;
	height: 0;
	font-size: 1em;
	text-align: center;
	position:absolute;
	overflow: hidden;
	z-index: 999;
	margin: 0 35%;
	border-radius: 0 0 15px 15px;
	width: 30%;
	min-width: 160px;
	border-bottom: none !important;
}
a.skip-map:focus {
	height: 40px;
}

@media (max-width: 991.98px) {

	.search-container {
	    border-top-left-radius: 0px;
	    border-top-right-radius: 0px;
    }

    #mapcontainer #left {
        display: block;
        position: initial;
        height: 30vh;
        width:100%;
    }
	
    #mapcontainer #right {
        display: block;
        height: 30vh;
        width: 100%;
        position: absolute;
        overflow: auto;
        bottom: 0px;
        z-index: 100;
        background:#ffffff;
    }

    #left .sidebar-content {
        /*height: 20vh;*/
        position: relative;
        box-shadow: none;
        border: 1px solid #bcbcbc;
        border-radius: 0;        
    }
    
	#right .sidebar-content-right {
        box-shadow: none;
        border-bottom: 1px solid #bcbcbc;
        border-radius: 0;
        width:100%;
    }

    span#legend-toggle {
        width: fit-content;
        height: fit-content;
        clip: initial;
        left: 2.5rem;
    }
	
    
    
    .left.collapsed {
        transform: translateX(0px) !important;
    }
	
	 .right.collapsed {
        transform: translateX(0px) !important;
    }
    
    div#mapLS .rounded-rect {
        background: #eee;
        border-radius: 0px;
        box-shadow: none;
    }
    
    .sidebar-toggle {
        display:none !important;
    }
    
    .sidebar-toggle.right {
        display: none;
        position: absolute;
        bottom: 30vh;
        left: 0em;
        z-index: 100;
        background: #eee;
        width: 100%;
        border-radius: 0;
    }
    
    .sidebar-content {
        width: 100% !important;
        height: 100% !important;
    }
        div#listing .company-title {
    border-bottom: 1px solid grey;
    }

}

@media (max-width: 650px) {

	.listing {
	    max-height: 100%;
		max-height: calc(100% - 55px);
	}
	
	.mapLS-overlay .listing{
		max-height: calc(100% - 100px);
	}

	#mapcontainer {
		position: relative;
		height: auto;
		width:100%;
	}
	#mapLS {
		position: relative;
		display:block;
		width:100%;
		height: 40vh;
		left:0%;
	}

	.mapLS-overlay{
		position: relative;
		display:block;
		width:100%;
		min-width:100%;
		height: 50vh;
		border-right: none;
	}
	

    .noMargin{
    	margin-top: 0;
    }

    #legend-toggle {
        visibility:visible;
    }    

}


@media (max-width: 533px) {
	a.skip-map{
		margin: 0 calc( 50% - 80px);
	}
}




</style>



<script>
//DECLARING FUNCTIONS

mapboxgl.accessToken = "pk.eyJ1IjoibWVkdGVnaXMiLCJhIjoiY2p4ZW11cjRkMHFuNDNwbGJqd3pweHh5ZiJ9.hAPzR6v7JtQN6eW96nPnnQ";

const mapLS = new mapboxgl.Map({
	container: "mapLS",
	style: "mapbox://styles/medtegis/ckww5fpay1jto14lj5agw9yff",
	center: [-81.5, 45.7],
	zoom: 5,
    pitch: 55,
	//maxBounds: [[-162, 19.3514596947], [-40.166015625, 83.4755131426]],
	cooperativeGestures: true,
	projection: 'globe',
	attributionControl: false,
});

//Add the zoom in/zoom out buttons on the top right corner
mapLS.addControl(new mapboxgl.NavigationControl());
$("#mapreset").appendTo("#mapcontainer .mapboxgl-ctrl-group");

mapLS.addControl(new mapboxgl.FullscreenControl());

mapLS.addControl(new mapboxgl.AttributionControl({compact: true,
customAttribution: '<a href="https://theoac.ca" target="_blank" >© Ontario Aerospace Council</a>'
}));

// Holds visible company features for filtering
let companies = [];
let ontarioBounds = [[-95.1800537109, 41.9058543604], [-74.2950439453, 54]];
// Create a popup, but don"t add it to the map yet.
let popup = new mapboxgl.Popup({closeButton: true, closeOnClick: false});


//var width = $( "#mapcontainer").css( "width" ).replace("px", "");
const filterEl = document.getElementById("feature-filter");
const listingEl = document.getElementById("feature-listing");
const searchButton = document.getElementById("searchButton");
let selectedItem = "";
const popupSM = new mapboxgl.Popup({
			closeButton: false
		});
let value;

function renderListings(features) {
    
	// Clear any existing listings
	listingEl.innerHTML = "";
	
	if (features.length) {
		document.getElementById("total-title").innerHTML =	"Companies displayed: <span id='total-count'></span>";//Replaces "Loading" with "Total Search Count: "
		document.getElementById("total-count").innerHTML = features.length;//number the Total Search Count above the listings

		features.forEach(function (feature) {
			const prop = feature.properties;
			const item = document.createElement("div");
			
			item.className = 'item';
			item.innerHTML = "<a class='company-title ' tabindex='0'>" + prop.company + "</a>";
 			// item.tabIndex = "0";
			//item.innerHTML = "<p class='company-title'>" + prop.company + "</p>"+"<p class='company-sectors'>" + prop.sector + "</p>";
			
			
			//Adds a span colour dot to the listings based on the sector.
			if (prop.sector == "Aircraft Landing Gear Systems and Components") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-BiotechOther'></span>");
			} else if (prop.sector == "Aircraft Engines, Equipment, and Components") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-BiotechTD'></span>");
			} else if (prop.sector == "Aircraft Structural Assembly and Components") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-BiotechRD'></span>");
			} else if (prop.sector == "Avionics, Electronics, and Aircraft Systems") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13	fill-ProfessionalServicesConsulting'></span>");
			} else if (prop.sector == "MRO and Aircraft Modifications / Conversions") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-HealthTech'></span>");
			} else if (prop.sector == "OEM (Original Equipment Manufacturer)") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-Investor'></span>");
			} else if (prop.sector == "Other (Manufacturing support)") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-Media'></span>");
			} else if (prop.sector == "Space Systems, Equipment, and Services") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-MedicalTech'></span>");
			} else if (prop.sector == "Technical Services") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-Pharma'></span>");
			} else if (prop.sector == "Unmanned Aerial Systems") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-PublicNonprofitMedical'></span>");
			} else if (prop.sector == "Research and Development Organization") {
				item.insertAdjacentHTML("afterbegin", "<span class='dot margin13 fill-SupplierEngineering'></span>");
			};

            if (selectedItem == prop.company ) {
                item.classList.add("active");
            }

			item.addEventListener("click", function () {

				mapLS.flyTo({center: feature.geometry.coordinates, zoom: 10, speed: 0.8, curve: Math.pow(6, 0.25)});
				popup.setLngLat(feature.geometry.coordinates)
					.setHTML("<a class='company-title intro' href=\"http://" + prop.website + "\" target=\"_blank\">" + prop.company + "</a><p class='company-sectors-popup'>" + prop.sector + "<br>" + "</p>")
					.addTo(mapLS);
			    selectedItem = "" + prop.company;
				console.log(selectedItem);
				console.log(prop.company);
			});
			item.addEventListener("focus", function () {
				popup.setLngLat(feature.geometry.coordinates)
					.setHTML("<a class='company-title intro' href=\"http://" + prop.website + "\" target=\"_blank\">" + prop.company + "</a><p class='company-sectors-popup'>" + prop.sector + "<br>" + "</p>")
					.addTo(mapLS);
			});


            popup.on('close', function(e) {
               $("#feature-listing .item").removeClass("active");
            })
			
// 			item.addEventListener('mouseover', () => {
//                     // Highlight corresponding feature on the map
//                     popupSM
//                         .setLngLat(feature.geometry.coordinates)
// 						.setText(
// 							`${feature.properties.company}`
// 							)
// 					.addTo(mapLS);
//                 });

		//	item.addEventListener("keyup", function (e) {
		//		if (e.keyCode == 13) {
		//			mapLS.flyTo({center: feature.geometry.coordinates, zoom: 10, //speed: 0.8, curve: Math.pow(6, 0.25)});
		//		}else if (e.keyCode == 27) {
		//			mapLS.fitBounds(ontarioBounds, {padding: 20, offset: [0, 0], //duration: 1500});
		//		}
		//	});
			listingEl.appendChild(item);
		});
		
		// Show the filter input
		filterEl.parentNode.style.display = "block";
		
		// Accessibility - when users tab to Company Anchor links in the list and hit enter it triggers the parent objects click function.
        $("#feature-listing .item a").on('keypress',function(e) {
            if(e.which == 13) {
                $(this).parent().click();
            }
        });		
        	

        
		
	} else {
		document.getElementById("total-count").innerHTML = "0";//number the Total Search Count above the listings
		const empty = document.createElement("P");
		empty.innerHTML = "<ul style= 'list-style:none;'><p class='p-5'>No Companies </p></ul>";
		listingEl.appendChild(empty);
			// show the filter input
		filterEl.parentNode.style.display = "block";
			// remove features filter
		//mapLS.setFilter("company", ["none", ["has", "UID"]]);
	}
}

//Creates a function that nomarilizes all input values for easier comparison
function normalize(string) {
	return string.trim().toLowerCase();
}

function getUniqueFeatures(array, comparatorProperty) {
	const existingFeatureKeys = {};
	// Because features come from tiled vector data, feature geometries may be split
	// or duplicated across tile boundaries and, as a result, features may appear
	// multiple times in query results.
	const uniqueFeatures = array.filter(function (el) {
		if (existingFeatureKeys[el.properties[comparatorProperty]]) {
			return false;
		} else {
			existingFeatureKeys[el.properties[comparatorProperty]] = true;
			return true;
		}
	});
	return uniqueFeatures;
}

//Filters layers to show everything, essentially resetting the data
function renderReset() {
    console.log("reset");
	$( ".close-icon").css( "visibility", "hidden");
	$(':text').blur();
	$(".legend").removeClass("active");
	popup.remove();
	mapLS.fitBounds(ontarioBounds, {padding: 20, offset: [0, 0], duration: 1500, pitch:30});
	mapLS.setFilter("company", ["has", "UID"]);
	filterEl.value = "";		// Clear the input container
	value = "";
	document.getElementById("total-count").innerHTML = "359";//number the Total Search Count above the listings
	setTimeout( function () {
		const features = mapLS.querySourceFeatures("companySource", {sourceLayer: ["Aerospace_2018_OCT-0jwam2"]});
		const uniqueFeatures = getUniqueFeatures(features, "UID");
		renderListings(uniqueFeatures);	// Populate features for the listing overlay.
	}, 1000);
}
/*
//Updates list to show points on map. Overrides Legend toggle and Search. 
 mapLS.on('movestart', () => {
            // reset features filter as the map starts moving
            mapLS.setFilter('company', ['has', 'UID']);
        });
*/
        mapLS.on('moveend', () => {
            const features = mapLS.queryRenderedFeatures({ layers: ['company'] });

            if (features) {
                const uniqueFeatures = getUniqueFeatures(features, 'UID');
                // Populate features for the listing overlay.
                renderListings(uniqueFeatures);

                // Clear the input container
                //filterEl.value = '';

                // Store the current features in sn `airports` variable to
                // later use for filtering on `keyup`.
                company = uniqueFeatures;
            }
        });


//Shows listings on start instead of after user interaction.
function dataLoadOnStart() {
	const features = mapLS.querySourceFeatures("companySource", {sourceLayer: ["Aerospace_2018_OCT-0jwam2"]});
	const uniqueFeatures = getUniqueFeatures(features, "UID");
	companies = uniqueFeatures;
	if (uniqueFeatures.length === 359){
		renderListings(uniqueFeatures);
		//enableInteraction(mapLS);
		mapLS.off("data", "company", dataLoadOnStart); //Removes the noisy "data" event once it has loaded the data
	}
}

//takes all visible and filtered results and creates a bounding box to zoom in on.//Makes the search animation a lot more intuitive and interactive
function zoomToRendered(input) {
	let i = 0;
	let bounds = [];
	let uniqueFeatures = [];

	const filtered = companies.filter(function(feature) {
		const company = normalize(feature.properties.company);
		const sector = normalize(feature.properties.sector);
		return company.indexOf(input) > -1 || sector.indexOf(input) > -1;
	});
	mapLS.setFilter("company", ["in", "UID"].concat(filtered.map(function(feature) {
		return feature.properties.UID;
	})));
	if (filtered.length > 0) {
		uniqueFeatures = getUniqueFeatures(filtered, "UID");
		for (i; i < uniqueFeatures.length; i++){
			bounds.push(uniqueFeatures[i].geometry.coordinates);
		};
		renderListings(uniqueFeatures);
		if (filtered.length > 1){
			const line = turf.lineString(bounds);
			const bBox = turf.bbox(line);
			mapLS.fitBounds(bBox, {padding: 35, offset: [0,0], duration: 1100, pitch: 0});
		} else {
			mapLS.flyTo({center: uniqueFeatures[0].geometry.coordinates, offset: [0,0], zoom: 10, speed: 0.8, curve: Math.pow(6, 0.25)});
		}
	} else {
		renderListings([]);
	}
}

function toggleSidebar(id) {
        const elem = document.getElementById(id);
        // Add or remove the 'collapsed' CSS class from the sidebar element.
        // Returns boolean "true" or "false" whether 'collapsed' is in the class list.
        const collapsed = elem.classList.toggle('collapsed');
        const padding = {};
        // 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
        padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
        // Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
         mapLS.easeTo({
             padding: padding,
             duration: 1000 // In ms. This matches the CSS transition duration property.
         });
    }
	

//RUNNING FUNCTIONS

mapLS.on("load", function () {
	mapLS.setFog({"high-color": "#002855", "horizon-blend": 0.10, "color": "#ffffff"});
	mapLS.addSource("companySource", {
		"type": "vector",
		"url": "mapbox://medtegis.9w6ekjnr"
	});

	mapLS.addLayer({
		"id": "company",
		"source": "companySource",
		"source-layer": "Aerospace_2018_OCT-0jwam2",
		"type": "circle",
		"layout": {},
		"paint": {
			"circle-radius": {																//Data Driven Styling (DDS) for increasing the circle radius as the map is zoomed in
				stops: [[6, 6], [10, 7], [16, 11]]		//This allows for more natural seeming point size.								},
			},
			"circle-color": {														//DDS used again for colouring the different properties of the same layer differently
				type: "categorical",								//If using DDS for strings intstead of numbers, it is required to define the type like so.
				property: "sector",
				stops: [
					["Aircraft Landing Gear Systems and Components", "#a6cee3"],
					["Aircraft Engines, Equipment, and Components", "#1f78b4"],
					["Aircraft Structural Assembly and Components", "#b2df8a"],
					["Avionics, Electronics, and Aircraft Systems", "#33a02c"],
					["MRO and Aircraft Modifications / Conversions", "#fb9a99"],
					["OEM (Original Equipment Manufacturer)", "#e31a1c"],
					["Other (Manufacturing support)", "#fdbf6f"],
					["Space Systems, Equipment, and Services", "#ff7f00"],
					["Technical Services", "#cab2d6"],
					["Unmanned Aerial Systems", "#ffff99"],
					["Research and Development Organization", "#6a3d9a"]
				]
			},
			"circle-opacity": {																//Data Driven Styling (DDS) for increasing the circle radius as the map is zoomed in
				stops: [[6, 0.5], [10, 0.8], [16, 1]]		//This allows for more natural seeming point size.								},
			},
			"circle-stroke-width": {																//Data Driven Styling (DDS) for increasing the circle radius as the map is zoomed in
				stops: [[6, 1.5], [10, 2.4], [16, 3]]		//This allows for more natural seeming point size.								},
			},
			"circle-stroke-color": "#ffffff",
			"circle-stroke-opacity": 0.8
		}
	}, "settlement-minor-label");
	
	
	mapLS.on("click", "company", function (e) {
		//Move in on features when the point is clicked, zooming based on user current zoom
		if (mapLS.getZoom() > 10){
			mapLS.flyTo({center: e.features[0].geometry.coordinates, zoom: mapLS.getZoom(), speed: 0.8, curve: Math.pow(6, 0.25)});
		}else{
			mapLS.flyTo({center: e.features[0].geometry.coordinates, zoom: 10, speed: 0.8, curve: Math.pow(6, 0.25)});
		}
		

		// Populate the popup and set its coordinates based on the feature.
		const feature = e.features[0];
		popup.setLngLat(feature.geometry.coordinates)
			.setHTML("<a class='company-title intro' href=\"http://" + feature.properties.website + "\" target=\"_blank\">" + feature.properties.company + "</a><p class='company-sectors-popup'>" + feature.properties.sector + "<br>" + "</p>")
			.addTo(mapLS);
		console.log("map company clicked");
	});
	

	        mapLS.on('mousemove', 'company', (e) => {
            // Change the cursor style as a UI indicator.
            mapLS.getCanvas().style.cursor = 'pointer';
			// Populate the popup and set its coordinates based on the feature.
            const feature = e.features[0];
            popupSM
                .setLngLat(feature.geometry.coordinates)
                .setText(
                    `${feature.properties.company}`
                )
                .addTo(mapLS);
			
        });
			mapLS.on('mouseleave', 'company', () => {
            mapLS.getCanvas().style.cursor = '';
            popupSM.remove();

        });
	

	filterEl.addEventListener("keyup", function (e) { //Listen to entered data by user.
		popup.remove();
		const value = normalize(e.target.value);
		if (e.keyCode == 27) {				//Listen to excape key by user to clear all filters
			renderReset();
		} else if (e.keyCode == 13) {
			if (value != "") {
				zoomToRendered(value);
				$(':text').blur();
			}else{
				filterEl.value = "";
			}
		}
		searchButton.addEventListener("click", function () {
			if (value != "") {
				zoomToRendered(value);
			}else{
				filterEl.value = "";
			}
		});
	});


	filterEl.addEventListener("focus", function () {
		$( ".close-icon").css( "visibility", "visible");
	});
// 	filterEl.addEventListener("blur", function () {
// 			$( ".close-icon").css( "visibility", "hidden");
// 	});
});

$("canvas.mapboxgl-canvas").attr('tabindex', -1);
mapLS.on("data", "company", dataLoadOnStart);

mapLS.on('load', () => {
      toggleSidebar('left');
    });

document.getElementById('navlist').addEventListener('click', function(e) {
	const legendKeyValue = e.target.innerHTML;
	const legendKeyA = legendKeyValue.substring(legendKeyValue.indexOf('</span>'), legendKeyValue.length);
	const legendKeyB = legendKeyA.replace("amp;", "");
	const legendKeyC = legendKeyB.replace("r And E", "r & E");
	const legendKeyH = legendKeyC.replace("</span>", "");
	
	if( legendKeyH.length < 101 && companies.length ==359 && legendKeyH != "Legend: "){
		value = normalize(legendKeyH);
		filterEl.value = legendKeyH;
		let i = 0;
		let bounds = [];
		let uniqueFeatures = [];
		const filtered = companies.filter(function(feature) {
			const sector = normalize(feature.properties.sector);
			return sector.indexOf(value) > -1;
		});
		mapLS.setFilter("company", ["in", "UID"].concat(filtered.map(function(feature) {
			return feature.properties.UID;
		})));
		if (filtered.length > 0) {
			uniqueFeatures = getUniqueFeatures(filtered, "UID");
			for (i; i < uniqueFeatures.length; i++){
				bounds.push(uniqueFeatures[i].geometry.coordinates);
			};
			renderListings(filtered);
			if (filtered.length > 1){
				const line = turf.lineString(bounds);
				const bBox = turf.bbox(line);
				mapLS.fitBounds(bBox, {padding: 35, offset: [0,0], duration: 1100, pitch: 0});
			} else {
				mapLS.flyTo({center: uniqueFeatures[0].geometry.coordinates, offset: [0,0], zoom: 9, speed: 0.8, curve: Math.pow(6, 0.25)});
			}
		} else {
			renderListings([]);
		}
	}
});


</script>
