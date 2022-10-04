// const readlineSync = require("readline-sync");
import rl from "readline-sync";

console.log(`Welcome to two-player Rock Paper Scissors!`);

let p1Name = rl.question("Player 1 - Please enter your name:");
let p2Name = rl.question("Player 2 - Please enter your name:");
while (p2Name === p1Name) {
	console.log(`Player 2, choose a different name than Player 1.
	
	`);
	p2Name = rl.question("Player 2 - Please enter your name:");
}

let isP1ChoiceValid = false;
let isP2ChoiceValid = false;
let p1Choice;
let p2Choice;
let p1Score = 0;
let p2Score = 0;

console.clear();
console.log(`

GET READY TO PLAY ROCK PAPER SCISSORS...


`);

letsPlay();

function letsPlay() {
	// ** clearVariables
	newGame();
	getChoice(p1Name);
	getChoice(p2Name);

	// console.clear();
	compareChoices(p1Choice, p2Choice);
}

function compareChoices(p1Choice, p2Choice) {
	console.log(`
	
	${p1Name} chose ${p1Choice}.
	${p2Name} chose ${p2Choice}.

	`);

	if (p1Choice === p2Choice) {
		console.log(`It's a DRAW!!`);
	}
	if (p1Choice === "rock" && p2Choice === "paper") {
		console.log(`Paper beats rock!! ${p2Name} WINS !!!`);
		p2Score++;
	}
	if (p1Choice === "rock" && p2Choice === "scissors") {
		console.log(`Rock beats scissors!! ${p1Name} WINS !!!`);
		p1Score++;
	}
	if (p1Choice === "paper" && p2Choice === "rock") {
		console.log(`Paper beats rock!! ${p1Name} WINS !!!`);
		p1Score++;
	}
	if (p1Choice === "paper" && p2Choice === "scissors") {
		console.log(`Scissors beats paper!! ${p2Name} WINS !!!`);
		p2Score++;
	}
	if (p1Choice === "scissors" && p2Choice === "rock") {
		console.log(`Rock beats scissors!! ${p2Name} WINS !!!`);
		p2Score++;
	}
	if (p1Choice === "scissors" && p2Choice === "paper") {
		console.log(`Scissors beats paper!! ${p1Name} WINS !!!`);
		p1Score++;
	}

	console.log(`
	
	The score is ${p1Name}: ${p1Score} vs ${p2Name}: ${p2Score}.
	

	
	`);

	rl.question("Press enter to play again...:");

	letsPlay();
}

function checkValueChoice(choice, currentPlayer) {
	if (choice != "rock" && choice != "paper" && choice != "scissors") {
		console.log(
			`${currentPlayer}, please enter a valid choice, with no spaces, either rock or paper or scissors.`
		);
	} else {
		console.log(`Thanks for your choice!`);
		if (currentPlayer === p1Name) {
			isP1ChoiceValid = true;
			p1Choice = choice;
		}
		if (currentPlayer === p2Name) {
			isP2ChoiceValid = true;
			p2Choice = choice;
		}
	}
}

// function newGame {

// }

function getChoice(currentPlayer) {
	let otherPlayer;
	let isChoiceValid;
	let choice;
	if (currentPlayer === p1Name) {
		otherPlayer = p2Name;
		isChoiceValid = isP1ChoiceValid;
	} else {
		otherPlayer = p1Name;
		isChoiceValid = isP2ChoiceValid;
	}
	console.clear();
	console.log(`

	${otherPlayer}, look away from the screen.

	`);

	while (!isChoiceValid) {
		choice = rl.question(
			`${currentPlayer}, enter your choice (rock, paper or scissors):`
		);
		checkValueChoice(choice, currentPlayer);
		if (currentPlayer === p1Name) {
			isChoiceValid = isP1ChoiceValid;
		} else {
			isChoiceValid = isP2ChoiceValid;
		}
	}
}

function newGame() {
	isP1ChoiceValid = false;
	isP2ChoiceValid = false;
	p1Choice = "";
	p2Choice = "";
}
