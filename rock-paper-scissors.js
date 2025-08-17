"use strict";

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
        getHumanChoice
    DESCRIPTION:
        Get and return the human player's choice from "rock", "paper", or "scissors".
*/
function getHumanChoice() {
    const humanChoice = prompt("Please type your choice: 'rock', 'paper', or 'scissors'");

    return humanChoice;
}

/*
    FUNCTION:
        capitalizeFirstLetter
    DESCRIPTION:
        Capitalizes the first letter of a word
*/
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/*
    FUNCTION:
        playGame
    DESCRIPTION:
        Calls playRound to play five games of Rock Paper Scissors. At the end of the five
        rounds, it displays the end of the game results.
*/
function playGame() {    
    let humanScore = 0;
    let computerScore = 0;
    
    /*
    FUNCTION:
        playRound
    DESCRIPTION:
        Plays a single round of Rock Paper Scissors and displays the round result
    */
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        const roundSelection = `${humanChoice}-${computerChoice}`;
        const winCombination = "rock-scissors paper-rock scissors-paper";    

        // determine round winner
            // draw game
        if (humanChoice === computerChoice) {
            console.log(`Draw! Both players chose ${capitalizeFirstLetter(humanChoice)}`);
        }
        else if (winCombination.includes(roundSelection)) {
            // human wins
            console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`);
            humanScore++;
        }
        else {
            // computer wins
            console.log(`You Lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}`);
            computerScore++;
        }   
    }

    // display end game results
    console.log("Game Over")

    if (humanScore === computerScore) {
        console.log("Tie Game!");
    }
    else if (humanScore > computerScore) {
        console.log("Human Wins!");
    }
    else {
        console.log("Computer Wins!");
    }

    console.log(`Final Score - Human ${humanScore} | Computer ${computerScore}`);
}

playGame();