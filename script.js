// Computer chooses between Rock Paper and Scissors
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

// Player selection
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return playerChoice; 
}

let winner;
let computerSelection;
let playerSelection;

// Play round
function playRound() {
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    playerSelection = getPlayerChoice();
    console.log(playerSelection);

    if (playerSelection === computerSelection) { // Both choose the same 
        winner = "nobody";
        let tieGame = `Its a draw, you both chose ${playerSelection}`;
        return tieGame;
    } else if (playerSelection === "rock" && computerSelection === "scissors") { // Player wins with rock
        winner = "player";
        let playerWins = "You won with Rock!";
        return playerWins;
    } else if (playerSelection === "paper" && computerSelection === "rock") { // Player wins with paper
        winner = "player";
        let playerWins = "You won with Paper!";
        return playerWins;
    } else if (playerSelection === "scissors" && computerSelection === "paper") { // Player wins with scissors
        winner = "player";
        let playerWins = "You won with Scissors!";
        return playerWins;
    } else if (playerSelection === "scissors" && computerSelection === "rock") { // Computer wins with rock
        winner = "computer";
        let computerWins = "The computer won with Rock!";
        return computerWins;
    } else if (playerSelection === "rock" && computerSelection === "paper") { // Computer wins with paper
        winner = "computer";
        let computerWins = "The computer won with Paper!";
        return computerWins;
    } else if (playerSelection === "paper" && computerSelection === "scissors") { // Computer wins with scissors
        winner = "computer";
        let computerWins = "The computer won with Scissors!";
        return computerWins;
    } else { // Player enter invalid choice
        winner = "nobody";
        let playerChoiceError = "You chose an invalid option, Please refresh page!";
        return playerChoiceError;
    }
}

console.log(playRound());


// Make game function
// Call computer and player selection
// Call playRound to start round 1
// Evaluate round winner
// Store winner in variable
// Reset and go to next round 
// Make game winner first to 5