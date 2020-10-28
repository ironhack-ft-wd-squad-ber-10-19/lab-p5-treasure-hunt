const game = new Game();
const player = new Player();
const treasure = new Treasure();


function setup() {
  let canvas = createCanvas(HEIGHT, WIDTH);
  canvas.parent("canvas");
}

function preload(){
  player.preload();
  treasure.setRandomPosition();
  treasure.preload();
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
}

function keyPressed(){
  if (keyCode === 40) {
    player.moveDown();
  }
  if (keyCode === 38) {
   player.moveUp();
  }
  if (keyCode === 37) {
    player.moveLeft();
  }
  if (keyCode === 39) {
    player.moveRight();
  }
}
