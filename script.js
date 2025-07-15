let humanScore = 0;
let computerScore = 0;
let humanChoice = '', computerChoice = '';

const resultBox = document.querySelector(".result-box")
const buttons = document.querySelectorAll(".btn")
const humanScoreBox = document.querySelector("#human-score")
const computerScoreBox = document.querySelector("#computer-score")
const hiddenButton = document.querySelector(".hidden")

const getComputerChoice = () => {
    let number = Math.round(Math.random() * 10) % 3;
    // console.log(Math.round(number * 10) % 3);
    // console.log(typeof (number));
    if (number === 0) return "rock"
    if (number === 1) return "paper"
    if (number === 2) return "scissors"
}

// const getHumanChoice = () => {
//     let humanChoice = prompt("Enter your choice (rock, paper or scissors) :")
//     // console.log(humanChoice.toLowerCase());
//     return humanChoice.toLowerCase()
// }

const playRound = (humanChoice, computerChoice) => {

    // humanChoice = getHumanChoice()
    // // console.log(humanChoice);
    // computerChoice = getComputerChoice()
    // // console.log(computerChoice);

    if (humanChoice === computerChoice) {
        // alert("Draw!")
        resultBox.textContent = "Draw!"
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            // alert("You Lose! Paper beats Rock")
            resultBox.textContent = "You Lose! Paper beats Rock"
        }
        else if (computerChoice === "scissors") {
            humanScore++;

            resultBox.textContent = "You Win! Rock beats Scissors"
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;

            resultBox.textContent = "You Win! Paper beats Rock"
        }
        else if (computerChoice === "scissors") {
            computerScore++;

            resultBox.textContent = "You Lose! Scissors beats Paper"
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;

            resultBox.textContent = "You Lose! Rock beats Scissors"
        }
        else if (computerChoice === "paper") {
            humanScore++;

            resultBox.textContent = "You Win! Scissors beats Paper"
        }
    }

}

const playGame = (e) => {




    computerChoice = getComputerChoice();

    console.log(e.target.id);
    if (e.target.id === "btn-1") humanChoice = "rock"
    else if (e.target.id === "btn-2") humanChoice = "paper"
    else if (e.target.id === "btn-3") humanChoice = "scissors"

    console.log(humanChoice);
    console.log(computerChoice);

    playRound(humanChoice, computerChoice)




    humanScoreBox.textContent = humanScore;
    computerScoreBox.textContent = computerScore;

    if ((humanScore === 5) || (computerScore === 5)) {
        if (humanScore === 5) resultBox.textContent = "Congrats! You won the game!"
        else resultBox.textContent = "You lose the game! Better luck next time!"
        hiddenButton.classList.toggle("hidden")
        buttons.forEach(btns => { btns.disabled = true })
    }


    // if (humanScore === computerScore) alert("It's a Draw!\nYour score : " + humanScore + ", Computer Score : " + computerScore)
    // else if (humanScore > computerScore) alert("Congrats! You won the game!\nYour score : " + humanScore + ", Computer Score : " + computerScore)
    // else alert("You lose the game! Better luck next time!\nYour score : " + humanScore + ", Computer Score : " + computerScore)
}
// playGame()
// console.log(humanScore)
// console.log(computerScore)

function newGame() {
    hiddenButton.classList.toggle("hidden")
    humanScore = 0;
    computerScore = 0;
    humanScoreBox.textContent = humanScore;
    computerScoreBox.textContent = computerScore;
    resultBox.textContent = ''
    buttons.forEach(btn => { btn.disabled = false })

}

buttons.forEach(btn => btn.addEventListener("click", playGame))
hiddenButton.addEventListener("click", newGame)