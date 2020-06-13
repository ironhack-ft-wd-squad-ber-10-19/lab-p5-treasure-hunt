const game = new Game();
//variables to store graphics
let playerFront;
let playerLeft;
let playerRight;
let playerBack;
let treasureImg;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

//preload graphics
function preload() {
  playerFront=loadImage("assets/character-down.png")
  playerBack=loadImage("assets/character-up.png")
  playerLeft=loadImage("assets/character-left.png")
  playerRight=loadImage("assets/character-right.png")
  treasureImg=loadImage("assets/treasure.png")
}

//for some reason player must be drawn before grid (???)
function draw() {
  clear();
  game.player.drawPlayer();
  game.treasure.drawTreasure();
  game.drawGrid();
}

//moving the player
function keyPressed() {
  if (keyCode==37) {
    game.player.moveLeft();
  }
  if (keyCode==39) {
    game.player.moveRight();
  }
  if (keyCode==38) {
    game.player.moveUp();
  }
  if (keyCode==40) {
    game.player.moveDown();
  }
}