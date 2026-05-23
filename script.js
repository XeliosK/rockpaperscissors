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



// WRITE COMPUTER CHOICE FUNCTION
function getComputerChoice() {
    const value = Math.random() * 100;
    if (value <= 33) {
        return "rock";
    } else if (value >= 33 & value <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log ("PC chose: " + getComputerChoice()); // CHECKS GETCOMPUTERCHOICE FUNCTION

// HUMAN CHOICE FUNCTION
function getHumanChoice() {
    const choice = prompt("Please select: rock, paper or scissors").toLowerCase();
    console.log("User entered: " + choice);
    return choice;
}

// getHumanChoice();

// PLAY ROUND FUNCTION
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You win! Paper beats rock.")
        return humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("It's a tie!")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You lose! Rock beats scissors.")
        return computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You lose! Scissors beats paper.")
        return computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You win! Rock beats scissors.")
        return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("It's a tie!")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("It's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You lose! Paper beats rock.")
    } else {
        console.log ("You chose: " + humanChoice + " PC chose: " + computerChoice)
        console.log ("You win! Scissors beats paper.")
        return humanScore++;
    }
}


// BASE SCORE STARTING VALUE
let humanScore = 0;
let computerScore = 0;

// PLAY GAME FUNCTION
function playGame() {

    for (let i = 1; i < 6; i++) {
        console.log(" --- NEW ROUND ---")
        const humanSelection = getHumanChoice();
        // console.log(humanSelection);
        const computerSelection = getComputerChoice();
        // console.log(computerSelection)
        playRound(humanSelection, computerSelection);
        console.log("Human: " + humanScore + " - " + "PC: " + computerScore);
    }
}

playGame();


//LOOPS ARE JUST BETTER, BELOW WAS ANOTHER ATTEMPT TRYING NOT TO USE THEM

/* function playGame() {
    console.log(" --- NEW ROUND ---")
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("Human: " + humanScore + " - " + "PC: " + computerScore);
    
    console.log(" --- NEW ROUND ---")
    playRound(humanSelection, computerSelection);
    console.log("Human: " + humanScore + " - " + "PC: " + computerScore);
    
    console.log(" --- NEW ROUND ---")
    playRound(humanSelection, computerSelection);
    console.log("Human: " + humanScore + " - " + "PC: " + computerScore);
    
    console.log(" --- NEW ROUND ---")
    playRound(humanSelection, computerSelection);
    console.log("Human: " + humanScore + " - " + "PC: " + computerScore);

    console.log(" --- NEW ROUND ---")
    playRound(humanSelection, computerSelection);
    console.log("Human: " + humanScore + " - " + "PC: " + computerScore);
} */

