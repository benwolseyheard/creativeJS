/** @format */

"use strict";

// // LOCAL STORAGE // //
// Local storage persists even if the broswer is closed and must be manually cleared

// Local storage must be a string key:value pair
localStorage.setItem("name", "ben");
localStorage.setItem("lastName", "evans");

// Clearing local storage
localStorage.clear();

// Passing in objects and objects / returning them through parsing
const todoList = ["feed cat", "wash", "watch tv"];
//Use JSON.stringify to format it correctly on way in
localStorage.setITem("todos", JSON.stringify(todoList));

// Getting stuff back

//Use JSON.sparse to return correctly
const retrieve = JSON.parse(localStorage.getItem("todos"));

// const user = localStorage.getItem("name");
// console.log(typeof user);

// // SESSION STORAGE // //
// Session storage is deleted once the broswer is closed
sessionStorage.setItem("name", "bob");
