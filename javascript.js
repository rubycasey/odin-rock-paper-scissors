// Getting UI elements
let scoreboard = document.querySelector("#score");
let textConsole = document.querySelector("#console");

let bttnRock = document.querySelector("#rock");
let bttnPaper = document.querySelector("#paper");
let bttnScissors = document.querySelector("#scissors");

// Game variables
let playerScore = 0;
let computerScore = 0;
let gameLength = 5;
let currentRound = 0;

updateScoreboard();
textConsole.innerText = `Welcome!`;

// Button logic,
bttnRock.addEventListener("click", () => {
	playRound("rock");
})
bttnPaper.addEventListener("click", () => {
	playRound("paper");
})
bttnScissors.addEventListener("click", () => {
	playRound("scissors");
})

function playRound(playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) {
	if (currentRound < gameLength-1) {
		// Checks for tie.
		if (playerChoice == computerChoice) {
			console.log(`NPC also chose ${playerChoice}, its a tie!`)
			textConsole.innerText = `NPC also chose ${playerChoice}, its a tie!`
			currentRound++;
			updateScoreboard();
		};

		// Decides winner of round.
		if (compareSelections(playerChoice, computerChoice) == true) {
			console.log(`NPC chose ${computerChoice}, you win!`)
			textConsole.innerText = `NPC chose ${computerChoice}, you gained a point!`;
			playerScore++;
			currentRound++;
			updateScoreboard();
		} else if (playerChoice != computerChoice) {
			console.log(`NPC chose ${computerChoice}, you lose. :(`)
			textConsole.innerText = `NPC chose ${computerChoice}, they gained a point.`;
			computerScore++;
			currentRound++;
			updateScoreboard();
		};

		// Checks for end game
		console.log("yee")
		if (currentRound + 1 == gameLength) {
			// Checks for tie.
			if (playerScore == computerScore) {
				console.log(`You tied with a score of ${playerScore}.`)
				textConsole.innerText = `You tied with a score of ${playerScore}`
				return;
			};
			switch (playerScore > computerScore) {
				case true:
					console.log(`You won with a score of ${playerScore}!`);
					textConsole.innerText = `You won with a score of ${playerScore}!`;
					break;
				case false:
					console.log(`You lost with a score of ${playerScore}.`);
					textConsole.innerText = `You lost with a score of ${playerScore}.`;
					break;
			};
		};
	};
};

function getComputerChoice() {
    let computerSelection;
    randomSelection = Math.round(Math.random() * (2 - 0) + 0);
    // Maps random number to item selection.
    switch (randomSelection) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    };
    //console.log(computerSelection)
    return computerSelection;
};

function getPlayerChoice() {
    playerInput = prompt("Enter Rock, Paper, or Scissors.").toLowerCase();
    //console.log(playerInput);
    return playerInput;
};

function compareSelections(player, computer) {
    // Returns true if player's choice wins over the computer's.
    // Returns false if not.
    switch (player) {
		case computer:
        case "rock":
            if (computer == "scissors") {
                return true;
                break;
            } else {return false;};
        case "paper":
            if (computer == "rock") {
                return true;
                break;
            } else {return false;};
        case "scissors":
            if (computer == "paper") {

                return true;
                break;
            } else {return false;};
    };
};

function updateScoreboard() {	
	scoreboard.innerText = `Score: ${playerScore} - ${computerScore}, Round: ${currentRound + 1} / ${gameLength}`;
};
