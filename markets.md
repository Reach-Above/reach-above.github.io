---
title: Market
---

<html>
<meta charset="utf-8" />
<head>
<title>Market Preview</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
}

.header {
  text-align: center;
  padding: 32px;
}
a {
  color: black;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
</head>
<body>

<!-- Header -->
<div class="header" id="myHeader">
  <h1><a href="https://reachabove.ca">Reach Above</a></h1>
  <h4>Our local community map art is exclusively at Markets Ontario! 62 King Street West - Downtown Bowmanville</h4>
  <p>Prints are 12"x15" and stylishly framed. Custom designs and sizes are available as well including large format canvas.</p>
</div>  

<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/Markets/20_WhiteBlue.png" style="width:100%">
    <img src="/Markets/08_WhiteBlack.png" style="width:100%">
    <img src="/Markets/10_WhiteBlack.png" style="width:100%">
    <img src="/Markets/04_WhiteBlack_x3.png" style="width:100%">
    <img src="/Markets/14_BlueWhite.png" style="width:100%">
    <img src="/Markets/08_WhiteBlue2.png" style="width:100%">
    <img src="/Markets/02_WhiteBlack.png" style="width:100%">
    <img src="/Markets/A3_White_Blue_Mock1.png" style="width:100%">
    <img src="/Markets/04_WhiteBlack.png" style="width:100%">
    <img src="/Markets/08_Strava.png" style="width:100%">
    <img src="/Markets/Strava24x36k.jpg" style="width:100%">
    
    </div>
</div>
<p>All data sourced from ©OpenStreetMap contributors | © Connor Houston, 2022</p>

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
