// ============================================================
// game.js: Game Logic
// ============================================================
// This file contains all game logic for Forest Adventure.
// It does not draw anything — drawing is handled
// by scenes.js. Variables defined here are available in
// sketch.js and scenes.js because all files share the same
// global scope.
// ============================================================

// Define constants for choices
const ROUGH = "rough";
const SMOOTH = "smooth";

// Variables to track player choices and outcomes
let playerChoice = null;

// Function to handle player choices
function playerChoose(choice) {
  playerChoice = choice;

  if (playerChoice === ROUGH) {
    handleRoughChoice(); // Call the function to handle ROUGH choice
  } else if (playerChoice === SMOOTH) {
    handleSmoothChoice(); // Call the function to handle SMOOTH choice
  }
}

// Function to reset the game
function resetGame() {
  console.log("Resetting game"); // Debugging
  playerChoice = null;
  currentSituation = null;
  currentOptions = [];
  currentEndingImage = null; // clear ending image so drawEndingScreen won't try to use it
  gameState = STATE_START; // Reset to the start screen
}
