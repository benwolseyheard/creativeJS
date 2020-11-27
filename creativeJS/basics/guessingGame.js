/** @format */

"use strict";
//guessing game
//Generate a random number
//Give user ability to guess
//If they guess and are wrong, ask again (provide hint)
//If hey win - say that they won

function guessGame() {
	let randomNum = Math.trunc(Math.random() * 11);
	console.log(randomNum);
	let userGuess;

	do {
		userGuess = prompt("Pick a number between 1 and 10");
		console.log(randomNum);
		if (randomNum > userGuess) {
			console.log("Guess was too low");
		} else if (randomNum < userGuess) {
			console.log("Guess was too high");
		} else {
			break;
		}
	} while (userGuess !== randomNum);
	{
		console.log("You won");
	}
}

guessGame();
