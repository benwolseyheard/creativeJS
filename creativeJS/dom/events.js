/** @format */

"use strict";
// EVENTS LECTURE

const button = document.querySelector("#submit"); //Select button
const todoList = document.querySelector("#todo-list"); //Select the parent of li's --> ul
const items = todoList.children; //Get the li's of ul
const todoNr = document.querySelector(".todo-nr i");
const mainTitle = document.querySelector(".mainTitle");

// // ADDING EVENT LISTENERS
// // Examples of events: CLICK, SCROLL, RESIZING THE BROWSER
// /*
// function addItem() {
// 	console.log("NEW ITEM ADDED");
// }
// button.addEventListener("click", addItem);
// //If using a named function we dont need parenthesis () as this would call it prior to the event);

// // We can also use a unction without a name, if we don't plan on reusing the same function on other events
// button.addEventListener("click", function () {
// 	console.log("New item added");
// });
// */

// button.addEventListener("click", function () {
// 	const newItem = document.createElement("li");
// 	newItem.classList.add("item");
// 	newItem.innerText = `Item ${items.length + 1}`;
// 	todoList.appendChild(newItem);
// 	todoNr.innerText = `${items.length}`;
// });

button.addEventListener("click", function (event) {
	// mainTitle.style.color = "red";
	// mainTitle.style.fontSize = "50px";

	//Often instead of entering individual stlyes we will attatch a pre-made class from css

	/*mainTitle.classList.add("title");
	mainTitle.classList.remove("title");*/
	mainTitle.classList.toggle("title");
	//Toggle will remove a class if it is there and adds if it is not
	//To keep the transition we must add the transition to the class that remains (mainTitle) instead of that which is removed

	//Could also add functionality based off input of an event
	// console.log(event);
	// if (event.keycode === 81) {
	// 	mainTitle.style.add((color = "red"));
	// }
});
