const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload() {
  player.preLoadPlayer();
  treasure.preLoadTreasure();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player.setupPlayer();
  // treasure.setupTreasure();
  treasure.setRandomPosition();
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    player.moveLeft();
    win()
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.moveRight();
    win()
  }
  if (keyIsDown(UP_ARROW)) {
    player.moveUp();
    win()
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.moveDown();
    win()
  }
}

function win() {
  let distance = dist(player.col, player.row, treasure.col, treasure.row);
  if (distance === 0) {
    setup();
    draw();
  }
}
