<html>
<meta charset="utf-8" />
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  text-align: center;
  padding: 32px;
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
  margin-top: 8px;
  vertical-align: middle;
}

</style>
</head>
<body>

<!-- Header -->
<div class="header" id="myHeader">
  <h1><a href="http://reachabove.ca">Reach Above</a></h1>
  <h4>Our local community map art can be found instore at Markets by Dream Day in Bowmanville **coming soon!** </h4>
  <p>Prints are 8"x10" and framed. Custom orders are always welcome as well.</p>
</div>  

<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/Markets/8x10_AT2_Bowmanville_All.png" style="width:100%">
    <img src="/Markets/8x10_AT_Bowmanville_All.png" style="width:100%">
    <img src="/Markets/8x10_BW_Bowmanville_All.png" style="width:100%">
    <img src="/Markets/8x10_WB_Bowmanville_All.png" style="width:100%">
    <img src="/Markets/8x10_AT2_Bowmanville_All_Water.png" style="width:100%">
  </div>
</div>
<p>All data sourced from ©OpenStreetMap contributors</p>
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
