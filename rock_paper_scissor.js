// Variables to track wins
let humanWinCount = 0;
let computerWinCount = 0;
let humanChoice = null;

// Selecting elements
const display = document.querySelector(".display");
const playButton = document.querySelector(".play-button");
const leftDisplay = document.querySelector(".left-display");
const rightDisplay = document.querySelector(".right-display");
const endButton = document.querySelector(".end-button");
const resetButton = document.querySelector(".reset-button");
const chooseButtons = document.querySelector(".choose-buttons");

// Function to clear specific parts of the display
function clearScreen() {
  leftDisplay.textContent = "";
  rightDisplay.textContent = "";
}

// Function to calculate the computer's choice
function calComputerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "rock-button";
  } else if (random < 0.66) {
    return "paper-button";
  } else {
    return "scissor-button";
  }
}

// Function to map button class names to readable choices
function calChoice(choice) {
  if (choice === "rock-button") {
    return "Rock";
  } else if (choice === "paper-button") {
    return "Paper";
  } else if (choice === "scissor-button") {
    return "Scissor";
  }
  return "Invalid";
}

// Function to determine the winner of a round
function calWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie";
  }
  if (
    (humanChoice === "rock-button" && computerChoice === "scissor-button") ||
    (humanChoice === "paper-button" && computerChoice === "rock-button") ||
    (humanChoice === "scissor-button" && computerChoice === "paper-button")
  ) {
    humanWinCount++;
    return "You";
  } else {
    computerWinCount++;
    return "Computer";
  }
}

// Event listener for choose buttons
chooseButtons.addEventListener("click", (e) => {
  const className = e.target.className;
  if (
    className === "rock-button" ||
    className === "paper-button" ||
    className === "scissor-button"
  ) {
    humanChoice = className;
    rightDisplay.textContent = "You chose: " + calChoice(humanChoice);
  } else {
    rightDisplay.textContent = "Invalid Choice!";
  }
});

// Function to play a single round
function playRound() {
  if (!humanChoice) {
    rightDisplay.textContent = "Please make a choice first!";
    return;
  }

  const computerChoice = calComputerChoice();
  const winner = calWinner(humanChoice, computerChoice);

  // Display choices and winner
  rightDisplay.innerHTML =
    "Your choice: " +
    calChoice(humanChoice) +
    "<br>" +
    "Computer choice: " +
    calChoice(computerChoice) +
    "<br>" +
    "Winner: " +
    (winner === "Tie" ? "It's a tie!" : winner);

  // Update win counts
  leftDisplay.innerHTML =
    "Your Wins: " +
    humanWinCount +
    "<br>" +
    "Computer Wins: " +
    computerWinCount;

  // Reset human choice for the next round
  humanChoice = null;
}

// Event listener for play button
playButton.addEventListener("click", () => {
  playRound();
});

// Event listener for end button
endButton.addEventListener("click", () => {
  clearScreen();
  if (humanWinCount > computerWinCount) {
    rightDisplay.textContent = "Game Over! You are the overall winner!";
  } else if (humanWinCount < computerWinCount) {
    rightDisplay.textContent = "Game Over! Computer is the overall winner!";
  } else {
    rightDisplay.textContent = "Game Over! It's a tie!";
  }
});

// Event listener for reset button
resetButton.addEventListener("click", () => {
  clearScreen();
  humanWinCount = 0;
  computerWinCount = 0;
  rightDisplay.textContent = "Game reset. Let's start fresh!";
});
