const game = new Game();
const player = new Player(0,0);
const treasure = new Treasure();

function preload(){
  this.playerImage = loadImage('/assets/character-down.png')
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player.preLoadPlayer();
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
}

function keyPressed() {
  if (keyCode === 38) player.moveUp();
  if (keyCode === 40) player.moveDown();
  if (keyCode === 37) player.moveLeft();
  if (keyCode === 39) player.moveRight();
}
