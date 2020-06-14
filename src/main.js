const game = new Game();

let characterDownImg;
let characterLeftImg;
let characterRightImg;
let characterUp;
let treasureImageImg;

function preload() {
  characterDownImg = loadImage("assets/character-down.png");
  characterLeftImg = loadImage("assets/character-left.png");
  characterRightImg = loadImage("assets/character-right.png");
  characterUpImg = loadImage("assets/character-up.png");
  treasureImg = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGame();
}

function keyPressed() {
  if (keyCode === 38 && game.player1.row > 0) {
    game.player1.moveUp();
  } else if (keyCode === 40 && game.player1.row < WIDTH - SQUARE_SIDE) {
    game.player1.moveDown();
  } else if (keyCode === 39 && game.player1.col < WIDTH - SQUARE_SIDE) {
    game.player1.moveRight();
  } else if (keyCode === 37 && game.player1.col > 0) {
    game.player1.moveLeft();
  }
  if (keyCode === 87 && game.player2.row > 0) {
    game.player2.moveUp();
  } else if (keyCode === 83 && game.player2.row < WIDTH - SQUARE_SIDE) {
    game.player2.moveDown();
  } else if (keyCode === 68 && game.player2.col < WIDTH - SQUARE_SIDE) {
    game.player2.moveRight();
  } else if (keyCode === 65 && game.player2.col > 0) {
    game.player2.moveLeft();
  }
}