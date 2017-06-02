var ball1 = document.getElementById("[name=ball1]");
var	ball2 = document.getElementById("[name=ball2]");
var	ball3 = document.getElementById("[name=ball3]");
var ball4 = document.getElementById("[name=ball4]");
var ball1Color = 0;
var ball2Color = 0;
var ball3Color = 0;
var ball4Color = 0;
var colorRed = 1;
var colorBlue = 2;
var colorYellow = 3;
var colorGreen = 4;
var colorBlack = 5;
var	colorOrange = 6;
var currentColor = 0;
var code = [];
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
	document.getElementById("inputRij1").className = "row";
}

function createRow(nr){
	var row = document.createElement("DIV");
	var container = document.getElementById("center");
	row.className = "rowBlocked";
	row.setAttribute("id", "inputRij"+nr);
	row.innerHTML = '<div name="ball1"></div><div name="ball2"></div><div name="ball3"></div><div name="ball4"></div><div name="hintsDisplayAll"><div name="hintsDisplay1"></div><div name="hintsDisplay2"></div><div name="hintsDisplay3"></div><div name="hintsDisplay4"></div></div>';
	container.appendChild(row);
}

for (var i = 1; i <= 12; i++){
	createRow(i);
}

function checkCode() {
	if (ball1 === code1) {
		console.log("win");
	}
	else {
		console.log(ball1);
		console.log("lose");
	}
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

function fillBall1(event) {

	console.log(event);
	if (currentColor === 1) {
		event.target.style.backgroundColor = "red";
		ball1Color = colorRed;
	}
	else if (currentColor === 2) {
		event.target.style.backgroundColor = "blue";
		ball1Color = colorBlue;
	}
	else if (currentColor === 3) {
		event.target.style.backgroundColor = "yellow";
		ball1Color = colorYellow;
	}
	else if (currentColor === 4) {
		event.target.style.backgroundColor = "green";
		ball1Color = colorGreen;
	}
	else if (currentColor === 5) {
		event.target.style.backgroundColor = "black";
		ball1Color = colorBlack;
	}
	else if (currentColor === 6) {
		event.target.style.backgroundColor = "orange";
		ball1Color = colorOrange;
	}
	console.log(ball1Color)
}

function fillBall2(event) {

	console.log(event);
	if (currentColor === 1) {
		event.target.style.backgroundColor = "red";
		ball2Color = colorRed;
	}
	else if (currentColor === 2) {
		event.target.style.backgroundColor = "blue";
		ball2Color = colorBlue;
	}
	else if (currentColor === 3) {
		event.target.style.backgroundColor = "yellow";
		ball2Color = colorYellow;
	}
	else if (currentColor === 4) {
		event.target.style.backgroundColor = "green";
		ball2Color = colorGreen;
	}
	else if (currentColor === 5) {
		event.target.style.backgroundColor = "black";
		ball2Color = colorBlack;
	}
	else if (currentColor === 6) {
		event.target.style.backgroundColor = "orange";
		ball2Color = colorOrange;
	}
	console.log(ball2Color)
}

function fillBall3(event) {

	console.log(event);
	if (currentColor === 1) {
		event.target.style.backgroundColor = "red";
		ball3Color = colorRed;
	}
	else if (currentColor === 2) {
		event.target.style.backgroundColor = "blue";
		ball3Color = colorBlue;
	}
	else if (currentColor === 3) {
		event.target.style.backgroundColor = "yellow";
		ball3Color = colorYellow;
	}
	else if (currentColor === 4) {
		event.target.style.backgroundColor = "green";
		ball3Color = colorGreen;
	}
	else if (currentColor === 5) {
		event.target.style.backgroundColor = "black";
		ball3Color = colorBlack;
	}
	else if (currentColor === 6) {
		event.target.style.backgroundColor = "orange";
		ball3Color = colorOrange;
	}
	console.log(ball3Color)
}

function fillBall4(event) {

	console.log(event);
	if (currentColor === 1) {
		event.target.style.backgroundColor = "red";
		ball4Color = colorRed;
	}
	else if (currentColor === 2) {
		event.target.style.backgroundColor = "blue";
		ball4Color = colorBlue;
	}
	else if (currentColor === 3) {
		event.target.style.backgroundColor = "yellow";
		ball4Color = colorYellow;
	}
	else if (currentColor === 4) {
		event.target.style.backgroundColor = "green";
		ball4Color = colorGreen;
	}
	else if (currentColor === 5) {
		event.target.style.backgroundColor = "black";
		ball4Color = colorBlack;
	}
	else if (currentColor === 6) {
		event.target.style.backgroundColor = "orange";
		ball4Color = colorOrange;
	}
	console.log(ball4Color)
}

document.getElementById("colorRed").addEventListener("click", pickColorRed);
document.getElementById("colorBlue").addEventListener("click", pickColorBlue);
document.getElementById("colorYellow").addEventListener("click", pickColorYellow);
document.getElementById("colorGreen").addEventListener("click", pickColorGreen);
document.getElementById("colorBlack").addEventListener("click", pickColorBlack);
document.getElementById("colorOrange").addEventListener("click", pickColorOrange);
document.getElementById("buttonCreate").addEventListener("click", createCode);
document.getElementById("buttonCheck").addEventListener("click", checkCode);
document.querySelectorAll("[name=ball1]").forEach(
	function(element){
		element.addEventListener("click", fillBall1);
	}
);
document.querySelectorAll("[name=ball2]").forEach(
	function(element){
		element.addEventListener("click", fillBall2);
	}
);
document.querySelectorAll("[name=ball3]").forEach(
	function(element){
		element.addEventListener("click", fillBall3);
	}
);
document.querySelectorAll("[name=ball4]").forEach(
	function(element){
		element.addEventListener("click", fillBall4);
	}
);