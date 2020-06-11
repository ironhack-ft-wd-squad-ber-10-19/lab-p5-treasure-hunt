const game = new Game();
const player = new Player(2, 2);
const treasure = new Treasure();

function preload() {
  player.img = loadImage('assets/character-down.png');
  treasure.prize = loadImage('assets/treasure.png');
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
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
}
