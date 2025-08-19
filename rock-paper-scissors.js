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
    const human = {name: "Human", score: 0, choice: ""};
    const computer = {name: "Computer", score: 0, choice: ""};

    const gameButtons = gameOptions.querySelectorAll("button");

    gameButtons.forEach(button => {
        button.addEventListener("click", event => {
            if (button.disabled) return;
            
            human.choice = event.target.id;
            computer.choice = getComputerChoice();
            playRound(human, computer);
        });
    });

    // reset the game
    resetButton.addEventListener("click", resetGame);

    /*
    FUNCTION: 
        getComputerChoice
    DESCRIPTION: 
        The computer will randomly return one of the following string values:
        "rock", "paper", or "scissors".
    */
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    /*
    FUNCTION:
        checkWinner
    DESCRIPTION:
        Returns the winner of the game after scoring 5 points
    */
    function checkWinner(player1, player2, MAX_SCORE) {
        if (player1.score >= MAX_SCORE) return player1;
        if (player2.score >= MAX_SCORE) return player2;
        return null; // no winner
    }

    /*
    FUNCTION:
        gameOver
    DESCRIPTION:
        Displays the winner of the game
    */
    function gameOver(winner) {
        roundDisplay.textContent = `GAME OVER! ${winner.name} WINS`;
        
        // disable game option buttons
        const gameButtons = gameOptions.querySelectorAll("button");
        gameButtons.forEach(button => {
            button.disabled = true;
        });
    }

    function resetGame() {
        human.score = 0;
        computer.score = 0;
        humanScoreDisplay.textContent = human.score;
        computerScoreDisplay.textContent = computer.score;
        humanSelectionDisplay.textContent = "";
        computerSelectionDisplay.textContent = "";
        roundDisplay.textContent = "";

        // re-enable all buttons
        gameButtons.forEach(button => button.disabled = false);
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

        // display selections
        humanSelectionDisplay.textContent = `${human.name} chose ${human.choice}`;
        computerSelectionDisplay.textContent = `${computer.name} chose ${computer.choice}`;

        // determine round winner       
        if (human.choice === computer.choice) {
            roundDisplay.textContent = `DRAW!`;
        }
        else if (winCombination.includes(roundSelection)) {            
            ++human.score;            
            humanScoreDisplay.textContent = human.score;
            roundDisplay.textContent = `YOU WIN!`;            
        }
        else {            
            ++computer.score;
            computerScoreDisplay.textContent = computer.score;
            roundDisplay.textContent = `YOU LOSE!`;
        }

        // check for game winner    
        const winner = checkWinner(human, computer, MAX_SCORE);
        if (winner) gameOver(winner);
    }
}

gameController();







