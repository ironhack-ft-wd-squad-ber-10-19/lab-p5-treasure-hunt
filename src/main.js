const game = new Game();
let player = new Player();

function preload(){
  game.preloadGame()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame()
}

function draw() {
  game.drawGrid();
  game.drawGame();
}

function keyPressed() {
  clear()
  if (keyCode === 38) {
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