/** @format */

"use strict";

// SELECTING THE DOM

// Selecting all node elements of a certain tag
const headers = document.getElementsByTagName("h2");

console.log(headers[1]);
// Although this produces an Array-like container we cannot use array methods such as push on it

const list = document.getElementsByClassName("item");
console.log(list.length);

// This will provide ONLY the first eleement with this Id on the page
// IDs should be unique and not repeated within a html document
const button = document.getElementById("submit");

// Query selector allows us to use CSS selectors to select elements
// This only sleects the first h2 node element
const headers1 = document.querySelector("h2");
console.log("querySelector:", headers1);
//To select all use the plural
const headers2 = document.querySelectorAll("h2");
console.log("querySelectorAll:", headers2);

// Selecting the first items with class = 'item'
const items = document.querySelector(".item");
// Only select h2's with the class = 'item'
const items = document.querySelector("h2.item");

//Only select the link within the list ID item parent
const items = document.querySelector("#list a");
