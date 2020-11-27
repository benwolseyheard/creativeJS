/** @format */

"use strict";

const names = ["ben", "ed", "ray", "charlie"];
/*
for (let name of names) {
	console.log(name);
	console.log(names.indexOf(name));
}
*/

//For Each is specifically for ARRAYS
//This takes a function (callback function)
names.forEach(function (name, index) {
	//This function runs each time we loop over each element in the array
	console.log(name, index);
});

//for each is slower than for of but is more specific for an array
//CANNOT use a break or continue inside a function, therefore can't use a break with the forEach function (also some more key words)
