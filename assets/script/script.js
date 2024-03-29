"use strict";

let scoreJ1 = document.querySelector(".scoreJ1");
let scoreJ2 = document.querySelector(".scoreJ2");
let defaultScoreJ1 = 0;
let defaultScoreJ2 = 0;
let winScore = document.querySelector(".scoreVisé");
let goal = document.querySelector(".objectif");
const winner = document.querySelector(".winner");
const J1Button = document.querySelector(".J1");
const J2Button = document.querySelector(".J2");
const resetButton = document.querySelector(".reset");

function writeScoreToReach() {
  winScore.textContent = goal.value;
}

function whoAreTheWinner() {
  if (scoreJ1 == goal.value) {
    winner.textContent = "Joueur 1";
    scoreJ1.style.color = "green";
    scoreJ2.style.color = "red";
  }
  if (scoreJ2 == goal.value) {
    winner.textContent = "Joueur 2";
    scoreJ1.style.color = "red";
    scoreJ2.style.color = "green";
  }
}

function getScoreP1() {
  if (defaultScoreJ1 != goal.value && defaultScoreJ2 != goal.value) {
    defaultScoreJ1++;
  }

  scoreJ1.textContent = defaultScoreJ1;
  whoAreTheWinner();
}

function getScoreP2() {
  if (defaultScoreJ2 < goal.value && defaultScoreJ1 < goal.value) {
    defaultScoreJ2++;
  }
  scoreJ2.innerText = defaultScoreJ2;
  whoAreTheWinner();
}
function newGame() {
  scoreJ1.textContent = 0;
  scoreJ2.textContent = 0;
  defaultScoreJ1 = 0;
  defaultScoreJ2 = 0;
  winScore = 10;
  winner.textContent = "xxxx";
  goal.value = 10;
  scoreJ1.style.color = null;
  scoreJ2.style.color = null;
}

J1Button.addEventListener("click", getScoreP1);
J2Button.addEventListener("click", getScoreP2);
goal.addEventListener("change", writeScoreToReach);
resetButton.addEventListener("click", newGame);
