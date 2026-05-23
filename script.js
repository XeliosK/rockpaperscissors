// COMPUTER TO SELECT CHOICE OF ROCK, PAPER, SCISSORS
// REQUEST INPUT FROM USER ON ROCK, PAPER, SCISSORS
// RECORD WIN, LOSS, TIE WITH MESSAGE KEEPING SCORE PER ATTEMPT
// IF INPUT = ROCK & PC = PAPER, LOSE
// IF INPUT = ROCK & PC = SCISSORS, WIN
// IF INPUT = ROCK & PC = PAPER, TIE
// REPEAT FOR INPUT PAPER = AND INPUT SCISSORS =
// IF WIN, DISPLAY MESSAGE WIN
// IF LOSE, DISPLAY MESSAGE LOSE
// IF TIE, DISPLAY MESSAGE TIE
// CREATE GAME LOOP



// INITIAL SCORE COUNTER

const humanScore = 0;
const computerScore = 0;

// WRITE COMPUTER CHOICE FUNCTION

function getComputerChoice () {
    const value = Math.random() * 100;
    if (value <= 33) {
        return "rock";
    } else if (value >= 33 & value <= 66) {
        return "raper";
    } else {
        return "scissors";
    }
}

// console.log (getComputerChoice()); // CHECKS GETCOMPUTERCHOICE FUNCTION

// HUMAN CHOICE FUNCTION
function getHumanChoice () {
    const choice = prompt("Please select: rock, paper or scissors");
    console.log("User entered: " + choice);
}

getHumanChoice();

// PLAY ROUND FUNCTION

function playRound (humanChoice, computerChoice) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You win! Paper beats rock.")
        return humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("It's a tie!")
    } else {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You lose! Rock beats scissors.")
        return computerScore++;
    }
}