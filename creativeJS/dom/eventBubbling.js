/** @format */

"use strict";
// EVENT BUBBLING

const button = document.querySelector("#submit"); //Select button
const todoList = document.querySelector("#todo-list"); //Select the parent of li's --> ul
const todoNr = document.querySelector(".todo-nr i");
const items = todoList.children; //Get the li's of ul
const mainTitle = document.querySelector(".mainTitle");
const nameInput = document.querySelector(".nameInput");

button.addEventListener("click", function (event) {
	//Prevent page refreshing upon form submission (default response)
	event.preventDefault();

	// Create element
	const newItem = document.createElement("li");
	// Add class
	newItem.classList.add("item");
	// Adding text
	newItem.innerText = nameInput.value;
	todoList.appendChild(newItem);
	todoNr.innerText = items.length;

	// Delete value from input once submitted
	nameInput.value = "";

	// Create the element + attatch listener to it
	newItem.addEventListener("click", deleteItem);
});

//Reserve the first argument for the event
function deleteItem(event) {
	event.target.remove();
	event.stopPropagation(); //Prevents event bubbling
	console.log("item deleted");
}

// EVENT BUBBLING
// When we click an event listener, multiple get activated from a cascade
// E.g. when clicking a li you're also clicking the ul, div and window
//We must add a .stopPropagation() method to prevent this

// This causes issues as when i click the li the ul can also get acitvated
todoList.addEventListener("click", function () {
	todoList.classList.toggle("fade");
});
