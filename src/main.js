const game = new Game();
const player = new Player();
const treasure = new Treasure();
const sound = new Sound();

function preload(){
  player.preloadPlayer();
  treasure.setRandomPosition();
  treasure.preloadTreasure();
  sound.preloadSound();
}

function setup() {
  let canvas = createCanvas(HEIGHT, WIDTH);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
  if (player.col === treasure.col && player.row === treasure.row){
    sound.sound.play();
    treasure.setRandomPosition();
  }
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
