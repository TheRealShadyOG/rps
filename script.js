// Computer chooses between Rock Paper and Scissors
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

// Variables used for playRound function
let winner;
let winnerMsg;
let computerSelection;
let playerSelection;

// Play round
function playRound(selection) {
    // Call computer selection
    computerSelection = getComputerChoice();

    const computer = document.querySelector("#player");

    const computerChoice = document.createElement("div");
    computerChoice.classList.add("computer");
    computerChoice.textContent = "The computer chose " + computerSelection;

    computer.appendChild(computerChoice);

    playerSelection = selection;
    const player = document.querySelector("#player");

    const playerChoice = document.createElement("div");
    playerChoice.classList.add("playerChoice");
    playerChoice.textContent = "You chose " + playerSelection;

    player.appendChild(playerChoice);

    // Determining winner and winnerMsg
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
        // If user input invalid, redo round
        playRound()
    }

    const results = document.querySelector("#results");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = winnerMsg;

    results.appendChild(content);
}

// Variables for evaluateWinner function
let playerScore = 0;
let computerScore = 0;

// Evaluate round winner
function evaluteWinner() {
    if (winner === "player") {
        playerScore++
    } else if (winner === "computer") {
        computerScore++
    }
}

// Make game function
function game() {
    // Calling playRound to start first round
    playRound();
    console.log(winnerMsg);
    console.log(winner);

    // Call evaluateWinner to find winner of round
    evaluteWinner();
    console.log("player: " + playerScore);
    console.log("computer: " + computerScore);
}

// Make game 5 rounds
function fiveRounds() {
    for (i = 0; i < 5; i++) {
        game()
    }
}

//fiveRounds()


// Make event listeners for buttons
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock")
}); 

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper")
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors")
});