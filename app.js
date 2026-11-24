let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

const USER_OUTPUT = document.getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");

const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");

const RESULT = document.getElementById("result");

const SCORE_BOARD =  document.getElementById("score-board");

ROCK.addEventListener("click", function () {
  computerChoice()
  userHand='Rock'
  calculateResult()
  changeColor()

});

PAPER.addEventListener("click", function () {
   computerChoice()
  userHand='Paper'
  calculateResult()
  changeColor()


});

SCISSORS.addEventListener("click", function () {
 computerChoice()
  userHand='Scissors'
  calculateResult()
  changeColor()


});

function changeColor(){
    if (roundResult== "Win"){
     SCORE_BOARD.style.backgroundColor = "green";
    }
    else if (roundResult== "Lose"){
      SCORE_BOARD.style.backgroundColor = "red";
    }else{
      SCORE_BOARD.style.backgroundColor = "wheat";
    }       
}

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    computerHand = "Rock";
  } else if (randomNumber == 1) {
    computerHand = "Paper";
  } else {
    computerHand = "Scissors";
  }
}

function calculateResult() {
  if (userHand === computerHand) {
    RESULT.innerHTML = `It was a draw — you both chose ${userHand}.`;
    roundResult = 'Draw';
    return;
  }

  const userWins =
    (userHand === 'Rock' && computerHand === 'Scissors') ||
    (userHand === 'Paper' && computerHand === 'Rock') ||
    (userHand === 'Scissors' && computerHand === 'Paper');

  if (userWins) {
    userScore++;
    USER_OUTPUT.innerHTML = userScore;
    RESULT.innerHTML = `${userHand}<sup>(user)</sup> Beats ${computerHand}<sup>(comp)</sup>. You Win!`;
    roundResult = 'Win';
  } else {
    computerScore++;
    COMPUTER_OUTPUT.innerHTML = computerScore;
    RESULT.innerHTML = `${computerHand}<sup>(comp)</sup> Beats ${userHand}<sup>(user)</sup>. You lose`;
    roundResult = 'Lose';
  }
}