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
let winnerMsg;
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
        let tieGame = `Its a draw, you both chose ${playerSelection}.`;
        winnerMsg = tieGame;
    } else if (playerSelection === "rock" && computerSelection === "scissors") { // Player wins with rock
        winner = "player";
        let playerWins = "You won with Rock!";
        winnerMsg = playerWins;
    } else if (playerSelection === "paper" && computerSelection === "rock") { // Player wins with paper
        winner = "player";
        let playerWins = "You won with Paper!";
        winnerMsg = playerWins;
    } else if (playerSelection === "scissors" && computerSelection === "paper") { // Player wins with scissors
        winner = "player";
        let playerWins = "You won with Scissors!";
        winnerMsg = playerWins;
    } else if (playerSelection === "scissors" && computerSelection === "rock") { // Computer wins with rock
        winner = "computer";
        let computerWins = "The computer won with Rock!";
        winnerMsg = computerWins;
    } else if (playerSelection === "rock" && computerSelection === "paper") { // Computer wins with paper
        winner = "computer";
        let computerWins = "The computer won with Paper!";
        winnerMsg = computerWins;
    } else if (playerSelection === "paper" && computerSelection === "scissors") { // Computer wins with scissors
        winner = "computer";
        let computerWins = "The computer won with Scissors!";
        winnerMsg = computerWins;
    } else { // Player enter invalid choice
        winner = "nobody";
        let playerChoiceError = "You chose an invalid option, Please refresh page!";
        winnerMsg = playerChoiceError;
    }
}

// Evaluate round winner
let playerScore = 0;
let computerScore = 0;

function evaluteWinner() {
    if (winner === "player") {
        playerScore++
    } else if (winner === "computer") {
        computerScore++
    }
}

// Make game function
function game() {
    playRound();
    console.log(winnerMsg);
    console.log(winner);

    evaluteWinner();
    console.log("player: " + playerScore);
    console.log("computer: " + computerScore);
}

game()
game()
game()
game()
game()

// Call computer and player selection
// Call playRound to start round 1
// Store winner in variable
// Reset and go to next round 
// Make game winner first to 5