

const game = new Game();

let playerImg;
const player = new Player(1,5);

let treasureImg;
const treasure = new Treasure();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  playerImg = loadImage('assets/character-down.png');
  treasureImg = loadImage('assets/treasure.png');
  treasure.setRandomPosition();
}

function keyPressed() {
  console.log('this is a key', keyCode);
  if (keyCode === 38){
    player.moveUp();
  }
  if (keyCode === 40) {
    player.moveDown();
  }
  if (keyCode === 37) {
    player.moveLeft();
  }
  if (keyCode === 39) {
    player.moveRight();
  }
}

function draw() {
  clear();
  game.drawGrid();
  treasure.draw(treasureImg);
  player.draw(playerImg);
  
}

