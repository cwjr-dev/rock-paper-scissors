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