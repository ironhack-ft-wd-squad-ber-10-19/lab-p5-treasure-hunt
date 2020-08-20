const game = new Game();


function preload() {
  game.preloadGame();
}
 
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame()
}

function draw() {
  game.drawGrid();
  game.drawGame()
}

function keyPressed() {
  clear()
  if (keyCode === 38) {
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
