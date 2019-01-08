var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);

//We could also use <input oninput="setGradient()"> in the html file on the colour picking element.
//Best practice is to have everything javascript within the javascript file. 

var bgcolors = function(){
	
	var number1 = Math.floor(Math.random() * 12222) + 99999;
	var number2 = Math.floor(Math.random() * 22211) + 99999;
	body.style.background = "linear-gradient(to right, #" + number1 + ", #" + number2 + ")";
}

document.addEventListener("DOMContentLoaded", bgcolors);