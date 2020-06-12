const game = new Game();
let mickoImg;
let treasureImg;
let mickoImgUp;
let mickoImgDown;
let mickoImgLeft;
let mickoImgRight;

function preload() {
  mickoImg = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
  mickoImgDown = loadImage("assets/character-down.png");
  mickoImgUp = loadImage("assets/character-up.png");
  mickoImgLeft = loadImage("assets/character-left.png");
  mickoImgRight = loadImage("assets/character-right.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup();
}

function draw() {
  // clear();
  game.drawGrid();
  game.gold.drawTreasure();
  game.micko.drawPlayer();
}

// Movement functions executed on a key press
function keyPressed() {
  if (keyCode == 38) {
    game.micko.moveUp();
  }
  if (keyCode == 40) {
    game.micko.moveDown();
  }
  if (keyCode == 37) {
    game.micko.moveLeft();
  }
  if (keyCode == 39) {
    game.micko.moveRight();
  }
  if (keyCode == 67) {
      game.micko.reset();
  }
}


