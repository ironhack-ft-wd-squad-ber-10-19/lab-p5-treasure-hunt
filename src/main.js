const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload() {
  console.log("Preload");
  // loadImage(path to the actual image)
  img = loadImage("assets/character-down.png");
  img2 = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  treasure.setRandomPosition();
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.draw();
}

function keyPressed() {
  if (keyCode === 37) {
    player.moveLeft();
  } else if (keyCode === 39) {
    player.moveRight();
  } else if (keyCode === 40) {
    player.moveDown();
  } else if (keyCode === 38) {
    player.moveUp();
  }
}
