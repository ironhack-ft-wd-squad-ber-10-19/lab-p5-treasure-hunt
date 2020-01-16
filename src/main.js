const game = new Game();

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
  if (keyCode === 38) {
    player.moveUp();
  } else if (keyCode === 40) {
    player.moveDown();
  } else if (keyCode === 39) {
    player.moveRight();
  } else if (keyCode === 37) {
    player.moveLeft();
  }
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
  }
}
