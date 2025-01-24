function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        return "It\'s a tie.";
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            return "You win.";
        }
    else {
        return "You lose.";
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const humanSelection = prompt("Rock, paper, scissors: ");
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        console.log(result);

        if(result.includes("win")){
            humanScore++;
        }
        else if(result.includes("lose")){
            computerScore++;
        }

    }

    console.log(`Final score: Player ${humanScore} - Computer ${computerScore}`);
}

game();