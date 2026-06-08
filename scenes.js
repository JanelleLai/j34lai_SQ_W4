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

// Function to draw the initial choice screen
function drawStartScreen() {
  if (scene1Bg) {
    background(scene1Bg); // Use the image if it is loaded
  } else {
    background(200); // Fallback to a gray background if the image is not loaded
    console.log("scene1Bg is not loaded");
  }
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Welcome to the Enchanted Forest!", width / 2, height / 2 - 50);
  textSize(24);
  text("Choose your path:", width / 2, height / 2);

  // Draw buttons for choices
  drawButton("ROUGH", width / 2 - 100, height / 2 + 50);
  drawButton("SMOOTH", width / 2 + 100, height / 2 + 50);
}

// Function to handle the ROUGH choice
function handleRoughChoice() {
  currentSituation = random([sitA1, sitA2]); // Randomly select sitA1 or sitA2
  if (currentSituation === sitA1) {
    currentOptions = [opt1, opt2]; // Options for sitA1
  } else {
    currentOptions = [opt3, opt4]; // Options for sitA2
  }
  gameState = "situation";
}

// Function to handle the SMOOTH choice
function handleSmoothChoice() {
  currentSituation = random([sitB1, sitB2]); // Randomly select sitB1 or sitB2
  if (currentSituation === sitB1) {
    currentOptions = [opt5, opt6]; // Options for sitB1
  } else {
    currentOptions = [opt7, opt8]; // Options for sitB2
  }
  gameState = "situation";
}

// Function to draw the situation screen
function drawSituationScreen() {
  background(currentSituation); // Set the current situation background

  // Display the options as buttons
  drawImageButton(currentOptions[0], width / 2 - 100, height / 2 + 50);
  drawImageButton(currentOptions[1], width / 2 + 100, height / 2 + 50);
}

// Function to handle option selection
function handleOptionSelection(option) {
  let endingImage;
  switch (option) {
    case opt1:
      endingImage = end1;
      break;
    case opt2:
      endingImage = end2;
      break;
    case opt3:
      endingImage = end3;
      break;
    case opt4:
      endingImage = end4;
      break;
    case opt5:
      endingImage = end5;
      break;
    case opt6:
      endingImage = end6;
      break;
    case opt7:
      endingImage = end7;
      break;
    case opt8:
      endingImage = end8;
      break;
  }
  drawEndingScreen(endingImage);
  gameState = "end";
}

// Function to draw the ending screen
function drawEndingScreen(endingImage) {
  imageMode(CENTER);
  image(endingImage, width / 2, height / 2, 300, 300);
  drawButton("Play Again", width / 2, height - 50);
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

// Helper function to draw image buttons
function drawImageButton(img, x, y) {
  imageMode(CENTER);
  image(img, x, y, 240, 240);
}
