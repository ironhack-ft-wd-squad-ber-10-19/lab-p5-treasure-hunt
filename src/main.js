const game = new Game();
const player = new Player(SQUARE_SIDE,SQUARE_SIDE);
const treasure = new Treasure();
let characterUp;
let characterDown;
let characterRight;

function preload() {
  
playerImg = loadImage("assets/character-down.png");
treasureImg = loadImage("assets/treasure.png");
characterUp = loadImage("assets/character-up.png");
characterDown = playerImg;
characterRight = loadImage("assets/character-right.png");
characterLeft = loadImage("assets/character-left.png");

}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
  
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


