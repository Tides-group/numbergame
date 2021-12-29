let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget{
    return Math.floor(Math.random()*10)
}

const compareGuesses=(humanGuess, computerGuess, secretTargetNumber)=>{
    if(Math.abs(humanGuess-secretTargetNumber)<Math.abs(computerGuess-secretTargetNumber)){
        return true
    }
    else if(humanGuess===computerGuess){
        return true
    }
    else {
        return false
    }
}
function updateScore{
    if(humanGuess===true){
        humanScore=humanScore++
    }
    else{
        computerScore=computerScore++
    }
}

function advanceRound =()=> currentRoundNumber++