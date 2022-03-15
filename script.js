function computerPlay(){
    let choice = ["rock" , "paper" , "scissors"];
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
}

function roundPlay(playerSelection , computerSelection){
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        console.log("You win");
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        console.log("You lost, scissors beat paper");
    }else if (playerSelection.toLowerCase()=="rock" && computerSelection=="paper"){
        console.log("you lose! paper beats rock");
    }else if (playerSelection.toLowerCase()=="rock" && computerSelection=="scissors"){
        console.log("You win!")
    }else if (playerSelection.toLowerCase()=="scissors" && computerSelection=="rock"){
        console.log("You lose! rock beats scissors")
    }else if (playerSelection.toLowerCase()=="scissors" && computerSelection=="paper"){
        console.log("You win!")
    }else{
        console.log("It's a tie")
    }
}

function game(){
    for (let i = 1; i <= 5 ; i++){
        roundPlay("paper" , computerPlay());
    }
}

game();

