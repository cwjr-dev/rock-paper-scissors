"use strict";

const gameOptions = document.querySelector(".selection-container");
const humanSelectionDisplay = document.querySelector(".player-selection");
const ComputerSelectionDisplay = document.querySelector(".computer-selection");
const humanScoreDisplay = document.querySelector(".player-score");
const ComputerScoreDisplay = document.querySelector(".computer-score");
const roundDisplay = document.querySelector(".round-display");


function gameController() {
    const MAX_SCORE = 5;
    const human = {score: 0, choice: ""};
    const computer = {score: 0, choice: ""};

    gameOptions.addEventListener("click", event => {        
        human.choice = event.target.id;
        computer.choice = getComputerChoice();
        playRound(human, computer);
    });
}

gameController();


// display the winner of the game after a player scores five points
function gameOver() {
}


/*
    FUNCTION: 
        getComputerChoice
    DESCRIPTION: 
        The computer will randomly return one of the following string values:
        "rock", "paper", or "scissors".
*/
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

 /*
    FUNCTION:
        playRound
    DESCRIPTION:
        Plays a single round of Rock Paper Scissors and displays the round result
    */
    function playRound(human, computer) {        
        const roundSelection = `${human.choice}-${computer.choice}`;
        const winCombination = "rock-scissors paper-rock scissors-paper";

        // display the players' selection
        humanSelectionDisplay.textContent = `Human chose ${human.choice}`;
        ComputerSelectionDisplay.textContent = `Computer chose ${computer.choice}`;

        // determine round winner
            // draw game
        if (human.choice === computer.choice) {
            roundDisplay.textContent = `DRAW!`;
        }
        else if (winCombination.includes(roundSelection)) {
            // human wins
            ++human.score;
            humanScoreDisplay.textContent = human.score;
            roundDisplay.textContent = `YOU WIN!`;
        }
        else {
            // computer wins
            ++computer.score;
            ComputerScoreDisplay.textContent = computer.score;
            roundDisplay.textContent = `YOU LOSE!`;
        }   
    }