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
function playRound() {
    if (playerSelection === computerSelection) { // Both choose the same 
        let tieGame = `Its a draw, you both chose ${playerSelection}`
        return tieGame
    } else if (playerSelection === "rock" && computerSelection === "scissors") { // Player wins with rock
        let playerWins = "You won with Rock!"
        return playerWins
    } else if (playerSelection === "paper" && computerSelection === "rock") { // Player wins with paper
        let playerWins = "You won with Paper!"
        return playerWins
    } else if (playerSelection === "scissors" && computerSelection === "paper") { // Player wins with scissors
        let playerWins = "You won with Scissors!"
        return playerWins
    } else if (playerSelection === "scissors" && computerSelection === "rock") { // Computer wins with rock
        let computerWins = "The computer won with Rock!"
        return computerWins
    } else if (playerSelection === "rock" && computerSelection === "paper") { // Computer wins with paper
        let computerWins = "The computer won with Paper!"
        return computerWins
    } else if (playerSelection === "paper" && computerSelection === "scissors") { // Computer wins with scissors
        let computerWins = "The computer won with Scissors!"
        return computerWins
    } else { // Player enter invalid choice
        let playerChoiceError = "You chose an invalid option, Please refresh page!"
        return playerChoiceError
    }
}

console.log(playRound(playerSelection, computerSelection))

// Evaluate round winner
// Reset and go to next round
// Make game winner first to 5