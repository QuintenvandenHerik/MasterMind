var ball1 = document.getElementById("[name=ball1]");
var	ball2 = document.getElementById("[name=ball2]");
var	ball3 = document.getElementById("[name=ball3]");
var ball4 = document.getElementById("[name=ball4]");
var ball1Color = 0;
var ball2Color = 0;
var ball3Color = 0;
var ball4Color = 0;
var colors = {};
colors['red'] = 1;
colors['blue'] = 2;
colors['yellow'] = 3;
colors['green'] = 4;
colors['black'] = 5;
colors['orange'] = 6;
var colorRed = 1;
var colorBlue = 2;
var colorYellow = 3;
var colorGreen = 4;
var colorBlack = 5;
var	colorOrange = 6;
var currentColor = 0;
var code1 = 0;
var code2 = 0;
var code3 = 0;
var code4 = 0;
var code = [];
var attempt = [];
var actualRowNr = 1;

function createCode() {
	code1 = Math.floor((Math.random() * 6) + 1);
	code2 = Math.floor((Math.random() * 6) + 1);
	code3 = Math.floor((Math.random() * 6) + 1);
	code4 = Math.floor((Math.random() * 6) + 1);
	document.getElementById("inputRij" + actualRowNr.toString()).className = "row";
	code = [code1, code2, code3, code4];
	console.log(code);
}

function createRow(nr){
	var row = document.createElement("DIV");
	var container = document.getElementById("center");
	row.className = "rowBlocked";
	row.setAttribute("id", "inputRij"+nr);
	row.innerHTML = '<div name="ball1" class="ball"></div><div name="ball2" class="ball"></div><div name="ball3" class="ball"></div><div name="ball4" class="ball"></div><div name="hintsDisplayAll"><div class="hintsDisplay"></div><div class="hintsDisplay"></div><div class="hintsDisplay"></div><div class="hintsDisplay"></div></div>';
	container.appendChild(row);
}

for (var i = 1; i <= 12; i++){
	createRow(i);
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function checkCode (secretcode, attempt){
// fase 1 check right number in right position
 console.dir(attempt);
 	var code = clone(secretcode);
    var done = 'X'
    var green = 0;
    var red = 0;
    for (var i = 0; i < code.length; i++){
        if (code[i] == attempt[i]){
            green++;
            code[i] = done;
            attempt[i] = done;
        }
        if (green === 4) {
    		if (alert("Winner Winner Chicken Dinner!")){}
    		else {
    			window.location.reload();
    		}
    	}
    }
    
// fase 2 check right number in wrong position
    for (var i = 0; i < code.length; i++){
        if (code[i] != done){
            for (var j = 0; j < attempt.length; j++){
                if (attempt[j] != done){
                    if (code[i] == attempt[j]){
                        red++;
                        attempt[j] = done;
                    }
                }
            }
        }
    }
    return {green: green, red: red};
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
	console.log(ball4Color);
}

checkActualCode = function(){

	var attempt = [];
	var balls = document.querySelectorAll('#inputRij' + actualRowNr.toString() + ' .ball');
	console.dir(balls);
	for (var b = 0; b < balls.length; b++){
		if (balls[b].style.backgroundColor == "") {
			return
		}
		nr = colors[balls[b].style.backgroundColor];
		attempt.push(nr);
	}
	var result = checkCode(code,attempt);

	var hints = document.querySelectorAll('#inputRij' + actualRowNr.toString() + ' .hintsDisplay');
	var hintsDisplayIndex = 0;
	for (var i = 1; i <= result.green; i++){
		hints[hintsDisplayIndex].style.backgroundColor = 'green';
		hintsDisplayIndex++;
	}

	for (var i = 1; i <= result.red; i++){
		hints[hintsDisplayIndex].style.backgroundColor = 'red';
		hintsDisplayIndex++;
	}
	document.getElementById("inputRij" + actualRowNr.toString()).className = "rowBlocked";
	actualRowNr++;
	if (actualRowNr > 12) {
		if	(alert("Better Luck Next Time!")){}
		else {
    		window.location.reload();
    	}
	}
	document.getElementById("inputRij" + actualRowNr.toString()).className = "row";
}

document.getElementById("colorRed").addEventListener("click", pickColorRed);
document.getElementById("colorBlue").addEventListener("click", pickColorBlue);
document.getElementById("colorYellow").addEventListener("click", pickColorYellow);
document.getElementById("colorGreen").addEventListener("click", pickColorGreen);
document.getElementById("colorBlack").addEventListener("click", pickColorBlack);
document.getElementById("colorOrange").addEventListener("click", pickColorOrange);
document.getElementById("buttonCreate").addEventListener("click", createCode);
document.getElementById("buttonCheck").addEventListener("click", checkActualCode);
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