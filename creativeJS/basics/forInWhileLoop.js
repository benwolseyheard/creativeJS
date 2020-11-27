/** @format */

"use strict";

const user = {
	name: "ben",
	age: 24,
	money: 0,
};

//We can use the forIn loop to cycle through objects
for (let x in user) {
	console.log(user[x]);
}

console.log(user.name);
console.log(user[name]);

// While and Do While
//When using a while loop we must increment or change the value to prevent an infinite loop
let i = 0;
while (i < 2) {
	console.log(i);
	i++;
}

//Using the Do allows us to guarantee an entire loop is performed even once if a statement is false
let x = 1;
do {
	console.log(`do loop: ${x}`);
	x++;
} while (x > 3);
{
	console.log(`hello ${x}`);
	x++;
}
