var bal1 = document.getElementById("bal1");
var	bal2 = document.getElementById("bal2");
var	bal3 = document.getElementById("bal3");
var bal4 = document.getElementById("bal4");
var colorRed = document.getElementById("colorRed");
var colorBlue = document.getElementById("colorBlue");
var colorYellow = document.getElementById("colorYellow");
var colorGreen = document.getElementById("colorGreen");
var colorBlack = document.getElementById("colorBlack");
var colorOrange = document.getElementById("colorOrange");
var currentColor = 0;

function pickColorRed() {
		currentColor = 1;
		console.log(currentColor);
}

function pickColorBlue() {
		currentColor = 2;
		console.log(currentColor);
}

function pickColorYellow() {
		currentColor = 3;
		console.log(currentColor);
}

function pickColorGreen() {
		currentColor = 4;
		console.log(currentColor);
}

function pickColorBlack() {
		currentColor = 5;
		console.log(currentColor);
}

function pickColorOrange() {
		currentColor = 6;
		console.log(currentColor);
}


document.getElementById("colorRed").addEventListener("click", pickColorRed);
document.getElementById("colorBlue").addEventListener("click", pickColorBlue);
document.getElementById("colorYellow").addEventListener("click", pickColorYellow);
document.getElementById("colorGreen").addEventListener("click", pickColorGreen);
document.getElementById("buttonCreate").addEventListener("click", pickColorBlack);
document.getElementById("buttonCheck").addEventListener("click", pickColorOrange);