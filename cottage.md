<html>
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
  <h1>Cottage Pictures</h1>
  <p>Connect with us for more detials</p>
 
</div>  


<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="/images/1.jpg" style="width:100%">
    <img src="/images/2.jpg" style="width:100%">
    <img src="/images/3.jpg" style="width:100%">
    <img src="/images/4.jpg" style="width:100%">
    <img src="/images/5.jpg" style="width:100%">
    <img src="/images/6.jpg" style="width:100%">
    <img src="/images/7.jpg" style="width:100%">
    <img src="/images/8.jpg" style="width:100%">
    <img src="/images/9.jpg" style="width:100%">
    <img src="/images/10.jpg" style="width:100%">
    <img src="/images/11.jpg" style="width:100%">
    <img src="/images/12.jpg" style="width:100%">
    <img src="/images/13.jpg" style="width:100%">
    <img src="/images/14.jpg" style="width:100%">
    <img src="/images/15.jpg" style="width:100%">
    <img src="/images/16.jpg" style="width:100%">
  </div>
</div>
header {
  display: none;
}

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
