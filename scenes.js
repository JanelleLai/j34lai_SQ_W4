// ============================================================
// scenes.js: Drawing Functions
// ============================================================
// This file contains all drawing helper functions.
// It does not contain any game logic — that lives in game.js.
// Functions defined here are available in sketch.js because
// all files share the same global scope.
// ============================================================

// ------------------------------------------------------------
// DRAWING FUNCTIONS
// This file contains functions to draw different screens in the game.
// ------------------------------------------------------------

let scene1Bg;

function preload() {
  scene1Bg = loadImage("assets/images/scene1.png");
}

// Function to draw the initial choice screen
function drawStartScreen() {
  background(scene1Bg); // Enchanted forest background color
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Welcome to the Enchanted Forest!", width / 2, height / 2 - 50);
  textSize(24);
  text("Choose your path:", width / 2, height / 2);

  // Draw buttons for choices
  drawButton("ROUGH", width / 2, height / 2 + 50);
  drawButton("SMOOTH", width / 2, height / 2 + 100);
}

// Function to draw the situation screen for ROUGH choice
function drawRoughScreen() {
  background(100, 155, 100);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("You chose the ROUGH path!", width / 2, height / 2 - 50);
  textSize(24);
  text("You encounter a wild beast!", width / 2, height / 2);

  // Draw buttons for outcomes
  drawButton("Fight", width / 2, height / 2 + 50);
  drawButton("Flee", width / 2, height / 2 + 100);
}

// Function to draw the situation screen for SMOOTH choice
function drawSmoothScreen() {
  background(100, 155, 100);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("You chose the SMOOTH path!", width / 2, height / 2 - 50);
  textSize(24);
  text("You find a hidden treasure!", width / 2, height / 2);

  // Draw buttons for outcomes
  drawButton("Take Treasure", width / 2, height / 2 + 50);
  drawButton("Leave it", width / 2, height / 2 + 100);
}

// Function to draw the ending screen based on the outcome
function drawEndingScreen(outcome) {
  background(100, 155, 100);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Game Over!", width / 2, height / 2 - 50);
  textSize(24);
  text(outcome, width / 2, height / 2);

  // Draw button to restart the game
  drawButton("Play Again", width / 2, height / 2 + 50);
}

// Helper function to draw buttons
function drawButton(label, x, y) {
  fill(200);
  rectMode(CENTER);
  rect(x, y, 150, 50, 10);
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
