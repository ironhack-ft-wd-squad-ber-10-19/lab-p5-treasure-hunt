const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure(100, 100);

function preload() {
  game.preload();
  treasure.setRandomPosition();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  player.render();
  player.keyPressed();
  game.drawGrid();
  treasure.render();
}

