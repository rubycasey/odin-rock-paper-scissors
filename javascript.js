let playerScore = 0;
let computerScore = 0;
let gameLength = 5;

playGame();

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        console.log(`NPC also chose ${playerChoice}, its a tie!`)
        return null;
    };
    if (compareSelections(playerChoice, computerChoice) == true) {
        console.log(`NPC chose ${computerChoice}, you win!`)
        return "player";
    } else {
        console.log(`NPC chose ${computerChoice}, you lose. :(`)
        return "computer";
    };
};

function playGame() {
    for (let i = 0; i < gameLength; i++) {
        result = playRound();
        switch (result) {
            case "player":
                playerScore += 1;
                break;
            case "computer":
                computerScore += 1;
                break;
            case null:
                break;
        };
        console.log(`Your score: ${playerScore}, NPC score: ${computerScore}.`);
    };
    if (playerScore == computerScore) {
        console.log(`You tied with a score of ${playerScore}.`)
        return;
    };
    switch (playerScore > computerScore) {
        case true:
            console.log(`You won with a score of ${playerScore}!`);
            break;
        case false:
            console.log(`You lost with a score of ${playerScore}.`);
            break;
    };
};

function getComputerChoice() {
    let computerSelection;
    randomSelection = Math.round(Math.random() * (2 - 0) + 0);
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
    switch (player) {
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