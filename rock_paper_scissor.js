//2 Variables to track the number of wins
let humanWinCount = 0;
let computerWinCount = 0;

//We decided 1-Rock , 2-Paper , 3-Scissor

//Take Inut of Human Chouce
function calHumanChoice() {
  let choice = pasceInt(
    prompt("Enter your Choice :-\n 1]Rock 2]Paper 3]Scissor "),
    10
  );
  if (choice == 1 || choice == 2 || choice == 3) {
    return choice;
  } else {
    console.log("Invalid Choice , Enter Again");
    calHumanChoice();
  }
}

//Caclculate computer chpice
//For that we will generate a random number
function calComputerChoice() {
  //Store random number
  let temp = Math.random();

  //calculate choice based on random number
  if (temp == 1) {
    return 1;
  } else if (temp < 1.5) {
    return 2;
  } else {
    return 3;
  }
}

//Now Based on the number of the choice we might need to
//decide if it rock or paper or scissor
function calChoice(choice) {
  if (choice == 1) {
    return "Rock";
  } else if (choice == 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

//A function to play a single round
//playRound is the single round of the game
//It has a single parameter that is round number
function playRound(roundNo) {
  //Welcome in the round
  console.log("Welcome to Round number:" + roundNo);
  let humnaChoice = calHumanChoice();
  let computerChoice = calComputerChoice();
  console.log("Your choice is:-" + calChoice(humnaChoice));
  console.log("Computer choice is:-" + calChoice(computerChoice));
  let winner = calWinner(humnaChoice, computerChoice);
  console.log("Winner is !! " + winner);
}
