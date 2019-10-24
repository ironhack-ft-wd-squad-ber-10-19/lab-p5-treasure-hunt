const game = new Game();
const player1 = new Player(0, 0);
const player2 = new Player(WIDTH - SQUARE_SIDE, WIDTH - SQUARE_SIDE);
const treasure = new Treasure();

function preload() {
  player1.preload();
  player2.preload();
  treasure.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  push();
  tint(150, 150, 150);
  player1.draw();
  pop();
  player2.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // move left
    player1.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    // move right
    player1.moveRight();
  } else if (keyCode === UP_ARROW) {
    // move up
    player1.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    // move down
    player1.moveDown();
  }
  if (keyCode === LEFT_ARROW_A) {
    // move left
    player2.moveLeft();
  } else if (keyCode === RIGHT_ARROW_D) {
    // move right
    player2.moveRight();
  } else if (keyCode === UP_ARROW_W) {
    // move up
    player2.moveUp();
  } else if (keyCode === DOWN_ARROW_S) {
    // move down
    player2.moveDown();
  }
}
