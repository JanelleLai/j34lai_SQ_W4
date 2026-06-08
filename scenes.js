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

// Declare variables for all images
let scene1Bg, sitA1, sitA2, sitB1, sitB2;
let opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8;
let end1, end2, end3, end4, end5, end6, end7, end8;

// globals for active situation/options/ending
let currentSituation = null;
let currentOptions = [];
let currentEndingImage = null;

function preload() {
  // Load scene and situation images
  scene1Bg = loadImage("assets/images/Scene1.png");
  sitA1 = loadImage("assets/images/SitA1.PNG");
  sitA2 = loadImage("assets/images/SitA2.PNG");
  sitB1 = loadImage("assets/images/SitB1.PNG");
  sitB2 = loadImage("assets/images/SitB2.PNG");

  // Load option images
  opt1 = loadImage("assets/images/Opt1.PNG");
  opt2 = loadImage("assets/images/Opt2.PNG");
  opt3 = loadImage("assets/images/Opt3.PNG");
  opt4 = loadImage("assets/images/Opt4.PNG");
  opt5 = loadImage("assets/images/Opt5.PNG");
  opt6 = loadImage("assets/images/Opt6.PNG");
  opt7 = loadImage("assets/images/Opt7.PNG");
  opt8 = loadImage("assets/images/Opt8.PNG");

  // Load ending images
  end1 = loadImage("assets/images/End1.PNG");
  end2 = loadImage("assets/images/End2.PNG");
  end3 = loadImage("assets/images/End3.PNG");
  end4 = loadImage("assets/images/End4.PNG");
  end5 = loadImage("assets/images/End5.PNG");
  end6 = loadImage("assets/images/End6.PNG");
  end7 = loadImage("assets/images/End7.PNG");
  end8 = loadImage("assets/images/End8.PNG");
}

// Draw the initial choice screen
function drawStartScreen() {
  // draw background as an image to avoid duplicate top-left artifacts
  if (scene1Bg) {
    imageMode(CORNER);
    image(scene1Bg, 0, 0, width, height);
  } else {
    background(200);
  }

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Welcome to the Enchanted Forest!", width / 2, 100);
  textSize(24);
  text("Choose your path:", width / 2, height / 2);

  // Draw buttons for choices
  drawButton("ROUGH", width / 2 - 100, 400);
  drawButton("SMOOTH", width / 2 + 100, 400);
}

/// Handle the ROUGH choice
function handleRoughChoice() {
  currentSituation = random([sitA1, sitA2]); // Randomly select sitA1 or sitA2
  if (currentSituation === sitA1) {
    currentOptions = [opt1, opt2]; // Options for sitA1
  } else {
    currentOptions = [opt3, opt4]; // Options for sitA2
  }
  gameState = STATE_SITUATION;
}

// Handle the SMOOTH choice
function handleSmoothChoice() {
  currentSituation = random([sitB1, sitB2]); // Randomly select sitB1 or sitB2
  if (currentSituation === sitB1) {
    currentOptions = [opt5, opt6]; // Options for sitB1
  } else {
    currentOptions = [opt7, opt8]; // Options for sitB2
  }
  gameState = STATE_SITUATION;
}

// Draw the situation screen
function drawSituationScreen() {
  if (currentSituation) {
    imageMode(CORNER);
    image(currentSituation, 0, 0, width, height);
  } else {
    background(150);
  }

  const sizeA = currentOptions[0] === opt7 ? 800 : 450;
  const sizeB = currentOptions[1] === opt7 ? 800 : 450;

  // Display the options as image-buttons
  drawImageButton(currentOptions[0], width / 2 - 100, height / 2 + 50);
  drawImageButton(currentOptions[1], width / 2 + 100, height / 2 + 50);
}

// Handle option selection: set global ending image and change state
function handleOptionSelection(option) {
  switch (option) {
    case opt1:
      currentEndingImage = end1;
      break;
    case opt2:
      currentEndingImage = end2;
      break;
    case opt3:
      currentEndingImage = end3;
      break;
    case opt4:
      currentEndingImage = end4;
      break;
    case opt5:
      currentEndingImage = end5;
      break;
    case opt6:
      currentEndingImage = end6;
      break;
    case opt7:
      currentEndingImage = end7;
      break;
    case opt8:
      currentEndingImage = end8;
      break;
    default:
      console.error("Unknown option in handleOptionSelection:", option);
      currentEndingImage = null;
      return;
  }
  gameState = STATE_END;
}

// Draw the ending screen using the global currentEndingImage
function drawEndingScreen() {
  imageMode(CENTER);
  if (currentEndingImage) {
    image(currentEndingImage, width / 2, height / 2, 300, 300);
  } else {
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Ending image not found", width / 2, height / 2);
  }
  drawButton("Play Again", width / 2, height - 50);
}

// Helper: draw a rectangular button
function drawButton(label, x, y) {
  push();
  rectMode(CENTER);
  fill(200);
  rect(x, y, 150, 50, 10);
  fill(0);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x, y);
  pop();
}

// Helper: draw an image as a centered button (sizes must match mouse checks)
function drawImageButton(img, x, y) {
  if (!img) return;
  imageMode(CENTER);
  image(img, x, y, 240, 240); // button image size
}
