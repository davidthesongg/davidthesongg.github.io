let score = 0;
let highScore = 0;
let level = 1;
let misses = 0;
let teleportTime = 2000; // milliseconds
let circleX;
let circleY;
const canvasWidth = 500;
const canvasHeight = 500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // Set up the circle position
  circleX = random(width);
  circleY = random(height);

  // Set text size and alignment
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  circle(circleX, circleY, 50);
  text(`Score: ${score}`, 70, 30);
  text(`Level: ${level}`, 250, 30);
  text(`Misses: ${misses}`, 430, 30);

  const d = dist(circleX, circleY, mouseX, mouseY);
  if (d < 50) {
    score++;
    teleportCircle();
  } else if (misses >= 5) {
    gameOver();
  }

  if (millis() > teleportTime) {
    misses++;
    teleportCircle();
  }
}

function teleportCircle() {
  circleX = random(width);
  circleY = random(height);

  teleportTime = millis() + (2000 - (level - 1) * 200);
  
  if (score > 0 && score % 5 == 0) {
    level++;
  }
}

function gameOver() {
  // Set the high score if necessary
  if (score > highScore) {
    highScore = score;
  }

  background(220);
  text("Game Over", width / 2, height / 2 - 30);
  text(`Score: ${score}`, width / 2, height / 2);
  text(`High Score: ${highScore}`, width / 2, height / 2 + 30);
  text("Press anywhere to start again", width / 2, height / 2 + 60);
}

function mouseClicked() {
  if (misses >= 5) {
    score = 0;
    level = 1;
    misses = 0;
    teleportTime = 2000;
    teleportCircle();
  } 
}
