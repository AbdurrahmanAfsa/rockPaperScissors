const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScorePara = document.querySelector(".playerScore")
const resultPara = document.querySelector('.result')
const computerScorePara = document.querySelector('.computerScore');
const computerChoicePara = document.querySelector('.computerChoice');

function computerPlay(){
    let choice = ["rock" , "paper" , "scissors"];
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
}

let computerScore = 0;
let playerScore = 0;


rock.addEventListener("click" , () => {
    let computerChoice = computerPlay();
    let playerChoice = "rock";
    computerChoicePara.innerHTML = `computer choice: ${computerChoice}`;
    if(playerChoice === computerChoice){
        playerScore = playerScore;
        computerScore = computerScore;
        resultPara.innerHTML = `result: It's a tie`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }else if(computerChoice === "paper"){
        playerScore = playerScore;
        computerScore += 1;
        resultPara.innerHTML = `result: Computer wins`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }else if(computerChoice === "scissors") {
        playerScore += 1;
        computerScore = computerScore;
        resultPara.innerHTML = `result: You win!!!`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }
    winner();
});

paper.addEventListener("click" , () => {
    let computerChoice = computerPlay();
    let playerChoice = "paper";
    computerChoicePara.innerHTML = `computer choice: ${computerChoice}`;
    if(playerChoice === computerChoice){
        playerScore = playerScore;
        computerScore = computerScore;
        resultPara.innerHTML = `result: It's a tie`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }else if(computerChoice === "scissors"){
        playerScore = playerScore;
        computerScore += 1;
        resultPara.innerHTML = `result: Computer wins`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }else if(computerChoice === "rock") {
        playerScore += 1;
        computerScore = computerScore;
        resultPara.innerHTML = `result: You win!!!`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }
    winner();
});

scissors.addEventListener("click" , () => {
    let computerChoice = computerPlay();
    let playerChoice = "scissors";
    computerChoicePara.innerHTML = `computer choice: ${computerChoice}`;
    if(playerChoice === computerChoice){
        playerScore = playerScore;
        computerScore = computerScore;
        resultPara.innerHTML = `result: It's a tie`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }else if(computerChoice === "rock"){
        playerScore = playerScore;
        computerScore += 1;
        resultPara.innerHTML = `result: Computer wins`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }else if(computerChoice === "paper") {
        playerScore += 1;
        computerScore = computerScore;
        resultPara.innerHTML = `result: You win!!!`;
        playerScorePara.innerHTML = `Player Score: ${playerScore} `;
        computerScorePara.innerHTML = `Computer Score: ${computerScore}`;
    }
    winner();
});

function winner(){
    if (playerScore === 5){
        resultPara.innerHTML = `YOU WON !!!
                        Click here to play again`;
        resultPara.addEventListener("click", () => {
            computerChoicePara.innerHTML = `computer choice: `
            playerScorePara.innerHTML= `player score: `
            computerScorePara.innerHTML = `computer score: `
            resultPara.innerHTML = `result: `
            playerScore = 0;
            computerScore = 0;
        }) 
    }else if (computerScore === 5){
        resultPara.innerHTML = `The computer won, good luck next time
                                       Click here to play again`;
        resultPara.addEventListener("click", () => {
            computerChoicePara.innerHTML = `computer choice: `
            playerScorePara.innerHTML= `player score: `
            computerScorePara.innerHTML = `computer score: `
            resultPara.innerHTML = `result: `
            playerScore = 0;
            computerScore = 0;
        })  
    }
}



