let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function convertToFullWord(letter) {
  if (letter === "r") {
    return "ROCK";
  }
  if (letter === "p") {
    return "PAPER";
  }
  if (letter === "s") {
    return "SCISSORS";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${convertToFullWord(userChoice)}(user) beats ${convertToFullWord(computerChoice)}(computer). You win!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() =>  document.getElementById(userChoice).classList.remove('green-glow'), 150);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${convertToFullWord(computerChoice)}(computer) beats ${convertToFullWord(userChoice)}(user). You loose!`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 150);
}

function draw(userChoice, computerChoice) {
  userScore++;
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${convertToFullWord(userChoice)}(user) equal ${convertToFullWord(computerChoice)}(computer). Draw!`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 150);
}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', () => {
  game("r");
});

paperDiv.addEventListener('click',  () =>  {
  game("p");
});

scissorsDiv.addEventListener('click',  () => {
  game("s");
});
}

main();
