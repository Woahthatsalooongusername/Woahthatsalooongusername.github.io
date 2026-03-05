"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}

/*
console.log("it works");
let yourName = prompt("What's your name");
addToBody("Hi " + yourName);
*/

let temp = prompt("What temperature is it outside");

if(temp < 32){
	addToBody("It's freezing! Watch out for ice!");
}else if(temp < 80){
	addToBody("take a walk");
}else{
	addToBody("Go to the beach");
}

