// Computer chooses between Rock Paper and Scissors
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

let computerSelection = getComputerChoice()

console.log(computerSelection)

// Player selection
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return playerChoice; 
}

let playerSelection = getPlayerChoice();
console.log(playerSelection);

// Play round
// Evaluate round winner
// Reset and go to next round
// Make game winner first to 5