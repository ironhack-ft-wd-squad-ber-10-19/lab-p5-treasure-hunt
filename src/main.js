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
  clear()
  game.drawGrid();
  game.drawGame()
}

function keyPressed() {
  // clear()
  if (keyCode === 38) {
    game.player2.moveUp();
  }
  if (keyCode === 40) {
    game.player2.moveDown();
  }
  if (keyCode === 37) {
    game.player2.moveLeft();
  }

  if (keyCode === 39) {
    game.player2.moveRight();
  }
  clear()
  if (keyCode === 87) {
    game.player1.moveUp();
  }
  if (keyCode === 83) {
    game.player1.moveDown();
  }
  if (keyCode === 65) {
    game.player1.moveLeft();
  }

  if (keyCode === 68) {
    game.player1.moveRight();
  }
}
