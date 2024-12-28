//2 Variables to track the number of wins
let humanWinCount = 0;
let computerWinCount = 0;

//We decided 1-Rock , 2-Paper , 3-Scissor

//Take Inut of Human Chouce
function calHumanChoice() {
  let choice = parseInt(
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
  if (temp == 0) {
    return 1;
  } else if (temp < 0.5) {
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
function playRound() {
  //Welcome in the round
  let humanChoice = calHumanChoice();
  let computerChoice = calComputerChoice();
  console.log("Your choice is:-" + calChoice(humanChoice));
  console.log("Computer choice is:-" + calChoice(computerChoice));
  let winner = calWinner(humanChoice, computerChoice);

  //Check if there is a winner or not
  if (winner == undefined) {
    //play this round again
    playRound();
  } else {
    console.log("Winner of this round is:- " + winner);
    console.log("Total Your Wins:-" + humanWinCount);
    console.log("Total Computer Wins:-" + computerWinCount);
  }
}

// cAlculate winner based o choices
function calWinner(humanChoice, computerChoice) {
  //humanChoice & computerChoice

  //If both have same choice display and replau the round
  if (humanChoice == computerChoice) {
    console.log("Both have same choices \n Play Again !");
    return;
  }

  //1] human ROck
  if (humanChoice == 1) {
    //Rock Paper
    if (computerChoice == 2) {
      //Computer wins
      computerWinCount++;
      return "Computer";
      //paper & scissor
    } else if (computerChoice == 3) {
      //Human wins
      humanWinCount++;
      return "You";
    }
    //Paper
  } else if (humanChoice == 2) {
    //paper & rock
    if (computerChoice == 1) {
      //Human wins
      humanWinCount++;
      return "You";
      //paper & scissor
    } else if (computerChoice == 3) {
      //Computer wins
      computerWinCount++;
      return "Computer";
    }
    //Scissor
  } else {
    //Scissor & Rock
    if (computerChoice == 1) {
      //Computer WIns
      computerWinCount++;
      return "Computer";
      //scissor & paper
    } else if (computerChoice == 2) {
      //Humans Wins
      humanWinCount++;
      return "You";
    }
  }
  {
  }
}

//playGame function which will manage the whole game
function playGame() {
  playRound();

  //After playing 5 round let decide overall winner
  console.log("This game is over !!");
  console.log("And the winner of this game is!!");
  if (humanWinCount > computerWinCount) {
    console.log("You !!");
  } else {
    console.log("Computer !!");
  }
  let playChoice = prompt("Do You want to play again? \n 1]Yes 2]No");
  if (playChoice == 1) {
    playGame();
  }
}

//Lets call the function
