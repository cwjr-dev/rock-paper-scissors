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

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
        console.log(`Draw! Both players chose ${humanChoice}`);
    }
    else if (winCombination.includes(roundSelection)) {
        // human wins
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
        humanScore++;
    }
    else {
        // computer wins
        console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        computerScore++;
    }   
} 

playRound(humanSelection, computerSelection);