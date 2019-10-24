const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload() {
  player.preload();
  treasure.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // move left
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    // move right
    player.moveRight();
  } else if (keyCode === UP_ARROW) {
    // move up
    player.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    // move down
    player.moveDown();
  }
}
