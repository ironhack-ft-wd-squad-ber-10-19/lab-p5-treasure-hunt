const game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame();
}

function draw() {
  game.drawGrid();
}



