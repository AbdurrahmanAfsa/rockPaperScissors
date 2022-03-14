function computerPlay(){
    let choice = ["rock" , "paper" , "scissors"];
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
}

console.log(computerPlay());
