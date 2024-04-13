let computerSelection;

getComputerChoice();
getPlayerChoice();

function getComputerChoice() {
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
    console.log(computerSelection)
    return computerSelection;
};

function getPlayerChoice() {
    playerInput = prompt("Enter Rock, Paper, or Scissors.").toLowerCase();
    console.log(playerInput);
};