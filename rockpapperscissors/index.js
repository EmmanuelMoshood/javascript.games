const displayPlayerChoice = document.querySelector('#playerChoiceDisplay')
const displayComputerChoice = document.querySelector('#computerChoiceDisplay')
const displayResult = document.querySelector('#resultDisplay')
//buttons query 
const choices = document.querySelectorAll('.btn')
//addListeners to the buttons, that displays ID of what is typed

console.log(choices)

let playerChoice
let computerChoice
let result

//get player choise from button clicked

choices.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.textContent;
    console.log(playerChoice);
    ComputerTurn(); 
    checkWinner();
    displayPlayerChoice.innerText = playerChoice;
    displayResult.innerText = `You picked ${playerChoice} and computer picked ${computerChoice}. Hence ${checkWinner()}`

}));

function ComputerTurn(){
    const options = ['rock', 'scissors', 'paper'];
    const indexOFChoice = Math.floor(Math.random() * options.length)
    computerChoice = options[indexOFChoice]
    console.log(computerChoice);
    displayComputerChoice.innerText = computerChoice; 
    return computerChoice  
}

// function myFunc(){
//     let playerChoice = button.textContent;
//     console.log(playerChoice);
// }

function checkWinner(){
    if(playerChoice == computerChoice){
        return "Draw"
    }
    else if(computerChoice == 'rock'){
        return (playerChoice == 'paper') ? "You won" : "You lost"
    }
    else if(computerChoice == 'paper'){
        return (playerChoice == 'scissors') ? "You won" : "You lost"
    }
    else if(computerChoice == 'scissors'){
        return (playerChoice == 'rock') ? "You won" : "You lost"
    }


    // if(playerChoice === computerChoice){
    //     return "it is a Tie"
    // }
    // else if(
    //     playerChoice === 'rock' && computerChoice === 'scissors' ||
    //     playerChoice === 'paper' && computerChoice === 'rock' ||
    //     playerChoice === 'scissors' && computerChoice === 'paper' 
    // ){
    //     return "you won!"
    // }
    // else{
    //     return "you lost"
    // }
}