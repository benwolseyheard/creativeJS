/** @format */

const text = "bananas";
let fruitNum = 0;

switch (text) {
	case "banana":
		console.log("banana bread");
		fruitNum = 1;
		break;
	case "apple":
		console.log("apple pie");
		fruitNum = 2;
		break;
	case "orange":
		console.log("orange juice");
		fruitNum = 3;
		break; //We mus include break to exit the code block
	default:
		console.log("unsure what to make");
		break;
}

// Example of using a switch statement

let userInput = prompt("What is your favorite  fruit?"); //.toLowerCase();
//Use the toLowerCase to avoid case-sensitive errors
let convertedValue = userInput.toLowerCase();

switch (convertedValue) {
	case "kiwi":
		alert("kiwi is the first food invented by the ocean boys");
		break;
	case "banana":
		alert("bananas contain lots of potassium");
		break;
	default:
		alert("That fruit is nice");
		break;
}
//Alert will create a pop-up with the answer based on the case
