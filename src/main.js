const game = new Game();

function preload(){
  game.preloadGame()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame()
}

function draw() {
  game.drawGame();
}

function keyPressed() {
  if (keyCode === 38) {
    console.log('move up')
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
  if (keyCode === 37) {
    game.player.moveLeft();
  }

  if (keyCode === 39) {
    game.player.moveRight();
  }
}