var ball1 = document.getElementById("ball1");
var	ball2 = document.getElementById("ball2");
var	ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");
var colorRed = document.getElementById("colorRed");
var colorBlue = document.getElementById("colorBlue");
var colorYellow = document.getElementById("colorYellow");
var colorGreen = document.getElementById("colorGreen");
var colorBlack = document.getElementById("colorBlack");
var colorOrange = document.getElementById("colorOrange");
var currentColor = 0;
var code1 = 0;
var code2 = 0;
var code3 = 0;
var code4 = 0;

function createCode() {
	code1 = Math.floor((Math.random() * 6) + 1);
	console.log(code1);
	code2 = Math.floor((Math.random() * 6) + 1);
	console.log(code2);
	code3 = Math.floor((Math.random() * 6) + 1);
	console.log(code3);
	code4 = Math.floor((Math.random() * 6) + 1);
	console.log(code4);
}

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

function fillBall(event) {
	console.log(event);
	if (currentColor === 1) {
		event.target.style.backgroundColor = "red";
	}

	else if (currentColor === 2) {
		event.target.style.backgroundColor = "blue"
	}

	else if (currentColor === 3) {
		event.target.style.backgroundColor = "yellow"
	}

	else if (currentColor === 4) {
		event.target.style.backgroundColor = "green"
	}

	else if (currentColor === 5) {
		event.target.style.backgroundColor = "black"
	}

	else if (currentColor === 6) {
		event.target.style.backgroundColor = "orange"
	}
}

document.getElementById("colorRed").addEventListener("click", pickColorRed);
document.getElementById("colorBlue").addEventListener("click", pickColorBlue);
document.getElementById("colorYellow").addEventListener("click", pickColorYellow);
document.getElementById("colorGreen").addEventListener("click", pickColorGreen);
document.getElementById("colorBlack").addEventListener("click", pickColorBlack);
document.getElementById("colorOrange").addEventListener("click", pickColorOrange);
document.getElementById("buttonCreate").addEventListener("click", createCode);
document.getElementById("buttonCheck").addEventListener("click", "");
document.querySelectorAll("[name=ball1]").forEach(
	function(element){
		element.addEventListener("click", fillBall);
	}
);
document.querySelectorAll("[name=ball2]").forEach(
	function(element){
		element.addEventListener("click", fillBall);
	}
);
document.querySelectorAll("[name=ball3]").forEach(
	function(element){
		element.addEventListener("click", fillBall);
	}
);
document.querySelectorAll("[name=ball4]").forEach(
	function(element){
		element.addEventListener("click", fillBall);
	}
);