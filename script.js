console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let number = Math.round(Math.random() * 10) % 3;
    // console.log(Math.round(number * 10) % 3);
    // console.log(typeof (number));
    if (number === 0) return "rock"
    if (number === 1) return "paper"
    if (number === 2) return "scissors"
}

const getHumanChoice = () => {
    let humanChoice = prompt("Enter your choice")
    // console.log(humanChoice.toLowerCase());
    return humanChoice.toLowerCase()
}

const playRound = (humanChoice, computerChoice) => {

    humanChoice = getHumanChoice()
    console.log(humanChoice);
    computerChoice = getComputerChoice()
    console.log(computerChoice);

    if (humanChoice === computerChoice) {
        alert("Draw!")
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            alert("You lose! Paper beats Rock")
        }
        else if (computerChoice === "scissors") {
            humanScore++;
            alert("You win! Rock beats Scissors")
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            alert("You win! Paper beats Rock")
        }
        else if (computerChoice === "scissors") {
            computerScore++;
            alert("You lose! Scissors beats Paper")
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            alert("You lose! Rock beats Scissors")
        }
        else if (computerChoice === "papers") {
            humanScore++;
            alert("You win! Scissors beats Papers")
        }
    }

}
playRound()
console.log(humanScore)
console.log(computerScore)