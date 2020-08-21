const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  // player.setup();
  game.setup();
}

function draw() {
  game.drawGrid();
}
