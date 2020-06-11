const game = new Game();
const player = new Player(100,100);
//const player = new Player(0,0);

function preload() {
  
playerImg = loadImage("assets/character-down.png");

}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  
}

function keyPressed() {
  if (keyCode == 38) {
    player.moveUp();
  }
  if (keyCode == 40) {
    player.moveDown();
  }
  if (keyCode == 37) {
    player.moveLeft();
  }
  if (keyCode == 39) {
    player.moveRight();
  }
  if (keyCode == 67) {
    player.reset();
  }
}


