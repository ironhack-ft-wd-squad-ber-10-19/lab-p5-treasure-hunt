const game = new Game();
const player1 = new Player();
const player2 = new Player();
const treasure = new Treasure();
let characterPic;
let treasurePic;

function preload() {
  characterPic = loadImage("assets/character-down.png");
  treasurePic = loadImage("assets/treasure.png");
}

// Write the draw method in the Player class that should display the player on the canvas, based on its col and row.

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
}

function draw() {
  clear();
  game.drawGrid();
  player1.draw();
  player2.draw();
  treasure.drawTreasure();
  treasure.gotTreasure();
}

function keyPressed() {
  // Player 1 controls
  if (keyCode === 37) {
    player1.moveLeft();
  }

  if (keyCode === 39) {
    player1.moveRight();
  }

  if (keyCode === 40) {
    player1.moveDown();
  }

  if (keyCode === 38) {
    player1.moveUp();
  }

  // Player 2 controls
  if (keyCode === 88) {
    player2.moveLeft();
  }

  if (keyCode === 86) {
    player2.moveRight();
  }

  if (keyCode === 67) {
    player2.moveDown();
  }

  if (keyCode === 68) {
    player2.moveUp();
  }
}
