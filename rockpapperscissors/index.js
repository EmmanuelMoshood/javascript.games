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
    ComputerTurn(); 
    console.log(playerChoice);
    displayPlayerChoice.innerText = playerChoice;
    displayResult.innerText = `You picked ${playerChoice} and computer picked ${computerChoice}. Hence ...`

}));

function ComputerTurn(){
    const options = ['rock', 'scissors', 'paper'];
    const indexOFChoice = Math.floor(Math.random() * options.length)
    const computerChoice = options[indexOFChoice]
    console.log(computerChoice);
    displayComputerChoice.innerText = computerChoice; 
    return computerChoice  
}

// function myFunc(){
//     let playerChoice = button.textContent;
//     console.log(playerChoice);
// }