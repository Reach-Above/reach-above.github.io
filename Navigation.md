---
title: Navigation Test
---
<html>
<meta charset="utf-8" />
<head>
<title>Trail Hub and Strava Maps</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
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
  font-size: 12px;
  width: 12px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
	
footer {
  bottom: 0%;
  color: #ffffff;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;
  padding-right: 1%;
  opacity: 1;
  text-align: center;
  position: relative;
}
$light: #eee;
$dark: #444;
$link-color: #39b54a;
$rhythm: 16px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  // height: 100vh;
  background: red;
}

.ie-fix {
  background: yellow;
  // display: table;
  // width: 100%;
  // min-height: 100%;
}

.wrapper {
  background: green;
  display: flex;
  // width: 100%;
  // height: 100%;
}

.hamburger-checkbox {
  position: absolute;
  opacity: 0;
}

.hamburger-label {
  position: absolute;
  top: ($rhythm * 2);
  left: ($rhythm * 2);
  z-index: 1;
  display: block;
  width: 42px;
  height: 42px;
  font: 42px/42px fontawesome;
  text-align: center;
  color: $dark;
  cursor: pointer;
}

.hamburger-checkbox:checked ~ .hamburger-label:before {
  content: '\f00d';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 42px;
  height: 42px;
  font: 42px/42px fontawesome;
  text-align: center;
  color: $light;
}

.content {
  flex: 1;
  padding: ($rhythm * 4) ($rhythm * 2);
  background: $light;
  color: $dark;
  box-shadow: 0 0 5px rgba(0,0,0,1);
  transition: all .3s;
  min-height: 100vh;
}

.sidebar {
  overflow: hidden;
  width: 0;
  // height: 0;
  background: $dark;
  color: $light;
  transition: all .3s;
  display: flex;
}

.hamburger-checkbox:checked ~ .sidebar {
  width: auto;
  min-height: 100vh;
  padding-top: 6.5em;
}

.menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  
  li {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    padding: $rhythm ($rhythm * 2);
    border-top: 1px solid darken($dark, 10%);
    
    &:last-child {
      border-bottom: 1px solid darken($dark, 10%);
    }
  }
}

/* Decorative styles unrelated to the demo */
body {
  font-family: 'Open Sans', sans-serif;
}
h1 {
  margin: ($rhythm * 2) 0;
  font-weight: 300;
  font-size: 200%;
}
p {
  margin: 0 0 $rhythm 0;
}
a {
  color: $link-color;
}
  
</style>
</head>
<body>
<div class="ie-fix">
<div class="wrapper">

  <input id="hamburger" type="checkbox" class="hamburger-checkbox">
  <label for="hamburger" class="hamburger-label" role="button" aria-labelledby="menu">&#xf0c9;</label>
  
  <nav role="navigation" class="sidebar">
    <ul class="menu">
      <li>Home</li>
      <li>Publications</li>
      <li>Shop</li>
      <li>Your Account</li>
      <li>Contact Us</li>
    </ul>
  </nav>

  <main role="main" class="content">
    <h1>Pure CSS off-canvas menu with flexbox, fixed for IE</h1>
    <p>This page uses <a href="http://caniuse.com/#feat=flexbox">flexbox</a> to control the layout so that when the menu becomes visible, the content area can resize to fit the remaining width in the viewport, instead of overflowing the viewport and getting cut off on the right side, as happens with most off-canvas menus.</p>
    <p>The menu's visibility is toggled without JavaScript using the <a href="https://css-tricks.com/the-checkbox-hack/">checkbox hack</a>.</p>
  </main>

</div>
</div>
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
<footer>
 <p>All data sourced from © OpenStreetMap contributors | © Connor Houston, 2022</p>
  <p><a href="https://twitter.com/reach_above" class="fa fa-twitter"></a>
  <a href="https://www.instagram.com/reach.above/" class="fa fa-instagram"></a></p>
</footer>
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

