const game = new Game();
const player1 = new Player1(0, 0);
const player2 = new Player2(WIDTH - WIDTH / 10, 0)
const treasure1 = new Treasure()

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure1.setRandomPosition();
}

function draw() {
  background('pink');
  game.drawGrid();
  player1.draw();
  player2.draw();
  treasure1.drawTreasure();
  game.collisionDetection();
}

function keyPressed() {
  // PLAYER 1's KEYS
  if (keyCode === 37 && player1.row > 0) {
    // move left
    player1.moveLeft();
  } else if (keyCode === 39 && player1.row < (WIDTH - WIDTH / 10)) {
    // move right
    player1.moveRight();
  } else if (keyCode === 38 && player1.col > 0) {
    // move up
    player1.moveUp();
  } else if (keyCode === 40 && player1.col < (HEIGHT - HEIGHT / 10)) {
    // move down
    player1.moveDown();
  }
  // PLAYER 2's KEYS
  if (keyCode === 65 && player2.row > 0) {
    // move left
    player2.moveLeft();
  } else if (keyCode === 68 && player2.row < (WIDTH - WIDTH / 10)) {
    // move right
    player2.moveRight();
  } else if (keyCode === 87 && player2.col > 0) {
    // move up
    player2.moveUp();
  } else if (keyCode === 83 && player2.col < (HEIGHT - HEIGHT / 10)) {
    // move down
    player2.moveDown();
  }
}