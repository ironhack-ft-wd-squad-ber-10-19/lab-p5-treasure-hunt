const game = new Game();
let newPlayer = new Player(0,0);
let newTreasure = new Treasure(100,100);

let img;
let treasure;
function preload() {
  img = loadImage("assets/character-down.png");
  treasure = loadImage("assets/treasure.png");
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  newPlayer.drawPlayer();
  newTreasure.drawTreasure();
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
