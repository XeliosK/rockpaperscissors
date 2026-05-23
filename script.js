//COMPUTER TO SELECT CHOICE OF ROCK, PAPER, SCISSORS
//REQUEST INPUT FROM USER ON ROCK, PAPER, SCISSORS
//IF INPUT = ROCK & PC = PAPER, LOSE
//IF INPUT = ROCK & PC = SCISSORS, WIN
//IF INPUT = ROCK & PC = PAPER, TIE
//REPEAT FOR INPUT PAPER = AND INPUT SCISSORS =
// IF WIN, DISPLAY MESSAGE WIN
// IF LOSE, DISPLAY MESSAGE LOSE
// IF TIE, DISPLAY MESSAGE TIE


//FIRST WRITE COMPUTER CHOICE FUNCTION

function getComputerChoice () {
    const value = Math.random() * 100;
    if (value <= 33) {
        return "Rock";
    } else if (value >= 33 & value <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// console.log (getComputerChoice()); // CHECKS GETCOMPUTERCHOICE FUNCTION