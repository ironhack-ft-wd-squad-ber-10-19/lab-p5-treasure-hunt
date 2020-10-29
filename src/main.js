const game = new Game();
const player= new Player(0,0);
const treasure= new Treasure();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}

function preload(){
  player.preload();
  treasure.preload();
  treasure.setRandomPosition();
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
  if(player.row===treasure.row&&player.col===treasure.col)
  treasure.setRandomPosition();
}

function keyPressed() {
  if (keyCode === 37) player.moveLeft();
  if (keyCode === 39) player.moveRight();
  if (keyCode === 38) player.moveUp();
  if (keyCode === 40) player.moveDown();
}




