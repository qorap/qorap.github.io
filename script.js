"use strict";

function showLine(){
	document.getElementById('line').style.height = (document.body.clientWidth - 100) * 0.9;	

};

document.getElementById('seven').style.display = 'none';

function calcAB(st) {
	var a, b, Calc, calc, showText, style,h, add; 
	a = document.getElementById('a').value;
	b = document.getElementById('b').value
	
	a = parseInt(a);
	b = parseInt(b);

	Calc = function (a, b) {
		this.a = a;
		this.b = b;
	}
	Calc.prototype.plus = function() {
		return this.a + this.b;
	};
	
	calc = new Calc(a, b);
	h=0;
	if (st == undefined) {		
		style = st;		
	} else {
		style = st;			
	} 
	if (Number(st)){
		h=1;
	}
	var tool = (h==1) ?calc.plus(): "?";

	showText = "<p>";
	showText += "<span class='bad' style='background-color: "+ style +"' >" +calc.a+ "</span>";
	showText += " + " + calc.b + " = "+tool;

	showText += "</p>";

	
	setTimeout(function() { console.log(calc.a + " + " + calc.b + " = "+ calc.plus()) }, 3000);

	document.getElementById('main').innerHTML = showText;	
	document.getElementById('seven').style.display = 'block';
};
function info(a){
	var focus = document.getElementById('a').value;	
	if (focus.indexOf(a) != -1){		
		document.getElementById('ins').style.color = "#000";
		calcAB(a); 
	} else {
		document.getElementById('ins').style.color = "#ff0000"; 
		calcAB("#ffff00");
	}
}
