---
title: Trail Hub
---

<html>
<meta charset="utf-8" />
<head>
<title>Trail Hub and Strava Maps</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3RKGWJ9K0S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3RKGWJ9K0S');
</script>	  
  
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #000000;
}

.header {
  text-align: center;
  padding: 32px;
  background-color: #000000;
  color: white;
}

a {
  color: white;
}	
.row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 10px;
  vertical-align: middle;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
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
	
.fa-instagram {
  background: #125688;
  color: white;
}	

</style>
</head>
<body>

<!-- Header -->
<div class="header" id="myHeader">
  <h1><a href="https://reachabove.ca">Reach Above</a></h1>
  <h4>Hi everyone! This is all very much a work in progress!</h4>
  <p>Why? Well, what started out as a mapping favour for a friend and a tiny acorn of an idea is now front and center as you walk into Trail Hub.</p>
  <p>I have lots of ideas for maps and will share them through the Trail Hub Boutique</p>
  <p>And if you like, we can work together to create your own custom map using your STRAVA data to tell your story. This isn't just a transaction -this is you- by the numbers. It's kudos to yourself for the rides, runs and achievements and a huge one for me to map out your story.</p>
</div>  

<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/Markets/Map24x36Copyright.jpg" style="width:100%">
       
   </div>
</div>
<!-- Footer -->
<p>All data sourced from © OpenStreetMap contributors | © Connor Houston, 2022</p>
  <p><a href="https://twitter.com/reach_above" class="fa fa-twitter"></a>
  <a href="https://www.instagram.com/reach.above/" class="fa fa-instagram"></a><p>

<script>
   
 
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>

</body>
</html>
