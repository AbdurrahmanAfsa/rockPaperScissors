function computerPlay(){
    let choice = ["rock" , "paper" , "scissors"];
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
}

let computerScore = 0;
let playerScore = 0;

function roundPlay(){
        let playerChoice = prompt("Choose rock, paper or scissors").trim().toLowerCase();
        let computerChoice = computerPlay();
        if(playerChoice === "rock" || "paper" || "scissors"){
            if(playerChoice === computerChoice){
                playerScore = playerScore;
                computerScore = computerScore;
                alert(`It's a tie!! the computer chose: ${computerChoice}
                       the result: ${playerScore} - ${computerScore}`);
            }else if(playerChoice === "rock" && computerChoice ==="scissors"){
                playerScore += 1
                alert(`You win!! the computer chose: ${computerChoice}
                       the result: ${playerScore} - ${computerScore}`);
            }else if(playerChoice === "paper" && computerChoice ==="rock"){
                playerScore += 1
                alert(`You win!! the computer chose: ${computerChoice}
                       the result: ${playerScore} - ${computerScore}`);
            }else if(playerChoice === "scissors" && computerChoice ==="paper"){
                playerScore += 1
                alert(`You win!! the computer chose: ${computerChoice}
                       the result: ${playerScore} - ${computerScore}`);
            }else {
                computerScore += 1
                alert(`You lose :( the computer chose: ${computerChoice}
                       the result: ${playerScore} - ${computerScore}`);
            }
        }
        return (playerScore , computerScore);
}

function checkWinner(){
    if (playerScore > computerScore){
        alert("Congratulations, You win");
    }else if (playerScore < computerScore){
        alert("The computer won, good luck next time");
    }else{
        alert("It's a tie");
    }
}



for (let i = 0; i <= 4; i++) {
    roundPlay();  
}

checkWinner();

