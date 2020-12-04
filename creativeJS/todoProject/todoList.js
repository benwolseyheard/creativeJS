/** @format */

"use strict";
// Selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
// Functions
function addTodo(event) {
	//Prevent from submitting
	event.preventDefault();
	// Todo List
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	// Create li
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todoItem");
	todoDiv.appendChild(newTodo);
	todoInput.value = "";
	// Check Mark Button
	const completedBtn = document.createElement("button");
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	completedBtn.classList.add("completedBtn");
	todoDiv.appendChild(completedBtn);

	// Delete Button
	const deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
	deleteBtn.classList.add("deleteBtn");
	todoDiv.appendChild(deleteBtn);

	// Append to List
	todoList.appendChild(todoDiv);
}

// deleteCheck Button functions
function deleteCheck(event) {
	const item = event.target;

	// Delete function
	if (item.classList[0] === "deleteBtn") {
		// Select parent element of button
		const todo = item.parentElement;
		// Add Animation class
		todo.classList.add("fall");
		todo.addEventListener("transitionend", function () {
			// Remove parent (div) element
			todo.remove();
		});
	}
	if (item.classList[0] === "completedBtn") {
		// Select parent element of button
		const todo = item.parentElement;
		// Adding/Removing complete class (chnage visuals)
		todo.classList.toggle("completed");
	}
}

// Filter
function filterTodo(event) {
	const todos = todoList.childNodes;
	todos.forEach(function (todo) {
		switch (event.target.value) {
			case "all":
				todo.style.display = "flex";
				break;
			case "completed":
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;

			case "uncompleted":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
		}
	});
}
