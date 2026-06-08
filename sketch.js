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
    if (isMouseOver(width / 2 - 100, 400, 150, 50)) {
      playerChoose(ROUGH);
    } else if (isMouseOver(width / 2 + 100, 400, 150, 50)) {
      playerChoose(SMOOTH);
    }
    return;
  }

  // --- Situation screen ---
  if (gameState === STATE_SITUATION) {
    // If left option is full-canvas opt7:
    if (currentOptions[0] === opt7) {
      // small overlay on bottom-right for the other option:
      if (
        currentOptions[1] &&
        isMouseOver(width - 120, height - 120, 200, 200)
      ) {
        handleOptionSelection(currentOptions[1]);
      } else {
        // anywhere else selects the full-canvas option
        handleOptionSelection(currentOptions[0]);
      }
    }
    // If right option is full-canvas opt7:
    else if (currentOptions[1] === opt7) {
      // small overlay on bottom-left for the other option:
      if (currentOptions[0] && isMouseOver(120, height - 120, 200, 200)) {
        handleOptionSelection(currentOptions[0]);
      } else {
        // anywhere else selects the full-canvas option
        handleOptionSelection(currentOptions[1]);
      }
    }
    // Normal case: two centered buttons
    else {
      if (isMouseOver(width / 2 - 100, height / 2 + 50, 240, 240)) {
        handleOptionSelection(currentOptions[0]);
      } else if (isMouseOver(width / 2 + 100, height / 2 + 50, 240, 240)) {
        handleOptionSelection(currentOptions[1]);
      }
    }
    return;
  }

  // --- End screen ---
  if (gameState === STATE_END) {
    if (isMouseOver(width / 2, height - 50, 150, 50)) {
      console.log("Play Again button clicked (mousePressed)");
      resetGame(); // resets immediately; draw() will show start screen next frame
    }
    return;
  }
}

// Helper function to check if the mouse is over a centered rectangle
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
