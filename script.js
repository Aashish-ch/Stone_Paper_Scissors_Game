const choices = ['rock', 'paper', 'scissors'];
let score = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(playerChoice, computerChoice);
    document.getElementById('result').innerText = `You choose ${playerChoice}, Computer choose ${computerChoice}. ${result}`;
    updateScore(result);
}

function getResult(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    }
    return "You lose!";
}

function updateScore(result) {
    if (result === "You win!") {
        score++;
    } else if (result === "You lose!") {
        score--;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}
