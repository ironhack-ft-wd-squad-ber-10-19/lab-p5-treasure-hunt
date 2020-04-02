const game = new Game();

let img;
function preload() {
  img = loadImage("assets/character-down.png");
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  newPlayer.drawPlayer();
}

function keyPressed(){
  clear();
  if (keyCode === UP_ARROW){
    newPlayer.moveUp();
  }
  if (keyCode === DOWN_ARROW){
    newPlayer.moveDown();
  }
  if (keyCode === LEFT_ARROW){
    newPlayer.moveLeft();
  }
  if (keyCode === RIGHT_ARROW){
    newPlayer.moveRight();
  }
}
