const game = new Game();
const player = new Player(400, 400);
const gold = new Treasure()


function preload() {
  characterImg = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  gold.drawTreasure();
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