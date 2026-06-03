// ============================================================
// game.js: Game Logic
// ============================================================
// This file contains all game logic for Forest Adventure.
// It does not draw anything — drawing is handled
// by scenes.js. Variables defined here are available in
// sketch.js and scenes.js because all files share the same
// global scope.
// ============================================================

// ------------------------------------------------------------
// CHOICES
// We define the choices as constants so we never have
// to type the strings manually and risk a typo causing a bug.
// CHOICES
// Define constants for the new choices in the enchanted forest.
// ------------------------------------------------------------
const ROUGH = "rough";
const SMOOTH = "smooth";

// Variables to track player choices and outcomes
let playerChoice = null;
let situationOutcome = null;

// ------------------------------------------------------------
// FUNCTION TO HANDLE PLAYER CHOICES
// This function sets the player's choice and determines the situation.
// ------------------------------------------------------------
function playerChoose(choice) {
  playerChoice = choice;
  if (playerChoice === ROUGH) {
    situationOutcome =
      "You venture into the dense thicket, where the path is unclear.";
  } else if (playerChoice === SMOOTH) {
    situationOutcome =
      "You glide along the serene riverbank, where the water flows gently.";
  }
}

// ------------------------------------------------------------
// FUNCTION TO HANDLE SITUATION OUTCOMES
// This function determines the outcome based on the player's choice.
// ------------------------------------------------------------
function determineOutcome() {
  if (playerChoice === ROUGH) {
    return "You encounter a wild creature! Will you fight or flee?";
  } else if (playerChoice === SMOOTH) {
    return "You find a hidden treasure! Will you take it or leave it?";
  }
}

// ------------------------------------------------------------
// FUNCTION TO RESET THE GAME
// Resets all game variables for a new game session.
// ------------------------------------------------------------
function resetGame() {
  playerChoice = null;
  situationOutcome = null;
}

// ------------------------------------------------------------
// FUNCTION TO CHECK GAME OVER CONDITION
// Determines if the game has reached an end state based on choices.
// ------------------------------------------------------------
function checkGameOver() {
  // Implement logic to determine if the game is over based on choices
  // For example, if the player has made a final decision on the outcome
  return situationOutcome !== null;
}
