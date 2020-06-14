const game = new Game();

let characterDown;
let characterLeft;
let characterRight;
let characterUp;

function preload() {
  characterDown = loadImage("assets/character-down.png");
  characterLeft = loadImage("assets/character-left.png");
  characterRight = loadImage("assets/character-right.png");
  characterUp = loadImage("assets/character-up.png");
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
}