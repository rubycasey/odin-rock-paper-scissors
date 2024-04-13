let computerSelection;

getComputerChoice();

function getComputerChoice() {
    computerSelection = Math.round(Math.random() * (2 - 0) + 0);
    //console.log(computerSelection)
    return computerSelection;
};