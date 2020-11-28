/** @format */

// SCOPE LECTURE

//GLOBAL SCOPE
let food = "apple";
let fruits = 5;

//FUNCTION SCOPED
function store() {
	let food = "banana";
	let fruits = 10;
	console.log(food, fruits);
}

console.log(food, fruits);
store();

//BLOCK SCOPE
//Anything within a block statement { }, new to ES6

//var does not have any block scope so we must use let or const
for (let fruits = 0; fruits < 10; fruits++) {
	console.log(fruits);
}
