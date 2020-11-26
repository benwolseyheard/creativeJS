/** @format */

"use strict";

//Loops

for (let i = 0; i <= 100; i += 10) {
	//Run code
	if (i === 20) {
		console.log("YOU HIT 20!");
		continue; //Skips to the next iteration of a loop
	} else if (i === 40) {
		console.log("We hit 40");
		break; //Completely exits the loop
	}
	console.log(i);
}
//At 20 the loop will run the if statement and skil anything below continue, moving onto the next iteration

//Looping through array
const texts = [
	"singing in the park",
	"watching myself dance",
	"dogs are dangerous",
	"cats are cool",
];

for (let i = 0; i < texts.length; i++) {
	console.log(texts[i]);
}
const text = "benjamin";
for (let i = 0; i < text.length; i++) {
	console.log(text[i]);
}
