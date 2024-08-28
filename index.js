var RandomNumber =Math.random(Math.random()*7);

var dicerandom="dice" + RandomNumber + ".jpg";

var source = "images/" +dicerandom;
var images1 = document.querySelectorAll("img") [2].setAttribute("src",source);

