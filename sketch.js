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
// ------------------------------------------------------------
const STATE_START = "start";
const STATE_CHOICE = "choice";
const STATE_SITUATION = "situation";
const STATE_END = "end";

let gameState = STATE_START;

// ------------------------------------------------------------
// BLOB ANIMATION TIMERS
// ------------------------------------------------------------
let playerBlobT = 0;
let npcBlobT = 50;

// ============================================================
// preload()
// Loads assets before the sketch starts.
// ============================================================
function preload() {
  // Call the preload function from scenes.js to load all assets
  if (typeof window.preload === "function") {
    window.preload(); // This calls the preload function defined in scenes.js
  }
}

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
  if (gameState === STATE_START) {
    drawStartScreen();
  } else if (gameState === STATE_SITUATION) {
    drawSituationScreen();
  } else if (gameState === STATE_END) {
    drawEndingScreen();
  }

  // Advance blob animations every frame regardless of state
  playerBlobT += 0.015;
  npcBlobT += 0.015;
}

// ============================================================
// mousePressed()
// Handles button clicks across all game states.
// ============================================================
function mousePressed() {
  // --- Start screen ---
  if (gameState === STATE_START) {
    if (isMouseOver(width / 2 - 100, height / 2 + 50, 150, 50)) {
      playerChoose(ROUGH);
    } else if (isMouseOver(width / 2 + 100, height / 2 + 50, 150, 50)) {
      playerChoose(SMOOTH);
    }
  }

  // --- Situation screen ---
  else if (gameState === STATE_SITUATION) {
    if (isMouseOver(width / 2 - 100, height / 2 + 50, 150, 50)) {
      handleOptionSelection(currentOptions[0]);
    } else if (isMouseOver(width / 2 + 100, height / 2 + 50, 150, 50)) {
      handleOptionSelection(currentOptions[1]);
    }
  }

  // --- End screen ---
  else if (gameState === STATE_END) {
    if (isMouseOver(width / 2, height - 50, 150, 50)) {
      resetGame();
    }
  }
}

// Helper function to check if the mouse is over a button
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
