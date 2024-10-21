// Get player input
var playerOne = prompt("Heads or Tails").toLowerCase();
var playerTwo, currentPlayer;

// Assign players based on input
while (true) {
    if (playerOne === "heads") {
        playerTwo = "tails";
        currentPlayer = "sasuke";
        break;
    } else if (playerOne === "tails") {
        playerTwo = "heads";
        currentPlayer = "Naruto";
        break;
    } else {
        alert("Invalid Input. Choose Heads or Tails");
        playerOne = prompt("Heads or Tails").toLowerCase();
    }
}

// Dice rolling logic
function rollDice() {
    return {
        diceOne: Math.floor(Math.random() * 6) + 1,
        diceTwo: Math.floor(Math.random() * 6) + 1
    };
}

// DOM elements
var rollButton = document.getElementById("rollButton");
var num1Element = document.getElementsByClassName("num")[0];
var num2Element = document.getElementsByClassName("num")[1];

// Handle dice roll and update UI
function diceRoll() {
    var { diceOne, diceTwo } = rollDice();

    // Update dice numbers in the UI
    num1Element.textContent = diceOne;
    num2Element.textContent = diceTwo;

    // Check for double sixes to determine winner
    if (diceOne === 6 && diceTwo === 6) {
        alert(`${currentPlayer} wins the game!`);
        currentPlayer = currentPlayer === "sasuke" ? "Naruto" : "sasuke";
    }
}

// Event listener for the roll button
rollButton.addEventListener("click", diceRoll);
