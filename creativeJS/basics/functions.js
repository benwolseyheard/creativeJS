/** @format */
"use strict";

function greet(name) {
	// let name = prompt("what is your name?");
	console.log(`Welcome to our website ${name}`);
}

console.log("rest of the code");

//Nesting a function inside another function
function signUp() {
	let nameAnswer = prompt("what is your name?");
	greet(nameAnswer);
}

//Invoking a function --> call a function
signUp();

let maxNum = Math.max(1, 5);
console.log(maxNum);

function max(n1 = 0, n2 = 2) {
	if (n1 > n2) {
		return `${n1} is greater than ${n2}`;
	} else {
		return `${n1} is less than ${n2}`;
	}
}
let inbox = max(1, 5);
console.log(inbox);
