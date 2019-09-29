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
    if (scoreJ1 == goal.value){
        winner.textContent = "Joueur 1";
        scoreJ1.style.color= "Green";
        scoreJ2.style.color= "Red";

    }
    else (scoreJ2 == goal.value;){
        winner.textContent = "Joueur 2";
        scoreJ1.style.color= "Red";
        scoreJ2.style.color= "Green";
    }
}

function getScoreP1() {}

function getScoreP2() {}

function newGame() {}

goal.addEventListener("change", writeScoreToReach);
