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
    playerSelection = selection;

    computer.textContent = "The computer chose " + computerSelection;
    player.textContent = "You chose " + playerSelection;

    determineWinner()

    const results = document.querySelector("#results");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = winnerMsg;

    results.appendChild(content);

    evaluteWinner()

    scorePlayer.textContent = "Player " + playerScore;
    scoreComputer.textContent = "Computer " + computerScore;

    findGameWinner(playerScore, computerScore)
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

// Determining winner and winnerMsg
function determineWinner() {
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
}};

// Display game winner 
function findGameWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        const gameOver = document.querySelector("#gameOver");

        const winnerPlayer = document.createElement("div");
        winnerPlayer.classList.add("winnerPlayer");
        winnerPlayer.textContent = "The Player Won The Game: " + playerScore + " / " + computerScore;

        gameOver.appendChild(winnerPlayer);

        makeResetButton()
        removeOnclick()
    } else if (computerScore === 5) {
        const gameOver = document.querySelector("#gameOver");

        const winnerComputer = document.createElement("div");
        winnerComputer.classList.add("winnerComputer");
        winnerComputer.textContent = "The Computer Won The Game: " + computerScore + " / " + playerScore;

        gameOver.appendChild(winnerComputer);

        makeResetButton()
        removeOnclick()
    } 
}

// Reset Button
function makeResetButton() {
    const resetButton = document.createElement("BUTTON");
    resetButton.classList.add("resetButton");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
        history.go(0);
    });

    gameOver.appendChild(resetButton);
}

// Remove Onclick from buttons
function removeOnclick() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

// Display Choices
const choices = document.querySelector("#choices");

const computer = document.createElement("div");
computer.classList.add("computer");

const player = document.createElement("div");
player.classList.add("player");

choices.appendChild(player);
choices.appendChild(computer);

// Display scores 
const score = document.querySelector("#score");

const scorePlayer = document.createElement("div");
scorePlayer.classList.add("scorePlayer");
scorePlayer.textContent = "Player " + playerScore;

score.appendChild(scorePlayer);

const scoreComputer = document.createElement("div");
scoreComputer.classList.add("scoreComputer");
scoreComputer.textContent = "Computer " + computerScore;

score.appendChild(scoreComputer);

/*
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

fiveRounds()
*/

// Make event listeners for buttons
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock");
}); 

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
});