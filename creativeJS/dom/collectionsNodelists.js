/** @format */

"use strict";

// A HTML collection can only hold node elements
const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");

// A node list can hold different types, including node elemeents, node text, node comments etc
const nodeItems = document.querySelectorAll(".item");

// console.log(collectionItems, nodeItems);
console.log(nodeItems.childNodes);

// you can use for loops on both HTML collections and node lists
// for (item of nodeItems) {
// 	console.log(item);
// }
// You can use forEach method to loop through node lists
// HTML collections cannot
nodeItems.forEach(function (item) {
	console.log(item);
});

// Adding an item tree using JS
const newItem = document.createElement("li"); // Create new element
newItem.classList.add("item"); // Add class to new element
newItem.innerHTML = "c"; // Add text
todoList.appendChild(newItem); // Append the new element to existing list

// Update the amount of items we have
const todoNr = document.getElementsByClassName("todo-nr")[0]; //Select the first element with this class
todoNr.innerText = collectionItems.length; //todo number is equal to the length of the colletionItems array

/*
//If we had used querySelector the number would not automatically update itself. It is not DYNAMIC, it is STATIC

const todoList = document.querySelector("#todo-list");
//To work arorund this we can querySelect things and then grab the children from it. This transforms them to HTML collecitons
const items = todoList.childern;
console.log(items);
const todoNr = document.querySelector(".todo-nr");
*/
