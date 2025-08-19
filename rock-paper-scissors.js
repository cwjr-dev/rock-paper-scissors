"use strict";

const gameOptions = document.querySelector(".selection-container");
const humanSelectionDisplay = document.querySelector(".player-selection");
const computerSelectionDisplay = document.querySelector(".computer-selection");
const humanScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundDisplay = document.querySelector(".round-display");
const resetButton = document.querySelector(".reset");


function gameController() {
    const MAX_SCORE = 5;
    const human = {score: 0, choice: ""};
    const computer = {score: 0, choice: ""};

    gameOptions.addEventListener("click", event => {        
        human.choice = event.target.id;
        computer.choice = getComputerChoice();
        playRound(human, computer);
    });

    // reset the game
    resetButton.addEventListener("click", () => {
        human.score = 0;
        computer.score = 0;
        humanScoreDisplay.textContent = human.score;
        computerScoreDisplay.textContent = computer.score;
        humanSelectionDisplay.textContent = "";
        computerSelectionDisplay.textContent = "";
        roundDisplay.textContent = "";        
    });    

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

    function checkWinner(player1, player2, MAX_SCORE) {   
        console.log(player1.score, player2.score);
        if (player1.score === MAX_SCORE) return player1;
        if (player2.score === MAX_SCORE) return player2;
        return null; // no winner
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
        computerSelectionDisplay.textContent = `Computer chose ${computer.choice}`;

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
            computerScoreDisplay.textContent = computer.score;
            roundDisplay.textContent = `YOU LOSE!`;
        }
        
        // determine if a player has reached five wins        
        const winner = checkWinner(human, computer, MAX_SCORE);

        if (winner) gameOver(winner);
    }
}

gameController();







