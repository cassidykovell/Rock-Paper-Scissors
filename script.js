// Initialize global variables
var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ['R', 'P', 'S'];

var playGame = function () {
	var userChoice = prompt("'Choose R, P, S'");
	
	var computerChoice = options[Math.floor(Math.random() * options.length)];

	alert ("The computer has chosen " + computerChoice)
	
	if(userChoice===computerChoice){
		alert("It's a tie");
		ties++;
	} else if (
		(userChoice === "R" && computerChoice === "S") ||
		(userChoice === "P" && computerChoice === "R") ||
		(userChoice === "S" && computerChoice === "P")
	){
		alert("You win");
		win++;
	} else {
		alert("Computer wins!");
		losses++;
	}

alert("Wins: " + wins + '\n' + "Losses: " + losses + '\n' + "Ties: " + ties);

var playAgain = confirm('Do you want to play again?')
 if(confirm===true) {
	playGame();
 }



	// TODO: Write a conditional statement to determine the outcome:
	/*
  - if both userChoice and computerChoice are the same, increment the variable 'ties' by 1 and use the alert() method to let the user know it's a tie
  - else if the user has won, increment the variable 'wins' by 1 and use the alert() method to let the user know
  - else the user lost: increment the variable 'losses' by 1 and use the alert() method to let the user know
  */

	// TODO: Use the alert() method to display current 'wins', 'losses', and 'ties'

	// TODO: Use the confirm() method to ask user to play again and collect the response in a variable named 'playAgain'
	
	// TODO: Run the function playGame() if 'playAgain' is true
};

// Run the game for the first time
playGame();
