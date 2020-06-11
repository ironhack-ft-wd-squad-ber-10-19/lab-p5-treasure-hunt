const game = new Game();
const micko = new Player(400, 400);
const gold = new Treasure()


function preload() {
  mickoImg = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  micko.drawPlayer();
  gold.drawTreasure();
}

function keyPressed() {
  if (keyCode == 38) {
    micko.moveUp();
  }
  if (keyCode == 40) {
    micko.moveDown();
  }
  if (keyCode == 37) {
    micko.moveLeft();
  }
  if (keyCode == 39) {
    micko.moveRight();
  }
  if (keyCode == 67) {
      micko.reset();
  }
}


