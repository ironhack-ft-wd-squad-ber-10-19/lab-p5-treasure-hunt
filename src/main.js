const game = new Game();

function preload() {
  game.preLoadGame();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame();
}

function draw() {
  game.drawGrid();
  game.drawGame();
}

function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    game.player.col -= 100;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    game.player.col += 100;
  }
  if (keyIsDown(UP_ARROW)) {
    game.player.row -= 100;
  }
  if (keyIsDown(DOWN_ARROW)) {
    game.player.row += 100;
  }
}



