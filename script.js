var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var display = document.querySelector("h3"); 
var random = document.getElementById("randomizer");

var Body = document.getElementById("gen");

color1.addEventListener("input", function() {
    Body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value;
    display.textContent = Body.style.background + ";";
})

color2.addEventListener("input", function() {
    Body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value;
    display.textContent = Body.style.background + ";";
})

Body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value;


display.textContent = Body.style.background + ";";





random.addEventListener("click", function() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#"+randomColor1;
    color2.value = "#"+randomColor2;
    Body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value;
    display.textContent = Body.style.background + ";";
})