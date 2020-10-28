const game = new Game();
const treasure = new Treasure()
const player = new Player(0,0);

function preload(){
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.preload()
  player.preload()
}

function draw() {
  clear();
  game.drawGrid();
  treasure.draw();
  player.draw();
}

function keyPressed() {
  if (keyCode === 38) player.moveUp();
  if (keyCode === 40) player.moveDown();
  if (keyCode === 37) player.moveLeft();
  if (keyCode === 39) player.moveRight();
}

