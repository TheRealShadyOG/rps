// Computer chooses between Rock Paper and Scissors
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

console.log(getComputerChoice())

// Player selection
// Evaluate round winner
// Make game winner first to 5