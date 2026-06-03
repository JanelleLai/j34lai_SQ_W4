// ============================================================
// Week 4: Forest Adventure
// ============================================================

// ------------------------------------------------------------
// ABOUT THIS FILE
// This project is split across three JavaScript files:
//
//   sketch.js — p5.js entry point: setup(), draw(), mousePressed()
//   game.js   — game logic: choices, scores, round tracking
//   scenes.js — drawing helpers: blobs, buttons, screens
//
// All three files are loaded in index.html in that order.
// Variables and functions defined in one file are available
// in all others because they share the same global scope.
// ------------------------------------------------------------

// ------------------------------------------------------------
// GAME STATES
// The game moves through these states in order.
// ------------------------------------------------------------
const STATE_START = "start";
const STATE_CHOICE = "choice";
const STATE_SITUATION = "situation";
const STATE_END = "end";

let gameState = STATE_START;

// ------------------------------------------------------------
// BLOB ANIMATION TIMERS
// Increase each frame to drive the blob wobble animation.
// ------------------------------------------------------------
let playerBlobT = 0;
let npcBlobT = 50;

// ============================================================
// setup()
// Runs once at the very start of the sketch.
// Sets up the canvas and font.
// ============================================================
function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

// ============================================================
// draw()
// Runs repeatedly in a loop after setup() finishes.
// Calls drawing functions from scenes.js based on game state.
// ============================================================
function draw() {
  // drawBackground() is defined in scenes.js
  drawBackground();

  // Switch between screens based on the current game state
  if (gameState === STATE_START) {
    drawStartScreen();
  } else if (gameState === STATE_CHOICE) {
    drawChoiceScreen();
  } else if (gameState === STATE_SITUATION) {
    drawSituationScreen();
  } else if (gameState === STATE_END) {
    drawEndScreen();
  }

  // Advance blob animations every frame regardless of state
  playerBlobT += 0.015;
  npcBlobT += 0.015;
}

// ============================================================
// mousePressed()
// A built-in p5.js event function.
// Automatically called once every time the mouse is clicked.
// Handles button clicks across all game states.
// ============================================================
function mousePressed() {
  // --- Start screen ---
  if (gameState === STATE_START) {
    if (isMouseOver(width / 2, 390, 200, 52)) {
      gameState = STATE_CHOICE;
    }
  }

  // --- Choice screen ---
  else if (gameState === STATE_CHOICE) {
    if (isMouseOver(200, 360, 150, 52)) {
      playerChoose("ROUGH");
      gameState = STATE_SITUATION;
    } else if (isMouseOver(400, 360, 150, 52)) {
      playerChoose("SMOOTH");
      gameState = STATE_SITUATION;
    }
  }

  // --- Situation screen ---
  else if (gameState === STATE_SITUATION) {
    // Logic to handle situation outcomes based on player's choice
    if (isMouseOver(width / 2, 390, 200, 52)) {
      gameState = STATE_END;
    }
  }

  // --- End screen ---
  else if (gameState === STATE_END) {
    if (isMouseOver(width / 2, 390, 220, 52)) {
      resetGame();
      gameState = STATE_START;
    }
  }
}
