//////////////QUERY THE DOM

const getOptions = document.querySelectorAll('.btn')
const displayMyChoiceHere = document.querySelector('#playerChoiceDisplay')
const displayComputerChoice = document.querySelector('#computerChoiceDisplay')
const displayResult = document.querySelector('#result')

const testing = document.querySelector('.test')

let getPlayerChoice;

// console.log(displayMyChoiceHere);

testing.addEventListener('click', doThis)

function doThis(){
    console.log('testing')
}


getOptions.forEach(getOptions => getOptions.addEventListener('click', (e) => {
    getPlayerChoice = e.target.id
    displayMyChoiceHere.innerText = getPlayerChoice
    console.log(getPlayerChoice);
    console.log(getComputerChoice());
    console.log(dertermineWinner());
    gameResult();
    return getPlayerChoice;
}));




////////////// LOGIC

//this is a game of probability; since we are picking among 3 options 

const options = ['rock', 'scissors', 'paper'];


//get player choice


//get computer choice
function getComputerChoice(){
    const indexOFChoice = Math.floor(Math.random() * options.length)
    const choice = options[indexOFChoice]
    displayComputerChoice.innerText = choice;
    return choice  
}


//determine winner
function dertermineWinner(){
    //tie
    if (getPlayerChoice === getComputerChoice){
        return "Tie";
    }
    //player wins
    else if(
        (getPlayerChoice === 'rock' && getComputerChoice === 'scissor') ||
        (getPlayerChoice === 'paper' && getComputerChoice === 'rock') ||
        (getPlayerChoice === 'scissor' && getComputerChoice === 'paper')  
    ){
        return "Player wins"
    }
    //player losses
    else{
        return "Player lost"
    }
}

// console.log(dertermineWinner());

function gameResult(){  
    let result = `player picked ${getPlayerChoice} and computer picked ${getComputerChoice()}, ${dertermineWinner()}`
    displayResult.innerText = result
    return result
}

// console.log(gameResult());