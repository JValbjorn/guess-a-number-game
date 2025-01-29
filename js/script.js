"use strict";

let gameRunning = true;


while (gameRunning) {
    let ranNum = Math.floor(Math.random()* 100) +1;
    let currentlyGuessing = true;
    while (currentlyGuessing) {
       let anwser = prompt(`Please try to guess a number between 0 and 100!`) 
        anwser = Number(anwser)
        
        if (anwser === ranNum) {
            alert(`Congrats, your guess is correct!!`); 
            break;
            // currentlyGuessing = false;
         } 
         else if (anwser < ranNum) {
           alert(`Guess is too low`);
         } 
         else if (anwser > ranNum) {
           alert(`Guess is too high`);
         }
    }
   
    let playAgain = prompt(`Do you want to play again? Type 1 for yes ;D`)
    playAgain = Number(playAgain)
        
    if (playAgain !== 1) {
        break;
    }
}

// gameRunning = false;

// 1. Set up a `gameRunning` boolean variable to control the game loop.
// 2. Inside the loop, generate a random number between 0 and 100 using `Math.floor` and `Math.random`. This will be the target number for the user to guess.
// 3. Use a `while` loop to repeatedly prompt the user for guesses until the correct number is guessed.
// 4. Ask the user to guess a number using the `prompt` function.
// 5. Compare the user's guess with the target number.
//    - If the guess is correct, display a congratulatory message using `console.log`.
//    - If the guess is too low, inform the user to guess higher using `console.log`.
//    - If the guess is too high, inform the user to guess lower using `console.log`.
// 6. Use an `alert` to notify the user about the game result when they guess the correct number.
// 7. Break out of the loop using `break` after the correct guess.