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
