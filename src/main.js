const game = new Game();
const player = new Player(0,0);
const player2 = new Player2(0,9);
const treasure = new Treasure();

function preload(){
  player.preLoadPlayer();
  player2.preLoadPlayer2();
  treasure.preLoadTreasure();
  treasure.setRandomPosition();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
 
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  player2.drawPlayer2();
  treasure.drawTreasure();
}

function keyPressed() {

  if (keyCode === 87) player.moveUp();
  if (keyCode === 83) player.moveDown();
  if (keyCode === 65) player.moveLeft();
  if (keyCode === 68) player.moveRight();



  if (keyCode === 38) player2.moveUp();
  if (keyCode === 40) player2.moveDown();
  if (keyCode === 37) player2.moveLeft();
  if (keyCode === 39) player2.moveRight();
}
