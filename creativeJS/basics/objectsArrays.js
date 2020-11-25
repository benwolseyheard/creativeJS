/** @format */

"use strict";
//Objects
const user = {
	//Properties --> variables inside of objects
	//Key-Value pairs
	name: "Ben",
	age: 25,
	married: false,
	//Methods --> functions inside of objects
	greet: function () {
		console.log("Hello there!");
	},
};

console.log(user.name);
user.greet;

//Arrays
const listUsers = ["Ben", "Dev Ed", "John"];
//Use index numbers starting from 0
console.log(listUsers[0]);
typeof listUsers; //Arrays are a type of object and have properties and methods

//Array methods
listUsers.pop(); //removes the last
listUsers.push("new name"); //Appends name to the end
listUsers.shift(); //Removes first element [0]
listUsers.unshift("newest"); // Adds to the start
console.log(listUsers.indexOf("Ben")); //Where the element is inside the array
console.log(listUsers);
